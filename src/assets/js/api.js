async function getGroup(link) {

    return new Promise(async (resolve, reject) => {
        try {
            const result = await fetch("http://localhost:3001/users/group_invitation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ link })
            })

            const data = await result.json();
            if (data.success) {
                resolve(data)

            } else {
                reject(data)

            }
        } catch (error) {
            reject(error)
        }
    }
    )
}


// return new Promise(async (resolve, reject) => {
//     try {
//         const result = await fetch("http://localhost:3001/users/group_invitation", {
//             method: "POST",
//             body: {
//                 link: "https://chat.whatsapp.com/EnkKB3zNwoTHlgoBciSmkn"
//             }
//         })
//         resolve(result)
//     } catch (error) {
//         reject(error)
//     }
// }
// )