import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from './components/Projects';
import Home from './components/Home';
import Startpage from './components/Startpage';
import './index.css';
import Layout from './Layout';
import Resume from './components/Resume'
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <Layout navbar={<Startpage />}>
              <Routes>
                <Route path="/" element={<Startpage/>}>
                  <Route path="/Home" element={<Home/>}/>
                  <Route path="/About" element={<About/>}/>
                  <Route path="/Projects" element={<Projects/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  <Route path="/Resume" element={<Resume/>}/>
                </Route>
              </Routes>
            <Footer></Footer>
        </Layout>
      </Router>
    </>
  );
}

export default App;
