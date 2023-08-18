const SalesRate = 5.00;

fetch('./Staff.json')
    .then(response => response.json())
    .then(Staff => {
        Staff.forEach(person => {
            console.log(A(person));   
            console.log(B(person));  
            console.log(C(person));
            console.log(D(person));
            console.log(Blankline(person))
        });
    })
    .catch(error => {
        console.error(error);
    });

    function A(person) {
        return `Employee ID: ${person.Id} Full Name: ${person.FirstName} ${person.LastName}.`;
    }

    function Age(person) {
        var d1 = new Date().getYear()
        var d2 = new Date(person.Birthdate).getYear()
        var Age = Math.abs(d1-d2)
        return Age;
    }

    function B(person) {
        return `${person.FirstName} is ${Age(person)} years old.`;
    } 

    function C(person) {
            if (Age(person) < 19)
                return `${person.FirstName} is not old enough to drink.`;
            if (Age(person) >= 19)
                return `${person.FirstName} is old enough to drink.`;
    }

    function Profits(person) {
        return (person.Sales * SalesRate);
    }

    function D(person) {
        return `${person.FirstName} has made $${Profits(person)} in sales.`
    }

    function Blankline(person) {
        return ``
    }
