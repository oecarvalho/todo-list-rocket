import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { PageComponents } from './pages/page-components'
import { LayoutMain } from './pages/LayoutMain'
import { PageHome } from './pages/PageHome'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain/>}>
          <Route index element={<PageHome/>}/>      
          <Route path='/componentes' element={<PageComponents/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

