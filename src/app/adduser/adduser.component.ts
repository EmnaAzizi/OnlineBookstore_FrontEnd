import { Component, OnInit ,NgZone} from '@angular/core';
import { LoginpersService } from '../loginpers.service';
import { IPersonne } from '../login/personne';
import { Personnne } from '../login/personnee';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
name : string ="";
username : string ="";
mail : string ="";
password : string ="";
password1 : string ="";
personnes:IPersonne[];
image:string="";
find (x:string):boolean
{let P:IPersonne[]=[]
  P=this.personnes;
for (let pers of P)
{
    if (pers.login==x)
    {return true;}
}
return false ;
}

adduser() {
  console.log(this.password +"*****"+this.password1);
if ( this.password!=this.password1)
{alert ("PASSWORD MISMATCH");}
else if (this.find(this.username)==true)
{alert ("CHANGE USERNAME , USER ALREADY EXISTS")}
else {
 let PP=new Personnne(this.username,this.password,this.image,0,this.mail,this.name);
this.logservice.PostPersonne(PP).subscribe(x=> this.personnes=x);
alert("USER "+ this.username + " HAS BEEN ADDED ! YOU CAN NOW LOGIN");
this.zone.runOutsideAngular(() => {
  location.reload();
});
}
}
  constructor(private logservice:LoginpersService,public zone: NgZone ) { }

  ngOnInit() {
    this.logservice.getPersonne()
    .subscribe(
    productss => {
    this.personnes=productss});

  }


}
