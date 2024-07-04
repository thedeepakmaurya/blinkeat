import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import Error from './components/Error';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Offer from './components/Offer';
import SignUp from './components/SignUp';
import RestaurantRegistration from './components/RestaurantRegistration';


const appRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            errorElement: <Error/>,
            children: [
                {
                    path: 'login',
                    element: <Login/>
                },
                {
                    path: 'restaurant',
                    element: <RestaurantRegistration/>
                },
                {
                    path: 'offer',
                    element: <Offer/>,
                },
                {
                    path: 'signup',
                    element: <SignUp/>,
                }
            ],
        },
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

