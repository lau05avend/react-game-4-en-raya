import './ScoreBoard.css';

const ScoreBoard = ({score, player, turn}) => (
    <div className="parent">
        <div className={`section__aside ${player === 'X'?'pl1':'pl2' } `}>
            <p>Puntuación:</p><br />
            <h2 id="player1_title">Jugador "{player}"</h2>
            <div className="score_board">
                <div>{score}</div>
            </div>
        </div>
        <div className={`${turn!==player ? 'turnPlayer':'' }`}></div>
    </div>
)

export default ScoreBoard;