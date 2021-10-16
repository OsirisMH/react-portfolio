export const scrollFix = (element) => {
    const body = document.querySelector('body');
    const navbar = document.querySelector('#navbar');
    
    if ( window.location.hash ) {
        setTimeout( () => {
            window.scroll(0, element.offsetTop - body.scrollTop - navbar.offsetHeight - 50)
        }, 1)
    }
} 