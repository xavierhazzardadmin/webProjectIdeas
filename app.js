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

let num;

btn.addEventListener("click", () => {
    load.style.visibility = "visible";
    load.classList.add("fade-in");

    setTimeout(() => {
        fetchIdea();
    }, 600);

    sleep(1300).then(() => {
        load.classList.remove(
            "fade-in"
        );
        load.classList.add("fade-out");
        sleep(500).then(() => {
            load.classList.remove(
                "fade-out"
            );
            load.style.visibility =
                "hidden";
        });
    });
});

function sleep(ms) {
    // add ms millisecond timeout before promise resolution
    return new Promise((resolve) =>
        setTimeout(resolve, ms)
    );
}

function random(arr) {
    const data = arr;
    const rand = Math.floor(
        Math.random() * data.length
    );

    if (rand == num)
        return random(data);
    num = rand;
    return rand;
}

function fetchIdea() {
    fetch(
        "https://powerful-basin-38985.herokuapp.com/api"
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const len = data.length;
            console.log(
                data[random(data)]
            );
            const {
                title,
                description,
            } = data[random(data)];

            head.textContent = title;
            body.textContent = description;
        })
        .catch((err) => {
            console.error(err);
        });
}
