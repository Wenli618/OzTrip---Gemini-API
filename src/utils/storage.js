// this is a function that add trip plan to local storage

const addItemToLocalStorage = async(newTripPlan) => {


  //  Retrieve mytrips from localStorage
  const storedTripPlansJSON = localStorage.getItem("mytrips");

  // check local storage, if have saved data in 'mytrips',  Parse JSON string into array, otherwise  set it as an empty Array
  let  storedTripPlans = storedTripPlansJSON? JSON.parse(storedTripPlansJSON) : []

  // add new trip to the array
  storedTripPlans.unshift(newTripPlan)

  // convert the updated array to JSON string
  const updatedTripPlansJSON = JSON.stringify(storedTripPlans)

  // store the updated JSON string back into localStorage
  localStorage.setItem("mytrips",updatedTripPlansJSON);

}


export default addItemToLocalStorage 