import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/Course.Home";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/common/contect/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import { useContext } from "react";
import ShowContext from "./context/ShowContext";


function App() {
  const {siteData} = useContext(ShowContext)
  console.log("data from App",siteData)
  return (
    <>
      <Router>
        <Header />
        {/* Routes replaces Switch in React Router v6 */}
        <Routes>
          {/* Use element prop instead of component in React Router v6 */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/courses' element={<CourseHome />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/pricing' element={<Pricing />} />
          <Route exact path='/journal' element={<Blog />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
