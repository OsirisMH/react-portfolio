export const scrollActive = (sections) => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        let sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
};

export const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 560)
        scrollUp.classList.add('show');
    else 
        scrollUp.classList.remove('show');
}