const button = document.querySelector('nav button')

button.addEventListener('click', () => {
  const img = button.children[0];
  const navList = document.querySelector('.nav__list');
  const nav = document.querySelector('.nav');
  const header = document.querySelector('header');

  button.classList.contains('nav-open') ? 
  (
    button.classList.add('nav-close'),  
    nav.classList.add('display-nav'),  
    header.classList.add('box-shodow'),
    button.classList.remove('nav-open'),
    navList.classList.remove('display-none'),
    img.src = '../../images/icon-close.svg'  
    ) : (
    button.classList.remove('nav-close'),  
    nav.classList.remove('display-nav'),  
    header.classList.remove('box-shodow'),
    button.classList.add('nav-open'),
    navList.classList.add('display-none'),
    img.src = '../../images/icon-hamburger.svg'  
  )
})