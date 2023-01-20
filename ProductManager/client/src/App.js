import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./view/Home";
import OneProduct from './components/OneProduct';
import Update from './components/Update';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Main /> } />
          <Route path="/product/:id" element={ <OneProduct /> } />
          <Route path='/product/edit/:id' element={ <Update /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;