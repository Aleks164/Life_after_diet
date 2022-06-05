export function createEmailForFB(email: string) {
  return email.replace(/[.#$\[\]]/g, "_");
}
