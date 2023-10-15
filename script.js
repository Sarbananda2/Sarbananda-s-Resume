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

// JavaScript function to open a new tab and navigate to the ResumeLab login page
function workOnResume() {
    window.open('https://app.resumelab.com/login', '_blank');
}

// Function to show action buttons (Show Resume, Comment on Resume, and Back) based on the selected company
function selectCompany(company) {
    // Hide the company selection buttons
    document.getElementById('companyButtons').style.display = 'none';

    // Show the action buttons
    document.getElementById('actionButtons').style.display = 'block';

    // Set the appropriate actions for the selected company
    if (company === 'wipro') {
        document.getElementById('showResumeButton').onclick = function () {
            window.open('Resources/sarbananda-taw-desktop-support-technician-resume.pdf', '_blank');
        };
        document.getElementById('commentOnResumeButton').onclick = function () {
            window.open('https://app.resumelab.com/feedback/session/b9096418-302d-4939-a913-f5e124cd3673', '_blank');
        };
    } else if (company === 'helpshift') {
        document.getElementById('showResumeButton').onclick = function () {
            window.open('https://www.helpshift.com/resume', '_blank');
        };
        document.getElementById('commentOnResumeButton').onclick = function () {
            window.open('https://app.resumelab.com/feedback/session/3bebe174-e4e0-4e46-a514-a46494bccce3', '_blank');
        };
    }
}

// Call the function to display a personalized greeting with two parts
displayGreeting();
