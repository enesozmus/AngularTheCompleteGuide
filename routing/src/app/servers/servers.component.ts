import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  public servers: { id: number, name: string, status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReloadPage() {
    // this.router.navigate(['servers']);
    // this.router.navigate(['/servers']);
    this.router.navigate(['../servers'], { relativeTo: this.activatedRoute });

    /**
     * One of the configurations is the relativeTo property.
     * We define on which route this link should be loaded,
     * and by default this is always the root domain.
     */
  }

}
