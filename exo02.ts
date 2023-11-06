import { User } from "./exo01"

const users:User[] = []

function AddUser(userName:string ,id:number ,status?:string){
    let newUser: User = {
        name:userName,
        id:id,
        status:status
    }
    users.push(newUser)
}