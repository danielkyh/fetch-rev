import React, { Component } from 'react';

class FilterDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: props.options
    }
  }

  initializeDropDown() {
    var elem = document.querySelector('select');
    window.M.FormSelect.init(elem)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({options: nextProps.options}, () => this.initializeDropDown())
  }

  renderOptions() {
    return this.state.options.map((option, idx) => {
      return <option key={idx} value={option}>{option}</option>
    })
  }

  render() {
    return (
      <div className="row franchise-filter">
        <div className="input-field col s4 offset-s8">
          <select onChange={(e) => this.props.handleChange(e.target.value)}>
            <option value="" selected>Choose your option</option>
            {this.renderOptions()}
          </select>
          <label>Filter by: {this.props.label}</label>
        </div>
      </div>
    )
  }
}

export default FilterDropDown;