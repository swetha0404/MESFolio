import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAws, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Vite",
    "ChakraUI",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Flask",
    "Python",
    "SQL",
    "MongoDB",
    "Postman"
];

const labelsSecond = [
    "Git",
    "Kafka",
    "PySpark",
    "AWS",
    "Azure",
    "ElasticSearch",
    "Power BI",
    "Databricks",
    "Selenium",
    "Dashboards"
];

const labelsThird = [
    "Prompt Engineering",
    "LangChain",
    "HuggingFace",
    "RAG",
    "SpaCy",
    "OpenAI API",
    "MultiModal LLMs",
    "Fine-tuning",
    "NLP"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>AI Engineering & Data Pipelines</h3>
                    <p>I build scalable, real-time pipelines to support AI workflows—from ingesting data to deploying models and visualizing insights. My focus is on efficiency, automation, and actionable results.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I specialize in building GenAI-powered systems using prompt engineering, RAG pipelines, and model fine-tuning for interactive chatbots, and LLM-integrated workflows for enterprise and academic use cases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;