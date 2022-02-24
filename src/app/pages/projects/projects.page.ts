import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { IgnAlbaService } from 'src/app/services/ign-alba.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  projects:any[];
  constructor(private http: HttpClient,public gService : IgnAlbaService, public router:Router, private loadingCtrl: LoadingController) {}

  ngOnInit() {
      this.getProjects();
  }


  getProjects(){
    this.gService.getProjects()
  .then((res: any) => {
    this.projects=res;
      console.log(res);
    })
}
}
