import React from 'react';
import {connect} from 'react-redux';
import {createBook} from "../actions";


class CreateBook extends React.Component {
    state = {
        title:'',
        author:'',
        description:'',
        published:''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e=>{
        e.preventDefault();
        if(this.state.title.trim() && this.state.author.trim() && this.state.description.trim() && this.state.published.trim()){
            this.props.onAddBook(this.state);
            this.handleReset();
        }
    };
    handleReset= ()=>{
        this.setState({
            title:'',
            author:'',
            description:'',
            published:''
        });
    };

    render() {
        return(
                <div className="row bg-dark p-3">

                <div className="col-6">
                <h2 className="text-white">Library of books</h2>
                </div>

                <div className="col-6">
                <button type="button" className="btn bg-success float-right" data-toggle="modal" data-target="#myModal">
                    Add New Book
                </button>
                </div>

                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form onSubmit={ this.handleSubmit }>
                                    <div className="form-group">
                                        <label htmlFor="title">Title:</label>
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            className="form-control"
                                            name="title"
                                            onChange={ this.handleInputChange }
                                            value={ this.state.title }
                                        />
                                        <label htmlFor="author">Author:</label>
                                        <input
                                            type="text"
                                            placeholder="author"
                                            className="form-control"
                                            name="author"
                                            onChange={ this.handleInputChange }
                                            value={ this.state.author }
                                        />
                                        <label htmlFor="description">Description:</label>
                                        <input
                                            type="text"
                                            placeholder="description"
                                            className="form-control"
                                            name="description"
                                            onChange={ this.handleInputChange }
                                            value={ this.state.description }
                                        />
                                        <label htmlFor="published">Published:</label>
                                        <input
                                            type="text"
                                            placeholder="published"
                                            className="form-control"
                                            name="published"
                                            onChange={ this.handleInputChange }
                                            value={ this.state.published }
                                        />
                                    </div>
                                    <button onClick={this.handleSubmit} className="border-0 bg-success rounded" data-dismiss="modal">Add Book</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onAddBook: book => {
            dispatch(createBook(book));
        }
    };
};

export default connect(null, mapDispatchToProps)(CreateBook)