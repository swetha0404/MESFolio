import React, { useState } from 'react';
import '../assets/styles/Documents.scss';

import resume from '../assets/images/documents/resume.jpg';
import utdtranscript from '../assets/images/documents/utdtranscript.jpg';
import googledataanalytics from '../assets/images/documents/googledataanalytics.jpg';
import databricksgenai from '../assets/images/documents/databricksgenai.jpg';
import googleanalytics from '../assets/images/documents/googleanalytics.jpg';
import hackathon from '../assets/images/documents/hackathon.jpg';
import srmtranscript from '../assets/images/documents/srmtranscript.jpg';
import bestpaperaward from '../assets/images/documents/bestpaperaward.jpg';
import falldetection from '../assets/images/documents/falldetection.jpg';
import fallprediction from '../assets/images/documents/fallprediction.jpg';

type DocumentType = {
  id: number;
  title: string;
  description: string;
  fileUrl: string;
  previewImg: string;
};

const documents: DocumentType[] = [
  
  {
    id: 1,
    title: 'Google Analytics Certification',
    description: 'Certification from Google obtained through passing assessment.',
    fileUrl: 'https://mesportfolio.s3.us-east-1.amazonaws.com/documents/Google+Analytics+Certification.pdf',
    previewImg: googleanalytics,
  },
  {
    id: 2,
    title: 'Data Analytics Professional Certification',
    description: "Google's official certification -Obtained through Coursera.",
    fileUrl: 'https://mesportfolio.s3.us-east-1.amazonaws.com/documents/Google+Data+Analytics+Professional+Certificate.pdf',
    previewImg: googledataanalytics,
  },
  {
    id: 3,
    title: 'Databricks GenAI Fundamentals Certification',
    description: "Databricks accredited Generative AI Fundamentals certificate.",
    fileUrl: 'https://mesportfolio.s3.us-east-1.amazonaws.com/documents/Google+Data+Analytics+Professional+Certificate.pdf',
    previewImg: databricksgenai,
  },
  {
    id: 4,
    title: 'Publication for Fall Detection Project',
    description: 'Publication for first part of final year project during undergraduate education. Published in IOS Press.',
    fileUrl: 'https://mesportfolio.s3.us-east-1.amazonaws.com/documents/Fall+Detection+Publication.pdf',
    previewImg: falldetection,
  },
  {
    id: 5,
    title: 'Publication for Fall Prediction Project',
    description: 'Publication for second part of final year project. Published in Trans Tech Publications.',
    fileUrl: 'https://mesportfolio.s3.us-east-1.amazonaws.com/documents/Fall+Prediction+Publication.pdf',
    previewImg: fallprediction,
  },
  {
    id: 6,
    title: 'Best Paper Award - Fall Prediction Project',
    description: 'Awarded by ICRTETE Conference 2022.',
    fileUrl: 'https://mesportfolio.s3.us-east-1.amazonaws.com/documents/Best+Paper+Award-ICRTETE2022.pdf',
    previewImg: bestpaperaward,
  },
  
  {
    id: 7,
    title: 'Undergraduate Transcript',
    description: 'Final transcript from SRM Institute of Science and Technology.',
    fileUrl: 'https://mesportfolio.s3.us-east-1.amazonaws.com/documents/Undergraduate+Transcript+(SRMIST).pdf',
    previewImg: srmtranscript,
  },
  {
    id: 8,
    title: 'Graduate Transcript',
    description: 'Final transcript from University of Texas at Dallas.',
    fileUrl: 'https://mesportfolio.s3.us-east-1.amazonaws.com/documents/UTD+FInal+Transcript.pdf',
    previewImg: utdtranscript,
  },
  {
    id: 9,
    title: 'Hackathon Certificate',
    description: "Hackathon organized by Marathwada Mitra Mandal's College of Engineering.",
    fileUrl: 'https://mesportfolio.s3.us-east-1.amazonaws.com/documents/Hacksprint+Certificate.pdf',
    previewImg: hackathon,
  },
  {
    id: 10,
    title: 'Resume',
    description: 'Current Resume',
    fileUrl: 'https://mesportfolio.s3.us-east-1.amazonaws.com/Swetha_Malaivaiyavur_Elayavalli_Resume.pdf',
    previewImg: resume,
  },
  
];

const Documents: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<null | DocumentType>(null);

  const openModal = (doc: DocumentType) => setSelectedDoc(doc);
  const closeModal = () => setSelectedDoc(null);

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${filename}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="documents-container">
      <h2>My Documents</h2>
      <div className="documents-grid">
        {documents.map((doc) => (
          <div className="document-tile" key={doc.id} onClick={() => openModal(doc)}>
            <h4>{doc.title}</h4>
            <p>{doc.description}</p>
          </div>
        ))}
      </div>

      {selectedDoc && (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
                src={selectedDoc.previewImg}
                alt={selectedDoc.title}
                className="document-preview"
            />
            <div className="modal-buttons">
                <button onClick={closeModal} className="close-btn">Close</button>
                <button
                onClick={() => handleDownload(selectedDoc.fileUrl, selectedDoc.title)}
                className="download-btn"
                >
                Download PDF
                </button>
            </div>
            </div>
        </div>
        )}
    </div>
  );
};

export default Documents;
