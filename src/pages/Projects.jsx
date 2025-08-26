import React, { useState, useEffect } from "react";
import Card from '../components/Card'
import { FaArrowUp } from "react-icons/fa";


const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className='bg-[#3189ac] py-40 text-white'>

        <p className='text-center'> <span className='font-semibold text-6xl'>My Recent <span className='text-blue-950'>Works</span></span> <br /> <br /> <span className='text-3xl mx-2'>Here are a few projects I've worked on recently</span></p>

        <div className='flex justify-center flex-wrap gap-5 my-9 md:mx-3'>
          <Card src="/images/project13.png" heading="Microfinance Web Application – Hackathon Project (SMIT)" description="Developed a full-stack Microfinance Web Application during the SMIT final hackathon. The app allows users to register, apply for microloans, track loan status, and view repayment history. Built using React.js for the frontend, Express.js and Node.js for the backend, and MongoDB for the database." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/SMIT-HACKATHON-FRONTEND" button
            link2="https://smit-hackathon-frontend-peach.vercel.app/"
          />
          <Card src="/images/project14.png" heading="Elitotech Solution" description="An animated software house website built using React.js , Firebase , and Framer Motion . Features smooth UI transitions and a modern layout to professionally present services." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/elitotech" button
            link2="https://elitotechsolution.web.app/"
          />
          <Card src="/images/project1.png" heading="Blogging App" description="I developed a blogging application using React and Firebase that allows users to create, read blog posts seamlessly. The app features an intuitive user interface, enabling users to easily navigate through various blog entries and interact with content." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/React-Blogging-App" button
            link2="https://react-blogging-app-sigma.vercel.app/"
          />
          <Card src="/images/project2.png" heading="Memes Maker" description="I developed a Meme Maker application using Next.js, allowing users to create and customize their own memes easily. This app features an intuitive interface that lets users add text, and share their creations with friends or on social media." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/Next-Meme-Maker" button
            link2="https://next-meme-maker-alpha.vercel.app/"
          />
          <Card src="/images/project4.png" heading="Quiz App" description="I developed an interactive Quiz App using React.js that provides users with an engaging way to test their knowledge across various topics. This application allows users to take quizzes, view their scores, and track their progress over time" button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/React-Quiz-App" button
            link2="https://react-quiz-app-nine-iota.vercel.app/"
          />
          <Card src="/images/project3.png" heading="Redux Todo App" description="I developed a To-Do app using React.js and Redux for state management. This application allows users to easily create, update, and delete tasks, providing a seamless experience for organizing their daily activities." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/Redux-TodoApp" button
            link2="https://redux-todo-app-ashen.vercel.app/"
          />
          <Card src="/images/project5.png" heading="Todo App" description="I developed a To-Do app using React.js for state management. This application allows users to easily create, update, and delete tasks, providing a seamless experience for organizing their daily activities." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/react-todoapp" button
            link2="https://react-todoapp-beige.vercel.app/"
          />
          <Card src="/images/project6.png" heading="Weather App" description="I created a Weather App using React.js that provides real-time weather information for various locations around the world. The app allows users to easily search for their desired city and view current weather conditions, forecasts, and additional details." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/React-Weather-App" button
            link2="https://react-weather-app-five-sandy.vercel.app/"
          />
          <Card src="/images/project7.png" heading="Firebase Todo App" description="I developed a To-Do App using HTML, CSS, and JavaScript in conjunction with Firebase for a seamless task management experience. This application allows users to create, update, and delete tasks while leveraging Firebase for real-time data synchronization and secure user authentication." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/todoapp-by-firebase" button
            link2="https://todoapp-by-firebase-d636d.firebaseapp.com/"
          />
          <Card src="/images/project8.png" heading="Stop Watch" description="I created a Stop Watch application using HTML, CSS, and JavaScript to provide users with a simple and functional tool for tracking time. The application allows users to start, stop, and reset the timer with ease, providing an intuitive and responsive interface." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/Stop-Watch" button
            link2="https://mohammadasad098.github.io/Stop-Watch/"
          />
          <Card src="/images/project9.png" heading="Toss App" description="I developed a Toss App using HTML, CSS, and JavaScript that simulates a coin toss, allowing users to easily flip a virtual coin for heads or tails. The app provides a simple and engaging way to make decisions based on a random outcome." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/Toss-App" button
            link2="https://toss-app-iota.vercel.app/"
          />
          <Card src="/images/project10.png" heading="PriceOye.com Clone" description="I developed a PriceOye.com clone called My Store using HTML and CSS to replicate the layout and design of the popular e-commerce platform. This project focuses on creating a clean, responsive, and visually appealing interface that mirrors the look and feel of the original website." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/My-store" button
            link2="https://mohammadasad098.github.io/My-store/"
          />
          <Card src="/images/project11.png" heading="Noon.com Clone" description="I created a Noon.com clone using HTML and CSS to replicate the design and user interface of the popular e-commerce platform. This project focuses on re-creating the visual structure and layout, providing an intuitive and responsive experience similar to the original website." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/Noon-website" button
            link2="https://mohammadasad098.github.io/Noon-website/"
          />
          <Card src="/images/project12.png" heading="Salt'n Pepper Clone
" description="I developed a clone of Salt'n Pepper website (saltnpepper.com.pk) using HTML and CSS to replicate the design and structure of the original restaurant platform. The project focuses on re-creating the visual layout of the website, providing a static, non-responsive version of the site." button1="Github" button2="View Live Demo" link1="https://github.com/Mohammadasad098/Salt-n-Pepper" button
            link2="https://mohammadasad098.github.io/Salt-n-Pepper/"
          />
        </div>

        <div>
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-4 right-8 bg-blue-950 font-bold text-white text-2xl px-4 py-3 rounded-md shadow-lg"
            >
              <FaArrowUp />
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Projects