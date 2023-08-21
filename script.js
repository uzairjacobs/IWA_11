// Order 1
const root1 = document.querySelector('[data-key="order1"]');
const biscuits1 = root1.querySelector('.biscuits .count');
const donuts1 = root1.querySelector('.donuts .count');
const pancakes1 = root1.querySelector('.pancakes .count');
const status1 = root1.querySelector('.status dd');

biscuits1.textContent = parseInt(root1.getAttribute('data-biscuits'));
donuts1.textContent = parseInt(root1.getAttribute('data-donuts'));
pancakes1.textContent = parseInt(root1.getAttribute('data-pancakes'));
status1.textContent = root1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

// Order 2
const root2 = document.querySelector('[data-key="order2"]');
const biscuits2 = root2.querySelector('.biscuits .count');
const donuts2 = root2.querySelector('.donuts .count');
const pancakes2 = root2.querySelector('.pancakes .count');
const status2 = root2.querySelector('.status dd');

biscuits2.textContent = parseInt(root2.getAttribute('data-biscuits'));
donuts2.textContent = parseInt(root2.getAttribute('data-donuts'));
pancakes2.textContent = parseInt(root2.getAttribute('data-pancakes'));
status2.textContent = root2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

// Order 3
const root3 = document.querySelector('[data-key="order3"]');
const biscuits3 = root3.querySelector('.biscuits .count');
const donuts3 = root3.querySelector('.donuts .count');
const pancakes3 = root3.querySelector('.pancakes .count');
const status3 = root3.querySelector('.status dd');

biscuits3.textContent = parseInt(root3.getAttribute('data-biscuits'));
donuts3.textContent = parseInt(root3.getAttribute('data-donuts'));
pancakes3.textContent = parseInt(root3.getAttribute('data-pancakes'));
status3.textContent = root3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';
