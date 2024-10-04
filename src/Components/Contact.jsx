import React from 'react';

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className="min-h-screen max-h-[900px] flex items-center justify-center" id="contact">
      <div className=" p-8 rounded-lg w-full max-w-xl">
        <h1 className='text-center text-[40px] font-semibold text-blue-600 anim-zoom'>Contact <span className='text-green'>Us</span></h1>
        <form onSubmit={handleSubmit} className='mt-10'>
          <div className="mb-4 anim-zoom">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 anim-zoom">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 anim-zoom">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 h-32 resize-none"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-active bg-green text-white hover:scale-105 transition py-2 px-4 rounded-lg hover:bg-hoverGreen focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 anim-zoom text-sm w-52 shadow-lg duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
