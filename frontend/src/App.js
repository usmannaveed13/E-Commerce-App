import React from 'react'
import  Contianer  from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

export const App = () => {
  return (
    <>
        <Header />
        <main className='py-3'>
           <Contianer>
                <HomeScreen />
            </Contianer>
        </main>
        <Footer />
    </>
  );
}
