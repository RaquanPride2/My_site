var node = document.createElement("li"); // Create a <li> node
var textnode = document.createTextNode("The Alien"); // Create a text node
node.appendChild(textnode); // Append the text to <li>
document.getElementById("listMovie").appendChild(node);

var node2 = document.createElement("li"); // Create a <li> node
var textnode2 = document.createTextNode("Mac n Cheese"); // Create a text node
node2.appendChild(textnode2); // Append the text to <li>
document.getElementById("listFood").appendChild(node2);


var node3 = document.createElement("li"); // Create a <li> node
var textnode3 = document.createTextNode("Three Doors Down"); // Create a text node
node3.appendChild(textnode3); // Append the text to <li>
document.getElementById("listBand").appendChild(node3);


function highlightList() {
	
	// Loop removes the class for the li tags
	//starts at 5 as to not removed the class for the li tags for the nav bar
	for (var i = 5; i < 23; i++) {
    	document.getElementsByTagName("li")[i].removeAttribute("class");
	}
	
	var first = Math.floor(Math.random() * (10 - 5) + 6);
	var second = Math.floor(Math.random() * (16 - 11) + 12);
	var third = Math.floor(Math.random() * (17 - 23) + 23);
	document.getElementsByTagName("li")[first].setAttribute("class", "highlight");
	document.getElementsByTagName("li")[second].setAttribute("class", "highlight");
	document.getElementsByTagName("li")[third].setAttribute("class", "highlight");
}
