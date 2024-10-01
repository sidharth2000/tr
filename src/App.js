import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ApplicationSelector from './pages/ApplicationSelector';
import UiDetails from './pages/UiDetails';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<ApplicationSelector/>}></Route>
            <Route path='/application' element={<ApplicationSelector/>}></Route>
            <Route path='/application/service' element={<ApplicationSelector/>}></Route>
            <Route path='/application/service/screendetails/:screenId' element={<UiDetails/>}></Route>
          </Routes>
        </BrowserRouter>      
    </div>
  );
}

export default App;
