function countWords() {

var text = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
var text1 = text.replace(/[.,\/;:]/g,"");
var text2=text1.replace(/\d+/g, '')
var text3 = text2.replace(/\s{2,}/g," ");


var  array = text3.split(" ");

var wordCounts = {};

// console.log(array);

for (i=0; i<array.length; i++){
var word = array[i];
if(!wordCounts[word]){
  wordCounts[word]=1;
}
else{
  wordCounts[word]++;
}
}
var wordCounts = Object.create(wordCounts);
console.log(wordCounts);
}

countWords();