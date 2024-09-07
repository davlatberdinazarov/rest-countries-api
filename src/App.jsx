import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route index element={<Countries/>}/>
          <Route path='/country/:name' element={<CountryDetail/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
