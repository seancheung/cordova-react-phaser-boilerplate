import React from 'react';
import { Game } from 'phaser';
import config from './config';
import ExampleScene from './scenes/example';

export default class GameCanvas extends React.Component {

    constructor(props) {
        super(props);
        this.game = new Game(config);
        this.game.scene.add('example', ExampleScene);
        this.resizeGame = this.resizeGame.bind(this);
    }

    render() {
        return <div id="game-root" />;
    }

    resizeGame() {
        this.game.resize(window.innerWidth, window.innerHeight);
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizeGame);
        document.addEventListener(
            'deviceready',
            () => {
                this.game.scene.start('example');
            },
            false
        );
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeGame);
    }

    shouldComponentUpdate() {
        return false;
    }

}
