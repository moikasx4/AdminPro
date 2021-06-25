import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  titulo: string;
  tituloSubs$: Subscription;
  constructor( private router: Router) {

   this.tituloSubs$ =  this.getArgumentoRuta()
                                         .subscribe( ({titulo}) => {
                                          console.log( titulo);
                                          this.titulo = titulo;
                                          document.title = `AdminPro -  ${titulo}`;
  });
   }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
    throw new Error('Method not implemented.');
  }

 getArgumentoRuta(): Observable<any> {
   return this.router.events.pipe(
    filter(event => event instanceof ActivationEnd),
    filter( (event: ActivationEnd) => event.snapshot.firstChild == null),
    map( (event: ActivationEnd) => event.snapshot.data),
  );
 }
}
