const interval = 16,
    carousel = document.getElementById("carousel"), 
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    previous = document.getElementById("previous")

next.addEventListener("click", e => {
    carousel.scrollBy(width + interval, 0)
    if (carousel.scrollWidth !== 0)
        previous.style.display = "flex"
    if (content.scrollWidth - width - interval <= carousel.scrollLeft + width)
        next.style.display = "none"
})

previous.addEventListener("click", e => {
    carousel.scrollBy(-(width + interval), 0)
    if (carousel.scrollLeft - width - interval <= 0)
        previous.style.display = "none"
    if (!content.scrollWidth - width - interval <= carousel.scrollLeft + width)
        next.style.display = "flex"
})

let width = carousel.offsetWidth
window.addEventListener("resize", e => (width = carousel.offsetWidth))
