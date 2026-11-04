import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Shell from "./components/Shell";
import Home from "./pages/Home";
import Pickup from "./pages/Pickup";
import Franchise from "./pages/Franchise";
import Story from "./pages/Story";
import Who from "./pages/Who";
import Locations from "./pages/Locations";
import Branch from "./pages/Branch";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Faq from "./pages/Faq";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Home />} />
        <Route path="pickup" element={<Pickup />} />
        <Route path="franchise" element={<Franchise />} />
        <Route path="our-story" element={<Story />} />
        <Route path="who-we-are" element={<Who />} />
        <Route path="where-we-are" element={<Locations />} />
        <Route path="branches/:slug" element={<Branch />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
        <Route path="faq" element={<Faq />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
