import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {
  @Input() posts=[];
 

  constructor() { }
  ondelete(idx:number){
    this.posts.splice(idx,1);
  }
  ngOnInit() {

 }

}
