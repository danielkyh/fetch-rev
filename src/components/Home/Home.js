import React, { Component } from 'react';
import './home.css'
import BusinessListAPI from '../../services/BusinessListAPI';
import BusinessList from '../BusinessList/BusinessList';
import FilterDropDown from '../FilterDropDown/FilterDropDown'
const _ = window._

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: [],
      franchises: [],
      filteredBusinesses: [],
      filter: null
    }
  }

  buildFranchiseFilterList() {
    if (this.state.businesses) {
      let filteredBusinesses = _.uniqBy(this.state.businesses, 'franchise');
      let uniqFranchieses = filteredBusinesses.map((business) => business['franchise']);
      this.setState({franchises: uniqFranchieses})
    }
  }

  componentDidMount(){
    this.fetchBusinesses();
  }

  updateFilter(filter) {
    if(filter === '') {
      this.setState({filteredBusinesses: this.state.businesses});
      return;
    }

    this.setState({filter}, () => {
      let filteredBusinesses = this.state.businesses.filter((business) => {
        return business.franchise === this.state.filter
      })
      this.setState({filteredBusinesses: filteredBusinesses})
    });
  }

  fetchBusinesses(filter = null) {
    BusinessListAPI.fetch(filter, this.updateBusinesses.bind(this))
  }

  updateBusinesses(businesses) {
    this.setState({businesses: businesses, filteredBusinesses: businesses}, () => this.buildFranchiseFilterList())
  }

  render() {
    return(
      <div className="container">
        <FilterDropDown options={this.state.franchises} label="franchise" handleChange={this.updateFilter.bind(this)}/>
        <div className="row">
          <BusinessList businesses={this.state.filteredBusinesses} />
        </div>
      </div>
    )
  }
}

export default Home;