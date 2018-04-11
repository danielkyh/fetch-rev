import React, {Component} from 'react';
import FilterDropDown from '../FilterDropDown/FilterDropDown'
import BusinessListAPI from '../../services/BusinessListAPI';
import SubscriberForm from '../SubscriberForm/SubscriberForm'
import './businessSubscribers.css'
const _ = window._

class BusinessSubscribers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subscribers: [],
      filteredSubscribers: [],
      loading: true,
      statuses: [],
      filter: null
    }
  }

  componentDidMount() {
    this.fetchSubscribers()
  }

  fetchSubscribers() {
    const businessId = this.props.match.params.id;
    BusinessListAPI.fetchSubscribers(businessId, this.updateSubscribers.bind(this));
  }

  buildSubscriberFilterList() {
    if (this.state.subscribers) {
      let filteredSubscribers = _.uniqBy(this.state.subscribers, 'status');
      let uniqStatuses = filteredSubscribers.map((subscriber) => subscriber['status']);
      this.setState({ statuses: uniqStatuses })
    }
  }

  updateSubscribers(subscribers) {
    this.setState({ subscribers: subscribers, filteredSubscribers: subscribers, loading: false}, () => this.buildSubscriberFilterList())
  }

  updateFilter(filter) {
    if (filter === '') {
      this.setState({ filteredSubscribers: this.state.subscribers });
      return;
    }

    this.setState({ filter }, () => {
      let filteredSubscribers = this.state.subscribers.filter((subscriber) => {
        return subscriber.status === this.state.filter
      })
      this.setState({ filteredSubscribers: filteredSubscribers })
    });
  }

  renderRows() {
    return this.state.filteredSubscribers.map((subscriber, idx) => {
      return (
        <tr key={idx}>
          <td>{subscriber.name}</td>
          <td>{subscriber.email}</td>
          <td>{subscriber.status}</td>
        </tr>
      )
    })
  }

  renderLoading() {
    return (
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    )
  }

  renderTable() {
    return (
      <table className="striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderDropDown() {
    return <FilterDropDown options={this.state.statuses} label="status" handleChange={this.updateFilter.bind(this)} />
  }


  render(){
      if(this.state.loading) {
        return (
          <div className="container subscribers-table">
            <div className="row">
              <div className="col s12 center-align">
                {this.renderLoading()}
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="container subscribers-table">
            <SubscriberForm businessId={this.props.match.params.id} fetchSubscribers={this.fetchSubscribers.bind(this)}/>
            {this.renderDropDown()}
            <div className="row">
              <div className="col s12 center-align">
                {this.renderTable()}
              </div>
            </div>
          </div>
        )
      }
  }
}

export default BusinessSubscribers;