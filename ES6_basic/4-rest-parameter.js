export default function returnHowManyArguments(...args) {
  let argcon = 0;

  /* eslint-disable no-unused-vars */
  for (const arg of args) {
    argcon += 1;
  }

  return argcon;
}
