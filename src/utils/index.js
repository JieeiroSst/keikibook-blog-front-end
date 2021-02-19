export const CheckPassword = (inputtxt) => {
  var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (inputtxt.value.match(decimal)) {
    alert("Correct, try another...");
    return true;
  } else {
    alert("Wrong...!");
    return false;
  }
};

export const EmptyField = (inputtx) => {
  if (inputtx.value.length === 0) {
    alert("message");
    return false;
  }
  return true;
};

export const CheckUsername = (inputtxt) => {
  var decimal = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
  if (inputtxt.value.match(decimal)) {
    alert("Correct, try another...");
    return true;
  } else {
    alert("Wrong...!");
    return false;
  }
};
