
fetch("design-tokens-color.json")
.then(function(response){
	return response.json();
})
.then(function(colors){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let color of colors){
		out += `
			<tr>
				<td>${color.name}</td>
				<td>${color.value}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});