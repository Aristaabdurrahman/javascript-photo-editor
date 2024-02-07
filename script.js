let blur = document.getElementById("blur")
let sepia = document.getElementById("sepia")
let contrast = document.getElementById("contrast")
let hue = document.getElementById("hue-Rotate")
let noflip = document.getElementById("no-flip")
let flipH = document.getElementById("flip-horizontal")
let flipV = document.getElementById("flip-vertical")
let imgbtn = document.getElementById("img-upload")
let imgshow = document.getElementById("img-preview-content")

function reset(){
    blur.value = "0";
    contrast.value = "100";
    sepia.value = "0";
    hue.value = "0";
    noflip.checked = true;
    addFilter();
    flipImg();
}

imgbtn.onchange = () => {
    reset();
    document.querySelector(".img-preview").style.display = "block";
    let reader = new FileReader();
    reader.readAsDataURL(imgbtn.files[0]);
    reader.onload = () => {
        imgshow.setAttribute("src", reader.result);
    }
}

let range = document.querySelectorAll(".filter input[type='range']");
range.forEach(rang => {
    rang.addEventListener("input", addFilter);
});

function addFilter() {
    imgshow.style.filter = `blur(${blur.value}px) contrast(${contrast.value}%) hue-rotate(${hue.value}deg) sepia(${sepia.value}%)`;
}

let flips = document.querySelectorAll(".flip-filter input[type='radio']");
flips.forEach(flip => {
    flip.addEventListener("click", flipImg);
});

function flipImg() {
    if (flipH.checked) {
        imgshow.style.transform = "scaleX(-1)";
    }
    else if (flipV.checked) {
        imgshow.style.transform = "scaleY(-1)";
    }
    else {
        imgshow.style.transform = "scale(1,1)";
    }
}