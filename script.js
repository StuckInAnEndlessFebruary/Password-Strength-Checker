let input = document.getElementById("input");
let output = document.getElementById("out");
let barValue = document.getElementById("bar");
input.oninput = function () {
  let percent = calcPercentage(
    this.value.length,
    containsUppercase(this.value),
    containsLowercase(this.value),
    containsNumbers(this.value),
    containsSpecialChars(this.value)
  );
  barValue.style = "--value: " + percent + "; --max: 100";
};

function calcPercentage(chars, upper, lower, num, special) {
  if (chars >= 8) {
    return (
      ((Number(upper) + Number(lower) + Number(num) + Number(special)) / 4) *
      100
    );
  } else return 0;
}

function containsLowercase(str) {
  const hasLowercase = /[a-z]/;
  return hasLowercase.test(str);
}
function containsUppercase(str) {
  const hasUppercase = /[A-Z]/;
  return hasUppercase.test(str);
}
function containsNumbers(str) {
  const hasNumber = /\d/;
  return hasNumber.test(str);
}
function containsSpecialChars(str) {
  const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}
