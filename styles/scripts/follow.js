lll = true;

like_anim.onclick = function () {
    if(lll===true){
        lll=false;
    }
    else {
        lll=true;
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявляем функцию followCursor
        let el = document.querySelector('.following') // ищем элемент, который будет следовать за курсором

        window.addEventListener('mousemove', e => { // при движении курсора
            const target = e.target // определяем, где находится курсор
            if (!target) return
            if(lll===true){
                el.style.opacity="0";
            }
            else {
                el.style.opacity="100%";
            }
            sleep(40);
            el.style.left = (e.pageX+10) + 'px' // задаём элементу позиционирование слева
            el.style.top = (e.pageY+10) + 'px' // задаём элементу позиционирование сверху
        })
    }
    followCursor() // вызываем функцию followCursor

});