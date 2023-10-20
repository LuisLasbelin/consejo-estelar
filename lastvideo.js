async function getLastVideo() {
    return new Promise((resolve, reject) => {
        // get data from url
        let url = "https://decapi.me/youtube/latest_video?id=UCLCldhhQxW2ZlJSCbn1EIqA";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        console.log("Request sent");
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
    })
}

getLastVideo().then((response) => {
    let url = response.split("- https");
    videoid = url[1].split("/")[3];
    document.getElementById("player").src = `https://www.youtube.com/embed/${videoid}?enablejsapi=1&origin=http://example.com`;
}).catch((error) => {
    console.log(error);
});