const promiseFunction = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Hello world");
            } else {
                reject(new Error("Hello error"));
            }
        }, 500);
    });

async function asyncAwait() {
    try {
        const msg = await promiseFunction();
        console.log("Message:", msg);
    } catch (err) {
        console.log("Error:", err);
    }
}

asyncAwait();