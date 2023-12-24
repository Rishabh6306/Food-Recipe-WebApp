import React from 'react';
import Header from '../Components/Header';
import Recipes from '../Components/Recipes';

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
      <Header
        title={
          <p>
            Explore the World of
            <br /> FlavorHub!
          </p>
        }
        type='home'
      />

      <section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
        <Recipes />
      </section>
    </main>
  )
}

export default Home;