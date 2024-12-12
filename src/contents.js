function showDiv(number, element) {
    var divs = document.getElementsByClassName('content');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }
    document.getElementById('div' + number).style.display = 'block';

    var buttons = document.getElementsByClassName('page-nav-item');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    buttons[number-1].classList.add('selected');
}

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var option = urlParams.get('option');

    if (option == '1') {
        showDiv(1);
    } else if (option == '2') {
        showDiv(2);
    } else if (option == '3') {
        showDiv(3);
    } else if (option == '4') {
        showDiv(4);
    } else if (option == '5') {
        showDiv(5);
    }

    // Create a Date object for 3:00 PM EST on a Wednesday
    var estDate = new Date();
    estDate.setUTCHours(20); // 20:00 UTC is 3:00 PM EST
    estDate.setUTCMinutes(0);
    estDate.setUTCSeconds(0);
    estDate.setUTCMilliseconds(0);

    // Adjust the day of the week to Wednesday
    while (estDate.getUTCDay() !== 3) { // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
        estDate.setUTCDate(estDate.getUTCDate() + 1);
    }
}