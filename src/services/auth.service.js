import { appStorage } from "./storage.services";


let loged = null;
let token = "";


export const authService = {

    LogIn : (USER, TOKEN)=>{
        //provera usera

        appStorage.setUser(USER);
        appStorage.setToken(TOKEN);
        loged = USER;
        token = TOKEN;
    
    },
    
    LogOut : ()=>{
        loged = null;
        appStorage.removeUser();
        appStorage.removeToken();
        return loged;
    },
    
    isLoged : () => loged||appStorage.getUser(),

    getToken : () => token

}