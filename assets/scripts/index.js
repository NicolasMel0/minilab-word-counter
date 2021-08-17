let count = document.getElementById('count');
let input = document.getElementById('input')

input.addEventListener('keyup', function(i){
  wordCounter(i.target.value);
});

function wordCounter(text) {
  let text = input.value;
  let wordCount = 0;
  for (var i = 0; i <= text.length; i++) {
    if (text.charAt(i) == ' ') {
      wordCount++;
    }
  }
  count.innerText = wordCount;
}