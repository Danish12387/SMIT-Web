'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import TeacherCard from '../components/teachersCard'


const teachers = [
    { name: 'Aaron Griffe', designation: 'Math Teacher', imageUrl: 'https://rainbowit.net/html/histudy/assets/images/team/team-01.jpg?height=400&width=300&text=Aaron+Griffe' },
    { name: 'Emily Johnson', designation: 'Science Teacher', imageUrl: 'https://rainbowit.net/html/histudy/assets/images/team/team-03.jpg?height=400&width=300&text=Emily+Johnson' },
    { name: 'Michael Chen', designation: 'History Teacher', imageUrl: 'https://rainbowit.net/html/histudy/assets/images/team/team-04.jpg?height=400&width=300&text=Michael+Chen' },
    { name: 'Sarah Davis', designation: 'English Teacher', imageUrl: 'https://rainbowit.net/html/histudy/assets/images/team/team-05.jpg?height=400&width=300&text=Sarah+Davis' },
    { name: 'David Wilson', designation: 'Physical Education', imageUrl: 'https://rainbowit.net/html/histudy/assets/images/team/team-06.jpg?height=400&width=300&text=David+Wilson' },
    { name: 'Lisa Thompson', designation: 'Art Teacher', imageUrl: 'https://rainbowit.net/html/histudy/assets/images/team/team-07.jpg?height=400&width=300&text=Lisa+Thompson' },
    { name: 'Robert Brown', designation: 'Music Teacher', imageUrl: 'https://rainbowit.net/html/histudy/assets/images/team/team-01.jpg?height=400&width=300&text=Robert+Brown' },
    { name: 'Jennifer Lee', designation: 'Computer Science', imageUrl: 'https://rainbowit.net/html/histudy/assets/images/team/team-05.jpg?height=400&width=300&text=Jennifer+Lee' },
    { name: 'Daniel Martinez', designation: 'Spanish Teacher', imageUrl: 'https://rainbowit.net/html/histudy/assets/images/team/team-05.jpg?height=400&width=300&text=Daniel+Martinez' },
    { name: 'Amanda Taylor', designation: 'Chemistry Teacher', imageUrl: 'https://rainbowit.net/html/histudy/assets/images/team/team-05.jpg?height=400&width=300&text=Amanda+Taylor' },
]

export default function TeachersSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 5 >= teachers.length ? 0 : prevIndex + 5
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 5 < 0 ? Math.max(teachers.length - 5, 0) : prevIndex - 5
        )
    }

    return (
        <section className="py-16 ">
            <div className="p-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-[#0873B9]">Our <span className='text-[#86C43A]'>Teachers</span></h2>
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
                        >
                            {teachers.slice(currentIndex, currentIndex + 4).map((teacher, index) => (
                                <TeacherCard
                                    key={index}
                                    name={teacher.name}
                                    designation={teacher.designation}
                                    imageUrl={teacher.imageUrl}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                    <button
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                        onClick={prevSlide}
                        aria-label="Previous teachers"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                        onClick={nextSlide}
                        aria-label="Next teachers"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    )
}