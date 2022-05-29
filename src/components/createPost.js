import React, { Component } from 'react';
import axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = { 
            title: '',
            author: '',
            description: '',
         }
    }

    onChange(e){
        this.setState({
            description: e.target.value
        });
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    onChangeCategory(e){
        this.setState({
            author: e.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let postData = [this.state.title, this.state.author, this.state.description];
        console.log(postData);

        axios.post('https://blog-springboot-suyash.herokuapp.com/v1/api/blog/create',{
            title: postData[0],
            createdBy: postData[1],
            description: postData[2],
            status: "pending"
        },{
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXlhc2giLCJyb2xlcyI6WyJBZG1pbiJdLCJpc3MiOiIvbG9naW4iLCJleHAiOjE2NTM4MDE2MTd9.GAS_EX5E5uSUy3uqCs8YuRm-nUzIFly6Y6xRsACYPIY'
        })
        .then(res =>{
            this.props.history.push('/')
            console.log(res)
        })
    }

    render() { 
        let postData = this.state;
        return ( 
            <div>
                <div className="container mt-5 mb-5">
                    <h1>Create Post...</h1>

                    <div className="row">
                        <div className="col-md-8">
                            <form onSubmit={this.handleSubmit}> 
                                <div className="form-group">
                                    <label >Title: </label>
                                    <input type="text"  value={postData.title || ''} onChange={this.onChangeTitle} className="form-control"  placeholder="Enter Title" />
                                </div>
                                {/* <div className='form-group'>
                                    <label>Category: </label>
                                    <select  value={postData.newCategory || ''} onChange={this.onChangeCategory} className="custom-select" >
                                        { 
                                            Object.keys(postData.category).map(function (key) {
                                                return ( 
                                                    <option key={key}>{postData.category[key].category}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div> */}
                                <div className="form-group">
                                   <label> Body:</label>
                                   <input type="text"  value={postData.description || ''} onChange={this.onChange} className="form-control"  placeholder="Enter Description" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Publish</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }


    componentDidMount(){
        this.getPost();
    }

    getPost(){
        axios.get('https://blog-springboot-suyash.herokuapp.com/v1/api/blog/list',{
            headers: {
                "Access-Control-Allow-Origin":"*"
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
 
export default CreatePost;