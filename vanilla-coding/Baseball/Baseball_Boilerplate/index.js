console.log("hello, vanilla.");

const startDiv = document.querySelector("#start");
const endDiv = document.querySelector("#end");

let tryTime = 10;
const randomNum = [];

// create random number
for (let i = 0; i < 3; i++) {
  let ran = parseInt(Math.random() * 10);
  while (randomNum.includes(ran)) {
    ran = parseInt(Math.random() * 10);
  }
  randomNum.push(ran);
}
console.log(randomNum);

const result = document.createElement("p");
endDiv.appendChild(result);

const restTry = document.createElement("p");
startDiv.appendChild(restTry);
restTry.innerHTML = `남은 시도 횟수: ${tryTime}`;

const inputForm = document.createElement("form");
const input = document.createElement("input");
input.placeholder = "세자리 숫자를 입력해주세요.";
inputForm.appendChild(input);
startDiv.appendChild(inputForm);

const handleSubmitEvent = (event) => {
  event.preventDefault();
  const number = input.value;
  let numArray = [];
  let strike = 0;
  let ball = 0;

  if (isNaN(number)) {
    alert("숫자를 입력해주세요");
  } else if (number.length != 3) {
    alert("숫자 세자리를 입력해주세요");
  } else {
    if (tryTime < 1) {
      alert(`주어진 기회가 모두 소진되었습니다. 정답은 ${randomNum} 입니다.`);
      location.reload(); // 새로고침
    }
    numArray = Array.from(number, (arg) => parseInt(arg));
    numArray.map((num, index) => {
      if (randomNum.indexOf(num) === index) {
        strike += 1;
      } else if (randomNum.indexOf(num) != -1) {
        ball += 1;
      }
    });

    if (strike === 3) {
      alert("게임에 승리하였습니다.");
      location.reload(); // 새로고침
    } else {
      result.innerHTML = `${strike}S, ${ball}B`;
    }

    tryTime -= 1;
    restTry.innerHTML = `남은 시도 횟수: ${tryTime}`;
  }
  input.value = ""; // 값 비우기
};

inputForm.addEventListener("submit", handleSubmitEvent);
