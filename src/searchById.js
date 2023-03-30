/* DEPRECATED VER 
import games from './info';

function searchById(id) {
  for (let game of games) {
    if (game.id === id) return game;
  }
} 
*/

function searchById(id, games) {
  if (id === undefined || id === null) return;
  // const check = () => {
  //   for (let game of games) {
  //     if (game.id === id) return game;
  //   }
  // };
  // await check();
  for (let game of games) {
    if (game.id === id) return game;
  }
}

export default searchById;