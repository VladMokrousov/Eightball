const onError = () => {
  const textArea = document.querySelector(`.present-ideas__user-text`);
  textArea.style = `color: red;`;
  textArea.value = `Произошла ошибка:( Попробуйте перезагрузить страницу`;
  
};

export default function() {
  const form = document.querySelector('.pageclip-form')
  Pageclip.form(form, {
    onResponse: function (error, response) {
      if(error != null) {
        onError();
      }
    },
    successTemplate: '<span class="modal__text">Респект!</span>'
  })
}
