import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from "./components/Section.jsx";
import {sections} from "./data.js";

function App() {
    const formatID = (title) => {
        return title.toLowerCase().replace(' ', '-');
    }

    return (
    <>
        <h2 className="eyebrow">All I want is a...</h2>
        <h1 className="title">CSS Cheatsheet</h1>
        <div className="grid">
            <nav>
                <ul>
                    { Object.values(sections).map((section, index) => (
                        <li key={index}>
                            <a href={`#${formatID(section.title)}`}>{section.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <main>
                { Object.values(sections).map((section, index) => (
                    <Section key={index} title={section.title} defaultStyles={section.defaultStyles} previewContent={section.previewContent}/>
                ))}
            </main>
        </div>
    </>
  )
}

export default App
