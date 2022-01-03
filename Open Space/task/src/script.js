function okClicked() {
    let value = document.getElementById("password").value;
    if("TrustNo1" === value){
        console.log("ACCESS GRANTED!")
        for (const element of document.getElementsByTagName("input")) {
            switch (element.type) {
                case "password":
                    element.disabled = true;
                    break;
                case "button":
                    element.disabled = "OK" === element.value;
                    break;
                default:
                    element.disabled = false;
                    break;
            }
        }
    } else alert("ACCESS DENIED!")
}