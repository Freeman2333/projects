function docScroll(argument) {
    

let windowScroll = document.body.scrollTop || document.documentElement.scrollTop,
    documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
    scrolled = (windowScroll / documentHeight) * 100;

    document.querySelector(".progress-bar").style.width = scrolled + '%';

// console.log(document.documentElement.scrollHeight)
// console.log(document.documentElement.scrollTop)
// console.log(scrolled)


};




window.onscroll = function () {
    docScroll();
}


