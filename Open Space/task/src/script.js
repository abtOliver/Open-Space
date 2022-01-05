function okClicked() {
    let value = document.getElementById("password").value;
    if ("TrustNo1" === value) {
        let launchButton;
        console.log("ACCESS GRANTED!")
        for (const input of document.getElementsByTagName("input")) {
            switch (input.type) {
                case "password":
                    input.disabled = true;
                    break;
                case "button":
                    if (input.value === "OK") {
                        input.disabled = true;
                    } else {
                        launchButton = input;
                    }
                    break;
                default:
                    input.disabled = false;
                    break;
            }
        }
    } else alert("ACCESS DENIED!")
}

function checkLaunchConditions() {
    if (isAllChecked() && isAllMaximum()) {
        for (const input of document.getElementsByTagName("input")) {
            if (input.value === "Launch") {
                input.disabled = false;
                break;
            }
        }
        console.log("PREPARED FOR LIFTOFF");
    }
}

function isAllChecked() {
    for (const input of document.getElementsByTagName("input")) {
        if (input.type === "checkbox" && !input.checked) {
            return false;
        }
    }
    return true;
}

function isAllMaximum() {
    for (const input of document.getElementsByTagName("input")) {
        if (input.type === "range" && input.value !== "100") {
            return false;
        }
    }
    return true;
}

function liftOff() {
    console.log("LIFTOFF");
    let rocket = document.getElementsByClassName("rocket")[0];
    rocket.animate([{
        left: "20vh", top: "75vh"
    }, {
        left: "50vh", top: "5vh"
    }], {
        duration: 2000, iterations: 1
    });
}
