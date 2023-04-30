import { Routes, Route } from 'react-router-dom';
import Storytelling from './routes/storytelling/storytelling.components.jsx';
import NavigationBar from './routes/navigation-bar/navigationbar.components.jsx';
import './App.css';

const App=()=> {
  return (
    <Routes>
      <Route path = '/' element={<NavigationBar />}> 
        <Route index={true} element={<Storytelling />} />

      </Route>
    </Routes>
  );
}

export default App;
