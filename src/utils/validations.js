const validateEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email) ? true : "이메일 형식이 아닙니다.";
};
  
const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;
    return passwordRegex.test(password) ? true : "비밀번호 형식이 아닙니다.";
  };

export { validateEmail, validatePassword };