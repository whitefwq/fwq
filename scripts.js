//检测设备类型

function device() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // 检查userAgent中是否包含常见的移动设备标识
    if (/android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())) {
        // 如果是pe 返回'pe'
        return 'PE';
    } else {
        // 否则 认为是pc
        return 'PC';
    }
}
/*
// 使用该函数来重定向用户
function redirectBasedOnDeviceType() {
    const deviceType = device();
    
    if (deviceType === 'PC') {
        // 如果是桌面设备，重定向到/pc
        window.location.href = '/pc';
    } else if (deviceType === 'PE') {
        // 如果是移动设备，重定向到/pe
        window.location.href = '/pe';
    }
}
*/
// 名人名言API
    const mingrenAPI = 'https://v.api.aa1.cn/api/api-wenan-mingrenmingyan/index.php?aa1=text';
        
    // 获取名人名言
async function fetchMingrenQuote() {
    try {
        const response = await fetch(mingrenAPI);
        const data = await response.text();
        document.getElementById('responseContent').textContent = data;
    } catch (error) {
        console.error('获取名人名言失败:', error);
        document.getElementById('responseContent').textContent = '名人名言加载失败，请稍后再试';
    }
}
        
// 页面加载时获取名人名言
window.addEventListener('DOMContentLoaded', fetchMingrenQuote);
// 在页面加载完成后执行重定向函数
window.onload = redirectBasedOnDeviceType;
