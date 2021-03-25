//DOM
const btn = document.querySelector(
    "button"
);
const load = document.querySelector(
    ".load"
);
const head = document.querySelector(
    "h1"
);
const body = document.querySelector(
    "p"
);

btn.addEventListener("click", () => {
    load.style.visibility = "visible";
    load.classList.add("fade-in");
    // setTimeout(() => {
    //     load.classList.remove(
    //         "fade-in"
    //     );
    //     load.classList.add("fade-out");
    //     load.style.visibility =
    //         "hidden";
    // }, 1200);

    sleep(2000).then(() => {
        load.classList.remove(
            "fade-in"
        );
        load.classList.add("fade-out");
        load.style.visibility =
            "hidden";
    });
});

// function sleep(time) {
//     return new Promise(resolve, () => {
//         setTimeout(() => {
//             resolve();
//         }, time);
//     });
// }

function sleep(ms) {
    // add ms millisecond timeout before promise resolution
    return new Promise((resolve) =>
        setTimeout(resolve, ms)
    );
}
