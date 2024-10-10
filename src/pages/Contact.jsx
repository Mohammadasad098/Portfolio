import { useForm } from 'react-hook-form';


const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data)
 
  return (
    <div className='bg-[#3189ac] py-[220px]'>
      <p className='text-center'><span className='text-5xl font-semibold'>GET IN TOUCH</span> <br />
      <span className='text-[19px]'>I would like to know the final requirements of your project. Please get in touch with me and share details about your project.</span></p>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")}  type="text" placeholder='Name' />
          <input {...register("email")} type="email" placeholder='Email' />
          <textarea  rows="4" {...register("description")}
          className="textarea textarea-bordered w-full border-2 p-2"></textarea>
          <button type='submit'>submit</button>
        </form>
      </div>

    </div>
  )
}

export default Contact