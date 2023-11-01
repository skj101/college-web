document.getElementById('yearForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const year = document.getElementById('yearInput').value;
    const calendarContainer = document.getElementById('calendarContainer');
    calendarContainer.innerHTML = generateCalendar(year);
});

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