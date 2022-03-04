import { logging } from 'near-sdk-as'
import { User, Users, VideoGame, VideoGames } from "./Models";

export function Prueba(): string {
  return "Si retorna este mensaje entonces funciona bien :D!!";
}
//----------------------------Metodos del smart contract de Users----------------------------//
export function RegistrarUsuario(UserId: string, Email: string): void{
  assert(UserId.length > 0, "Introduce un Id de la cuenta");
  assert(Email.length > 0, "Introduce un Email");

  Users.push(new User(UserId, Email));
}
export function ConsultarUsuarios(): Array<User>{
  let result = new Array<User>(Users.length);
  
  for (let i = 0; i < Users.length; i++)
    result[i] = Users[i];

  return result;
}
export function ConsultarUsuario(UserId : string): User | null{
    assert(UserId.length > 0, "Introduce una cuenta");

    for (let i = 0; i < Users.length; i++)
      if (Users[i].UserId == UserId)
        return Users[i];

    return null;
}

//----------------------------Metodos del smart contract de VideoGames----------------------------//
export function RegistrarVideojuego(Name: string, Price: string): void{
  assert(Name.length > 0, "Introduce un Id del videojuego");
  assert(Price.length > 0, "Introduce un Precio real");
  VideoGames.push(new VideoGame(Name, Price));
}
export function ConsultarVideojuegos(): Array<VideoGame>{
  let result = new Array<VideoGame>(VideoGames.length);
  
  for (let i = 0; i < VideoGames.length; i++)
    result[i] = VideoGames[i];

  return result;
}
export function ConsultarVideojuego(Name : string): VideoGame | null{
  assert(Name.length > 0, "Introduce un nombre");

  for (let i = 0; i < VideoGames.length; i++)
    if (VideoGames[i].Name == Name)
      return VideoGames[i];
      
  return null;
}
/*export function ComprarVideojuego(UserId: string, VideogameName : string): void{
  let user = ConsultarUsuario(UserId);
  if(user != null)
    user.MyVideoGames.push(VideogameName);
}*/