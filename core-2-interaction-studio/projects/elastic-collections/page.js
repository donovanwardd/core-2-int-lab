
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
        <div class="category">${item.classification}</div>
        <div class="category">${item.scientificname}</div>
        <div class="category">${item.commonname}</div>
        <div class="category">${item.description}</div>
        <div class="category">${item.location}</div>
        <div class="category">${item.reigon}</div>
        <div class="category">${item.status}</div>
        <div class="category">${item.date}</div>`;

        container.appendChild(newItem);  
    }

  });
}
