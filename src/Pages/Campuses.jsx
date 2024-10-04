import { useState, useEffect } from 'react';
import image from "../assets/img.jpg"
import useScrollReveal from '../ScrollReveal/useScrollReveal';
const citiesResponse = [
  { "id": 1, "city": "Karachi" },
  { "id": 2, "city": "Lahore" },
  { "id": 3, "city": "Islamabad" },
  // { "id": 4, "city": "Multan" },
  // { "id": 5, "city": "Hydarabad" }
]

const campusesResponse = [
  { id: 1, name: "Gulshan Campus", address: "Gulshan, Karachi", city: "Karachi", imageUrl: "https://via.placeholder.com/150", mapUrl: "https://goo.gl/maps/Karachi1" },
  { id: 2, name: "Nazimabad Campus", address: "Nazimabad, Karachi", city: "Karachi", imageUrl: "https://via.placeholder.com/150", mapUrl: "https://goo.gl/maps/Karachi2" },
  { id: 3, name: "Model Town Campus", address: "Model Town, Lahore", city: "Lahore", imageUrl: "https://via.placeholder.com/150", mapUrl: "https://goo.gl/maps/Lahore1" },
  { id: 4, name: "Blue Area Campus", address: "Blue Area, Islamabad", city: "Islamabad", imageUrl: "https://via.placeholder.com/150", mapUrl: "https://goo.gl/maps/Islamabad1" }
];


const News = () => {

  const [cities, setCities] = useState([])
  const [campuses, setCampuses] = useState([])
  const [selectCity, setSelectCity] = useState(null);

  useScrollReveal();

  useEffect(() => {
    setCities(citiesResponse)
    setCampuses(campusesResponse)

    if (citiesResponse.length > 0) {
      setSelectCity(citiesResponse[0].city)
    }

  }, [])

  const filterCity = campuses.filter((campuses) => campuses.city === selectCity)

  return (
    <div className='container mx-auto h-full min-h-screen'>
      <div className="navbar border bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {cities.map((e) => (
                <li className="hover:bg-blue-400 rounded"
                  key={e.id}>
                  <a onClick={() => setSelectCity(e.city)}>{e.city}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="font-semibold md:text-2xl text-[18px] anim-zoom text-blue-600">Campuses in <span className='text-green'>{selectCity}</span></a>
        </div>
        <div className="navbar-end">

        </div>
      </div>
      {
        filterCity.map((data) => (
          <div
            key={data.id}
            className="card mx-5 sm:mx-10 my-10 lg:flex-row-reverse bg-base-500 shadow-xl transform transition-all duration-300 hover:scale-[1.01] p-4 overflow-hidden"
            data-aos="fade-up">
            <figure className="w-full md:w-1/3 h-auto md:h-full">
              <img
                className="object-cover h-56 rounded-lg"
                src={image}
                alt="Album"
              />
            </figure>
            <div className="card-body flex flex-col ">
              <h2 className="card-title text-3xl font-semibold text-blue-600">{data.name}</h2>
              <h3 className="font-semibold"><span className='text-green'>Address:</span> {data.address}</h3>
              <h3 className="font-semibold"><span className='text-green text-wrap'>Map:</span> {data.mapUrl}</h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default News;
