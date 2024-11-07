const str = 'chuck-chat chat.chuckcatron.com';
console.log('fuck');
const text = document.getElementById('text');
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
