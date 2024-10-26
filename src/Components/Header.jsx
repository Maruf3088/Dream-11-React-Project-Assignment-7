import PropTypes from "prop-types";
import bgshadow from "../assets/bg-shadow.png";
import heroImg from "../assets/banner-main.png";
import { useEffect, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import { toast } from "react-toastify";

const Header = ({ handleGetCoinButton, coin, setCoin }) => {
  const [players, setPlayers] = useState([]);
  const [key, setKey] = useState("available");
  const [selectedPlayersArr, setSelectedPlayersArr] = useState([]);

  const handleAvailableBtn = (str) => {
    setKey(str);
  };

  const handleDeleteBtn = (id) => {
    toast.warning("Player Removed");
    setSelectedPlayersArr(
      selectedPlayersArr.filter((player) => player.playerId !== id)
    );
  };

  const handleSelectedBtn = (str) => {
    setKey(str);
  };

  const handleChoosePlayerBtn = (tempPlayer, id) => {
    const playerExist = selectedPlayersArr.find(
      (player) => player.playerId === id
    );

    if (!playerExist) {
      if (selectedPlayersArr.length != 6) {
        if (tempPlayer.biddingPrice <= coin) {
          coin -= tempPlayer.biddingPrice;
          setCoin(coin);
          toast.success(`${tempPlayer.name} Player Selected`);
          setSelectedPlayersArr([...selectedPlayersArr, tempPlayer]);
        } else {
          toast.warn("Insufficient Balance");
        }
      } else {
        toast.error("Maximum Player Selected!");
      }
    } else {
      toast.error("Already Selected");
    }
  };

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="font-sora  mt-32 mb-80">
      <div
        className="hero container mx-auto bg-cover bg-center bg-black p-5 sm:rounded-3xl"
        style={{ backgroundImage: `url(${bgshadow})` }}
      >
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <img src={heroImg} alt="Hero" className="mx-auto" />
            <p className="py-6 text-xl lg:text-3xl text-white font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </p>
            <p className="text-white font-semibold py-6">
              Beyond Boundaries Beyond Limits
            </p>
            <button
              className="btn ring-2 ring-[#E7FE29] ring-offset-black ring-offset-2 bg-[#E7FE29]"
              onClick={handleGetCoinButton}
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>

      <div className="py-5   bg-white   ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
          {key === "available" ? (
            <h1 className="text-2xl  font-bold order-2 md:order-1">
              Available Players
            </h1>
          ) : (
            <h1 className="text-2xl  font-bold order-2 md:order-1 ">
              Selected Players ({selectedPlayersArr.length}/6)
            </h1>
          )}
          <div className="flex font-bold lg:text-lg border rounded-lg order-1 md:order-2">
            <p
              onClick={() => handleAvailableBtn("available")}
              className={`border-r-2 py-2 px-4 ${
                key === "available" ? "bg-[#E7FE29]" : ""
              } cursor-pointer`}
            >
              Available
            </p>
            <p
              onClick={() => handleSelectedBtn("selected")}
              className={`py-2  px-4 ${
                key === "selected" ? "bg-[#E7FE29]" : ""
              } cursor-pointer`}
            >
              Selected ({selectedPlayersArr.length})
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {key === "available" ? (
          <AvailablePlayers
            players={players}
            handleChoosePlayerBtn={handleChoosePlayerBtn}
          />
        ) : (
          <SelectedPlayers
            handleAvailableBtn={handleAvailableBtn}
            handleDeleteBtn={handleDeleteBtn}
            selectedPlayersArr={selectedPlayersArr}
          />
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  handleGetCoinButton: PropTypes.func,
  coin: PropTypes.number,
  setCoin: PropTypes.func,
};

export default Header;
