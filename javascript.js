
function animation() {
    const track = document.querySelector('.sponsorCards');
    const slider = document.querySelector('.slider');

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
};

//navigation
function createNavBar() {
            const navBarHTML = `
                <nav>
                    <div id= "navLogo">
                        <img src="PilanthropyLogo.jpeg">
                    </div>
                    <div id= "navItems">
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Agenda</a>
                            </li>
                            <li>
                                <a href="" id="CTA" >Register</a>
                            </li>
                        </ul> 
                    </div>
                </nav>
            `;
    document.body.insertAdjacentHTML('afterbegin', navBarHTML);
};
//automate the footer
function createFooter() {
            const footerHTML = `
                <footer>
                    <section id="footerImg">
                        <img src="PilanthropyLogo.jpeg">
                    </section>
                    <section id="footerNav">
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li>
                                <a href="agenda.html">Agenda</a>
                            </li>
                            <li>
                                <a href="register.html">Register</a>
                            </li>
                        </ul> 
                    </section>
                    <section id="contacts">
                        <h2>Contact Us</h2>
                        <p><a href="tel:+4733378901">+47 333 78 901</a></p>
                        <p><a href="mailto:someone@example.com">someEmail@gmail.com</a></p>
                        <h2>Social Media</h2>
                        <div class="footerSocials">
                            <a href=""><img src="icon.png"></a>
                            <a href=""><img src="icon.png"></a>
                            <a href=""><img src="icon.png"></a>
                            <a href=""><img src="icon.png"></a>
                        </div>
                        
                    </section>
                </footer>
            `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
};
window.onload = function() {
    createNavBar();
    createFooter();
    animation();
}