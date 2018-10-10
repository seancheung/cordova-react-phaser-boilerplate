import React from 'react';
import Game from './Game';
import HelloWorld from './HelloWorld';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Game />
                <HelloWorld />
            </div>
        );
    }

}
