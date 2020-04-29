import React from 'react';

export default class Book extends React.Component{
    render() {
        return(
                <tbody>

                <td><p>{this.props.book.id}</p></td>
                <td><p>{this.props.book.title}</p></td>
                <td><p>{this.props.book.author}</p></td>
                <td><p>{this.props.book.description}</p></td>
                <td><p>{this.props.book.published}</p></td>

                <td className="">
                    <a className="m-2" onClick={()=>this.props.edit(this.props.book.id)}>
                        <i className="fas fa-pen text-primary" title="Edit"></i>
                    </a>
                    <a className="m-2" onClick={()=>this.props.delete(this.props.book.id)}>
                        <i className="fas fa-trash text-danger" title="Delete"></i>
                    </a>
                </td>

                </tbody>
        )
    }
};
