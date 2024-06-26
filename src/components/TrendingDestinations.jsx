import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import sydneyImage from '../assets/sydney.jpg'
import melbourneImage from '../assets/melbourne.jpg'
import brisbaneImage from '../assets/brisbane.jpg'
import perthImage from '../assets/perth.jpg'
import adelaideImage from '../assets/Adelaide.jpg'
import  goldCostImage from '../assets/goldcost.jpg'
import canberraImage from '../assets/canberra.jpg'
import hotbartImage from '../assets/hobart.jpg'
import darwinImage from '../assets/darwin.jpg'

function TrendingDestinations() {
  return (
    <section className="sectionTwo">
      <h2>Trending Distinations</h2>
      <ul className="cityLists">
      <li className="linkCard">
          <Card as={Link} to='/sydney'>
            <Card.Img variant="top" src={sydneyImage} />  
            <Card.Title>Sydney</Card.Title>
          </Card>
        </li>
        <li className="linkCard">
          <Card as={Link} to='/melbourne' >
            <Card.Img variant="top" src={melbourneImage} />  
            <Card.Title>Melbourne</Card.Title>
          </Card>
        </li>
        <li className="linkCard">
          <Card as={Link} to='/brisbance' >
            <Card.Img variant="top" src={brisbaneImage} />  
            <Card.Title>Brisbane</Card.Title>
          </Card>
        </li>
        <li className="linkCard">
          <Card as={Link} to='/perth' >
            <Card.Img variant="top" src={perthImage} />  
            <Card.Title>Perth</Card.Title>
          </Card>
        </li>
        <li className="linkCard">
          <Card as={Link} to='/adlaide' >
            <Card.Img variant="top" src={adelaideImage} />  
            <Card.Title>Adelaide</Card.Title>
          </Card>
        </li>
        <li className="linkCard">
          <Card as={Link} to='/goldcoast' >
            <Card.Img variant="top" src={goldCostImage} />  
            <Card.Title>Gold Coast</Card.Title>
          </Card>
        </li>
        <li className="linkCard">
          <Card as={Link} to='/canberra' >
            <Card.Img variant="top" src={canberraImage} />  
            <Card.Title>Canberra</Card.Title>
          </Card>
        </li>
        <li className="linkCard">
          <Card as={Link} to='/hobart'>
            <Card.Img variant="top" src={hotbartImage} />  
            <Card.Title>Hobart</Card.Title>
          </Card>
        </li>
        <li className="linkCard">
          <Card as={Link} to='/darwin' >
            <Card.Img variant="top" src={darwinImage} />  
            <Card.Title>Darwin</Card.Title>
          </Card>
        </li>
       

      </ul>
    </section>
  )
}

export default TrendingDestinations