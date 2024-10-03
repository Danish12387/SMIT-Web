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
    ]
    const { id } = useParams();



    const fetchCourses = async () => {
        try {
            const res = await axios.get(`https://66f931ef2a683ce9731134aa.mockapi.io/api/v1/SMIT/${id}`);
            setCourses(res.data);
            setInput({ ...input, course: res.data.title })
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
            {Loading ? <Loader />
                :
   



    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
      
        <div className="flex justify-between  flex-row-reverse">
       <Link to="https://forms.saylaniwelfare.com/en" target="_blank">
       <button className='btn btn-active px-[40px] bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition text-[12px] md:text-[13px]'>Enroll Now</button>
       </Link>
       <div>

          <h1 className="text-3xl card-title font-bold text-blue-600">{Course.title.slice(0, Course.title.indexOf(' '))} <span className='text-green-600'>{Course.title.slice( Course.title.indexOf(' '))}</span></h1>
          <div  className="mt-2 badge border-green-600 text-blue-600">
            {Course.duration}
          </div>
       </div>
          
        
        </div>
        <div className='card'>
          <div className="space-y-4 card-body">
            <div>
              <h2 className="text-xl font-semibold mb-2  text-blue-600">Course <span className='text-green-600'>Description</span> </h2>
              <p className="text-muted-foreground">
               {Course.description}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-600">Key <span className='text-green-600'>Topics</span></h2>
              <ul className="list-disc  list-inside text-muted-foreground">
               {skills.map((skill)=>{
                return <li key={skill}>{skill}</li>
               })}
              </ul>
            </div>
            <div>
            <h2 className="text-xl font-semibold mb-3  text-blue-600">Available <span className='text-green-600'>Campuses</span> </h2>

              <div className="grid grid-cols-2 gap-2">
       {campuses.map((campus)=>{
               return <Link to={`/campus/${campus.id}`} className="badge badge-outline hover:scale-110 border-green-600 text-blue-600 font-semibold p-2.5"key={campus.id}>{campus.name}</Link>
               
       })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
                // <div class="container mx-auto p-6">
                //     <div class="bg-white rounded-lg shadow-md p-6 mb-8">
                //         <h1 class="text-3xl font-bold mb-4 text-blue-600">{Course?.title}</h1>
                //         <p class="text-gray-700 mb-4">{Course?.description}</p>
                //         <ul class="list-disc list-inside text-gray-600">
                //             <li>Duration: {Course?.duration}</li>
                //             <li>Prerequisites: {Course?.prerequisites}</li>
                //             <li>Certification: {Course?.certification}</li>
                //         </ul>
                //     </div>

                //     <div class="bg-white rounded-lg shadow-md p-6 mb-8">
                //         <h2 class="text-2xl font-semibold mb-4">Available <span className='text-green-600'>Campuses</span></h2>
                //         <ul class="space-y-2">
                //             {
                //                 Course?.campuses?.map((item, index) => {
                //                     return (
                //                         <li class="text-gray-700" key={index}>{item}</li>
                //                     )
                //                 })
                //             }
                //         </ul>
                //     </div>

                    
                   
            }
        </>
    )
}

export default Courses;