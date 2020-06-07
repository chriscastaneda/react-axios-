import { InternalAxios } from './internal-axios';
import { Author } from '../models/Author';

export const getAllAuthors = async ()=> {
    const response = await InternalAxios.get<Author[]>('/authors'); //send request
    return response.data.map(author => { //map array response to new author
        return author;
    })
};

//Request for submit button
export const creatAuthor = async(author: Author) => {
    const response = await InternalAxios.post('/authors', author); 
    return true; //response
}