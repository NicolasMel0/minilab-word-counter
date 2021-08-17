const count = document.getElementById("count");
const input = document.getElementById("input");


input.addEventListener('keyup', function(i){
  wordCounter(i.target.value);
});

function wordCounter(text) {
  var text = input.value;
  let wordCount = 0;
  for (let i = 0; i <= text.length; i++) {
    if (text.charAt(i) == ' ') {
      wordCount++;
    }
  }
  count.innerText = wordCount;
}

// estou tentando colocar o botão até amanhã atualizo o git