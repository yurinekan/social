const getTitle = () => {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
      document.title = "Oi, bom dia!"
    } else if (curHr < 18) {
        document.title = "Olá, boa tarde!"
    } else {
        document.title = "Opa, boa noite!"
    } 
}

getTitle()