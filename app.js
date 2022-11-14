/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

// selecting the error paragraph
let errDiv = document.querySelector("#error");
let ulEle = document.querySelector("#list");
let promise=getList();


promise.then(res =>
  res.forEach(function (hobbit){
    let li = document.createElement("li");
    li.textContent = hobbit;
    ulEle.appendChild(li);
    })
  ).catch((err) => {
    console.error(err);
    errDiv.textContent = err.message;
  })

//written as an async/await
/*
async function updateDOM() {
  try {
    let list = await getList();
    list.forEach((hobbit) => {
      let li = document.createElement("li");
      li.textContent = hobbit;
      ulEle.appendChild(li);
    });
  } catch (err) {
    console.error(err);
    err.textContent = err.message;
  }
}
updateDOM(); */

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" 
// TODO: If promise rejects
// Display error message in the paragraph element with id="error" 


/*Replace the console.log statement in the then method callback parameter to
iterate through the resolved list of hobbits
create a li for each hobbit, and append the li to the selected ul from the DOM
Replace the console.log statement in the catch method callback parameter to
display the resolved failure object's message property as the text content of the selected p from the DOM*/
