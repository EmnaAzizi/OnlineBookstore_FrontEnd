import { Injectable } from '@angular/core';
import { commentaire } from './comment/comment';

@Injectable()
export class CommentService {
  commentaire : commentaire[]=[] ;
  constructor() { }

}
