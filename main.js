// Global Vars
var DEALG = 0;
var L1 = 0;
var L2 = 0;
var L3 = 0;
var L4 = 0;
var L1M = 0;
var L2M = 0;
var L3M = 0;
var L4M = 0;
var NET = 0;
var NETM = 0;
var PROC = 0;
var PROCM = 0;
var LVE_Time = 0;
var LVE_Toggle = false;

var sDEALG = 0;
var sL1 = 0;
var sL2 = 0;
var sL3 = 0;
var sL4 = 0;
var sL1M = 0;
var sL2M = 0;
var sL3M = 0;
var sL4M = 0;
var sNET = 0;
var sNETM = 0;
var sPROC = 0;
var sPROCM = 0;
var sLVE_Time = 0;
var sLVE_Toggle = false;

function stageSel(stage) {
    // Home Display
    if (stage == 0) {
        document.getElementById("stage1").style.display = "none";
        document.getElementById("stage2").style.display = "none";
        document.getElementById("stage3").style.display = "none";
        document.getElementById("stage0").style.display = "block";
    }
    // Autos Display
    if (stage == 1) {
        document.getElementById("stage0").style.display = "none";
        document.getElementById("stage2").style.display = "none";
        document.getElementById("stage3").style.display = "none";
        document.getElementById("stage1").style.display = "block";
    }
    // Teleop Display
    if (stage == 2) {
        document.getElementById("stage0").style.display = "none";
        document.getElementById("stage1").style.display = "none";
        document.getElementById("stage3").style.display = "none";
        document.getElementById("stage2").style.display = "block";
    }
    // Endgame Display
    if (stage == 3) {
        document.getElementById("stage0").style.display = "none";
        document.getElementById("stage1").style.display = "none";
        document.getElementById("stage2").style.display = "none";
        document.getElementById("stage3").style.display = "block";
    }
}

function logData(datatype) {
var logdattype = datatype;
if (logdattype == "L4") {
    console.log('L4');
    L4++;
    }
if (logdattype == "L3") {
    console.log('L3');
    L3++;
    }
if (logdattype == "L2") {
    console.log('L2');
    L2++;
    }
if (logdattype == "L1") {
    console.log('L1');
    L1++;
    }
if (logdattype == "L4M") {
    console.log('L4M');
    L4M++;
    }
if (logdattype == "L3M") {
    console.log('L3M');
    L3M++;
    }
if (logdattype == "L2M") {
    console.log('L2M');
    L2M++;
    }
if (logdattype == "L1M") {
    console.log('L1M');
    L1M++;
    }
if (logdattype == "NET") {
    console.log('NET');
    NET++;
    }
if (logdattype == "NETM") {
    console.log('NETM');
    NETM++;
    }
if (logdattype == "PROC") {
    console.log('PROC');
    PROC++;
    }
if (logdattype == "PROCM") {
    console.log('PROCM');
    PROCM++;
    }
if (logdattype == "DEALG") {
    console.log('DEALG');
    DEALG++;
    }
if (logdattype == "LVE") {
    runLVE();
}

    // Shift Second Log Data

    if (logdattype == "sL4") {
        console.log('sL4');
        sL4++;
        }
    if (logdattype == "sL3") {
        console.log('sL3');
        sL3++;
        }
    if (logdattype == "sL2") {
        console.log('sL2');
        sL2++;
        }
    if (logdattype == "sL1") {
        console.log('sL1');
        sL1++;
        }
    if (logdattype == "sL4M") {
        console.log('sL4M');
        sL4M++;
        }
    if (logdattype == "sL3M") {
        console.log('sL3M');
        sL3M++;
        }
    if (logdattype == "sL2M") {
        console.log('sL2M');
        sL2M++;
        }
    if (logdattype == "sL1M") {
        console.log('sL1M');
        sL1M++;
        }
    if (logdattype == "sNET") {
        console.log('sNET');
        sNET++;
        }
    if (logdattype == "sNETM") {
        console.log('sNETM');
        sNETM++;
        }
    if (logdattype == "sPROC") {
        console.log('sPROC');
        sPROC++;
        }
    if (logdattype == "sPROCM") {
        console.log('sPROCM');
        sPROCM++;
        }
    if (logdattype == "sDEALG") {
        console.log('sDEALG');
        sDEALG++;
        }
    if (logdattype == "CLML") {
        console.log('CLML');
        CLML++;
        }
    if (logdattype == "sLVE") {
    srunLVE();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runLVE() {
    leavebtn = document.getElementById("leave");
    console.log('LVE Toggle');
    if (!LVE_Toggle) {
        LVE_Toggle = true;
        leavebtn.style.backgroundColor = '#932525';
        while (LVE_Toggle) {
            LVE_Time++;
            console.log(LVE_Time);
            await sleep(1000);
        }
    } else {
        LVE_Toggle = false;
        leavebtn.style.backgroundColor = '#1e1e1e';
    }
}

async function srunLVE() {
    leavebtn = document.getElementById("sleave");
    console.log('LVE Toggle');
    if (!sLVE_Toggle) {
        sLVE_Toggle = true;
        leavebtn.style.backgroundColor = '#932525';
        while (sLVE_Toggle) {
            sLVE_Time++;
            console.log(sLVE_Time);
            await sleep(1000);
        }
    } else {
        sLVE_Toggle = false;
        leavebtn.style.backgroundColor = '#1e1e1e';
    }
}

function sendDataWebhookVersion() {
    // Don't be rude, Yes, I know this is an exposed webhook. Ignore it, it was never here. What do you get out of messing with programmers? Nothing...
const webhookUrl = "https://discordapp.com/api/webhooks/1355015444955922483/dtljeMpgBfzNc-2mCdmvXzzPBxXQmE-8bVjDnADmXtWyDt82FZVkliGjZ3qzu8cLF9JR";
const messageContent = document.getElementById('dataex').textContent;

fetch(webhookUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        content: messageContent
    })
})
.then(response => {
    if (response.ok) {
        console.log("Message sent successfully!");
    } else {
        console.error("Failed to send message:", response.status);
    }
})
.catch(error => {
    console.error("Error sending message:", error);
});
}

document.addEventListener('input', function(event) {
    if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'INPUT') {
        const autoPeriod = document.getElementById('autoperiod')?.value || null;
        const telePeriod = document.getElementById('teleperiod')?.value || null;
        const defenseData = document.getElementById('defenseData')?.value || null;
        const namedat = document.getElementById('namedat')?.value || null;
        const scouterteamnumber = document.getElementById('scouterteamnumber')?.value || null;
        const scoutingteamdat = document.getElementById('scoutingteamdat')?.value || null;
        const matchnumber = document.getElementById('matchnumber')?.value || null;
        const position = document.getElementById('position')?.value || null;

        const data = {
            DEALG, L1, L2, L3, L4, L1M, L2M, L3M, L4M, NET, NETM, PROC, PROCM, LVE_Time, LVE_Toggle,
            sDEALG, sL1, sL2, sL3, sL4, sL1M, sL2M, sL3M, sL4M, sNET, sNETM, sPROC, sPROCM, sLVE_Time, sLVE_Toggle,
            autoPeriod, telePeriod, defenseData
        };

        document.getElementById('dataex').textContent = JSON.stringify(data, null, 2);
    }
});
