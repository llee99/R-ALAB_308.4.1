
// Part 1: Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// Part 2: Prime Time
let n = parseInt(prompt("Enter a number: "), 10);
for (let i = n-1; i > 1; i--) {
    if (n%i==0) {
        console.log("Not a prime number")
        break;
    } else if (i == 2) {
        console.log("Prime number")
    }
}

// Part 3: Feeling Loopy
const str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
function formatCSV(csvString) {
    let rows = csvString.split("\n");
    let table = [];
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i].split(",");
        table.push(row);
    }
    return table;
}
console.log(formatCSV(str))

// Part 3 Continued: Transforming Data (308.4.1)
function formatCSV(csvString) {
    let rows = csvString.split("\n");
    let table = [];
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i].split(",");
        table.push(row);
    }

    let headers = table[0].map(header => header.toLowerCase());
    let result = [];

    for (let i = 1; i < table.length; i++) {
        let rowObject = {};
        for (let j = 0; j < headers.length; j++) {
            rowObject[headers[j]] = table[i][j];
        }
        result.push(rowObject);
    }

    return result;
}

// Example usage:
const csvString = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

console.log(formatCSV(csvString));

let result = formatCSV(csvString);

// Remove the last element from the array
result.pop();

// Insert the new object at index 1
result.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add the new object to the end of the array
result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(result);

function arrayToCSV(data) {
    if (data.length === 0) return "";

    const headers = Object.keys(data[0]);
    const csvRows = [];

    // Add the header row
    csvRows.push(headers.join(","));

    // Add the data rows
    data.forEach(row => {
        const values = headers.map(header => row[header]);
        csvRows.push(values.join(","));
    });

    return csvRows.join("\n");
}

let finalData = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

const csvString2 = arrayToCSV(finalData);
console.log(csvString2);
