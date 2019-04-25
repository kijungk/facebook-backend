import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EventsListService } from 'src/app/services/events-list.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(eventsListService) {
        this.eventsListService = eventsListService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.eventsListService.fetchEventsList();
        this.eventsList = this.eventsListService.eventsList;
        console.log(this.eventsList);
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [EventsListService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map