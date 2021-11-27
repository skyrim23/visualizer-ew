import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css'],
})
export class SymbolComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  public symbolName: string | null;
  ngOnInit(): void {
    this.symbolName = this.activatedRoute.snapshot.paramMap.get('symbolName');
  }
}
