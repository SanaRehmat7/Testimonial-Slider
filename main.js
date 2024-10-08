(function() {
    const customerImg = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');
    let index = 0;
    const customers = [];

    // Customer constructor
    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    // Create a customer and add to the customers array
    function createCustomer(img, name, text) {
        // Path to the image
        let imagePath = `./img/${img}.avif`;  
        let customer = new Customer(imagePath, name, text);

        // Push the new customer object into the customers array
        customers.push(customer);
    }

    // Create customer objects
    createCustomer('img1', 'John Doe', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum sunt consequuntur nulla fugiat, delectus deleniti quisquam rem doloribus, incidunt aut, rerum natus expedita debitis eos nihil vel inventore possimus!');
    createCustomer('img2', 'Aliya', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum sunt consequuntur nulla fugiat, delectus deleniti quisquam rem doloribus, incidunt aut, rerum natus expedita debitis eos nihil vel inventore possimus!');
    createCustomer('img3', 'Sandy', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum sunt consequuntur nulla fugiat, delectus deleniti quisquam rem doloribus, incidunt aut, rerum natus expedita debitis eos nihil vel inventore possimus!');
    createCustomer('img4', 'John Doe', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum sunt consequuntur nulla fugiat, delectus deleniti quisquam rem doloribus, incidunt aut, rerum natus expedita debitis eos nihil vel inventore possimus!');
    createCustomer('img6', 'JD/JD', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum sunt consequuntur nulla fugiat, delectus deleniti quisquam rem doloribus, incidunt aut, rerum natus expedita debitis eos nihil vel inventore possimus!');
    createCustomer('img7', 'Pheena','Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum sunt consequuntur nulla fugiat, delectus deleniti quisquam rem doloribus, incidunt aut, rerum natus expedita debitis eos nihil vel inventore possimus!');

    // Function to display the customer based on the current index
    function displayCustomer(index) {
        customerImg.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
    }

    // Display the first customer on load
    displayCustomer(index);

    // Event listeners for the buttons
    btn.forEach(function(button) {
        button.addEventListener('click', function(e) {
            // Previous button logic
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length - 1;
                } else {
                    index--;
                }
                displayCustomer(index);
            }

            // Forward button logic
            if (e.target.parentElement.classList.contains('forwBtn')) {
                if (index === customers.length - 1) {
                    index = 0;
                } else {
                    index++;
                }
                displayCustomer(index);
            }
        });
    });

})();
