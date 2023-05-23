function limitInputLength() {
  const inputElement = document.getElementById("inputName");
  let inputValue = inputElement.value;

  // 값이 없거나 공백인 경우
  if (!inputValue.trim()) {
    inputValue = "";
    showAlert("형식에 맞지 않습니다. 한글 또는 영문으로 입력해주세요.");
    return;
  }

  // 한글 입력 시 글자수 제한
  if (/[\u3131-\uD79D]/.test(inputValue)) {
    inputValue = inputValue.slice(0, 10);
  }
  // 영문 입력 시 글자수 제한
  else if (/^[a-zA-Z]*$/.test(inputValue)) {
    inputValue = inputValue.slice(0, 20);
  }
  // 특수기호나 숫자 입력 시 입력 불가
  else {
    inputValue = "";
    alert("형식에 맞지 않습니다. 한글 또는 영문으로 입력해주세요.");
  }

  inputElement.value = inputValue;
}

function formatPhoneNumber() {
  const inputElement = document.getElementById("inputPhone");
  let inputValue = inputElement.value;

  // 값이 없거나 공백인 경우
  if (!inputValue.trim()) {
    inputValue = "";
    showAlert("형식에 맞지 않습니다. 한글 또는 영문으로 입력해주세요.");
    return;
  }

  // "-" 제거
  inputValue = inputValue.replace(/-/g, "");

  // 숫자만 입력 가능하도록 제한
  inputValue = inputValue.replace(/\D/g, "");

  // 최대 11자리 제한
  inputValue = inputValue.slice(0, 11);

  inputElement.value = inputValue;
}

function handleButtonClick() {
  alertShown = false;
  formatPhoneNumber();
  limitInputLength();
}

function showAlert(message) {
  if (!alertShown) {
    alertShown = true;
    alert(message);
  }
}

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", handleButtonClick);
