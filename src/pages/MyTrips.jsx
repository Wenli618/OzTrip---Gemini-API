import TripCard from "../components/TripCard"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function MyTrips() {
 
  const storedArray = JSON.parse(localStorage.getItem('mytrips'))
    console.log(storedArray)
    
  return (
   
      <div className="myTripsDiv">
        <h1 className="mt-4">My Trips</h1>
        <div>
          
          {storedArray? storedArray.map(
            trip => <TripCard key={trip.searchId} trip={trip.tripPlan} searchCondition={trip.searchCondition}  />
          ): <div className="mt-5 text-center"><h4>No Trip Plan Records</h4> <Button as={Link} to='/'className="mt-3">Start Searching</Button ></div>}
        </div>
      </div>
  
  )
}

export default MyTrips