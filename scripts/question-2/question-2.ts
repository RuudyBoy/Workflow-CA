// 1. Create an enum (GameGenre):
// Create an enum called GameGenre with the following key/value pairs. The value
//    should be the same as the key:
// - Action
// - Adventure
// - Sport

enum GameGenre {
  Action = 1,
  Adventure,
  Sport,
}


// 2. Create an interface (Game):
// Create an interface called Game with the following values:
// name: string
// genre: The GameGenre enum
// onlinePlay: boolean, optional

interface Game {
  name:string;
  genre: GameGenre;
  onlinePlay?: boolean;
}
// 3. Convert the function to TypeScript. Use your interface from above as the parameter.
function createGame(game: Game) {
  console.log('=============');
  console.log('Game created:');
  console.log('-------------');
  console.log(game);
  console.log(`${game.name}`);
  console.log(`${game.genre}`);
  console.log(`${game.onlinePlay}`);
}

// 4. Change these function calls to use the enum you created in step 1
createGame({ name: 'Fun action game', genre: GameGenre.Action });
createGame({
  name: 'Fun adventure game',
  genre:  GameGenre.Adventure,
  onlinePlay: true,
});
