export class Personnne {
login : string; 
password: string ; 
img:string;
nbprod:number;
mail:string;
name:string;
constructor(login : string , password: string , img:string, nbprod:number,mail:string,name:string)
{this.login=login;
    this.password=password;
    this.img=img;
    this.nbprod=nbprod;
    this.mail=mail;
    this.name=name;

}
}