// Define global arrays
const fullyCompletedSurveys = [];
const partiallyCompletedSurveys = [];

// Get form element
const form = document.getElementById("hotelSurveyForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {};

    // Summarize data
    for (let el of form.elements) { // Use form.elements
        if (el.name) {
            if (el.type === "checkbox" || el.type === "radio") {
                if (el.checked) {
                    formData[el.name] = el.value;
                }
            } else {
                formData[el.name] = el.value;
            }
        }
    }

    function isSurveyFullyCompleted(formData) {
        return true;
    }

    // Save info based on completion
    if (isSurveyFullyCompleted(formData)) { // Ensure this function is defined
        fullyCompletedSurveys.push(formData);
    } else {
        partiallyCompletedSurveys.push(formData);
    }

    alert("Благодарим за попълването на формата!");
    form.reset();
});

// Statistics
const viewStatsBtn = document.getElementById("viewStats");
viewStatsBtn.addEventListener("click", () => {
    const totalSurveys = fullyCompletedSurveys.length + partiallyCompletedSurveys.length;
    const statsMessage =
        "Статистика: \n\n" +
        "Общ брой анкети: " + totalSurveys + "\n" +
        "Цялостно попълнени: " + fullyCompletedSurveys.length + "\n" +
        "Частично попълнени: " + partiallyCompletedSurveys.length;
    alert(statsMessage);
});
// scrolling
document.addEventListener("touchmove", function (e) {
    
}, { passive: false });