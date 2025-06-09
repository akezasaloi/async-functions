//Question 1
const reminderSent = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('Reminder sent to user!')
    },3000);
    });

async function userReminder(){
    setTimeout(() => {
        console.log('Do JavaScript assignment');
    }, 1000);
    try{ const reminder = await reminderSent;
    console.log(reminder);
}catch(error){
console.log({error});
}
return reminderSent
}

console.log(userReminder());
 
//Question 2
// In a startup's DevOps dashboard, implement a setInterval function that checks server status every 5 seconds by calling 
// an async function checkServer() that returns a Promise resolving to "Server is running" or rejecting with "Server down". 
// Use .then() and .catch() to handle the result and stop the interval after 30 seconds using clearInterval.















