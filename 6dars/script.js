var next = document.querySelector('.btn-next');  ;        // Object


var images = document.querySelectorAll('.slider-img img'); // Array 
console.log(images)
var i = 0;

next.onclick = function() {
    images[i].style.display = 'none'; // 6 yo'q 
    i++ // 7 
    if(i >=  images.length) {
        i = 0;
    }
    images[i].style.display = 'block';
}