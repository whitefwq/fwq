// 复制功能
function copyAddress() {
    const addressInput = document.getElementById("serverAddress");
    addressInput.select();
    document.execCommand("copy");
    
    const copyBtn = document.querySelector('.copy-btn');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i> 已复制';
    
    setTimeout(() => {
        copyBtn.innerHTML = originalText;
    }, 3000);
}

// 表单处理
document.getElementById("orgRegistration")?.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const orgName = document.getElementById("orgName").value;
    const leaderName = document.getElementById("leaderName").value;
    
    setTimeout(() => {
        alert(`感谢${leaderName}提交"${orgName}"的组织报备申请！\n我们将在24小时内通过您提供的联系方式与您联系。`);
        this.reset();
    }, 500);
});

// 服务器状态更新
function updateServerStatus() {
    const isOnline = true;
    const statusElement = document.getElementById("serverStatus");
    
    statusElement.className = isOnline ? 
        "server-status online" : 
        "server-status offline";
}

// 数字动画
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

// 初始化
window.onload = function() {
    updateServerStatus();
    setInterval(updateServerStatus, 60000);
    
    animateValue("totalPlayers", 0, 5842, 2000);
    animateValue("totalBuilds", 0, 1276, 2000);
    animateValue("runningDays", 0, 1825, 2000);
    animateValue("totalEvents", 0, 78, 2000);
};