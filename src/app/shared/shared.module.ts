import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent] //make available to other modules
})

export class SharedModule {

}