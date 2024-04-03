//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(){
    let element = document.getElementById('level');
    let counter = 0;

    while (element) {
        element = element.parentNode;
        counter++;
    }

    alert('The level of the element is: ' + counter);
});