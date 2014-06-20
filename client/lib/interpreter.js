$('.AI').text ("ainow-v7-proto loaded..");

/* :: NEW PROTOTYPE :: WORK IN PROGRESS :: 19/06/2014 */

/* Conjecture: the prototype does not follow the new architecture,
                because it does not implement RX, RQ, etc, in terms of
                    the micro-language recognized by the Interpreter;
            
                  this to save time in getting contributors up to speed ?
                
                possibly we can write a next version of this prototype that
                    re-implements the basics stuff in here in *in that new way*,
                        so we can get the feel for the new architecture together.. 
*/

/* Purpose: The prototype should illustrate how the Synth processes a simple task */
/* Purpose: The prototype should function as a demo for non-technical users */

/* module Interpreter: the micro-language interpreter */

function Interpreter () {}

var proto = Interpreter.prototype;

Interpreter.prototype.init = function Interpreter_init (input) {
    var interp = this;
    
    $('.AI').text ("ainow-v7-proto loaded..");
    
    if (input)
        interp.execFile (input);
    else
        interp.REPL ();
}

Interpreter.prototype.runloop = function Interpreter_REPL () {
    
}

Interpreter.prototype.execFile = function Interpreter_execFile (code) { 
    var interp = this;
    
    var stmts = code.split(/\n\s*\n/); /* simplistic structure: ws-sep paragraph at a time */
    for (var i = 0; i < stmts.length; i++)
        interp.exec (interp.parse (stmts [i]));
}

Interpreter.prototype.exec = function Interpreter_exec (ast) { /* ... */ }

Interpreter.prototype.parse = function Interpreter_parse (stmt) { return {} }

Interpreter.prototype.shutdown = function Interpreter_shutdown () { }