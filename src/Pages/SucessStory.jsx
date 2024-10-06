import { Calendar, Briefcase, GraduationCap, Trophy, Quote } from "lucide-react"

export default function StudentSuccessStory() {
  const student = {
    name: "Sabeeb Raza",
    image: "/Instructors3.jpeg?height=400&width=400",
    batch: "Web Development Bootcamp 2023",
    company: "TechInnovate Solutions",
    role: "Junior Full Stack Developer",
    graduationYear: 2023,
    story: `Emily's journey with our institute is a testament to perseverance and the power of dedicated learning. When she first joined our Web Development Bootcamp in early 2023, Emily had no prior coding experience and found herself struggling with basic concepts.

    The first few weeks were challenging for Emily. She often stayed late after classes, seeking additional help from instructors and peers. Her determination to understand the fundamentals of HTML, CSS, and JavaScript was evident as she spent countless hours practicing and refining her skills.

    As the bootcamp progressed, Emily's hard work began to pay off. She started to excel in project work, particularly in creating responsive web designs and implementing complex JavaScript functionalities. Her final project, an innovative web application for local community engagement, showcased her growth and caught the attention of several visiting recruiters.

    By the end of the bootcamp, Emily had transformed from a complete beginner to a confident junior developer. Her portfolio demonstrated a strong grasp of both front-end and back-end technologies, including React, Node.js, and MongoDB.

    Emily's perseverance culminated in a successful job search. She impressed interviewers at TechInnovate Solutions with her technical skills and her ability to discuss her learning journey. Emily secured a position as a Junior Full Stack Developer, marking a significant milestone in her career transition.

    Today, Emily continues to build on the foundation she gained at our institute, contributing to cutting-edge web projects at TechInnovate Solutions. Her story serves as an inspiration to current and future students, showing that with dedication and the right support, anyone can achieve their tech career goals.`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card w-full bg-base-100  mb-8">
        <div className="card-body text-center items-center">
          <div className="mx-auto mb-4">
            <div className="avatar">
              <div className="w-32 rounded-full ring dark:ring-blue-600 ring-green ring-offset-base-100 ring-offset-2">
                <img src={student.image} alt={student.name} />
              </div>
            </div>
          </div>
          <h2 className="card-name text-3xl font-bold mb-2">{student.name?.split(' ')[0]} <span className='text-green'>{student.name?.split(' ').slice(1).join(' ')}</span></h2>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <div className="badge badge-outline p-2 text-sm border-green text-blue-600">
              <Calendar className="h-3 w-3 mr-1" />
              {student.graduationYear}
            </div>
            <div className="badge badge-outline text-sm  p-2  border-green text-blue-600">
              <GraduationCap className="h-4 w-4 mr-1" />
              {student.batch}
            </div>
          </div>
          <div className="text-xl text-blue-600  font-semibold text-muted">
            <Briefcase className="h-5 w-5 inline-block mr-2" />
            {student.role} <span className="text-gray-500 mx-1 dark:text-darkText">At</span> <span className="text-green" >{student.company}</span>
          </div>
        </div>
        <div className="card-body">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Trophy className="h-6 w-6 mr-2 text-blue-600" />
                <span>Success Story</span>
              </h2>
              <div className="space-y-4 text-muted">
                {student.story.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="card bg-primary/5">
              <div className="card-body p-6">
                <Quote className="h-8 w-8 text-green font-bold mb-4" />
                <blockquote className="text-lg italic dark:text-darkText">
                  "The journey was challenging, but the support from my instructors and peers at the institute was invaluable.
                  I'm proud of how far I've come and excited for my future in tech."
                </blockquote>
                <h2 className="mt-4 font-semibold"> - {student.name?.split(' ')[0]} <span className='text-green'>{student.name?.split(' ').slice(1).join(' ')}</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
