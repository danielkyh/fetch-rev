const businessListEndpoint = 'https://young-temple-44207.herokuapp.com/businesses/?token=617456678'

const buildSubscriberEndpoint = (businessId) => {
  return `https://young-temple-44207.herokuapp.com/businesses/${businessId}/subscribers/?token=617456678`
}

const BusinessListAPI = {
  fetch: (query, callback) => {
    return fetch(businessListEndpoint).then(function (response) {
        return response.json();
      })
      .then(function (data) {
        callback(data.businesses);
      });
  },
  fetchSubscribers: (businessId, callback) => {
    return fetch(buildSubscriberEndpoint(businessId)).then(function (response) {
      return response.json();
    })
      .then(function (data) {
        callback(data.subscribers);
      });
  }

}

export default BusinessListAPI;