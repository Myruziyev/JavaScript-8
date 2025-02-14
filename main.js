let texts = ["non", "banan", "mashina", "asal", "olma", "aziza", "gul"];
console.log(texts);
let nTexts = [];
let anotherTexts = [];
for (let nHarfi of texts) {
  if (nHarfi.includes("n")) {
    nTexts.push(nHarfi);
  } else {
    anotherTexts.push(nHarfi);
  }
}
console.log(nTexts, "n harfi ishtirok etgan so'zlar");
console.log(anotherTexts, "n harfi ishtirok etmagan so'zlar");
