import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { Layout } from './components/layout/Layout';

import { Mercury } from './pages/Mercury';
import { Venus } from './pages/Venus';
import { Earth } from './pages/Earth';
import { Mars } from './pages/Mars';
import { Jupiter } from './pages/Jupiter';
import { Saturn } from './pages/Saturn';
import { Uranus } from './pages/Uranus';
import { Neptune } from './pages/Neptune';
import { NoPageExists } from './hocs/errorboundary/NoPageExists';

import './app.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Navigate replace to='/mercury' />} />
      <Route path='mercury' element={<Mercury />} />
      <Route path='venus' element={<Venus />} />
      <Route path='earth' element={<Earth />} />
      <Route path='mars' element={<Mars />} />
      <Route path='jupiter' element={<Jupiter />} />
      <Route path='saturn' element={<Saturn />} />
      <Route path='uranus' element={<Uranus />} />
      <Route path='neptune' element={<Neptune />} />
      <Route path='*' element={<NoPageExists />} />
    </Route>
  )
);

function App() {
  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
