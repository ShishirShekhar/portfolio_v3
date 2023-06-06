import Nav from "../components/Nav";
import Dashboard from "../components/Home/Dashboard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="p-6 flex flex-col gap-10">
      <Nav />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Home;
