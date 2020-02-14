// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

 const topic = document.querySelector('.topics');
  console.log(topic);
//  topic.appendChild(lambdaTopics());

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    //console.log(response)
    topic.appendChild(lambdaTopics(response.data));
    console.log(response.data.topics);

})
.catch(error => {
    console.log('code is not running', error);
});





function lambdaTopics(topics){
    const divTopics = document.createElement('div');
    const tabs1 = document.createElement('div');
    const tabs2 = document.createElement('div');
    const tabs3 = document.createElement('div');
    const tabs4 = document.createElement('div');
    const tabs5 = document.createElement('div');

    divTopics.classList.add('topics')
    tabs1.classList.add('tab');
    tabs2.classList.add('tab');
    tabs3.classList.add('tab');
    tabs4.classList.add('tab');
    tabs5.classList.add('tab');

    divTopics.appendChild(tabs1);
    divTopics.appendChild(tabs2);
    divTopics.appendChild(tabs3);
    divTopics.appendChild(tabs4);
    divTopics.appendChild(tabs5);

    tabs1.textContent = `${topics.topics[0]}`;
    tabs2.textContent = `${topics.topics[1]}`;
    tabs3.textContent = `${topics.topics[2]}`;
    tabs4.textContent = `${topics.topics[3]}`;
    tabs5.textContent = `${topics.topics[4]}`;

    return divTopics;
}