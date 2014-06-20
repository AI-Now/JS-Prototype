/* module RQ: planning */

function RQ () { 
    var planner = this;
    
    planner.status = Object.create (null);
}

RQ.prototype.plan = function RQ_plan (initial, target) {
    var planner = this;
    var result = false;
    
    /* approach 1: follow the Cdiv substrate */
    planner.plan_approach_cdiv (initial, target);
    
    if (planner.status.done)
        return planner.status.result;
    
    /* approach 2: ... */
    
}

RQ.prototype.plan_approach_cdiv = function RQ_plan_approach_cdiv (initial, target) {
    var planner = this;
    
    /* ! mock result */
    planner.status.done = true;
    planner.status.result = {
        initial: initial,
        target: target,
        steps: []
    }
}