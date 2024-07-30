import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "As a user, I found this to incorporate the best of all the best LLM Gen AI tools available. Very sane and guarded responses even when strongly provoked to hallucinate. Best wishes for the future.",
    author: "Dr. Jaideep Rayapudi",
    position: "M.D., VP of Clinical Solutions, Foresight"
  },
  {
    quote: "Brilliant Response. I haven’t found any inaccurate responses so far.",
    author: "Dr. Kaushik Sarkar",
    position: "Director, Malaria No More."
  },
  {
    quote: "I'm not a healthcare professional, but Cosmo has been incredibly helpful in navigating medical questions and concerns for myself and my loved ones. Its easy-to-understand explanations and access to reputable resources have been invaluable.",
    author: "Rachit Nagpal",
    position: "(International Sales Manager @ Freshworks) - Everyday User."
  },
  {
    quote: "I'm someone who often feels overwhelmed by health-related information, but Cosmo has made it much easier for me to navigate. Its straightforward advice and personalized recommendations have given me peace of mind.",
    author: "Tisha Kapoor",
    position: "(Analyst @ Evalueserve) - Everyday User."
  },
  {
    quote: "Cosmo has been a fantastic resource for my family, especially during times when we've had health concerns. Its ability to provide quick answers and guidance has been reassuring and has saved us many trips to the doctor's office. I would love to use the online doctor appointment on Cosmo.",
    author: "Shivam Kumar Jha",
    position: "(Analyst @ PlanetSpark) - Everyday User."
  },
  {
    quote: "As a nutritionist, Cosmo has been an invaluable tool in helping my clients make healthier choices. Its evidence-based recommendations are tailored to individual needs, making it easy to achieve sustainable results.",
    author: "Ritik Singh",
    position: "BVCOE Student."
  },
  {
    quote: "Cosmo has been my secret weapon in researching healthcare topics for my undergraduate thesis. Its ability to process and analyze vast amounts of data has saved me countless hours of research time.",
    author: "Dr. Kaushik Sarkar",
    position: "Director, Malaria No More."
  },
  {
    quote: "I feel this is the best approach for all healthcare providers. Being a healthcare provider, I personally liked Cosmo. It encouraged me to brush up on my knowledge and provided all the best and most reliable answers.",
    author: "Tejashri Mote",
    position: "Healthcare Provider"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [maxWidth, setMaxWidth] = useState('auto');
  const [maxHeight, setMaxHeight] = useState('auto');

  useEffect(() => {
    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    return () => {
      window.removeEventListener('resize', calculateDimensions);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(true);
      }, 500);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const calculateDimensions = () => {
    const maxWidthValue = 1080; // Max width in pixels
    setMaxWidth(`${maxWidthValue}px`);

    const maxHeightValue = 720; // Max height in pixels
    setMaxHeight(`${maxHeightValue}px`);
  };

  const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
      setFade(true);
    }, 500);
  };

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 500);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="title-2 mt-5">
            Some <span>Testimonials</span>
          </h2>
        </div>
      </div>
      <div className={`row ${styles.testimonials}`} style={{ maxWidth: maxWidth, maxHeight: maxHeight }}>
        <div className={`col-md-12 ${styles.testimonial} ${fade ? styles.show : ''}`}>
          <p className={styles.quote}>&quot;{testimonials[currentIndex].quote}&quot;</p>
          <p className={styles.author}>- {testimonials[currentIndex].author}, {testimonials[currentIndex].position}</p>
        </div>
        <div className={`col-md-12 ${styles.controls}`}>
          <button onClick={prevTestimonial} className={styles.button}>Prev</button>
          <button onClick={nextTestimonial} className={styles.button}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
