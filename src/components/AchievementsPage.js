import React from 'react'
import Title from './Title'

function AchievementsPage() {
  const achivements = [
    "Shortlisted at the University level in the Smart-India Hackathon (2020), worked on an idea for Alzheimer’s disease detection.",
    "Secured Second place in Bugathon’23 conducted by Chronus.",
    "Secured Second place in the event “Algorithm Unlock” (2020) conducted by the robotics club of CEG.",
    "Secured All India rank of 4631 in Gate 2020.",
    "Achieved 6 stars for problem-solving in HackerRank."
  ]

  const allAchivements = achivements.map((achivement) => {
    return <div> - {achivement} </div>
  })
  return (
    <div>
      <Title name="Achievements" allProjects={allAchivements}/>
    </div>
  )
}

export default AchievementsPage