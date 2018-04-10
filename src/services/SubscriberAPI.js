const buildEndpoint = (businessId) => {
  return `http://young-temple-44207.herokuapp.com/businesses/${businessId}/subscribers`
}

const SubscriberApi = {
  subscribe: (data, businessId) => {
    window.$.ajax(buildEndpoint(businessId), {
      method: 'POST',
      dataType: 'json',
      data: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).done(res => console.log(res))
      .catch(error => console.error('Error:', error))
  }
}

export default SubscriberApi;