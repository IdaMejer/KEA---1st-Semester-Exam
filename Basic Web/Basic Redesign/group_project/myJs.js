let elements = document.getElementsByClassName('button');
console.log('elements found: ', elements);

for (let element of elements) {

element.onmousemove = function (e) {

        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
    
    };
    
}

let menuBar = document.getElementById('jsMenu');
   stickybits(menuBar);
