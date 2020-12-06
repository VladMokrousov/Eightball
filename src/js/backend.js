const GET_DATA_URL = `https://vladmokrousov.github.io/dataForTrainingProject/eightball.json`;
const onError = () => {
  const node = document.createElement(`div`);
  node.style = `width: 100%; background-color: rgba(255, 0, 0, 0.5); color: #fff; padding: 10px 0; text-align: center; font-size: 25px;`;
  node.textContent = `Произошла ошибка:( Попробуйте перезагрузить страницу`;
  document.body.insertAdjacentElement(`afterbegin`, node);
};

export default async function() {
  try {
    const response = await fetch(GET_DATA_URL);
    if (response.ok) {
      return response.json();
    }
    throw new Error('Данные не получены');
  }
  catch(err) {
    console.log(err.message);
    onError();
  } 
}

