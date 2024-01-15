import PropTypes from 'prop-types';
import { UseDispatch, useDispatch } from 'react-redux';

const GitUserCard = ({ gituser: { avatar_url, name, location, bio } }) => {
  const dispatch = useDispatch()
  
  return (
    <div onClick={()=> dispatch() } className="ui card">
      <div className="image">
        <img src={avatar_url} />
      </div>
      <div className="content">
        <a className="header">{name}</a>
        <div className="meta">
          <span className="date">{location}</span>
        </div>
        <div className="description">{bio}</div>
      </div>
    </div>
  );
};

GitUserCard.propTypes = {
  gituser: PropTypes.object,
};

export default GitUserCard;
