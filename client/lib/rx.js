/* module RX: pattern recognition */

/*   The pattern recognition algorithm is invoked whenever a model is updated.
        A model is a subgraph, which contains only a select number of nodes. 
            All thought takes places within a model. This is to limit the amount
              of processing that is done at any given time -- this is not optional. */


/* There are 4 event callbacks : node created, link created, node deleted, link deleted */

RX.prototype.new_node = function RX_new_node (model, node) { }
RX.prototype.new_link = function RX_new_link (model, link) {
    
    /* the most interesting of entry points, in a graph representation !
     *   a node on its own is uninteresting - and even existing nodes are often connected in fresh ways.
     *     also, links and nodes are rarely (if "ever") deleted (from an active model). instead, trust in the links is lowered towards zero.
    */
    
}
RX.prototype.del_node = function RX_del_node (model, node) { }
RX.prototype.del_link = function RX_del_link (model, link) { }

RX.prototype.update_state_trees = function RX_update_state_trees (model /* ... */) {
    /* ... */
}