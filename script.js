const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        if(!question.nextElementSibling.classList.contains("open")) {
            const checkOtherItems = document.querySelectorAll(".open")
            checkOtherItems.forEach((otherItem) => {
                otherItem.previousElementSibling.classList.remove("active")
                otherItem.classList.remove("open");
                otherItem.previousElementSibling.setAttribute("aria-expanded", "false");
            })
            question.classList.add("active");
            question.nextElementSibling.classList.add("open");
            question.setAttribute("aria-expanded", "true");
        } else {
            question.classList.remove("active");
            question.nextElementSibling.classList.remove("open");
            question.setAttribute("aria-expanded", "false");
        }
    })
})
