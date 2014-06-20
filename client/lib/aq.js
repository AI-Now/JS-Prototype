/* module AQ: analogies */

function AQ () { }

function Analogy () {
    var analogy = this;
    
    analogy.sides = [];
    
    for (var i = 0; i < arguments.length; i++)
        analogy.sides.push (arguments [i]); /* JS-fu fail */
}

AQ.prototype.compare = function (side1, side2) {
    var aq = this;
    
    var analogy = new Analogy (side1, side2);
}