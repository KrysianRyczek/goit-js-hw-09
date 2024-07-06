    
   const localMemory={
     "#email": localStorage.getItem(document.querySelector("input").id),
     "#msg": localStorage.getItem(document.querySelector("textarea").id)
   }
   console.log(localMemory)
   for (const record in localMemory) {
    if (localMemory[record]===null) {
        continue
    }
    console.log(localMemory[record])
    const element = document.querySelector(record)

    element.value=localMemory[record]
    console.log(element)
  }

    const form =document.querySelector(".feedback-form")
    console.log(form)
    
    form.addEventListener("input", (event) => {
        event.preventDefault()
        const currentObject = event.target
        console.log(currentObject.value)
        localStorage.setItem(currentObject.id, currentObject.value);
    })

    form.addEventListener("submit", (event) => {
        localStorage.removeItem(document.querySelector("input").id);
        localStorage.removeItem(document.querySelector("textarea").id);
    })
    /*  */