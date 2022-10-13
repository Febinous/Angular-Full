import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.sass'],
})
export class ReportComponent implements OnInit {
  param: Observable<string | null>;
  constructor(private ar: ActivatedRoute) {
    // const param = this.ar.snapshot.paramMap.get('year');
    // console.log(param);
    this.param = this.ar.paramMap.pipe(map((v) => v.get('year')));
    this.param.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}
}
