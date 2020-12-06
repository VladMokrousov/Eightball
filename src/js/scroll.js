export default () => {
  const arrow = document.querySelector('.intro__arrow-bottom');
  arrow.addEventListener('click', () => {
    document.querySelector('.found-ideas').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }); 
}