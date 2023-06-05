const tinhot = [
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    }
]

const landing= [
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    }
]
const wintips=[
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    },
    {
        link: ""
    }
]
const TrafficTH = document.querySelector("#tinhot");
const TrafficLD = document.querySelector("#landing");
const TrafficWT = document.querySelector("#wintips");
window.addEventListener("DOMContentLoaded", function () {
    displayTH(tinhot);
    displayLD(landing);
    displayWT(wintips);
  });
function displayTH(trafficLinks){
    let displayLinks = trafficLinks.map(function (links){
        return `<a href="${links.link}"> <button >1</button></a>`
    });
    displayLinks.join("");
    TrafficTH.innerHTML = displayLinks ;
}
function displayLD(trafficLinks){
    let displayLinks = trafficLinks.map(function (links){
        return `<a href="${links.link}"> <button >1</button></a>`
    });
    displayLinks.join("");
    TrafficLD.innerHTML = displayLinks ;
}
function displayWT(trafficLinks){
    let displayLinks = trafficLinks.map(function (links){
        return `<a href="${links.link}"> <button >1</button></a>`
    });
    displayLinks.join("");
    TrafficWT.innerHTML = displayLinks ;
}