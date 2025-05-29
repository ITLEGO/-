
// знаем пользователь сейчас нажимает мышку или нет?
// isDrawing === true -- сейчас нажимаем мышку
// isDrawing === false -- сейчас не нажимаем мышку

let isDrawing = false;
const canvas = document.querySelector(".canvas")
document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);


// выбираем цвет, и цвет всегда находится в переменной colorPicker
const colorPicker = document.getElementById("colorPicker");
let currentColor = colorPicker.value;
colorPicker.addEventListener("input", () => {
    currentColor = colorPicker.value;
});


// повторяем все что в цикле много раз
for (let x = 0; x < 32 * 32; x++) {

    // делаем 1 пиксель
    const pixel = document.createElement("div");
    // добавляем ему класс "pixel"
    pixel.classList.add("pixel");

    // если ткнули в пиксель -- красим его
    pixel.addEventListener("mousedown", () => {
        pixel.style.backgroundColor = currentColor;
    });

    // если водим мышкой по пикселям
    pixel.addEventListener("mouseover", () => {
        // если isDrawing === true
        if (isDrawing === true) {
            // закрашиваем пиксель
            pixel.style.backgroundColor = currentColor;
        } else {
            // ничего
        }
    });

    // добавляем пиксель на доску для рисования
    canvas.appendChild(pixel);

}




const eraser = document.getElementById("eraser")

eraser.addEventListener("click", () => {
    currentColor = "white";
})




const clearBtn = document.getElementById("clearBtn")

clearBtn.addEventListener("click", () => {

    document.querySelectorAll(".pixel").forEach(pixel => pixel.style.backgroundColor = "white");

})



const saveBtn = document.getElementById("save")
saveBtn.addEventListener("click", () => {
    соханитьКарт()
})

// const loadBtn = document.getElementById("load")
// loadBtn.addEventListener("click", () => {
//     посмотретьСейв()
// })



function соханитьКарт() {

    // переменная с цветами 
    let colors = []

    // для кадого пикселя. взять задний фон и засунуть его в "colors"
    document.querySelectorAll(".pixel").forEach((pixel) => {
        colors.push(pixel.style.backgroundColor)
    })
    // показываем все цвета пикселей на картинке в консоле
    console.log("Сохраняем вот такие штуки(цвета)", colors)
    // сохраняет "цвета всех пикселей" в хранилище 
    localStorage.setItem("цвета", JSON.stringify(colors))
}

function посмотретьСейв() {
    // colors = сохранение с пред.картинкой 
    let colors = JSON.parse(localStorage.getItem("цвета"))

    // показывает в консоли сохранение с картинкой
    console.log("Смотрим в хранилище вот такие цвета", colors)

    // взять из colors и вывести на картинку 
    document.querySelectorAll(".pixel").forEach((pixel, nomer) => {
        pixel.style.backgroundColor = colors[nomer]
    })
}

// окно.когда все загрузилось
window.addEventListener('load', function () {
    посмотретьСейв()
})



let стрелка = document.querySelector(".главDiv2 ")
let start = document.querySelector(".start ")
let graf = document.querySelector(".Graf")

стрелка.addEventListener("click", () => {
    показатьРисовалку()
})

function показатьРисовалку() {
    стрелка.style.transform = "translateX(800px) rotate(800deg)"   
    graf.style.transform = "translateY(-179%)"   
    graf.style.opacity = 0
    стрелка.style.opacity = 0
    стрелка.style.visibility = "hidden"
    
    // start.style.opacity = 0
    // start.style.visibility = "hidden"

    
  
    setTimeout(() => {
        сетка.style.opacity = 1
        сетка.style.visibility = "visible"
    }, 1300);
  

}

let сетка = document.querySelector(".paint")



































