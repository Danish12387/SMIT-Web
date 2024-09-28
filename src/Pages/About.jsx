import React from "react";

const About = () => {

    return (
        <div className="min-h-screen bg-gray-100 p-6 space-y-8">

            <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">More About Saylani Welfare</h2>
                <p className="text-gray-700 text-lg mb-4">
                    Saylani Welfare International Trust was founded with the aim of serving the less privileged members of society. The organization offers various services, from education to medical facilities, and works on initiatives to empower individuals through skills development.
                </p>
                <p className="text-gray-700 text-lg">
                    The trust focuses on ensuring that the youth are provided with opportunities to grow, with various technical courses and job placement services that help thousands of students each year.
                </p>
            </section>

            <section className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">Courses Offered by Saylani</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
                    <li>Web and Mobile App Development</li>
                    <li>Artificial Intelligence</li>
                    <li>Graphic Designing</li>
                    <li>Cloud Computing</li>
                    <li>Cybersecurity</li>
                    <li>Blockchain Technology</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
