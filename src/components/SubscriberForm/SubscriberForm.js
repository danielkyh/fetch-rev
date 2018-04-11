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

  disableButton() {
    return (this.state.name === '' || this.state.email === '');
  }

  handleChange(e, field) {
    let prevState = this.state;
    prevState[field] = e.target.value
    this.setState({ prevState }, () => console.log(this.state))
  }

  createSubscriber(e) {
    e.preventDefault();
    SubscriberAPI.subscribe(this.state, this.props.businessId, this.createSuccessToast.bind(this))
  }

  createSuccessToast() {
    window.M.toast({
      html: 'Successfully Subscribed!', classes: "light-blue accent-1"})
  }

  render() {
    return (
      <div>
        <div className="row card-panel grey lighten-5 subscriber-form">
          <div className="col s12">
            <h5>Add a Subscriber</h5>
          </div>
          <div className="input-field col s6">
            <input onChange={(e) => this.handleChange(e, 'name')} id="name" type="text" className="validate" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s6">
            <input onChange={(e) => this.handleChange(e, 'email')} id="email" type="text" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="col s12 right-align">
            <a disabled={this.disableButton()} onClick={this.createSubscriber.bind(this)} className="waves-effect waves-light btn">Submit</a>
          </div>
        </div>
      </div>
    )
  }
}

export default SubscriberForm;