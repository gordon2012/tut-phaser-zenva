import Phaser from 'phaser';
import config from './config/config';
import GameScene from './scenes/GameScene';

const game = new Phaser.Game(config);

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add('Game', GameScene);
        this.scene.start('Game');
    }
}

window.onload = () => {
    window.game = new Game();
};
