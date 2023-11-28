// If radio button is checked do what?
// change the classes of the svg blue and fill to hidden;
// change the display of the form. 
// Get radio button 
const radioButtons = document.querySelectorAll('.radio-input');

radioButtons.forEach((button) => {
    button.addEventListener('change', (event) => {
        // Display the clicked radio
        const buttonVal = button.value;
        const formElementsToDisplay = document.getElementById(`${buttonVal}Container`);
        formElementsToDisplay.classList.toggle('active');
        // hide the radio that was unchecked
        if (buttonVal === 'metric') {
            const formElementsToHide = document.getElementById('imperialContainer');
            formElementsToHide.classList.toggle('active');
        } else {
            const formElementsToHide = document.getElementById('metricContainer');
            formElementsToHide.classList.toggle('active');
        }
        
    })
    
})