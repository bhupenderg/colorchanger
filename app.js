let circle = document.querySelector('.circle');
circle.addEventListener('mousemove', function(e) {
    document.querySelector('body').style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 75)`;
});


// let val;

// document.querySelector('body').addEventListener('click', function(e){
//     console.log(e.offsetX);
// });
// console.log(val);