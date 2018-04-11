const buildEndpoint = (businessId, data) => {
  return `https://young-temple-44207.herokuapp.com/businesses/${businessId}/subscribers?token=617456678&[subscriber][name]=${data.name}&[subscriber][email]=${data.email}`
}

const $ = window.$;

const SubscriberApi = {
  subscribe: (data, businessId, callback, errorCallback) => {

    $.ajax(buildEndpoint(businessId, data), {
      type: "POST",
      success: (response) => { callback() },
      error: (error) => { errorCallback(error.responseJSON.message) }
    })
  }
}

export default SubscriberApi;