import { Link } from 'react-router-dom';
import { FileQuestion } from "lucide-react"
import { IoIosArrowBack } from 'react-icons/io';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <FileQuestion className="w-16 h-16 mb-4 text-muted-foreground" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-center mb-8 max-w-md text-muted-foreground">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <div>
        <Link href="/" className="btn bg-blue-600 hover:bg-blue-700 text-white">
          <IoIosArrowBack className='text-lg' /> Return to Home
        </Link>
      </div>
    </div >
  )
}