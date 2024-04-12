export interface ICarousel {
    id: number;
    uuid?: string;
    name: string;
    title: string;
    titleColor: string;
    subtitle: string;
    subtitleColor: string;
    image: string;
    backgroundImage: string;
    routelink: string;
    order: number;
    active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}