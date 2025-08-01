//modules
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';





@NgModule({
    declarations: [ AppComponent, 
                    HeaderComponent, 
                    UserComponent, 
                ], //none standalone components should be declared here
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule] //standalone components should be imported here
})
export class AppModule {}