const fetchOptions = {
    method: 'GET', // or any other HTTP method you are using
    mode: 'cors', // Set the mode to 'cors' for cross-origin requests
}

const glossaryTable = document.getElementById('glossary-entry');
const resp = await fetch('http://fb13.decoded.com:5000/api/pensionGlossary', fetchOptions);
const data = await resp.json();

for (const row of data) {
    glossaryTable.innerHTML += createListing(
        row.title, 
        row.description,
    );
}

function createListing(title, description) {
    const template =
    `<tr>
        <td>${title}</td>
        <td>${description}</td>

    </tr>`;

    return template;
}