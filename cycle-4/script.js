//Input to Paragraph
function displayInput(event) {
    event.preventDefault();
    var userInput = document.getElementById('userInput').value;
    document.getElementById('output').textContent = userInput;
}

//Sum Calculator
function calculateSum(event) {
    event.preventDefault();
    
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('output').textContent = "Please enter valid numbers.";
    } else {
        var sum = num1 + num2;
        document.getElementById('output').textContent = "Sum: " + sum;
    }
}

//Current Date and Time
function updateDateTime() {
    var dateTimeElement = document.getElementById('datetime');
    var now = new Date();
    var dateTimeString = now.toString();
    dateTimeElement.textContent = dateTimeString;
}
setInterval(updateDateTime, 1000); // Update every 1 second

//Positive/Negative Checker
function checkNumber(event) {
    event.preventDefault();
    
    var userNumber = parseFloat(document.getElementById('userNumber').value);

    if (isNaN(userNumber)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
    } else {
        var resultText = (userNumber > 0) ? "Positive" : (userNumber < 0) ? "Negative" : "Zero";
        document.getElementById('result').textContent = "The entered number is " + resultText + ".";
    }
}

//Random Text Color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Change only text colour using getRandomColor function
function changeTextColor() {
    var textElement = document.getElementById('text');
    textElement.style.color = getRandomColor();
}

//Change body && text colour using getRandomColor function
function changeColors() {
    var bodyElement = document.body;
    bodyElement.style.backgroundColor = getRandomColor();
    changeTextColor()
}


//open dialog box
function openDialog() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}

//close dialog box
function closeDialog() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

//generate calender based on the given year input
function generateCalendar(year) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let calendarHTML = `<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">`;
    for (let i = 0; i < 12; i++) {
        calendarHTML += `<div class="border rounded p-4">
            <h2 class="text-xl font-bold mb-2">${months[i]}</h2> <!-- Added month name here -->
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="text-left">Sun</th>
                        <th class="text-left">Mon</th>
                        <th class="text-left">Tue</th>
                        <th class="text-left">Wed</th>
                        <th class="text-left">Thu</th>
                        <th class="text-left">Fri</th>
                        <th class="text-left">Sat</th>
                    </tr>
                </thead>
                <tbody>`;
        const firstDay = new Date(year, i, 1);
        const lastDay = new Date(year, i + 1, 0);
        let currentDate = new Date(firstDay);
        while (currentDate.getDay() !== 0) {
            currentDate.setDate(currentDate.getDate() - 1);
        }
        while (currentDate <= lastDay) {
            calendarHTML += `<tr>`;

            for (let j = 0; j < 7; j++) {
                calendarHTML += `<td class="p-2 ${currentDate.getMonth() === i ? '' : 'text-gray-400'}">${currentDate.getDate()}</td>`;
                currentDate.setDate(currentDate.getDate() + 1);
            }
            calendarHTML += `</tr>`;
        }
        calendarHTML += `</tbody></table></div>`;
    }
    calendarHTML += `</div>`;
    return calendarHTML;
}

//calculate age
function calculateAge(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var dobString = document.getElementById('dob').value;

    var dob = new Date(dobString);
    var today = new Date();

    if (isNaN(dob)) {
        alert("Please enter a valid date of birth.");
        return;
    }

    var ageInMilliseconds = today - dob;
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInYears = ageInDays / 365;

    var ageYears = Math.floor(ageInYears);
    var ageDays = Math.floor(ageInDays % 365);

    var resultElement = document.getElementById('ageResult');
    resultElement.textContent = `Hello "${firstName}!" You are ${ageYears} years and ${ageDays} days old.`;

    closeDialog();
}

//generate random image URLS
function getRandomImageURL() {
    return `https://picsum.photos/300/200?random=${Math.random()}`;
}

//generate random Text
function getRandomText() {
    var textElement = document.getElementById('text');
    var randomText = ['Hello!', 'Greetings!', 'Nice to see you!', 'Welcome!', 'Howdy!'];
    var randomIndex = Math.floor(Math.random() * randomText.length);
    textElement.textContent = randomText[randomIndex];
}


var hoverTimeout;//timeout variable
var contentElement = document.getElementById('content');

//listen for mouse hover event with a second delay
contentElement.addEventListener('mouseover', function() {
    hoverTimeout = setTimeout(function() {
        var imageElement = document.getElementById('image');
        imageElement.src = getRandomImageURL();
        getRandomText();
    }, 1000);
});
//clear the timer after event
contentElement.addEventListener('mouseout', function() {
    clearTimeout(hoverTimeout);
});