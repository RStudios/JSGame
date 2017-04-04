/**
 * @file JSGame Color Component.
 * @package jsgame
 * @copyright (c) 2016, Thomas Alrek
 * @author Thomas Alrek <thomas@alrek.no>
 */

"use strict";

import { clamp, flip } from '../Util/Math';

/**
 * @class Color
 * Creates a new instance of Color.
 * <p><i>Color is a instance of Component</i></p>
 *
 * @constructor
 * @param {options} options An object containing construct options
 * @property {number} alpha A number between 0 and 1 representing the colors alpha channel
 * @property {number} r A number between 0 and 255 representing the colors red channel
 * @property {number} g A number between 0 and 255 representing the colors green channel
 * @property {number} b A number between 0 and 255 representing the colors blue channel
 */
function Color(options){
    var self = this;
    this.__extend(Component, this, options);
    this.alpha = 1;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    
    /**
     * Clamps r,g,b, and alpha in the range 0-255
     * 
     * @method
     * @name Color#clamp
     * @returns {Color}
     */
    this.clamp = function(){
        return new Color({
            r: Math.round(clamp(self.r, 0, 255)),
            g: Math.round(clamp(self.g, 0, 255)),
            b: Math.round(clamp(self.b, 0, 255)),
            alpha: clamp(self.alpha, 0, 1)
        });
    }
    
    this.__construct(this, options);
    
    /**
     * Outputs the color value as an CSS rgba() string
     * 
     * @method
     * @name Color#toString
     * @returns {String}
     */
    this.toString = function(){
        var stringColor = new Color(this).clamp();
        return "rgba(" + stringColor.r + "," + stringColor.g + "," + stringColor.b + "," + stringColor.alpha + ")";
    }
}

Color.prototype = new Component();
Color.prototype.constructor = Color;

/**
 * Returns the inverse color
 * 
 * @method
 * @name Color#invert
 * @returns {Color}
 */
Color.prototype.invert = function(invertAlpha){
    var alpha = this.alpha;
    if(invertAlpha){
        alpha = flip(this.alpha, 1);
    }
    return new Color({
        r: flip(this.r, 255),
        g: flip(this.g, 255),
        b: flip(this.b, 255),
        alpha: alpha
    })
}

/**
 * Returns a new red Color
 * 
 * @method
 * @name Color#red
 * @returns {Color}
 */
Color.prototype.red = function(){
    return new Color({
        r: 255,
        g: 0,
        b: 0
    });
}

/**
 * Returns a new green Color
 * 
 * @method
 * @name Color#green
 * @returns {Color}
 */
Color.prototype.green = function(){
    return new Color({
        r: 0,
        g: 255,
        b: 0
    });
}

/**
 * Returns a new blue Color
 * 
 * @method
 * @name Color#blue
 * @returns {Color}
 */
Color.prototype.blue = function(){
    return new Color({
        r: 0,
        g: 0,
        b: 255
    });
}

/**
 * Returns a new black Color
 * 
 * @method
 * @name Color#black
 * @returns {Color}
 */
Color.prototype.black = function(){
    return new Color({
        r: 0,
        g: 0,
        b: 0
    });
}

/**
 * Returns a new white Color
 * 
 * @method
 * @name Color#white
 * @returns {Color}
 */
Color.prototype.white = function(){
    return new Color({
        r: 255,
        g: 255,
        b: 255
    });
}

/**
 * Returns a new cyan Color
 * 
 * @method
 * @name Color#cyan
 * @returns {Color}
 */
Color.prototype.cyan = function(){
    return new Color({
        r: 0,
        g: 255,
        b: 255
    });
}

/**
 * Returns a new magenta Color
 * 
 * @method
 * @name Color#magenta
 * @returns {Color}
 */
Color.prototype.magenta = function(){
    return new Color({
        r: 255,
        g: 0,
        b: 255
    });
}

/**
 * Returns a new yellow Color
 * 
 * @method
 * @name Color#yellow
 * @returns {Color}
 */
Color.prototype.yellow = function(){
    return new Color({
        r: 255,
        g: 255,
        b: 0
    });
}

/**
 * Returns a new grey Color
 * 
 * @method
 * @name Color#grey
 * @returns {Color}
 */
Color.prototype.grey = function(){
    return new Color({
        r: 128,
        g: 128,
        b: 128
    });
}

/**
 * Returns a new color that is the Color added with another Color, or the Color values added with a number
 * 
 * @method
 * @name Color#add
 * @param {Color|number} color The value to add
 * @returns {Color}
 * @throws TypeError If color is not an instance of Color or a number
 */
Color.prototype.add = function(color){
    switch(typeof color){
        case 'object':
            if(!(color instanceof Color)){
                throw TypeError("Object not an instance of Color");
            }
            return new Color({
                r: this.r + color.r,
                g: this.g + color.g,
                b: this.b + color.b
            });
            break;
        case 'number':
            return new Color({
                r: this.r + color,
                g: this.g + color,
                b: this.b + color
            });
            break;
        default:
            throw TypeError("Argument not a object or a number");        
    }
}

/**
 * Returns a new color that is the Color multiplied with another Color, or the Color values multiplied with a number
 * 
 * @method
 * @name Color#multiply
 * @param {Color|number} color The value to multiply
 * @returns {Color}
 * @throws TypeError If color is not an instance of Color or a number
 */
Color.prototype.multiply = function(color){
    switch(typeof color){
        case 'object':
            if(!(color instanceof Color)){
                throw TypeError("Object not an instance of Color");
            }
            return new Color({
                r: this.r * color.r,
                g: this.g * color.g,
                b: this.b * color.b
            });
            break;
        case 'number':
            return new Color({
                r: this.r * color,
                g: this.g * color,
                b: this.b * color
            });
            break;
        default:
            throw TypeError("Argument not a object or a number");        
    }
}

/**
 * Returns a new color that is the Color divided by another Color, or the Color values divided by a number
 * 
 * @method
 * @name Color#divide
 * @param {Color|number} color The value to divide by
 * @returns {Color}
 * @throws TypeError If color is not an instance of Color or a number
 */
Color.prototype.divide = function(color){
    switch(typeof color){
        case 'object':
            if(!(color instanceof Color)){
                throw TypeError("Object not an instance of Color");
            }
            return new Color({
                r: this.r / color.r,
                g: this.g / color.g,
                b: this.b / color.b
            });
            break;
        case 'number':
            return new Color({
                r: this.r / color,
                g: this.g / color,
                b: this.b / color
            });
            break;
        default:
            throw TypeError("Argument not a object or a number");        
    }
}

/**
 * Returns a new color that is the Color subtracted from another Color, or the Color values subtract from a number
 * 
 * @method
 * @name Color#subtract
 * @param {Color|number} color The value to subtract from
 * @returns {Color}
 * @throws TypeError If color is not an instance of Color or a number
 */
Color.prototype.subtract = function(color){
    switch(typeof color){
        case 'object':
            if(!(color instanceof Color)){
                throw TypeError("Object not an instance of Color");
            }
            return new Color({
                r: this.r - color.r,
                g: this.g - color.g,
                b: this.b - color.b
            });
            break;
        case 'number':
            return new Color({
                r: this.r - color,
                g: this.g - color,
                b: this.b - color
            });
            break;
        default:
            throw TypeError("Argument not a object or a number");        
    }
}

/**
 * Compare the Color with another instance of Color
 * 
 * @method
 * @name Color#equal
 * @param {Color} color An instance of Color to compare
 * @returns {boolean}
 * @throws TypeError If color is not an instance of Color
 */
Color.prototype.equal = function(color){
    if(!(color instanceof Color)){
        throw TypeError("Argument not an instance of Color");
    }
    if(this.r === color.r && this.g === color.g && this.b === color.b){
        return true;
    }
    return false;
}

/**
 * Return a new Color that is linear interpolated between two instances of Color over a specified interval
 * 
 * @method
 * @name Color#lerp
 * @param {Color} a The Color instance to interpolate from
 * @param {Color} b The Color instance to interpolate to
 * @param {number} t The interval to interpolate over
 * @returns {Color}
 * @throws TypeError If a or b is not an instance of Color, or t is not a number
 */
Color.prototype.lerp = function(a, b, t){
    if(!(a instanceof Color) || !(b instanceof Color)){
        throw TypeError("Argument not an instance of Color");
    }
    if(typeof t !== 'number'){
        throw TypeError("Argument must be a number");
    }
    return (new Color(b).subtract(a)).multiply(t);
}

module.exports = Color;