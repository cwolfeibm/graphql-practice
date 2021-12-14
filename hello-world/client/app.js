const GRAPGQL_URL = 'http://localhost:9000/'

async function fetchGreeting() {
    const response = await fetch(GRAPGQL_URL,{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: jSON.stringify({
            query: `
                query {
                    greeting
                }
            `
        })
    })
    const responseBody = await response.json();
    console.log(responseBody)

}