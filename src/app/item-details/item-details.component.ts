import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  id: any;

  constructor(private router: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    // this.id = this.router.snapshot.params.id;
    this.router.params.subscribe((x) => {
      this.id = x.id;
    });
  }

  ngOnDestroy(): void {
  }


  goToItem3() {
    this.route.navigate(['details', 3]);
  }
}
