var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var newname = req.query.name;
    var newdescription = req.query.description;
    var newimage = 'http://lorempixel.com/400/400/people';
    var newfriend = {}; 
    newfriend["name"] = newname;
	newfriend["description"] = newdescription;
    newfriend["imageURL"] = newimage;
//    console.log(newname)
//    console.log(newdescrip)
//    console.log(newimage)
    data.friends.push(newfriend);
    res.render('index',data);
    console.log(newfriend)
 }