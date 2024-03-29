import React, {Component} from 'react';
import {connect} from 'react-redux';
class BookList extends Component{
    renderList(){
        return this.props.books.map((book,index)=>{
            return (
                <li key={book.key} className="list-group-item">{book.title}</li>    
            );
        })
    }

    render(){
        return (
            <ul className="list-group col-sm-12">{this.renderList()}</ul>
        )
    }
}

function mapStateToProps(state){
    return {
        books:state.books
    };
}

export  default connect(mapStateToProps)(BookList)