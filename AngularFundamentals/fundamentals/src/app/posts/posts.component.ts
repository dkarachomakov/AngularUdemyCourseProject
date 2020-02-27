import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


@Component({
	selector: 'posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

	posts: any[];

	constructor(private postService: PostService) { }

	ngOnInit() {
		this.postService.getAll().subscribe(posts => this.posts = posts);
	}

	createPost(input: HTMLInputElement) {
		let post = { title: input.value };
		this.posts.splice(0, 0, post);

		this.postService.create(post).subscribe(newPost => {
			post['id'] = newPost.id;
		}, error => {
			this.posts.splice(0, 1);

			if (error instanceof BadInput) {
				//this.form.setErrors(error.originalError);
			}
			else throw error;
		});

		input.value = "";
	}

	updatePost(post) {
		this.postService.update(post)
			.subscribe(updatedPost => {
				console.log(updatedPost);
			});
	}

	deletePost(post) {

		let index = this.posts.indexOf(post);
		this.posts.splice(index, 1);

		this.postService.delete(post.id)
			.subscribe(null,
				(error: AppError) => {
					this.posts.splice(index, 0, post);

					if (error instanceof NotFoundError)
						alert('This post has already been deleted.');
					else throw error;
				})
			;
	}

}
