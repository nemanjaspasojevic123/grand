const storage = window.localStorage;

export const appStorage = {

    setUser: user => storage.setItem('user',user),
    getUser: () => storage.getItem('user'),
    removeUser: () => storage.removeItem('user'),

    setToken: token => storage.setItem('token',token),
    getToken: () => storage.getItem('token'),
    removeToken: () => storage.removeItem('token'),

}