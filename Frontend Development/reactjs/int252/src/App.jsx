import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

const obj = [
  {
    imageUrl: "https://happenings.lpu.in/wp-content/uploads/2025/10/lpu-chancellor-dr.-ashok-kumar-mittal-and-pro-chancellor-col.-dr.-rashmi-mittal-present-along-with-bollywood-actor-sonu-sood-at-lpu-campus-1.jpg",
    cardHeading: "LPU Happenings",
    cardDescription: "Chancellor and Vice-Chancellor with Sonu Sood",
  },
  {
    imageUrl: "https://happenings.lpu.in/wp-content/uploads/2024/11/bollywood-maestro-piyush-mishra-graces-kitab-utsav-2024-at-lpu-324x160.jpg",
    cardHeading: "LPU Happenings",
    cardDescription: "Piyush Mishra at Kitab Utsav Opening Event LPU"
  },
  {
    imageUrl: "https://happenings.lpu.in/wp-content/uploads/2025/07/lpu-inaugurates-real-world-tech-workplaces-at-campus.jpg",
    cardHeading: "LPU Happenings",
    cardDescription: "Capgemini Workspace inaguration at LPU Campus"
  },
  {
    imageUrl: "https://www.lpu.in/lpu-assets/images/visitor/bollywood/vikrant-massey.webp",
    cardHeading: "LPU Happenings",
    cardDescription: "Chancellor and Vice-Chancellor with Vikrant Massey"
  },
]

const App = () => {
  return (
    <>
      <Navbar />
      <Cards obj={obj} />
    </>
  )
}

export default App
