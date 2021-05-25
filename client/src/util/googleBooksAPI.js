import axios from "axios";

export const searchForBooks = async (search) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
    const res = await axios.get(url);

    return res.data.items.map((book) => {
        const { volumeInfo } = book;
        const { authors } = volumeInfo;
        return {
            id: book.id,
            title: volumeInfo.title,
            authors: authors ? authors : ["Unknown"],
            description: volumeInfo.description,
            image: volumeInfo.imageLinks?.thumbnail,
            link: volumeInfo.infoLink,
        };

    });
};







