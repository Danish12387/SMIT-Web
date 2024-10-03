
import { MapPin, Phone, Mail, Users, Globe, Clock } from "lucide-react"
export function Avatar({ image, alt }) {
    return (
      <div className="avatar">
        <div className="w-16 avatar-group rounded-full">
          <img src={image} alt={alt} />
        </div>
      </div>
    );
  }

  export function AvatarFallback({ initials }) {
    return (
      <div className="avatar placeholder">
        <div className="w-24 rounded-full bg-neutral-focus text-neutral-content">
          <span className="text-xl">{initials}</span>
        </div>
      </div>
    );
  }
export default function ResponsiveSingleCampusPage() {
  const campus = {
    name: "Bahadurabad Campus",
    address: "789 Innovation Drive, Techville, ST 54321",
    website: "https://riverside.university.edu",
    operatingHours: "Monday - Friday: 8:00 AM - 6:00 PM",
    manager: {
      name: "Dr. Alex Johnson",
      title: "Campus Director",
      email: "ajohnson@university.edu",
      phone: "(555) 234-5678",
      image: "/Instructors2.jpeg?height=128&width=128"
    },
    staff: [
      { name: "Sarah Lee", role: "Administrative Coordinator", image: "/Instructors1.jpeg" },
      { name: "Mark Williams", role: "IT Support Manager", image: "/Instructors1.jpeg?height=64&width=64" },
      { name: "Dr. Emily Chen", role: "Academic Program Director", image: "/Instructors1.jpeg?height=64&width=64" },
      { name: "Carlos Rodriguez", role: "Student Services Advisor", image: "/Instructors1.jpeg?height=64&width=64" },
      { name: "Priya Patel", role: "Career Development Specialist", image: "/Instructors1.jpeg?height=64&width=64" }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="card shadow-xl mb-8">
        <div className="card-body space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="card-title text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">{campus.name}</h2>
            <div className="badge badge-outline border-green text-blue-600 text-sm self-start sm:self-auto">
              Karachi Campus
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{campus.address}</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Campus <span>Information</span></h3>
                <div className="text-sm space-y-2">
                  {/* <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
                    <a href={campus.website} className="link link-hover">
                      {campus.website}
                    </a>
                  </div> */}
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{campus.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Campus Manager</h3>
                <div className="card card-compact bg-base-100 shadow-lg">
                  <div className="card-body flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <Avatar className="h-24 w-24" image={campus.manager.image} alt={campus.manager.name}>
                      <img src={campus.manager.image} alt={campus.manager.name} />
                      <AvatarFallback>{campus.manager.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-semibold">{campus.manager.name}</h4>
                      <p className="text-sm text-gray-500">{campus.manager.title}</p>
                      <div className="text-sm text-gray-500 mt-2">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                          <a href={`mailto:${campus.manager.email}`} className="link link-hover">
                            {campus.manager.email}
                          </a>
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                          <a href={`tel:${campus.manager.phone}`} className="link link-hover">
                            {campus.manager.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Campus Staff</h3>
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body p-4">
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="text-lg font-semibold">Key Personnel</span>
                  </div>
                  <ul className="space-y-4">
                    {campus.staff.map((staffMember, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Avatar image={staffMember.image}  alt={staffMember.name}>
                          <img src={staffMember.image} alt={staffMember.name} />
                          <AvatarFallback>{staffMember.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{staffMember.name}</div>
                          <div className="text-sm text-gray-500">{staffMember.role}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
