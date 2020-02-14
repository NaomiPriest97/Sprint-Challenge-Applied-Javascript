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
 topic.appendChild(lambdaTopics());

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response)
    topic.appendChild(lambdaTopics(response.data));
    
})
.catch(error => {
    console.log('code is not running', error);
});


// axios.get('https://lambda-times-backend.herokuapp.com/topics')
// .then(response => {
//     Object(response.data).forEach(item => {
//       axios.get(item.topics)
//       .then(response => {
//         topic.appendChild(lambdaTopics(response.data));
//       })
//     })
//   })
//   .catch(error => {
//     console.log('code isnt running', error);
//   });


function lambdaTopics(obj){
    const tabsDiv = document.createElement('div');
    const topicDiv = document.createElement('div');
    const titleSpan = document.createElement('span');
    const tabs = document.createElement('div');

    tabsDiv.classList.add('tabs');
    topicDiv.classList.add('topics');
    titleSpan.classList.add('title');
    tabs.classList.add('tab');

    tabsDiv.appendChild(topicDiv);
    topicDiv.appendChild(titleSpan);
    topicDiv.appendChild(tabs);

    tabs.textContent = `${obj.topics}`;

    return tabsDiv;
}