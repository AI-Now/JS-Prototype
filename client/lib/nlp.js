/* module NLP: natural language */

NLP.prototype.read = function NLP_read (text) {
    var nlp = this;
    
    var lxs = nlp.lex (text);
    var optrees = nlp.optrees (lxs);
}

NLP.prototype.lex = function NLP_lex (text) {
    
    /* fake lexing so we can focus on words for now (instead of characters, syllables, etc.) */
    
    /* this will only work for very simple paragraphs */
    
    var lxs = [];
    var sentences = text.split (/[.]\s/);
    for (var i = 0; i < sentences.length; i++)
    {
        var words = sentences [i] .split (/\W+/);
        
        for (var j = 0; j < words.length; j++)
            lxs.push (words [j]);
            
        lxs.push (".");
    }
    
    return lxs;
}

NLP.prototype.optrees = function NLP_optrees (lxs) {
    /* lxs contains a stream of words, with a "." marking the end of each sentence */
    
    var sentences = [];
    var optrees = [];
    
    for (var i = 0; i < lxs.length; i++)
    {
        if (lxs [i] != ".")
        {
            /* we have a word */
        }
        else {
            /* .. cleanup for next sentence */
            
            sentences.push (optrees);
            optrees = [];
        }
    }
    
    return sentences;
}