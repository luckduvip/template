var fs = require("fs")
,Handlebars = require("handlebars");
var Tpl = function(){

}
Tpl.prototype = {
	readTpl : function(file_path){
		return fs.readFileSync(file_path,{encoding:"utf8"});
	}
	,out_apply : function(info,out_path){
		fs.writeFile(out_path,info,{encoding:"utf8"});
	}
	,tpl_apply : function(tpl,data,dest){
		var source = this.readTpl(tpl);
		console.log("source is ====",source);
		var template = Handlebars.compile(source);
		this.out_apply(template(data),dest);
	}
}
module.exports = new Tpl();

