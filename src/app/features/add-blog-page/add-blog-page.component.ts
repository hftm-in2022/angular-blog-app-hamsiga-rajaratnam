import { Component, WritableSignal, signal } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { BlogService } from '../../services/blog.service';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatInput, MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-add-blog-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    NgIf,
    TranslatePipe,
  ],
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.scss'],
})
export class AddBlogPageComponent {
  blogForm: FormGroup;
  isLoading: WritableSignal<boolean> = signal(false);

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) {
    this.blogForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      headerImageUrl: [''],
    });
  }

  get title() {
    return this.blogForm.get('title');
  }

  get content() {
    return this.blogForm.get('content');
  }

  onSubmit(): void {
    if (this.blogForm.valid) {
      this.isLoading.set(true);
      const newBlog = this.blogForm.value;

      this.blogService.savePost(newBlog).subscribe({
        next: () => {
          this.isLoading.set(false);
          this.router.navigate(['/']).then(r => {}); // Redirect to home
        },
        error: (err) => {
          this.isLoading.set(false);
          console.error('Failed to create blog:', err);
        },
      });
    }
  }

  resetForm(): void {
    this.blogForm.reset();
  }
}
