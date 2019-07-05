/*

*/


function start(e) {
    var name =[
        {
            char:'王',
            big5:'A4FD',
            cns:'1-455E',
            unicode:'738B'
        },
        {
            char:'鼎',
            big5:'B9A9',
            cns:'1-676F',
            unicode:'9F0E'
        },
        {
            char:'睿',
            big5:'BACD',
            cns:'1-6974',
            unicode:'777F'
        }
    ];

    var ele =document.getElementById('div1');
     for (var i = 0; i< 3; i++) {
        ele.innerHTML += name[i].char;
        ele.innerHTML += 'big5= ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += 'cns= ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += 'unicode = ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
     }
}
/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
