document.addEventListener("DOMContentLoaded", function () {
    let openModalBTN = document.getElementById("openModalBTN");
    let closeModalBTN = document.getElementById("closeModalBTN");
    let modal = document.getElementById("myModal");

    // Open the Modal
    openModalBTN.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Close the Modal
    closeModalBTN.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the Modal if user click outside the modal
    window.addEventListener("click", function (event){
        if(event.target === modal){
            modal.style.display = "none";
        }        
    });
});
