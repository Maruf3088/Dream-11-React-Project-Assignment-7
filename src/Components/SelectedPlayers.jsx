import PropTypes from "prop-types";
import SelectedSinglePlayer from "./SelectedSinglePlayer";

const SelectedPlayers = ({
  selectedPlayersArr,
  handleDeleteBtn,
  handleAvailableBtn,
}) => {
  return (
    <div className="font-sora">
      <div className="space-y-5">
        {selectedPlayersArr.map((player) => (
          <SelectedSinglePlayer
            key={player.playerId}
            player={player}
            handleDeleteBtn={handleDeleteBtn}
          ></SelectedSinglePlayer>
        ))}
      </div>
      {selectedPlayersArr.length != 6 && (
        <button
          onClick={() => handleAvailableBtn("available")}
          className=" mt-5 btn bg-[#E7FE29]"
        >
          Add More Players
        </button>
      )}
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayersArr: PropTypes.array,
  handleDeleteBtn: PropTypes.func,
  handleAvailableBtn: PropTypes.func,
};

export default SelectedPlayers;
