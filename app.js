
//inst classes//
function render() {
  const ft = new Fetch();
  const ui = new UI();
  
  //add event listeners//
  
  const search = document.getElementById("searchUser");
  const button = document.getElementById("submit");
  button.addEventListener("click", () => {
    const currentVal = search.value;
  
    ft.getCurrent(currentVal).then((data) => {
      //call a UI method//
      ui.populateUI(data);
      //call saveToLS
      ui.saveToLS(data);
    });
    setInterval(function() {
        button.click();
    }, 300000)

  });
  
  //event listener for local storage
  
  window.addEventListener("DOMContentLoaded", () => {
    const dataSaved = ui.getFromLS();
    ui.populateUI(dataSaved);
  });
}


render()

