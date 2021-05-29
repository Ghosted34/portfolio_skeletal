// Navigation bar

const scrollEventListener = ()=>{
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY>0)
}

window.addEventListener('scroll', scrollEventListener)

const navigation = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.navigation a');
const menuCss = document.querySelector('.css-contain');

menuCss.addEventListener('click', ()=>{

    menuCss.classList.toggle('active');
    navigation.classList.toggle('active');

})

navigationItems.forEach((navigationItem)=>{
    navigationItem.addEventListener('click',()=>{
        menuCss.classList.remove('active')
        navigation.classList.remove('active')
    })
})

let imgs = document.getElementsByClassName('myImages');
let modal = document.getElementById('myModal');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');
let spanClose = document.getElementsByClassName('close')[0];

for (let index = 0; index < imgs.length; index++) {
    const img = imgs[index];

    img.addEventListener('click', ()=>{
    if(window.innerWidth<1024){
        modal.style.display = 'block';
    }else{

        modal.style.display = 'flex';
    }
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    })
    
}

spanClose.addEventListener('click', ()=>{
    modal.style.display = 'none';
})



const scrollBtn = document.querySelector('.scrollTop');

window.addEventListener(('scroll'),function(){
    scrollBtn.classList.toggle('active', window.scrollY>500)
})

scrollBtn.addEventListener(("click"), ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

const reveal = ()=>{
    let reveals = document.querySelectorAll(".reveal")
    
    for (let index = 0; index < reveals.length; index++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[index].getBoundingClientRect().top;
        let revealPoint = 50;
        
        if (revealTop< (windowHeight - revealPoint)) {
            reveals[index].classList.add("active")
        }
        
    }
}

window.addEventListener("scroll", reveal)