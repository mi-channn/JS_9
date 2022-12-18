
const button = document.getElementById('lists');

button.addEventListener('mouseover', function() {
    console.log('乗る');
});
window.addEventListener('mouseout', function() {
    console.log('外れる');
});
window.addEventListener('click', function() {
    console.log('クリック');
});
