/* module Graph: symbolic weighted graph */

function Graph () { }

function GraphLink () {
    var link = this;
    
    link.origin = null; /* the origin node */
    link.target = null; /* the target node */
    link.type   = null; /* the type of the link: also a node, but given by ID */
}
function GraphNode (graph) {
    var node = this;
    
    node.model = graph;
    node.incoming = [];
    node.outgoing = [];
}

Graph.prototype.node = function Graph_node () { 
    return new GraphNode (this);
}

Graph.prototype.link = function Graph_link (n1, type, n2) { 
    var link = new GraphLink ();
    
    link.origin = n1;
    link.target = n2;
    link.type = type;
    
    n1.outgoing.push (link);
    n2.incoming.push (link);
}