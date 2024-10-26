import PropTypes from "prop-types";

const Player = ({ player, handleChoosePlayerBtn }) => {
  return (
    <div className="font-sora">
      <div className="card bg-base-100  shadow-xl border-2">
        <figure className="p-5">
          <img
            src={player.image}
            alt="Shoes"
            className="w-full h-[250px] object-center object-cover rounded-lg"
          />
        </figure>
        <div className="p-5">
          <div className="flex items-center gap-1">
            <i className="ri-user-line text-black font-semibold"></i>
            <h2 className="card-title">{player.name}</h2>
          </div>

          <div className="flex justify-between py-3">
            <div className="flex items-center gap-1">
              <i className="font-bold ri-flag-line text-gray-500"></i>
              <h1 className="text-gray-500 font-semibold text-sm">
                {player.country}
              </h1>
            </div>
            <div className="bg-gray-200 text-xs font-semibold rounded-md p-2">
              {player.role}
            </div>
          </div>
          <hr />
          <div className="py-5 space-y-3">
            <p className="font-semibold">Rating</p>
            <div className="flex justify-between">
              <h1 className="font-semibold">{player.battingType}</h1>
              <h1 className="text-gray-500 font-semibold">
                {player.bowlingType}
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="font-semibold ">Price : ${player.biddingPrice}</h1>
              <button
                onClick={() => {
                  handleChoosePlayerBtn(player, player.playerId);
                }}
                className=" text-xs font-semibold bg-white border-black border  rounded-lg hover:bg-[#E7FE29] duration-500 btn btn-sm "
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object,
  handleChoosePlayerBtn: PropTypes.func,
};

export default Player;
