import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent {
    name: string;
    email: string;
    address: Address
    hobbies: string[]
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        this.name = 'Jame B';
        this.email = 'james@bombey.com';
        this.address = {
            street: '12 main street',
            city: 'boston',
            state: 'MA'
        }
        this.hobbies = ['Music', 'Movies', 'Sport'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        })
    }

    toggleHobbies() {
        this.showHobbies = this.showHobbies ? false : true;
    }

    addHobby(hobby: string) {
        this.hobbies.push(hobby);
    }

    deleteHobby(i: number) {
        this.hobbies.splice(i, 1);
    }

}

interface Address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    email: string;
    name: string;
    body: string;
}