import React from 'react';
import './businessCard.css';
import { Link } from 'react-router-dom';
import Helpers from '../../services/Helpers';

const BusinessCard = (props) => {
  let business = props.business
  return (
    <div className="col s12 m6">
      <Link to={`/business/${business.id}`}>
        <div className="card grey lighten-5 grey-text text-darken-3">
          <div className="card-content">
            <span className="card-title">
              <span className=" business-names">
                <span>{business.name}</span>
                <span className="franchise-name">{business.franchise}</span>
              </span>
            </span>
            <p><b>Revenue:</b> {Helpers.formatMoney(business.revenue_to_date_in_cents)}</p>
          </div>
          <div className="card-action right-align blue-grey darken-3 blue-grey-text text-lighten-5">
            <span className="status"><b>Status:</b> {business.status}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BusinessCard;