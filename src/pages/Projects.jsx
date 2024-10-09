import React from 'react'
import Card from '../components/Card'

const Projects = () => {
  return (
    <>
    <div className='bg-[#3189ac] py-40'>

      <p className='text-center'> <span className='font-semibold text-5xl'>My Recent Works</span> <br /> <span className='text-2xl mt-3'>Here are a few projects I've worked on recently</span></p>
  
<div className='flex justify-center flex-wrap gap-5 my-9'>
  <Card src="/images/project1.png" heading="Blogging App" description="I developed a blogging application using React that allows users to create, read blog posts seamlessly. The app features an intuitive user interface, enabling users to easily navigate through various blog entries and interact with content." button1="Github" button2="View Live Demo"   link1="https://github.com/Mohammadasad098/React-Blogging-App"button
  link2="https://react-blogging-app-sigma.vercel.app/"
/>
  <Card src="/images/project2.png" heading="Memes Maker" description="I developed a Meme Maker application using Next.js, allowing users to create and customize their own memes easily. This app features an intuitive interface that lets users add text, and share their creations with friends or on social media." button1="Github" button2="View Live Demo"  link1="https://github.com/Mohammadasad098/Next-Meme-Maker"button
  link2="https://next-meme-maker-alpha.vercel.app/"
/>
  <Card src="/images/project4.png" heading="Quiz App" description="I developed an interactive Quiz App using React.js that provides users with an engaging way to test their knowledge across various topics. This application allows users to take quizzes, view their scores, and track their progress over time" button1="Github" button2="View Live Demo"  link1="https://github.com/Mohammadasad098/React-Quiz-App"button
  link2="https://react-quiz-app-nine-iota.vercel.app/"
/>
  <Card src="/images/project3.png" heading="Redux Todo App" description="I developed a To-Do app using React.js and Redux for state management. This application allows users to easily create, update, and delete tasks, providing a seamless experience for organizing their daily activities." button1="Github" button2="View Live Demo"   link1="https://github.com/Mohammadasad098/Redux-TodoApp"button
  link2="https://redux-todo-app-ashen.vercel.app/"
/>
  <Card src="/images/project5.png" heading="Todo App" description="I developed a To-Do app using React.js for state management. This application allows users to easily create, update, and delete tasks, providing a seamless experience for organizing their daily activities." button1="Github" button2="View Live Demo"   link1="https://github.com/Mohammadasad098/react-todoapp"button
  link2="https://react-todoapp-beige.vercel.app/"
/>
  <Card src="/images/project6.png" heading="Weather App" description="I created a Weather App using React.js that provides real-time weather information for various locations around the world. The app allows users to easily search for their desired city and view current weather conditions, forecasts, and additional details." button1="Github" button2="View Live Demo"   link1="https://github.com/Mohammadasad098/React-Weather-App"button
  link2="https://react-weather-app-five-sandy.vercel.app/"
/>
  <Card src="/images/project3.png" heading="Firebase Todo App" description="I developed a To-Do App using HTML, CSS, and JavaScript in conjunction with Firebase for a seamless task management experience. This application allows users to create, update, and delete tasks while leveraging Firebase for real-time data synchronization and secure user authentication." button1="Github" button2="View Live Demo"   link1="https://github.com/Mohammadasad098/todoapp-by-firebase"button
  link2="https://todoapp-by-firebase-d636d.firebaseapp.com/"
/>
</div>
    </div>
    </>
  )
}

export default Projects