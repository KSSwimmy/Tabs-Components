
//////////KIM'S NOTES///////////
// Step 3: Create TabLink class definition and pass in the link reference to the DOM element
//////////////////////////////////
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;


    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    
    //////////KIM'S NOTES///////////
    //Step 4: Match the data-set values between our link and the .tabs-item
    /////////////////////////////////

    // Using the custom data attribute get the associated Item element
     this.itemElement = document.querySelector(
      `.tabs-item[data-tab ='${this.data}']`,
    );
    //////////KIM'S NOTES///////////
    //string template literal is used so you can interpolate `this.data` which is a variable.
    //declared higher up 
    //otherwise you wouldn't be able to get that value 

    //we use bracket notation because js will try to do math and subtract. 
   //////////////////////////////////
   
  
   //////////KIM'S NOTES///////////
  // Step 5: Create a new TabItem object from our matched data-set itemElement
  //////////////////////////////////

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

    //////////KIM'S NOTES///////////
    // Step 6: Add event listener for our link and pass in the implicit of the the 'this' keyword using an arrow function
  //////////////////////////////////


    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {
      this.select();
    });
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => {
      link.classList.remove('tabs-link-selected');
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
   this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    
    items.forEach(item => {
      item.classList.remove('tabs-item-selected');
    });

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/
// Step 1: Get all the elements from the DOM into a Nodelist ==== 
links = document.querySelectorAll('.tabs-link');
// Step 2: Iterate over each element from our Nodelist and send them to the class TabLink.
links.forEach(function(link) {
return new TabLink(link);
});

//Using Callback function to execute for each element. 
//link is the argument 