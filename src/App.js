import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { registerLicense } from '@syncfusion/ej2-base'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Header, Footer, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Orders, Calendar, Employees, Customers } from './pages'
import './App.css'

const App = () => {
  registerLicense(
    'ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZjX39adXZRRWZYVUA='
  )

  const activeMenu = true

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">

          {/* セッティングマーク */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Setting" position="Top">
              <button
                className="text-3xl p-3 hover:drop-shadow-xl 
                hover:bg-light-gray 
                text-white"
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* サイドバー */}
          {activeMenu ? (
            <div className="w-72 fixed slider dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* ナビゲーションバー */}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen  w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            <div className="flex md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>

          {/* ページリンク */}
          <div>
            <Routes>
              {/* ダッシュボード */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* 個別ページ */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              {/* <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} /> */}

              {/* charts */}
              {/* <Route path="/line" element={<Line />} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
