/* Slider color changer for sliders with percentages */
class SliderColorController {
    constructor(sliderId, max_1, min_2, max_2, min_3) {
        this.slider = document.getElementById(sliderId);
        this.maxValue = this.slider.max;

        this.max_1 = max_1;
        this.min_2 = min_2;
        this.max_2 = max_2;
        this.min_3 = min_3;
        
        this.slider.addEventListener('input', () => {
            this.updateSliderColor();
        });
    }

    // Method to update slider color based on its value
    updateSliderColor() {
        const currentValue = this.slider.value;

        // Add or remove the 'slider-green' class based on the value
        if (currentValue <= this.maxValue * this.max_1) {
            this.slider.classList.add('slider-green');
        } else {
            this.slider.classList.remove('slider-green');
        }

        // Add or remove the 'slider-yellow' class based on the value
        if (currentValue >= this.maxValue * this.min_2 && currentValue <= this.maxValue * this.max_2) {
            this.slider.classList.add('slider-yellow');
        } else {
            this.slider.classList.remove('slider-yellow');
        }

        // Add or remove the 'slider-red' class based on the value
        if (currentValue >= this.maxValue * this.min_3) {
            this.slider.classList.add('slider-red');
        } else {
            this.slider.classList.remove('slider-red');
        }
    }
}

/* Value display */
class ValueDisplayPercentage {
    constructor(sliderId, varId) {
        // Select the slider and <var> elements by their IDs
        this.slider = document.getElementById(sliderId);
        this.varElement = document.querySelector(`#${varId}`);

        this.slider.addEventListener('input', () => {
            this.updateContent();
        });
    }

    updateContent() {
        if (this.varElement) {
            const currentValue = this.slider.value;
            const maxValue = this.slider.max;
            const valPercentage = currentValue / maxValue * 100;
            const valRound = Math.round(valPercentage);
            this.varElement.textContent = valRound;

        } else {
            console.error('Var element not found');
        }
    }

}

class ValueDisplayNumbered {
    constructor(sliderId, varId) {
        // Select the slider and <var> elements by their IDs
        this.slider = document.getElementById(sliderId);
        this.varElement = document.querySelector(`#${varId}`);

        this.slider.addEventListener('input', () => {
            this.updateContent();
        });
    }

    updateContent() {
        if (this.varElement) {
            //const currentValue = this.slider.value;
            this.varElement.textContent = this.slider.value;

        } else {
            console.error('Var element not found');
        }
    }

}

/* Visibility display */
class InfoVisibility {
    constructor(slider_name, box_element) {
        this.slider = document.getElementById(slider_name);
        this.boxElement = document.querySelector(box_element);

        this.init();
    }

    init() {
        // Show info box when slider is moved
        this.slider.addEventListener('input', () => {
            this.boxElement.style.display = 'flex';
        });

        // Show info box when mouse is held
        this.slider.addEventListener('mousedown', () => {
            this.boxElement.style.display = 'flex';
        });

        // Hide info box when mouse is released
        this.slider.addEventListener('mouseup', () => {
            this.boxElement.style.display = 'none';
        });
    }
    
}

/* Get TER Rating for linear sliders*/
class GetSliderRating {
    constructor(sliderId, max_1, min_2, max_2, min_3) {
        this.slider = document.getElementById(sliderId);
        this.maxValue = this.slider.max || 100; // Fallback to 100 if max isn't set
        
        this.max_1 = max_1;
        this.min_2 = min_2;
        this.max_2 = max_2;
        this.min_3 = min_3;
        this.color = null;
        this.rating = null;

        // Call returnColor initially to set the color
        this.returnColor();
        this.returnValue();

        // Add an event listener to update the color and rating when the slider changes
        this.slider.addEventListener('input', () => {
        this.returnColor();
        this.returnValue();
        });
    }

    returnColor() {
        if (this.slider.value <= this.maxValue * this.max_1) {
        this.color = 'green';
        } else if (
        this.slider.value >= this.maxValue * this.min_2 &&
        this.slider.value <= this.maxValue * this.max_2
        ) {
        this.color = 'yellow';
        } else if (this.slider.value >= this.maxValue * this.min_3) {
        this.color = 'red';
        } else {
        this.color = null;
        }

        console.log(`Current color: ${this.color}`);
    }

    returnValue() {
        if (this.color === 'green') {
        this.rating = 0;
        } else if (this.color === 'yellow') {
        this.rating = 3;
        } else if (this.color === 'red') {
        this.rating = 5;
        } else {
        this.rating = null;
        }

        console.log(`Current rating: ${this.rating}`);
        return this.rating;
    }
}

/* Get TER Rating for species sliders*/
class GetSpeciesRating {
    constructor(sliderId, max_1, min_2, max_2, min_3) {
        this.slider = document.getElementById(sliderId);
        
        this.max_1 = max_1;
        this.min_2 = min_2;
        this.max_2 = max_2;
        this.min_3 = min_3;
        this.color = null;
        this.rating = null;

        // Call returnColor initially to set the color
        this.returnColor();
        this.returnValue();

        // Add an event listener to update the color and rating when the slider changes
        this.slider.addEventListener('input', () => {
        this.returnColor();
        this.returnValue();
        });
    }

    returnColor() {
        if (this.slider.value <= this.max_1) {
        this.color = 'red';
        } else if (
        this.slider.value >= this.min_2 &&
        this.slider.value <= this.max_2
        ) {
        this.color = 'yellow';
        } else if (this.slider.value >= this.min_3) {
        this.color = 'green';
        } else {
        this.color = null;
        }

        console.log(`Current color: ${this.color}`);
    }

    returnValue() {
        if (this.color === 'green') {
        this.rating = 0;
        } else if (this.color === 'yellow') {
        this.rating = 3;
        } else if (this.color === 'red') {
        this.rating = 5;
        } else {
        this.rating = null;
        }

        console.log(`Current rating: ${this.rating}`);
        return this.rating;
    }
}

/* Get TER Rating for EPT index slider */
class GetEPTRating {
    constructor(sliderId, max_1, max_2) {
        this.slider = document.getElementById(sliderId);
        this.maxValue = this.slider.max || 100; // Fallback to 100 if max isn't set
        
        this.max_1 = max_1;
        this.max_2 = max_2;
        this.color = null;
        this.rating = null;

        // Call returnColor initially to set the color
        this.returnColor();
        this.returnValue();

        // Add an event listener to update the color and rating when the slider changes
        this.slider.addEventListener('input', () => {
        this.returnColor();
        this.returnValue();
        });
    }

    returnColor() {
        if (this.slider.value <= this.maxValue * this.max_1) {
        this.color = 'red';
        } else if (
        this.slider.value <= this.maxValue * this.max_2 &&
        this.slider.value > this.maxValue * this.max_1
        ) {
        this.color = 'yellow';
        } else if (this.slider.value > this.maxValue * this.max_2) {
        this.color = 'green';
        } else {
        this.color = null;
        }

        console.log(`Current color: ${this.color}`);
    }

    returnValue() {
        if (this.color === 'green') {
        this.rating = 0;
        } else if (this.color === 'yellow') {
        this.rating = 3;
        } else if (this.color === 'red') {
        this.rating = 5;
        } else {
        this.rating = null;
        }

        console.log(`Current rating: ${this.rating}`);
        return this.rating;
    }
}

/* Get TER Rating for flies slider */
class GetFliesRating {
    constructor(sliderId, max_1, max_2, max_3, max_4) {
        this.slider = document.getElementById(sliderId);
        this.maxValue = this.slider.max || 100;
        
        this.max_1 = max_1;
        this.max_2 = max_2;
        this.max_3 = max_3;
        this.max_4 = max_4;
        this.color = null;
        this.rating = null;

        // Call returnColor initially to set the color
        this.returnColor();
        this.returnValue();

        // Add an event listener to update the color and rating when the slider changes
        this.slider.addEventListener('input', () => {
        this.returnColor();
        this.returnValue();
        });
    }

    returnColor() {
        if (this.slider.value <= this.maxValue * this.max_1) {
        this.color = 'red';
        } else if (
        this.slider.value <= this.maxValue * this.max_2 &&
        this.slider.value > this.maxValue * this.max_1
        ) {
        this.color = 'yellow';
        } else if (
        this.slider.value <= this.maxValue * this.max_3 &&
        this.slider.value > this.maxValue * this.max_2
        ) {
        this.color = 'green';
        } else if (
        this.slider.value <= this.maxValue * this.max_4 &&
        this.slider.value > this.maxValue * this.max_3
        ) {
        this.color = 'yellow';
        } else if (
        this.slider.value > this.maxValue * this.max_4
        ) {
        this.color = 'red';
        } else {
            this.color = null;
        }

        console.log(`Current color: ${this.color}`);
    }

    returnValue() {
        if (this.color === 'green') {
        this.rating = 0;
        } else if (this.color === 'yellow') {
        this.rating = 3;
        } else if (this.color === 'red') {
        this.rating = 5;
        } else {
        this.rating = null;
        }

        console.log(`Current rating: ${this.rating}`);
        return this.rating;
    }
}

/* Get TER Rating for insects slider */
class GetInsectsRating {
    constructor(sliderId, max_1, max_2, max_3, max_4) {
        this.slider = document.getElementById(sliderId);
        this.maxValue = this.slider.max || 100;
        
        this.max_1 = max_1;
        this.max_2 = max_2;
        this.max_3 = max_3;
        this.max_4 = max_4;
        this.color = null;
        this.rating = null;

        // Call returnColor initially to set the color
        this.returnColor();
        this.returnValue();

        // Add an event listener to update the color and rating when the slider changes
        this.slider.addEventListener('input', () => {
        this.returnColor();
        this.returnValue();
        });
    }

    returnColor() {
        if (this.slider.value <= this.maxValue * this.max_1) {
        this.color = 'red';
        } else if (
        this.slider.value <= this.maxValue * this.max_2 &&
        this.slider.value > this.maxValue * this.max_1
        ) {
        this.color = 'yellow';
        } else if (
        this.slider.value <= this.maxValue * this.max_3 &&
        this.slider.value > this.maxValue * this.max_2
        ) {
        this.color = 'green';
        } else if (
        this.slider.value <= this.maxValue * this.max_4 &&
        this.slider.value > this.maxValue * this.max_3
        ) {
        this.color = 'yellow';
        } else if (
        this.slider.value > this.maxValue * this.max_4
        ) {
        this.color = 'red';
        } else {
            this.color = null;
        }

        console.log(`Current color: ${this.color}`);
    }

    returnValue() {
        if (this.color === 'green') {
        this.rating = 0;
        } else if (this.color === 'yellow') {
        this.rating = 3;
        } else if (this.color === 'red') {
        this.rating = 5;
        } else {
        this.rating = null;
        }

        console.log(`Current rating: ${this.rating}`);
        return this.rating;
    }
}

/* Get TER Rating for HBI slider */
class GetHBIRating {
    constructor(sliderId, max_1, max_2) {
        this.slider = document.getElementById(sliderId);
        
        this.max_1 = max_1;
        this.max_2 = max_2;
        this.color = null;
        this.rating = null;

        // Call returnColor initially to set the color
        this.returnColor();
        this.returnValue();

        // Add an event listener to update the color and rating when the slider changes
        this.slider.addEventListener('input', () => {
        this.returnColor();
        this.returnValue();
        });
    }

    returnColor() {
        if (this.slider.value <= this.max_1) {
        this.color = 'green';
        } else if (
        this.slider.value <= this.max_2 &&
        this.slider.value > this.max_1
        ) {
        this.color = 'yellow';
        } else if (this.slider.value > this.max_2) {
        this.color = 'red';
        } else {
        this.color = null;
        }

        console.log(`Current color: ${this.color}`);
    }

    returnValue() {
        if (this.color === 'green') {
        this.rating = 0;
        } else if (this.color === 'yellow') {
        this.rating = 3;
        } else if (this.color === 'red') {
        this.rating = 5;
        } else {
        this.rating = null;
        }

        console.log(`Current rating: ${this.rating}`);
        return this.rating;
    }
}


/*
document.getElementById('slider_worms').addEventListener('input', function () {
    const slider = this;
    const maxValue = slider.max;
    const currentValue = slider.value;

    if (currentValue <= maxValue * 0.10) {
        slider.classList.add('slider-green');
    } else {
        slider.classList.remove('slider-green');
    }

    if ((currentValue >= maxValue * 0.11) && (currentValue <= maxValue * 0.30)) {
        slider.classList.add('slider-yellow');
    } else {
        slider.classList.remove('slider-yellow');
    }

    if (currentValue >= maxValue * 0.31) {
        slider.classList.add('slider-red');
    } else {
        slider.classList.remove('slider-red');
    }
    
});
*/

/* Slider Color Display off of Slider Value */
// WORMS
new SliderColorController('slider_worms', 0.10, 0.11, 0.30, 0.31);

// MIDGES
new SliderColorController('slider_midges', 0.10, 0.11, 0.40, 0.41);

// SOWBUGS
new SliderColorController('slider_sowbugs', 0.00, 0.01, 0.05, 0.06);

// SNAILS
new SliderColorController('slider_snails', 0.00, 0.01, 0.10, 0.11);

// SPECIES
document.getElementById('slider_species').addEventListener('input', function () {
    const slider = this;
    const currentValue = slider.value;

    if (currentValue <= 10) {
        slider.classList.add('slider-red');
    } else {
        slider.classList.remove('slider-red');
    }

    if (currentValue == 11) {
        slider.classList.add('slider-yellow');
    } else {
        slider.classList.remove('slider-yellow');
    }

    if (currentValue >= 12) {
        slider.classList.add('slider-green');
    } else {
        slider.classList.remove('slider-green');
    }
    
});

// DOMINANT SPECIES
new SliderColorController('slider_d_species', 0.40, 0.41, 0.45, 0.46);


// EPT INDEX SPECIES
document.getElementById('slider_ept').addEventListener('input', function () {
    const slider = this;
    const maxValue = slider.max;
    const currentValue = slider.value;

    if (currentValue <= maxValue * 0.05) {
        slider.classList.add('slider-red');
    } else {
        slider.classList.remove('slider-red');
    }

    if ((currentValue >= maxValue * 0.06) && (currentValue <= maxValue * 0.10)) {
        slider.classList.add('slider-yellow');
    } else {
        slider.classList.remove('slider-yellow');
    }

    if (currentValue >= maxValue * 0.11) {
        slider.classList.add('slider-green');
    } else {
        slider.classList.remove('slider-green');
    }
    
});

// FLIES (NON-LINEAR)
document.getElementById('slider_flies').addEventListener('input', function () {
    const slider = this;
    const maxValue = slider.max;
    const currentValue = slider.value;

    /* Red */
    if (currentValue <= maxValue * 0.15) {
        slider.classList.remove('slider-green');
        slider.classList.remove('slider-yellow');
        slider.classList.add('slider-red');
    } 
    
    /* Yellow */
    else if ((currentValue >= maxValue * 0.16) && (currentValue <= maxValue * 0.20)) {
        slider.classList.remove('slider-green');
        slider.classList.add('slider-yellow');
        slider.classList.remove('slider-red');
    }

    /* Green */
    else if ((currentValue >= maxValue * 0.21) && (currentValue <= maxValue * 0.45)) {
        slider.classList.add('slider-green');
        slider.classList.remove('slider-yellow');
        slider.classList.remove('slider-red');
    }
    
    /* Yellow */
    else if ((currentValue >= maxValue * 0.46) && (currentValue <= maxValue * 0.50)) {
        slider.classList.remove('slider-green');
        slider.classList.add('slider-yellow');
        slider.classList.remove('slider-red');
    }

    /* Red */
    else if (currentValue >= maxValue * 0.51) {
        slider.classList.remove('slider-green');
        slider.classList.remove('slider-yellow');
        slider.classList.add('slider-red');
    }
    
    else {
        slider.classList.remove('slider-green');
        slider.classList.remove('slider-yellow');
        slider.classList.remove('slider-red');
    }

});

// INSECTS
document.getElementById('slider_insects').addEventListener('input', function () {
    const slider = this;
    const maxValue = slider.max;
    const currentValue = slider.value;

    /* Red */
    if (currentValue <= maxValue * 0.40) {
        slider.classList.remove('slider-green');
        slider.classList.remove('slider-yellow');
        slider.classList.add('slider-red');
    } 
    
    /* Yellow */
    else if ((currentValue >= maxValue * 0.41) && (currentValue <= maxValue * 0.50)) {
        slider.classList.remove('slider-green');
        slider.classList.add('slider-yellow');
        slider.classList.remove('slider-red');
    }

    /* Green */
    else if ((currentValue >= maxValue * 0.51) && (currentValue <= maxValue * 0.80)) {
        slider.classList.remove('slider-red');
        slider.classList.remove('slider-yellow');
        slider.classList.add('slider-green');
    }
    
    /* Yellow */
    else if ((currentValue >= maxValue * 0.81) && (currentValue <= maxValue * 0.90)) {
        slider.classList.remove('slider-green');
        slider.classList.add('slider-yellow');
        slider.classList.remove('slider-red');
    }

    /* Red */
    else if (currentValue >= maxValue * 0.91) {
        slider.classList.remove('slider-green');
        slider.classList.remove('slider-yellow');
        slider.classList.add('slider-red');
    }
    
    else {
        slider.classList.remove('slider-green');
        slider.classList.remove('slider-yellow');
        slider.classList.remove('slider-red');
    }

});


// HBI INDEX (NUMBERED) 
document.getElementById('slider_hbi').addEventListener('input', function () {
    const slider = this;
    const currentValue = slider.value;

    if (currentValue <= 5) {
        slider.classList.add('slider-green');
    } else {
        slider.classList.remove('slider-green');
    }

    if (currentValue >= 6 && currentValue <= 7) {
        slider.classList.add('slider-yellow');
    } else {
        slider.classList.remove('slider-yellow');
    }

    if (currentValue == 8) {
        slider.classList.add('slider-red');
    } else {
        slider.classList.remove('slider-red');
    }
    
});


/* Value Display */
// Worms
new ValueDisplayPercentage('slider_worms', 'worms_value');

// Midges
new ValueDisplayPercentage('slider_midges', 'midges_value');

// Sowbugs
new ValueDisplayPercentage('slider_sowbugs', 'sowbugs_value');

// Snails
new ValueDisplayPercentage('slider_snails', 'snails_value');

// Species
new ValueDisplayNumbered('slider_species', 'species_value');

// Dominant Species
new ValueDisplayPercentage('slider_d_species', 'd_species_value');

// EPT Index
new ValueDisplayPercentage('slider_ept', 'ept_value');

// Flies
new ValueDisplayPercentage('slider_flies', 'flies_value');

// Insects
new ValueDisplayPercentage('slider_insects', 'insects_value');

// HBI Index
new ValueDisplayNumbered('slider_hbi', 'hbi_value');



/* Description Display */
// Worms
new InfoVisibility('slider_worms', '.worms_info');

// Midges
new InfoVisibility('slider_midges', '.midges_info');

// Sowbugs
new InfoVisibility('slider_sowbugs', '.sowbugs_info');

// Snails
new InfoVisibility('slider_snails', '.snails_info');

// Species
new InfoVisibility('slider_species', '.species_info');

// Dominant Species
new InfoVisibility('slider_d_species', '.d_species_info');

// EPT Index
new InfoVisibility('slider_ept', '.ept_info');

// Flies
new InfoVisibility('slider_flies', '.flies_info');

// Insects
new InfoVisibility('slider_insects', '.insects_info');

// HBI Index
new InfoVisibility('slider_hbi', '.hbi_info');

// TER Index
new InfoVisibility('slider_ter', '.ter_info');


/* TER Rating */
const sliders = document.querySelectorAll('input[type="range"]');
const resultDisplay = document.getElementById('ter_value');
const overlayRiver = document.querySelector('.overlay_river');

function setBackgroundColor(totalRating) {
    if (totalRating <= 19) {
        overlayRiver.style.display = 'none'; // None

    } else {
        let hue;

        // Set hue based on totalRating value
        if (totalRating >= 20 && totalRating <= 24) {
            hue = 80; // Yellow-Green

        } else if (totalRating >= 25 && totalRating <= 29){
            hue = 60; // Yellow

        } else if (totalRating >= 30 && totalRating <= 34) {
            hue = 30; // Orange

        } else if (totalRating >= 35 && totalRating <= 50) {
            hue = 0; // Red
        } else {
            hue = 180;
        }

        overlayRiver.style.display = 'flex';
        overlayRiver.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    }
    

    

}

/*                  Calculate and show TER rating                   */
let totalRating = 0;

function calculateTotalRating() {
    
    /* Get rating for linear sliders */
    const worms_rating = new GetSliderRating('slider_worms', 0.10, 0.11, 0.30, 0.31);
    const midges_rating = new GetSliderRating('slider_midges', 0.10, 0.11, 0.40, 0.41);
    const sowbugs_rating = new GetSliderRating('slider_sowbugs', 0.00, 0.01, 0.05, 0.06);
    const snails_rating = new GetSliderRating('slider_snails', 0.00, 0.01, 0.10, 0.11);
    const d_species_rating = new GetSliderRating('slider_d_species', 0.40, 0.41, 0.45, 0.46);

    /* Get rating for species slider */
    const species_rating = new GetSpeciesRating('slider_species', 10, 11, 11, 12);

    /* Get ratings for ept index */
    const ept_rating = new GetEPTRating('slider_ept', 0.05, 0.10);

    /* Get ratings for flies slider */
    const flies_rating = new GetFliesRating('slider_flies', 0.15, 0.20, 0.45, 0.50);

    /* Get ratings for insects slider */
    const insects_rating = new GetInsectsRating('slider_insects', 0.40, 0.50, 0.80, 0.90);

    /* Get ratings for HBI index */
    const hbi_rating = new GetHBIRating('slider_hbi', 5, 7);


    totalRating = worms_rating.rating + midges_rating.rating + sowbugs_rating.rating + snails_rating.rating + d_species_rating.rating + species_rating.rating + ept_rating.rating +
    flies_rating.rating + insects_rating.rating + hbi_rating.rating;
    
    resultDisplay.textContent = `${totalRating}`;

    // Set background color based on totalRating
    setBackgroundColor(totalRating);

}

sliders.forEach(slider => {
    slider.addEventListener('input', calculateTotalRating);
});

calculateTotalRating();


/*                  Adjusts TER slider based off TER value                  */
function updateTSlider() {
    // Declare
    const slider = document.getElementById('slider_ter');
    const sliderMax = parseInt(slider.max); // Maximum value of the slider
    const currentValue = slider.value;

    // Update the slider value
    slider.value = totalRating;
    
    // Change color
    if (currentValue <= 19) {
        slider.classList.add('slider-green');
    } else {
        slider.classList.remove('slider-green');
    }

    if (currentValue >= 20 && currentValue <= 24) {
        slider.classList.add('slider-yellow-green');
    } else {
        slider.classList.remove('slider-yellow-green');
    }

    if (currentValue >= 25 && currentValue <= 29) {
        slider.classList.add('slider-yellow');
    } else {
        slider.classList.remove('slider-yellow');
    }

    if (currentValue >= 30 && currentValue <= 34) {
        slider.classList.add('slider-orange');
    } else {
        slider.classList.remove('slider-orange');
    }

    if (currentValue >= 35 && currentValue <= 50) {
        slider.classList.add('slider-red');
    } else {
        slider.classList.remove('slider-red');
    }
}


/*                       Adjusts all other sliders to never exceed 100%                  */

/* oninput="adjustSliders()" */
function adjustSliders() {
    const sliders = {
        worms: document.getElementById('slider_worms'),
        midges: document.getElementById('slider_midges'),
        sowbugs: document.getElementById('slider_sowbugs'),
        snails: document.getElementById('slider_snails'),
        d_species: document.getElementById('slider_d_species'),
        ept: document.getElementById('slider_ept'),
        flies: document.getElementById('slider_flies'),
        insects: document.getElementById('slider_insects')
    };

    const values = {
        worms: document.getElementById('worms_value'),
        midges: document.getElementById('midges_value'),
        sowbugs: document.getElementById('sowbugs_value'),
        snails: document.getElementById('snails_value'),
        d_species: document.getElementById('d_species_value'),
        ept: document.getElementById('ept_value'),
        flies: document.getElementById('flies_value'),
        insects: document.getElementById('insects_value')
    };

    // Get total of WORMS, SOWBUGS, SNAILS, INSECTS
    const total = sliders.worms.valueAsNumber + sliders.sowbugs.valueAsNumber + sliders.snails.valueAsNumber + sliders.insects.valueAsNumber;

    // Check if the total of these 4 sliders exceeds 100
    const excess = total - 100;

    if (excess > 0) {
        // If total > 100, distribute the excess proportionally across WORMS, SOWBUGS, SNAILS, INSECTS
        let remainingSliders = 4; // Only these 4 sliders need adjustment

        // Adjust only the specific sliders
        ['worms', 'sowbugs', 'snails', 'insects'].forEach(sliderKey => {
            if (sliders[sliderKey] !== document.activeElement) {
                let adjustment = Math.round(excess / remainingSliders);  // Distribute excess proportionally
                let newValue = sliders[sliderKey].valueAsNumber - adjustment;
                newValue = Math.max(0, Math.min(newValue, 100)); // Ensure the value stays within bounds
                sliders[sliderKey].value = newValue;
                values[sliderKey].textContent = `${newValue}%`;
                remainingSliders--;
            }
        });
    }

    // Ensure INSECTS >= FLIES, and FLIES >= MIDGES
    if (sliders.insects.valueAsNumber < sliders.flies.valueAsNumber) {
        sliders.flies.value = sliders.insects.valueAsNumber;
        values.flies.textContent = `${sliders.flies.value}`;
    }

    if (sliders.flies.valueAsNumber < sliders.midges.valueAsNumber) {
        sliders.midges.value = sliders.flies.valueAsNumber;
        values.midges.textContent = `${sliders.midges.value}`;
    }

    // Prevent MAYFLIES (EPT) from exceeding INSECTS
    if (sliders.ept.valueAsNumber > sliders.insects.valueAsNumber) {
        sliders.ept.value = sliders.insects.valueAsNumber;
        values.ept.textContent = `${sliders.ept.value}`;
    }

    // Update displayed values for all sliders
    Object.keys(sliders).forEach(sliderKey => {
        values[sliderKey].textContent = `${sliders[sliderKey].value}`;
    });
}

// Initialize the sliders on page load
//document.addEventListener("DOMContentLoaded", adjustSliders);
        
    
    

/*                  Instructions for the user                   */
function showGuide() {
    const element = document.getElementById('user_desc'); 

    if (element) {
        element.style.display = 'flex'; // Make info visible
    } else {
        console.error('Element not found!');
    }

}

function hideGuide() {
    const element = document.getElementById('user_desc'); 

    if (element) {
        element.style.display = 'none'; // Make info hidden
    } else {
        console.error('Element not found!');
    }


}

/*                  Show additional details for page title                  */
/* For Gabekanaang-ziibi */
const descSec1 = document.querySelector('.desc_sec_1');
const titleDetails1 = document.querySelector('.title_details_1');

// Add event listeners to handle hover
descSec1.addEventListener('mouseenter', () => {
    titleDetails1.style.display = 'flex'; // Show the element
});

descSec1.addEventListener('mouseleave', () => {
    titleDetails1.style.display = 'none'; // Hide the element
});

/* For Niwa’ah Onega’gaih’ih */
const descSec2 = document.querySelector('.desc_sec_2');
const titleDetails2 = document.querySelector('.title_details_2');

// Add event listeners to handle hover
descSec2.addEventListener('mouseenter', () => {
    titleDetails2.style.display = 'flex'; // Show the element
});

descSec2.addEventListener('mouseleave', () => {
    titleDetails2.style.display = 'none'; // Hide the element
});




/*                  Alternating Data                    */

/* Pull out menu */
const pullOutButton = document.getElementById('alt-pull-out');
const pullOutDiv = document.getElementById('pull-out');

// Toggle the visibility of the pull-out div
pullOutButton.addEventListener('click', () => {
    pullOutDiv.classList.toggle('show');
    
    // Change the toggle button arrow direction
    pullOutButton.textContent = pullOutDiv.classList.contains('show') ? '⟶' : '⟵';
});

/* Set pre-existing data */
function updateSliders(values) {
    for (const [sliderId, value] of Object.entries(values)) {
        const slider = document.getElementById(sliderId);
        if (slider && slider.type === 'range') {
            slider.value = value;
        } else {
            console.warn(`No slider found with ID "${sliderId}" or it's not a range input.`);
        }
    }
}

// 2023
document.getElementById('set-preset-2023').addEventListener('click', () => {
    const sliderValues = {
        slider_worms: 6,
        slider_snails: 1,
        slider_sowbugs: 0,
        slider_midges: 20,
        slider_flies: 20,
        slider_ept: 63,
        slider_insects: 90,
        slider_d_species: 37,
        slider_species: 12,
        slider_hbi: 5.29
    };
    
    updateSliders(sliderValues);
});

// 2024
document.getElementById('set-preset-2024').addEventListener('click', () => {
    const sliderValues = {
        slider_worms: 15,
        slider_snails: 0,
        slider_sowbugs: 1,
        slider_midges: 34,
        slider_flies: 34,
        slider_ept: 30,
        slider_insects: 73,
        slider_d_species: 34,
        slider_species: 10,
        slider_hbi: 6.18
    };
        
    updateSliders(sliderValues);
});