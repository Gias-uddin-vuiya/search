const luckyBtn = document.querySelector("#lucky-btn")

luckyBtn.addEventListener('click', (evt) => {
    const query = document.querySelector("input[name='q']").value;
    if (query.trim()) {
        const luckyUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`;
        window.location.href = luckyUrl;
    }
})
