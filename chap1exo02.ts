import { User } from "./chap1exo01"

const users:User[] = []

function AddUser(user:User){
    for (let i = 0; i < users.length; i++) {
        if (user.id !== users[i].id) {
            throw new Error("ID already exists");
        };
    }
    users.push(user)
}