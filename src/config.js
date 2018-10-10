import { AUTO } from 'phaser';

export const DPR = 3;
export const GRAVITY = 200;
export const SCALE_RATIO = window.devicePixelRatio / DPR;

export default {
    parent: 'game-root',
    type: AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: GRAVITY } }
    }
};
