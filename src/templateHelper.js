const getBasicHtml = (cards) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>My Team</title>
    </head>
    <body>
        <nav class="navbar navbar-light bg-danger d-flex align-items-center justify-content-center">
            <span class="navbar-brand mb-0 h1 text-light">My Team</span>
        </nav>
        <div class="container-fluid d-flex flex-wrap p-3 align-items-center justify-content-center">
            ${cards.join('')}      
        </div>
    </body>
    </html>
` 
}

function createNewCard (employee) {
return `
<div class="card m-3" style="width: 18rem;">
    <div class="card-body bg-primary text-light">
        <h5 class="card-title">${employee.getName()}</h5>
        <p class="card-text"> <i class="${employee.icon} fa-lg"></i> ${employee.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getId()}</li>
        <li class="list-group-item">Email: <a href="#"> ${employee.getEmail()}</a></li>
        <li class="list-group-item">${getEmployeeSpecificInfo(employee)}</li>
    </ul>
</div>`
}

function getEmployeeSpecificInfo (employee) {
    const role = employee.getRole();
    if (role === "Manager")
        return `Office Number: ${employee.getOfficeNumber()}`;
    
    if (role === "Engineer")
        return `GitHub: <a href="https://github.com/${employee.getGitHub()}"> ${employee.getGitHub()} </a>`;
    
    if (role === "Intern")
        return `School: ${employee.getSchool()}`;
    
}

const templateHelper = (employees) => {
    let cards = [];
    employees.forEach((employee) => {
        cards.push(createNewCard(employee));
    });

    return getBasicHtml(cards);
}

module.exports = templateHelper;