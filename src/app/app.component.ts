import {Component} from '@angular/core';
import {Ng4TwitterTimelineService} from 'ng4-twitter-timeline/lib/index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public completeListener(item) {
    console.log(item);
    return true;
  }


  /**
   * Each item will have title,content,complete flag and icon
   * which will be displayed on the side. Icon is in html
   */
  public timelineData: Array<Object> = [
    {
      title: '2012',
      icon: '<i class="fa fa-home"></i>',
      content: '2012',
      complete: true
    },
    {
      title: '2013',
      icon: '<i class="fa fa-home"></i>',
      content: '2013',
      complete: false
    },
    {
      title: '2014',
      icon: '<i class="fa fa-home"></i>',
      content: '',
      complete: false
    },
    {
      title: '2015',
      icon: '<i class="fa fa-home"></i>',
      content: 'Following step to complete',
      complete: false
    }
  ];
}
