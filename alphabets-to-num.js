function alphabetPosition(text) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const newarr = [];
  for (let i of text) {
    let b = i.toLowerCase();
    if (alphabets.includes(b)) {
      newarr.push(alphabets.indexOf(b) + 1);
    }
  }
  return newarr.join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
