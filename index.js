
    AOS.init({ duration:1000, once:true });

    const counters = document.querySelectorAll('.counter');
    const startCounter = (el) => {
        const target = +el.getAttribute('data-target');
        let count = 0;
        const duration = 2000;
        const increment = target / (duration/16);
        const update = () => {
            count += increment;
            if(count < target){
                el.innerText = Math.floor(count);
                requestAnimationFrame(update);
            } else {
                el.innerText = target + (target>20 ? "+" : "");
            }
        }
        update();
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold:0.5 });

    counters.forEach(c => observer.observe(c));

