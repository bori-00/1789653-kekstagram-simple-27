const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      onFail('Не удалось отправить форму! Попрбуйти ещё раз!');
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попрбуйти ещё раз.');
    });
};

export { getData, sendData };
