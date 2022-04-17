import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Awards from "./components/Awards/Awards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Awards></Awards>
      <Footer></Footer>
    </div>
  );
}

export default App;
