//Efeito digitar página principal
const words = ["Cantor", "Ator", "Dançarino", "Preparador Vocal"];

function typeWriter(text, i, callback) {
  if (i < text.length) {
    document.getElementById("subtitle").innerHTML += text.charAt(i);
    i++;
    setTimeout(function () {
      typeWriter(text, i, callback);
    }, 100);
  } else {
    setTimeout(callback, 1000);
  }
}

function eraseText(callback) {
  let text = document.getElementById("subtitle").innerHTML;
  let i = text.length;
  let interval = setInterval(function () {
    if (i > 0) {
      text = text.slice(0, -1);
      document.getElementById("subtitle").innerHTML = text;
      i--;
    } else {
      clearInterval(interval);
      callback();
    }
  }, 50);
}

function typeWordsInSequence(i) {
  let currentWord = words[i % words.length];
  typeWriter(currentWord, 0, function () {
    eraseText(function () {
      typeWordsInSequence(i + 1);
    });
  });
}

typeWordsInSequence(0);
