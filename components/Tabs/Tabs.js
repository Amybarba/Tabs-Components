
class TabLink {
  constructor(element) {
  
    this.element = element;
      // Assign this.element to the passed in DOM element


    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(` .tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
this.element.addEventListener('click', () =>  this.select (event));  
  
  };

  select(event) {
    // Get all of the elements with the tabs-link class
  let links1 = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
links1 = Array.from(links1);
for(let i = 0; i < links1.length; i++) {
  links1[i].classList.remove('tabs-link-selected');
 }
    // Array.from(links).forEach();

    // Add a class named "tabs-link-selected" to this link
this.element.classList.add('tabs-link-selected');
   
    // Call the select method on the item associated with this link
this.tabItem.select();

  }
}

  // Assign this.element to the passed in element
  // Select all ".tabs-item" elements from the DOM

class TabItem {
  constructor(element) {
    this.element = element;
  }


select(event) {
  let items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items = Array.from(items).forEach (item => 
      item.classList.remove('tabs-item-selected'));
    
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

// /START HERE: 
// - Select all classes named ".tabs-link" and assign that value to the links variable

let links = document.querySelectorAll(' .tabs-link');

// - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

links = Array.from(links).map( element  => new TabLink(element));

// - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
links[0].select(event);
// links = document.querySelectorAll();