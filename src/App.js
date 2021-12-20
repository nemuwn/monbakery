import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/navbar/Navbar";
import Home_contact from "./components/home_contact/Home_contact";
import Showcase from "./components/showcase/Showcase";
import Sale from "./components/sale/sale";

import { ShowcaseDatas } from "./components/showcase/Showcase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase slides={ShowcaseDatas} />
      <Body />
      <Sale />
      <Home_contact />
     
      <Footer />
    </div>
  );
}

export default App;
