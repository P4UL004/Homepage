var listItem = document.getElementById('first-item');
var hiddenText = document.getElementById('show-project01');

listItem.addEventListener('click', function() {
    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'flex';
    } else {
        hiddenText.style.display = 'none';
    }
}) 