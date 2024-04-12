import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHeaderItem } from '../interfaces/iheader-item.interface';

@Injectable({
  providedIn: 'root'
})
export class HeaderMenuService {

    private menu: BehaviorSubject<IHeaderItem[]> = new BehaviorSubject<IHeaderItem[]>([]);
    public menu$ = this.menu.asObservable();

    private rightMenu: BehaviorSubject<IHeaderItem[]> = new BehaviorSubject<IHeaderItem[]>([]);
    public rightMenu$ = this.rightMenu.asObservable();

    protected menuItems: IHeaderItem[] = [
        {
            label: 'Home',
            route: '/'      
        }
    ];

    protected rightMenuItems: IHeaderItem[] = [
        {
            label: 'Contact',
            route: '/contact'
        },
        {
            label: 'About',
            route: '/about'
        }
    ];

    constructor() {
        this.createMenuItems();
    }

    createMenuItems(): void {
        this.menu.next(this.menuItems);
        this.rightMenu.next(this.rightMenuItems);
    }

}