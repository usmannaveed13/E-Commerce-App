import React from 'react'
import  Contianer  from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
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
