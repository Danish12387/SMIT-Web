import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 text-muted-foreground">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    <div className="flex flex-col items-center sm:items-start col-span-1 md:col-span-2 lg:col-span-2">
                        <img
                            src="/smit-logo.png"
                            alt="SMIT Logo"
                            width={128}
                            height={128}
                            className="mb-4"
                        />
                        <p className="text-center sm:block hidden">
                            Copyright © {new Date().getFullYear()} - All rights reserved by <span className="font-bold">SMIT</span>
                        </p>
                    </div>
                    <nav className="space-y-4">
                        <h6 className="font-semibold text-primary mb-2">Services</h6>
                        <ul className="space-y-2">
                            {['Branding', 'Design', 'Marketing', 'Advertisement'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:underline text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="space-y-4">
                        <h6 className="font-semibold text-primary mb-2">Company</h6>
                        <ul className="space-y-2">
                            {['About us', 'Contact', 'Jobs', 'Press kit'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:underline text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="space-y-4">
                        <h6 className="font-semibold text-primary mb-2">Legal</h6>
                        <ul className="space-y-2">
                            {['Terms of use', 'Privacy policy', 'Cookie policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:underline text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <p className="text-center sm:hidden block mt-6">
                    Copyright © {new Date().getFullYear()} - All rights reserved by <span className="font-bold text-blue-700">SMIT</span>
                </p>
            </div>
        </footer>
    )
}