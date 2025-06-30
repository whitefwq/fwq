function showMinecraftServerStatus(address) {
    fetch("https://api.mcsrvstat.us/3/" + address).then((response) => response.json()).then(function(data) {
        document.getElementById("favicon").href = data["icon"];
        let serverStatus = document.getElementById("serverStatus");
        let online = document.createElement("span");
        online.style.fontWeight = "bold";
        online.innerText = data["version"] + "版本 > " + data["players"]["online"] + "人在线 | 最大" + data["players"]["max"];
        serverStatus.appendChild(online);
    });
}
const mcjeAddressInput = document.getElementById("mcjeAddress");
showMinecraftServerStatus(mcjeAddressInput.value);