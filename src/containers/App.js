import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { connect } from 'react-redux';

import { requestRobots, setSearchField } from '../actions';

const App = ({searchField, onSearchChange, isPending, error, robots, onRequestRobots}) => {

  useEffect(() => {
    onRequestRobots()
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchField: state.searchRobotsReducer.searchField,
    isPending: state.fetchRobotsReducer.isPending,
    error: state.fetchRobotsReducer.error,
    robots: state.fetchRobotsReducer.robots
  }
}

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
})

export default connect(mapStateToProps, mapDispatchToProps)( App );
