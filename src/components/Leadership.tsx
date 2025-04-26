import React, { useState, useEffect } from 'react';
import '../assets/styles/Leadership.scss';

// Import images manually
import NPS1 from '../assets/images/leadership/NPS1.jpg';
import NPS2 from '../assets/images/leadership/NPS2.jpg';
import NPS3 from '../assets/images/leadership/NPS3.jpg';
import NPS4 from '../assets/images/leadership/NPS4.jpg';
import NPS5 from '../assets/images/leadership/NPS5.jpg';
import NPS6 from '../assets/images/leadership/NPS6.jpg';
import NPS7 from '../assets/images/leadership/NPS7.jpg';
import NPS8 from '../assets/images/leadership/NPS8.jpg';
import NPS9 from '../assets/images/leadership/NPS9.jpg';
import NPS10 from '../assets/images/leadership/NPS10.jpg';

import vts1 from '../assets/images/leadership/vts1.jpg';
import vts2 from '../assets/images/leadership/vts2.jpg';
import vts3 from '../assets/images/leadership/vts3.jpg';
import vts4 from '../assets/images/leadership/vts4.jpg';
import vts5 from '../assets/images/leadership/vts5.jpg';
import vts6 from '../assets/images/leadership/vts6.jpg';
import vts7 from '../assets/images/leadership/vts7.jpg';
import vts8 from '../assets/images/leadership/vts8.jpg';
import vts9 from '../assets/images/leadership/vts9.jpg';
import vts10 from '../assets/images/leadership/vts10.jpg';
import vts11 from '../assets/images/leadership/vts11.jpg';
import vts12 from '../assets/images/leadership/vts12.gif';

import misc1 from '../assets/images/leadership/misc1.jpg';
import misc2 from '../assets/images/leadership/misc2.jpg';
import misc3 from '../assets/images/leadership/misc3.jpg';
import misc4 from '../assets/images/leadership/misc4.jpg';


const leadershipData = [
  {
    title: "School Captain- National Public School",
    images: [NPS1, NPS2, NPS3, NPS4, NPS5, NPS6, NPS7, NPS8, NPS9, NPS10],
    description:
      "Lead the school in various events and activities, including sports, cultural programs, and academic competitions. Organized inter-school competitions and represented the school in various events. Acted as a liaison between students and teachers, addressing concerns and suggestions. Promoted a positive school culture and encouraged student participation in extracurricular activities.",
  },
  {
    title: "Event Organizer - Independent",
    images: [misc1, misc2, misc3, misc4],
    description:
      "Conducted independent events with friends both in person and online. In person events included a futsal tournament and badminton tournament where popular celebrities were invited to speak and the finances were raised with help of sponsors. Online event was a bingo game conducted over Zoom platform during Covid-19 lockdown.",
  },
  {
    title: "President - Vaalmeengal Tamil Sangam @UTD",
    images: [vts1, vts2, vts3, vts4, vts5, vts6, vts7, vts8, vts9, vts10, vts11, vts12],
    description:
      "Organized several events including cultural - Diwali, Pongal, etc, charity - fundraising, volunteering, etc,  and career events- networking, resume workshops, industry leader mentoring, etc. ",
  },
];

const Leadership: React.FC = () => {
    const [currentSlides, setCurrentSlides] = useState(Array(leadershipData.length).fill(0));
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlides((prev) =>
          prev.map((val, i) => (val + 1) % leadershipData[i].images.length)
        );
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);
  
    const nextSlide = (index: number) => {
      setCurrentSlides((prev) => {
        const updated = [...prev];
        updated[index] = (prev[index] + 1) % leadershipData[index].images.length;
        return updated;
      });
    };
  
    const prevSlide = (index: number) => {
      setCurrentSlides((prev) => {
        const updated = [...prev];
        updated[index] =
          (prev[index] - 1 + leadershipData[index].images.length) %
          leadershipData[index].images.length;
        return updated;
      });
    };
  
    return (
        <div id="leadership">
        <div className="leadership-header">
            <h1>Leadership</h1>
            <p>I have held several leadership positions starting as early as second grade, when I was the class leader. Taking initiative has always been one of my strengths. Whether in academic, social, charitable, or sports environments, I've consistently been the one to step up and take charge. I've also participated in several disaster relief programs, contributing through tasks like transporting supplies and packing food. I never hesitate to take on any kind of work and don't believe any job is beneath me. One of my best qualities is my ability to listen, ask the right questions, and work as part of a team—not just lead and delegate.</p>
        </div>
        <div className="leadership-container">
        
        {leadershipData.map((item, index) => (
          <div className="leadership-tile" key={index}>
            <div className="slideshow-wrapper">
              <div
                className="slide-track"
                style={{
                  transform: `translateX(-${currentSlides[index] * 100}%)`,
                }}
              >
                {item.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${item.title} slide ${i}`}
                    className="slide-image"
                  />
                ))}
              </div>
              <div className="slideshow-buttons">
                <button onClick={() => prevSlide(index)}>&lt;</button>
                <button onClick={() => nextSlide(index)}>&gt;</button>
              </div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    );
  };
  
  export default Leadership;