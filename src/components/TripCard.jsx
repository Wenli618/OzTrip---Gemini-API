

function TripCard({searchCondition}) {
  return (
    <div className="tripCard">
        <h2>{searchCondition.numberOfDays} {searchCondition.numberOfDays > 1? 'days': 'day'} Trip in {searchCondition.city}</h2>
    </div>
  )
}

export default TripCard