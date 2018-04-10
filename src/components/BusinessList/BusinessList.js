import React from 'react';
import './businessList.css';
import BusinessCard from '../BusinessCard/BusinessCard'

const BusinessList = (props) => {
  return (
    props.businesses.map((business, idx) => {
      return <BusinessCard business={business} key={idx} />
    })
  )
}

export default BusinessList;