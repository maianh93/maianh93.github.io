//make snow
snowDrop(150, () => randomInt(0, 2000));
snow(150, 150);

function snow(num, speed) {
    if (num > 0) {
        setTimeout(function () {
            $('#drop_' + num).addClass('animate');
            num--;
            snow(num, speed);
        }, speed);
    }
    console.log("Snow down!!!");
};

function snowDrop(num, position) {
    while (num > 0) {
        var drop = '<div class="drop snow" id="drop_' + num + '"></div>';

        $('body').append(drop);
        $('#drop_' + num).css('left', position());
        num--;
    }
};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};