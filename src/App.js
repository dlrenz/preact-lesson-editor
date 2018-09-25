import { h, Component } from 'preact';
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';

import LoadingPage from './LoadingPage';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AsyncRoute 
            path='/edit' 
            getComponent={() => import('./LessonEdit/LessonEdit').then(mod=>mod.default) }
            loading={ () => <LoadingPage/> }
          />
          <AsyncRoute 
            path='/view' 
            getComponent={() => import('./LessonView/LessonView').then(mod=>mod.default) }
            loading={ () => <LoadingPage/> }
          />
          <AsyncRoute 
            path='/' 
            getComponent={() => import('./SplashPage').then(mod=>mod.default) }
            loading={ () => <LoadingPage/> }
          />
        </Router>
      </div>
    );
  }
}

export default App;
