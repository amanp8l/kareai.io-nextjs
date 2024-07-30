'use client'; // Ensure client-side rendering

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Brand.module.css'; // Import CSS file for styling

export default function Brand() {
  const brandsRef = useRef(null);

  useEffect(() => {
    const brandsList = brandsRef.current;
    let animationId;
    let slidePosition = 0;
    const speed = 0.5; // Adjust speed of the slide (higher is faster)

    const animateBrands = () => {
      const brandsWidth = brandsList.scrollWidth;
      const containerWidth = brandsList.parentElement.offsetWidth;

      // Update the slide position
      slidePosition -= speed; // Move to the left

      // Reset slide position if exceeded total width
      if (Math.abs(slidePosition) >= brandsWidth) {
        slidePosition = 0;
      }

      // Apply the left position for sliding effect
      brandsList.style.transform = `translateX(${slidePosition}px)`;

      // Request next animation frame
      animationId = requestAnimationFrame(animateBrands);
    };

    // Start the animation loop
    animateBrands();

    // Cleanup function to cancel animation frame on component unmount
    return () => cancelAnimationFrame(animationId);
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className={styles.heroBrand}>
      <p className="text-center">Preferred by Teams at</p>
      <div className={styles.gradientBackground}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className={styles.brandsList} ref={brandsRef}>
                <li>
                  <div>
                    <Image src="/img/clients/6.bmp" alt="brand" width={190} height={74} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/1.bmp" alt="brand" width={130} height={80} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/4.bmp" alt="brand" width={170} height={74} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/5.bmp" alt="brand" width={210} height={74} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/7.png" alt="brand" width={130} height={90} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/8.png" alt="brand" width={130} height={80} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/9.png" alt="brand" width={170} height={74} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/10.png" alt="brand" width={210} height={74} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/11.png" alt="brand" width={210} height={74} />
                  </div>
                </li>
                
                <li>
                  <div>
                    <Image src="/img/clients/13.png" alt="brand" width={210} height={74} />
                  </div>
                </li>
                {/* Duplicate items for seamless looping */}
                <li>
                  <div>
                    <Image src="/img/clients/6.bmp" alt="brand" width={190} height={74} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/1.bmp" alt="brand" width={130} height={80} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/4.bmp" alt="brand" width={170} height={74} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/5.bmp" alt="brand" width={210} height={74} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/7.png" alt="brand" width={190} height={74} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/8.png" alt="brand" width={130} height={80} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/9.png" alt="brand" width={170} height={74} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/10.png" alt="brand" width={210} height={74} />
                  </div>
                </li>
                <li>
                  <div>
                    <Image src="/img/clients/11.png" alt="brand" width={210} height={74} />
                  </div>
                </li>
                
                <li>
                  <div>
                    <Image src="/img/clients/13.png" alt="brand" width={210} height={74} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
