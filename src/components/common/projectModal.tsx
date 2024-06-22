import React from 'react'
import { IoMdClose } from "react-icons/io";
import TagWord from './tagWord';
import Heading from './heading';
import ListElements from './listElements';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from "react-icons/md";
import Link from 'next/link';
import { FaExternalLinkAlt } from "react-icons/fa";
import projectsData from '../projects/data.json';

interface ProjectModalProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    activeIndex?: number
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, setOpen, activeIndex }) => {
    const data = projectsData[activeIndex ?? 0] ?? null;
    return (
        <div>
            <div className="flex relative w-full mx-auto my-auto px-auto py-auto">
                <div tabIndex={-1} className={`${open ? 'block' : 'hidden'} transition ease-in-out delay-150 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 mx-auto my-auto z-[5000] justify-center items-center w-full md:inset-0 max-h-full`}>
                    {
                        data ? <div className="relative p-4 mx-auto my-auto w-full max-w-[1536px] flex h-full max-h-full">
                            {/* <!-- Modal content --> */}
                            <div className="relative bg-black mx-auto my-auto shadow">
                                {/* <!-- Modal header --> */}
                                <div className="flex items-center justify-between p-4 md:p-8 lg:p-8">
                                    <div className='mt-5'>
                                        <TagWord text='Project' />
                                    </div>
                                    <button type="button" className="text-gray-400 hover:text-white w-8 h-8 ms-auto inline-flex justify-center items-center"
                                        onClick={() => setOpen(false)} >
                                        <IoMdClose size={30} />
                                    </button>
                                </div>
                                {/* <!-- Modal body --> */}
                                <div className="w-full p-4 md:p-8 lg:p-8">
                                    <div className="grid w-full grid-cols-12 gap-2 md:gap-10 lg:gap-10 my-auto items-center">
                                        <div className="col-span-12 md:col-span-7 lg:col-span-7">
                                            <Heading text={data?.heading + ' - ' + data?.subHeading} />
                                            <p className="pt-5 tracking-wider text-lg md:text-xl lg:text-xl text-white">
                                                {data?.description}
                                            </p>
                                            <ListElements
                                                title='Tech Stack:'
                                                items={data?.items}
                                            />
                                        </div>

                                        <div className="relative w-full h-full col-span-12 md:col-span-5 lg:col-span-5 ">
                                            <div className="w-full relative object-contain">
                                                <div className="w-full h-full object-contain relative">
                                                    {
                                                        data?.live ?
                                                            <>
                                                                <iframe
                                                                    loading='lazy'
                                                                    allowFullScreen={true}
                                                                    src={data?.live}
                                                                    style={{ width: '100%', height: '300px', border: 'none' }}
                                                                    title="Embedded Website"
                                                                />
                                                                <Link target='_blank'
                                                                    className='absolute flex items-center gap-1 p-1 bottom-0 right-0 bg-black text-gray-400 hover:text-white text-[12px]'
                                                                    href={data?.live} >
                                                                    <span>
                                                                        Open in new tab
                                                                    </span>
                                                                    <div>
                                                                        <FaExternalLinkAlt />
                                                                    </div>
                                                                </Link>
                                                            </> :
                                                            <img loading='lazy'
                                                                className='w-full h-full object-contain'
                                                                src={data?.img} alt={data?.heading} />

                                                    }
                                                </div>
                                            </div>

                                            <div className='w-full'>
                                                {data?.github &&
                                                    <Link
                                                        href={data?.github}
                                                        target="_blank"
                                                        className='px-6 justify-center my-4 py-2 w-full flex gap-2 items-center tracking-wider border-2 hover:bg-white hover:text-black transition ease-in-out delay-150 text-white border-white text-lg text-center md:text-2xl lg:text-2xl'>
                                                        <div>
                                                            <FaGithub />
                                                        </div>
                                                        <span>
                                                            GITHUB
                                                        </span>
                                                    </Link>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            : <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectModal