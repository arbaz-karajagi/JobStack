import React from 'react'
import { useForm } from "react-hook-form"
import { User } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';


const LoginPage = () => {

    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting }, } = useForm()

    const onSubmit = async(data) => {
        await new Promise((resolve)=> setTimeout(resolve,10000))
        console.log(data)}

    return (
        <>
            <div className='bg   min-h-[100dvh] flex justify-center    bg-black p-3'>
                <div className="login h-fit  flex items-center justify-start overflow-hidden border-2 border-gray-600 rounded-2xl text-white  
                 w-full md:max-w-[50dvw] shadow-md shadow-gray-500">
                    <div className=' lg:w-1/2  hidden lg:flex lg:h-[82vh] '>
                        <img className='rounded-l-2xl w-full  ' src="/images/hello.webp" alt="greet_img" />
                    </div>
                    <div className='  p-5  w-full  lg:w-1/2  rounded-r-2xl'>
                        <h1 className='text-xl md:text-3xl text-center font-bold font-sans mt-3 '>Create Account</h1>
                        <div className='my-5'>


                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex flex-col  gap-5 py-3 md:p-5 '>
                                    <Input label="username" type='text' icon={User}
                                        error={errors.username?.message}
                                        {...register("username", {
                                            required: { value: true },
                                            minLength: { value: 5, message: "minLength is 5" },
                                            maxLength: { value: 15, message: "maxLength is 15" }
                                        })} />

                                    <Input label="email" type='email' icon={Mail}
                                        error={errors.email?.message}
                                        {...register("password", {
                                            required: { value: true },
                                            minLength: { value: 15, message: "minLength is 15" },
                                            maxLength: { value: 25, message: "maxLength is 25" }
                                        })} />

                                    <Input label="password" type='password' icon={Lock}
                                        error={errors.password?.message}
                                        {...register("password", {
                                            required: { value: true },
                                            minLength: { value: 8, message: "minLength is 8" },
                                            maxLength: { value: 15, message: "maxLength is 15" }
                                        })} />


                                    {/* <input type="submit" /> */}
                                </div>


                                <div className="btn text-sm text-center   md:my-5 py-5 md:p-5">
                                    <Button  type='submit' loading={isSubmitting} className='bg-white w-full p-3 md:p-2 ' >Sign up for free</Button>
                                    <p className='text-center  text-sm my-2'>Already have an account? <span className='text-blue-500 cursor-pointer '> <NavLink to="/login">Login</NavLink> </span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
