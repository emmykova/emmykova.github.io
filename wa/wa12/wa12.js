const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
outputInt = "";
output.textContent = outputInt;


$(document).ready(function() {
	PIMG();
  $('#img0').click(function() {
  	PIMG(), add0();
  });
  $('#img1').click(function() {
    PIMG(), add1();
  });
  $('#img2').click(function() {
    PIMG(), add2();
  });
  $('#img3').click(function() {
    PIMG(), add3();
  });
  $('#img4').click(function() {
    PIMG(), add4();
  });
  $('#img5').click(function() {
    PIMG(), add5();
  });
  $('#img6').click(function() {
    PIMG(), add6();
  });
  $('#img7').click(function() {
    PIMG(), add7();
  });
  $('#img8').click(function() {
    PIMG(), add8();
  });
  $('#img9').click(function() {
    PIMG(), add9();
  });
  $('#submit').click(function() {
    submit();
  });
  $('#reset').click(function() {
    reset();
  });
});


function PIMG() {
    let img0 = $('#img0');
	let img1 = $('#img1');
    let img2 = $('#img2');
    let img3 = $('#img3');
    let img4 = $('#img4');
    let img5 = $('#img5');
    let img6 = $('#img6');
    let img7 = $('#img7');
    let img8 = $('#img8');
    let img9 = $('#img9');
    let box = $('#banner-message');
 	let boxWidth = box.width();
    let boxHeight = box.height();
    

    img0.css({
        "position": "relative",
        "left": Math.floor(Math.random() * ( boxWidth - 0 + 1) + 0 ),
        "top": Math.floor(Math.random()* (boxHeight - 0 + 1) + 0) 
    });


    img1.css({
        "position": "relative",
        "left": Math.floor(Math.random() * ( boxWidth - 0 + 1) + 0 ),
        "top": Math.floor(Math.random()* (boxHeight - 0 + 1) + 0)
    });

  img2.css({
        "position": "relative",
        "left": Math.floor(Math.random() * boxWidth ),
        "top": Math.floor(Math.random() * boxHeight)  
    });

    img3.css({
        "position": "relative",
        "left": Math.floor(Math.random() * boxWidth ),
        "top": Math.floor(Math.random() * boxHeight) 
    });

    img4.css({
        "position": "relative",
        "left": Math.floor(Math.random() * boxWidth ),
        "top": Math.floor(Math.random() * boxHeight) 
    });

    img5.css({
        "position": "relative",
        "left": Math.floor(Math.random() * boxWidth ),
        "top": Math.floor(Math.random() * boxHeight) 
    });

    img6.css({
        "position": "relative",
        "left": Math.floor(Math.random() * boxWidth ),
        "top": Math.floor(Math.random() * boxHeight) 
    });

    img7.css({
        "position": "relative",
        "left": Math.floor(Math.random() * boxWidth ),
        "top": Math.floor(Math.random() * boxHeight)  
    });

    img8.css({
        "position": "relative",
        "left": Math.floor(Math.random() * boxWidth ),
        "top": Math.floor(Math.random() * boxHeight)  
    });

    img9.css({
        "position": "relative",
        "left": Math.floor(Math.random() * boxWidth ),
        "top": Math.floor(Math.random() * boxHeight) 
    });

    console.log(outputInt);

}

function submit() {
    alert(outputInt);
}

function reset() {
    outputInt = "";
    output.textContent = outputInt;
}

function add0() {
    if(outputInt.length != 12) {
        if(outputInt.length === 3 || outputInt.length === 7 ) {
            output.textContent = outputInt + "-0";
            outputInt += "-0";
        }
        else {
            output.textContent = outputInt + "0";
            outputInt += "0";
        }
    }
}
function add1() {
    if(outputInt.length != 12) {
        if(outputInt.length === 3 || outputInt.length === 7 ) {
            output.textContent = outputInt + "-1";
            outputInt += "-1";
        }
        else {
            output.textContent = outputInt + "1";
            outputInt += "1";
        }
    }
}
function add2() {
    if(outputInt.length != 12) {
        if(outputInt.length === 3 || outputInt.length === 7 ) {
            output.textContent = outputInt + "-2";
            outputInt += "-2";
        }
        else {
            output.textContent = outputInt + "2";
            outputInt += "2";
        }
    }
}
function add3() {
    if(outputInt.length != 12) {
        if(outputInt.length === 3 || outputInt.length === 7 ) {
            output.textContent = outputInt + "-3";
            outputInt += "-3";
        }
        else {
            output.textContent = outputInt + "3";
            outputInt += "3";
        }
    }
}
function add4() {
    if(outputInt.length != 12) {
        if(outputInt.length === 3 || outputInt.length === 7 ) {
            output.textContent = outputInt + "-4";
            outputInt += "-4";
        }
        else {
            output.textContent = outputInt + "4";
            outputInt += "4";
        }
    }
}
function add5() {
    if(outputInt.length != 12) {
        if(outputInt.length === 3 || outputInt.length === 7 ) {
            output.textContent = outputInt + "-5";
            outputInt += "-5";
        }
        else {
            output.textContent = outputInt + "5";
            outputInt += "5";
        }
    }
}
function add6() {
    if(outputInt.length != 12) {
        if(outputInt.length === 3 || outputInt.length === 7 ) {
            output.textContent = outputInt + "-6";
            outputInt += "-6";
        }
        else {
            output.textContent = outputInt + "6";
            outputInt += "6";
        }
    }
}
function add7() {
    if(outputInt.length != 12) {
        if(outputInt.length === 3 || outputInt.length === 7 ) {
            output.textContent = outputInt + "-7";
            outputInt += "-7";
        }
        else {
            output.textContent = outputInt + "7";
            outputInt += "7";
        }
    }
}
function add8() {
    if(outputInt.length != 12) {
        if(outputInt.length === 3 || outputInt.length === 7 ) {
            output.textContent = outputInt + "-8";
            outputInt += "-8";
        }
        else {
            output.textContent = outputInt + "8";
            outputInt += "8";
        }
    }
}
function add9() {
    if(outputInt.length != 12) {
        if(outputInt.length === 3 || outputInt.length === 7 ) {
            output.textContent = outputInt + "-9";
            outputInt += "-9";
        }
        else {
            output.textContent = outputInt + "9";
            outputInt += "9";
        }
    }
}


function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)