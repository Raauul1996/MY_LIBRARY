import { BASE_URL } from '@env';

const getBook = async (bookId) => {
    try {
        const response = await fetch(BASE_URL+'/books/'+bookId);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Get book failed', error);
        return false;
    }
}

export default getBook;