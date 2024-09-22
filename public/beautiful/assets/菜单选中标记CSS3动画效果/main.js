/**
 *
 * ---------------------------------------------------------------------------
 *
 * Plugin name : Indy - CSS3 Animated Menu Indicator
 * Author : Yuldoshshayxov
 * Author URI : https://codecanyon.net/user/yuldoshshayxov
 * Version: 1.0
 *
 * ---------------------------------------------------------------------------
 *
 */
function indicatorInit(navWrapper, indicatorName, navItems) {
    const nav = document.querySelector(navWrapper);
    const indicator = document.querySelector(indicatorName);
    const items = document.querySelectorAll(navItems);

    function indicatorHandler(el) {
        /* Remove active status from all navigation link */
        items.forEach(item => {
            item.classList.remove('active');
            item.removeAttribute('style');
        });
        if(nav.classList.contains('nav1')) {
            /* Horizontal move */
            indicator.style.width = `${el.offsetWidth}px`;
            indicator.style.left = `${el.offsetLeft}px`;
            /* Changes color of indicator by attribute data-color */
            indicator.style.backgroundColor = el.getAttribute('data-color');
        } else {
            /* Vertical move */
            indicator.style.height = `${el.offsetHeight}px`;
            indicator.style.top = `${el.offsetTop}px`;
            /* Changes color of indicator by attribute data-color */
            indicator.style.backgroundColor = el.getAttribute('data-color');
        }
        /* Changes color of text by attribute data-color */
        el.classList.add('active');
        el.style.color = el.getAttribute('data-color');
    }


    items.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            indicatorHandler(e.target)
        });
        item.classList.contains('active') && indicatorHandler(item);
    });
}


setTimeout(function () {
    // Init Nav 1 - Vertical
    indicatorInit('.nav1', '.nav1 .nav-indicator', '.nav1 .nav-item');
    // Init Nav 2 - Horizontal left
    indicatorInit('.nav2', '.nav2 .nav-indicator', '.nav2 .nav-item');
    // Init Nav 3 - Horizontal right
    indicatorInit('.nav3', '.nav3 .nav-indicator', '.nav3 .nav-item');
}, 200);




