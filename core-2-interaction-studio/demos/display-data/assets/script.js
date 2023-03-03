//setup container element
let container = document.getElementById("container");

let emojiObject = {
  "by": "Emily",
  "id": 1,
  "emoji": "🌄",
  "img": "filename-img.png",
  "description": "Sunrise over mountains",
  "alt-meaning": "Sun, Mountains, Early Morning",
  "category": "Travel & Places",
  "year": "October 2010",
  "update": "Version 6.0",
  "general-usage": "4 (Yearly Rankn 389)",
  "personal-usage": 1,
  "intensity": 2,
  "sample": "🔸 The sunrise over the mountains🌄 was a charming scene.",
  "unicode": "U+1F304"
}




// must setup a local server to use fetch
// see Python instructions here:
// https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python

fetch('./assets/emojis.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayData(data);
  })
  .catch(error => console.log(error));

function displayData( data ){
  data.forEach( function(item, index){
    console.log(item, index);
    let usage = item['general-usage'];
    console.log('usgae', usage);
    let newItem = document.createElement("div");
    newItem.classList.add("icon");
    //newItem.style.cssText = 'font-size: ${usage}px';
    newItem.innerHTML = `
      <div class="usage">${usage}</div>
      <div class="phrase">${item.sample}</div>
      <div class="category">${item.category}</div>
      <div class="emoji">${item.emoji}</div>`;
    container.appendChild(newItem);    
  });
}
