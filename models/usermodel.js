var orm = require("../config/orm.js");
var user = {
    showAllUsers: function(){
        orm.selectAll("users", function(r){
            return r;
        })
    }
}

module.exports = user;