let MotherURL = "https://lms-app-back-end.herokuapp.com/resources/";
let BaseURL1 = "https://lms-app-back-end.herokuapp.com/auth/";
let BaseURL2 = "https://lms-app-back-end.herokuapp.com/auth/users/";
let BaseURL3 = "https://lms-app-back-end.herokuapp.com/levels";

// AUTHENTICATION URL
export const LoginUrl = `${BaseURL1}jwt/create/`;
export const RecoveryURL = `${BaseURL1}jwt/refresh/`;
export const VerifyLoginUrl = `${BaseURL1}jwt/verify/`;
export const RegistrationUrl = BaseURL2;

// OTHER URLs
export const LevelUrl = BaseURL3;
export const ResourceURL = MotherURL;
