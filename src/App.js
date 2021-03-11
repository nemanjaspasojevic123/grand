import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
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
import { authService } from './services/auth.service';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute component={Login} exact path="/login"></PublicRoute>
          <PrivateRoute component={Dashboard} exact path="/dashboard"></PrivateRoute>
          <PrivateRoute component={Posts} exact path="/posts"></PrivateRoute>
          <PrivateRoute component={Positions} exact path="/positions"></PrivateRoute>
          <PrivateRoute component={Tags} exact path="/tags"></PrivateRoute>
          <PrivateRoute component={MediaCenter} exact path="/media-center"></PrivateRoute>
          <PrivateRoute component={NewMediaItem} exact path="/new-media-item"></PrivateRoute>
          <PrivateRoute component={AdBanners} exact path="/banners-media-center"></PrivateRoute>
          <PrivateRoute component={NewAdBanner} exact path="/new-banner-media-center"></PrivateRoute>
          <PrivateRoute component={Notifications} exact path="/notifications"></PrivateRoute>
          <PrivateRoute component={Shows} exact path="/shows"></PrivateRoute>
          <PrivateRoute component={NewShow} exact path="/new-show"></PrivateRoute>
          <PrivateRoute component={Shedule} exact path="/schedule"></PrivateRoute>
          <PrivateRoute component={Polls} exact path="/polls"></PrivateRoute>
          <PrivateRoute component={NewPoll} exact path="/new-poll"></PrivateRoute>
          <PrivateRoute component={Surveys} exact path="/surveys"></PrivateRoute>
          <PrivateRoute component={NewSurvey} exact path="/new-survey"></PrivateRoute>
          <PrivateRoute component={Banners} exact path="/banners"></PrivateRoute>
          <PrivateRoute component={NewBanner} exact path="/new-banner"></PrivateRoute>
          <PrivateRoute component={NewPost} exact path="/new-post"></PrivateRoute>
          <Redirect to={authService.isLoged() ? "/dashboard" : "/login"} />    
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
