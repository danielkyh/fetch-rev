// const buildEndpoint = (businessId) => {
//   return `https://young-temple-44207.herokuapp.com/businesses/${businessId}/subscribers?token=617456678`
// }

// const $ = window.$;

const SubscriberApi = {
  subscribe: (data, businessId, callback) => {
    callback()
    // $.ajax(buildEndpoint(businessId), {
    //   type: "POST",
    //   data: JSON.stringify(data),
    //   contentType: 'application/json',
    //   success: (response) => {console.log(response)},
    //   error: (error) => {console.log('error', error)}
    // })
  }
}

export default SubscriberApi;