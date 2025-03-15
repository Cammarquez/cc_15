// Initial Commit

// Task 2
function addRiskItem() {
    const riskName = document.getElementById('riskName').value; // Grabs the value of the riskName input field
    const riskDescription = document.getElementById('riskDescription').value; // Grabs the value of the riskDescription input field
    const riskLevel = document.getElementById('riskLevel').value; // Grabs the value of the riskLevel input field
    riskLevel.className = 'riskLevel'; // Adds a class to the risk level

    const riskCard = document.createElement('div'); // Create a new div element to hold the risk card
    riskCard.className = 'riskCard'; // Add a class to the risk card which lines up with the html and css

    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p><strong>Description:</strong> ${riskDescription}</p>
        <p><strong>Risk Level:</strong> ${riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}</p>
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
const removeRiskButton = riskCard.querySelector('.removeButton'); // Select the remove button from the risk card
removeRiskButton.createElement('button'); // Create a new button element
removeRiskButton.addEventListener('click', () => { // Add an event listener to the remove button
    riskCard.remove(); // Remove the risk card when the button is clicked
});

// Task 4
function highlightRiskLevel() { // Function to highlight the risk level
    const riskCards = document.querySelectorAll('.riskCard'); // Select all risk cards
    riskCards.forEach((card) => { // Loop through each risk card
        const paragraphs = card.querySelectorAll('p'); // Get all <p> elements in the card
        paragraphs.forEach((p) => { // Loop through each <p> element
            if (p.textContent.includes('Risk Level:')) { // Check if the <p> contains "Risk Level:" Searches by each <p> element and pulls the one containg that text.
                const riskLevel = p.textContent.split(':')[1].trim(); // Extract the risk level value in that <p> element by splitting the text and trimming the whitespace

                // Apply background color based on the risk level
                if (riskLevel === 'High') {
                    card.style.backgroundColor = 'red';
                } else if (riskLevel === 'Medium') {
                    card.style.backgroundColor = 'orange';
                } else if (riskLevel === 'Low') {
                    card.style.backgroundColor = 'green';
                }else if (riskLevel === 'None') {
                    card.style.backgroundColor = 'lightgrey';
                } else {
                    console.warn('Unknown risk level:', riskLevel); // Debugging for unknown risk levels
                }
            }
        });
    });
}

function removeHighlightRiskLevel() {
    const riskCards = document.querySelectorAll('.riskCard'); // Select all risk cards
    riskCards.forEach((card) => {
        card.style.backgroundColor = 'lightgrey'; // Remove background color
    });
}
