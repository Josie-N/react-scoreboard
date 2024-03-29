const players = [
  {
    name: "Guil",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
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

class Counter extends React.Component {

  constructor() {
    super()
    this.state = {
      score: 0
    };
  }

  render () {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.props.score }</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={props.initialPlayers.length}
      />

      {/* Players list */}
      {
        props.initialPlayers.map( player => 
          <Player 
            name={player.name}
            score={player.score}
            key={player.id.toString()}
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
