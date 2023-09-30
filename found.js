const showPopupButton = document.getElementById('show-popup');
const popupBox = document.getElementById('popup-box');
const closePopupButton = document.getElementById('close-popup');

showPopupButton.addEventListener('click', () => {
    popupBox.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popupBox.style.display = 'none';
});


// Close the popup if the user clicks outside of it
