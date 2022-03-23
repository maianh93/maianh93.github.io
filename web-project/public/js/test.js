// Regex for password: Password must be started with A to Z, a to z or number. 
// Min length is 8. And It can contains '@$!%*#?&' character
const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
const isValidPassword = (pwd) => pwdRegex.test(pwd);
