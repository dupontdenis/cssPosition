const demo = document.querySelector(".demo");

demo.addEventListener("click", ({ target }) => {
    console.log(target.nodeName);
    const bloc = target.closest("div");
    bloc.classList.toggle("overlay");
});
