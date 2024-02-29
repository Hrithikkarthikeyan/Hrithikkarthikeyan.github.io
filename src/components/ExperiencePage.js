import React from 'react'
import Title from './Title'
import Experience from './Experience'

function ExperiencePage() {
  const experiences = [
    {
      role: "Software Development Engineer 1",
      companyName: "Chronus",
      timeRange: "Jul 2022 - Present",
      description: " Managed quality assurance by investigating and fixing existing bugs. Reduced the total bug count by nearly 20%, improving user experience. \n Improved operational efficiency by automating a phase in the error monitoring process by developing a Chrome extension.\n Implemented a rate-limiting algorithm to restrict error notification surges, ensuring system resilience. \n Contributed significantly to feature releases, including Archive Survey and Campaign management for connection views. \n Worked on data analytics which involved fetching and analysis of the data to find actionable insights. Worked in integrating third-party tools like Mixpanel, Hotjar, and Vitally along with developing frameworks for easy implementation and streamlined data management."
    },
    {
      role: "Programming Head",
      companyName: "College of Engineering, Guindy",
      timeRange: "Oct 2021 - Jun 2022",
      description: "Organized multiple events in inter college symposium - Itrix’22 and intra college symposium - I++’22"
    }

  ]

  let allExperiences = experiences.map((experience, index) => {
    return <div><Experience id={index} role={experience.role} companyName={experience.companyName} timeRange={experience.timeRange} description={experience.description} /> <br/></div>
  })

  return (
    <div>
      <Title name="Experience" allProjects={allExperiences}/>
    </div>
  )
}

export default ExperiencePage