export const hasSevenDigitsRegex = /.{7,}$/;
export const hasUpperAndLowerCaseRegex = /(?=.*[a-z])(?=.*[A-Z])/;
export const hasNumberRegex = /[0-9]/;
export const hasSpecialCharactersRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;
export const hslPasswordPatternWithSpecialCharacters =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$&+,:;=?@#|'<>.^*()%!-])(?=.*^[^\\s]).{7,}$/gm;

export const hslPasswordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*^[^\\s]).{7,}$/gm;

export function passwordsAreSame(
  password: string,
  passwordConfirmation: string,
): boolean {
  return password === passwordConfirmation;
}
