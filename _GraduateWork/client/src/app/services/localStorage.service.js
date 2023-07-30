const TOKEN_KEY = 'jwt-token';
const REFRESH_KEY = 'jwt-refresh-token';
const EXPIRES_KEY = 'jwt-expires';
const USERID_KEY = 'user-local-id';
const USER_NAME_KEY = 'user-name';
const USER_IS_ADMIN_KEY = 'user-is-admin';

export function setTokens({
  accessToken,
  refreshToken,
  user,
  expiresIn = 3600
}) {
  const expiresDate = new Date().getTime() + expiresIn * 1000;
  localStorage.setItem(USERID_KEY, user._id);
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(EXPIRES_KEY, expiresDate);
  localStorage.setItem(USER_NAME_KEY, user.name);
  localStorage.setItem(USER_IS_ADMIN_KEY, user.isAdmin);
}
export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY);
}
export function removeAuthData() {
  localStorage.removeItem(USERID_KEY);
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(EXPIRES_KEY);
  localStorage.removeItem(USER_NAME_KEY);
  localStorage.removeItem(USER_IS_ADMIN_KEY);
}

export function getTokenExpiresDate() {
  return localStorage.getItem(EXPIRES_KEY);
}
export function getUserId() {
  return localStorage.getItem(USERID_KEY);
}
export function getUserName() {
  return localStorage.getItem(USER_NAME_KEY);
}
export function userIsAdmin() {
  return Boolean(localStorage.getItem(USER_IS_ADMIN_KEY));
}
const localStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresDate,
  getUserId,
  getUserName,
  userIsAdmin,
  removeAuthData
};
export default localStorageService;
