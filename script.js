const elem = document.querySelectorAll('.rb-spot')

function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", function(e) {
        var current = this;
        for (var i = 0; i < elem.length; i++) {
          if (current != elem[i]) {
            elem[i].parentElement.classList.remove('rb-tab-active');
          } else if (current.parentElement.classList.contains('rb-tab-active') === true) {
            current.parentElement.classList.remove('rb-tab-active');
          } else {
            current.parentElement.classList.add('rb-tab-active')
          }
        }
        e.preventDefault();
      });
    };
  }
  toggleItem(document.querySelectorAll('.rb-spot'));

//   Hide & show content
const button = document.querySelector('button')
const rate = document.querySelector('#rate')
const response = document.querySelector('#response')
const voteEl = document.getElementsByClassName('rb-tab-active')
const voteSpan = document.querySelector('.vote-value')

button.addEventListener('click', function(e){
    const vote = voteEl[0].attributes[1].textContent
    response.classList.remove('hidden')
    rate.classList.add('hidden')
    voteSpan.innerHTML = vote

    e.preventDefault()

})
