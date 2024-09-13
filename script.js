// Get elements
const form = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const filterInput = document.getElementById('filter');

// Add event listeners
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearItems);
filterInput.addEventListener('input', filterItems);

// Add item function
function addItem(e) {
          e.preventDefault();
          const itemInput = document.getElementById('item-input');
          const newItem = itemInput.value;
          if (newItem !== '') {
                    const li = document.createElement('li');
                    li.textContent = newItem;
                    const removeButton = document.createElement('button');
                    removeButton.classList.add('remove-item', 'btn-link', 'text-red');

                    removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
                    li.appendChild(removeButton);
                    itemList.appendChild(li);
                    itemInput.value = '';
                    clearButton.style.display = 'block';
                    filterInput.style.display = 'block';
          }
}

// Remove item function
function removeItem(e) {
          if (e.target.classList.contains('remove-item')) {
                    const li = e.target.parentElement;
                    itemList.removeChild(li);
                    if (itemList.children.length === 0) {
                              clearButton.style.display = 'none';
                              filterInput.style.display = 'none';
                    }
          }
}

// Clear items function
function clearItems() {
          while (itemList.firstChild) {
                    itemList.removeChild(itemList.firstChild);
          }
          clearButton.style.display = 'none';
          filterInput.style.display = 'none';
}

// Filter items function
function filterItems(e) {
          const filterValue = e.target.value.toLowerCase();
          const items = itemList.children;
          for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    if (item.textContent.toLowerCase().includes(filterValue)) {
                              item.style.display = 'block';
                    } else {
                              item.style.display = 'none';
                    }
          }
}