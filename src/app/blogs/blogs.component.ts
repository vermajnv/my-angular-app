import { Component } from "@angular/core";

type blogType = {title : string, description : string}[];

@Component({
    selector : 'app-blogs',
    templateUrl : './blogs.component.html',
    styleUrls : ['./blogs.component.css']
})

export class BlogsComponent {
    inputTitle : string = '';
    addButtonStatus : boolean = false;
    blogs : blogType = [ 
        {
            title : 'First blog',
            description : 'This is descrption for first blog'
        },
        {
            title : 'Second Blog',
            description : 'Description for second blog is here'
        }
    ];

    addTitle()
    {
        this.blogs.push({ title : this.inputTitle, description : 'Description'})
        this.inputTitle = '';
        // this.changeButtonStatus()
    }
    
    // changeButtonStatus()
    // {
    //     if(this.inputTitle.length > 0)
    //     {
    //         return this.addButtonStatus = true;
    //     }
    //     return this.addButtonStatus = false
    // }
}
