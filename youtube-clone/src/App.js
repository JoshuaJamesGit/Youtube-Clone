import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './Searchpage';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  
} from "react-router-dom";




// import { Recommend } from '@mui/icons-material';

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <Header/>
          
        </div>
        <Routes>
          
          <Route path='/search/:searchTerm' element={
                <div>
                  <div className="app__page">
                    <Sidebar />
                
                    <SearchPage />
                  </div>
                  
                </div>}/>
          <Route path='/' element={<div>
              <div className="app__page">
                <Sidebar />
                
                <RecommendedVideos />
              </div>
              </div>}/>

        </Routes>
          
        
      </Router>
      

      



    </div>
  );
}

export default App;
