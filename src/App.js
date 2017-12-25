import React from 'react';
import gitIcon from './styles/media/github.png';
import logo from './styles/media/logo.svg';

class App extends React.Component {
    render() {
        return <div className='app'>
            <div className='header'>
                <img src={logo} alt='logo' />
                <h2>React is set. Let's go.</h2>
            </div>
            <div className='content'>
                <h3>modify <code>/src</code> to take over.</h3>
                <br/>
                <div className='about'>
                    <h3>
                        This build supports ES6 and React.
                    </h3>
                    <h3>
                       Supported Assets:
                    </h3>
                    <ul>
                        <li>CSS</li>
                        <li>Images</li>
                        <li>Data files</li>
                        <li>Fonts</li>
                    </ul>
                </div>
            </div>
            <div className='footer'>
                <a target="_blank" href='https://github.com/Amiryy'>
                    <img src={gitIcon} alt="git" />
                </a>
            </div>
        </div>
    }
}

export default App;