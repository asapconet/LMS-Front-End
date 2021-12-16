let MotherURL = "https://lms-app-back-end.herokuapp.com/resources/";
export const BaseURL = "https://lms-app-back-end.herokuapp.com/";
let BaseURL1 = "https://lms-app-back-end.herokuapp.com/auth/";
let BaseURL2 = "https://lms-app-back-end.herokuapp.com/auth/users/";
let BaseURL3 = "https://lms-app-back-end.herokuapp.com/levels";
let BASEUSER = "https://lms-app-back-end.herokuapp.com/auth/users/me/";

// AUTHENTICATION URL
export const LoginUrl = `${BaseURL1}jwt/create/`;
export const RecoveryURL = `${BaseURL1}jwt/refresh/`;
export const VerifyLoginUrl = `/jwt/verify/`;
export const RegistrationUrl = BaseURL2;

// OTHER URLs
// "https://lms-app-back-end.herokuapp.com/levels"
export const LevelUrl = 'levels';
export const ResourceURL = MotherURL;
export const GetMyCoursesURL = MotherURL;

// USER PROFILE
export const showProfileURL = BASEUSER;
export const editProfileURL = BASEUSER;
export const DeleteProfileURL = BASEUSER;
