import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

class Home extends Component {
    // useEffect(()=>getPost,[]);
    constructor(props) {
        super(props);
        this.state = { post: 'Home', creator: '' }
        this.DeletePost = this.DeletePost.bind(this);
        this.DeletePost1 = this.DeletePost1.bind(this);
        this.getBlogsByCreator = this.getBlogsByCreator.bind(this);
    }

    render() {
        console.log("StateValue",this.state.post);
        let PostData = this.state.post;
        let creatorList = this.state.creator;
        console.log(PostData);
        let getBlogsByCreator=this.getBlogsByCreator;
        let temp;
        return (
            <div>
                {/* <Header /> */}
                <div className="d-flex justify-content-end">
                    <button className="btn btn-sm btn-warning" id="dropdownMenuButton" data-toggle="dropdown">Filter By Creator</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {
                         Object.keys(creatorList).map(function (key) {
                            return (
                                <>
                            <a className="dropdown-item" onClick={()=>{getBlogsByCreator(creatorList[key]); temp=creatorList[key]}}>{creatorList[key]}</a>
                            </>
                        )})}
                        {/* <a className="dropdown-item" onClick={this.DeletePost}>First Created Blogs First</a> */}
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-sm btn-warning" id="dropdownMenuButton" data-toggle="dropdown">Sort By Time</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {/* <Link to={`/edit/${PostData.title}`} className="dropdown-item">
                            Most Recent Blogs First
                        </Link> */}
                        <a className="dropdown-item" onClick={this.DeletePost1}>Most Recent Blogs First</a>
                        <a className="dropdown-item" onClick={this.DeletePost}>First Created Blogs First</a>
                    </div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="col-md-8">
                        {Object.keys(PostData).map(function (key) {

                            return (
                                <div className="card mb-3" key={key}>
                                    <div className="card-header">
                                        {PostData[key].title} : By {PostData[key].createdBy}
                                    </div>
                                    <div className="card-body">
                                        <h1> {PostData[key].title}</h1>
                                        <div>
                                            {ReactHtmlParser(PostData[key].description)}
                                        </div>
                                        <Link to={`show/${PostData[key].title}`} className="btn btn-primary btn-sm" >Read More </Link>
                                    </div>
                                </div>
                            )
                        })

                        }
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getPost();
        this.getCreator();
    }

    getPost() {
        axios.get('https://blog-springboot-suyash.herokuapp.com/v1/api/blog/list', {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            responseType: "json",
        })
            .then(res => {
                console.log(res);
                this.setState({
                    post: res.data
                });
                console.log(res)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    getCreator() {
        axios.get('https://blog-springboot-suyash.herokuapp.com/v1/api/blog/allCreator', {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            responseType: "json",
        })
            .then(res => {
                console.log(res);
                this.setState({
                    creator: res.data
                });
                console.log(res)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    DeletePost(){
        axios.get('https://blog-springboot-suyash.herokuapp.com/v1/api/blog/listby-time/false')
        .then(res =>{
            console.log(res);
            this.setState({
                post: res.data
            });
           
        })
        .catch((error) => {
            console.log(error);
        })
        
    }
    DeletePost1(){
        axios.get('https://blog-springboot-suyash.herokuapp.com/v1/api/blog/listby-time/true')
        .then(res =>{
            console.log(res);
            this.setState({
                post: res.data
            });
           
        })
        .catch((error) => {
            console.log(error);
        })
        
    }
    getBlogsByCreator(valueog){
        // let slug =this.props.match.params.creatorList;
        console.log(valueog);
        axios.get('https://blog-springboot-suyash.herokuapp.com/v1/api/blog/listby/'+valueog, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            responseType: "json",
        })
            .then(res => {
                console.log(res);
                this.setState({
                    post: res.data
                });
                console.log(res)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export default Home;