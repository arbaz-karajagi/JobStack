import React from 'react'
import { useForm } from "react-hook-form"
import { NavLink } from 'react-router-dom';
import { User, Lock } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';


const LoginPage = () => {

    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting }, } = useForm()
        
        const onSubmit = async(data) =>{
            await new Promise((resolve)=> setTimeout(resolve,10000))
            console.log(data)
        }
       

    return (
        <>
            <div className='bg  min-h-[100dvh] flex justify-center  items-center md:items-start bg-black p-3'>
                <div className="login h-fit w-full  md:max-w-[50dvw] lg:max-w-[30dvw] border-2 border-gray-600 rounded-2xl text-white p-5  shadow-md shadow-gray-500  ">
                    <h1 className='text-xl md:text-3xl text-center font-bold font-sans '>Login</h1>
                    <div className='my-5'>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col gap-5 py-3 md:p-5 '>
                                <Input label="username" type="text" icon={User}
                                 error={errors.username?.message}
                                    {...register("username", {
                                        required: { value: true },
                                        minLength: { value: 5, message: "minLength is 5" },
                                        maxLength: { value: 15, message: "maxLength is 15" }
                                    })} 
                                   />
                                
                                <Input  label="password" type="password" icon={Lock}
                                 error = {errors.password?.message}
                                    {...register("password", {
                                        required: { value: true },
                                        minLength: { value: 8, message: "minLength is 8" },
                                        maxLength: { value: 15, message: "maxLength is 15" }
                                    })} 
                                    />
                            </div>

                   
                    <div className="remember flex justify-between  items-center text-sm md:text-md px-3  md:px-7">
                        <div className='flex items-center gap-1 '>
                            <input type="checkbox" name="" id="" />
                            remember me
                        </div>
                        <div>forgot password</div>
                    </div>

                    <div className="btn text-center  text-sm   md:my-5 py-5 md:p-5">
                  
                  <Button  type='submit' loading={isSubmitting} className='bg-white w-full p-3 md:p-2' >Log in</Button>
                        <p className='text-center my-2'>Don't have an account? <span className='text-blue-500 cursor-pointer '> <NavLink to="/register">Register</NavLink> </span></p>
                    </div>
                </form>
            </div>
        </div >
 </div >
        </>
    )
}

export default LoginPage

