import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faPython } from '@fortawesome/free-brands-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "PingFederate",
    "PingDirectory",
    "PingOne",
    "Auth0",
    "Okta",
    "OAuth 2.0",
    "OIDC",
    "SAML",
    "JWT / JWKS",
    "DCR",
    "OBO Token Exchange"
];

const labelsSecond = [
    "Git",
    "Kafka",
    "PySpark",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "ElasticSearch",
    "Power BI",
    "Databricks",
    "Selenium",
    "Dashboards"
];

const labelsThird = [
    "LangGraph",
    "LangChain",
    "CrewAI",
    "Agentic Pipelines",
    "MCP",
    "RAG",
    "OpenAI API",
    "HuggingFace",
    "Prompt Engineering",
    "FastAPI",
    "React",
    "MongoDB"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faShieldHalved} size="3x"/>
                    <h3>IAM & Security</h3>
                    <p>I build secure identity integrations for enterprise and agentic systems—implementing OAuth 2.0/OIDC and SAML flows, JWT/JWKS validation, and Dynamic Client Registration with On-Behalf-Of token exchange for scoped, ephemeral agent identity across PingFederate, PingDirectory, and PingOne.</p>
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
                    <p>I build agentic AI systems—LangGraph multi-agent workflows, CrewAI pipelines, RAG chatbots, and MCP tool servers—paired with full-stack delivery using React, FastAPI, and MongoDB to ship production-ready GenAI applications and monitoring dashboards.</p>
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