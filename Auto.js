var Auto = {
	compress: function(){
		compress()
	},
	prettify: function(){
		prettify()
		compress()
		prettify()
	}
	
}
function compress(){
	var file = localStorage.getItem("fref_" + localStorage.getItem("href"));
	var tp = eval("language." + file.split(".")[file.split(".").length - 1]);
	var c = editor.getValue();
    switch (tp.toLowerCase()) {
        case "css":{
			c = c.replaceAll(/\t/g, "");
			c = c.replaceAll(/\n/g, "");
			c = c.replaceAll(/\r/g, ""); 
			break;
		}
        case "html":{
			c = c.replaceAll(/\t/g, "");
			c = c.replaceAll(/\n/g, "");
			c = c.replaceAll(/\r/g, ""); 
			break;
		}
		case "javascript":{
			c = c.replaceAll(/\n/g, " ")
			c = c.replaceAll("/n", " ")
			break;
		}
		default :{
			alert("Sorry,  We cant minify this language.");
			break;
		}
    }
    editor.setValue(c)
}
function prettify(){
	var file = localStorage.getItem("fref_" + localStorage.getItem("href"));
	var tp = eval("language." + file.split(".")[file.split(".").length - 1]);
	var c = editor.getValue();
    switch (tp.toLowerCase()) {
        case "css":{
			c = c.replaceAll("; ", ";");
			c = c.replaceAll(";", ";\n");
			c = c.replaceAll("{", "{\n")
			c = c.replaceAll(/\n/g, "\n\t");
			c = c.replaceAll("\t}", "}\n")
			break;
		}
        case "html":{
			c = c.replaceAll("/><", "/>\n<");
			c = c.replaceAll("><", ">\n\t<");
			c = c.replaceAll("><", ">\n\t<");
			c = c.replaceAll("\t</html>", "</html>");
			break;
		}
		case "javascript" :{
			
			break;
		}
		default :{
			alert("Sorry,  We cant Prettify this language.")
			break;
		}
    }
    editor.setValue(c)
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};