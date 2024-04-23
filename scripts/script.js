
function fixedNav(){
    let nav = document.querySelector("nav")
    let socials = document.querySelector(".nav-socials")
    let scrollValue = window.scrollY;

    if(scrollValue > 600){
        nav.style.transition = ".5s linear"
        nav.style.position = "fixed"
        nav.style.borderBottom = "1px solid #cccccc"
        nav.style.top = "0"
        nav.style.left = "1.4rem"
        nav.style.right = "1.4rem"
        nav.style.backgroundColor = "#ffffff"
        nav.style.display = 'flex';
        nav.style.justifyContent = 'center';
        nav.style.alignItems = 'center';
        nav.style.zIndex = '0'
        nav.style.paddingBottom = '1rem'
        socials.style.color = "#cccccc"
    } else {
        nav.style.border = "none"
        nav.style.position = "static"
    }
}
window.addEventListener("scroll", fixedNav)


function menuLiColor(){
    let menuItems = document.querySelectorAll(".nav-socials")
    let scrollValue = window.scrollY;

    if (scrollValue > 600){
        menuItems.forEach(item => {
          item.style.color = '#cccccc';
        });
    }
}
window.addEventListener("scroll", menuLiColor)