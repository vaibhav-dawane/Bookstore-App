import Book from "../model/book.model.js";

// following function will send all the the data to /book path
export const getBook = async (req, res) => {
    try {
        const book = await Book.find()
        res.status(200).send(book); 
    } catch (error) {
        console.log("Error Occured: ", error.message);
        res.status(200).send(error);
    }
}