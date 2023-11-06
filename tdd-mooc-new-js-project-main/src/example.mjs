export function game(str) {
  const lreChars = ['1','2','3','4','5','6','7','8','9','0','b','o','$']
  if (lreChars.some(c =>  str.split("\n")[0].includes(c)) ){
    throw new Error('not valid')
  }
  return '';
}
