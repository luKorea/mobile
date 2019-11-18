window.onresize = function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 48 + 'px';
};
window.onresize();

import axios from 'axios';


async function getUser() {
    let data = await axios.get('/api/profile');
    return data;
}

function Request({url, method, data}) {
    return new Promise(((resolve, reject) => {
        axios.get({url, method}, data)
            .then(res => {
                resolve(res)
            }).catch(err => {reject(err)})
    }));
}

// 个人信息
getProfile();
getUser();