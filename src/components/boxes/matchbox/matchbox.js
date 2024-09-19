import '../style.css';
import './style.css';
import GameBox from '../gamebox/gamebox';
import WhiteBox from '../whitebox/whitebox';
// import games from '../../../info';
import searchById from '../../../searchById';


function Title({ game }) {
  return (
    <div className="matchlive">
      <h1>Match</h1>
      {
        game.livetext.toLowerCase() === "live" ?
          <p className="livetext">LIVE</p> :
          <p className="fttext">FT</p>
      }
    </div>
  );
}

function Content({ game }) {
  return (
    <div class="liveteam">
      <img class="liveimg" src={`/imgs/${game.team1Name}.png`}></img>
      <p class="livescore">{game.team1Score}</p>
      <p class="livescore">-</p>
      <p class="livescore">{game.team2Score}</p>
      <img class="liveimg" src={`/imgs/${game.team2Name}.png`}></img>
    </div>
  );
}


function MatchBox({ game }) {
  return (
    game && <WhiteBox Title={Title} titleProps={{ game: game }} Content={Content} contentProps={{ game: game }} width={700} height={250} />
  );
}

export default MatchBox;
