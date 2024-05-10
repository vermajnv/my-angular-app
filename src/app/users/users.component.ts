import {Component} from '@angular/core'

@Component({
    selector : 'app-users',
    templateUrl : './users.component.html'
})

export class UsersComponent {
    allowAddUser = false;
    userName : string;
    userObj : {name : string, email : string | null};
    users : {name : string, email : string}[] = [
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

    onSubmitUser()
    {
        this.userObj = { name : this.userName, email : this.userName}
        this.users.push(this.userObj)
    }
}