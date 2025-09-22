import { Route, Routes } from 'react-router-dom'
import path from './constants/path'
import MainLayout from './layouts/MainLayout'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
export default function useRouteElements() {
  return (
    <Routes>
      <Route
        path={path.home}
        index
        element={
          <MainLayout>
            <ProductList />
          </MainLayout>
        }
      />
      <Route
        path={path.login}
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />
    </Routes>
  )
}
