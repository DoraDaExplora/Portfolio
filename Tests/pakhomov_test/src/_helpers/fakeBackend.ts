localStorage.setItem('users', JSON.stringify([{
    userName: 'name',
    userPassword: 'password'
},
{
    userName: 'name1',
    userPassword: 'password1'
}]));

let users = JSON.parse(localStorage.getItem('users'));


export function configureFakeBackend() {
    window.fetch = (url:any, opts:any) => {
        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {

                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    let params:any = JSON.parse(opts.body);

                    //auth
                    let filteredUsers = users.filter((user: { userName: any; userPassword: any; }) => {
                        return user.userName === params.userName && user.userPassword === params.userPassword;
                    });

                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        let responseJson = {
                            userName: user.userName,
                            userPassword: user.userPassword,
                            token: '86fasfgfsogHGad'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson))});
                    } else {
                        reject('Почта или пароль неверны');
                    }

                }
                
                return;
            }, 0);
        });
    }
}