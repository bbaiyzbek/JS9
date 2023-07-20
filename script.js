const handleResponse = () => {
    fetch('https://swapi.dev/api/people/1/')
        .then(response => response.json())
        .then(data => {
        fetch('https://swapi.dev/api/vehicles/14/')
            .then(response => response.json())
            .then(veh => {
                fetch("https://swapi.dev/api/starships/12/")
                    .then(response => response.json())
                    .then(star => alert(`hello ${data.name}, born in ${data.birth_year}, ${veh.name} , ${star.name}` ))
            })
    })
        .catch(error => console.log(error))
}
handleResponse()


