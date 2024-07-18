import React from 'react';

const blogs = [
    {
        title: 'Awesome Audiobooks',
        date: 'Jan-2022',
        image: 'https://cdn.sanity.io/images/cdjbyqga/production/aafa7b814c40fa9ccbbe3193f75b630f855b5c07-1600x840.png?w=3840&q=75&fit=clip&auto=format',
        description: 'An Audible like platform built with Next.js, Tailwind and ThirdWeb.',
        tags: ['#nextjs', '#tailwindcss', '#thirdweb', '#web3']
    },
    {
        title: 'Set up React with TS, Babel & Webpack 5 in simple steps',
        date: 'Sep-2021',
        image: 'https://cdn.sanity.io/images/cdjbyqga/production/a9766eda1cc01d43583e86601323c59128f3d939-1600x840.jpg?w=3840&q=75&fit=clip&auto=format',
        description: 'Learn how to set up your first React project with TypeScript, Babel and Webpack 5 from scratch in just 25 easy steps!',
        tags: ['#webpack', '#babel', '#react']
    },
    {
        title: 'JavaScript 101 - call(), apply() & bind()',
        date: 'Aug-2021',
        image: 'https://cdn.sanity.io/images/cdjbyqga/production/96f7d3181feaa9e8fbc0df94b239eaf19ec1d08d-1600x840.jpg?w=3840&q=75&fit=clip&auto=format',
        description: "In this blog I explain JavaScript's 3 not so beginner friendly native functions in simple words",
        tags: ['#javascript']
    }
];

const BlogSection = () => {
    return (
        <section>
            <div className="container max-w-[1200px] mx-auto flex px-5 py-8 flex-col">
                <p className="text-3xl sm:text-4xl text-gray-600">
                    My <span className="font-semibold text-sky-400">Blogs</span>
                </p>
                <div className="pt-8">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8">
                            {blogs.map((blog, index) => (
                                <div key={index} className="rounded-lg overflow-hidden flex flex-col border border-transparent hover:border-sky-400 shadow-sm bg-[#ffffffb0] hover:scale-[101%] transition-transform">
                                    <img src={blog.image} alt={blog.title} className="cursor-pointer" />
                                    <div className="px-6 pt-4 pb-5 flex flex-col flex-grow">
                                        <div className="flex items-center mb-2">
                                            <span className="text-gray-600">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path>
                                                </svg>
                                            </span>
                                            <span className="ml-1 inline-flex rounded-full w-fit align-middle text-xs text-gray-600">{blog.date}</span>
                                        </div>
                                        <p className="font-bold text-xl text-gray-800 mb-2 cursor-pointer">{blog.title}</p>
                                        <p className="line-clamp-3 text-gray-600 mb-6">{blog.description}</p>
                                        <div className="flex flex-wrap">
                                            {blog.tags.map((tag, index) => (
                                                <div key={index} className="rounded-full mr-2 mb-2 px-2 flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 bg-gray-200 hover:bg-gray-300">
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default BlogSection;
