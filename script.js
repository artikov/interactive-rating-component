const elem = document.querySelectorAll('.rb-tab')

function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", function(e) {
        var current = this;
        for (var i = 0; i < elem.length; i++) {
          if (current != elem[i]) {
            elem[i].classList.remove('rb-tab-active');
          } else if (current.classList.contains('rb-tab-active') === true) {
            current.classList.remove('rb-tab-active');
          } else {
            current.classList.add('rb-tab-active')
          }
        }
        e.preventDefault();
      });
    };
  }
  toggleItem(document.querySelectorAll('.rb-tab'));