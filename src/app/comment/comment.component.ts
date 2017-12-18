import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { commentaire } from './comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
tabcomment : commentaire [];
@Input ()id :number ; 
  constructor(private comm : CommentService) { }
find (id:number, p:commentaire []):commentaire[] {
  console.log("dans find")
  let tab:commentaire[]=[]
  console.log("the length of p "+ p.length)
  for (let comment of p)
  { console.log(comment.body +'helooooooooo the body')
     if (comment.id==id )
     { console.log('helooooooooo the body found it')
       tab.push(comment)

     }
  }
  this.tabcomment=tab;
return tab
}
  ngOnInit() {
    console.log("this is the id"+ this.id)

    this.tabcomment=this.comm.commentaire;
    this.find(this.id,this.tabcomment);
  }

}
