function disemvowel(str) {
  const vowels = ["a", "i", "o", "u", "e", "A", "U", "I", "O", "E"];
  const newstr = [];
  for (let i of str) {
    if (!vowels.includes(i)) {
      newstr.push(i);
    }
  }
  str = newstr.join("");
  return str;
}
console.log(disemvowel("The sunset sets at twelve o' clock."));
