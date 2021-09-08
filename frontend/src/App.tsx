import NavBar from './components/NavBar/Navbar';
import React from 'react';
import Footer from 'components/Footer/Footer';
import DataTable from 'components/DataTable/DataTable';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>
        
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
