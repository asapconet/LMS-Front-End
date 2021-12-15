const BaseURL = "https://lms-app-back-end.herokuapp.com/";
let BaseURL1 = "https://lms-app-back-end.herokuapp.com/auth/";
let BaseURL2 = "https://lms-app-back-end.herokuapp.com/auth/users/";


export const  LoginUrl  = `${BaseURL1}jwt/create/`;
export const RecoveryURL = `${BaseURL1}jwt/refresh/`;
export const VerifyLoginUrl = `${BaseURL1}jwt/verify/`;
export const ResourceURL = '/resources/';

export const RegistrationUrl = BaseURL2
 