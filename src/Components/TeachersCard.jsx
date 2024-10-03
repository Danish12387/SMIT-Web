import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function TeacherCard({ name, designation, imageUrl }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="relative w-64 h-80 rounded-lg overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={imageUrl}
                alt={`${name}, ${designation}`}
                className="w-full h-full object-cover"
            />
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
            <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center justify-between">
                    <div className='flex flex-col items-start'>
                        <h3 className="text-xl font-bold text-[#0873B9]">{name}</h3>
                        <p className="text-sm text-[#86C43A]">{designation}</p>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                </div>
            </motion.div>
        </motion.div>
    )
}