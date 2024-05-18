const validateEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
};
  
const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;
    return passwordRegex.test(password);
};

const validateNickname = (nickname) => {
    const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,10}$/;
    return nicknameRegex.test(nickname);
}

export { validateEmail, validatePassword, validateNickname };