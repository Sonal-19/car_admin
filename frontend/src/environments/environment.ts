// export const environment = {
//   phoneNumber: "+91 7678431135",
//   email: "info@kommuno.com",
//   locationAddress: "Kommuno Technologies Pvt Ltd, Plot No F539 , Mohali Tower, 4th Floor, Sector 74, Phase 8B Industrial Area, Mohali, Punjab 160055",
//   authApiUrl: "https://apidev.carwhistler.com/v1/",
//   authApiUrlKommuno: "https://kommuno.com/v1/kcrm/10001424/",
//   authApiUrl: "http://localhost:3000/v1/",
//   authApiUrl: "https://newdev.kommuno.com/v1/",
//   kommunoLinkedin: "https://www.linkedin.com/company/kommuno/",
//   kommunoFacebook: "https://www.facebook.com/Kommuno",
//   kommunoTwitter: "http://twitter.com/",
//   whattsAppNumber: "917678431135",
//   userKey: "user-data",
//   adminUserName: "admin",
//   adminPassword: "admin123"
// };

export const environment = {
  production: false,
  authApiUrl: (window as any).config.authApiUrl, 
  authApiUrlKommuno: (window as any).config.authApiUrlKommuno, 
  userKey: (window as any).config.userKey,
  newDevURL: (window as any).config.newDevURL,
  adminUserName:(window as any).config.adminUserName,
  adminPassword:(window as any).config.adminPassword, 
};
