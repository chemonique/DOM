// Change the title text when the button is clicked
document.getElementById('changeTextButton').addEventListener('click', function() {
    const title = document.getElementById('title');
    const inputText = document.getElementById('inputText').value;
    title.textContent = inputText ? inputText : 'You didn\'t type anything!';
  });
  
  // Add a new list item
  document.getElementById('addItemButton').addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${document.querySelectorAll('#list .item').length + 1}`;
    newItem.classList.add('item');
    document.getElementById('list').appendChild(newItem);
  });
  
  // Remove the last list item
  document.getElementById('removeItemButton').addEventListener('click', function() {
    const list = document.getElementById('list');
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    } else {
      alert('No more items to remove!');
    }
  });
  
  // Highlight all list items
  document.getElementById('highlightItemsButton').addEventListener('click', function() {
    const items = document.querySelectorAll('#list .item');
    items.forEach(item => item.classList.toggle('highlight'));
  });
  
  // Toggle visibility of the div container
  document.getElementById('toggleVisibilityButton').addEventListener('click', function() {
    const container = document.getElementById('container');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
  });
  
  // Modify the link's href and handle click event
  const link = document.getElementById('link');
  link.setAttribute('href', 'https://www.example.com');
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link action
    alert('Link clicked! Now going to example.com');
    window.location.href = this.href; // Redirect to the link's URL
  });
  
  // Add text to the paragraph inside the div
  const paragraph = document.querySelector('#container p');
  paragraph.textContent += ' This text was added via JavaScript.';
  
  // Handle form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validate form inputs
    if (!name || !email || !message) {
      const errorMessage = 'Please fill out all fields.';
      document.getElementById('formResponse').innerHTML = `<p class="error">${errorMessage}</p>`;
      return;
    }
  
    // Display form data
    const responseMessage = `
      <h3>Form Submitted Successfully</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
    document.getElementById('formResponse').innerHTML = responseMessage;
  
    // Clear the form fields
    document.getElementById('contactForm').reset();
  });