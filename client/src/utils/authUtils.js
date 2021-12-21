export const storeToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const isLoggedIn = () => {
  // if token exists in local storage then it will be considered as logged in
  return (
    localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))
  );
};
