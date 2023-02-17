// Write your code here

import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onClickFirstNameButton = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickLastNameButton = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    const firstNameContainer = firstName ? 'Joe ' : ''
    const firstContiner = firstName ? 'first-cont' : ''
    const lastNameContainer = lastName ? 'Jonas ' : ''
    const lastContiner = lastName ? 'first-cont' : ''
    return (
      <div className="background">
        <h1 className="heading"> Show/Hide </h1>
        <div className="firstAndLastNameContainer">
          <div className="first-name-container">
            <button
              type="button"
              className="first-name"
              onClick={this.onClickFirstNameButton}
            >
              Show/Hide FirstName
            </button>
            <div className={`${firstContiner}`}>
              <p>{firstNameContainer}</p>
            </div>
          </div>
          <div className="first-name-container">
            <button
              type="button"
              className="first-name"
              onClick={this.onClickLastNameButton}
            >
              Show/Hide FirstName
            </button>
            <div className={`${lastContiner}`}>
              <p>{lastNameContainer}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
