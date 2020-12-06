import loadIdeas from './backend.js';
import shuffle from './get-shuffle-arr.js';

export default async function() {
  const btn = document.querySelector('.found-ideas__btn');
  const placeForIdeaText = document.querySelector('.found-ideas__text');
  const placeForIdeaLink = document.querySelector('.found-ideas__link');

  try {
    const ideasArr = await loadIdeas();
    shuffle(ideasArr);
    let i = 0;

    const onBtnPress = () => {
      placeForIdeaText.classList.add('found-ideas__text--animation');
      setTimeout(function(){
        placeForIdeaText.classList.remove('found-ideas__text--animation');
        },300)
     
      if (i < ideasArr.length){
        placeForIdeaText.textContent = ideasArr[i].ideaDescription;
        
        if (ideasArr[i].link) {
          placeForIdeaLink.classList.add('found-ideas__text--animation');
          setTimeout(function(){
            placeForIdeaLink.classList.remove('found-ideas__text--animation');
            },300)
          placeForIdeaLink.textContent = ideasArr[i].linkText;
          placeForIdeaLink.setAttribute('href', ideasArr[i].link);
          placeForIdeaLink.classList.remove('visually-hidden');
        } else {
          placeForIdeaLink.classList.add('visually-hidden');
        }
        i++;
      } else {
        btn.disabled = true;
        placeForIdeaText.textContent = `Ты просмотрел все идеи. Пора действовать!`;
        placeForIdeaLink.classList.add('visually-hidden');
      }
    }
    btn.addEventListener('click', onBtnPress);
  }
  catch(err) {
    console.log(err.message);
  }
}
