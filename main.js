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
}
