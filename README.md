# Selecting Elements

- `document.getElementById(id)`: Selects a single element by its id.
- `document.getElementsByClassName(className)`: Selects all elements with a specific class.
- `document.getElementsByTagName(tagName)`: Selects all elements with a specific tag.
- `document.querySelector(selector)`: Selects the first element that matches a CSS selector.
- `document.querySelectorAll(selector)`: Selects all elements that match a CSS selector.

# Manipulating the DOM

## Changing Content

- `element.innerHTML`: Gets or sets the HTML content inside an element.
- `element.textContent`: Gets or sets the text content inside an element.
- `element.innerText`: Similar to `textContent`, but respects styling (e.g., it won't include hidden text).

## Modifying Attributes

- `element.getAttribute(attributeName)`: Gets the value of an attribute.
- `element.setAttribute(attributeName, value)`: Sets the value of an attribute.
- `element.removeAttribute(attributeName)`: Removes an attribute.

## Changing Styles

- `element.style.propertyName = value`: Changes the inline CSS style of an element (e.g., `element.style.color = "red";`).
- `element.classList`: Provides methods to add, remove, toggle, and check for classes on an element (e.g., `element.classList.add("newClass");`).

## Creating and Removing Elements

- `document.createElement(tagName)`: Creates a new element (e.g., `let newDiv = document.createElement("div");`).
- `element.appendChild(node)`: Appends a node as the last child of a parent element.
- `element.insertBefore(newNode, referenceNode)`: Inserts a node before a reference node.
- `element.removeChild(childNode)`: Removes a child node from an element.
- `element.remove()`: Removes an element from the DOM.

# Traversing the DOM

(You can navigate through the DOM tree to find related elements)

- `element.parentNode`: Gets the parent node of an element.
- `childNodes`: Gets all child nodes of an element (including text nodes).
- `firstChild`: Gets the first child node.
- `lastChild`: Gets the last child node.
- `nextSibling`: Gets the next sibling node.
- `previousSibling`: Gets the previous sibling node.
- `firstElementChild`: Gets the first child element (ignores text nodes).
- `lastElementChild`: Gets the last child element (ignores text nodes).
- `nextElementSibling`: Gets the next sibling element.
- `previousElementSibling`: Gets the previous sibling element.
