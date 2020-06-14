const url = "https://v1.jinrishici.com/all.json"

// Promise函数
export const getPoetry = () =>
    fetch(url, {
        method: "GET",
        headers: {
            "accept": "text/html"
        },
        credentials: "same-origin"
    })
        .then(response => response.json())
        .then(text => [text.origin, text.author, text.content])
        .catch(err => console.log(err))

// async 函数
// export const getPoetry = async () => {
//     const res = await fetch(url, {method: 'GET'});
//     const data = await res.json();
//     return [data.origin, data.author, data.content];
// }






// 草稿
// export const getPoetry = () => {
//     // return new Promise((resolve, reject) => {
//     //     setTimeout(() => {
//     //         resolve(['送张舍人之江东', '李白', '天清一雁远，海阔孤帆迟。']);
//     //     }, 10);
//     // });
//     // let a
//     // setTimeout(() => {
//     //             a = ['送张舍人之江东', '李白', '天清一雁远，海阔孤帆迟。'];
//     //         }, 10);
//     // return a;
// }

// export const getPoetry = () => {
//     return new Promise((resolve, reject) => {
//         fetch(url, {
//             method: "GET",
//             headers: {
//                 "accept": "text/html"
//             },
//             credentials: "same-origin"
//         })
//             .then(response => response.json())
//             .then(text => {
//                 resolve([text.origin, text.author, text.content])
//             })
//             .catch(err => reject(err))
//     })
// }
