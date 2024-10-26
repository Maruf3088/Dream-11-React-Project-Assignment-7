import PropTypes from "prop-types";

const SelectedSinglePlayer = ({ player, handleDeleteBtn }) => {
  return (
    <div>
      <div className="flex justify-between border-2 items-center p-5 rounded-lg">
        <div className="flex items-center gap-5">
          <div>
            <img
              className="w-[70px] h-[70px] object-cover rounded-lg"
              src={player.image}
              alt=""
            />
          </div>
          <div>
            <h1 className="font-semibold">{player.name}</h1>
            <h1 className="text-gray-500 font-semibold">{player.role}</h1>
          </div>
        </div>

        <div
          onClick={() => {
            handleDeleteBtn(player.playerId);
          }}
        >
          <i className="cursor-pointer text-red-500 text-xl font-semibold ri-delete-bin-line"></i>
        </div>
      </div>
    </div>
  );
};

SelectedSinglePlayer.propTypes = {
  player: PropTypes.object,
  handleDeleteBtn: PropTypes.func,
};

export default SelectedSinglePlayer;
