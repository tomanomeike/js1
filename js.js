// svarbu tvarkyngai viska sulygiuoti, kad butu lengviau suprantamas kodas
const paragraph = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
const anotherParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum cursus turpis nec placerat. Nulla congue nisi eget ipsum aliquet vehicula. Maecenas dui libero, lobortis et lorem eget, aliquam viverra augue. Suspendisse quis fermentum augue, quis hendrerit ante. Nulla facilisi. Integer pretium, mi eget sagittis auctor, sapien arcu dapibus mi."

function countWords(text) {
  const text1 = text.toLowerCase();
  const words = text1.replace(/[.,\/;:]/g,"")
                    .replace(/\d+/g, '')
                    .replace(/\s{2,}/g," ")
                    .split(" ")
            
  const wordCounts = {};

  // for (i=0; i<words.length; i++){
  //   var word = words[i];
  //   if(!wordCounts[word]){
  //     wordCounts[word]=1;
  //   }
  //   else{
  //     wordCounts[word]++;
  //   }
  // }
 
  words.forEach((word) =>{
    if(!wordCounts[word]){
      wordCounts[word]=1;
    }
    else{
      wordCounts[word]++;
    }
  })
  return wordCounts;
}
const counts = countWords(paragraph);
console.log(counts);



// Uzduotys:

// 1 - countWords funkcija turetu kaip parametra gauti `text`
// const text = "..."
// countWords(text)
// Nesvarbu koks butu tekstas, funkcijos tai neturetu itakoti. O dabar norit pakeisti teksta reiktu keisti funkcija.

// 2 - countWords(text) turetu grazinti rezultata, kad sis galetu buti naudojamas toliau.
// const counts = countWords(text);
// console.log(counts);

// 3 - vietoj `for` panaudoti forEact. words.forEach((word) => ...)

// 4 - Dabar rezultatas yra The: 1 ir the: 6; Siekamas rezultatas turetu buti the: 7
// Hint'o nepalieku, pabandyk pati paieskoti sprendimu. O jei nerasi - parasyk :)