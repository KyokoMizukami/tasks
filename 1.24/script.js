/* JavaScript DOM Exercises 01 */
const paragraph = document.querySelector("p");
const word = paragraph.innerText.split(" ");
/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/


paragraph.innerHTML = paragraph.innerText;
console.log(word);

for (let i = 0; i < word.length; i++) {
  if (word[i].length >= 8) {
    word[i] = `<span style="background-color: yellow">${word[i]}</span>`;
  }
}

paragraph.innerHTML = word.join(" ");

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const addLink = document.createElement("a");
addLink.href = "http://officeipsum.com/";
addLink.innerText = "Link";
paragraph.appendChild(addLink);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
const newContents = paragraph.innerHTML.replaceAll('.', '.<br>');
paragraph.innerHTML = newContents;

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const wordCount = word.length;
console.log(wordCount);
const heading = document.querySelector("h1");
const createP = document.createElement("p");

createP.innerText = wordCount;
heading.insertAdjacentElement("afterend", createP);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
const replace = paragraph.innerHTML
.replaceAll('?','🤔')
.replaceAll('!','😲');
paragraph.innerHTML = replace;
console.log(replace);