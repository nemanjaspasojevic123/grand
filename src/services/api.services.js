import axios from 'axios';
import { appStorage } from './storage.services';



const baseURL = "https://grand-api-2021.herokuapp.com/api";

// eslint-disable-next-line no-unused-vars
const getHeader = () => ({headers:{Authorization:"Bearer " + appStorage.getToken()}}); // generise objekat header sa tokenom

export const logInUser = (username, password) => axios.post(baseURL+"/login", {username, password});

export const getAllPosts = () => axios.get(baseURL+"/posts", getHeader());

export const getAllCategories = () => axios.get(baseURL+"/post-categories", getHeader());

export const getAllPostTypes = () => axios.get(baseURL+"/post-types", getHeader());

export const getAllSurveys = () => axios.get(baseURL+"/surveys", getHeader());

export const createNewPost = (newPost) => axios.post(baseURL+"/posts", {newPost}, getHeader())