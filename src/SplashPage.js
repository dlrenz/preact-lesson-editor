import { h, Component } from 'preact';

class SplashPage extends Component {
  render() {
    return (
      <div className='SplashPage'>
        <a href='/edit'>Edit</a><br/>
        <a href='/view'>View</a>
      </div>
    );
  }
}

export default SplashPage;
