import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { auth , sendData } from '../config/firebase/firebasemethods';
import { onAuthStateChanged } from 'firebase/auth';

const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [blogs, setBlogs] = useState([]);
  const sendDatatoFirestore = async (data) => {
    setLoading(true);
    try {
      const response = await sendData({
        title: data.title,
        description: data.description,
        uid: auth.currentUser.uid,
      }, 'blogs');

      setBlogs((prevBlogs) => [
        ...prevBlogs,
        {
          title: data.title,
          description: data.description,
          uid: auth.currentUser.uid,
        },
      ]);
      reset();
      // console.log(response);
    } catch (error) {
      // console.error(error);

    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='bg-[#3189ac] py-[220px]'>
      <p className='text-center'><span className='text-5xl font-semibold'>GET IN TOUCH</span> <br />
      <span className='text-[19px]'>I would like to know the final requirements of your project. Please get in touch with me and share details about your project.</span></p>
      <div>
        
      </div>

    </div>
  )
}

export default Contact