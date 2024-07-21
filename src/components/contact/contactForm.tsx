"use client"
import React, { useState } from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SpinnerComponent from '../common/spinner';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import GoogleCaptchaWrapper from '../common/google-captcha-wrapper';

const contactFormSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Name is too short').max(50, 'Name is too long'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required').max(200, 'Message is too long')
});

const ContactForm = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleFormSubmitWithCaptcha = async (values: any, setSubmitting: any, setValues: any) => {
        if (!executeRecaptcha) {
            console.log("Execute recaptcha not available yet");
            toast.error("Execute recaptcha not available yet", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
            handleFormSubmit(values, setSubmitting, setValues, gReCaptchaToken);
        });
    }

    const handleFormSubmit = async (values: any, setSubmitting: any, setValues: any, gReCaptchaToken: string) => {
        setButtonDisabled(true);
        try {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: values.name, email: values.email, message: values.message, gReCaptchaToken })
            }
            const resp = await fetch('/api/contact', options);
            const data = await resp.json();
            if (data) {
                toast("Your response has been recorded, I'll contact you ASAP!", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    toastId: values?.email,
                    progress: undefined,
                    theme: "dark",
                });
                setValues({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (err) {
            toast.error("Failed to send message", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.log('error in form submission', err)
        } finally {
            setButtonDisabled(false);
            setSubmitting(false);
        }
    }

    return (
        <GoogleCaptchaWrapper>
            <div className="pt-5 tracking-wider">
                <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    validationSchema={contactFormSchema}
                    onSubmit={(values, { setSubmitting, setValues }) => {
                        handleFormSubmitWithCaptcha(values, setSubmitting, setValues)
                    }}
                    validate={(e) => {
                        if (Object.values(e).some((v) => v === '')) {
                            setButtonDisabled(true)
                        } else {
                            setButtonDisabled(false)
                        }
                    }}
                >
                    {(props) => (
                        <Form>
                            <div className="mb-3">
                                <Field type="text" name="name" placeholder="Name" className="w-full p-3 bg-transparent border-b-2 border-b-gray-400 text-white focus:outline-none focus:border-white" />
                                <ErrorMessage name="name" component="div" className="text-red-500 mt-2" />
                            </div>
                            <div className="mb-3">
                                <Field type="email" name="email" placeholder="Email" className="w-full p-3 bg-transparent border-b-2 border-b-gray-400 text-white focus:outline-none focus:border-white" />
                                <ErrorMessage name="email" component="div" className="text-red-500 mt-2" />
                            </div>
                            <div className="mb-3">
                                <Field as="textarea" name="message" rows={5} placeholder="Your Message" className="w-full p-3 bg-transparent border-b-2 border-b-gray-400 text-white focus:outline-none focus:border-white" />
                                <ErrorMessage name="message" component="div" className="text-red-500 mt-2" />
                            </div>
                            <div className="flex justify-center md:justify-end lg:justify-end">
                                <button disabled={Object.keys(props.errors ?? {}).length > 0 || buttonDisabled} type="submit" className={`px-6 py-2 ${Object.keys(props.errors ?? {}).length > 0 || buttonDisabled ? 'cursor-not-allowed text-gray-400 border-gray-400' : 'cursor-pointer text-white border-white'} tracking-wider border-2 flex items-center hover:bg-white hover:text-black transition ease-in-out delay-150 mt-4 md:mt-8 lg:mt-8 text-lg text-center md:text-2xl lg:text-2xl`}>
                                    Send Message {props.isSubmitting && <SpinnerComponent />}
                                </button>
                                {props.isValid}
                            </div>
                        </Form>
                    )}
                </Formik>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </GoogleCaptchaWrapper>
    )
}

export default ContactForm