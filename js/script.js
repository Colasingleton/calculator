let subtracted = [];


// Helper function to calculate percentage and push subtracted value
function calculatePercentage(monthly, percentage) {
    let val = monthly * percentage;
    subtracted.push(val);
    return val.toFixed(2);
}

  // Rent 30%
function rent(monthly) {
    return calculatePercentage(monthly, 0.30);
}

// Car 12%
function car(monthly) {
    return calculatePercentage(monthly, 0.12);
}

// Food (on average 5-15%)
function food(monthly) {
    return calculatePercentage(monthly, 0.15);
}

// Essentials 10%
function essentials(monthly) {
    return calculatePercentage(monthly, 0.10);
}

  // Self care 5%
function selfCare(monthly) {
    return calculatePercentage(monthly, 0.05);
}

// Savings 10%
function saving(monthly) {
    return calculatePercentage(monthly, 0.10);
}

// Misc returns remaining monthly salary
function misc(monthly) {
let val = 0;
    for (let i = 0; i < subtracted.length; i++) {
    val += subtracted[i];
    }
    return (monthly - val).toFixed(2);
}


document.getElementById("calculate").addEventListener("click", function() {
    const rentInput = document.getElementById("monthly-input");

    const monthlyRent = parseFloat(rentInput.value);
    if (isNaN(monthlyRent)) {
    alert("Invalid input");
    } else {
        const rentResult = rent(monthlyRent);
        const carResult = car(monthlyRent);
        const foodResult = food(monthlyRent);
        const essentialResult = essentials(monthlyRent);
        const selfCareResult = selfCare(monthlyRent);
        const savingResult = saving(monthlyRent);
        const miscResult = misc(monthlyRent);
        

    // Update corresponding textboxes
    document.getElementById("result-1").value = "$" + rentResult;
    document.getElementById("result-2").value = "$" + carResult;
    document.getElementById("result-3").value = "$" + foodResult;
    document.getElementById("result-4").value = "$" + essentialResult;
    document.getElementById("result-5").value = "$" + selfCareResult;
    document.getElementById("result-7").value = "$" + savingResult;
    document.getElementById("result-6").value = "$" + miscResult;
    


    }
    });

