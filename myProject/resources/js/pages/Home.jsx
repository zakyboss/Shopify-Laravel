import React from 'react';
import Nav from '../components/ui/Nav';

const Home = () => {
  return (
    <>
      <Nav />
      <div className="p-4">
        <h1>Welcome to the Home Page</h1>
        <p>This is your first page using Inertia + React!</p>
        
      </div>
    </>
  );
};

export default Home;
