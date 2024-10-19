import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Loading from '../Components/Loading';
import SingleCampus from '../Pages/SingleCampus';
import NotFoundPage from '../Components/NotFoundPage';
import StudentSuccessStory from '../Pages/SucessStory';
import AdminManagement from '../Pages/AdminPanel';
import AdminLogin from '../Pages/AdminLogin';
import AdminDashboard from '../Pages/AdminDashboard';
import { AuthProvider } from './AuthContext';
import AllCoursesPage from '../Pages/AllCourses';

const Home = lazy(() => import('../Pages/Home'));
const About = lazy(() => import('../Pages/About'));
const Courses = lazy(() => import('../Pages/Courses'));
const Campuses = lazy(() => import('../Pages/Campuses'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/admin-panel",
                element: <AdminDashboard />,
            },
            {
                path: "/admin-panel/login",
                element: <AdminLogin />,
            },
            {
                path: "/admin-panel/users",
                element: <AdminManagement />,
            },
            {
                path: "/sucess-story/:name",
                element: <StudentSuccessStory />,
            },
            {
                path: "/apply/:id",
                element: <Courses />,
            },
            {
                path: "/campuses/:id",
                element: <SingleCampus />,
            },
            {
                path: "/campuses",
                element: <Campuses />,
            },    {
                path: "/courses",
                element: <AllCoursesPage />,
            },
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />,
    }
]);

const AppRouter = () => {
    return (
        <AuthProvider>

        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </Suspense>
        </AuthProvider>
    );
};

export default AppRouter;
