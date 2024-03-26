import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-neutral-50 overflow-x-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
