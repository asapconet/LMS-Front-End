export const BaseURL = "https://lms-app-back-end.herokuapp.com/";
let MotherURL = `${BaseURL}resources/`;
let BaseURL1 = `${BaseURL}auth/`
let BaseURL2 = `${BaseURL}auth/users/`;
let BASEUSER = `${BaseURL}auth/users/me/`;

// AUTHENTICATION URL
export const LoginUrl = `auth/jwt/create/`;
export const RecoveryURL = `${BaseURL1}jwt/refresh/`;
export const VerifyLoginUrl = `/jwt/verify/`;
export const RegistrationUrl = BaseURL2;
export const MeURL = 'auth/users/me/'

// OTHER URLs
// "https://lms-app-back-end.herokuapp.com/levels"
export const LevelUrl = 'levels';
export const ResourceURL = MotherURL;
export const GetMyCoursesURL = MotherURL;

// USER PROFILE
export const showProfileURL = BASEUSER;
export const editProfileURL = BASEUSER;
export const DeleteProfileURL = BASEUSER;
