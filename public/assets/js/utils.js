// async function getUsers() {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Cookie", "wa_lang_pref=ur");

//     // myHeaders.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5501/');
//     myHeaders.append('Access-Control-Allow-Credentials', 'true');

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         redirect: 'follow',
//         body: {
//             link: "https://chat.whatsapp.com/EnkKB3zNwoTHlgoBciSmkn"
//         }
//     };

//     // fetch("http://localhost:3001/users/group_invitation", requestOptions)
//     //     .then(response => response.text())
//     //     .then(result => console.log({ result }))
//     //     .catch(error => console.log('error', error));
//     console.log("runing");
// }
// export async function getGroup(link) {
//     let users = await getUsers(link);
//     let html = '';
//     console.log({ users });

//     // let container = document.querySelector('.show_group');
//     // container.innerHTML = html;
// }
