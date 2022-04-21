import * as http from './http.js'                                               //Import http functions
import * as view from './view.js'                                               //Import http functions

const GET_BOOKS = `https://www.googleapis.com/books/v1/volumes?q=`;             //Book GET endpoint
const button = document.getElementById('button');

button.addEventListener('click', function(){
    const inputText = document.getElementById('input').value;
    document.getElementById('input').value = '';
    
    searchBooks(inputText);
});

const searchBooks = async (inputText) => {
    const json = await http.sendGETRequest(GET_BOOKS+inputText+'&maxResults=9');              //GET Request for book data
    console.log(json);

    let author0 = "Unknown"
    let author1 = "Unknown"
    let author2 = "Unknown"
    let author3 = "Unknown"
    let author4 = "Unknown"
    let author5 = "Unknown"
    let author6 = "Unknown"
    let author7 = "Unknown"
    let author8 = "Unknown"

    let bookImg0 = "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";
    let bookImg1 = "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";
    let bookImg2 = "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";
    let bookImg3 = "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";
    let bookImg4 = "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";
    let bookImg5 = "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";
    let bookImg6 = "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";
    let bookImg7 = "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";
    let bookImg8 = "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png";

    let preview0 = json.items[0].volumeInfo.previewLink;
    let preview1 = json.items[1].volumeInfo.previewLink;
    let preview2 = json.items[2].volumeInfo.previewLink;
    let preview3 = json.items[3].volumeInfo.previewLink;
    let preview4 = json.items[4].volumeInfo.previewLink;
    let preview5 = json.items[5].volumeInfo.previewLink;
    let preview6 = json.items[6].volumeInfo.previewLink;
    let preview7 = json.items[7].volumeInfo.previewLink;
    let preview8 = json.items[8].volumeInfo.previewLink;

    if(json.items[0].volumeInfo.imageLinks != null && json.items[0].volumeInfo.imageLinks.thumbnail != null){
        bookImg0 = json.items[0].volumeInfo.imageLinks.thumbnail;
    }
    let title0 = json.items[0].volumeInfo.title;
    if(json.items[0].volumeInfo.authors != null){
        author0 = json.items[0].volumeInfo.authors[0];
    }
    if(json.items[0].volumeInfo.previewLink == null){
        preview0 = "a";
    }

    if(json.items[1].volumeInfo.imageLinks != null && json.items[1].volumeInfo.imageLinks.thumbnail != null){
        bookImg1 = json.items[1].volumeInfo.imageLinks.thumbnail;
    }
    let title1 = json.items[1].volumeInfo.title;
    if(json.items[1].volumeInfo.authors != null){
        author1 = json.items[1].volumeInfo.authors[0];
    }
    if(json.items[1].volumeInfo.previewLink == null){
        preview1 = "a";
    }

    if(json.items[2].volumeInfo.imageLinks != null && json.items[2].volumeInfo.imageLinks.thumbnail != null){
        bookImg2 = json.items[2].volumeInfo.imageLinks.thumbnail;
    }
    let title2 = json.items[2].volumeInfo.title;
    if(json.items[2].volumeInfo.authors != null){
        author2 = json.items[2].volumeInfo.authors[0];
    }
    if(json.items[2].volumeInfo.previewLink == null){
        preview2 = "a";
    }

    
    if(json.items[3].volumeInfo.imageLinks != null && json.items[3].volumeInfo.imageLinks.thumbnail != null){
        bookImg3 = json.items[3].volumeInfo.imageLinks.thumbnail;
    }
    let title3 = json.items[3].volumeInfo.title;
    if(json.items[3].volumeInfo.authors != null){
        author3 = json.items[3].volumeInfo.authors[0];
    }
    if(json.items[3].volumeInfo.previewLink == null){
        preview3 = "a";
    }

    if(json.items[4].volumeInfo.imageLinks != null && json.items[4].volumeInfo.imageLinks.thumbnail != null){
        bookImg4 = json.items[4].volumeInfo.imageLinks.thumbnail;
    }
    let title4 = json.items[4].volumeInfo.title;
    if(json.items[4].volumeInfo.authors != null){
        author4 = json.items[4].volumeInfo.authors[0];
    }
    if(json.items[4].volumeInfo.previewLink == null){
        preview4 = "a";
    }

    if(json.items[5].volumeInfo.imageLinks != null && json.items[5].volumeInfo.imageLinks.thumbnail != null){
        bookImg5 = json.items[5].volumeInfo.imageLinks.thumbnail;
    }
    let title5 = json.items[5].volumeInfo.title;
    if(json.items[5].volumeInfo.authors != null){
        author5 = json.items[5].volumeInfo.authors[0];
    }
    if(json.items[5].volumeInfo.previewLink == null){
        preview5 = "a";
    }

    if(json.items[6].volumeInfo.imageLinks != null && json.items[6].volumeInfo.imageLinks.thumbnail != null){
        bookImg6 = json.items[6].volumeInfo.imageLinks.thumbnail;
    }
    let title6 = json.items[6].volumeInfo.title;
    if(json.items[6].volumeInfo.authors != null){
        author6 = json.items[6].volumeInfo.authors[0];
    }
    if(json.items[6].volumeInfo.previewLink == null){
        preview6 = "a";
    }

    if(json.items[7].volumeInfo.imageLinks != null && json.items[7].volumeInfo.imageLinks.thumbnail != null){
        bookImg7 = json.items[7].volumeInfo.imageLinks.thumbnail;
    }
    let title7 = json.items[7].volumeInfo.title;
    if(json.items[7].volumeInfo.authors != null){
        author7 = json.items[7].volumeInfo.authors[0];
    }
    if(json.items[7].volumeInfo.previewLink == null){
        preview7 = "a";
    }

    if(json.items[8].volumeInfo.imageLinks != null && json.items[8].volumeInfo.imageLinks.thumbnail != null){
        bookImg8 = json.items[8].volumeInfo.imageLinks.thumbnail;
    }
    let title8 = json.items[8].volumeInfo.title;
    if(json.items[8].volumeInfo.authors != null){
        author8 = json.items[8].volumeInfo.authors[0];
    }
    if(json.items[8].volumeInfo.previewLink == null){
        preview8 = "a";
    }


    view.viewResults(bookImg0, title0, author0, preview0, 
                     bookImg1, title1, author1, preview1,
                     bookImg2, title2, author2, preview2,
                     bookImg3, title3, author3, preview3,
                     bookImg4, title4, author4, preview4,
                     bookImg5, title5, author5, preview5,
                     bookImg6, title6, author6, preview6,
                     bookImg7, title7, author7, preview7,
                     bookImg8, title8, author8, preview8);
}