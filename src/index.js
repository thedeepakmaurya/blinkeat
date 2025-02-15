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
import RestaurantInfo from './components/RestaurantInfo';
import Home from './components/Home';
import Orders from './components/Orders';


const appRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            errorElement: <Error/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
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
                },
                {
                    path: 'restaurant-info',
                    element: <RestaurantInfo/>,
                },
                {
                    path: 'orders',
                    element: <Orders/>,
                }
            ],
        },
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

