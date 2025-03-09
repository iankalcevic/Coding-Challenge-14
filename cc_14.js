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
