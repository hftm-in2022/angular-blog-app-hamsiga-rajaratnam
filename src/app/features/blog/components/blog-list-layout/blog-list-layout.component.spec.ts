import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogListLayoutComponent } from './blog-list-layout.component';
import { BlogCardComponent } from '../../../shared/components/blog-card/blog-card.component';
import { BlogEntryOverview } from '../../../../models/blog.model';
import { By } from '@angular/platform-browser';
import { WritableSignal, signal } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlogState } from '../../state/blog.state';

describe('BlogListLayoutComponent', () => {
  let component: BlogListLayoutComponent;
  let fixture: ComponentFixture<BlogListLayoutComponent>;
  let mockBlogEntries: WritableSignal<BlogEntryOverview[]>;
  let mockIsLoading: WritableSignal<boolean>;
  let mockSelectedBlogId: WritableSignal<number | null>;
  let mockBlogState: jasmine.SpyObj<BlogState>;

  beforeEach(async () => {
    mockBlogEntries = signal<BlogEntryOverview[]>([
      {
        id: 1,
        title: 'Test Blog',
        contentPreview: 'Preview Content',
        author: 'John Doe',
        likes: 10,
        comments: 5,
        likedByMe: false,
        createdByMe: false,
        createdAt: '2023-01-01T10:00:00Z',
        updatedAt: '2023-01-02T10:00:00Z',
        headerImageUrl: 'assets/images/test.jpg',
      },
    ]);
    mockIsLoading = signal<boolean>(false);
    mockSelectedBlogId = signal<number | null>(null);

    mockBlogState = jasmine.createSpyObj('BlogState', ['fetchBlogEntries'], {
      blogEntries: mockBlogEntries,
      isLoading: mockIsLoading,
      selectedBlogId: mockSelectedBlogId,
    });

    await TestBed.configureTestingModule({
      imports: [BlogListLayoutComponent, HttpClientTestingModule],
      providers: [{ provide: BlogState, useValue: mockBlogState }],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogListLayoutComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchBlogEntries on initialization', () => {
    expect(mockBlogState.fetchBlogEntries).toHaveBeenCalled();
  });

  it('should display blog entries when available', () => {
    const blogCards = fixture.debugElement.queryAll(By.directive(BlogCardComponent));
    expect(blogCards.length).toBe(mockBlogEntries().length);
  });

  it('should display a loading spinner when isLoading is true', () => {
    mockIsLoading.set(true);
    fixture.detectChanges();

    const spinner = fixture.debugElement.query(By.css('.loading-spinner'));
    expect(spinner).toBeTruthy();
  });

  it('should display a no entries message when blogEntries is empty', () => {
    mockBlogEntries.set([]);
    fixture.detectChanges();

    const noEntriesMessage = fixture.debugElement.query(By.css('.no-entries-container'));
    expect(noEntriesMessage).toBeTruthy();
  });

  it('should handle null blogEntries gracefully', () => {
    mockBlogEntries.set(null as unknown as BlogEntryOverview[]);
    fixture.detectChanges();

    const noEntriesMessage = fixture.debugElement.query(By.css('.no-entries-container'));
    expect(noEntriesMessage).toBeTruthy();
  });

  it('should correctly pass inputs to BlogCardComponent', () => {
    const blogCard = fixture.debugElement.query(By.directive(BlogCardComponent));
    expect(blogCard.componentInstance.blogEntry()).toEqual(mockBlogEntries()[0]);
    expect(blogCard.componentInstance.selectedBlogId).toBe(mockSelectedBlogId);
  });

  it('should handle blogEntries signal update', () => {
    mockBlogEntries.set([
      ...mockBlogEntries(),
      {
        id: 2,
        title: 'Second Blog',
        contentPreview: 'Another Preview Content',
        author: 'Jane Doe',
        likes: 15,
        comments: 8,
        likedByMe: true,
        createdByMe: true,
        createdAt: '2023-02-01T10:00:00Z',
        updatedAt: '2023-02-02T10:00:00Z',
        headerImageUrl: 'assets/images/test2.jpg',
      },
    ]);
    fixture.detectChanges();

    const blogCards = fixture.debugElement.queryAll(By.directive(BlogCardComponent));
    expect(blogCards.length).toBe(2);
  });
});
