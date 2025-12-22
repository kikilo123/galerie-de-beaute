import Header from './components/Header'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageProvider'
import { Route, Routes } from 'react-router-dom'
import SimpleHeader from "./components/SimpleHeader";
import ServicesPage from "./pages/ServicesPage";
import Home from "./pages/Home";
import Contact from './components/Contact';
import About from "./pages/AboutPage";


//import './App.css'

function App() {
  

  return (
    <>
      <LanguageProvider> 
          <Routes> 
          <Route 
            path="/"
            element={
            <> 
              <Header/>
              <Home />
              <Footer/>
            </>
            }
          /> 
          <Route
          path="/services"
          element={
            <>
              <SimpleHeader />
              <ServicesPage />
              <Contact/>
              <Footer />
            </>
          }
        />

        <Route 
        path="/about"
        element={
          <> 
          <About/>
          <Contact/>
          <Footer />
          </>
        }
        />
        </Routes>
      </LanguageProvider>
    </>
  )
}

export default App
