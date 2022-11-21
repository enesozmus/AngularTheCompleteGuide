import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { ServersService } from 'src/app/services/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  server: { id: number, name: string, status: string };

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.server = data['server'];
    }
    );
    /*
    const id = +this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
    */
  }

  onEdit() {
    //this.router.navigate(['/servers', this.server.id, 'edit']);
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' });
  }

}
