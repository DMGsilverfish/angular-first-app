import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent],
    imports: [CommonModule, FormsModule ,SharedModule ]
})

export class TasksModule {}