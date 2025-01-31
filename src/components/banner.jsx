import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Banner() {
  const words = ['HR Managers', 'Recruiters', 'Payroll Experts', 'Employees'];
  const [currentWord, setCurrentWord] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 300;
  const pauseTime = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];

      if (!isDeleting) {
        setCurrentWord((prev) => fullWord.slice(0, prev.length + 1));

        if (currentWord === fullWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting the word
        setCurrentWord((prev) => fullWord.slice(0, prev.length - 1));

        if (currentWord === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentWord, isDeleting, currentWordIndex, words]);

  return (
    <div className='flex flex-col lg:flex-row h-screen text-white'>
      {/* Left section */}
      <div className='home flex flex-col justify-center w-full lg:w-1/2 h-full pl-6 lg:pl-20 gap-4'>
        <h1 className='text-black font-bold text-3xl sm:text-4xl lg:text-5xl'>
          Infinite Possibilities for <br />
          <span className='text-blue-500 pt-2'>{currentWord}</span>
          <span className="text-blue-500">|</span>
        </h1>
        <p className='text-black pt-3 pb-3 text-lg sm:text-xl'>
          AMSOL has a highly skilled, knowledgeable, experienced, diversified, and solid team of competent 
          and experienced HR consulting professionals.
        </p>
        <Link to="/Demo">
          <button className='flex text-black bg-blue-500 p-2 rounded-full w-fit items-center text-white hover:bg-white border hover:text-black hover:border-blue-400'>
            Request a demo
            <FontAwesomeIcon
              icon={faCircleRight}
              className='text-xl border border-white rounded-full ml-2'
            />
          </button>
        </Link>
      </div>

      {/* Right section */}
      <div className='flex gap-2 w-full lg:w-1/2 h-full bg-white'>
        <div className='sectionA w-1/2 lg:w-1/2 h-full bg-blue-600 rounded-xl'></div>
        <div className='sectionB w-1/2 lg:w-1/2 h-full bg-white rounded-xl'></div>
      </div>
    </div>
  );
}

export default Banner;
