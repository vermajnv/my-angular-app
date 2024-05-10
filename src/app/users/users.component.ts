import {Component} from '@angular/core'

@Component({
    selector : 'app-users',
    templateUrl : './users.component.html'
})

export class UsersComponent {
    allowAddUser = false;
    userName : string = 'Nayan';
    users : object = [
        {
            name : 'Nayan',
            email : 'nayan@gmail.com'
        },
        {
            name : 'Golu',
            email : 'golu@gmail.com'
        }
    ];

    constructor()
    {
        setTimeout(() => {
            console.log(this);
            this.allowAddUser = true
        }, 2000)
    }

    onCreateUser() {

    }
}