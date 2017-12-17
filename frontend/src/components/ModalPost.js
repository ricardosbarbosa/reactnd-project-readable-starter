import React from 'react';
import {  Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { connect } from 'react-redux'
import FormPost from './FormPost'
import { addPost, updatePost, setPost, toggleModalPost, isNewPost} from '../actions'

class ModalPost extends React.Component {
  
  toggle = (e) => {
    if (e)
      e.preventDefault()
    this.props.toggleModalPost()
  }

  toggleAndIsNewPost = (e) => {
    if (e)
      e.preventDefault()
    this.props.toggleModalPost()
    this.props.isNewPost(true)
  }


  render() {
    const {parentId, hidden_modal_post} = this.props
    return (
      <div>
        <a className='new-post' href="/" onClick={this.toggleAndIsNewPost}>New Post</a>
        <Modal isOpen={!hidden_modal_post} toggle={this.toggle} > 
          <ModalHeader toggle={this.toggle}>Post</ModalHeader>
          <ModalBody>
            <FormPost/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: state.post,
    hidden_modal_post: state.hidden_modal_post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost:  (data) => dispatch(addPost(data)),
    updatePost: (data) => dispatch(updatePost(data)),
    // resetPost: (data) => dispatch(resetPost(data)),
    setPost: (data) => dispatch(setPost(data)),
    isNewPost: (data) => dispatch(isNewPost(data)),
    toggleModalPost: (data) => dispatch(toggleModalPost(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalPost)