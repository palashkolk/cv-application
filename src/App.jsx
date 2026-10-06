import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Education from './components/Education'
import Experience from './components/Experience'
import GeneralInfo from './components/GeneralInfo'
import './styles/App.css'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [general, setGeneral] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ school: '', title: '', date: '' });
  const [experience, setExperience] = useState({ company: '', position: '', responsibilities: '', date: '' });
  
  // console.log(isSubmitted)


  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CV Builder</h1>
      </header>
      <main className="main-content">
        <div className={isSubmitted ? "cv-preview-container" : "cv-form-container"}>
          
          <GeneralInfo
            data={general}
            setData={setGeneral}
            isSubmitted={isSubmitted}
          />

          <Education
            data={education}
            setData={setEducation}
            isSubmitted={isSubmitted}
          />

          <Experience
            data={experience}
            setData={setExperience}
            isSubmitted={isSubmitted}
          />

        </div>

        <div className="controls">
          <button
            onClick={() => setIsSubmitted(!isSubmitted)}
            className={`btn-toggle ${isSubmitted ? 'btn-edit' : 'btn-submit'}`}
          >
            {isSubmitted? "Edit CV" : "Submit CV"}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
