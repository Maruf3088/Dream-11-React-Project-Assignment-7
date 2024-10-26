import { useState } from "react";
import Header from "./Components/Header";
import Navber from "./Components/Navber";
import { toast } from "react-toastify";
import Footer from "./Components/Footer";

function App() {
  const [coin, setCoin] = useState(0);
  const handleGetCoinButton = () => {
    setCoin(coin+6000000);
    toast.success(`Claim 6000000 Credits`);
  };

  return (
    <>
      <Navber coin={coin}></Navber>

      <Header
        handleGetCoinButton={handleGetCoinButton}
        coin={coin}
        setCoin={setCoin}
      ></Header>

      <Footer></Footer>
    </>
  );
}

export default App;
