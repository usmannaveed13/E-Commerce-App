import React from 'react'
import  Contianer  from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';

export const App = () => {
  return (
    <>
        <Header />
        <main className='py-3'>
           <Contianer>
                <h1>WelCome To ProShop</h1>
            </Contianer>
        </main>
        <Footer />
    </>
  );
}
