import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'Pages/Home/Home';
import Register from 'Pages/Register/Register';
import Login from 'Pages/Login/Login';
import Contacts from 'Pages/Contacts/Contacts';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
