// JavaScript function to display a personalized greeting with two parts (Hey there and Good Morning/Afternoon/Evening)
function displayGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let timeOfDay;
    if (currentHour < 12) {
        timeOfDay = 'Morning';
    } else if (currentHour < 18) {
        timeOfDay = 'Afternoon';
    } else {
        timeOfDay = 'Evening';
    }

    const partA = 'Hey there, Traveler';
    const partB = `Good ${timeOfDay}`;
    const partAElement = document.getElementById('partA');
    const partBElement = document.getElementById('partB');
    partAElement.textContent = partA;
    partBElement.textContent = partB;
}

// JavaScript function to redirect to the final resume (PDF)
function showFinalResume() {
    window.open('Resources/resume.pdf', '_blank');
}

// JavaScript function to redirect to the comment page (External Link)
function commentOnResume() {
    window.open('https://app.resumelab.com/feedback/session/c1d6d21c-f2c5-4afd-b2b3-7d5638f4b120', '_blank');
}

// Call the function to display a personalized greeting with two parts
displayGreeting();
