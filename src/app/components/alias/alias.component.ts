import { Component, OnInit } from '@angular/core';
import { Alias } from 'src/app/models/alias.model';
import { AliasService } from 'src/app/services/alias.service';

@Component({
  selector: 'app-alias',
  templateUrl: './alias.component.html',
  styleUrls: ['./alias.component.css']
})
export class AliasComponent implements OnInit {
  Aliases: Alias[] = [];
  currentAlias!: Alias;
  alias = " ";
  aliasId = 0;
  reporid = 0;
  count: any;

  constructor(private AliasService: AliasService) { }
  ngOnInit(): void {
    this.retrieveAliases();
  }
  getRequestParams(): any {
    let params: any = {};
    return params;
  }
  retrieveAliases(): void {
    this.AliasService.getAll()
      .subscribe(
        response => {
          const { Aliases, totalItems } = response;
          this.Aliases = Aliases;
           this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}