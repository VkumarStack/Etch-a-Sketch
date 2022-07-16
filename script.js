const cont = document.querySelector(".container");
let size = 4;

for (let r = 0; r < 4; r++)
{
    for (let c = 0; c < 4; c++)
    {
        cont.appendChild(createPixel());
    }
}

const rst = document.querySelector(".reset");
rst.addEventListener('click', reset);

const rsz = document.querySelector(".resize");
rsz.addEventListener('click', () => {
    let num = Number(prompt("Enter a Side Dimension:"));
    if (num != NaN && (num >= 1 && num <= 100))
    {
        resize(num);
    }
    else if (num >= 100)
    {
        resize(100);
    }
})

function resize(newSize) {
    if (size === newSize)
        return;
    
    reset();

    cont.setAttribute('style', `grid-template-rows : repeat(${newSize}, 1fr); grid-template-columns : repeat(${newSize}, 1fr);`);
    if (size > newSize)
    {
        let pixels = document.querySelectorAll(".pixel");
        for (let i = 0; i < (size * size - newSize * newSize); i++)
        {
            cont.removeChild(pixels[i]);
        }
    }
    else // if size < newSize
    {
        for (let i = 0; i < (newSize * newSize - size * size); i++)
        {
            cont.appendChild(createPixel());
        }
    }
    size = newSize;
}

function reset() {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.classList.remove("selected");
    });
}

function createPixel() {
    let pixel = document.createElement("div");
    pixel.classList.toggle("pixel");
    pixel.addEventListener('mouseenter', () => {pixel.classList.add("selected")})
    return pixel;
}