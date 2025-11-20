/* ------------------- CAROUSEL FUNCTION ------------------- */
function animation() {
    const track = document.querySelector(); // replace with actual selector
    const slider = document.querySelector(); // replace with actual selector

    // Duplicate images for seamless loop
    track.innerHTML += track.innerHTML;

    let scrollPos = 0;
    const speed = 0.5; // smaller = slower, bigger = faster

    function animate() {
        scrollPos += speed;
        if (scrollPos >= track.scrollWidth / 2) scrollPos = 0;
        track.style.transform = `translateX(-${scrollPos}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}

/* ------------------- NAVIGATION ------------------- */
function createNavBar() {
    const navBarHTML = `
        <nav>
            <div id="navLogo">
                <img src="OutlineLogo.png">
            </div>

            <div id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div id="navItems" class="hidden">
                <ul>
                    <li><a href="homeBase.html">Home</a></li>

                    <li class="dropdown">
                        <a href="about.html" class="dropbtn">About <i class="fa fa-caret-down"></i></a>
                        <div class="dropdown-content">
                            <a href="speakers.html">Speakers</a>
                            <a href="sponsors.html">Sponsors</a>
                        </div>
                    </li>

                    <li><a href="agenda.html">Agenda</a></li>
                    <li><a href="register.html" class="CTA">Register</a></li>
                </ul>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navBarHTML);
}

/* ------------------- FOOTER ------------------- */
function createFooter() {
    const footerHTML = `
        <footer>
            <section id="footerImg">
                <img src="OutlineLogo.png">
            </section>
            <section id="footerNav">
                <ul>
                    <li><a href="homeBase.html">Home</a></li>
                    <li class="dropdown">
                        <a href="about.html" class="dropbtn">About <i class="fa fa-caret-down"></i></a>
                        <div class="dropdown-content">
                            <a href="speakers.html">Speakers</a>
                            <a href="sponsors.html">Sponsors</a>
                        </div>
                    </li>
                    <li><a href="agenda.html">Agenda</a></li>
                    <li><a href="register.html" class="CTA">Register</a></li>
                </ul>
            </section>
            <section id="contacts">
                <h2>Contact Us</h2>
                <p><a href="tel:+4733378901">+47 333 78 901</a></p>
                <p><a href="mailto:someone@example.com">someEmail@gmail.com</a></p>
                <h2>Social Media</h2>
                <div class="footerSocials">
                    <a href=""><img src="Linkedin.png"></a>
                    <a href=""><img src="facebook.png"></a>
                    <a href=""><img src="Insta.png"></a>
                </div>
            </section>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

/* ------------------- FADE-IN + FADE-OUT ------------------- */
function fadeInOutEverything() {
    const elements = document.querySelectorAll('*');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        // Skip nav/footer to avoid layout issues
        if (el.closest('nav, footer') || el.hasAttribute('data-no-animate')) return;

        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        if (top < windowHeight * 0.9 && bottom > 0) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        } else {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
        }
    });
}
window.addEventListener('scroll', fadeInOutEverything);
window.addEventListener('load', fadeInOutEverything);

/* ------------------- MOBILE NAV / HAMBURGER ------------------- */
function initNav() {
    const hamburger = document.getElementById('hamburger');
    const navItems = document.getElementById('navItems');

    if (!hamburger || !navItems) return;

    // Prevent clicks inside nav from closing menu
    navItems.addEventListener('click', (ev) => ev.stopPropagation());

    function openNav() {
        hamburger.classList.add('active');
        navItems.classList.add('open');
        document.body.classList.add('nav-open'); // lock scroll
    }

    function closeNav() {
        hamburger.classList.remove('active');
        navItems.classList.remove('open');
        document.body.classList.remove('nav-open');
    }

    function toggleNav() {
        if (navItems.classList.contains('open')) closeNav();
        else openNav();
    }

    // Toggle hamburger
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNav();
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
        if (
            navItems.classList.contains('open') &&
            !e.target.closest('#navItems') &&
            !e.target.closest('#hamburger')
        ) {
            closeNav();
        }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navItems.classList.contains('open')) closeNav();
    });

    // Close on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navItems.classList.contains('open')) closeNav();
    });

    // Mobile dropdowns act like accordions
    const mobileDropdowns = navItems.querySelectorAll('.dropdown > .dropbtn');
    mobileDropdowns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const li = btn.closest('.dropdown');
                li.classList.toggle('open');
            }
        });
    });
}

/* ------------------- ONLOAD ------------------- */
window.onload = function() {
    createNavBar();
    createFooter();
    initNav();          // must run AFTER createNavBar
    if (typeof animation === 'function') animation(); // call carousel if defined
};
