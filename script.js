const cont = document.querySelector(".container");

for (let r = 0; r < 4; r++)
{
    for (let c = 0; c < 4; c++)
    {
        let pixel = document.createElement("div");
        pixel.classList.toggle("pixel");
        cont.appendChild(pixel);
    }
}