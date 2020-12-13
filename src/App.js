import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { AdBanners } from './components/AdBanners';
import { AdminUsers } from './components/AdminUsers';
import { NewUser } from './components/NewUser';
import { Albums } from './components/Albums';
import { Artists } from './components/Artists';
import { Banners } from './components/Banners';
import { Categories } from './components/Categories';
import { Comments } from './components/Comments';
import { Contests } from './components/Contests';
import { Dashboard } from './components/Dashboard';
import { LiveTv } from './components/LiveTv';
import { Login } from './components/Login';
import { MediaCenter } from './components/MediaCenter';
import { NewAlbum } from './components/NewAlbum';
import { NewArtist } from './components/NewArtist';
import { NewMediaItem } from './components/NewMediaItem';
import { NewPost } from './components/NewPost';
import { NewSingles } from './components/NewSingles';
import { Notifications } from './components/Notifications';
import { OurTeam } from './components/OurTeam';
import { Playlists } from './components/Playlists';
import { NewPlaylist } from './components/NewPlaylist';
import { Polls } from './components/Polls';
import { Positions } from './components/Positions';
import { Posts } from './components/Posts';
import { Roles } from './components/Roles';
import { Shedule } from './components/Schedule';
import { Shows } from './components/Shows';
import { Singles } from './components/Singles';
import { Startup } from './components/Startup';
import { Surveys } from './components/Surveys';
import { Sync } from './components/Sync';
import { Tags } from './components/Tags';
import { Tubers } from './components/Tubers';
import { Users } from './components/Users';
import { NewCaustomCategories } from './components/NewCustomCategories';
import { NewRole } from './components/NewRole';
import { NewBanner } from './components/NewBanner';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Login} exact path="/login"></Route>
          <Route component={Dashboard} exact path="/dashboard"></Route>
          <Route component={Sync} exact path="/sync"></Route>
          <Route component={Posts} exact path="/posts"></Route>
          <Route component={Positions} exact path="/positions"></Route>
          <Route component={Startup} exact path="/startup"></Route>
          <Route component={Tags} exact path="/tags"></Route>
          <Route component={MediaCenter} exact path="/media-center"></Route>
          <Route component={NewMediaItem} exact path="/new-media-item"></Route>
          <Route component={AdBanners} exact path="/banners-media-center"></Route>
          <Route component={NewBanner} exact path="/new-banner-media-center"></Route>
          <Route component={Artists} exact path="/artists"></Route>
          <Route component={NewArtist} exact path="/new-artist"></Route>
          <Route component={Tubers} exact path="/tubers"></Route>
          <Route component={Singles} exact path="/singles"></Route>
          <Route component={NewSingles} exact path="/new-singles"></Route>
          <Route component={Albums} exact path="/albums"></Route>
          <Route component={NewAlbum} exact path="/new-album"></Route>
          <Route component={Playlists} exact path="/playlists"></Route>
          <Route component={NewPlaylist} exact path="/new-playlist"></Route>
          <Route component={Categories} exact path="/custom-categories"></Route>
          <Route component={NewCaustomCategories} exact path="/new-custom-categories"></Route>
          <Route component={AdminUsers} exact path="/cms-users"></Route>
          <Route component={NewUser} exact path="/new-cms-user"></Route>
          <Route component={Roles} exact path="/roles"></Route>
          <Route component={NewRole} exact path="/new-role"></Route>
          <Route component={Users} exact path="/users"></Route>
          <Route component={Comments} exact path="/comments"></Route>
          <Route component={LiveTv} exact path="/live-tv"></Route>
          <Route component={Notifications} exact path="/notifications"></Route>
          <Route component={Shows} exact path="/shows"></Route>
          <Route component={Shedule} exact path="/schedule"></Route>
          <Route component={Polls} exact path="/polls"></Route>
          <Route component={Surveys} exact path="/surveys"></Route>
          <Route component={Banners} exact path="/banners"></Route>
          <Route component={Contests} exact path="/contests"></Route>
          <Route component={OurTeam} exact path="/our-team"></Route>
          <Route component={NewPost} exact path="/new-post"></Route>
          <Redirect from="/" to="dashboard" />    
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
