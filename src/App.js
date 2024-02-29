import React, { useState } from 'react'
import './App.css';
import FullNavBar from './components/FullNavBar';
import HomePage from './components/HomePage';
import AchievementsPage from './components/AchievementsPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';


function App() {
  const [currentPage, setCurrentPage] = useState();

  let page;
  switch (currentPage) {
    case 'home':
      page = <HomePage />;
      break;
    case 'experience':
      page = <ExperiencePage />;
      break;
    case 'projects':
      page = <ProjectsPage />;
      break;
    case 'achievements':
      page = <AchievementsPage />;
      break;
    case 'contacts':
      page = <ContactPage />;
      break;
    default:
      page = <HomePage />; 
  }
  return (
    <div className="App">
      <FullNavBar setCurrentPage={setCurrentPage} />
      {page}
    </div>
  );
}

export default App;
