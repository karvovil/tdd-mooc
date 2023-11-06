export function game(str) {
  const lreChars = ['1','2','3','4','5','6','7','8','9','0','b','o','$']
  const strToCheck = str.split('\n')[0];
  console.log(strToCheck);
  if ( strToCheck.match(/(?![bo$1234567890!])./g) ){
    throw new Error('not valid')
  }
  return '';
}
