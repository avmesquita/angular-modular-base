import { Component } from '@angular/core';
import { CarouselPageEvent } from 'primeng/carousel';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ICarousel } from 'src/modules/shared/interrfaces/icarousel.interface';
import { CarouselService } from 'src/modules/shared/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  responsiveOptions: any[] | undefined;
  carouselItems: any[] = [];

  private carousels: BehaviorSubject<ICarousel[]> = new BehaviorSubject<ICarousel[]>([]);
  public carousels$ = this.carousels.asObservable();

  constructor(protected carouselService: CarouselService) {
    this.responsiveOptions = [
      /*
      {
          //breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      */
    ];
    this.loadData();
  }

  private convertToCarouselItem(item: ICarousel): any {
    return {
        uuid: item.uuid,
        title: item.title,
        description: item.subtitle,
        image: item.image,
        link: item.routelink,
        backgroundImage: item.backgroundImage,        
        subtitle: item.subtitle,
        routelink: item.routelink,
        order: item.order
      }
  }

  private loadData(): void {
    try {
      /*
      if (environment.production) {
        
        this.carouselService.lookupAll().subscribe(
          (response: any) => {
            this.carousels.next(response.data);
            
            this.carouselItems = [];
            response.data.forEach( (item: ICarousel) => {            
              this.carouselItems.push(
                this.convertToCarouselItem(item)
              )
            });
            
        },(error)=> {this.carousels.next([])});    
      } else {
        */     
        this.carouselService.getAllFake().subscribe(
          (response: any) => {
            this.carousels.next(response);
            this.carouselItems = [];
            response.forEach( (item: ICarousel) => {
              this.carouselItems.push(
                this.convertToCarouselItem(item)
              )
            });            
        },(error)=> {this.carousels.next([])});
        /*
      }
      */      
    } catch (error) {
      this.carousels.next([]);
    }
  }

  public getFormatedDate(d: Date): string {
    return d.toLocaleString('en-GB', { timeZone: 'UTC' });
  }

  public onPage(event: CarouselPageEvent) {
    console.log(event.page);
  }

  public getColor(color: string): string {
    return 'color: ' + color;
  }
}
