import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogService } from './blog.service';
import { BlogEntryOverview, BlogDetailOverView } from '../models/blog.model';
import { environment } from '../../environments/environment';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { of, throwError } from 'rxjs';

describe('BlogService', () => {
  let service: BlogService;
  let httpMock: HttpTestingController;
  let mockOidcSecurityService: jasmine.SpyObj<OidcSecurityService>;

  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    mockOidcSecurityService = jasmine.createSpyObj('OidcSecurityService', ['getAccessToken']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BlogService,
        { provide: OidcSecurityService, useValue: mockOidcSecurityService },
      ],
    });

    service = TestBed.inject(BlogService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no unmatched HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getBlogEntries', () => {
    it('should fetch blog entries and validate the response', () => {
      const mockResponse = {
        data: [
          {
            id: 1,
            title: 'Test Blog',
            contentPreview: 'This is a preview.',
            author: 'John Doe',
            likes: 10,
            comments: 5,
            likedByMe: false,
            createdByMe: false,
            createdAt: '2023-01-01T00:00:00Z',
            updatedAt: '2023-01-02T00:00:00Z',
            headerImageUrl: 'assets/images/test.jpg',
          },
        ],
        pageIndex: 0,
        pageSize: 10,
        totalCount: 1,
        maxPageSize: 10,
      };

      service.getBlogEntries().subscribe((data) => {
        expect(data).toEqual(mockResponse);
        expect(service.blogs$.value.length).toBe(1);
      });

      const req = httpMock.expectOne(`${apiUrl}?pageIndex=0&pageSize=10`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should handle errors gracefully', () => {
      service.getBlogEntries().subscribe({
        next: () => fail('Expected error'),
        error: (err) => expect(err).toBeTruthy(),
      });

      const req = httpMock.expectOne(`${apiUrl}?pageIndex=0&pageSize=10`);
      req.error(new ErrorEvent('Network error'));
    });
  });

  describe('getBlogById', () => {
    it('should fetch blog details by ID and validate the response', () => {
      const mockResponse: BlogDetailOverView = {
        id: 1,
        title: 'Detailed Blog',
        content: 'Full content of the blog.',
        author: 'Jane Doe',
        likes: 15,
        likedByMe: true,
        createdByMe: true,
        createdAt: '2023-01-01T00:00:00Z',
        updatedAt: '2023-01-02T00:00:00Z',
        headerImageUrl: 'assets/images/detail.jpg',
        comments: [],
      };

      service.getBlogById(1).subscribe((data) => {
        expect(data).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${apiUrl}/1`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should handle errors gracefully for getBlogById', () => {
      service.getBlogById(1).subscribe({
        next: () => fail('Expected error'),
        error: (err) => expect(err).toBeTruthy(),
      });

      const req = httpMock.expectOne(`${apiUrl}/1`);
      req.error(new ErrorEvent('Network error'));
    });
  });

  describe('savePost', () => {
    it('should save a blog post and validate the response', () => {
      const mockBlog = {
        title: 'New Blog',
        content: 'Blog Content',
        headerImageUrl: 'assets/images/new.jpg',
      };
      const mockResponse: BlogDetailOverView = {
        id: 1,
        title: 'New Blog',
        content: 'Blog Content',
        author: 'Jane Doe',
        likes: 0,
        likedByMe: false,
        createdByMe: true,
        createdAt: '2023-01-01T00:00:00Z',
        updatedAt: '2023-01-01T00:00:00Z',
        headerImageUrl: 'assets/images/new.jpg',
        comments: [],
      };

      mockOidcSecurityService.getAccessToken.and.returnValue(of('mock-token'));

      service.savePost(mockBlog).subscribe((data) => {
        expect(data).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toBe('POST');
      expect(req.request.headers.get('Authorization')).toBe('Bearer mock-token');
      req.flush(mockResponse);
    });

    it('should handle errors gracefully for savePost', () => {
      mockOidcSecurityService.getAccessToken.and.returnValue(of('mock-token'));

      const mockBlog = {
        title: 'New Blog',
        content: 'Blog Content',
        headerImageUrl: 'assets/images/new.jpg',
      };

      service.savePost(mockBlog).subscribe({
        next: () => fail('Expected error'),
        error: (err) => expect(err).toBeTruthy(),
      });

      const req = httpMock.expectOne(apiUrl);
      req.error(new ErrorEvent('Network error'));
    });
  });
});
