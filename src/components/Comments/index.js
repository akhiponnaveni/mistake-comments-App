import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentList: [],

    name: '',
    comment: '',
    id: '',
    count: 0,
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment, count} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isActive: true,
      date: new Date(),
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  personName = event => {
    this.setState({name: event.target.value})
  }

  commentText = event => {
    this.setState({comment: event.target.value})
  }

  deleteComment = id => {
    const {commentList, count} = this.state

    const deleteCommentsItems = commentList.filter(each => each.id !== id)

    this.setState(prevState => ({
      count: prevState.count - 1,
      commentList: deleteCommentsItems,
    }))
  }

  clickLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isActive: !eachComment.isActive}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentList, name, comment, id, count} = this.state

    return (
      <div className="app-container">
        <div>
          <div className="input-main-container">
            <form className="inputs-container">
              <h1 className="main-heading">Comments</h1>

              <p htmlFor="Input" className="label-style">
                Say Something for 4.0 Technology{' '}
              </p>
              <input
                placeholder="Your Name"
                type="text"
                value={name}
                className="name-input"
                id="Input"
                onChange={this.personName}
              />
              <textarea
                placeholder="Your Comment"
                className="comments-input"
                onChange={this.commentText}
                value={comment}
              >
                h
              </textarea>

              <button
                type="submit"
                className="Button"
                onClick={this.addComment}
              >
                Add Comment
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comments-img"
              alt="Comments"
            />
          </div>

          <hr />
          <p className="count-comments">
            <span className="count-style">{count}</span>Comments
          </p>

          <ul className="list-container">
            {commentList.map(each => (
              <CommentItem
                commentDetails={each}
                key={each.id}
                colors={initialContainerBackgroundClassNames[id]}
                deleteComment={this.deleteComment}
                clickLike={this.clickLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
