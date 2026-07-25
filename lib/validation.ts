/** Basic email format check, shared so the client form and the server route can't drift apart. */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Shared error copy for the contact form's client- and server-side validation. */
export const CONTACT_VALIDATION_MESSAGES = {
  missingFields: "Name, email, and message are required.",
  invalidEmail: "Please provide a valid email address.",
} as const;
