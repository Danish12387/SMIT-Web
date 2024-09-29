import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Components/Loading';

function Courses() {
    const [Course, setCourses] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [input, setInput] = useState({
        fullname: '',
        email: '',
        campus: '',
        course: ''
    })
    const { id } = useParams();

    const changeEvenHandle = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

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
                <div class="container mx-auto p-6">
                    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h1 class="text-3xl font-bold mb-4 text-blue-600">{Course?.title}</h1>
                        <p class="text-gray-700 mb-4">{Course?.description}</p>
                        <ul class="list-disc list-inside text-gray-600">
                            <li>Duration: {Course?.duration}</li>
                            <li>Prerequisites: {Course?.prerequisites}</li>
                            <li>Certification: {Course?.certification}</li>
                        </ul>
                    </div>

                    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 class="text-2xl font-semibold mb-4">Available <span className='text-green-600'>Campuses</span></h2>
                        <ul class="space-y-2">
                            {
                                Course?.campuses?.map((item, index) => {
                                    return (
                                        <li class="text-gray-700" key={index}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 class="text-2xl font-semibold mb-4">Available <span className='text-green-600'>Teahers</span></h2>
                        <ul class="space-y-2">
                            {
                                Course?.teachers?.map((item, index) => {
                                    return (
                                        <>
                                            <li class="font-semibold text-lg" key={index}>{item.name}</li>
                                            <li class="text-gray-700" key={index}>Experience: {item.experience}</li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 class="text-2xl font-semibold mb-4 text-green-600">Apply Now</h2>
                        <form action="#">
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="name">Full Name</label>
                                <input type="text" name='fullname' value={input.fullname} onChange={changeEvenHandle} id="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500" placeholder="Enter your full name" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
                                <input type="email" name='email' value={input.email} onChange={changeEvenHandle} id="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500" placeholder="Enter your email" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="campus">Preferred Campus</label>
                                <select id="campus" name='campus' onChange={changeEvenHandle} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500">
                                    <option>---Select a campus---</option>
                                    {
                                        Course?.campuses?.map((item, index) => {
                                            return (
                                                <option key={index}>{item}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="course">Course</label>
                                <input type="text" name='course' value={Course?.title} id="course" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500" readonly />
                            </div>
                            <div type="submit" className="btn btn-active bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition">
                                <button>Submit Application</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default Courses;