import { RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/login/login';
import { router } from './routing/routing';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
