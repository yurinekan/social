const getTitle = () => {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
      document.title = "Bom dia!"
    } else if (curHr < 18) {
        document.title = "Boa tarde!"
    } else {
        document.title = "Boa noite!"
    }
}

getTitle()
