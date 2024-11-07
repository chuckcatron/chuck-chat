const str = 'chuck-chat chat.chuckcatron.com';
const text = document.getElementsByClassName('spin-text')[0];
for (let i = 0; i < str.length; i++) {
  let span = document.createElement('span');
  span.className = 'text-char';
  span.innerHTML = str[i];
  text.appendChild(span);
  console.log(str[i]);
  span.style.transform = `rotate(${11 * i}deg)`;
}
text.style.visibility = 'visible';
document.addEventListener('DOMContentLoaded', function () {});
