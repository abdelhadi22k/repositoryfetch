
let inpo = document.querySelector("input");
let getBtn = document.querySelector(".get-btn");
let showData = document.querySelector(".show-data ");  

getBtn.onclick = function () {
    getRebosi()
}



function getRebosi() {
    if (inpo.value == "") {
        showData.innerHTML= "<span> Plees Write Your Githup Username</span>"
        showData.className="w1"
    }else{
        // showData.innerHTML = 
        fetch(`https://api.github.com/users/${inpo.value}/repos`)
        .then((xpon) => xpon.json())
        .then((xdat) => 
        xdat.forEach(el => {
            let proDeef = document.createElement("div");
            let twxrop = document.createTextNode(el.name)
            proDeef.appendChild(twxrop);
            
            let urlrpo = document.createElement("a");
            let twlink = document.createTextNode(" Visit")
            urlrpo.appendChild(twlink)
            urlrpo.href= `https://github.com/${inpo.value}/${el.name}`;
            urlrpo.setAttribute("target","_blank");

            showData.appendChild(proDeef);
            proDeef.appendChild(urlrpo);

            let sre = document.createElement('span');
            let sterText = document.createTextNode(`stars ${el.stargazers_count}`);
            sre.appendChild(sterText);
            proDeef.appendChild(sre)
            proDeef.className="repo-box"

            }),


            showData.innerHTML = "",
        )
    }
}