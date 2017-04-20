/**
 * @file JSGame Particle GameObject.
 * @package jsgame
 * @copyright (c) 2016, Thomas Alrek
 * @author Thomas Alrek <thomas@alrek.no>
 */

"use strict";

import { Vector2 } from '../Components/Vector2';

/**
 * @class Particle
 * Creates a new instance of Particle.
 * <p><i>Particle is an instance of GameObject</i></p>
 *
 * @constructor
 * @param {options} options An object containing construct options
 */
function Particle(options){
    this.__extend(GameObject, this, options);
    this.speed = new Vector2();
    this.radius = 1;
    this.life = 1;
    this.remainingLife = 1;
    this.color = new Color({
        r: 255,
        g: 255,
        b: 255,
        alpha: 1
    });
    this.__construct(this, options);
    this.remainingLife = this.life;
}

Particle.prototype = new GameObject();
Particle.prototype.constructor = Particle;

module.exports = Particle;