import { Component,OnInit } from '@angular/core';
import { Examples } from '../home/schemas.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';







@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  [x: string]: any;
 

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router,) {}
  
  data: any;
  schema: any;
  layout: any;
  
 ngOnInit():void
 {
  const exampleURL = `assets/example-schemas/daily-journal.json`;
  this.http.get(exampleURL,{ responseType:'text'})
    .subscribe(schema => {
      this.jsonFormSchema = schema;
      this.generateForm(this.jsonFormSchema);
    });
 }
  

      generateForm(newFormString: string) 
      {
        if (!newFormString) { return; }
        try {
       
          const value = JSON.parse(newFormString);
          this.data = value.data
          this.schema = value?.schema;
          this.layout = value?.layout;
         
    
    
        
        
        }
        catch (jsonError) {
          try {
           
            const newFormObject: any = null;
         
            eval('newFormObject = ' + newFormString);
         
            this.jsonFormObject = newFormObject;
            this.jsonFormValid = true;
          }
          catch (javascriptError) {
    
          
          
          }
        }
  
      }
    
}
