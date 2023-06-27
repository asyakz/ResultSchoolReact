import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import UsersListPage from './components/usersListPage';
import HomePage from './components/homePage';
import Layout from './components/Layout';
import User from './components/User';
import EditUserPage from './components/editUserPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<Navigate to="/userslist" replace />}/>
          <Route path="userslist" element={<UsersListPage/> } />
          <Route path="userslist/:id" element={<User />} />
          <Route path="userslist/:id/edit" element={<EditUserPage />} />
          <Route path="userslist/*" element={<UsersListPage/>} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
