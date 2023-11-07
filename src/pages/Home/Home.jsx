import "./Home.css";
import note from "../../assets/note.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <div className="home__content">
        <div>
          <img src={note} alt="note" />
        </div>
        <h1 className="home__get-started">Get Started Today</h1>
        <Link to="/register" className="btn home__get-started-btn">
          Get Started
        </Link>
      </div>
    </main>
  );
};

export default Home;
