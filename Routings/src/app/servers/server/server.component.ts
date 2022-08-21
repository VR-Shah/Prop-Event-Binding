import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string} |any;

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);

    this.route.params.subscribe((param:Params) =>{
      this.server = this.serversService.getServer(+param['id']);
    })
  }

  EditServer(){
    this.router.navigate(['edit'],{ relativeTo:this.route,queryParamsHandling:'preserve'});//angular know on which router 
    //prserve the previous url in browser with new url queryParams do not loss it
  }
}
