import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postList = [
    {
      title: 'Mon premier post',
      content: 'Quibus ita sceleste patratis Paulus cruore perfusus reversusque ad principis castra multos coopertos paene catenis adduxit in squalorem deiectos atque maestitiam, quorum adventu ',
      loveIts: 2,
      created_at: '2018-10-05 12:05'
    },
    {
      title: 'Mon deuxième post',
      content: 'Quibus ita sceleste patratis Paulus cruore perfusus reversusque ad principis castra multos coopertos paene catenis adduxit in squalorem deiectos atque maestitiam, quorum adventu ',
      loveIts: -1,
      created_at: '2019-01-01 15:25'
    },
    {
      title: 'Encore un post',
      content: 'Quibus ita sceleste patratis Paulus cruore perfusus reversusque ad principis castra multos coopertos paene catenis adduxit in squalorem deiectos atque maestitiam, quorum adventu ',
      loveIts: 0,
      created_at: '2019-05-23 9:12:00'
    },
  ];
  
}
