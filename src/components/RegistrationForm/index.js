// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isSuccessfullySubmitted: false,
    firstNameErrorMsg: '',
    secondNameErrorMsg: '',
    firstName: '',
    secondName: '',
  }

  onSubmitAnotherResponse = () => {
    this.setState({
      isSuccessfullySubmitted: false,
      firstNameErrorMsg: '',
      secondNameErrorMsg: '',
      firstName: '',
      secondName: '',
    })
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state
    if (firstName === '') {
      this.setState({firstNameErrorMsg: 'Required'})
    }
    if (secondName === '') {
      this.setState({secondNameErrorMsg: 'Required'})
    }
    if (firstName !== '' && secondName !== '') {
      this.setState({isSuccessfullySubmitted: true})
    }
  }

  onFirstNameBlur = event => {
    console.log(event.target.value)
    if (event.target.value === '') {
      this.setState({firstNameErrorMsg: 'Required'})
    } else {
      this.setState({firstNameErrorMsg: ''})
    }
  }

  onSecondNameBlur = event => {
    if (event.target.value === '') {
      this.setState({secondNameErrorMsg: 'Required'})
    } else {
      this.setState({secondNameErrorMsg: ''})
    }
  }

  onFirstNameChange = event => this.setState({firstName: event.target.value})

  onSecondNameChange = event => this.setState({secondName: event.target.value})

  render() {
    const {
      isSuccessfullySubmitted,
      firstNameErrorMsg,
      secondNameErrorMsg,
      firstName,
      secondName,
    } = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Registration</h1>
        <form className="form-container" onSubmit={this.onFormSubmit}>
          {isSuccessfullySubmitted ? (
            <div className="success-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-img"
              />
              <p>Submitted Successfully</p>
              <button
                className="success-btn"
                type="button"
                onClick={this.onSubmitAnotherResponse}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <>
              <label htmlFor="firstName" className="label">
                FIRST NAME
              </label>
              <br />
              <input
                type="text"
                placeholder="First Name"
                className="input"
                id="firstName"
                onBlur={this.onFirstNameBlur}
                onChange={this.onFirstNameChange}
                value={firstName}
              />
              <p className="error-msg">{firstNameErrorMsg}</p>
              <br />
              <label htmlFor="secondName" className="label">
                LAST NAME
              </label>
              <br />
              <input
                type="text"
                placeholder="Second Name"
                className="input"
                id="secondName"
                onBlur={this.onSecondNameBlur}
                onChange={this.onSecondNameChange}
                value={secondName}
              />
              <p className="error-msg">{secondNameErrorMsg}</p>
              <div className="btn-container">
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    )
  }
}
export default RegistrationForm
