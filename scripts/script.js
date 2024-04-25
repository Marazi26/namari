
function fixedNav(){
    let nav = document.querySelector("nav")
    let socials = document.querySelector(".nav-socials")
    let scrollValue = window.scrollY;

    if(scrollValue > 700){
        
        nav.style.position = "fixed"
        nav.style.borderBottom = "1px solid #cccccc"
        nav.style.top = "0"
        nav.style.left = "0"
        nav.style.right = "0"

        nav.style.backgroundColor = "#ffffff"
        nav.style.display = 'flex';
        nav.style.justifyContent = 'center';
        nav.style.alignItems = 'center';
        nav.style.zIndex = "7"
        nav.style.paddingBottom = '1rem'
        socials.style.color = "#cccccc"

        nav.style.transitionDuration = "2s"
        nav.style.transitionTimingFunction = "ease-out-in"
        nav.style.opacity = "1"
        nav.style.visibility = "visible"
        nav.style.transform = "translateY(0)"
    } else if (scrollValue > 600) {
        nav.style.transform = "translateY(-100%)"
    }
    else{
        nav.style.position = "static"
        nav.style.border = "none"
        nav.style.border = "none"
        nav.style.position = "static"
        nav.style.transform = "translateY(0)"
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
    } else {
        menuItems.forEach(item => {
            item.style.color = '#111111';
          });
    }
}
window.addEventListener("scroll", menuLiColor)
