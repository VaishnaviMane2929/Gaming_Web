let navbar = document.querySelector('.header .flex .navbar');
let menubtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menubtn.onclick = () => {
    navbar.classList.toggle('active');
    menubtn.classList.toggle('fa-times');

}

window.onscroll = () => {
    navbar.classList.remove('active');
    menubtn.classList.remove('fa-times');

    if(window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}
let faqBox = document.querySelectorAll('.faq .box-container .box');
faqBox.forEach(box => {
    box.onclick = () => {
        let content = box.querySelector('.content');
        let icon = box.querySelector('.i');

        if(content.classList.contains('active')){
            content.classList.remove(active);
        } else {
            document.querySelectorAll('.faq .box-container .box .content').forEach(contents => {
                contents.classList.remove('active');
            });
            content.classList.add(active);
        }

         if(icon.classList.contains('fa-minus')){
            icon.classList.replace('fa-minus','fa-plus');
        } else {
            document.querySelectorAll('.faq .box-container .box .fa-minus').forEach(icons => {

                icons.classList.replace('fa-minus','fa-plus');
            });
            icon.classList.replace('fa-plus','fa-minus');
        }
    }

});
