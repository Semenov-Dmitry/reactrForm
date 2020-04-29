import React from 'react';
import { connect } from 'react-redux';
import {deleteBook, getAllBooks, editBook} from "../actions";
import Book from "./Book";
import UpdateBook from "./UpdateBook";

class BookList extends React.Component {
    componentDidMount() {
        this.props.AddBook();
    }

    render() {
               return(
                   <div className="table-responsive">

                   <table className="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>author</th>
                    <th>description</th>
                    <th>published</th>
                    <th>Actions</th>
                </tr>
                </thead>

                {this.props.books.map(book=>( book.edited ? <UpdateBook book={book} key={book.id} /> :
                    <Book key={book.id} book={{...book,edited:false}} delete={this.props.onDeleteBook} edit={this.props.onEditBook} />))}
            </table>
                   </div>

        );
    }
}

export default connect(
    state => ({
        books: state.book
    }),
    dispatch => ({
        AddBook: () => {
            dispatch(getAllBooks());
        },
        onDeleteBook:(id=>{
            dispatch(deleteBook(id))
        }),
        onEditBook:(id=>{
            dispatch(editBook(id));
        })
    })
)(BookList);
