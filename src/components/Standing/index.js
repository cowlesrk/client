import React from 'react';

const Standing = ({ standing, rank }) => (
  <div className="list-group-item">
    <p className="rank">{rank}</p>
    <img src={standing.picture} alt="avatar" className="avatar" />
    <p>{standing.first_name}</p>
    <p>{standing.last_name}</p>
    <p className="credits">{standing.credibility}</p>
  </div>

  );

Standing.propTypes = {
  rank: React.PropTypes.number.isRequired,
  standing: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    first_name: React.PropTypes.string.isRequired,
    last_name: React.PropTypes.string.isRequired,
    credibility: React.PropTypes.number.isRequired,
  }),
};

Standing.defaultProps = {
  standing: {},
};
export default Standing;