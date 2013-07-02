PrepTable = {
    init : function(cookies) {
      PrepTable = new Array(cookies);   
    },
    
    setRack: function(cookieName, cookieBakingTime){
        PrepTable.push(new Cookie(cookieName, cookieBakingTime))
        return PrepTable;
    } 
}

