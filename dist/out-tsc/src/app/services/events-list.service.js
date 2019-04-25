import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { EventsList } from '../classes/events-list';
var EventsListService = /** @class */ (function () {
    function EventsListService() {
    }
    EventsListService.prototype.fetchEventsList = function () {
        //API call for events list
        var eventsList = [];
        var event1 = {
            name: 'Demo Event 1',
            id: '/dashboard/1',
            icon: '/assets/demo1',
            permissions: ['demo1']
        };
        var event2 = {
            name: 'Demo Event 2',
            id: '/dashboard/2',
            icon: '/assets/demo2',
            permissions: ['demo2']
        };
        eventsList.push(event1);
        eventsList.push(event2);
        this.eventsList = new EventsList(eventsList);
        console.log('service list', this.eventsList.events);
        return;
    };
    EventsListService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], EventsListService);
    return EventsListService;
}());
export { EventsListService };
//# sourceMappingURL=events-list.service.js.map