import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  
    
  @Output() postCreated = new EventEmitter();
 
  enteredtitle=" ";
  
  enteredTitle = "";
  

newPost="No Content";

onAddPost(){
    const post = {
      title: this.enteredTitle, 
     
    };
    console.log(post);
    this.postCreated.emit(post);
}
m:string[]=[];
delete(){
this.postCreated.emit(null);
}
  constructor() { }

  ngOnInit() {
  }
  

}
