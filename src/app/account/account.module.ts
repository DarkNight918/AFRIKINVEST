import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule, RoutingComponents } from './account-routing.module';

@NgModule({
    declarations: [
        RoutingComponents
    ],
    imports: [
        CommonModule,
        AccountRoutingModule
    ],
    providers: []
})
export class AccountModule { }