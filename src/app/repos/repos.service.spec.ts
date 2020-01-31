import {Observable, of} from 'rxjs';
import {Repo} from './repos/repos';
import {ReposService} from './repos.service';
import {skip, take, toArray} from 'rxjs/operators';

let repos$: Observable<Partial<Repo[]>>;

const reposMoc = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  }
];

const repoUpdate = {
  id: 1,
  description: 'update'
};

describe('ReposService', () => {
  beforeEach(() => {
    repos$ = of([]);
  });

  it('should return repos observable', () => {
    const http = jasmine.createSpyObj('HttpClient', ['get']);
    http.get.and.returnValue(of(reposMoc));
    const reposService = new ReposService(http);

    reposService.getRepos().pipe(take(2), toArray()).subscribe(data => {
      // @ts-ignore
      expect(data).toEqual([reposMoc]);
    });
  });

  it('should return existed repos', () => {
    const http = jasmine.createSpyObj('HttpClient', ['get']);
    const reposService = new ReposService(http);
    // @ts-ignore
    reposService.repos$ = of(reposMoc);
    reposService.callState.loaded = true;

    reposService.getRepos().pipe(take(1)).subscribe(data => {
      // @ts-ignore
      expect(data).toEqual(reposMoc);
    });
  });

  it('should change loading status after getRepos call', () => {
    const http = jasmine.createSpyObj('HttpClient', ['get']);
    http.get.and.returnValue(of(reposMoc));
    const reposService = new ReposService(http);

    reposService.getRepos();

    expect(reposService.callState.loading).toEqual(true);
  });

  it('should change loading and loaded statuses after getRepos response', () => {
    const http = jasmine.createSpyObj('HttpClient', ['get']);
    http.get.and.returnValue(of(reposMoc));
    const reposService = new ReposService(http);

    expect(reposService.callState.loaded).toEqual(false);
    expect(reposService.callState.loading).toEqual(false);

    reposService.getRepos().pipe(take(1)).subscribe(data => {
      // @ts-ignore
      expect(reposService.callState.loaded).toEqual(true);
      expect(reposService.callState.loading).toEqual(false);
    });
  });

  it('should return repo observable by id', () => {
    const http = jasmine.createSpyObj('HttpClient', ['get']);
    http.get.and.returnValue(of(reposMoc));
    const reposService = new ReposService(http);

    reposService.getRepoById(1).pipe(take(1)).subscribe(data => {
      // @ts-ignore
      expect(data).toEqual(reposMoc[0]);
    });
  });

  it('should update $repos', () => {
    const http = jasmine.createSpyObj('HttpClient', ['patch']);
    http.patch.and.returnValue(of(reposMoc[0]));
    const reposService = new ReposService(http);

    // @ts-ignore
    reposService.updateRepo(1, repoUpdate);

    // @ts-ignore
    reposService.repos$.pipe(skip(1)).subscribe((data) => {
      expect(data[0]).toEqual(reposMoc[0]);
    });
  });
});
