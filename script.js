const date = "2 July 2024 12:00 PM";
document.getElementById("two").innerHTML = date;


function setCounter() {
    const end = new Date(date);
    const now = new Date();
    console.log("end=" + end);
    console.log("now=" + now);

    const counter = (end - now) / 1000 /*sec*/;
    const day = Math.floor(counter / (60 * 60 * 24));
    document.getElementById("days").value = day;
    // console.log(day);

    const hour = Math.floor((counter / (60 * 60 * 24) - day) * 24);
    document.getElementById("hours").value = hour;

    const min = Math.floor((((counter / (60 * 60 * 24) - day) * 24) - hour) * 60)
    document.getElementById("mins").value = min;

    const sec = Math.floor((((((counter / (60 * 60 * 24) - day) * 24) - hour) * 60) - min) * 60);
    document.getElementById("secs").value = sec;
}
setCounter()

setInterval(
    () => {
        setCounter()
    },
    1000);