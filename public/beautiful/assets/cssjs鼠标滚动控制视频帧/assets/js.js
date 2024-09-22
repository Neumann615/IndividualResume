let num = 0;
const video = document.querySelector("video");

function scrollFn() {
    let num = window.pageYOffset / 800;
    video.currentTime = num;
    window.requestAnimationFrame(scrollFn);
}

window.requestAnimationFrame(scrollFn);
function updateEvent(e) {
    let timer = e.target.currentTime;
    console.log(timer)
    if (timer < 1.5) {
        document.querySelector(".introduce1").classList.add("active");
    } else {
        document.querySelector(".introduce1").classList.remove("active");
    }

    if (timer > 2.2 && timer < 3.2) {
        document.querySelector(".introduce2").classList.add("active");
    } else {
        document.querySelector(".introduce2").classList.remove("active");
    }

    if (timer > 4 && timer < 4.8) {
        document.querySelector(".introduce3").classList.add("active");
    } else {
        document.querySelector(".introduce3").classList.remove("active");
    }

    if (timer > 5.3) {
        document.querySelector(".introduce4").classList.add("active");
    } else {
        document.querySelector(".introduce4").classList.remove("active");
    }
    console.log(timer);
}

window.addEventListener('scroll', () => {
    video.addEventListener("timeupdate", updateEvent);
})
let top1 = 0;
let top2 = 0;
let timeout = null; // 定时器 

// scroll监听
document.onscroll = () => {
    clearTimeout(timeout);
    timeout = setTimeout(stopScroll, 500);
    top1 = document.documentElement.scrollTop || document.body.scrollTop;
}

function stopScroll() {
    top2 = document.documentElement.scrollTop || document.body.scrollTop;
    if (top2 == top1) {
        video.removeEventListener('timeupdate', updateEvent)
    }
}