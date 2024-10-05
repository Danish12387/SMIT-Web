import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Components/Loading';

function Courses() {
  const [Course, setCourses] = useState([]);
  const [Loading, setLoading] = useState(true);
  const skills = [
    "HTML5, CSS3, and JavaScript for web development",
    "React and React Native for cross-platform development",
    "iOS app development with Swift",
    "Android app development with Kotlin",
    "RESTful API design and integration",
    "User experience (UX) and user interface (UI) design principles",
    "Version control with Git",
    "Deployment and app store submission processes"
  ];

  const campuses = [
    { id: 1, name: "Blue Area Campus" },
    { id: 2, name: "Gulshan Campus" },
    { id: 3, name: "Model Town Campus" },
    { id: 4, name: "Nazimabad Campus" },
  ];

  const { id } = useParams();

  const fetchCourses = async () => {
    try {
      const res = await axios.get(`https://66f931ef2a683ce9731134aa.mockapi.io/api/v1/SMIT/${id}`);
      setCourses(res.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, [])

  return (
    <>
      {Loading ? <Loader /> : (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            {/* Header section */}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center mb-6">
              <Link to="https://forms.saylaniwelfare.com/en" target="_blank">
                <button className='btn btn-active px-6 md:px-10 bg-green text-white hover:bg-hoverGreen hover:scale-105 transition text-sm md:text-base'>Enroll Now</button>
              </Link>
              <div className="text-center md:text-left mt-4 md:mt-0">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
                  {Course.title?.split(' ')[0]} <span className='text-green'>{Course.title?.split(' ').slice(1).join(' ')}</span>
                </h1>
                <div className="mt-2 badge border-green text-blue-600">
                  {Course.duration}
                </div>
              </div>
            </div>

            {/* Card Section */}
            <div className="card   rounded-lg">
              <div className="space-y-6 card-body">
                {/* Course Description */}
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-blue-600">Course <span className='text-green'>Description</span></h2>
                  <p className="text-sm mt-4 md:text-base text-muted-foreground">
                    {Course.description}
                  </p>
                </div>

                {/* Key Topics Section */}
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-blue-600">Key <span className='text-green'>Topics</span></h2>
                  <ul className="list-disc mt-4 list-inside text-sm md:text-base text-muted-foreground">
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>

                {/* Campuses Section */}
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-blue-600">Available <span className='text-green'>Campuses</span></h2>
                  <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {campuses.map((campus) => (
                      <Link
                        to={`/campuses/${campus.id}`}
                        className="badge badge-outline  transition transform sm:scale-105 hover:scale-110 border-green text-blue-600 font-semibold p-2.5 text-center"
                        key={campus.id}
                      >
                        {campus.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Courses;
