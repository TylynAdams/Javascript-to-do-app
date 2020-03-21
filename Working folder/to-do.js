var a = document.getElementById('btn');
addEventListener('click', function (){
    var section = document.createElement('section');
    section.setAttribute('id', 1);
    document.getElementById('wrapper').appendChild(section);

    var h3 = document.createElement('h3');
    h3.innerText = document.getElementById('sectionText').value;
    section.appendChild(h3);

    var input = document.createElement('input');
    input.setAttribute('type', 'text')
    section.appendChild(input);

    var btn = document.createElement('button');
    btn.innerText = 'New List Item'
    section.appendChild(btn);

    btn.addEventListener('click', function(){
        var div = document.createElement('div');
        div.setAttribute('class', 'listItem');

        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', 'checker');
        div.appendChild(checkbox);

        var span = document.createElement('span');
        span.innerText = this.previousElementSibling.value;
        div.appendChild(span);
        input.parentNode.insertBefore(div, input);

    }, false)
})