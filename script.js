let image = document.querySelectorAll("img");
let next = document.querySelector(".next");
let pre = document.querySelector(".prev");
let imgConatiner = document.querySelector(".image-container");

let imgCount = 1;

next.addEventListener("click",()=> {
    imgCount++;
    updateImage();
});

pre.addEventListener("click",()=> {
    imgCount--;
    updateImage();
});

function updateImage() {
    if( imgCount > image.length) {
        imgCount = 1;
    } else if( imgCount < 1 ) {
        imgCount = image.length;
    }
    imgConatiner.style.transform = `translateX(-${(imgCount - 1) * 500}px)`;
}