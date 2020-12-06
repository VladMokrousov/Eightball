const onError = () => {
  const node = document.createElement(`div`);
  node.style = `width: 100%; background-color: rgba(255, 0, 0, 0.5); color: #fff; padding: 10px 0; text-align: center; font-size: 25px;`;
  node.textContent = `Произошла ошибка:( Попробуйте перезагрузить страницу`;
  document.body.insertAdjacentElement(`afterbegin`, node);
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
