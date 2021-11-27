
// Get the form
const numberFactsForm = document.querySelector('.number-facts-form');
const factsList = document.querySelector('.facts-list');

// 1.
axios.get(`http://numbersapi.com/${3}?json`)
        .then(function (response) {
           console.log(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
  
  // 2.
  let favNumbers = [7, 11, 22];
  axios.get(`http://numbersapi.com/${favNumbers}?json`)
        .then(function (response) {
           console.log(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

// 3.
// Add the event listener
numberFactsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Clear the list
    factsList.innerHTML = '';
    for(let i = 0; i < 4; i++) {
        axios.get(`http://numbersapi.com/${e.target.number.value}?json`)
        .then(function (response) {
            // Append the new fact
            let factLi = document.createElement('li');
            factLi.innerText = response.data.text;
            factsList.appendChild(factLi);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

})
