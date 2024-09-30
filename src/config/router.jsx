import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Loading from '../Components/Loading';

const Home = lazy(() => import('../Pages/Home'));
const About = lazy(() => import('../Pages/About'));
const Courses = lazy(() => import('../Pages/Courses'));
const Campuses = lazy(() => import('../Pages/News'));

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
                path: "/apply/:id",
                element: <Courses />,
            },
            {
                path: "/campuses",
                element: <Campuses />,
            },
        ]
    },
]);

const AppRouter = () => {
    return (
        <Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default AppRouter;
