// Your Script here.
function rot13(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      ascii = ((ascii - 65 + 13) % 26) + 65;
    }
    result += String.fromCharCode(ascii);
  }
  return result;
}