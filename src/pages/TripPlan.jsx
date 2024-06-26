// TripPlan page renders and display the trip plan text that saved in local storage.

//1.  import required package
import ReactMarkdown from 'react-markdown'

function TripPlan() {
// 2. get stored array in 'mytrips'  in local storage
    const storedArray = JSON.parse(localStorage.getItem('mytrips'))
    console.log(storedArray)
    // 3. get first trip object of the array 
    const firstItem = storedArray[0]
    // 4. get mark down text trip plan, number of days, city info from the trip object.
    const tripPlan = firstItem.tripPlan
    const numberOfDays = firstItem.searchCondition.numberOfDays
    const city = firstItem.searchCondition.city

    console.log(tripPlan);
    

    // render trip plan in  HTML format using react-markdown component
  return (
     <div className='tripPlanDiv'>
      <div className='tripPlanContainer'>
        <h1>{numberOfDays} {numberOfDays > 1? 'days': 'day'} Trip in {city}</h1>
          {tripPlan ? (
            <div style={{textAlign:'start', margin:'1rem 10%'}}>
              <ReactMarkdown>{tripPlan}</ReactMarkdown>
            </div>
              
        
          ) : (
            <p>No trip plan found</p>
          )}
      </div>
    </div>
  )
}

export default TripPlan
