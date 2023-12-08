import React from 'react'
import  Contianer  from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export const App = () => {
  return (
    <>
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
