
let container = document.querySelector('.flex-body');

fetch('animals.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayData(data);
  })
  .catch(error => console.log(error));

function displayData( data ){

    console.log( document.querySelector('body').id);
    let body_key =  document.querySelector('body').id;
  data.forEach( function(item, index){
    console.log(item, index);
    if ( item.key == body_key ){
        let newItem = document.createElement("div");
        newItem.classList.add("data-points");
        newItem.innerHTML = `
        <div class="category"><span class="label">Classification: </span> ${item.classification}</div>
        <div class="category"><span class="label">Scientific Name: </span>${item.scientificname}</div>
        <div class="category"><span class="label">Common Name: </span>${item.commonname}</div>
        <div class="category"><span class="label">Description: </span>${item.description}</div>
        <div class="category"><span class="label">Location: </span>${item.location}</div>
        <div class="category"><span class="label">Reigon: </span>${item.reigon}</div>
        <div class="category"><span class="label">Status: </span>${item.status}</div>
        <div class="category"><span class="label">Date of Status Update: </span>${item.date}</div>`;

        container.appendChild(newItem);  
    }

  });
}
