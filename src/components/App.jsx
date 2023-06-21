import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';

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
