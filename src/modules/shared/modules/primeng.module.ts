import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {StyleClassModule} from 'primeng/styleclass';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PasswordModule } from 'primeng/password';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuModule } from 'primeng/menu';
import { DataViewModule } from 'primeng/dataview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DragDropModule } from 'primeng/dragdrop';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { InputMaskModule } from 'primeng/inputmask';
import { ScrollTopModule } from 'primeng/scrolltop';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ChipsModule } from 'primeng/chips';
import { PickListModule } from 'primeng/picklist';
import { ListboxModule } from 'primeng/listbox';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ChipModule } from 'primeng/chip';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { StepsModule } from 'primeng/steps';
import { EditorModule } from 'primeng/editor';
import { PaginatorModule } from 'primeng/paginator';
import { TabMenuModule } from 'primeng/tabmenu';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    MenubarModule,
    InputTextModule,
    InputMaskModule,
    InputNumberModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ToastModule,
    MultiSelectModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    DropdownModule,
    RatingModule,
    RadioButtonModule,
    CardModule,
    PasswordModule,
    ScrollTopModule,
    PanelModule,
    OverlayPanelModule,
    DataViewModule,
    KeyFilterModule,
    MessageModule,
    CheckboxModule,
    DragDropModule,
    DividerModule,
    TooltipModule,
    MenuModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    TabViewModule,
    ChipsModule,
    InputSwitchModule,
    PickListModule,
    ListboxModule,
    TieredMenuModule,
    SidebarModule,
    AccordionModule,
    ChipModule,
    SplitterModule,
    ScrollPanelModule,
    ProgressSpinnerModule,
    TagModule,
    CalendarModule,
    CascadeSelectModule,
    StepsModule,
    EditorModule,
    PaginatorModule,
    TabMenuModule,
    SkeletonModule,
    StyleClassModule,
    CarouselModule
  ],
  providers: [MessageService, ConfirmationService],
})
export class PrimeNgModule {}
