import React from 'react'
import TagWord from '../common/tagWord'
import Link from 'next/link'
import { MdLocalPhone } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import ContactForm from './contactForm';
import GoogleCaptchaWrapper from '../common/google-captcha-wrapper';

const ContactMe = () => {
  return (
    <section className="section py-14 md:py-20 lg:py-20 relative">
      <div className="py-0 md:py-10 lg:py-10">
        <TagWord text='Contact' />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <div className="pt-5 tracking-wider">
              <p className='text-lg md:text-2xl lg:text-2xl text-white'>
                Have a project or opportunity in mind? Feel free to reach out to me. Just give me a message whenever and however you want.
                I will get back to you as soon as possible.
              </p>

              <p className='text-lg mt-10 md:text-2xl lg:text-2xl text-white'>
                Reach out to me at -
              </p>
              <div className='text-lg mt-5 md:text-2xl lg:text-2xl text-white'>
                <Link className='flex text-gray-400 hover:text-white transition ease-in-out delay-150 items-center gap-2' href={'tel:917792062402'} >
                  <div className="w-4 mr-2">
                    <MdLocalPhone size={25} />
                  </div>
                  <p>
                    +91 779 206 2402
                  </p>
                </Link>
              </div>

              <div className='text-lg mt-5 md:text-2xl lg:text-2xl text-white'>
                <Link className='flex text-gray-400 hover:text-white transition ease-in-out delay-150 items-center gap-2' href={'mailto:srrathi2000@gmail.com'} >
                  <div className="w-4 mr-2">
                    <IoMailSharp size={25} />
                  </div>
                  <p>
                    srrathi2000@gmail.com
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <GoogleCaptchaWrapper >
              <ContactForm />
            </GoogleCaptchaWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe