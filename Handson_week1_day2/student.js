const students = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 21}, 
    {name: "Jone", age: 20} 
]

const avgStudent = students => {const totalAge = students.reduce((acc,{age}) => acc+age, 0 );
    console.log('Calculate start')
    return totalAge/students.length;
};
        
const showAvg = () => {
    wait(1000)
        .then(() => console.log('Second call start'))
    wait(3000)
        .then(() => {console.log('Second call finish');
        console.log('Third call start')});
    wait(5000)
        .then(() => {console.log(avg);
        document.getElementById("hasil").innerHTML = avg;});
    wait(6000)
        .then(() => console.log('Third call finish'));
    const avg = avgStudent(students);
    
};

const generateTableHead = (table, data) =>{
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
        }
    };

const generateTable = (table, data)=> {
        for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
                }
        }
 };

const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    });
}


let table = document.querySelector("table");
let data = Object.keys(students[0]);
generateTableHead(table, data);
generateTable(table, students);
