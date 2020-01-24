let users = JSON.parse(localStorage.getItem('users')!) || []; //Восклицательный знак для того, чтобы не было одного заковыристого эррора. Мы делаем вид, что уверены в невозможности возвращения null
    
export function configureFakeBackend() {
    window.fetch = function (url, opts) {
        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                let params = JSON.parse(JSON.stringify(opts.body));
                let filteredUsers = users.filter((user: any) => {
                    return user.userName === params.userName && user.userPassword === params.userPassword;
                });

                if (filteredUsers.length) {
                    let user = filteredUsers[0];
                    let responseJson = {
                        id: user.id,
                        userName: user.userName,
                        token: '86fasfgfsogHGad'
                    };
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                } else {
                    reject('Почта или пароль неверны');
                }

                return;
            }, 500);
        });
    }
}