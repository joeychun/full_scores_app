import '../style.css';
import GameBox from '../gamebox/gamebox';
import WhiteBox from '../whitebox/whitebox';
// import games from '../../../info';

function Title() {
  return (
    <h1 className="title">Fixtures</h1>
  );
}

function Content({ games }) {
  return (
    <div>
      {
        games.map(game => {
          return (
            <GameBox id={game.id} team1Name={game.team1Name} team2Name={game.team2Name} team1Score={game.team1Score} team2Score={game.team2Score} livetext={game.livetext} />
          );
        })
      }
    </div>
  );
}

function FixtureBox({ games }) {
  return (
    <WhiteBox Title={Title} Content={Content} contentProps={{ games: games }} />
  );
}

export default FixtureBox;
