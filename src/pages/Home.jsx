

import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom';



import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

import  addItemToLocalStorage from '../utils/storage';

import SearchForm from "../components/SearchForm"
import TrendingDestinations from "../components/TrendingDestinations"

function Home() {




  // set up state variables
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const navigate = useNavigate()

// Fetch your API_KEY
// const API_KEY = process.env.REACT_APP_API_KEY;
const apiKey = import.meta.env.VITE_API_KEY;

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(apiKey);

// Function to generate love letter using the AI model
async function run(data){
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

 
  const prompt = `Generate a personalized ${data.numberOfDates} days travel plan for ${data.city}, Australia, for ${data.numberOfAdults} adults and ${data.numberOfChildren} child. Include daily itinerary, recommended accommodations, dining options and any important considerations`
console.log('api shuju')
  console.log(data)

  const result = await model.generateContent(prompt)
  const response =  result.response
  const text = response.text()
  return text
}


  // handle form submission
  const handleFormSubmit = async (data) => {
    setLoading(true)
    console.log(data)
    try{
      let resultPlan = await run(data)
      console.log(resultPlan)
      await addItemToLocalStorage({searchId: uuidv4(), tripPlan: resultPlan, searchCondition: data})
      
      if(resultPlan){
        navigate('/trip-plan')
      }
    }catch(error){
      console.error('Error generating trip plan: ', error)
      setError(`Error generating trip plan: ${error}`)
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
    <section className="heroSection">
      <div className="heroContainer">
        <div className="heroLeft">
          <h1>Plan your next dream trip
  to Austrilia in seconds.</h1>
        </div>
        <SearchForm parentOnSubmit = {handleFormSubmit} loading = {loading} />
      </div>
    
    </section>
    <TrendingDestinations />
    {/* <div>
      {firstTripPlan && (
        <p>{firstTripPlan.tripPlan}</p>
      )}
    </div>
  */}
    </>
  )
}

export default Home
 




