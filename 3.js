const users = [
    {age:"18", name:"Egor"},
    {age:"15", name:"I"},
    {age:"32", name:"John"}];
const filteredUsers = users.filter((user) =>{
    return user.age >=18;
});
let filteredNames = [];
for(let i = 0;i < filteredUsers.length; i++){
  filteredNames.push(filteredUsers[i].name)
};
console.log(filteredNames)