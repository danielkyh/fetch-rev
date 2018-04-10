import React, { Component } from 'react';
import SubscriberAPI from '../../services/SubscriberAPI'
import './subscriberForm.css';

class SubscriberForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }

  componentDidMount() {
    SubscriberAPI.subscribe({name: 'daniel', email: 'daniel.yhoo.com'}, 22)
  }

  handleChange(e, field) {
    let prevState = this.state;
    prevState[field] = e.target.value
    this.setState({ prevState }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <div className="row card-panel grey lighten-5 subscriber-form">
          <div className="col s12">
            <h5>Add a Subscriber</h5>
          </div>
          <div className="input-field col s6">
            <input id="name" type="text" className="validate" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s6">
            <input id="email" type="text" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="col s12 right-align">
            <a className="waves-effect waves-light btn">Submit</a>
          </div>
        </div>
      </div>
    )
  }
}

export default SubscriberForm;