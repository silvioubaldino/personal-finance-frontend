const TOKEN_STORAGE_KEY = 'token';

function readStorage() {
  return JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY) || '[]');
};

function writeStorage(token) {
  localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token));
};

function removeToken() {
  localStorage.clear();
};

export {
  readStorage,
  writeStorage,
  removeToken
};