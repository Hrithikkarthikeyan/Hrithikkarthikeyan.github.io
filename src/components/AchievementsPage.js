import React from 'react'
import Title from './Title'

function AchievementsPage() {
  const achivements = [
    "Shortlisted at the University level in the "+ "Smart-India Hackathon" +" (2020), worked on an idea for Alzheimer’s disease detection.",
    "Secured Second place in Bugathon’23 conducted by Chronus.",
    "Secured Second place in the event “Algorithm Unlock” (2020) conducted by the robotics club of CEG.",
    "Secured All India rank of 4631 in Gate 2020.",
    "Achieved 6 stars for problem-solving in HackerRank."
  ]

  const allAchivements = 
    <div> • Served as <b>Programming head</b> for Information Science and Technology Association CEG’22 - Organized multiple events in inter-college symposium - Itrix’22 and intra-college symposium - I++’22. <br />
    • Shortlisted at the University level in the <b>Smart-India Hackathon</b> (2020), focusing on the development of a solution for Alzheimer’s disease detection.<br />
    • Secured <b>Second</b> place in <b>Bugathon’23</b> conducted by Chronus.<br />
    • Secured <b>Second</b> place in the event <b>Algorithm Unlock’20</b> conducted by the robotics club of CEG.<br />
    • Secured All India rank of <b>4631</b> in Gate 2020.<br />
    • Achieved <b>6 stars</b> for problem-solving in HackerRank.<br />
      </div>
  
  return (
    <div>
      <Title name="Achievements" allProjects={allAchivements}/>
    </div>
  )
}

export default AchievementsPage