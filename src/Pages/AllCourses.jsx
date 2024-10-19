import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CourseCard from "../Components/CourseCard"
import { useSelector } from "react-redux";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"



const categories = [
  { id: "all", name: "All Courses" },
  { id: "programming", name: "Programming" },
  { id: "design", name: "Design" },
  { id: "business", name: "Business" },
]

const courses = [
  {
    id: "1",
    title: "Introduction to React",
    description: "Learn the basics of React and build modern web applications.",
    category: "programming",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "2",
    title: "UI/UX Fundamentals",
    description: "Master the principles of user interface and user experience design.",
    category: "design",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "3",
    title: "Digital Marketing Strategies",
    description: "Develop effective digital marketing campaigns for your business.",
    category: "business",
    image: "/placeholder.svg?height=100&width=200",
  },
  // Add more courses as needed
]

export default function AllCoursesPage() {
  const { courses:allCourses } = useSelector(state => state.courses);

  const [selectedCategory, setSelectedCategory] = useState("All Courses")

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName)
    console.log(allCourses)
  }

  const filteredCourses = selectedCategory === "All Courses"
    ? allCourses
    : allCourses.filter(course => course.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Our Courses
      </motion.h1>

      {/* Category Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.name
                ? "bg-blue-500 text-white  shadow-lg"
                : "bg-green hover:bg-hoverGreen text-white hover:shadow-md"
            }`}
            onClick={() => handleCategoryClick(category.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Course Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
              }}
            >
                            <CourseCard item={course} index={index} />
              
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}