const players = [
  {
    name: "Guil",
    score: 50
  },
  {
    name: "Treasure",
    score: 85
  },
  {
    name: "Ashley",
    score: 95
  },
  {
    name: "James",
    score: 80
  }
];

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = ({name, score}) => {
  return (
    <div className="player">
      <span className="player-name">
        { name }
      </span>
      <Counter score={score}/>
    </div>
  );
}

const Counter = (props) => {

  
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1}/>

      {/* Players list */}
      {
        props.initialPlayers.map(playa => 
          <Player 
            name={playa.name}
            score={playa.score}
          />
        )
      }

      <Player name="Mark" score={46}/>
      <Player name="Max" score={23}/>
      <Player name="Josie" score={34}/>
      <Player name="Correy" score={89}/>
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);
