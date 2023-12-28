import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import  Contianer  from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout } from './slices/authSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime');
    if (expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime > expirationTime) {
        dispatch(logout());
      }
    }
  }, [dispatch]);
  
  return (
    <>
        <ToastContainer />
        <Header />
        <main className='py-3'>
           <Contianer>
                <Outlet />
            </Contianer>
        </main>
        <Footer />
    </>
  );
}
