import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-routing';

  constructor( private router:Router){}

  ngOnInit(){
    const obsTest$ = new Observable( observer => {
      observer.next('Return From 1st Observable'); // synchronously programming will output the value in sequence
      observer.next('Return From 2nd Observable');
      
      
      setTimeout( ()=>{
        observer.next ('This is timeout function')
      }, 2000) // program will not wait for this to load for as the 3rd observable will be loaded (asynchronus programming)

      observer.next('Return From 3rd Observable'); //Observable can return as many as we want
    }).subscribe( value => {
      console.log(value);
    });
    
    obsTest$.unsubscribe();


    const obsTest = function() {
      return 'Return From Function';
      return 'Retutn again from Function' //we cannot return as much as we want, js only reads the first return statement
    }
    const returnData = obsTest();

    console.log(returnData);
    
  }

  onSubmit(){
    // this.router.navigate(['/posts']); 

    // this.router.navigate(['/post', 1, 'postTitle'])

    this.router.navigate(['/posts'], {
      queryParams: {
        page: 1, 
        order: 'newest'
      }
    })

  }
}
