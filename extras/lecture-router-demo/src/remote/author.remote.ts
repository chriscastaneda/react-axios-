import { InternalAxios } from './internal-axios';
import { Author } from '../models/Author';

export const getAllAuthors = async ()=> {
    const response = await InternalAxios.get<Author[]>('/authors'); //send request
    return response.data.map(author => { //map array response to new author
        return author;
    })
};