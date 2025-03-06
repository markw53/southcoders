import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero">
      <h1>Innovative Software Solutions</h1>
      <p>We specialize in Web Design, UI/UX, Mobile Apps, and Data Analytics.</p>
      <Link to="/services" className="button-primary">Explore Our Services</Link>
    </section>
  );
};

export default Home;
