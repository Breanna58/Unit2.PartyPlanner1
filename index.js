const API_URL ='https://fsa-crud-2aa9294fe819.herokuapp.com/api/2411-FTB-ET-WEB-PT-br/EVENTS'; 






const fetchAllEvents = async () => {

    try { 
    const response = await fetch(API_URL); 
    const json = await response.json(); 
    events.eventNames = json.data; 
    renderAllEvents(); 
    console.log(response)
     } catch (error) {
    console.log(error);

    }


    }

    document.getElementById("eventsForm").addEventListener(submit, async (e) => {
        e.preventDefault(); 



    })


let p = new promise((resolve, reject) => {
let a = 1 + 1 // this is the promise 
if (a == 2) {
    resolve("sucess")

}else {
    reject("failed")
}

})


//do this when it suceeds or fails
p.then(("this is the then")) //run for resove
console.log("this is in the then + message")
}).catch(message) => {
console.log('this is in the catch' + message) 


})







