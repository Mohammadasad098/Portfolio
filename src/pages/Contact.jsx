import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../config/firebase/firebaseconfig';



const Contact = () => {


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


  const { register, handleSubmit, reset, formState: { errors } } = useForm();

 

const sendDataInFirebase = async (data) => {

  try {
    const docRef = await addDoc(collection(db, "contact"), {
    name: data.name,
    email: data.email,
    description: data.description
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  reset()

}


  return (
    <div className='bg-[#3189ac] py-[190px] md:py-[150px]'>
      <p className='text-center mb-8 text-white'><span className='text-5xl font-semibold'>GET IN TOUCH</span> <br />
      <span className='text-[19px] text-white'>I would like to know the final requirements of your project. Please get in touch with me and share details about your project.</span></p>
      <div >


      <div className="flex justify-center items-center mx-5">
  <form onSubmit={handleSubmit(sendDataInFirebase)} className="space-y-6 w-full sm:w-11/12 max-w-lg">
    {/* Name Field */}
    <div className="relative w-full">
      <input 
        {...register('name', { required: true })}
        type="text" 
        placeholder="Your Name" 
        className="input input-bordered w-full p-4 rounded-lg border-2 border-indigo-300 focus:ring-2 focus:ring-indigo-500 transition"
      />
      {errors.name && <span className='text-red-600'>This field is required</span>}
    </div>

    {/* Email Field */}
    <div className="relative w-full">
      <input 
        {...register('email', { required: true })} 
        type="email" 
        placeholder="Your Email" 
        className="input input-bordered w-full p-4 rounded-lg border-2 border-indigo-300 focus:ring-2 focus:ring-indigo-500 transition"
      />
      {errors.email && <span className='text-red-600'>This field is required</span>}
    </div>

    {/* Description Field */}
    <div className="relative w-full">
      <textarea 
        {...register('description', { required: true })} 
        rows="4" 
        placeholder="Description" 
        className="textarea textarea-bordered w-full p-4 rounded-lg border-2 border-indigo-300 focus:ring-2 focus:ring-indigo-500 transition"
      ></textarea>
      {errors.description && <span className='text-red-600'>This field is required</span>}
    </div>

    {/* Submit Button */}
    <button 
      type="submit" 
      className="bg-blue-950 text-white px-5 font-semibold py-3 rounded-lg w-full transition-all transform hover:scale-105"
    >
      Send Message
    </button>
  </form>
</div>




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
  )
}

export default Contact