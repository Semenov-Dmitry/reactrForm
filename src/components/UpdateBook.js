import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { updateBook } from "../actions";


class UpdateBook extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newAuthor = this.getAuthor.value;
        const newDescription = this.getDescription.value;
        const newPublished = this.getPublished.value;
        const data = {
            newTitle,
            newAuthor,
            newDescription,
            newPublished
        };
        console.log("?????");
        this.props.dispatch(updateBook(this.props.book.id,data))
    };
    render() {
        {$(document).ready(function(){
            $("#exampleModal").modal('show');
        })}
        return (

            <div>


                    <div className="modal" id="exampleModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <form className="">
                                        <div className="form-group">
                                        <label htmlFor="title">Title:</label>
                                        <input
                                            required type="text"
                                               className="form-control"
                                               id="title"
                                               ref={(input) => this.getTitle = input}
                                               defaultValue={this.props.book.title}
                                               placeholder="Enter Book Title"
                                        />
                                        <label htmlFor="author">Author:</label>
                                        <input
                                            required type="text"
                                               className="form-control"
                                               id="author"
                                               ref={(input) => this.getAuthor = input}
                                               defaultValue={this.props.book.author}
                                               placeholder="Enter Author"
                                        />
                                        <label htmlFor="description">Description:</label>
                                        <input
                                            required type="text"
                                            className="form-control"
                                            id="description"
                                            ref={(input) => this.getDescription = input}
                                               defaultValue={this.props.book.description}
                                            placeholder="Enter Book Description"
                                        />
                                        <label htmlFor="published">Published:</label>
                                        <input
                                            required type="text"
                                            className="form-control"
                                            id="published"
                                            ref={(input) => this.getPublished = input}
                                            defaultValue={this.props.book.published}
                                            placeholder="Published Year"
                                        />
                                        </div>
                                        <button onClick={this.handleEdit} className="border-0 bg-success rounded" data-dismiss="modal">Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default connect()(UpdateBook);