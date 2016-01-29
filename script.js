console.log("linked");
window.onload = function() {
var blogText;
// var blogCollection=[];

function postBlogs() {
	blogText = document.getElementById('type-here').value;
	// blogCollection.push(blogText);
    var node = document.createElement("DIV");
    var textnode= document.createTextNode(blogText);
    node.appendChild(textnode);
 
 
	document.getElementById("lil-blogs-list").appendChild(node);
	}

	document.getElementById("click-here").addEventListener("click", function() {
	postBlogs();	
});
};