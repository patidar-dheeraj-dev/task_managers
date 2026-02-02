import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./redux/store";

import Nav from './Component/Nav';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';
import About from './Component/About';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Register from './Component/Register';
import TaskComp from './Component/TaskComp';
import Addtask from './Component/Addtask';
import Status from './Component/Status';

function App() {
  let location = useLocation();

  return (
    <Provider store={store}>
      {!location.pathname.includes('dashboard') && <Nav />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='dashcopy' element={<TaskComp name="Dashboard" />} />
          <Route path='completed' element={<TaskComp name="Complete" />} />
          <Route path='pending' element={<TaskComp name="Pending" />} />
          <Route path='progress' element={<TaskComp name="Progress" />} />
          <Route path='deployed' element={<TaskComp name="Deployed" />} />
          <Route path='deferred' element={<TaskComp name="Deferred" />} />
          <Route path='addtask' element={<Addtask />} />
          <Route path='status' element={<Status />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
