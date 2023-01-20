import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Destinations from './views/AllDestinations';
import Destination from './views/OneDestination';
import { NewDestination } from './views/NewDestination';
import { EditDestination } from './views/EditDestination';
import { NotFound } from './views/NotFound';

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center'>
        <h1 className='navbar-brand mb-0'> Authors </h1>
        <div className='navbar-nav justify-content-between'>
          <Link
            to="/destinations"
            className='btn btn-sm btn-outline-primary mx-1'
          >
            All Authors
          </Link>
          <Link
            to="/destinations/new"
            className='btn btn-sm btn-outline-info mx-1'
          >
            Add Author 
          </Link>
        </div>
      </nav>

      {/*
      Front end routes to display view components. These are separate from server routes.*/}
      <Routes>
        {/* Redirect example */}
        <Route path='/' element={ <Navigate to="/destinations" replace /> } />
        <Route path='/destinations' element={ <Destinations /> } />
        <Route path='/destinations/:id/edit' element={ <EditDestination /> } />
        <Route path='/destinations/:id' element={ <Destination /> } />
        <Route path='/destinations/new' element={ <NewDestination /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;