export interface User {
    name: string;
    id: number;
    status?: string; // attribut facultatif
  }

  const user : User = {
    name: "Alice",
    id: 1,
  };

  function showStatus(user:User):string | void{
    if (user.status) {
       return user.status 
    }
  }

  