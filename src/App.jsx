import { Admin } from './Pages/AdminPanel/Admin';
import { Route, Routes } from 'react-router';
import Index from './Pages/Index';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>

  );
}

export default App;
