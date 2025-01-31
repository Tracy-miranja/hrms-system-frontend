import React from 'react'
import Header from './header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight  } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';
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
    <>
    <div className='flex h-screen text-white'>
    <div className='home flex flex-col justify-center w-[50%] h-full pl-20 gap-4'>
      <h1 className='text-black font-bold text-5xl'>
        Infinite Possibilities for <br />
        <span className='text-blue-500 pt-2'>{currentWord}</span>
        <span className="text-blue-500">|</span>
      </h1>
      <p className='text-black pt-3 pb-3 text-xl pr-3'>
        AMSOL has a highly skilled, knowledgeable, experienced, diversified, and solid team of competent 
        and experienced hr consulting professionals.
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
  
        <div className='flex gap-2 w-[50%] h-full bg-white'>
            <div className='sectionA w-[50%] h-full bg-blue-600 rounded-xl'></div>
            <div className='sectionB w-[50%] h-full bg-white rounded-xl'></div>
        </div>
    </div>
    </>
  )
}

export default Banner