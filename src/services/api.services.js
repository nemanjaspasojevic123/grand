import axios from 'axios';
import { appStorage } from './storage.services';



const baseURL = "https://grand-api-2021.herokuapp.com/api";

// eslint-disable-next-line no-unused-vars
const getHeader = () => ({headers:{Authorization:"Bearer " + appStorage.getToken()}}); // generise objekat header sa tokenom

export const logInUser = (username, password) => axios.post(baseURL+"/login", {username, password});

export const getAllPosts = () => axios.get(baseURL+"/posts", getHeader());

export const getAllCategories = () => axios.get(baseURL+"/post-categories", getHeader());