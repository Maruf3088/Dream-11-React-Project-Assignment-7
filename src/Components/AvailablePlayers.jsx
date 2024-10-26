import PropTypes from "prop-types";
import Player from "./Player";

const AvailablePlayers = ({ players, handleChoosePlayerBtn }) => {
  return (
    <div className="font-sora grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((player) => (
        <Player
          key={player.playerId}
          player={player}
          handleChoosePlayerBtn={handleChoosePlayerBtn}
        ></Player>
      ))}
    </div>
  );
};

AvailablePlayers.propTypes = {
  players: PropTypes.array,
  handleChoosePlayerBtn: PropTypes.func,
};

export default AvailablePlayers;
