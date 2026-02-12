let container = document.querySelector(".container");
let task = document.querySelector(".task");
let days = document.querySelector(".day-card");
let input = document.querySelector(".input-box");

function showDays() {
    let day = input.value.trim().toLowerCase();
    if (day === "sunday")    
    {
        container.style.display = "none";
        days.style.display = "grid";

        days.innerHTML = `
<h2 class="day-title" style="margin-left:6.5vw;">Sunday</h2>
<table>
<tr><th>Timeline</th><th>Task</th></tr>
<tr><td>8:00 AM</td><td>Wake up & relax</td></tr>
<tr><td>9:30 AM</td><td>Exercise / sports</td></tr>
<tr><td>11:00 AM</td><td>Personal projects</td></tr>
<tr><td>1:00 PM</td><td>Lunch with family</td></tr>
<tr><td>4:00 PM</td><td>Entertainment / hobbies</td></tr>
<tr><td>8:00 PM</td><td>Plan upcoming week</td></tr>
</table>
<button class="return" onclick="go_back()">Go back</button>

`;
    } 
    else if (day === "monday")
    {
        container.style.display = "none";
        days.style.display = "grid";

        days.innerHTML = `
<h2 class="day-title" style="margin-left:5.5vw;">Monday</h2>
<table>
<tr><th>Timeline</th><th>Task</th></tr>
<tr><td>6:30 AM</td><td>Morning routine</td></tr>
<tr><td>8:00 AM</td><td>Attend classes</td></tr>
<tr><td>11:00 AM</td><td>Take notes & revise</td></tr>
<tr><td>1:30 PM</td><td>Lunch break</td></tr>
<tr><td>3:00 PM</td><td>Assignments</td></tr>
<tr><td>8:30 PM</td><td>Light revision</td></tr>
</table>
<button class="return" onclick="go_back()">Go back</button>
`;
    } 
    else if (day === "tuesday")
    {
        container.style.display = "none";
        days.style.display = "grid";

        days.innerHTML = `
<h2 class="day-title">Tuesday</h2>
<table>
<tr><th>Timeline</th><th>Task</th></tr>
<tr><td>6:00 AM</td><td>Workout</td></tr>
<tr><td>9:00 AM</td><td>College lectures</td></tr>
<tr><td>12:00 PM</td><td>Group study</td></tr>
<tr><td>2:00 PM</td><td>Lab work</td></tr>
<tr><td>5:00 PM</td><td>Coding practice</td></tr>
<tr><td>9:30 PM</td><td>Review the day</td></tr>
</table>
<button class="return" onclick="go_back()">Go back</button>
`;
    }
    else if (day === "wednesday") 
    {
        container.style.display = "none";
        days.style.display = "grid";

        days.innerHTML = `
<h2 class="day-title">Wednesday</h2>
<table>
<tr><th>Timeline</th><th>Task</th></tr>
<tr><td>7:00 AM</td><td>Morning walk</td></tr>
<tr><td>9:00 AM</td><td>Classes</td></tr>
<tr><td>12:30 PM</td><td>Lunch</td></tr>
<tr><td>2:00 PM</td><td>Project development</td></tr>
<tr><td>6:00 PM</td><td>Skill learning</td></tr>
<tr><td>10:00 PM</td><td>Prepare for tomorrow</td></tr>
</table>
<button class="return" onclick="go_back()">Go back</button>
`;
    }
     else if (day === "thursday") 
    {
        container.style.display = "none";
        days.style.display = "grid";

        days.innerHTML = `
<h2 class="day-title" style="margin-left:4vw;">Thursday</h2>
<table>
<tr><th>Timeline</th><th>Task</th></tr>
<tr><td>6:30 AM</td><td>Meditation</td></tr>
<tr><td>8:30 AM</td><td>Lectures</td></tr>
<tr><td>11:30 AM</td><td>Research topics</td></tr>
<tr><td>1:00 PM</td><td>Lunch</td></tr>
<tr><td>4:00 PM</td><td>Hackathon prep</td></tr>
<tr><td>9:00 PM</td><td>Practice coding</td></tr>
</table>
<button class="return" onclick="go_back()">Go back</button>
`;
    }
     else if (day === "friday")
    {
        container.style.display = "none";
        days.style.display = "grid";

        days.innerHTML = `
<h2 class="day-title" style="margin-left:7vw;">Friday</h2>
<table>
<tr><th>Timeline</th><th>Task</th></tr>
<tr><td>7:00 AM</td><td>Exercise</td></tr>
<tr><td>9:00 AM</td><td>College</td></tr>
<tr><td>12:00 PM</td><td>Revision</td></tr>
<tr><td>2:30 PM</td><td>Complete assignments</td></tr>
<tr><td>6:30 PM</td><td>Social time</td></tr>
<tr><td>10:30 PM</td><td>Relax & sleep</td></tr>
</table>
<button class="return" onclick="go_back()">Go back</button>
`;
    }
    else if (day === "saturday")
    {
        container.style.display = "none";
        days.style.display = "grid";

        days.innerHTML = `
<h2 class="day-title">Saturday</h2>
<table>
<tr><th>Timeline</th><th>Task</th></tr>
<tr><td>8:00 AM</td><td>Wake up slowly</td></tr>
<tr><td>10:00 AM</td><td>Deep work session</td></tr>
<tr><td>1:00 PM</td><td>Lunch</td></tr>
<tr><td>3:00 PM</td><td>Build projects</td></tr>
<tr><td>6:00 PM</td><td>Outdoor activity</td></tr>
<tr><td>9:00 PM</td><td>Movie / relaxation</td></tr>
</table>
<button class="return" onclick="go_back()">Go back</button>
`;
    }
}

var returnBtn = document.querySelector(".return");
function go_back() {
    days.style.display = "none";
    container.style.display = "block";
}