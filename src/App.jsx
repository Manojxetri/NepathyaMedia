import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar";

import Home from "../Components/Home/Home";
import AboutUs from "../Components/AboutUs/AboutUs";
import Team from "../Components/TeamMembers/Team";
import EventHighlights from "../Components/EventHighlights/EventHighlights";
import FeedBack from "../Components/FeedBack/FeedBack";

import ContactUs from "../Webpage/ContactUs/ContactUs";
import Gallery from "../Webpage/Gallery/Gallery";
import Podcast from "../Webpage/Podcast/Podcast";
import Design from "../Webpage/Design/Design";
import About from "../Webpage/About/About";
import Future from "../Components/Future/Future";
import Footer from "../Components/Footer/Footer";
import Video from "../Components/Video/Video";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <AboutUs />
                <EventHighlights />
                <Team />
                <FeedBack />
                <Future/>
                <Video/>
                <Footer/>
              </>
            }
          />

          {/* OTHER PAGES */}
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/design" element={<Design />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
