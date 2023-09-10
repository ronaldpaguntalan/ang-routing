import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {

  constructor( private route: ActivatedRoute ){}
  ngOnInit(): void{
    this.route.paramMap.subscribe(value => {

      let id = value.get('id');
      const title = value.get('title');
      console.log(id);
      console.log(title)

    })
  }

}
