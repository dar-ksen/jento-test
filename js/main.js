(function () {

    var PHONE_LENGTH = 16;

    var validationPhone = function (place) {
        place.addEventListener('input', function () {
            if (place.value.length < PHONE_LENGTH) {
                place.setCustomValidity('Вы не заполнили номер полностью');
            } else {
                place.setCustomValidity('');
            }
        });
    };

    var feedbackPhonePlace = document.querySelector('.recall-form input[type="tel"]');
    var maskOptions = {
        mask: '+{7}(000)000-00-00'
    };

    if (feedbackPhonePlace) {
        IMask(feedbackPhonePlace, maskOptions);
        validationPhone(feedbackPhonePlace);
    }
})();