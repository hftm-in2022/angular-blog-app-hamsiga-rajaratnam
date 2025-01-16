import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogListLayoutComponent } from './blog-list-layout.component';
import { BlogState } from '../../state/blog.state';
import { BlogEntryOverview } from '../../../../models/blog.model';
import { WritableSignal, signal } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BlogListLayoutComponent', () => {
  let component: BlogListLayoutComponent;
  let fixture: ComponentFixture<BlogListLayoutComponent>;
  let mockBlogState: jasmine.SpyObj<BlogState>;

  beforeEach(async () => {
    // Mock signals
    const mockIsLoadingSignal = signal(false) as WritableSignal<boolean>;
    const mockBlogEntriesSignal = signal([]) as WritableSignal<BlogEntryOverview[]>;
    const mockSelectedBlogIdSignal = signal(null) as WritableSignal<number | null>;

    // Create a SpyObj for BlogState
    mockBlogState = jasmine.createSpyObj<BlogState>('BlogState', ['fetchBlogEntries'], {
      isLoading: mockIsLoadingSignal,
      blogEntries: mockBlogEntriesSignal,
      selectedBlogId: mockSelectedBlogIdSignal,
    });

    await TestBed.configureTestingModule({
      imports: [BlogListLayoutComponent],
      providers: [{ provide: BlogState, useValue: mockBlogState }],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the loading spinner when isLoading is true', () => {
    mockBlogState.isLoading.set(true); // Set isLoading to true
    fixture.detectChanges();

    const loadingSpinner = fixture.debugElement.query(By.css('.loading-spinner'));
    expect(loadingSpinner).toBeTruthy(); // Expect the spinner to be displayed
  });

  it('should display blog entries when available', () => {
    const mockEntries: BlogEntryOverview[] = [
      {
        id: 1,
        title: 'Test Blog 1',
        contentPreview: 'This is a preview of Blog 1.',
        author: 'Author 1',
        likes: 10,
        comments: 5,
        likedByMe: false,
        createdByMe: false,
        createdAt: '2023-01-01',
        updatedAt: '2023-01-02',
        headerImageUrl: 'http://example.com/image1.jpg',
      },
    ];
    mockBlogState.blogEntries.set(mockEntries); // Set mock blog entries
    fixture.detectChanges();

    const blogCards = fixture.debugElement.queryAll(By.css('app-blog-card'));
    expect(blogCards.length).toBe(mockEntries.length); // Expect the same number of blog cards as entries
  });

  it('should display a no entries message when no blogs are available', () => {
    mockBlogState.blogEntries.set([]); // Set no blog entries
    fixture.detectChanges();

    const noEntriesMessage = fixture.debugElement.query(By.css('.no-entries-container'));
    expect(noEntriesMessage).toBeTruthy(); // Expect the no entries message to be displayed
  });

  it('should call fetchBlogEntries on initialization', () => {
    expect(mockBlogState.fetchBlogEntries).toHaveBeenCalled();
  });
});
