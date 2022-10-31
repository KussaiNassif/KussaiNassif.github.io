import {getBurgers} from './apiManager.js';

async function mapBurgers() {
  var itemsContainer = document.getElementById('items');
  var items = await getBurgers();

  items.forEach(item => {
    var itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `
      <img class="item-img" src="${item.images[0].sm}" alt="${item.name}">
      <h1 class="item-title">${item.name}</h1>
      <h2>Price: ${item.price} SEK</h2>
      <p class="item-description">${item.desc}</p>
    `;
    itemsContainer.appendChild(itemElement);
  });
}

mapBurgers();
