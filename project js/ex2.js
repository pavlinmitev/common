function big(arr) {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(" -> ");
        let first = current[0]
        let second = current[1]
        let third = current[2]
        let obj = {
            "Name": first,
            "Age": second,
            "Grade": third,
        };
        for (let key in obj) {
            console.log(key + ": " + obj[key]);
        }

    }
}
    big(["Pesho -> 13 -> 6.00",
        "Ivan -> 12 -> 5.57",
        "Toni -> 13 -> 4.90"]);
