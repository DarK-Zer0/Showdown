function showDiv(number) {
    var divs = document.getElementsByClassName('content');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }
    document.getElementById('div' + number).style.display = 'block';
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
}