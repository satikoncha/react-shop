import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
