import React from 'react';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink key={movie.id} to={'/Movies/${movie.id}'}>
      <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    <Link to = "/">
    <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
