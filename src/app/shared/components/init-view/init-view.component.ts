import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-init-view',
  standalone: true,
  imports: [],
  templateUrl: './init-view.component.html',
  styleUrl: './init-view.component.scss'
})
export class InitViewComponent implements OnInit {
  title = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
 }
}
