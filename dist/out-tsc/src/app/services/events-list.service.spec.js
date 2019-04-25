import { TestBed } from '@angular/core/testing';
import { EventsListService } from './events-list.service';
describe('EventsListService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(EventsListService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=events-list.service.spec.js.map