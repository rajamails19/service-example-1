import { Component, OnInit  } from '@angular/core';
import { HttpDataService } from './http-data.service';
import { Observable, of } from 'rxjs';
import { SharedataService } from './sharedata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  data: any;
  title = 'CodeSandbox';
  outputData$: Observable<string> | undefined;
  parentData = 'Data from Parent Component';
  sharedData: any;

  handleOutputData(data: Observable<string>) {
    this.outputData$ = data; // Assign the emitted Observable to outputData$
    this.outputData$.subscribe((data) => {
      console.log('Data received from child:', data);
    });
  }

  constructor(private httpDataService: HttpDataService, 
    public sharedDataService: SharedataService) {}

  ngOnInit() {

    // this.outputData$ = of('Data from Child Component');
    
    // this.httpDataService.getData().subscribe((result) => {
    //   this.data = result;
    // });
   
    this.sharedDataService.
    setData({ message: 'Hello from ohh cool roii Shared Service' });
    
  }

  postData() {
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    this.httpDataService.postData(data).subscribe((result) => {
      console.log('POST request successful:', result);
    });

  }

  putData() {
    const data = {
      id: 1,
      title: 'fooChanged',
      body: 'barChanged',
      userId: 1
    };

    this.httpDataService.putData(data).subscribe((result) => {
      console.log('PUT request successful:', result);
    });    
  }

  deleteData(id: number) {
    this.httpDataService.deleteData(id).subscribe(() => {
      console.log(`DELETE request successful for ID: ${id}`);
    });
  } 
}
