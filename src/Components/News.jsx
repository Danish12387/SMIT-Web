import React from 'react';
import { useState } from 'react';
const videos = [
  {
    id: 1,
    title: "Free Breakfast for School Kids by Saylani Welfare",
    description: "Free Breakfast for School Kids by Saylani Welfare | Maulana Bashir Farooq Qadri",
    url: "https://www.youtube.com/embed/WoBGkHTKGNw?si=SwYmb7Lt3rMRMKGu",
  },

  {
    id: 2,
    title: "Inauguration of Zaitoon Ashraf IT Park",
    description: "Inauguration of Zaitoon Ashraf IT Park | A New Era of Tech Innovation",
    url: "https://www.youtube.com/embed/MLlgfTz_hVM?si=sg7Tx8NEQvhhq3Ah",
  },
  {
    id: 3,
    title: "Parent Perspectives on Saylani Leading Educational System",
    description: "5 Shocking Truths About Parent Perspectives on Education Systems",
    url: "https://www.youtube.com/embed/7DQgyp6HiPo?si=z6jm55AmT-w_DB8Y",
  },
  {
    id: 4,
    title: "Saylani Tech Alumni 2024",
    description: "Saylani Tech Alumni 2024 | Saylani Tech Limited",
    url: "https://www.youtube.com/embed/nvpPTE24B58?si=53JnQWBvjpjieHb6",
  },
  {
    id: 5,
    title: "Saylani Alumni Meet-Up 2024",
    description: "Afzal Chamdia, Chairman Saylani Education Board, speaks at the Saylani Alumni Meet-Up 2024",
    url: "https://www.youtube.com/embed/X9di5HIYVfs?si=G7Kbj2Kw0sUh_7zC",
  },
  {
    id: 5,
    title: "Saylani Alumni Meet-Up 2024",
    description: "Arif Habib, Founder of Arif Habib Limited, speaks at the Saylani Alumni Meet-Up 2024",
    url: "https://www.youtube.com/embed/PtIvRFt6VYI?si=iGHQPKRK6Zy6JB82",
  },

];

const News = () => {
  return (
    <div className="container mx-auto p-4">

      <div className="my-10">
        <h1 className='text-center text-[40px] font-semibold text-blue-600'>Latest <span className='text-green-600'>News</span></h1>
        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white w-96 p-6 mt-5 rounded-lg shadow-md hover:shadow-lg transition-500 flex flex-col anim-zoom">
              <iframe
                width="100%"
                height="200"
                src={video.url}
                title={video.title}
                frameBorder="6px"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{video.title}</h3>
              <p className="text-gray-600 mt-2 max-w-xs overflow-hidden">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default News