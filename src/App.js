
import './App.css';
import {Home} from './Home'
import {About} from './About'
import {Products} from './Products'
import {NotFound} from './NotFound'
import {Launch} from "./Launch"

import { Routes, Route} from 'react-router-dom'







function App() {
  return (
    
    <div>
     
     <Routes>
        <Route path = "/" element= {<Home />} />
        <Route path = "/about" element={<About />} >
          <Route path = "/"  element = {<Products />}/>
          <Route path = ":id"  element = {<Launch />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
    
  );
}

export default App;
