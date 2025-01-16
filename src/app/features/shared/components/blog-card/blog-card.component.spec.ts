import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogCardComponent } from './blog-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { BlogEntryOverview, BlogEntryOverviewSchema } from '../../../../models/blog.model';
import { WritableSignal, signal } from '@angular/core';

describe('BlogCardComponent', () => {
  let component: BlogCardComponent;
  let fixture: ComponentFixture<BlogCardComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockBlogEntry: WritableSignal<BlogEntryOverview | null>;
  let mockSelectedBlogId: WritableSignal<number | null>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockBlogEntry = signal<BlogEntryOverview | null>({
      id: 1,
      title: 'Test Blog',
      contentPreview: 'This is a preview.',
      author: 'John Doe',
      likes: 5,
      comments: 2,
      likedByMe: false,
      createdByMe: false,
      createdAt: '2025-01-01T10:00:00Z',
      updatedAt: '2025-01-10T12:00:00Z',
      headerImageUrl: 'assets/images/test.jpg',
    });
    mockSelectedBlogId = signal<number | null>(null);

    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatButtonModule, BlogCardComponent],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogCardComponent);
    component = fixture.componentInstance;
    component.blogEntry = mockBlogEntry;
    component.selectedBlogId = mockSelectedBlogId;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the blog title and author', () => {
    const title = fixture.debugElement.query(By.css('.blog-card-title')).nativeElement.textContent;
    const author = fixture.debugElement.query(By.css('mat-card-subtitle')).nativeElement.textContent;

    expect(title).toContain('Test Blog');
    expect(author).toContain('John Doe');
  });

  it('should display the header image if available', () => {
    const img = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('assets/images/test.jpg');
  });

  it('should use the default image if headerImageUrl is not provided', () => {
    const updatedMockBlogEntry: BlogEntryOverview = {
      id: 1,
      title: 'Test Title',
      contentPreview: 'Test Preview',
      author: 'Test Author',
      likes: 10,
      comments: 5,
      likedByMe: false,
      createdByMe: false,
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-02T00:00:00Z',
      headerImageUrl: undefined, // Omitting the image URL
    };

    mockBlogEntry.set(updatedMockBlogEntry); // Pass the updated object
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('assets/images/default_header_img.jpg');
  });

  it('should navigate to the blog detail page on "More" button click', () => {
    const button = fixture.debugElement.query(By.css('.button--primary')).nativeElement;
    button.click();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/blogs', 1]);
    expect(mockSelectedBlogId()).toBe(1);
  });

  it('should validate the mocked data using BlogEntryOverviewSchema', () => {
    const validationResult = BlogEntryOverviewSchema.safeParse(mockBlogEntry());
    expect(validationResult.success).toBeTrue();
    if (!validationResult.success) {
      console.error(validationResult.error);
    }
  });
});
