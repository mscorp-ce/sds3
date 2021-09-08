import NavBar from './components/NavBar/Navbar';
import React from 'react';
import Footer from 'components/Footer/Footer';
import DataTable from 'components/DataTable/DataTable';
import BarChart from 'components/BarChart/BarChart';
import DonutChart from 'components/DonutChart/DonutChart';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de suesso(%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Todas as Vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as Vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
