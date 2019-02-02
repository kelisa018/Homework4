var divIter = document.querySelector('.deepChild');
const wrapperClass = 'wrapper';

function red(div, iter) {
  setTimeout(function() {
    console.log(iter);
    console.log(div.getAttribute('class'));
    div.style.background = 'red';
    div.style.width = iter * 10 + 'px';
    div.style.height = iter * 10 + 'px';
    div.style.marginBottom = '10px';
  }, 1000 * iter);
};

var i = 1;
while((divIter.getAttribute('class') != wrapperClass) && (i < 10)) {
  red(divIter, i);
  divIter = divIter.parentNode;
  i++;
}
