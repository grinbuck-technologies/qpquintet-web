import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";
import { EMAIL_REGEX, CONTACT_VALIDATION_MESSAGES } from "@/lib/validation";

/** Shape of the JSON body expected from the contact form. */
interface ContactRequestBody {
  name?: string;
  organization?: string;
  email?: string;
  message?: string;
}

/** Escapes user-supplied text before it's embedded in the notification email's HTML body. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Handles contact form submissions. Re-validates the payload server-side
 * (the form also validates client-side, but that alone can't be trusted),
 * then sends a notification email via Resend with the submitter's address
 * set as replyTo so a reply goes straight to them.
 */
export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim();
  const organization = body.organization?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return Response.json(
      { success: false, error: CONTACT_VALIDATION_MESSAGES.missingFields },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return Response.json(
      { success: false, error: CONTACT_VALIDATION_MESSAGES.invalidEmail },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return Response.json(
      { success: false, error: "Email sending is not configured." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: "QP Quintet Website <qpquintet.web@tabmonk.com>",
      to: siteConfig.contactEmail,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Organization:</strong> ${organization ? escapeHtml(organization) : "—"}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return Response.json(
        { success: false, error: "Failed to send message." },
        { status: 500 },
      );
    }
  } catch {
    return Response.json(
      { success: false, error: "Failed to send message." },
      { status: 500 },
    );
  }

  return Response.json({ success: true });
}
