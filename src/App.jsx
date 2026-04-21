
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Homecard from './Components/Homecard'
import Navbar from './Components/Navbar'
import Overall from './Components/Overall'
import StepsPart from './Components/StepsPart'
import PackagePlan from './Components/PackagePlan'
import Transform from './Components/Transform'
import Footer from './Components/Footer'

const cardPromise = fetch('Data.json')
  .then(res => res.json())

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Overall></Overall>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Homecard cardPromise={cardPromise}></Homecard>
      </Suspense>
      <StepsPart></StepsPart>
      <PackagePlan></PackagePlan>
      <Transform></Transform>
      <Footer></Footer>
    </>
  )
}

export default App
