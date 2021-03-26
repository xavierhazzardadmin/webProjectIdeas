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
    // setTimeout(() => {
    //     load.classList.remove(
    //         "fade-in"
    //     );
    //     load.classList.add("fade-out");
    //     load.style.visibility =
    //         "hidden";
    // }, 1200);
    // sleep(400).then(fetchIdea());

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

    // fetch("http://127.0.0.1:3000/api", {
    //     method: "GET",
    //     mode: "no-cors",
    // })
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((res) => {
    //         console.log(res);
    //     });
});

// function sleep(time) {
//     return new Promise(resolve, () => {
//         setTimeout(() => {
//             resolve();
//         }, time);
//     });
// }

// async function fetchIdea() {
//     const res = await fetch(
//         "http://172.17.150.255:3000/api",
//         {
//             method: "GET",
//             mode: "no-cors",
//             headers: {
//                 "Content-Type":
//                     "application/json",
//             },
//         }
//     );
//     const resSon = await res.json();
//     return resSon;
// }

// fetchIdea().then((ideas) => {
//     console.log(ideas);
// });

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
            // console.log(JSON.parse(res));
            return res.json();
        })
        .then((data) => {
            const len = data.length;
            // const rand = Math.floor(
            //     Math.random() * len
            // );
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
