//DOM objects
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

/** keeps track of the last random number
 * ensures that the same number isn't picked twice
 * so that it is truly a random idea
 */

let num;

/**
 * Animation logic, fades in and out
 * Calls the blocking function for fetching from the API
 */
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

/**
 * Random Number Generator
 * Relative to the size of an array
 *  @param {array} arr      array input for length;
 */
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

/**
 * GET Request to express API
 * Returns an array of objects
 * each has their own title, and description properties
 * in the function, the random function is used to select a random object
 * This is then set as the values of the h1 and p elements,
 * title and description respectively
 */
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
