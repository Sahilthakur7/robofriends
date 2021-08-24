import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';

import { requestRobots, setSearchField } from '../actions';
import MainPage from '../components/MainPage';

const App = (props) => {
  return <MainPage {...props} />;
};

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobotsReducer.searchField,
    isPending: state.fetchRobotsReducer.isPending,
    error: state.fetchRobotsReducer.error,
    robots: state.fetchRobotsReducer.robots,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
