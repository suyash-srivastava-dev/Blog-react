import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = { post:'', }

        this.DeletePost = this.DeletePost.bind(this);

    }
    render() { 
        let PostData = this.state.post;
        return ( 
            <div>
                <div className="container mt-5 mb-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                {PostData.title} : By {PostData.createdBy}
                            </div>
                            <div className="card-body">
                                <h1>{PostData.title}</h1>
                                <div>{ReactHtmlParser(PostData.description)}</div>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-sm btn-warning"  id="dropdownMenuButton" data-toggle="dropdown">Menu</button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Link to={`/edit/${PostData.title}`} className="dropdown-item">
                                            Edit
                                        </Link> 
                                        <a className="dropdown-item" onClick={this.DeletePost}>Delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="form-group">
                                    <input className="form-control" placeholder="Leave comment"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }

    componentDidMount(){
        this.Post();
    }

    Post(){
        const slug = this.props.match.params.id;
        // console.log(slug);
        
        axios.get('https://blog-springboot-suyash.herokuapp.com/v1/api/blog/findByTitle/'+slug)
        .then(res => {
            this.setState({
                post: res.data,
            });
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    DeletePost(){
        const slug = this.props.match.params.id;
        axios.get('https://blog-springboot-suyash.herokuapp.com/v1/api/blog/removeByTitle/'+slug)
        .then(res =>{
            console.log(res);
            this.props.history.push('/');
        })
        .catch((error) => {
            this.props.history.push('/');
            console.log(error);
        })
        
    }
}
 
export default Show;