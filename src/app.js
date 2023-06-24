export function fade_in(){
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            if(entry.isIntersecting) {
                console.log(entry);
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    console.log(hiddenElements);
    hiddenElements.forEach((el) => observer.observe(el));
}