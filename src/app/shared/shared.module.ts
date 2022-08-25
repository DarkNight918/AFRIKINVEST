import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
    declarations: [FilterComponent, PaginationComponent],
    imports: [
        CommonModule
    ],
    exports: [FilterComponent, PaginationComponent]
})
export class SharedModule { }