import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { AdBanners } from './components/AdBanners';
import { Banners } from './components/Banners';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { MediaCenter } from './components/MediaCenter';
import { NewMediaItem } from './components/NewMediaItem';
import { NewPost } from './components/NewPost';
import { Notifications } from './components/Notifications';
import { Polls } from './components/Polls';
import { Positions } from './components/Positions';
import { Posts } from './components/Posts';
import { Shedule } from './components/Schedule';
import { Shows } from './components/Shows';
import { Surveys } from './components/Surveys';
import { Tags } from './components/Tags';
import { NewAdBanner } from './components/NewAdBanner';
import { NewShow } from './components/NewShow';
import { NewPoll } from './components/NewPoll';
import { NewSurvey } from './components/NewSurvey';
import { NewBanner } from './components/NewBanner';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Login} exact path="/login"></Route>
          <Route component={Dashboard} exact path="/dashboard"></Route>
          <Route component={Posts} exact path="/posts"></Route>
          <Route component={Positions} exact path="/positions"></Route>
          <Route component={Tags} exact path="/tags"></Route>
          <Route component={MediaCenter} exact path="/media-center"></Route>
          <Route component={NewMediaItem} exact path="/new-media-item"></Route>
          <Route component={AdBanners} exact path="/banners-media-center"></Route>
          <Route component={NewAdBanner} exact path="/new-banner-media-center"></Route>
          <Route component={Notifications} exact path="/notifications"></Route>
          <Route component={Shows} exact path="/shows"></Route>
          <Route component={NewShow} exact path="/new-show"></Route>
          <Route component={Shedule} exact path="/schedule"></Route>
          <Route component={Polls} exact path="/polls"></Route>
          <Route component={NewPoll} exact path="/new-poll"></Route>
          <Route component={Surveys} exact path="/surveys"></Route>
          <Route component={NewSurvey} exact path="/new-survey"></Route>
          <Route component={Banners} exact path="/banners"></Route>
          <Route component={NewBanner} exact path="/new-banner"></Route>
          <Route component={NewPost} exact path="/new-post"></Route>
          <Redirect from="/" to="dashboard" />    
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
