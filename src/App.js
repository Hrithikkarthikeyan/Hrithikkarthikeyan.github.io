import React, { useState } from 'react'
import './App.css';
import FullNavBar from './components/FullNavBar';


function App() {
  
  // let page;
  // switch (currentPage) {
  //   case 'home':
  //     page = <HomePage />;
  //     break;
  //   case 'experience':
  //     page = <ExperiencePage />;
  //     break;
  //   case 'projects':
  //     page = <ProjectsPage />;
  //     break;
  //   case 'achievements':
  //     page = <AchievementsPage />;
  //     break;
  //   case 'contacts':
  //     page = <ContactPage />;
  //     break;
  //   default:
  //     page = <HomePage />; 
  // }
  return (
    <div className="App">
      <FullNavBar />
      {/* {page} */}
    </div>
  );
}

export default App;
