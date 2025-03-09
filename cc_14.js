// Task 2 - Adding Support Tickets Dynamically

const ticketContainer = document.getElementById("ticketContainer");

function createSupportTicket(customerName, issueDescription, priority) { //Build support ticket
    const ticket = document.createElement("div");
    ticket.setAttribute("class", 'ticket ${priority === "High" ? "high-priority" : ""}'); //Set class and priority attributes

    const heading = document.createElement("h3");
    heading.textContent = customerName; //Customer name heading

    const paragraph = document.createElement("p");
    paragraph.textContent = customerName; //Issue description paragraph

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = 'Priority: ${priority}'; //Indicate priority level

    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve"; //Create resolve button

    //Appending tickets to ticketcontainer
    ticket.appendChild(heading);
    ticket.appendChild(paragraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    ticketContainer.appendChild(ticket);

};

//Add sample support tickets to system
createSupportTicket("Demar Derozan", "Payment declined", "Low");
createSupportTicket("Jalen Smith", "Account hacked", "High");
createSupportTicket("Scottie Pippen", "Password reset", "Medium");

// Task 3 - Converting NodeLists to Array for Bulk Updates

const highPriorityTickets = document.querySelectorAll(".ticket.high-priority");
const highPriorityTicketsArray = Array.from(highPriorityTickets); //Create array for high priority tickets

highPriorityTicketsArray.forEach(ticket => {
    ticket.style.backgroundColor = "\e[42m" //Set green background color
});

// Task 4 - Implementing Ticket Resolution with Event Bubbling

ticketContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const ticket = event.target.closest(".ticket");
        ticketContainer.removeChild(ticket); //Remove parent ticket
    } else {
        console.log("Support ticket clicked"); //Log message when ticket is clicked
    };
});

// Task 5 - Inline Editing of Support Tickets

ticket.Container.addEventListener("dblclick", (event) => {
    const ticket = event.target.closest(".ticket");
    if(!ticket) return; //Swap static content with double click

    //Pre populate input fields
    const heading = ticket.querySelector("h3");
    const paragraph = ticket.querySelector("p");
    const priorityLabel = ticket.querySelector("label");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = heading.textContent; //Replacing static text with input fields

    const issueInput = document.createElement("input");
    issueInput.type = "text";
    issueInput.value = paragraph.textContent;

    const priorityInput = document.createElement("select");
    priorityInput.innerHTML = '
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
    ';
    priorityInput.value = priorityLabel.textContent.reaplce("Priority: ", "");

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    //Allow user updates
    ticket.innerHTML = "";
    ticket.appendChild(nameInput);
    ticket.appendChild(issueInput);
    ticket.appendChild(priorityInput);
    ticket.appendChild(saveButton);

    //Save button that updates new values
    saveButton.addEventListener("click", () => {
        heading.textContent = nameInput.value;
        paragraph.textContent = issueInput.value;
        priorityLabel.textContent = 'Priority; ${priorityInput.value}';

        ticket.innerHTML = "";
        ticket.appendChild(heading);
        ticket.appendChild(paragraph);
        ticket.appendChild(priorityLabel);
        ticket.appendCHild(document.createElement ("button").textContent = "Resolve"); //Resolved button
        });
});
