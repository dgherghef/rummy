import './App.css';
import Score from './Score';

function Players(props) {
  const { name } = props;
  return (
    <div>
      <div className='box-player'>
        <h2>{name}</h2>
        <Score />
      </div>
    </div>
  );
}

export default Players;
