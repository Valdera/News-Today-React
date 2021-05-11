// Import Library
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Import Redux
import { fetchNewsStart } from './redux/news/news.actions';
// Import Component
import HomePage from './pages/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';
import BookmarkPage from './pages/bookmarkpage/bookmarkpage.component';
// Import styles
import './App.scss';

function App({ fetchNewsStart }) {
  useEffect(() => {
    const fetchNews = async () => {
      await fetchNewsStart();
    };
    fetchNews();
  }, [fetchNewsStart]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/news" />} />
        <Route exact path="/news" component={HomePage} />
        <Route exact path="/news/:id" component={HomePage} />
        <Route exact path="/bookmark" component={BookmarkPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchNewsStart: () => dispatch(fetchNewsStart())
});

export default connect(null, mapDispatchToProps)(App);
