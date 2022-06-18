export function createErrorMessage(error: string) {
  if (error.match("auth/invalid-email") !== null)
    return "Input please correct email";
  if (error.match("auth/user-not-found") !== null)
    return "The user with the entered username and password was not found";
  if (error.match("auth/wrong-password") !== null)
    return "Input please correct password";
  if (error.match("auth/weak-password") !== null)
    return "Your password must contain at least 6 characters";
  if (error.match("auth/email-already-in-use") !== null)
    return "This email is already in use";
  return `Some peoblem with your email or password ${error}`;
}
