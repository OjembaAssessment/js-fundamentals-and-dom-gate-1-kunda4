const myPara = document.getElementById("#myParagraph");

function highlighterWord(arr) {
  let strArr = arr[0].split(" ");
  for (let i in strArr) {
    myPara = Array.from(matches).forEach((m, index) =>
      m.replaceWith(
        "<span style='background-color: yellow; text-decoration'>" +
          `${index > 0 ? "" : ""}${m}</span>`
      )
    );
  }
}

console.log("Exercise 1 - Word Highlighter");
