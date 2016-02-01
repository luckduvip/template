var data = { "name": "Alan", "hometown": "Somewhere, TX", "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var tpl = require("./module/template/index");
tpl.tpl_apply("./module/template/tpl.js",data,"./module/template/out.js");
