// Initial Commit

// Task 2
function addRiskItem() {
    const riskName = document.getElementById('riskName').value; // Grabs the value of the riskName input field
    const riskDescription = document.getElementById('riskDescription').value; // Grabs the value of the riskDescription input field
    const riskLevel = document.getElementById('riskLevel').value; // Grabs the value of the riskLevel input field

    const riskCard = document.createElement('div'); // Create a new div element to hold the risk card
    riskCard.className = 'riskCard'; // Add a class to the risk card which lines up with the html and css

    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p><strong>Description:</strong> ${riskDescription}</p>
        <p><strong>Risk Level:</strong> ${riskLevel}</p>
        <button class="removeButton">Remove</button>
    `; // This is the template literal that will be added to the risk card. 

    const removeButton = riskCard.querySelector('.removeButton');
    removeButton.addEventListener('click', () => {
        riskCard.remove(); // Removes the risk card when the button is clicked
    });

    const riskDashboard = document.getElementById('riskDashboard'); // Defines the riskDashboard element
    riskDashboard.appendChild(riskCard); // Appends the riskCard to the riskDashboard

    document.getElementById('riskForm').reset(); // Resets the form after the risk card has been added
}

// Task 3
const removeRiskButton = riskCard.querySelector('.removeButton');
removeRiskButton.addEventListener('click', () => {
    riskCard.remove();
});