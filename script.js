let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function sendEmail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        body: document.getElementById("body").value,
        number: document.getElementById("number").value,
    }

    emailjs.send("service_4qks59y","template_1wflx5v",parms).then(alert("Email Sent! Thank you!"))
    
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add
                (`active`);
            })
        }

    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
}

