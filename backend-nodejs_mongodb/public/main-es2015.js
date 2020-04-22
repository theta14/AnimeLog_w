(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table id=\"scroll-button\">\r\n    <tr>\r\n        <td class=\"clickable\" (click)=\"scrollUp()\"><mat-icon>keyboard_arrow_up</mat-icon></td>\r\n    </tr>\r\n    <tr>\r\n        <td class=\"clickable\" (click)=\"scrollDown()\"><mat-icon>keyboard_arrow_down</mat-icon></td>\r\n    </tr>\r\n</table>\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light rounded navbar-fixed-top mdl-shadow--2dp\">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">AnimeLog W</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\r\n        <ul></ul>\r\n        <nav mat-tab-nav-bar>\r\n            <a mat-tab-link\r\n                class=\"mat-tabs\"\r\n                *ngFor=\"let link of navLinks\"\r\n                [routerLink]=\"link.path\"\r\n                routerLinkActive #rla=\"routerLinkActive\"\r\n                [active]=\"rla.isActive\">\r\n                {{link.label}}\r\n            </a>\r\n        </nav>\r\n    </div>\r\n</nav>\r\n<ng-flash-message></ng-flash-message>\r\n\r\n<div id=\"main-part\" class=\"bg-dark\">\r\n    <div *ngIf=\"router.url != '/'\">\r\n        <br><br><br><br>\r\n    </div>\r\n    <main role=\"main\">\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n    <br><br><br>\r\n</div>\r\n\r\n<footer class=\"text-muted py-5 bg-secondary\" id=\"footer\">\r\n    <div class=\"container\">\r\n        <p><b>Powered by ParkJH</b></p><br>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm\">\r\n                <p><b>MEAN Stack</b></p>\r\n                <p><a target=\"_blank\" href=\"https://www.mongodb.com\">MongoDB</a></p>\r\n                <p><a target=\"_blank\" href=\"https://expressjs.com/ko/\">Express</a></p>\r\n                <p><a target=\"_blank\" href=\"https://angular.kr/\">Angular</a></p>\r\n                <p><a target=\"_blank\" href=\"https://nodejs.org/ko/\">Node.js</a></p>\r\n                <p><a target=\"_blank\" href=\"https://github.com/theta14/AnimeLog_w.git\">Github</a></p>\r\n            </div>\r\n            <div class=\"col-sm\">\r\n                <p><b>CSS</b></p>\r\n                <p><a target=\"_blank\" href=\"https://getbootstrap.com/\">Bootstrap</a></p>\r\n                <p><a target=\"_blank\" href=\"https://material.angular.io/\">Angular Material</a></p>\r\n                <p><a target=\"_blank\" href=\"https://getmdl.io/\">Material Design Lite</a></p>\r\n                <p><a target=\"_blank\" href=\"https://material.io/resources/icons/?style=baseline\">Material Icons</a></p>\r\n                <p><a target=\"_blank\" href=\"https://www.svgbackgrounds.com/\">SVG Backgrounds</a></p>\r\n            </div>\r\n            <div class=\"col-sm\">\r\n                <p><b>Resources</b></p>\r\n                <p><a target=\"_blank\" href=\"https://myanimelist.net/\">MyAnimeList</a></p>\r\n                <p><a target=\"_blank\" href=\"http://onnada.com/\">Onnada</a></p>\r\n                <p><a target=\"_blank\" href=\"https://nyaa.si/\">Nyaa</a></p>\r\n                <p><a target=\"_blank\" href=\"http://raws.ohys.net/t/\">Ohys</a></p>\r\n                <p><a target=\"_blank\" href=\"https://ohli.moe/\">OHLI</a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/ended-dialog/ended-dialog.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/ended-dialog/ended-dialog.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>{{data.title[data.title.rv]}}</h2>\r\n<div mat-dialog-content *ngIf=\"!year\">\r\n  <mat-spinner></mat-spinner><br>\r\n  필요한 정보를 불러오는 중...\r\n</div>\r\n<div mat-dialog-content *ngIf=\"year\">\r\n\r\n  <div class=\"container\">\r\n    <table class=\"table table-borderless\" style=\"width: 65%; margin: auto;\">\r\n      <tr>\r\n        <td style=\"text-align: center;\">\r\n          <img [src]=\"data.img\">\r\n        </td>\r\n        <td style=\"text-align: center; vertical-align: middle;\">\r\n          <button mat-stroked-button (click)=\"findOhliId()\">자막 찾기</button><br><br>\r\n          <a mat-stroked-button [href]=\"'https://www.google.com/search?q=' + data.title.kor + ' 토렌트'\" target=\"_blank\" class=\"btn-link\">구글 검색</a>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n    <br>\r\n  \r\n    <table class=\"table\">\r\n      <caption>Nyaa</caption>\r\n      <tr *ngIf=\"!videos\">\r\n        <td colspan=\"4\">\r\n          <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n        </td>\r\n      </tr>\r\n      <ng-container *ngIf=\"videos\">\r\n        <tr *ngFor=\"let video of videos\">\r\n          <td>{{getDate(video.date)}}</td>\r\n          <td>{{video.name}}</td>\r\n          <td>{{getSize(video.size)}}</td>\r\n          <td>\r\n            <a [href]=\"video.magnet | safeUrl\" class=\"download-link\">▶</a>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n    </table>\r\n  \r\n    <hr><br>\r\n  \r\n    <table class=\"table\">\r\n      <caption>Ohys</caption>\r\n      <tr *ngIf=\"!ohyses\">\r\n        <td colspan=\"2\">\r\n          <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n        </td>\r\n      </tr>\r\n      <ng-container *ngIf=\"ohyses\">\r\n        <tr *ngFor=\"let ohys of ohyses\">\r\n          <td>{{ohys.name}}</td>\r\n          <td>\r\n            <a [href]=\"ohys.link\" class=\"download-link\" download>▶</a>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n    </table>\r\n  \r\n    <hr><br>\r\n  \r\n    <table class=\"table\">\r\n      <caption>OHLI</caption>\r\n      <tr *ngIf=\"!subtitles\">\r\n        <td colspan=\"4\">\r\n          <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n        </td>\r\n      </tr>\r\n      <ng-container *ngIf=\"subtitles\">\r\n        <tr *ngFor=\"let subtitle of subtitles\">\r\n          <td>{{getDate(subtitle.date)}}</td>\r\n          <td>제{{subtitle.episode}}화</td>\r\n          <td>{{subtitle.by}}</td>\r\n          <td><a class=\"download-link\" [href]=\"subtitle.link\" target=\"_blank\">페이지로 이동</a></td>\r\n        </tr>\r\n      </ng-container>\r\n    </table>\r\n\r\n  </div>\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button tabindex=\"-1\" (click)=\"onClose()\">닫기</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title *ngIf=\"!loading\">[ {{data.title}} ] 검색 결과</h2>\r\n<div mat-dialog-content>\r\n  \r\n  <div *ngIf=\"loading\" style=\"text-align: center;\">\r\n    <mat-spinner></mat-spinner><br>\r\n    결과를 가져오는 중...\r\n  </div>\r\n  <div class=\"container\" *ngIf=\"!loading\">\r\n    <ng-container *ngFor=\"let ohli of ohlis; index as i\">\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td style=\"text-align: center; vertical-align: middle;\" rowspan=\"4\">\r\n            <img [src]=\"ohli.img\">\r\n          </td>\r\n          <th>OHLI</th>\r\n          <td>{{ohli.id}}</td>\r\n        </tr>\r\n        <tr>\r\n          <th>제목</th>\r\n          <td>{{ohli.title}}</td>\r\n        </tr>\r\n        <tr>\r\n          <th>방영 시작일</th>\r\n          <td>{{ohli.aired}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\" style=\"text-align: center;\">\r\n            <button (click)=\"selectItem(i)\" mat-button>선택</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </ng-container>\r\n    \r\n  </div>\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button tabindex=\"-1\" (click)=\"onClose()\">닫기</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/search-dialog/search-dialog.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/search-dialog/search-dialog.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title *ngIf=\"!loading\">[ {{data.search.text}} ] 검색 결과</h2>\r\n<div mat-dialog-content>\r\n  \r\n  <div *ngIf=\"loading\" style=\"text-align: center;\">\r\n    <mat-spinner></mat-spinner><br>\r\n    결과를 가져오는 중...\r\n  </div>\r\n  <div class=\"container\" *ngIf=\"!loading\">\r\n    <ng-container *ngFor=\"let searched of searches; index as i\">\r\n      <table class=\"table\">\r\n        <tr>\r\n          <td style=\"text-align: center; vertical-align: middle;\" rowspan=\"5\">\r\n            <img [src]=\"searched.img\">\r\n          </td>\r\n          <th>타입</th>\r\n          <td>{{searched.type}}</td>\r\n        </tr>\r\n        <tr>\r\n          <th>제목</th>\r\n          <td>{{searched.title}}</td>\r\n        </tr>\r\n        <tr>\r\n          <th>방영 분기</th>\r\n          <td>\r\n            {{searched.premiered.year}}년 {{searched.premiered.quarter}}분기\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>MyAnimeList</th>\r\n          <td>\r\n            <a [href]=\"'https://myanimelist.net/anime/' + searched.mal_id\" target=\"_blank\">\r\n              {{searched.mal_id}}\r\n            </a>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\" style=\"text-align: center;\">\r\n            <button (click)=\"selectItem(i)\" mat-button>선택</button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </ng-container>\r\n    <div *ngIf=\"searches.length == 0\">\r\n      <p>검색결과가 없거나 에러가 발생하였습니다.</p>\r\n      <p><a [href]=\"getLink()\" target=\"_blank\">직접 검색해보기</a></p>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button tabindex=\"-1\" (click)=\"onClose()\">닫기</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/studio-dialog/studio-dialog.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/studio-dialog/studio-dialog.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>{{data}}</h2>\r\n<div mat-dialog-content>\r\n  <ul *ngIf=\"tvas.length > 0 || movies.length > 0\">\r\n    <li *ngIf=\"tvas.length > 0\">TVA ({{tvas.length}})\r\n      <ul>\r\n        <li *ngFor=\"let item of tvas; index as i\">\r\n          <hr *ngIf=\"yearChanged(i)\">\r\n          <a [routerLink]=\"getLink('tva', item)\" target=\"_blank\">\r\n            {{item.title[item.title.rv]}} <span style=\"font-size: 80%;\">({{getFormattedDate(item.date)}})</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    <br *ngIf=\"movies.length > 0\">\r\n    <li *ngIf=\"movies.length > 0\">극장판 ({{movies.length}})\r\n      <ul>\r\n        <li *ngFor=\"let item of movies\">\r\n          <a [routerLink]=\"getLink('movie', item)\" target=\"_blank\">\r\n            {{item.title[item.title.rv]}} <span style=\"font-size: 80%;\">({{getFormattedDate(item.date)}})</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n  </ul>\r\n  <p *ngIf=\"tvas.length == 0 && movies.length == 0\">시청 항목이 존재하지 않습니다.</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button tabindex=\"-1\" (click)=\"onClose()\">닫기</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>{{data.title}}</h2>\r\n<div mat-dialog-content>\r\n  <p>{{data.explain}}</p>\r\n  <mat-form-field style=\"width: 100%;\">\r\n    <input matInput [(ngModel)]=\"data.text\" [placeholder]=\"data.placeholder\" #_self (click)=\"_self.select()\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button tabindex=\"-1\" (click)=\"onClose()\">닫기</button>\r\n  <button mat-button tabindex=\"-1\" [mat-dialog-close]=\"data.text\" cdkFocusInitial>확인</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"rwCarousel\" class=\"carousel slide mdl-shadow--2dp\" data-ride=\"carousel\">\r\n\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#rwCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#rwCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#rwCarousel\" data-slide-to=\"2\"></li>\r\n    <li data-target=\"#rwCarousel\" data-slide-to=\"3\"></li>\r\n  </ol>\r\n\r\n  <div class=\"carousel-inner\">\r\n    <div [class]=\"'carousel-item active bg-svg-' + backgrounds[0]\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption text-left\">\r\n          <h3>{{carousel[0]?.type}}</h3>\r\n          <h4>{{carousel[0]?.title}}</h4>\r\n          <p>{{carousel[0]?.content}}</p>\r\n          <p><a mat-flat-button [routerLink]=\"carousel[0]?.link\" role=\"button\" class=\"carousel-button\">보기</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div [class]=\"'carousel-item bg-svg-' + backgrounds[1]\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>{{carousel[1]?.type}}</h3>\r\n          <h4>{{carousel[1]?.title}}</h4>\r\n          <p>{{carousel[1]?.content}}</p>\r\n          <p><a mat-flat-button [routerLink]=\"carousel[1]?.link\" role=\"button\" class=\"carousel-button\">보기</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div [class]=\"'carousel-item bg-svg-' + backgrounds[2]\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption text-right\">\r\n          <h3>{{carousel[2]?.type}}</h3>\r\n          <h4>{{carousel[2]?.title}}</h4>\r\n          <p>{{carousel[2]?.content}}</p>\r\n          <p><a mat-flat-button [routerLink]=\"carousel[2]?.link\" role=\"button\" class=\"carousel-button\">보기</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div [class]=\"'carousel-item bg-svg-' + backgrounds[3]\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>{{carousel[3]?.type}}</h3>\r\n          <h4>{{carousel[3]?.title}}</h4>\r\n          <p>{{carousel[3]?.content}}</p>\r\n          <p><a mat-flat-button [routerLink]=\"carousel[3]?.link\" role=\"button\" class=\"carousel-button\">보기</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <a class=\"carousel-control-prev\" href=\"#rwCarousel\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#rwCarousel\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n<section></section>\r\n\r\n<section class=\"container\">\r\n  <table class=\"table table-dark\">\r\n    <tr>\r\n      <th>TVA</th>\r\n      <td>{{allItems?.tvas.length}}개</td>\r\n    </tr>\r\n    <tr>\r\n      <th>극장판</th>\r\n      <td>{{allItems?.movies.length}}개</td>\r\n    </tr>\r\n    <tr>\r\n      <th>시청 중</th>\r\n      <td>{{allItems?.watchings.length}}개</td>\r\n    </tr>\r\n    <tr>\r\n      <th>시청 예정</th>\r\n      <td>{{allItems?.plans.length}}개</td>\r\n    </tr>\r\n  </table>\r\n</section>\r\n\r\n<section class=\"container\">\r\n  <table class=\"table table-secondary\">\r\n    <tr>\r\n      <td>\r\n        <div style=\"margin: auto; width: 60%; color: black;\">\r\n          <mat-form-field appearance=\"outline\" style=\"width: 80%;\">\r\n            <mat-label>검색</mat-label>\r\n            <input matInput placeholder=\"검색어를 입력해주세요.\" (keyup.enter)=\"search(text.value)\" #text>\r\n          </mat-form-field>\r\n          <button mat-flat-button type=\"button\" (click)=\"search(text.value)\">\r\n            <mat-icon>search</mat-icon>\r\n          </button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div *ngIf=\"searchedText\">\r\n    <p><b>{{searchedText}}</b> 검색결과 : {{searchedItems.tvas.length + searchedItems.movies.length + searchedItems.watchings.length + searchedItems.plans.length}}건</p>\r\n\r\n    <table class=\"table table-dark\">\r\n      <caption>TVA ({{searchedItems.tvas.length}}건)</caption>\r\n      <thead>\r\n        <tr>\r\n          <th>시리즈</th>\r\n          <th>제목</th>\r\n          <th>시즌</th>\r\n          <th colspan=\"120\">제작사</th>\r\n          <th>화수</th>\r\n          <th>방영분기</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let tva of searchedItems.tvas | slice: pageEvents.tva.pageIndex * pageEvents.tva.pageSize : (pageEvents.tva.pageIndex + 1) * pageEvents.tva.pageSize; index as t\">\r\n          <tr>\r\n            <td><span *ngIf=\"tva.seriesTitle != tva.title[tva.title.rv]\">{{tva.seriesTitle}}</span></td>\r\n            <td>\r\n              <a [routerLink]=\"['/tva', tva._id, tva.series, tva.sequence]\" class=\"searched-link\">{{tva.title[tva.title.rv]}}</a>\r\n            </td>\r\n            <td>{{tva.season}}</td>\r\n            <td *ngFor=\"let studio of tva.studios\" [attr.colspan]=\"120 / tva.studios.length\">\r\n              <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n            </td>\r\n            <td>{{tva.episodes}}</td>\r\n            <td>'{{tva.premiered.year.toString().substring(2)}} - {{tva.premiered.quarter}}</td>\r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n    </table>\r\n\r\n    <mat-paginator *ngIf=\"searchedItems.tvas.length > pageSizeOptions[0]\"\r\n      [length]=\"searchedItems.tvas.length\"\r\n      [pageSize]=\"pageSize\"\r\n      [pageSizeOptions]=\"pageSizeOptions\"\r\n      (page)=\"pageEvents.tva = $event\"></mat-paginator><br><br>\r\n\r\n    <table class=\"table table-dark\">\r\n      <caption>극장판 ({{searchedItems.movies.length}}건)</caption>\r\n      <thead>\r\n        <tr>\r\n          <th>시리즈</th>\r\n          <th>제목</th>\r\n          <th>순서</th>\r\n          <th colspan=\"120\">제작사</th>\r\n          <th>개봉일</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let movie of searchedItems.movies | slice: pageEvents.movie.pageIndex * pageEvents.movie.pageSize : (pageEvents.movie.pageIndex + 1) * pageEvents.movie.pageSize; index as m\">\r\n          <tr>\r\n            <td><span *ngIf=\"movie.seriesTitle != movie.title[movie.title.rv]\">{{movie.seriesTitle}}</span></td>\r\n            <td>\r\n              <a [routerLink]=\"['/movie', movie._id, movie.series, movie.sequence]\" class=\"searched-link\">{{movie.title[movie.title.rv]}}</a>\r\n            </td>\r\n            <td>{{movie.order}}</td>\r\n            <td *ngFor=\"let studio of movie.studios\" [attr.colspan]=\"120 / movie.studios.length\">\r\n              <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n            </td>\r\n            <td>{{movie.aired}}</td>\r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n    </table>\r\n\r\n    <mat-paginator *ngIf=\"searchedItems.movies.length > pageSizeOptions[0]\"\r\n      [length]=\"searchedItems.movies.length\"\r\n      [pageSize]=\"pageSize\"\r\n      [pageSizeOptions]=\"pageSizeOptions\"\r\n      (page)=\"pageEvents.movie = $event\"></mat-paginator><br><br>\r\n\r\n    <table class=\"table table-dark\">\r\n      <caption>시청 중인 목록 ({{searchedItems.watchings.length}}건)</caption>\r\n      <thead>\r\n        <tr>\r\n          <th>타입</th>\r\n          <th>방영중</th>\r\n          <th>제목</th>\r\n          <th colspan=\"120\">제작사</th>\r\n          <th>방영분기</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let item of searchedItems.watchings | slice: pageEvents.watching.pageIndex * pageEvents.watching.pageSize : (pageEvents.watching.pageIndex + 1) * pageEvents.watching.pageSize; index as i\">\r\n          <tr>\r\n            <td *ngIf=\"item.type == 'tva'\">TVA</td>\r\n            <td *ngIf=\"item.type == 'movie'\">극장판</td>\r\n            <td *ngIf=\"item.ohli_id\">O</td>\r\n            <td *ngIf=\"!item.ohli_id\">X</td>\r\n            <td>\r\n              <a [routerLink]=\"['/watching', item._id]\" class=\"searched-link\">{{item.title[item.title.rv]}}</a>\r\n            </td>\r\n            <td *ngFor=\"let studio of item.studios\" [attr.colspan]=\"120 / item.studios.length\">\r\n              <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n            </td>\r\n            <td>'{{item.premiered.year.toString().substring(2)}} - {{item.premiered.quarter}}</td>\r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n    </table>\r\n\r\n    <mat-paginator *ngIf=\"searchedItems.watchings.length > pageSizeOptions[0]\"\r\n      [length]=\"searchedItems.watchings.length\"\r\n      [pageSize]=\"pageSize\"\r\n      [pageSizeOptions]=\"pageSizeOptions\"\r\n      (page)=\"pageEvents.watching = $event\"></mat-paginator><br><br>\r\n\r\n    <table class=\"table table-dark\">\r\n      <caption>시청 예정 목록 ({{searchedItems.plans.length}}건)</caption>\r\n      <thead>\r\n        <tr>\r\n          <th>타입</th>\r\n          <th>제목</th>\r\n          <th colspan=\"120\">제작사</th>\r\n          <th>방영분기</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let item of searchedItems.plans | slice: pageEvents.plan.pageIndex * pageEvents.plan.pageSize : (pageEvents.plan.pageIndex + 1) * pageEvents.plan.pageSize; index as i\">\r\n          <tr>\r\n            <td *ngIf=\"item.type == 'tva'\">TVA</td>\r\n            <td *ngIf=\"item.type == 'movie'\">극장판</td>\r\n            <td>\r\n              <a [routerLink]=\"['/plan', item._id]\" class=\"searched-link\">{{item.title[item.title.rv]}}</a>\r\n            </td>\r\n            <td colspan=\"120\" *ngIf=\"item.studios.length == 0\">-</td>\r\n            <ng-container *ngIf=\"item.studios.length > 0\">\r\n              <td *ngFor=\"let studio of item.studios\" [attr.colspan]=\"120 / item.studios.length\">\r\n                <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n              </td>\r\n            </ng-container>\r\n            <td>{{getQuarterFromAiredDate(item.aired)}}</td>\r\n          </tr>\r\n        </ng-container>\r\n      </tbody>\r\n    </table>\r\n\r\n    <mat-paginator *ngIf=\"searchedItems.plans.length > pageSizeOptions[0]\"\r\n      [length]=\"searchedItems.plans.length\"\r\n      [pageSize]=\"pageSize\"\r\n      [pageSizeOptions]=\"pageSizeOptions\"\r\n      (page)=\"pageEvents.plan = $event\"></mat-paginator><br><br>\r\n  </div>\r\n\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\r\n  <div class=\"border border-secondary info-area\">\r\n    <h4>극장판</h4>\r\n    <p>카테고리 수: {{movies?.length}}</p>\r\n    <p>극장판 수: {{count()}}</p>\r\n    <p>\r\n      <button mat-flat-button (click)=\"openAll()\">전체 열기</button>&nbsp;\r\n      <button mat-flat-button (click)=\"closeAll()\">전체 닫기</button>&nbsp;\r\n      <button mat-flat-button (click)=\"writeMovie(); writingArea.scrollIntoView()\">새 항목 작성</button>\r\n    </p>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"container\">\r\n  <mat-progress-bar *ngIf=\"!movies\" mode=\"indeterminate\"></mat-progress-bar>\r\n  <table class=\"table table-dark\" *ngIf=\"movies\">\r\n    <thead>\r\n      <tr>\r\n        <th (click)=\"align(0, 0)\">카테고리</th>\r\n        <th (click)=\"align(0, 1)\">시리즈</th>\r\n        <th (click)=\"align(0, 2)\">제목</th>\r\n        <th>순서</th>\r\n        <th (click)=\"align(0, 3)\" colspan=\"120\">제작사</th>\r\n        <th (click)=\"align(0, 4)\">개봉일</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngFor=\"let movie of movies; index as m\">\r\n\r\n        <ng-container *ngFor=\"let series of movie.series; index as i\">\r\n          <ng-container *ngFor=\"let sequence of series.sequences; index as j\">\r\n            <tr [attr.id]=\"movie._id\">\r\n              <td *ngIf=\"movie.series.length > 1 && i == 0 && j == 0\" [attr.rowspan]=\"allElementsLength(m)\"\r\n                class=\"table-category\" style=\"vertical-align: middle;\">{{movie.category}}</td>\r\n              <td *ngIf=\"movie.series.length > 1 && j == 0\" class=\"table-series\"\r\n                [attr.rowspan]=\"movie.series[i].sequences.length\" style=\"vertical-align: middle;\">{{series.title}}</td>\r\n              <td *ngIf=\"movie.series.length == 1 && movie.series[0].sequences.length > 1 && j == 0\"\r\n                [attr.rowspan]=\"movie.series[0].sequences.length\" colspan=\"2\" class=\"table-category\"\r\n                style=\"vertical-align: middle; text-align: center;\">{{movie.category}}</td>\r\n              <td *ngIf=\"movie.series.length == 1 && movie.series[0].sequences.length == 1\" colspan=\"2\"></td>\r\n              <td>\r\n                <span class=\"clickable\" (click)=\"clickMovie(m, i, j)\">{{sequence.title[sequence.title.rv]}}</span>\r\n              </td>\r\n              <td *ngIf=\"movie.series.length == 1 && movie.series[0].sequences.length == 1; else orderTemplate\"></td>\r\n              <ng-template #orderTemplate>\r\n                <td>{{sequence.order}}</td>\r\n              </ng-template>\r\n              <td *ngFor=\"let studio of sequence.studios\" [attr.colspan]=\"120 / sequence.studios.length\">\r\n                <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n              </td>\r\n              <td>{{sequence.aired}}</td>\r\n            </tr>\r\n            <tr *ngIf=\"movie.opened && i == movie.series.length-1 && j == series.sequences.length-1\">\r\n              <td colspan=\"125\" style=\"padding: 0px;\">\r\n\r\n                <!-- detail -->\r\n                <table class=\"table table-dark table-hover\">\r\n                  <tr>\r\n                    <td style=\"text-align: center; vertical-align: middle;\"\r\n                      [attr.rowspan]=\"11 + movie.series[movie.opened.series].sequences[movie.opened.sequence].studios.length\">\r\n                      <img [src]=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].img\">\r\n                    </td>\r\n                    <th>카테고리</th>\r\n                    <td>\r\n                      <span class=\"clickable\" (click)=\"editCategory(m)\">{{movie.category}}</span>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>TVA</th>\r\n                    <td>\r\n                      <mat-progress-bar *ngIf=\"!movie.opened.linked\" mode=\"indeterminate\"></mat-progress-bar>\r\n                      <a *ngIf=\"movie.opened.linked\" class=\"detail-link\"\r\n                        [routerLink]=\"['/tva', movie.opened.linked._id, movie.opened.linked.series, 0]\">\r\n                        {{movie.opened.linked.title}}\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>시리즈 메모</th>\r\n                    <td>{{movie.series[movie.opened.series].memo}}</td>\r\n                  </tr>\r\n                  <tr><td></td><td></td></tr>\r\n                  <tr>\r\n                    <th rowspan=\"3\" style=\"vertical-align: middle;\">제목</th>\r\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv == 'kor'\">\r\n                      <b>\r\n                        {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.kor}}\r\n                      </b>\r\n                    </td>\r\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv != 'kor'\">\r\n                      {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.kor}}\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv == 'eng'\">\r\n                      <b>\r\n                        {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.eng}}\r\n                      </b>\r\n                    </td>\r\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv != 'eng'\">\r\n                      {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.eng}}\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv == 'jpn'\">\r\n                      <b>\r\n                        {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.jpn}}\r\n                      </b>\r\n                    </td>\r\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv != 'jpn'\">\r\n                      {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.jpn}}\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>개봉일</th>\r\n                    <td>\r\n                      {{movie.series[movie.opened.series].sequences[movie.opened.sequence].aired}}\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngFor=\"let studio of movie.series[movie.opened.series].sequences[movie.opened.sequence].studios; index as s\">\r\n                    <th *ngIf=\"s == 0\" style=\"vertical-align: middle;\"\r\n                      [attr.rowspan]=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].studios.length\">제작사</th>\r\n                    <td>\r\n                      <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>메모</th>\r\n                    <td>{{movie.series[movie.opened.series].sequences[movie.opened.sequence].memo}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>MyAnimeList</th>\r\n                    <td>\r\n                      <a [href]=\"'https://myanimelist.net/anime/' + movie.series[movie.opened.series].sequences[movie.opened.sequence].mal_id\" target=\"_blank\" class=\"detail-link\">\r\n                        {{movie.series[movie.opened.series].sequences[movie.opened.sequence].mal_id}}\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td colspan=\"2\" style=\"text-align: center;\">\r\n                      <a mat-button [href]=\"searchService.namuwiki(movie?.opened?.linked?.title)\" target=\"_blank\" [matTooltip]=\"searchService.namuwiki_label()\" class=\"no-hover-link\">\r\n                        <mat-icon>{{searchService.namuwiki_icon()}}</mat-icon>\r\n                      </a>\r\n                      <button mat-button (click)=\"modifyMovie(m, movie.opened.series, movie.opened.sequence)\" matTooltip=\"수정\">\r\n                        <mat-icon>create</mat-icon>\r\n                      </button>\r\n                      <button mat-button (click)=\"removeMovie(m, movie.opened.series, movie.opened.sequence)\" matTooltip=\"삭제\">\r\n                        <mat-icon>delete</mat-icon>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"movie.modifying && i == movie.series.length-1 && j == series.sequences.length-1\">\r\n              <td colspan=\"125\">\r\n\r\n                <!-- modifying -->\r\n                <form (submit)=\"onModifySubmit(m, modifying.series, modifying.sequence)\">\r\n                  <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\r\n                    <tr>\r\n                      <th style=\"width: 30%;\">검색</th>\r\n                      <td>\r\n                        <mat-form-field class=\"form-item-select\">\r\n                          <mat-label>검색옵션</mat-label>\r\n                          <mat-select #searchOption>\r\n                            <mat-option value=\"onnada\">Onnada</mat-option>\r\n                            <mat-option value=\"mal\">MyAnimeList</mat-option>\r\n                            <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>검색어를 입력해주세요.</mat-label>\r\n                          <input matInput #searchBox (keyup.enter)=\"searchMovie(searchOption.value, searchBox.value, m)\">\r\n                        </mat-form-field>\r\n                        <button mat-flat-button type=\"button\" (click)=\"searchMovie(searchOption.value, searchBox.value, m)\">\r\n                          <mat-icon>search</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                    <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\r\n                    <tr>\r\n                      <th rowspan=\"2\">TVA</th>\r\n                      <td>\r\n                        <mat-progress-bar *ngIf=\"!tvas\" mode=\"indeterminate\"></mat-progress-bar>\r\n                        <mat-form-field *ngIf=\"tvas\" class=\"form-item\">\r\n                          <mat-label>카테고리</mat-label>\r\n                          <mat-select [(ngModel)]=\"linked.idx\" name=\"tva_category\">\r\n                            <mat-option *ngFor=\"let tva of tvas; index as t\" [value]=\"t\">{{tva.category}}</mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <mat-form-field *ngIf=\"tvas && linked\" class=\"form-item\">\r\n                          <mat-label>시리즈</mat-label>\r\n                          <mat-select [(ngModel)]=\"linked.series\" name=\"tva_series\" class=\"form-item\">\r\n                            <mat-option *ngFor=\"let series of tvas[linked.idx].series; index as r\" [value]=\"r\">{{series.title}}</mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>제목</th>\r\n                      <td>\r\n                        <mat-radio-group [(ngModel)]=\"movie.modifying.title.rv\" name=\"rv\">\r\n                          <table class=\"table table-borderless inner-table\">\r\n                            <tr>\r\n                              <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\r\n                              <td>\r\n                                <mat-form-field class=\"form-item\">\r\n                                  <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"movie.modifying.title.kor\" name=\"kor\">\r\n                                </mat-form-field>\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\r\n                              <td>\r\n                                <mat-form-field class=\"form-item\">\r\n                                  <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"movie.modifying.title.eng\" name=\"eng\">\r\n                                </mat-form-field>\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\r\n                              <td>\r\n                                <mat-form-field class=\"form-item\">\r\n                                  <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"movie.modifying.title.jpn\" name=\"jpn\">\r\n                                </mat-form-field>\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </mat-radio-group>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>순서</th>\r\n                      <td>\r\n                        <mat-form-field>\r\n                          <input matInput type=\"number\" [(ngModel)]=\"movie.modifying.order\" name=\"order\" min=\"1\">\r\n                          <span matSuffix>번째</span>\r\n                        </mat-form-field>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>방영 시기</th>\r\n                      <td>\r\n                        <mat-form-field>\r\n                          <input matInput placeholder=\"개봉일\" [(ngModel)]=\"movie.modifying.aired\" name=\"aired\">\r\n                        </mat-form-field>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>제작사</th>\r\n                      <td>\r\n                        <mat-form-field class=\"form-item\">\r\n                          <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"modifying.studios\" name=\"studios\" rows=\"4\"></textarea>\r\n                          <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\r\n                        </mat-form-field>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>메모</th>\r\n                      <td>\r\n                        <mat-form-field class=\"form-item\">\r\n                          <textarea matInput placeholder=\"메모\" [(ngModel)]=\"movie.modifying.memo\" name=\"memo\" rows=\"4\"></textarea>\r\n                        </mat-form-field>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"2\" style=\"text-align: center;\">\r\n                        <button mat-button type=\"submit\">\r\n                          <mat-icon>check_circle_outline</mat-icon>\r\n                        </button>\r\n                        <button mat-button type=\"button\" (click)=\"cancelModify(m)\">\r\n                          <mat-icon>cancel</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </form>\r\n\r\n              </td>\r\n            </tr>\r\n\r\n          </ng-container>\r\n        </ng-container>\r\n\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n</section>\r\n\r\n<section>\r\n  <div class=\"container\" id=\"writing-area\" #writingArea>\r\n    <table *ngIf=\"!writing\" class=\"table table-dark\">\r\n      <tr>\r\n        <td>\r\n          <span class=\"clickable\" (click)=\"writeMovie()\">+ 새로 작성하기</span>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <form (submit)=\"onWriteSubmit()\" *ngIf=\"writing\">\r\n      <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\r\n        <tr>\r\n          <th style=\"width: 30%;\">검색</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item-select\">\r\n              <mat-label>검색옵션</mat-label>\r\n              <mat-select #writeSearchOption>\r\n                <mat-option value=\"onnada\">Onnada</mat-option>\r\n                <mat-option value=\"mal\">MyAnimeList</mat-option>\r\n                <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>검색어를 입력해주세요.</mat-label>\r\n              <input matInput #writeSearchBox (keyup.enter)=\"searchMovie(writeSearchOption.value, writeSearchBox.value)\">\r\n            </mat-form-field>\r\n            <button mat-flat-button type=\"button\" (click)=\"searchMovie(writeSearchOption.value, writeSearchBox.value)\">\r\n              <mat-icon>search</mat-icon>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\r\n        <tr>\r\n          <th rowspan=\"2\">TVA</th>\r\n          <td>\r\n            <mat-progress-bar *ngIf=\"!tvas\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <mat-form-field *ngIf=\"tvas\" class=\"form-item\">\r\n              <mat-label>카테고리</mat-label>\r\n              <mat-select [(ngModel)]=\"linked.idx\" name=\"tva_category\">\r\n                <mat-option *ngFor=\"let tva of tvas; index as t\" [value]=\"t\">{{tva.category}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field *ngIf=\"tvas && linked\" class=\"form-item\">\r\n              <mat-label>시리즈</mat-label>\r\n              <mat-select [(ngModel)]=\"linked.series\" name=\"tva_series\" (selectionChange)=\"seriesSelect()\">\r\n                <mat-option *ngFor=\"let series of tvas[linked.idx].series; index as r\" [value]=\"r\">{{series.title}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>시리즈 메모</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item\">\r\n              <textarea matInput placeholder=\"시리즈 메모\" [(ngModel)]=\"seriesMemo\" name=\"seriesMemo\" rows=\"4\"></textarea>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>제목</th>\r\n          <td>\r\n            <mat-radio-group [(ngModel)]=\"writingMovie.title.rv\" name=\"rv\">\r\n              <table class=\"table table-borderless\">\r\n                <tr>\r\n                  <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"writingMovie.title.kor\" name=\"kor\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"writingMovie.title.eng\" name=\"eng\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"writingMovie.title.jpn\" name=\"jpn\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </mat-radio-group>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>순서</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" [(ngModel)]=\"writingMovie.order\" name=\"order\" min=\"1\">\r\n              <span matSuffix>번째</span>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>방영 시기</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"개봉일\" [(ngModel)]=\"writingMovie.aired\" name=\"aired\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>제작사</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item\">\r\n              <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"modifying.studios\" name=\"studios\" rows=\"4\"></textarea>\r\n              <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>메모</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item\">\r\n              <textarea matInput placeholder=\"메모\" [(ngModel)]=\"writingMovie.memo\" name=\"memo\" rows=\"4\"></textarea>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\" style=\"text-align: center;\">\r\n            <button mat-button type=\"submit\">\r\n              <mat-icon>check_circle_outline</mat-icon>\r\n            </button>\r\n            <button mat-button type=\"button\" (click)=\"cancelWrite()\">\r\n              <mat-icon>cancel</mat-icon>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-page/no-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-page/no-page.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section></section>\r\n\r\n<section class=\"container\">\r\n  <h3>페이지가 존재하지 않습니다.</h3><br>\r\n  <a mat-flat-button routerLink=\"/\">홈으로</a>\r\n</section>\r\n\r\n<section class=\"container\"></section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/plan/plan.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/plan/plan.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\r\n  <div class=\"border border-secondary info-area\">\r\n    <h4>시청 예정</h4>\r\n    <p>항목 수: {{plans?.length}}</p>\r\n    <p>\r\n      <button mat-flat-button (click)=\"openAll()\">전체 열기</button>&nbsp;\r\n      <button mat-flat-button (click)=\"closeAll()\">전체 닫기</button>&nbsp;\r\n      <button mat-flat-button (click)=\"write(); writingArea.scrollIntoView()\">새 항목 작성</button>\r\n    </p>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"container\">\r\n  <mat-progress-bar *ngIf=\"!plans\" mode=\"indeterminate\"></mat-progress-bar>\r\n  <table class=\"table table-dark\" *ngIf=\"plans\">\r\n    <thead>\r\n      <tr>\r\n        <th (click)=\"align(0, 0)\">타입</th>\r\n        <th (click)=\"align(0, 1)\">제목</th>\r\n        <th (click)=\"align(0, 2)\" colspan=\"120\">제작사</th>\r\n        <th (click)=\"align(0, 3)\">방영분기</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngFor=\"let item of plans; index as i\">\r\n\r\n        <tr [attr.id]=\"item._id\">\r\n          <td *ngIf=\"item.type == 'tva'\">TVA</td>\r\n          <td *ngIf=\"item.type == 'movie'\">극장판</td>\r\n          <td>\r\n            <span class=\"clickable\" (click)=\"click(item._id)\">{{item.title[item.title.rv]}}</span>\r\n          </td>\r\n          <td colspan=\"120\" *ngIf=\"item.studios.length == 0\">-</td>\r\n          <ng-container *ngIf=\"item.studios.length > 0\">\r\n            <td *ngFor=\"let studio of item.studios\" [attr.colspan]=\"120 / item.studios.length\">\r\n              <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n            </td>\r\n          </ng-container>\r\n          <td>{{getQuarterFromAiredDate(item.aired)}}</td>\r\n        </tr>\r\n        <tr *ngIf=\"item.opened\">\r\n          <td colspan=\"123\" style=\"padding: 0px;\">\r\n          \r\n            <!-- detail -->\r\n            <table class=\"table table-dark\">\r\n              <tr>\r\n                <td [attr.rowspan]=\"8 + item.studios.length\" style=\"text-align: center; vertical-align: middle;\" *ngIf=\"item.img\">\r\n                  <img [src]=\"item.img\">\r\n                </td>\r\n                <td [attr.rowspan]=\"8 + item.studios.length\" style=\"text-align: center; vertical-align: middle;\" *ngIf=\"!item.img\">\r\n                  <img src=\"assets/no_image.jpg\">\r\n                </td>\r\n                <th>타입</th>\r\n                <td *ngIf=\"item.type == 'tva'\">TVA</td>\r\n                <td *ngIf=\"item.type == 'movie'\">극장판</td>\r\n              </tr>\r\n              <tr>\r\n                <th rowspan=\"3\" style=\"vertical-align: middle;\">제목</th>\r\n                <td *ngIf=\"item.title.rv == 'kor'\">\r\n                  <b>\r\n                    {{item.title.kor}}\r\n                  </b>\r\n                </td>\r\n                <td *ngIf=\"item.title.rv != 'kor' && item.title.kor\">\r\n                  {{item.title.kor}}\r\n                </td>\r\n                <td *ngIf=\"!item.title.kor\" class=\"no-item\">-</td>\r\n              </tr>\r\n              <tr>\r\n                <td *ngIf=\"item.title.rv == 'eng'\">\r\n                  <b>\r\n                    {{item.title.eng}}\r\n                  </b>\r\n                </td>\r\n                <td *ngIf=\"item.title.rv != 'eng' && item.title.eng\">\r\n                  {{item.title.eng}}\r\n                </td>\r\n                <td *ngIf=\"!item.title.eng\" class=\"no-item\">-</td>\r\n              </tr>\r\n              <tr>\r\n                <td *ngIf=\"item.title.rv == 'jpn'\">\r\n                  <b>\r\n                    {{item.title.jpn}}\r\n                  </b>\r\n                </td>\r\n                <td *ngIf=\"item.title.rv != 'jpn' && item.title.jpn\">\r\n                  {{item.title.jpn}}\r\n                </td>\r\n                <td *ngIf=\"!item.title.jpn\" class=\"no-item\">-</td>\r\n              </tr>\r\n              <tr>\r\n                <th>방영 시기</th>\r\n                <td>{{item.aired}}</td>\r\n              </tr>\r\n              <tr *ngFor=\"let studio of item.studios; index as j\">\r\n                <th *ngIf=\"j == 0\" [attr.rowspan]=\"item.studios.length\" style=\"vertical-align: middle;\">제작사</th>\r\n                <td>\r\n                  <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>메모</th>\r\n                <td>{{item.memo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>MyAnimeList</th>\r\n                <td>\r\n                  <a [href]=\"'https://myanimelist.net/anime/' + item.mal_id\" target=\"_blank\" *ngIf=\"item.mal_id\" class=\"detail-link\">\r\n                    {{item.mal_id}}\r\n                  </a>\r\n                  <span *ngIf=\"!item.mal_id\" class=\"no-item\">-</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td colspan=\"2\" style=\"text-align: center;\">\r\n                  <a mat-button [href]=\"searchService.namuwiki(item.title[item.title.rv])\" target=\"_blank\" [matTooltip]=\"searchService.namuwiki_label()\" class=\"no-hover-link\">\r\n                    <mat-icon>{{searchService.namuwiki_icon()}}</mat-icon>\r\n                  </a>\r\n                  <button mat-button (click)=\"modify(item._id)\" matTooltip=\"수정\">\r\n                    <mat-icon>create</mat-icon>\r\n                  </button>\r\n                  <a mat-button [routerLink]=\"['/', planMap.get(item._id).type, 'data-from-plan', item._id]\" class=\"no-hover-link\" matTooltip=\"시청 완료 목록으로\">\r\n                    <mat-icon>input</mat-icon>\r\n                  </a>\r\n                  <a mat-button [routerLink]=\"['/watching/data-from-plan', item._id]\" class=\"no-hover-link\" matTooltip=\"시청 중인 목록으로\">\r\n                    <mat-icon>add_to_queue</mat-icon>\r\n                  </a>\r\n                  <button mat-button (click)=\"remove(item._id, i, true)\" matTooltip=\"삭제\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"item.modifying\">\r\n          <td colspan=\"122\">\r\n            \r\n            <!-- modifying -->\r\n            <form (submit)=\"onModifySubmit(item._id, i, true)\">\r\n              <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\r\n                <tr>\r\n                  <th style=\"width: 30%;\">검색</th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item-select\">\r\n                      <mat-label>검색옵션</mat-label>\r\n                      <mat-select #searchOption>\r\n                        <mat-option value=\"onnada\">Onnada</mat-option>\r\n                        <mat-option value=\"mal\">MyAnimeList</mat-option>\r\n                        <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>검색어를 입력해주세요.</mat-label>\r\n                      <input matInput #searchBox (keyup.enter)=\"search(searchOption.value, searchBox.value, item.modifying)\">\r\n                    </mat-form-field>\r\n                    <button mat-flat-button type=\"button\" (click)=\"search(searchOption.value, searchBox.value, item.modifying)\">\r\n                      <mat-icon>search</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n                <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\r\n                <tr>\r\n                  <th>제목</th>\r\n                  <td>\r\n                    <mat-radio-group [(ngModel)]=\"item.modifying.title.rv\" name=\"rv\">\r\n                      <table class=\"table table-borderless inner-table\">\r\n                        <tr>\r\n                          <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\r\n                          <td>\r\n                            <mat-form-field class=\"form-item\">\r\n                              <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"item.modifying.title.kor\" name=\"kor\">\r\n                            </mat-form-field>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\r\n                          <td>\r\n                            <mat-form-field class=\"form-item\">\r\n                              <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"item.modifying.title.eng\" name=\"eng\">\r\n                            </mat-form-field>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\r\n                          <td>\r\n                            <mat-form-field class=\"form-item\">\r\n                              <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"item.modifying.title.jpn\" name=\"jpn\">\r\n                            </mat-form-field>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </mat-radio-group>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>방영 시기</th>\r\n                  <td>\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"item.modifying.aired\" name=\"aired\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>제작사</th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"studios\" name=\"studios\" rows=\"4\"></textarea>\r\n                      <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>메모</th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <textarea matInput placeholder=\"메모\" [(ngModel)]=\"item.modifying.memo\" name=\"memo\" rows=\"4\"></textarea>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td colspan=\"2\" style=\"text-align: center;\">\r\n                    <button mat-button type=\"submit\">\r\n                      <mat-icon>check_circle_outline</mat-icon>\r\n                    </button>\r\n                    <button mat-button type=\"button\" (click)=\"closeEdit(item._id)\">\r\n                      <mat-icon>cancel</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </form>\r\n\r\n          </td>\r\n        </tr>\r\n\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n</section>\r\n\r\n<section>\r\n  <div class=\"container\" #writingArea>\r\n    <table *ngIf=\"!writing\" class=\"table table-dark\">\r\n      <tr>\r\n        <td>\r\n          <span class=\"clickable\" (click)=\"write()\">+ 새로 작성하기</span>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <form (submit)=\"onWriteSubmit()\" *ngIf=\"writing\">\r\n      <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\r\n        <tr>\r\n          <th style=\"width: 30%;\">검색</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item-select\">\r\n              <mat-label>검색옵션</mat-label>\r\n              <mat-select #searchOption>\r\n                <mat-option value=\"onnada\">Onnada</mat-option>\r\n                <mat-option value=\"mal\">MyAnimeList</mat-option>\r\n                <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>검색어를 입력해주세요.</mat-label>\r\n              <input matInput #searchBox (keyup.enter)=\"search(searchOption.value, searchBox.value, writing)\">\r\n            </mat-form-field>\r\n            <button mat-flat-button type=\"button\" (click)=\"search(searchOption.value, searchBox.value, writing)\">\r\n              <mat-icon>search</mat-icon>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\r\n        <tr>\r\n          <th>타입</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <mat-label>타입</mat-label>\r\n              <mat-select [(ngModel)]=\"writing.type\" name=\"type\">\r\n                <mat-option value=\"tva\">TVA</mat-option>\r\n                <mat-option value=\"movie\">극장판</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>제목</th>\r\n          <td>\r\n            <mat-radio-group [(ngModel)]=\"writing.title.rv\" name=\"rv\">\r\n              <table class=\"table table-borderless\">\r\n                <tr>\r\n                  <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"writing.title.kor\" name=\"kor\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"writing.title.eng\" name=\"eng\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"writing.title.jpn\" name=\"jpn\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </mat-radio-group>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>방영 시기</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"writing.aired\" name=\"aired\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>제작사</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item\">\r\n              <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"studios\" name=\"studios\" rows=\"4\"></textarea>\r\n              <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>메모</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item\">\r\n              <textarea matInput placeholder=\"메모\" [(ngModel)]=\"writing.memo\" name=\"memo\" rows=\"4\"></textarea>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\" style=\"text-align: center;\">\r\n            <button mat-button type=\"submit\">\r\n              <mat-icon>check_circle_outline</mat-icon>\r\n            </button>\r\n            <button mat-button type=\"button\" (click)=\"closeEdit()\">\r\n              <mat-icon>cancel</mat-icon>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tva/tva.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tva/tva.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\r\n  <div class=\"border border-secondary info-area\">\r\n    <h4>TVA</h4>\r\n    <p>카테고리 수: {{tvas?.length}}</p>\r\n    <!-- <p>TVA 수: {{count()}}</p> -->\r\n    <p>TVA 수: {{counts.sequences}}</p>\r\n    <p>에피소드 수: {{counts.episodes}}</p>\r\n    <p>\r\n      <button mat-flat-button (click)=\"openAll()\">전체 열기</button>&nbsp;\r\n      <button mat-flat-button (click)=\"closeAll()\">전체 닫기</button>&nbsp;\r\n      <button mat-flat-button (click)=\"writeTva(); writingArea.scrollIntoView()\">새 항목 작성</button>\r\n    </p>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"container\">\r\n  <mat-progress-bar *ngIf=\"!tvas\" mode=\"indeterminate\"></mat-progress-bar>\r\n  <div *ngIf=\"tvas\">\r\n    <table class=\"table table-dark\">\r\n      <thead>\r\n        <tr>\r\n          <th (click)=\"align(0, 0)\">카테고리</th>\r\n          <th (click)=\"align(0, 1)\">시리즈</th>\r\n          <th (click)=\"align(0, 2)\">제목</th>\r\n          <th>시즌</th>\r\n          <th (click)=\"align(0, 3)\" colspan=\"120\">제작사</th>\r\n          <th (click)=\"align(0, 4)\">화수</th>\r\n          <th (click)=\"align(0, 5)\">방영분기</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <ng-container *ngFor=\"let tva of tvas; index as t\">\r\n\r\n          <ng-container *ngFor=\"let series of tva.series; index as i\">\r\n            <ng-container *ngFor=\"let sequence of series.sequences; index as j\">\r\n              <tr [attr.id]=\"tva._id\">\r\n                <td *ngIf=\"tva.series.length > 1 && i == 0 && j == 0\" [attr.rowspan]=\"allElementsLength(t)\"\r\n                  class=\"table-category\" style=\"vertical-align: middle;\">{{tva.category}}</td>\r\n                <td *ngIf=\"tva.series.length > 1 && j == 0\" class=\"table-series\"\r\n                  [attr.rowspan]=\"tva.series[i].sequences.length\" style=\"vertical-align: middle;\">{{series.title}}</td>\r\n                <td *ngIf=\"tva.series.length == 1 && tva.series[0].sequences.length > 1 && j == 0\"\r\n                  [attr.rowspan]=\"tva.series[0].sequences.length\" colspan=\"2\" class=\"table-category\"\r\n                  style=\"vertical-align: middle; text-align: center;\">{{tva.category}}</td>\r\n                <td *ngIf=\"tva.series.length == 1 && tva.series[0].sequences.length == 1\" colspan=\"2\"></td>\r\n                <td>\r\n                  <span class=\"clickable\" (click)=\"clickTva(t, i, j)\">{{sequence.title[sequence.title.rv]}}</span>\r\n                </td>\r\n                <td *ngIf=\"tva.series.length == 1 && tva.series[0].sequences.length == 1; else seasonTemplate\"></td>\r\n                <ng-template #seasonTemplate>\r\n                  <td>{{sequence.season}}</td>\r\n                </ng-template>\r\n                <td *ngFor=\"let studio of sequence.studios\" [attr.colspan]=\"120 / sequence.studios.length\">\r\n                  <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n                </td>\r\n                <td>{{sequence.episodes}}</td>\r\n                <td>'{{sequence.premiered.year.toString().substring(2)}} - {{sequence.premiered.quarter}}</td>\r\n              </tr>\r\n              <tr *ngIf=\"tva.opened && i == tva.series.length-1 && j == series.sequences.length-1\">\r\n                <td colspan=\"126\" style=\"padding: 0px;\">\r\n\r\n                  <!-- detail -->\r\n                  <table class=\"table table-dark table-hover\">\r\n                    <tr>\r\n                      <td style=\"text-align: center; vertical-align: middle;\"\r\n                        [attr.rowspan]=\"(tva.category_movie ? 14 : 13) + tva.series[tva.opened.series].sequences[tva.opened.sequence].studios.length\">\r\n                        <img [src]=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].img\">\r\n                      </td>\r\n                      <th>카테고리</th>\r\n                      <td>\r\n                        <span class=\"clickable\" (click)=\"editCategory(t)\">{{tva.category}}</span>\r\n                      </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"tva.opened.linked\">\r\n                      <th>극장판</th>\r\n                      <td>\r\n                        <a [routerLink]=\"['/movie', tva.opened.linked._id, tva.opened.linked.series, 0]\" class=\"detail-link\">\r\n                          {{tva.opened.linked.title}}\r\n                        </a>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>시리즈</th>\r\n                      <td>{{tva.series[tva.opened.series].title}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>시리즈 메모</th>\r\n                      <td>{{tva.series[tva.opened.series].memo}}</td>\r\n                    </tr>\r\n                    <tr><td></td><td></td></tr>\r\n                    <tr>\r\n                      <th rowspan=\"3\" style=\"vertical-align: middle;\">제목</th>\r\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv == 'kor'\">\r\n                        <b>\r\n                          {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.kor}}\r\n                        </b>\r\n                      </td>\r\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv != 'kor'\">\r\n                        {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.kor}}\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv == 'eng'\">\r\n                        <b>\r\n                          {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.eng}}\r\n                        </b>\r\n                      </td>\r\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv != 'eng'\">\r\n                        {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.eng}}\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv == 'jpn'\">\r\n                        <b>\r\n                          {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.jpn}}\r\n                        </b>\r\n                      </td>\r\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv != 'jpn'\">\r\n                        {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.jpn}}\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>방영 분기</th>\r\n                      <td>\r\n                        {{tva.series[tva.opened.series].sequences[tva.opened.sequence].premiered.year}}년 {{tva.series[tva.opened.series].sequences[tva.opened.sequence].premiered.quarter}}분기\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>방영 시기</th>\r\n                      <td>\r\n                        {{tva.series[tva.opened.series].sequences[tva.opened.sequence].aired.start}} ~ {{tva.series[tva.opened.series].sequences[tva.opened.sequence].aired.end}}\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>방영 화수</th>\r\n                      <td>{{tva.series[tva.opened.series].sequences[tva.opened.sequence].episodes}}화</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let studio of tva.series[tva.opened.series].sequences[tva.opened.sequence].studios; index as s\">\r\n                      <th *ngIf=\"s == 0\" style=\"vertical-align: middle;\"\r\n                        [attr.rowspan]=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].studios.length\">제작사</th>\r\n                      <td>\r\n                        <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>메모</th>\r\n                      <td>{{tva.series[tva.opened.series].sequences[tva.opened.sequence].memo}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>MyAnimeList</th>\r\n                      <td>\r\n                        <a [href]=\"'https://myanimelist.net/anime/' + tva.series[tva.opened.series].sequences[tva.opened.sequence].mal_id\" target=\"_blank\" class=\"detail-link\">\r\n                          {{tva.series[tva.opened.series].sequences[tva.opened.sequence].mal_id}}\r\n                        </a>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td colspan=\"2\" style=\"text-align: center;\">\r\n                        <a mat-button [href]=\"searchService.namuwiki(tva.series[tva.opened.series].title)\" target=\"_blank\" [matTooltip]=\"searchService.namuwiki_label()\" class=\"no-hover-link\">\r\n                          <mat-icon>{{searchService.namuwiki_icon()}}</mat-icon>\r\n                        </a>\r\n                        <button mat-button (click)=\"modifyTva(t, tva.opened.series, tva.opened.sequence)\" matTooltip=\"수정\">\r\n                          <mat-icon>create</mat-icon>\r\n                        </button>\r\n                        <button mat-button (click)=\"removeTva(t, tva.opened.series, tva.opened.sequence)\" matTooltip=\"삭제\">\r\n                          <mat-icon>delete</mat-icon>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"tva.modifying && i == tva.series.length-1 && j == series.sequences.length-1\">\r\n                <td colspan=\"126\">\r\n                  \r\n                  <!-- modifying -->\r\n                  <form (submit)=\"onModifySubmit(t, modifying.series, modifying.sequence)\">\r\n                    <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\r\n                      <tr>\r\n                        <th style=\"width: 30%;\">검색</th>\r\n                        <td>\r\n                          <mat-form-field class=\"form-item-select\">\r\n                            <mat-label>검색옵션</mat-label>\r\n                            <mat-select #searchOption>\r\n                              <mat-option value=\"onnada\">Onnada</mat-option>\r\n                              <mat-option value=\"mal\">MyAnimeList</mat-option>\r\n                              <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n                          <mat-form-field appearance=\"outline\">\r\n                            <mat-label>검색어를 입력해주세요.</mat-label>\r\n                            <input matInput #searchBox (keyup.enter)=\"searchTva(searchOption.value, searchBox.value, t)\">\r\n                          </mat-form-field>\r\n                          <button mat-flat-button type=\"button\" (click)=\"searchTva(searchOption.value, searchBox.value, t)\">\r\n                            <mat-icon>search</mat-icon>\r\n                          </button>\r\n                        </td>\r\n                      </tr>\r\n                      <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\r\n                      <tr>\r\n                        <th>시리즈</th>\r\n                        <td>\r\n                          <mat-form-field class=\"form-item\">\r\n                            <input matInput placeholder=\"시리즈\" [formControl]=\"seriesControl\" [matAutocomplete]=\"auto\" name=\"seriesTitle\">\r\n                            <mat-autocomplete #auto=\"matAutocomplete\">\r\n                              <mat-option *ngFor=\"let option of seriesFilteredOptions | async\" [value]=\"option\">{{option}}</mat-option>\r\n                            </mat-autocomplete>\r\n                          </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>제목</th>\r\n                        <td>\r\n                          <mat-radio-group [(ngModel)]=\"tva.modifying.title.rv\" name=\"rv\">\r\n                            <table class=\"table table-borderless inner-table\">\r\n                              <tr>\r\n                                <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\r\n                                <td>\r\n                                  <mat-form-field class=\"form-item\">\r\n                                    <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"tva.modifying.title.kor\" name=\"kor\">\r\n                                  </mat-form-field>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\r\n                                <td>\r\n                                  <mat-form-field class=\"form-item\">\r\n                                    <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"tva.modifying.title.eng\" name=\"eng\">\r\n                                  </mat-form-field>\r\n                                </td>\r\n                              </tr>\r\n                              <tr>\r\n                                <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\r\n                                <td>\r\n                                  <mat-form-field class=\"form-item\">\r\n                                    <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"tva.modifying.title.jpn\" name=\"jpn\">\r\n                                  </mat-form-field>\r\n                                </td>\r\n                              </tr>\r\n                            </table>\r\n                          </mat-radio-group>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>시즌</th>\r\n                        <td>\r\n                          <mat-form-field>\r\n                            <input matInput type=\"number\" [(ngModel)]=\"tva.modifying.season\" name=\"season\" min=\"1\">\r\n                            <span matSuffix>기</span>\r\n                          </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th rowspan=\"2\">방영 분기</th>\r\n                        <td>\r\n                          <mat-form-field>\r\n                            <input matInput placeholder=\"연도\" type=\"number\" [(ngModel)]=\"tva.modifying.premiered.year\" name=\"year\">\r\n                            <span matSuffix>년</span>\r\n                          </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>\r\n                          <mat-form-field>\r\n                            <input matInput placeholder=\"분기\" type=\"number\" [(ngModel)]=\"tva.modifying.premiered.quarter\" name=\"quarter\" max=\"4\" min=\"1\">\r\n                            <span matSuffix>분기</span>\r\n                          </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th rowspan=\"2\">방영 시기</th>\r\n                        <td>\r\n                          <mat-form-field>\r\n                            <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"tva.modifying.aired.start\" name=\"aired_start\">\r\n                          </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>\r\n                          <mat-form-field>\r\n                            <input matInput placeholder=\"방영 종료일\" [(ngModel)]=\"tva.modifying.aired.end\" name=\"aired_end\">\r\n                          </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>방영 화수</th>\r\n                        <td>\r\n                          <mat-form-field>\r\n                            <input matInput type=\"number\" [(ngModel)]=\"tva.modifying.episodes\" name=\"episodes\" min=\"1\">\r\n                            <span matSuffix>화</span>\r\n                          </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>제작사</th>\r\n                        <td>\r\n                          <mat-form-field class=\"form-item\">\r\n                            <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"modifying.studios\" name=\"studios\" rows=\"4\"></textarea>\r\n                            <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\r\n                          </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>메모</th>\r\n                        <td>\r\n                          <mat-form-field class=\"form-item\">\r\n                            <textarea matInput placeholder=\"메모\" [(ngModel)]=\"tva.modifying.memo\" name=\"memo\" rows=\"4\"></textarea>\r\n                          </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td colspan=\"2\" style=\"text-align: center;\">\r\n                          <button mat-button type=\"submit\">\r\n                            <mat-icon>check_circle_outline</mat-icon>\r\n                          </button>\r\n                          <button mat-button type=\"button\" (click)=\"cancelModify(t)\">\r\n                            <mat-icon>cancel</mat-icon>\r\n                          </button>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </form>\r\n\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </ng-container>\r\n\r\n        </ng-container>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</section>\r\n\r\n<section>\r\n  <div class=\"container\" id=\"writing-area\" #writingArea>\r\n    <table *ngIf=\"!writing\" class=\"table table-dark\">\r\n      <tr>\r\n        <td>\r\n          <span class=\"clickable\" (click)=\"writeTva()\">+ 새로 작성하기</span>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <form (submit)=\"onWriteSubmit()\" *ngIf=\"writing\">\r\n      <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\r\n        <tr>\r\n          <th style=\"width: 30%;\">검색</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item-select\">\r\n              <mat-label>검색옵션</mat-label>\r\n              <mat-select #writeSearchOption>\r\n                <mat-option value=\"onnada\">Onnada</mat-option>\r\n                <mat-option value=\"mal\">MyAnimeList</mat-option>\r\n                <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>검색어를 입력해주세요.</mat-label>\r\n              <input matInput #writeSearchBox (keyup.enter)=\"searchTva(writeSearchOption.value, writeSearchBox.value)\">\r\n            </mat-form-field>\r\n            <button mat-flat-button type=\"button\" (click)=\"searchTva(writeSearchOption.value, writeSearchBox.value)\">\r\n              <mat-icon>search</mat-icon>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\r\n        <tr>\r\n          <th>카테고리</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item\">\r\n              <input matInput placeholder=\"카테고리\" [formControl]=\"categoryControl\" [matAutocomplete]=\"autoWriteCategory\" name=\"categoryTitle\">\r\n              <mat-autocomplete #autoWriteCategory=\"matAutocomplete\" (optionSelected)=\"categoryInput($event)\">\r\n                <mat-option *ngFor=\"let option of categoryFilteredOptions | async\" [value]=\"option\">{{option}}</mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>시리즈</th>\r\n          <td>\r\n            <mat-form-field [formGroup]=\"writeFormGroup\" class=\"form-item\">\r\n              <input matInput placeholder=\"시리즈\" [matAutocomplete]=\"autoWriteSeries\" formControlName=\"writeSeriesControl\">\r\n              <mat-autocomplete #autoWriteSeries=\"matAutocomplete\" (optionSelected)=\"seriesInput($event)\">\r\n                <mat-option *ngFor=\"let option of seriesFilteredOptions | async\" [value]=\"option\">{{option}}</mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>시리즈 메모</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item\">\r\n              <textarea matInput placeholder=\"시리즈 메모\" [(ngModel)]=\"seriesMemo\" name=\"seriesMemo\" rows=\"4\"></textarea>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>제목</th>\r\n          <td>\r\n            <mat-radio-group [(ngModel)]=\"writingTva.title.rv\" name=\"rv\">\r\n              <table class=\"table table-borderless\">\r\n                <tr>\r\n                  <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"writingTva.title.kor\" name=\"kor\">\r\n                    </mat-form-field>\r\n                    <button mat-icon-button (click)=\"toCategory('kor')\" type=\"button\">\r\n                      <mat-icon>swap_vert</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"writingTva.title.eng\" name=\"eng\">\r\n                    </mat-form-field>\r\n                    <button mat-icon-button (click)=\"toCategory('eng')\" type=\"button\">\r\n                      <mat-icon>swap_vert</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"writingTva.title.jpn\" name=\"jpn\">\r\n                    </mat-form-field>\r\n                    <button mat-icon-button (click)=\"toCategory('jpn')\" type=\"button\">\r\n                      <mat-icon>swap_vert</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </mat-radio-group>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>시즌</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" [(ngModel)]=\"writingTva.season\" name=\"season\" min=\"1\">\r\n              <span matSuffix>기</span>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th rowspan=\"2\">방영 분기</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"연도\" type=\"number\" [(ngModel)]=\"writingTva.premiered.year\" name=\"year\">\r\n              <span matSuffix>년</span>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"분기\" type=\"number\" [(ngModel)]=\"writingTva.premiered.quarter\" name=\"quarter\" max=\"4\" min=\"1\">\r\n              <span matSuffix>분기</span>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th rowspan=\"2\">방영 시기</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"writingTva.aired.start\" name=\"aired_start\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"방영 종료일\" [(ngModel)]=\"writingTva.aired.end\" name=\"aired_end\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>방영 화수</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" [(ngModel)]=\"writingTva.episodes\" name=\"episodes\" min=\"1\">\r\n              <span matSuffix>화</span>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>제작사</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item\">\r\n              <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"modifying.studios\" name=\"studios\" rows=\"4\"></textarea>\r\n              <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>메모</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item\">\r\n              <textarea matInput placeholder=\"메모\" [(ngModel)]=\"writingTva.memo\" name=\"memo\" rows=\"4\"></textarea>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\" style=\"text-align: center;\">\r\n            <button mat-button type=\"submit\">\r\n              <mat-icon>check_circle_outline</mat-icon>\r\n            </button>\r\n            <button mat-button type=\"button\" (click)=\"cancelWrite()\">\r\n              <mat-icon>cancel</mat-icon>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/watching/watching.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/watching/watching.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"container\">\r\n  <div class=\"border border-secondary info-area\">\r\n    <h4>시청 중</h4>\r\n    <p>방영 중인 항목 수: {{airings?.length}}</p>\r\n    <p>완결작 수: {{ends?.length}}</p>\r\n    <p class=\"info-button-area\">\r\n      <button mat-flat-button (click)=\"openAll()\">전체 열기</button>&nbsp;\r\n      <button mat-flat-button (click)=\"closeAll()\">전체 닫기</button>&nbsp;\r\n      <button mat-flat-button (click)=\"write(); writingArea.scrollIntoView()\">새 항목 작성</button>&nbsp;\r\n      <button mat-flat-button (click)=\"openTodayAiring()\" title=\"오늘이라고 적었긴 한데 그냥 24시간 이내 방영작임\">오늘 방영작 펼치기</button>\r\n    </p>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"container\">\r\n  <mat-progress-bar *ngIf=\"!airings\" mode=\"indeterminate\"></mat-progress-bar>\r\n  <table class=\"table table-dark\" *ngIf=\"airings\">\r\n    <caption>방영 중인 목록</caption>\r\n    <thead>\r\n      <tr>\r\n        <th (click)=\"align(0, 0)\">타입</th>\r\n        <th (click)=\"align(0, 1)\">제목</th>\r\n        <th (click)=\"align(0, 2)\" colspan=\"120\">제작사</th>\r\n        <th (click)=\"align(0, 4)\">방영요일</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngFor=\"let item of airings; index as i\">\r\n\r\n        <tr [attr.id]=\"item._id\">\r\n          <td *ngIf=\"item.type == 'tva'\">TVA</td>\r\n          <td *ngIf=\"item.type == 'movie'\">극장판</td>\r\n          <td>\r\n            <span class=\"clickable\" (click)=\"click(item._id)\">{{item.title[item.title.rv]}}</span>\r\n          </td>\r\n          <td *ngFor=\"let studio of item.studios\" [attr.colspan]=\"120 / item.studios.length\">\r\n            <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n          </td>\r\n          <td>{{getDay(item.broadcast)}}</td>\r\n        </tr>\r\n        <tr *ngIf=\"item.opened\">\r\n          <td colspan=\"123\" style=\"padding: 0px;\">\r\n          \r\n            <!-- detail -->\r\n            <table class=\"table table-dark\">\r\n              <tr>\r\n                <td [attr.rowspan]=\"8 + item.studios.length\" style=\"text-align: center; vertical-align: middle;\">\r\n                  <img [src]=\"item.img\">\r\n                </td>\r\n                <th>타입</th>\r\n                <td *ngIf=\"item.type == 'tva'\">TVA</td>\r\n                <td *ngIf=\"item.type == 'movie'\">극장판</td>\r\n              </tr>\r\n              <tr>\r\n                <th rowspan=\"3\" style=\"vertical-align: middle;\">제목</th>\r\n                <td *ngIf=\"item.title.rv == 'kor'\">\r\n                  <b>\r\n                    {{item.title.kor}}\r\n                  </b>\r\n                </td>\r\n                <td *ngIf=\"item.title.rv != 'kor'\">\r\n                  {{item.title.kor}}\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td *ngIf=\"item.title.rv == 'eng'\">\r\n                  <b>\r\n                    {{item.title.eng}}\r\n                  </b>\r\n                </td>\r\n                <td *ngIf=\"item.title.rv != 'eng'\">\r\n                  {{item.title.eng}}\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td *ngIf=\"item.title.rv == 'jpn'\">\r\n                  <b>\r\n                    {{item.title.jpn}}\r\n                  </b>\r\n                </td>\r\n                <td *ngIf=\"item.title.rv != 'jpn'\">\r\n                  {{item.title.jpn}}\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>방영 분기</th>\r\n                <td>{{item.premiered.year}}년 {{item.premiered.quarter}}분기</td>\r\n              </tr>\r\n              <tr>\r\n                <th>방영 시기</th>\r\n                <td>{{item.aired}}</td>\r\n              </tr>\r\n              <tr *ngFor=\"let studio of item.studios; index as j\">\r\n                <th *ngIf=\"j == 0\" [attr.rowspan]=\"item.studios.length\" style=\"vertical-align: middle;\">제작사</th>\r\n                <td>\r\n                  <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>메모</th>\r\n                <td>{{item.memo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>MyAnimeList</th>\r\n                <td>\r\n                  <a [href]=\"'https://myanimelist.net/anime/' + item.mal_id\" target=\"_blank\" class=\"detail-link\">\r\n                    {{item.mal_id}}\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n              <tr><td colspan=\"3\">오늘: {{getToday()}}</td></tr>\r\n              <tr>\r\n                <td colspan=\"3\" class=\"inner-table-section\" *ngIf=\"!item.videos || (item.videos && item.videos.length > 0)\">\r\n\r\n                  <mat-progress-bar *ngIf=\"!item.videos\" mode=\"indeterminate\"></mat-progress-bar>\r\n                  <table class=\"table table-dark\" *ngIf=\"item.videos\">\r\n                    <tr *ngFor=\"let video of item.videos\">\r\n                      <td>{{getDate(video.date)}}</td>\r\n                      <td>{{video.name}}</td>\r\n                      <td>{{getSize(video.size)}}</td>\r\n                      <td>\r\n                        <a [href]=\"video.magnet | safeUrl\" class=\"download-link\">▶</a>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n\r\n                </td>\r\n              </tr>\r\n\r\n              <tr *ngIf=\"!item.videos || (item.videos && item.videos.length > 0)\"><td colspan=\"3\"></td></tr>\r\n\r\n              <tr>\r\n                <td colspan=\"3\" class=\"inner-table-section\" *ngIf=\"!item.ohys || (item.ohys && item.ohys.length > 0)\">\r\n\r\n                  <mat-progress-bar *ngIf=\"!item.ohys\" mode=\"indeterminate\"></mat-progress-bar>\r\n                  <table class=\"table table-dark\" *ngIf=\"item.ohys\">\r\n                    <tr *ngFor=\"let ohys of item.ohys\">\r\n                      <td>{{ohys.name}}</td>\r\n                      <td>\r\n                        <a [href]=\"ohys.link\" class=\"download-link\" download>@</a>\r\n                      </td>\r\n                      <td>\r\n                        <a [href]=\"ohys.magnet | safeUrl\" class=\"download-link\">▶</a>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n\r\n                </td>\r\n              </tr>\r\n\r\n              <tr *ngIf=\"!item.ohys || (item.ohys && item.ohys.length > 0)\"><td colspan=\"3\"></td></tr>\r\n\r\n              <tr>\r\n                <td colspan=\"3\" class=\"inner-table-section\" *ngIf=\"!item.subtitles || (item.subtitles && item.subtitles.length > 0)\">\r\n\r\n                  <mat-progress-bar *ngIf=\"!item.subtitles\" mode=\"indeterminate\"></mat-progress-bar>\r\n                  <table class=\"table table-dark\" *ngIf=\"item.subtitles\">\r\n                    <tr *ngFor=\"let subtitle of item.subtitles\">\r\n                      <td>{{getDate(subtitle.date)}}</td>\r\n                      <td>제{{subtitle.episode}}화</td>\r\n                      <td>{{subtitle.by}}</td>\r\n                      <td><a class=\"download-link\" [href]=\"subtitle.link\" target=\"_blank\">페이지로 이동</a></td>\r\n                    </tr>\r\n                  </table>\r\n\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td colspan=\"3\" style=\"text-align: center;\">\r\n                  <a mat-button [href]=\"searchService.namuwiki(item.title[item.title.rv])\" target=\"_blank\" [matTooltip]=\"searchService.namuwiki_label()\" class=\"no-hover-link\">\r\n                    <mat-icon>{{searchService.namuwiki_icon()}}</mat-icon>\r\n                  </a>\r\n                  <button mat-button (click)=\"modify(item._id)\" matTooltip=\"수정\">\r\n                    <mat-icon>create</mat-icon>\r\n                  </button>\r\n                  <a mat-button class=\"no-hover-link\" [routerLink]=\"['/', watchingMap.get(item._id).type, 'data-from-watching', item._id]\" matTooltip=\"시청 완료\">\r\n                    <mat-icon>input</mat-icon>\r\n                  </a>\r\n                  <button mat-button (click)=\"remove(item._id, i, true)\" matTooltip=\"삭제\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"item.modifying\">\r\n          <td colspan=\"122\">\r\n            \r\n            <!-- modifying -->\r\n            <form (submit)=\"onModifySubmit(item._id, i, true)\">\r\n              <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\r\n                <tr>\r\n                  <th style=\"width: 30%;\">검색</th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item-select\">\r\n                      <mat-label>검색옵션</mat-label>\r\n                      <mat-select #searchOption>\r\n                        <mat-option value=\"onnada\">Onnada</mat-option>\r\n                        <mat-option value=\"mal\">MyAnimeList</mat-option>\r\n                        <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>검색어를 입력해주세요.</mat-label>\r\n                      <input matInput #searchBox (keyup.enter)=\"search(searchOption.value, searchBox.value, item.modifying)\">\r\n                    </mat-form-field>\r\n                    <button mat-flat-button type=\"button\" (click)=\"search(searchOption.value, searchBox.value, item.modifying)\">\r\n                      <mat-icon>search</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n                <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\r\n                <tr>\r\n                  <th>제목</th>\r\n                  <td>\r\n                    <mat-radio-group [(ngModel)]=\"item.modifying.title.rv\" name=\"rv\">\r\n                      <table class=\"table table-borderless inner-table\">\r\n                        <tr>\r\n                          <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\r\n                          <td>\r\n                            <mat-form-field class=\"form-item\">\r\n                              <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"item.modifying.title.kor\" name=\"kor\">\r\n                            </mat-form-field>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\r\n                          <td>\r\n                            <mat-form-field class=\"form-item\">\r\n                              <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"item.modifying.title.eng\" name=\"eng\">\r\n                            </mat-form-field>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\r\n                          <td>\r\n                            <mat-form-field class=\"form-item\">\r\n                              <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"item.modifying.title.jpn\" name=\"jpn\">\r\n                            </mat-form-field>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </mat-radio-group>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th rowspan=\"2\">방영 분기</th>\r\n                  <td>\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"연도\" type=\"number\" [(ngModel)]=\"item.modifying.premiered.year\" name=\"year\">\r\n                      <span matSuffix>년</span>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"분기\" type=\"number\" [(ngModel)]=\"item.modifying.premiered.quarter\" name=\"quarter\" max=\"4\" min=\"1\">\r\n                      <span matSuffix>분기</span>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>방영 시기</th>\r\n                  <td>\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"item.modifying.aired\" name=\"aired\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>제작사</th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"studios\" name=\"studios\" rows=\"4\"></textarea>\r\n                      <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>메모</th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <textarea matInput placeholder=\"메모\" [(ngModel)]=\"item.modifying.memo\" name=\"memo\" rows=\"4\"></textarea>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td colspan=\"2\" style=\"text-align: center;\">\r\n                    <button mat-button type=\"submit\">\r\n                      <mat-icon>check_circle_outline</mat-icon>\r\n                    </button>\r\n                    <button mat-button type=\"button\" (click)=\"closeEdit(item._id)\">\r\n                      <mat-icon>cancel</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </form>\r\n\r\n          </td>\r\n        </tr>\r\n\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n</section>\r\n\r\n<section class=\"container\">\r\n  <table class=\"table table-dark\" *ngIf=\"ends\">\r\n    <caption>완결작 목록</caption>\r\n    <thead>\r\n      <tr>\r\n        <th (click)=\"align(1, 0)\">타입</th>\r\n        <th (click)=\"align(1, 1)\">제목</th>\r\n        <th (click)=\"align(1, 2)\" colspan=\"120\">제작사</th>\r\n        <th (click)=\"align(1, 3)\">방영분기</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <ng-container *ngFor=\"let item of ends; index as i\">\r\n\r\n        <tr [attr.id]=\"item._id\">\r\n          <td *ngIf=\"item.type == 'tva'\">TVA</td>\r\n          <td *ngIf=\"item.type == 'movie'\">극장판</td>\r\n          <td>\r\n            <span class=\"clickable\" (click)=\"click(item._id)\">{{item.title[item.title.rv]}}</span>\r\n          </td>\r\n          <td *ngFor=\"let studio of item.studios\" [attr.colspan]=\"120 / item.studios.length\">\r\n            <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n          </td>\r\n          <td>'{{item.premiered.year.toString().substring(2)}} - {{item.premiered.quarter}}</td>\r\n        </tr>\r\n        <tr *ngIf=\"item.opened\">\r\n          <td colspan=\"123\" style=\"padding: 0px;\">\r\n          \r\n            <!-- detail -->\r\n            <table class=\"table table-dark table-hover\">\r\n              <tr>\r\n                <td [attr.rowspan]=\"10 + item.studios.length\" style=\"text-align: center; vertical-align: middle;\">\r\n                  <img [src]=\"item.img\">\r\n                </td>\r\n                <th>타입</th>\r\n                <td *ngIf=\"item.type == 'tva'\">TVA</td>\r\n                <td *ngIf=\"item.type == 'movie'\">극장판</td>\r\n              </tr>\r\n              <tr>\r\n                <th rowspan=\"3\" style=\"vertical-align: middle;\">제목</th>\r\n                <td *ngIf=\"item.title.rv == 'kor'\">\r\n                  <b>\r\n                    {{item.title.kor}}\r\n                  </b>\r\n                </td>\r\n                <td *ngIf=\"item.title.rv != 'kor'\">\r\n                  {{item.title.kor}}\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td *ngIf=\"item.title.rv == 'eng'\">\r\n                  <b>\r\n                    {{item.title.eng}}\r\n                  </b>\r\n                </td>\r\n                <td *ngIf=\"item.title.rv != 'eng'\">\r\n                  {{item.title.eng}}\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td *ngIf=\"item.title.rv == 'jpn'\">\r\n                  <b>\r\n                    {{item.title.jpn}}\r\n                  </b>\r\n                </td>\r\n                <td *ngIf=\"item.title.rv != 'jpn'\">\r\n                  {{item.title.jpn}}\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>방영 분기</th>\r\n                <td>{{item.premiered.year}}년 {{item.premiered.quarter}}분기</td>\r\n              </tr>\r\n              <tr>\r\n                <th>방영 시기</th>\r\n                <td>{{item.aired}}</td>\r\n              </tr>\r\n              <tr *ngFor=\"let studio of item.studios; index as j\">\r\n                <th *ngIf=\"j == 0\" [attr.rowspan]=\"item.studios.length\" style=\"vertical-align: middle;\">제작사</th>\r\n                <td>\r\n                  <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>메모</th>\r\n                <td>{{item.memo}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>MyAnimeList</th>\r\n                <td>\r\n                  <a [href]=\"'https://myanimelist.net/anime/' + item.mal_id\" target=\"_blank\" class=\"detail-link\">\r\n                    {{item.mal_id}}\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td colspan=\"2\" style=\"text-align: center;\">\r\n                  <a mat-button [href]=\"searchService.namuwiki(item.title[item.title.rv])\" target=\"_blank\" [matTooltip]=\"searchService.namuwiki_label()\" class=\"no-hover-link\">\r\n                    <mat-icon>{{searchService.namuwiki_icon()}}</mat-icon>\r\n                  </a>\r\n                  <button mat-button (click)=\"findVideosAndSubtitles(item)\" matTooltip=\"영상/자막 찾기\">\r\n                    <mat-icon>find_in_page</mat-icon>\r\n                  </button>\r\n                  <button mat-button (click)=\"modify(item._id)\" matTooltip=\"수정\">\r\n                    <mat-icon>create</mat-icon>\r\n                  </button>\r\n                  <a mat-button class=\"no-hover-link\" [routerLink]=\"['/', watchingMap.get(item._id).type, 'data-from-watching', item._id]\" matTooltip=\"시청 완료\">\r\n                    <mat-icon>input</mat-icon>\r\n                  </a>\r\n                  <button mat-button (click)=\"remove(item._id, i, false)\" matTooltip=\"삭제\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"item.modifying\">\r\n          <td colspan=\"122\">\r\n            \r\n            <!-- modifying -->\r\n            <form (submit)=\"onModifySubmit(item._id, i, false)\">\r\n              <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\r\n                <tr>\r\n                  <th style=\"width: 30%;\">검색</th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item-select\">\r\n                      <mat-label>검색옵션</mat-label>\r\n                      <mat-select #searchOption>\r\n                        <mat-option value=\"onnada\">Onnada</mat-option>\r\n                        <mat-option value=\"mal\">MyAnimeList</mat-option>\r\n                        <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>검색어를 입력해주세요.</mat-label>\r\n                      <input matInput #searchBox (keyup.enter)=\"search(searchOption.value, searchBox.value, item.modifying)\">\r\n                    </mat-form-field>\r\n                    <button mat-flat-button type=\"button\" (click)=\"search(searchOption.value, searchBox.value, item.modifying)\">\r\n                      <mat-icon>search</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n                <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\r\n                <tr>\r\n                  <th>타입</th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <mat-label>타입</mat-label>\r\n                      <mat-select [(ngModel)]=\"item.modifying.type\" name=\"type\">\r\n                        <mat-option value=\"tva\">TVA</mat-option>\r\n                        <mat-option value=\"movie\">극장판</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>제목</th>\r\n                  <td>\r\n                    <mat-radio-group [(ngModel)]=\"item.modifying.title.rv\" name=\"rv\">\r\n                      <table class=\"table table-borderless inner-table\">\r\n                        <tr>\r\n                          <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\r\n                          <td>\r\n                            <mat-form-field class=\"form-item\">\r\n                              <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"item.modifying.title.kor\" name=\"kor\">\r\n                            </mat-form-field>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\r\n                          <td>\r\n                            <mat-form-field class=\"form-item\">\r\n                              <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"item.modifying.title.eng\" name=\"eng\">\r\n                            </mat-form-field>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\r\n                          <td>\r\n                            <mat-form-field class=\"form-item\">\r\n                              <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"item.modifying.title.jpn\" name=\"jpn\">\r\n                            </mat-form-field>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </mat-radio-group>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th rowspan=\"2\">방영 분기</th>\r\n                  <td>\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"연도\" type=\"number\" [(ngModel)]=\"item.modifying.premiered.year\" name=\"year\">\r\n                      <span matSuffix>년</span>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"분기\" type=\"number\" [(ngModel)]=\"item.modifying.premiered.quarter\" name=\"quarter\" max=\"4\" min=\"1\">\r\n                      <span matSuffix>분기</span>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>방영 시기</th>\r\n                  <td>\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"item.modifying.aired\" name=\"aired\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>제작사</th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"studios\" name=\"studios\" rows=\"4\"></textarea>\r\n                      <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>메모</th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <textarea matInput placeholder=\"메모\" [(ngModel)]=\"item.modifying.memo\" name=\"memo\" rows=\"4\"></textarea>\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td colspan=\"2\" style=\"text-align: center;\">\r\n                    <button mat-button type=\"submit\">\r\n                      <mat-icon>check_circle_outline</mat-icon>\r\n                    </button>\r\n                    <button mat-button type=\"button\" (click)=\"closeEdit(item._id)\">\r\n                      <mat-icon>cancel</mat-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </form>\r\n\r\n          </td>\r\n        </tr>\r\n\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n</section>\r\n\r\n<section>\r\n  <div class=\"container\" id=\"writing-area\" #writingArea>\r\n    <table *ngIf=\"!writing\" class=\"table table-dark\">\r\n      <tr>\r\n        <td>\r\n          <span class=\"clickable\" (click)=\"write()\">+ 새로 작성하기</span>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <form (submit)=\"onWriteSubmit()\" *ngIf=\"writing\">\r\n      <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\r\n        <tr>\r\n          <th style=\"width: 30%;\">검색</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item-select\">\r\n              <mat-label>검색옵션</mat-label>\r\n              <mat-select #searchOption>\r\n                <mat-option value=\"onnada\">Onnada</mat-option>\r\n                <mat-option value=\"mal\">MyAnimeList</mat-option>\r\n                <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>검색어를 입력해주세요.</mat-label>\r\n              <input matInput #searchBox (keyup.enter)=\"search(searchOption.value, searchBox.value, writing)\">\r\n            </mat-form-field>\r\n            <button mat-flat-button type=\"button\" (click)=\"search(searchOption.value, searchBox.value, writing)\">\r\n              <mat-icon>search</mat-icon>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\r\n        <tr>\r\n          <th>타입</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <mat-label>타입</mat-label>\r\n              <mat-select [(ngModel)]=\"writing.type\" name=\"type\">\r\n                <mat-option value=\"tva\">TVA</mat-option>\r\n                <mat-option value=\"movie\">극장판</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>제목</th>\r\n          <td>\r\n            <mat-radio-group [(ngModel)]=\"writing.title.rv\" name=\"rv\">\r\n              <table class=\"table table-borderless\">\r\n                <tr>\r\n                  <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"writing.title.kor\" name=\"kor\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"writing.title.eng\" name=\"eng\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\r\n                  <td>\r\n                    <mat-form-field class=\"form-item\">\r\n                      <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"writing.title.jpn\" name=\"jpn\">\r\n                    </mat-form-field>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </mat-radio-group>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>OHLI</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"OHLI ID\" type=\"number\" [(ngModel)]=\"writing.ohli_id\" name=\"ohli_id\">\r\n            </mat-form-field>\r\n            <button mat-flat-button type=\"button\" (click)=\"findOhliId(writing)\">\r\n              <mat-icon>search</mat-icon>\r\n            </button>&nbsp;\r\n            <button mat-flat-button type=\"button\" (click)=\"removeOhliId(writing)\">\r\n              <mat-icon>clear</mat-icon>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th rowspan=\"2\">방영 분기</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"연도\" type=\"number\" [(ngModel)]=\"writing.premiered.year\" name=\"year\">\r\n              <span matSuffix>년</span>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"분기\" type=\"number\" [(ngModel)]=\"writing.premiered.quarter\" name=\"quarter\" max=\"4\" min=\"1\">\r\n              <span matSuffix>분기</span>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>방영 시기</th>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"writing.aired\" name=\"aired\">\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>제작사</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item\">\r\n              <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"studios\" name=\"studios\" rows=\"4\"></textarea>\r\n              <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>메모</th>\r\n          <td>\r\n            <mat-form-field class=\"form-item\">\r\n              <textarea matInput placeholder=\"메모\" [(ngModel)]=\"writing.memo\" name=\"memo\" rows=\"4\"></textarea>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"2\" style=\"text-align: center;\">\r\n            <button mat-button type=\"submit\">\r\n              <mat-icon>check_circle_outline</mat-icon>\r\n            </button>\r\n            <button mat-button type=\"button\" (click)=\"closeEdit()\">\r\n              <mat-icon>cancel</mat-icon>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-tabs:hover {\r\n    text-decoration: none;\r\n    color: rgb(119, 119, 120);\r\n}\r\n\r\nfooter * {\r\n    /* color: rgb(0, 175, 219); */\r\n    /* color: white; */\r\n    color: rgb(235, 235, 235);\r\n}\r\n\r\n#scroll-button {\r\n    background-color: rgb(248, 249, 250);\r\n    position: fixed;\r\n    width: 40px;\r\n    height: 60px;\r\n    right: 5px;\r\n    bottom: 5px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n\r\n#scroll-button td:hover {\r\n    border-radius: 5px;\r\n    background-color: rgb(186, 196, 205);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWJzOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMTE5LCAxMTksIDEyMCk7XHJcbn1cclxuXHJcbmZvb3RlciAqIHtcclxuICAgIC8qIGNvbG9yOiByZ2IoMCwgMTc1LCAyMTkpOyAqL1xyXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcclxufVxyXG5cclxuI3Njcm9sbC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ5LCAyNTApO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNzY3JvbGwtYnV0dG9uIHRkOmhvdmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE5NiwgMjA1KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.navLinks = [
            { path: '/tva', label: 'TVA' },
            { path: '/movie', label: '극장판' },
            { path: '/watching', label: '시청 중인 목록' },
            { path: '/plan', label: '시청 예정 목록' }
        ];
    }
    scrollUp() {
        window.scroll(0, 0);
    }
    scrollDown() {
        let footer = document.getElementById('footer');
        footer.scrollIntoView();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var src_app_interceptors_content_type_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/interceptors/content.type.interceptor */ "./src/app/interceptors/content.type.interceptor.ts");
/* harmony import */ var src_app_pipes_safe_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pipes/safe.html */ "./src/app/pipes/safe.html.ts");
/* harmony import */ var src_app_pipes_safe_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pipes/safe.url */ "./src/app/pipes/safe.url.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_tva_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/tva.service */ "./src/app/services/tva.service.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _services_watching_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/watching.service */ "./src/app/services/watching.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_plan_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_tva_tva_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/tva/tva.component */ "./src/app/components/tva/tva.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _components_watching_watching_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/watching/watching.component */ "./src/app/components/watching/watching.component.ts");
/* harmony import */ var _components_plan_plan_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/plan/plan.component */ "./src/app/components/plan/plan.component.ts");
/* harmony import */ var _components_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/no-page/no-page.component */ "./src/app/components/no-page/no-page.component.ts");
/* harmony import */ var _components_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dialogs/search-dialog/search-dialog.component */ "./src/app/components/dialogs/search-dialog/search-dialog.component.ts");
/* harmony import */ var _components_dialogs_ohli_dialog_ohli_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dialogs/ohli-dialog/ohli-dialog.component */ "./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.ts");
/* harmony import */ var _components_dialogs_text_field_dialog_text_field_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dialogs/text-field-dialog/text-field-dialog.component */ "./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.ts");
/* harmony import */ var _components_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dialogs/studio-dialog/studio-dialog.component */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts");
/* harmony import */ var _components_dialogs_ended_dialog_ended_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/dialogs/ended-dialog/ended-dialog.component */ "./src/app/components/dialogs/ended-dialog/ended-dialog.component.ts");






























const appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"] },
    { path: 'tva', component: _components_tva_tva_component__WEBPACK_IMPORTED_MODULE_20__["TvaComponent"] },
    { path: 'tva/:_id/:series/:sequence', component: _components_tva_tva_component__WEBPACK_IMPORTED_MODULE_20__["TvaComponent"] },
    { path: 'tva/:from/:incompletion_id', component: _components_tva_tva_component__WEBPACK_IMPORTED_MODULE_20__["TvaComponent"] },
    { path: 'movie', component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_21__["MovieComponent"] },
    { path: 'movie/:_id/:series/:sequence', component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_21__["MovieComponent"] },
    { path: 'movie/:from/:incompletion_id', component: _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_21__["MovieComponent"] },
    { path: 'watching', component: _components_watching_watching_component__WEBPACK_IMPORTED_MODULE_22__["WatchingComponent"] },
    { path: 'watching/:_id', component: _components_watching_watching_component__WEBPACK_IMPORTED_MODULE_22__["WatchingComponent"] },
    { path: 'watching/data-from-plan/:plan_id', component: _components_watching_watching_component__WEBPACK_IMPORTED_MODULE_22__["WatchingComponent"] },
    { path: 'plan', component: _components_plan_plan_component__WEBPACK_IMPORTED_MODULE_23__["PlanComponent"] },
    { path: 'plan/:_id', component: _components_plan_plan_component__WEBPACK_IMPORTED_MODULE_23__["PlanComponent"] },
    { path: 'no-page', component: _components_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_24__["NoPageComponent"] },
    { path: '**', component: _components_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_24__["NoPageComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            src_app_pipes_safe_html__WEBPACK_IMPORTED_MODULE_11__["SafeHtml"],
            src_app_pipes_safe_url__WEBPACK_IMPORTED_MODULE_12__["SafeUrl"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
            _components_tva_tva_component__WEBPACK_IMPORTED_MODULE_20__["TvaComponent"],
            _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_21__["MovieComponent"],
            _components_watching_watching_component__WEBPACK_IMPORTED_MODULE_22__["WatchingComponent"],
            _components_plan_plan_component__WEBPACK_IMPORTED_MODULE_23__["PlanComponent"],
            _components_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_25__["SearchDialogComponent"],
            _components_dialogs_ohli_dialog_ohli_dialog_component__WEBPACK_IMPORTED_MODULE_26__["OhliDialogComponent"],
            _components_dialogs_text_field_dialog_text_field_dialog_component__WEBPACK_IMPORTED_MODULE_27__["TextFieldDialogComponent"],
            _components_no_page_no_page_component__WEBPACK_IMPORTED_MODULE_24__["NoPageComponent"],
            _components_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_28__["StudioDialogComponent"],
            _components_dialogs_ended_dialog_ended_dialog_component__WEBPACK_IMPORTED_MODULE_29__["EndedDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, {
                useHash: true,
                onSameUrlNavigation: 'reload',
                scrollPositionRestoration: 'enabled'
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_8__["NgFlashMessagesModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"]
        ],
        entryComponents: [
            _components_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_25__["SearchDialogComponent"],
            _components_dialogs_ohli_dialog_ohli_dialog_component__WEBPACK_IMPORTED_MODULE_26__["OhliDialogComponent"],
            _components_dialogs_text_field_dialog_text_field_dialog_component__WEBPACK_IMPORTED_MODULE_27__["TextFieldDialogComponent"],
            _components_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_28__["StudioDialogComponent"],
            _components_dialogs_ended_dialog_ended_dialog_component__WEBPACK_IMPORTED_MODULE_29__["EndedDialogComponent"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: src_app_interceptors_content_type_interceptor__WEBPACK_IMPORTED_MODULE_10__["ContentTypeInterceptor"], multi: true },
            // { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MAT_TOOLTIP_DEFAULT_OPTIONS"], useValue: { position: 'above' } },
            _services_tva_service__WEBPACK_IMPORTED_MODULE_14__["TvaService"],
            _services_movie_service__WEBPACK_IMPORTED_MODULE_15__["MovieService"],
            _services_watching_service__WEBPACK_IMPORTED_MODULE_16__["WatchingService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_17__["SearchService"],
            _services_plan_service__WEBPACK_IMPORTED_MODULE_18__["PlanService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/dialogs/ended-dialog/ended-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/dialogs/ended-dialog/ended-dialog.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    color: black;\r\n}\r\n\r\na:hover {\r\n    color: black;\r\n}\r\n\r\n.btn-link:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.btn-link:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL2VuZGVkLWRpYWxvZy9lbmRlZC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL2VuZGVkLWRpYWxvZy9lbmRlZC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ0bi1saW5rOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1saW5rOmZvY3VzIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/dialogs/ended-dialog/ended-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/dialogs/ended-dialog/ended-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: EndedDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndedDialogComponent", function() { return EndedDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _ohli_dialog_ohli_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ohli-dialog/ohli-dialog.component */ "./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.ts");






let EndedDialogComponent = class EndedDialogComponent {
    constructor(dialogRef, data, watchingService, searchService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.watchingService = watchingService;
        this.searchService = searchService;
        this.dialog = dialog;
        this.year = undefined;
        this.videos = undefined;
        this.ohyses = undefined;
        this.subtitles = [];
        const title = this.data.title.eng;
        this.searchService.mal(this.data.mal_id).subscribe(malSearched => {
            if (!malSearched.aired.end) {
                alert('종영 연도를 찾을 수 없습니다.\n현재 방영 중인 항목일 수도 있습니다.');
                this.year = new Date().getFullYear();
                this.videos = this.ohyses = [];
            }
            else {
                this.year = new Date(malSearched.aired.end).getFullYear();
                this.watchingService.getVideos(title).subscribe(videos => this.videos = videos);
                this.watchingService.getOhys(title).subscribe(ohyses => this.ohyses = ohyses);
            }
        });
    }
    findOhliId() {
        const data = { title: this.data.title.kor, ohli_id: null, year: this.year };
        const dialogRef = this.dialog.open(_ohli_dialog_ohli_dialog_component__WEBPACK_IMPORTED_MODULE_5__["OhliDialogComponent"], { data: data });
        dialogRef.afterClosed().subscribe(() => {
            if (data.ohli_id) {
                this.subtitles = undefined;
                this.watchingService.getSubtitles(data.ohli_id).subscribe(subtitles => this.subtitles = subtitles);
            }
        });
    }
    getDate(dateString) {
        let today = new Date();
        let given = new Date(dateString);
        if (given.getMonth() == today.getMonth() && given.getDate() == today.getDate())
            return dateString.substring(11);
        else
            return `${given.getMonth() + 1}/${given.getDate()}`;
    }
    getSize(size) {
        const dividedSize = Math.round(size / 1024 / 1024);
        if (dividedSize >= 1000)
            return (dividedSize / 1024).toFixed(2) + 'GB';
        else
            return dividedSize + 'MB';
    }
    onClose() {
        this.dialogRef.close();
    }
};
EndedDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_3__["WatchingService"] },
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
EndedDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ended-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ended-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/ended-dialog/ended-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ended-dialog.component.css */ "./src/app/components/dialogs/ended-dialog/ended-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_3__["WatchingService"],
        src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], EndedDialogComponent);



/***/ }),

/***/ "./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n    max-width: 250px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL29obGktZGlhbG9nL29obGktZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpYWxvZ3Mvb2hsaS1kaWFsb2cvb2hsaS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: OhliDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OhliDialogComponent", function() { return OhliDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");




let OhliDialogComponent = class OhliDialogComponent {
    constructor(dialogRef, data, watchingService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.watchingService = watchingService;
        this.loading = true;
        if (this.data.year) {
            this.watchingService.ohli(this.data.title, this.data.year).subscribe(ohlis => {
                this.ohlis = ohlis;
                this.loading = false;
            });
        }
        else {
            this.watchingService.ohli(this.data.title).subscribe(ohlis => {
                this.ohlis = ohlis;
                this.loading = false;
            });
        }
    }
    onClose() {
        this.dialogRef.close();
    }
    selectItem(i) {
        this.data.ohli_id = this.ohlis[i].id;
        this.onClose();
    }
};
OhliDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_3__["WatchingService"] }
];
OhliDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ohli-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ohli-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ohli-dialog.component.css */ "./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_3__["WatchingService"]])
], OhliDialogComponent);



/***/ }),

/***/ "./src/app/components/dialogs/search-dialog/search-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/dialogs/search-dialog/search-dialog.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    color: black;\r\n}\r\n\r\na:hover {\r\n    color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL3NlYXJjaC1kaWFsb2cvc2VhcmNoLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpYWxvZ3Mvc2VhcmNoLWRpYWxvZy9zZWFyY2gtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/dialogs/search-dialog/search-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dialogs/search-dialog/search-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SearchDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDialogComponent", function() { return SearchDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");




let SearchDialogComponent = class SearchDialogComponent {
    constructor(dialogRef, data, searchService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.searchService = searchService;
        this.loading = true;
        this.searchService.search(this.data.search.text, this.data.search.option).subscribe(searches => {
            this.searches = searches;
            this.loading = false;
        }, err => {
            alert('검색 도중 에러가 발생하였습니다.\n' + err.name + '\n' + err.statusText);
        });
    }
    onClose() {
        this.dialogRef.close();
    }
    selectItem(i) {
        this.loading = true;
        this.searchService.mal(this.searches[i].mal_id).subscribe(malSearched => {
            this.data.malSearched = malSearched;
            if (this.searches[i].title_kor)
                this.data.malSearched.title.kor = this.searches[i].title_kor;
            this.loading = false;
            this.onClose();
        });
    }
    getLink() {
        if (this.data.search.option == 'onnada')
            return 'http://onnada.com/search/?t=anime&q=' + encodeURI(this.data.search.text);
        else
            'https://myanimelist.net/search/all?q=' + encodeURI(this.data.search.text);
    }
};
SearchDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }
];
SearchDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/search-dialog/search-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-dialog.component.css */ "./src/app/components/dialogs/search-dialog/search-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
], SearchDialogComponent);



/***/ }),

/***/ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/dialogs/studio-dialog/studio-dialog.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL3N0dWRpby1kaWFsb2cvc3R1ZGlvLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9ncy9zdHVkaW8tZGlhbG9nL3N0dWRpby1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StudioDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudioDialogComponent", function() { return StudioDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tva.service */ "./src/app/services/tva.service.ts");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");

var StudioDialogComponent_1;




let StudioDialogComponent = StudioDialogComponent_1 = class StudioDialogComponent {
    constructor(dialogRef, data, tvaService, movieService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.tvaService = tvaService;
        this.movieService = movieService;
        this.tvas = [];
        this.movies = [];
        if (!StudioDialogComponent_1.source) {
            StudioDialogComponent_1.source = { tvas: undefined, movies: undefined };
            this.tvaService.getTvas().subscribe(tvas => this.itemsToArray(StudioDialogComponent_1.source.tvas = tvas, this.tvas, true));
            this.movieService.getMovies().subscribe(movies => this.itemsToArray(StudioDialogComponent_1.source.movies = movies, this.movies));
        }
        else {
            this.itemsToArray(StudioDialogComponent_1.source.tvas, this.tvas, true);
            this.itemsToArray(StudioDialogComponent_1.source.movies, this.movies);
            this.tvaService.getTvas().subscribe(tvas => StudioDialogComponent_1.source.tvas = tvas);
            this.movieService.getMovies().subscribe(movies => StudioDialogComponent_1.source.movies = movies);
        }
    }
    itemsToArray(items, arr, isTva) {
        for (let item of items) {
            for (let [i, series] of item.series.entries()) {
                for (let [j, sequence] of series.sequences.entries()) {
                    if (sequence.studios.includes(this.data)) {
                        arr.push({
                            title: sequence.title,
                            _id: item._id,
                            series: i,
                            sequence: j,
                            date: isTva ? sequence.aired.start : sequence.aired
                        });
                    }
                }
            }
        }
        arr.sort((a, b) => { return new Date(a.date).getTime() - new Date(b.date).getTime(); });
    }
    onClose() {
        this.dialogRef.close();
    }
    getLink(url, item) {
        // if ( item.moreParams ) link += ((arr: any[]): string => { let result = ''; for (let each of arr) result += `/${each}`; return result; })(item.moreParams);
        return `/${url}/${item._id}/${item.series}/${item.sequence}`;
    }
    getFormattedDate(date) {
        let d = new Date(date);
        let f = (n) => { if (n == 0)
            n = 1; return n < 10 ? '0' + n : n.toString(); };
        return `'${d.getFullYear().toString().substr(2, 2)}.${f(d.getMonth())}.${f(d.getDate())}`;
    }
    yearChanged(i) {
        if (i == 0)
            return false;
        let before = new Date(this.tvas[i - 1].date);
        let after = new Date(this.tvas[i].date);
        return before.getFullYear() != after.getFullYear();
    }
};
StudioDialogComponent.source = undefined;
StudioDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_3__["TvaService"] },
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"] }
];
StudioDialogComponent = StudioDialogComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-studio-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./studio-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/studio-dialog/studio-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./studio-dialog.component.css */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], String, src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_3__["TvaService"],
        src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"]])
], StudioDialogComponent);



/***/ }),

/***/ "./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9ncy90ZXh0LWZpZWxkLWRpYWxvZy90ZXh0LWZpZWxkLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TextFieldDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldDialogComponent", function() { return TextFieldDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let TextFieldDialogComponent = class TextFieldDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onClose() {
        this.dialogRef.close();
    }
};
TextFieldDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
TextFieldDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text-field-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text-field-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text-field-dialog.component.css */ "./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], TextFieldDialogComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel-item {\r\n    height: 42rem;\r\n}\r\n\r\nli {\r\n    margin: .75rem;\r\n}\r\n\r\n@media (min-width: 40em) {\r\n    .carousel-caption p {\r\n        margin-bottom: 1.25rem;\r\n        font-size: 1.25rem;\r\n        line-height: 1.4;\r\n    }\r\n}\r\n\r\n.carousel-button:hover {\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n.searched-link {\r\n    color: white;\r\n}\r\n\r\n.searched-link:hover {\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogNDJyZW07XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIG1hcmdpbjogLjc1cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xyXG4gICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcm91c2VsLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2hlZC1saW5rIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaGVkLWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/home/home.component.model.ts ***!
  \*********************************************************/
/*! exports provided: Items, SearchedItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchedItems", function() { return SearchedItems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Shapes {
    constructor() {
        this.tvas = [];
        this.movies = [];
        this.watchings = [];
        this.plans = [];
    }
}
class Items extends Shapes {
    constructor() {
        super();
    }
}
class SearchedItems extends Shapes {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tva.service */ "./src/app/services/tva.service.ts");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _home_component_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component.model */ "./src/app/components/home/home.component.model.ts");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");
/* harmony import */ var _dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialogs/studio-dialog/studio-dialog.component */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts");










let HomeComponent = class HomeComponent {
    constructor(tvaService, movieService, watchingService, planService, titleService, dialog) {
        this.tvaService = tvaService;
        this.movieService = movieService;
        this.watchingService = watchingService;
        this.planService = planService;
        this.titleService = titleService;
        this.dialog = dialog;
        this.carousel = [];
        this.backgrounds = [];
        this.titleTypes = ['eng', 'kor', 'jpn'];
        this.allItems = new _home_component_model__WEBPACK_IMPORTED_MODULE_7__["Items"]();
        this.searchedItems = new _home_component_model__WEBPACK_IMPORTED_MODULE_7__["SearchedItems"]();
        this.searchedText = undefined;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.pageSize = 10;
        this.titleService.setDefaultTitle();
        this.tvaService.getTvas().subscribe(tvas => {
            this.allItems.tvas = tvas;
            let tva = tvas[this.getRandomNumber(tvas.length)];
            let i = this.getRandomNumber(tva.series.length);
            let j = this.getRandomNumber(tva.series[i].sequences.length);
            let sequence = tva.series[i].sequences[j];
            this.carousel.push({
                type: '[ TVA ]',
                title: sequence.title[sequence.title.rv],
                content: `${sequence.premiered.year}년 ${sequence.premiered.quarter}분기 방영`,
                link: `/tva/${tva._id}/${i}/${j}`
            });
        });
        this.movieService.getMovies().subscribe(movies => {
            this.allItems.movies = movies;
            let movie = movies[this.getRandomNumber(movies.length)];
            let i = this.getRandomNumber(movie.series.length);
            let j = this.getRandomNumber(movie.series[i].sequences.length);
            let sequence = movie.series[i].sequences[j];
            let date = new Date(sequence.aired);
            this.carousel.push({
                type: '[ 극장판 ]',
                title: sequence.title[sequence.title.rv],
                content: `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 개봉`,
                link: `/movie/${movie._id}/${i}/${j}`
            });
        });
        this.watchingService.getWatchings().subscribe(watchings => {
            this.allItems.watchings = watchings;
            let watching = watchings[this.getRandomNumber(watchings.length)];
            this.carousel.push({
                type: `[ ${watching.type == 'tva' ? 'TVA' : '극장판'} - 시청 중 ] `,
                title: watching.title[watching.title.rv],
                content: `${watching.premiered.year}년 ${watching.premiered.quarter}분기 방영`,
                link: `/watching/${watching._id}`
            });
        });
        this.planService.getPlans().subscribe(plans => {
            this.allItems.plans = plans;
            let plan = plans[this.getRandomNumber(plans.length)];
            let date = new Date(plan.aired);
            this.carousel.push({
                type: `[ ${plan.type == 'tva' ? 'TVA' : '극장판'} - 시청 예정 ] `,
                title: plan.title[plan.title.rv],
                content: (plan.aired != null && plan.aired != '') ? `${date.getFullYear()}년 ${Math.floor((date.getMonth() + 4) / 3)}분기 방영` : '기타 정보 없음',
                link: `/plan/${plan._id}`
            });
        });
        let pageEvent = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["PageEvent"]();
        pageEvent.pageIndex = 0;
        pageEvent.pageSize = 10;
        this.pageEvents = {
            tva: pageEvent,
            movie: pageEvent,
            watching: pageEvent,
            plan: pageEvent
        };
    }
    getRandomNumber(len) {
        return Math.floor(Math.random() * len);
    }
    removeSpace(text) {
        return text.replace(/\s/gi, '');
    }
    matchWithNoSpace(big, small) {
        return this.removeSpace(big.toLowerCase()).includes(small);
    }
    ngOnInit() {
        this.backgrounds = [];
        const bgCounts = 10;
        for (let i = 0; i < 4; i++) {
            let idx = this.getRandomNumber(bgCounts);
            let flag = i != 0;
            while (flag) {
                for (let j = 0; j < this.backgrounds.length; j++) {
                    if (idx == this.backgrounds[j]) {
                        flag = true;
                        idx = this.getRandomNumber(bgCounts);
                        break;
                    }
                    else {
                        flag = false;
                    }
                }
            }
            this.backgrounds[i] = idx;
        }
    }
    searchCompletion(text, what) {
        const arr = this.allItems[what];
        arr.some(c => {
            if (this.matchWithNoSpace(c.category, text)) {
                for (let [i, series] of c.series.entries()) {
                    for (let [j, sequence] of series.sequences.entries()) {
                        let searchedSequence = sequence;
                        searchedSequence._id = c._id;
                        searchedSequence.series = i;
                        searchedSequence.sequence = j;
                        searchedSequence.seriesTitle = series.title;
                        this.searchedItems[what].push(searchedSequence);
                    }
                }
                return false;
            }
            for (let [i, series] of c.series.entries()) {
                if (this.matchWithNoSpace(series.title, text)) {
                    for (let [j, sequence] of series.sequences.entries()) {
                        let searchedSequence = sequence;
                        searchedSequence._id = c._id;
                        searchedSequence.series = i;
                        searchedSequence.sequence = j;
                        searchedSequence.seriesTitle = series.title;
                        this.searchedItems[what].push(searchedSequence);
                    }
                    return false;
                }
                else {
                    for (let [j, sequence] of series.sequences.entries()) {
                        for (let titleType of this.titleTypes) {
                            if (this.matchWithNoSpace(sequence.title[titleType], text)) {
                                let searchedSequence = sequence;
                                searchedSequence._id = c._id;
                                searchedSequence.series = i;
                                searchedSequence.sequence = j;
                                searchedSequence.seriesTitle = series.title;
                                this.searchedItems[what].push(searchedSequence);
                                return false;
                            }
                        }
                        for (let studio of sequence.studios) {
                            if (this.matchWithNoSpace(studio, text)) {
                                let searchedSequence = sequence;
                                searchedSequence._id = c._id;
                                searchedSequence.series = i;
                                searchedSequence.sequence = j;
                                searchedSequence.seriesTitle = series.title;
                                this.searchedItems[what].push(searchedSequence);
                                return false;
                            }
                        }
                    }
                }
            }
        });
    }
    searchIncompletion(text, what) {
        const arr = this.allItems[what];
        arr.some(ic => {
            for (let titleType of this.titleTypes) {
                if (this.matchWithNoSpace(ic.title[titleType], text)) {
                    this.searchedItems[what].push(ic);
                    return false;
                }
            }
            for (let studio of ic.studios) {
                if (this.matchWithNoSpace(studio, text)) {
                    this.searchedItems[what].push(ic);
                    return false;
                }
            }
        });
    }
    search(text) {
        text = this.removeSpace(text).toLowerCase();
        this.searchedItems = new _home_component_model__WEBPACK_IMPORTED_MODULE_7__["SearchedItems"]();
        this.searchedText = text;
        if (text == '')
            return;
        this.searchCompletion(text, 'tvas');
        this.searchCompletion(text, 'movies');
        this.searchIncompletion(text, 'watchings');
        this.searchIncompletion(text, 'plans');
    }
    allElementsLength(completion) {
        let count = 0;
        for (let i = 0; i < completion.series.length; i++) {
            count += completion.series[i].sequences.length;
        }
        return count;
    }
    getQuarterFromAiredDate(aired) {
        if (!aired || aired == '')
            return '-';
        let date = new Date(aired);
        let year = date.getFullYear().toString().substring(2);
        let qtr = Math.floor((date.getMonth() + 4) / 3);
        return `'${year} - ${qtr}`;
    }
    findByStudio(studio) {
        this.dialog.open(_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_9__["StudioDialogComponent"], { data: studio });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_2__["TvaService"] },
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_4__["WatchingService"] },
    { type: src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_5__["PlanService"] },
    { type: src_app_services_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_2__["TvaService"],
        src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
        src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_4__["WatchingService"],
        src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_5__["PlanService"],
        src_app_services_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/movie/movie.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/movie/movie.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tva.service */ "./src/app/services/tva.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_searched__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/searched */ "./src/app/models/searched.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialogs/search-dialog/search-dialog.component */ "./src/app/components/dialogs/search-dialog/search-dialog.component.ts");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/models/headerAlign */ "./src/app/models/headerAlign.ts");
/* harmony import */ var _dialogs_text_field_dialog_text_field_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dialogs/text-field-dialog/text-field-dialog.component */ "./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.ts");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");
/* harmony import */ var _dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dialogs/studio-dialog/studio-dialog.component */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts");

















let MovieComponent = class MovieComponent extends src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_13__["HeaderAlign"] {
    constructor(movieService, tvaService, searchService, watchingService, planService, titleService, route, flashMessage, dialog) {
        super([2], [5]);
        this.movieService = movieService;
        this.tvaService = tvaService;
        this.searchService = searchService;
        this.watchingService = watchingService;
        this.planService = planService;
        this.titleService = titleService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.dialog = dialog;
        this.movies = null;
        this.modifying = null;
        this.loading = false;
        this.writing = false;
        this.tvas = null;
        this.linked = {
            idx: 0,
            series: 0
        };
        this.from = undefined;
        this.incompletion_id = undefined;
        this.titleService.setTitle('극장판');
        this.movieService.getMovies().subscribe(movies => {
            this.movies = movies;
            super.setItems([this.movies]);
            this.movieMap = new Map();
            movies.map(v => this.movieMap.set(v._id, v));
            this.movies.sort((a, b) => { return a.category.localeCompare(b.category); });
            setTimeout(() => this.scrollToElement(), 500);
        });
    }
    getAlignment(standard) {
        switch (standard) {
            case 0: return (a, b) => { return a.category.localeCompare(b.category) * this.alignments[0][standard]; };
            case 1: return (a, b) => { return a.series[0].title.localeCompare(b.series[0].title) * this.alignments[0][standard]; };
            case 2: return (a, b) => { return a.series[0].sequences[0].title[a.series[0].sequences[0].title.rv].localeCompare(b.series[0].sequences[0].title[b.series[0].sequences[0].title.rv]) * this.alignments[0][standard]; };
            case 3: return (a, b) => { return a.series[0].sequences[0].studios[0].localeCompare(b.series[0].sequences[0].studios[0]) * this.alignments[0][standard]; };
            case 4: return (a, b) => { return (new Date(a.series[0].sequences[0].aired).getTime() - new Date(b.series[0].sequences[0].aired).getTime()) * this.alignments[0][standard]; };
            default: return;
        }
    }
    scrollToElement() {
        if (this.route.snapshot.paramMap.get('_id')) {
            const _id = this.route.snapshot.paramMap.get('_id');
            this.clickMovieWithId(_id, +this.route.snapshot.paramMap.get('series'), +this.route.snapshot.paramMap.get('sequence'));
            let element = document.getElementById(_id);
            try {
                element.scrollIntoView();
            }
            catch (e) {
                alert('알 수 없는 에러가 발생하였습니다.\n' + e);
            }
        }
        else if (this.route.snapshot.paramMap.get('incompletion_id')) {
            this.writeMovie();
            this.from = this.route.snapshot.paramMap.get('from');
            this.incompletion_id = this.route.snapshot.paramMap.get('incompletion_id');
            (this.from == 'data-from-watching' ? this.watchingService : this.planService).get(this.incompletion_id).subscribe(result => {
                if (!result._id) {
                    alert('알 수 없는 에러가 발생하였습니다.\n' + result);
                    return;
                }
                if (result.mal_id)
                    this.searchMovie('mal_id', result.mal_id.toString());
                else {
                    this.writingMovie.aired = result.aired;
                    this.writingMovie.studios = result.studios;
                }
                this.writingMovie.title = result.title;
                this.writingMovie.memo = result.memo;
                let element = document.getElementById('writing-area');
                try {
                    element.scrollIntoView();
                }
                catch (e) {
                    alert('알 수 없는 에러가 발생하였습니다.\n' + e);
                }
            });
        }
    }
    allElementsLength(m) {
        let count = 0;
        for (let i = 0; i < this.movies[m].series.length; i++) {
            count += this.movies[m].series[i].sequences.length;
        }
        return count;
    }
    ngOnInit() {
    }
    clickMovie(m, series, sequence) {
        if (this.movies[m].modifying)
            return;
        let opened = { series: series, sequence: sequence, linked: null };
        if (this.movies[m].opened) {
            if (this.movies[m].opened.series != series || this.movies[m].opened.sequence != sequence) {
                opened.linked = this.movies[m].opened.linked;
                this.movies[m].opened = opened;
            }
            else
                this.movies[m].opened = null;
            return;
        }
        this.movies[m].opened = opened;
        this.setLinkedTva(m, this.movies[m].category_tva, this.movies[m].series[series].key);
    }
    clickMovieWithId(_id, series, sequence) {
        if (this.movieMap.get(_id).modifying)
            return;
        let opened = { series: series, sequence: sequence, linked: null };
        if (this.movieMap.get(_id).opened) {
            if (this.movieMap.get(_id).opened.series != series || this.movieMap.get(_id).opened.sequence != sequence) {
                opened.linked = this.movieMap.get(_id).opened.linked;
                this.movieMap.get(_id).opened = opened;
            }
            else
                this.movieMap.get(_id).opened = null;
            return;
        }
        this.movieMap.get(_id).opened = opened;
        this.setLinkedTvaWithId(_id, this.movieMap.get(_id).category_tva, this.movieMap.get(_id).series[series].key);
    }
    setLinkedTva(m, tva_id, key) {
        if (this.movies[m].opened.linked)
            return;
        this.tvaService.getTva(tva_id).subscribe(tva => {
            for (let i = 0; i < tva.series.length; i++) {
                if (tva.series[i].key == key) {
                    this.movies[m].opened.linked = {
                        title: tva.series[i].title,
                        _id: tva._id,
                        series: i
                    };
                    return;
                }
            }
        });
    }
    setLinkedTvaWithId(_id, tva_id, key) {
        if (this.movieMap.get(_id).opened.linked)
            return;
        this.tvaService.getTva(tva_id).subscribe(tva => {
            for (let i = 0; i < tva.series.length; i++) {
                if (tva.series[i].key == key) {
                    this.movieMap.get(_id).opened.linked = {
                        title: tva.series[i].title,
                        _id: tva._id,
                        series: i
                    };
                    return;
                }
            }
        });
    }
    editCategory(m) {
        const data = {
            title: '카테고리명 수정',
            explain: '수정할 카테고리명을 입력해주세요.',
            placeholder: '카테고리명',
            text: this.movies[m].category
        };
        const dialogRef = this.dialog.open(_dialogs_text_field_dialog_text_field_dialog_component__WEBPACK_IMPORTED_MODULE_14__["TextFieldDialogComponent"], { data: data });
        dialogRef.afterClosed().subscribe(() => {
            if (!data.text || data.text == '')
                return;
            this.movies[m].category = data.text;
            this.movieService.modifyMovie(this.movies[m]).subscribe(result => {
                if (!result._id)
                    alert('수정 실패');
            });
        });
    }
    setStudio(studios) {
        this.modifying.studios = '';
        for (let studio of studios)
            this.modifying.studios += studio + '\n';
    }
    modifyMovie(m, series, sequence) {
        this.movies[m].opened = null;
        for (let tva of this.movies)
            tva.modifying = null;
        this.movies[m].modifying = Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["cloneObject"])(this.movies[m].series[series].sequences[sequence]);
        this.modifying = { series: series, sequence: sequence, studios: undefined };
        this.setStudio(this.movies[m].modifying.studios);
        this.tvaService.getTvas().subscribe(tvas => {
            this.tvas = tvas;
            this.tvas.sort((a, b) => {
                return a.category.localeCompare(b.category);
            });
            for (let i = 0; i < this.tvas.length; i++) {
                if (this.movies[m].category_tva == this.tvas[i]._id) {
                    for (let j = 0; j < this.tvas[i].series.length; j++) {
                        if (this.movies[m].series[series].key == this.tvas[i].series[j].key) {
                            this.linked = {
                                idx: i,
                                series: j
                            };
                            return;
                        }
                    }
                }
            }
        });
    }
    cancelModify(m) {
        this.movies[m].modifying = null;
        this.movies[m].opened = null;
        this.clickMovie(m, this.modifying.series, this.modifying.sequence);
    }
    cancelWrite() {
        this.cancelEditing();
    }
    cancelEditing() {
        this.writing = false;
        this.tvas = null;
        this.linked = {
            idx: 0,
            series: 0
        };
    }
    onModifySubmit(m, series, sequence) {
        if (!confirm('저장하시겠습니까?'))
            return;
        // validating input values
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.movies[m].modifying, ['memo']))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["notOK"])();
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.modifying) || !Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.linked))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["notOK"])();
        // change series with input title
        this.movies[m].series[series].sequences.splice(sequence, 1);
        let flag = false;
        outer: for (let i = 0; i < this.movies[m].series.length; i++) {
            if (this.movies[m].series[i].key == this.tvas[this.linked.idx].series[this.linked.series].key) {
                flag = true;
                this.movies[m].modifying.studios = this.modifying.studios.trim().split('\n');
                this.movies[m].series[i].sequences.push(this.movies[m].modifying);
                this.movies[m].series[i].sequences.sort((a, b) => { return a.order - b.order; });
                series = i;
                for (let j = 0; j < this.movies[m].series[i].sequences.length; j++) {
                    if (this.movies[m].series[i].sequences[j].order == this.movies[m].modifying.order) {
                        sequence = j;
                        break outer;
                    }
                }
                break;
            }
        }
        // create a new series with input title
        if (!flag) {
            this.movies[m].series.push({
                title: this.tvas[this.linked.idx].series[this.linked.series].title,
                key: this.tvas[this.linked.idx].series[this.linked.series].key,
                memo: '',
                sequences: [this.movies[m].modifying]
            });
            series = this.movies[m].series.length - 1;
            sequence = 0;
            this.movies[m].series.sort((a, b) => { return new Date(a.sequences[0].aired).getTime() - new Date(b.sequences[0].aired).getTime(); });
        }
        // remove empty series (which has an empty sequence)
        for (let i = 0; i < this.movies[m].series.length; i++) {
            if (this.movies[m].series[i].sequences.length == 0) {
                this.movies[m].series.splice(i, 1);
                if (series >= i)
                    series--;
                break;
            }
        }
        this.movieService.modifyMovie(this.movies[m]).subscribe(result => {
            if (result._id) {
                this.movies[m].modifying = null;
                this.clickMovie(m, series, sequence);
                this.flashMessage.showFlashMessage({
                    messages: ['수정되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
                return false;
            }
            else {
                this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
        });
    }
    seriesSelect() {
        if (!this.tvas[this.linked.idx].category_movie)
            return;
        for (let movie of this.movies) {
            if (this.tvas[this.linked.idx].category_movie == movie._id) {
                for (let movieSeries of movie.series) {
                    if (this.tvas[this.linked.idx].series[this.linked.series].key == movieSeries.key) {
                        this.seriesMemo = movieSeries.memo;
                        // this.writingMovie.order = movieSeries.sequences.length + 1;
                        return;
                    }
                }
            }
        }
        // this.writingMovie.order = 1;
    }
    searchedToSequence(sequence, malSearched) {
        if (malSearched.title.kor)
            sequence.title.kor = malSearched.title.kor;
        sequence.title.eng = malSearched.title.eng;
        sequence.title.jpn = malSearched.title.jpn;
        sequence.aired = malSearched.aired.start;
        sequence.studios = malSearched.studios;
        sequence.mal_id = malSearched.mal_id;
        sequence.img = malSearched.img;
        this.setStudio(sequence.studios);
    }
    searchMovie(option, text, m) {
        if (!option) {
            alert('옵션을 선택해주세요.');
            return;
        }
        if (!text || text == '') {
            alert('비어있습니다.');
            return;
        }
        let movie = m ? this.movies[m].modifying : this.writingMovie;
        if (option == 'mal_id') {
            let id = parseInt(text);
            if (isNaN(id)) {
                this.flashMessage.showFlashMessage({
                    messages: ['숫자를 입력해야 합니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return;
            }
            this.loading = true;
            this.searchService.mal(id).subscribe(result => {
                this.loading = false;
                if (result.mal_id)
                    this.searchedToSequence(movie, result);
                else {
                    this.flashMessage.showFlashMessage({
                        messages: ['존재하지 않는 ID이거나 오류가 발생했습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
        else {
            const data = Object(src_app_models_searched__WEBPACK_IMPORTED_MODULE_8__["searchedProtocolFactory"])(text, option);
            const dialogRef = this.dialog.open(_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SearchDialogComponent"], { data: data });
            dialogRef.afterClosed().subscribe(() => {
                if (data.malSearched) {
                    this.searchedToSequence(movie, data.malSearched);
                }
            });
        }
    }
    writeMovie() {
        this.seriesMemo = '';
        this.writing = true;
        this.writingMovie = {
            title: { kor: '', eng: '', jpn: '', rv: 'kor' },
            aired: '',
            order: 1,
            studios: [],
            memo: '',
            mal_id: 0,
            img: ''
        };
        this.modifying = {
            studios: '',
            series: 0,
            sequence: 0
        };
        this.tvaService.getTvas().subscribe(tvas => {
            this.tvas = tvas;
            this.tvas.sort((a, b) => {
                return a.category.localeCompare(b.category);
            });
        });
    }
    onWriteSubmit() {
        // validating input values
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.writingMovie, ['memo']))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["notOK"])();
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.modifying) || !Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.linked))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["notOK"])();
        let category = -1;
        let series = -1;
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].category == this.tvas[this.linked.idx].category) {
                category = i;
                for (let j = 0; j < this.movies[i].series.length; j++) {
                    if (this.movies[i].series[j].key == this.tvas[this.linked.idx].series[this.linked.series].key) {
                        series = j;
                        break;
                    }
                }
                break;
            }
        }
        let newMovie;
        this.writingMovie.studios = this.modifying.studios.trim().split('\n');
        if (category != -1) {
            newMovie = this.movies[category];
            if (series != -1) { // add to an existing series
                newMovie.series[series].sequences.push(this.writingMovie);
                newMovie.series[series].sequences.sort((a, b) => { return a.order - b.order; });
            }
            else { // add new series
                newMovie.series.push({
                    title: this.tvas[this.linked.idx].series[this.linked.series].title,
                    key: this.tvas[this.linked.idx].series[this.linked.series].key,
                    memo: this.seriesMemo,
                    sequences: [this.writingMovie]
                });
                newMovie.series.sort((a, b) => {
                    return new Date(a.sequences[0].aired).getTime() - new Date(b.sequences[0].aired).getTime();
                });
            }
            this.movieService.modifyMovie(newMovie).subscribe(result => {
                if (result._id) {
                    alert('추가되었습니다.');
                    this.flashMessage.showFlashMessage({
                        messages: ['추가되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    this.cancelEditing();
                    this.movieMap.set(result._id, result);
                    this.clickMovieWithId(result._id, series, result.series[series].sequences.length - 1);
                    let el = document.getElementById(result._id);
                    try {
                        el.scrollIntoView();
                    }
                    catch (e) { }
                    if (this.incompletion_id) {
                        (this.from == 'data-from-watching' ? this.watchingService : this.planService).remove(this.incompletion_id).subscribe(err => {
                            if (err)
                                alert('원래의 목록에서 삭제하는 도중 오류가 발생하였습니다.');
                            else
                                this.incompletion_id = undefined;
                        });
                    }
                }
                else {
                    alert('오류가 발생하였습니다.');
                    this.flashMessage.showFlashMessage({
                        messages: ['오류가 발생하였습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
                return;
            });
        }
        else {
            newMovie = {
                category: this.tvas[this.linked.idx].category,
                category_tva: this.tvas[this.linked.idx]._id,
                series: [{
                        title: this.tvas[this.linked.idx].series[this.linked.series].title,
                        key: this.tvas[this.linked.idx].series[this.linked.series].key,
                        memo: this.seriesMemo,
                        sequences: [this.writingMovie]
                    }]
            };
            this.movieService.addMovie(newMovie).subscribe(result => {
                if (result._id) {
                    alert('추가되었습니다.');
                    this.flashMessage.showFlashMessage({
                        messages: ['추가되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    this.cancelEditing();
                    this.movies.push(result);
                    // this.movies.sort((a, b) => { return a.category.localeCompare(b.category) });
                    this.align();
                    this.movieMap.set(result._id, result);
                    this.clickMovieWithId(result._id, 0, 0);
                    setTimeout(() => {
                        try {
                            document.getElementById(result._id).scrollIntoView();
                        }
                        catch (e) { }
                    }, 500);
                    if (this.incompletion_id) {
                        (this.from == 'data-from-watching' ? this.watchingService : this.planService).remove(this.incompletion_id).subscribe(err => {
                            if (err)
                                alert('원래의 목록에서 삭제하는 도중 오류가 발생하였습니다.');
                            else
                                this.incompletion_id = undefined;
                        });
                    }
                }
                else {
                    alert('오류가 발생하였습니다.');
                    this.flashMessage.showFlashMessage({
                        messages: ['오류가 발생하였습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
                return;
            });
        }
    }
    removeMovie(m, series, sequence) {
        if (!confirm('삭제하시겠습니까?'))
            return;
        this.movieService.removeMovie(this.movies[m]._id, series, sequence).subscribe(err => {
            if (err) {
                this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
            else {
                this.movies.splice(m, 1);
            }
        });
    }
    openAll() {
        for (let i = 0; i < this.movies.length; i++) {
            this.movies[i].opened = null;
            this.clickMovie(i, 0, 0);
        }
    }
    closeAll() {
        for (let movie of this.movies) {
            movie.opened = null;
        }
    }
    count() {
        if (this.movies) {
            let count = 0;
            for (let movie of this.movies) {
                for (let series of movie.series) {
                    count += series.sequences.length;
                }
            }
            return count;
        }
        return 0;
    }
    findByStudio(studio) {
        this.dialog.open(_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_16__["StudioDialogComponent"], { data: studio });
    }
};
MovieComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
    { type: src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_3__["TvaService"] },
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"] },
    { type: src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_11__["WatchingService"] },
    { type: src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_12__["PlanService"] },
    { type: src_app_services_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie/movie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie.component.css */ "./src/app/components/movie/movie.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
        src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_3__["TvaService"],
        src_app_services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"],
        src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_11__["WatchingService"],
        src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_12__["PlanService"],
        src_app_services_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
], MovieComponent);



/***/ }),

/***/ "./src/app/components/no-page/no-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/no-page/no-page.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:hover {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uby1wYWdlL25vLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uby1wYWdlL25vLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/no-page/no-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/no-page/no-page.component.ts ***!
  \*********************************************************/
/*! exports provided: NoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageComponent", function() { return NoPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");



let NoPageComponent = class NoPageComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle('Page Not Found');
    }
};
NoPageComponent.ctorParameters = () => [
    { type: src_app_services_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"] }
];
NoPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/no-page/no-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./no-page.component.css */ "./src/app/components/no-page/no-page.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"]])
], NoPageComponent);



/***/ }),

/***/ "./src/app/components/plan/plan.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/plan/plan.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-item {\r\n    color: grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGFuL3BsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxhbi9wbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8taXRlbSB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/plan/plan.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/plan/plan.component.ts ***!
  \***************************************************/
/*! exports provided: PlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanComponent", function() { return PlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_models_searched__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/searched */ "./src/app/models/searched.ts");
/* harmony import */ var _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialogs/search-dialog/search-dialog.component */ "./src/app/components/dialogs/search-dialog/search-dialog.component.ts");
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/headerAlign */ "./src/app/models/headerAlign.ts");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");
/* harmony import */ var _dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialogs/studio-dialog/studio-dialog.component */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts");













let PlanComponent = class PlanComponent extends src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_10__["HeaderAlign"] {
    constructor(planService, route, flashMessage, dialog, searchService, titleService, router) {
        super([1], [4]);
        this.planService = planService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.dialog = dialog;
        this.searchService = searchService;
        this.titleService = titleService;
        this.router = router;
        this.loading = false;
        this.writing = null;
        this.studios = null;
        this.titleService.setTitle('시청 예정');
        this.planService.getPlans().subscribe(plans => {
            this.plans = plans;
            super.setItems([this.plans]);
            this.plans.sort((a, b) => { return a.title[a.title.rv].localeCompare(b.title[b.title.rv]); });
            this.planMap = new Map();
            for (let plan of this.plans)
                this.planMap.set(plan._id, plan);
            setTimeout(() => this.scrollToElement(), 500); // to wait for page loading
        });
    }
    scrollToElement() {
        if (this.route.snapshot.paramMap.get('_id')) {
            const _id = this.route.snapshot.paramMap.get('_id');
            this.click(_id);
            let element = document.getElementById(_id);
            try {
                element.scrollIntoView();
            }
            catch (e) {
                alert('잘못된 ID값입니다: ' + _id);
            }
        }
    }
    getAlignment(standard) {
        switch (standard) {
            case 0: return (a, b) => { return a.type.localeCompare(b.type) * this.alignments[0][standard]; };
            case 1: return (a, b) => { return a.title[a.title.rv].localeCompare(b.title[b.title.rv]) * this.alignments[0][standard]; };
            case 2: return (a, b) => { return (a.studios[0] ? a.studios[0] : '-').localeCompare((b.studios[0] ? b.studios[0] : '-')) * this.alignments[0][standard]; };
            case 3: return (a, b) => { return (new Date(a.aired ? a.aired : null).getTime() - new Date(b.aired ? b.aired : null).getTime()) * this.alignments[0][standard]; };
            default: return;
        }
    }
    getQuarterFromAiredDate(aired) {
        if (!aired || aired == '')
            return '-';
        let date = new Date(aired);
        let year = date.getFullYear().toString().substring(2);
        let qtr = Math.floor((date.getMonth() + 4) / 3);
        return `'${year} - ${qtr}`;
    }
    click(_id) {
        let plan = this.planMap.get(_id);
        if (!plan)
            return;
        if (plan.modifying)
            return;
        plan.opened = !plan.opened;
    }
    ngOnInit() {
    }
    searchedToItem(plan, malSearched) {
        if (malSearched.title.kor)
            plan.title.kor = malSearched.title.kor;
        plan.title.eng = malSearched.title.eng;
        plan.title.jpn = malSearched.title.jpn;
        plan.aired = malSearched.aired.start;
        plan.mal_id = malSearched.mal_id;
        plan.img = malSearched.img;
        plan.type = malSearched.type;
        this.studios = malSearched.studios.join('\n');
    }
    search(option, text, item) {
        if (!option) {
            alert('옵션을 선택해주세요.');
            return;
        }
        if (!text || text == '') {
            alert('비어있습니다.');
            return;
        }
        if (option == 'mal_id') {
            let id = parseInt(text);
            if (isNaN(id)) {
                this.flashMessage.showFlashMessage({
                    messages: ['숫자를 입력해야 합니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return;
            }
            this.loading = true;
            this.searchService.mal(id).subscribe(result => {
                this.loading = false;
                if (result.mal_id)
                    this.searchedToItem(item, result);
                else {
                    this.flashMessage.showFlashMessage({
                        messages: ['존재하지 않는 ID이거나 오류가 발생했습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
        else {
            const data = Object(src_app_models_searched__WEBPACK_IMPORTED_MODULE_7__["searchedProtocolFactory"])(text, option);
            const dialogRef = this.dialog.open(_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_8__["SearchDialogComponent"], { data: data });
            dialogRef.afterClosed().subscribe(() => {
                if (data.malSearched) {
                    this.searchedToItem(item, data.malSearched);
                }
            });
        }
    }
    closeEdit(_id) {
        if (_id)
            this.planMap.get(_id).modifying = null;
        this.writing = null;
        this.studios = '';
    }
    closeAllEdit() {
        for (let plan of this.plans)
            if (plan.modifying)
                this.closeEdit(plan._id);
        this.closeEdit();
    }
    modify(_id) {
        this.closeAllEdit();
        this.planMap.get(_id).opened = false;
        let clone = Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["cloneObject"])(this.planMap.get(_id));
        this.planMap.get(_id).modifying = clone;
        this.studios = this.planMap.get(_id).studios.join('\n');
    }
    onModifySubmit(_id, i) {
        if (!confirm('저장하시겠습니까?'))
            return;
        let plan = this.planMap.get(_id).modifying;
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(plan.title[plan.title.rv]))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])(['대표가 되는 제목은 입력해야 합니다.']);
        plan.studios = this.studios.trim().split('\n');
        this.planService.modifyPlan(plan).subscribe(result => {
            if (result._id) {
                this.planMap.delete(_id);
                this.planMap.set(_id, plan);
                this.plans[i] = plan;
                this.click(_id);
            }
            else {
                alert('오류가 발생하였습니다.');
                this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    }
    write() {
        this.closeAllEdit();
        let date = new Date();
        let year = date.getFullYear();
        let qtr = Math.floor((date.getMonth() + 4) / 3);
        this.writing = {
            title: {
                kor: '',
                eng: '',
                jpn: '',
                rv: 'kor'
            },
            type: 'tva',
            memo: '',
            mal_id: undefined,
            img: undefined,
            aired: '',
            studios: []
        };
    }
    onWriteSubmit() {
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.writing.title[this.writing.title.rv]))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])(['대표가 되는 제목은 입력해야 합니다.']);
        let trim = this.studios.trim();
        if (trim != '')
            this.writing.studios = trim.split('\n');
        this.planService.addPlan(this.writing).subscribe(result => {
            if (result._id) {
                alert('작성되었습니다.');
                this.planMap.set(result._id, result);
                this.plans.push(result);
                this.align();
                this.writing = null;
            }
            else {
                alert('오류가 발생하였습니다.');
                this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    }
    done(_id) {
        this.router.navigate([`/${this.planMap.get(_id).type}/data-from-plan`, _id]);
    }
    remove(_id, i) {
        if (!confirm('삭제하시겠습니까?'))
            return;
        this.planService.removePlan(_id).subscribe(err => {
            if (err) {
                this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
            else {
                this.planMap.delete(_id);
                this.plans.splice(i, 1);
            }
        });
    }
    openAll() {
        this.planMap.forEach((value, key) => {
            if (!value.opened)
                this.click(key);
        });
    }
    closeAll() {
        this.planMap.forEach((value, key) => {
            if (value.opened)
                this.click(key);
        });
    }
    findByStudio(studio) {
        this.dialog.open(_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_12__["StudioDialogComponent"], { data: studio });
    }
};
PlanComponent.ctorParameters = () => [
    { type: src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_2__["PlanService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"] },
    { type: src_app_services_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./plan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/plan/plan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./plan.component.css */ "./src/app/components/plan/plan.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_2__["PlanService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"],
        src_app_services_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], PlanComponent);



/***/ }),

/***/ "./src/app/components/tva/tva.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/tva/tva.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHZhL3R2YS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/tva/tva.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/tva/tva.component.ts ***!
  \*************************************************/
/*! exports provided: TvaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvaComponent", function() { return TvaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tva.service */ "./src/app/services/tva.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialogs/search-dialog/search-dialog.component */ "./src/app/components/dialogs/search-dialog/search-dialog.component.ts");
/* harmony import */ var src_app_models_searched__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/searched */ "./src/app/models/searched.ts");
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/models/headerAlign */ "./src/app/models/headerAlign.ts");
/* harmony import */ var _dialogs_text_field_dialog_text_field_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dialogs/text-field-dialog/text-field-dialog.component */ "./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.ts");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");
/* harmony import */ var _dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dialogs/studio-dialog/studio-dialog.component */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts");



















let TvaComponent = class TvaComponent extends src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_15__["HeaderAlign"] {
    constructor(tvaService, movieService, watchingService, planService, searchService, titleService, route, flashMessage, dialog) {
        super([2], [6]);
        this.tvaService = tvaService;
        this.movieService = movieService;
        this.watchingService = watchingService;
        this.planService = planService;
        this.searchService = searchService;
        this.titleService = titleService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.dialog = dialog;
        this.tvas = null;
        this.modifying = null;
        this.loading = false;
        this.writing = false;
        this.from = undefined;
        this.incompletion_id = undefined;
        this.counts = {
            sequences: 0,
            episodes: 0
        };
        this.titleService.setTitle('TVA');
        this.tvaService.getTvas().subscribe(tvas => {
            this.tvas = tvas;
            super.setItems([this.tvas]);
            this.tvaMap = new Map();
            tvas.map(v => this.tvaMap.set(v._id, v));
            this.count();
            this.align();
            setTimeout(() => this.scrollToElement(), 500); // to wait for page loading
        });
    }
    getAlignment(standard) {
        switch (standard) {
            case 0: return (a, b) => { return a.category.localeCompare(b.category) * this.alignments[0][standard]; };
            case 1: return (a, b) => { return a.series[0].title.localeCompare(b.series[0].title) * this.alignments[0][standard]; };
            case 2: return (a, b) => { return a.series[0].sequences[0].title[a.series[0].sequences[0].title.rv].localeCompare(b.series[0].sequences[0].title[a.series[0].sequences[0].title.rv]) * this.alignments[0][standard]; };
            case 3: return (a, b) => { return a.series[0].sequences[0].studios[0].localeCompare(b.series[0].sequences[0].studios[0]) * this.alignments[0][standard]; };
            case 4: return (a, b) => { return (a.series[0].sequences[0].episodes - b.series[0].sequences[0].episodes) * this.alignments[0][standard]; };
            case 5: return (a, b) => { return (new Date(a.series[0].sequences[0].aired.start).getTime() - new Date(b.series[0].sequences[0].aired.start).getTime()) * this.alignments[0][standard]; };
            default: return;
        }
    }
    scrollToElement() {
        if (this.route.snapshot.paramMap.get('_id')) {
            const _id = this.route.snapshot.paramMap.get('_id');
            this.clickTvaWithId(_id, +this.route.snapshot.paramMap.get('series'), +this.route.snapshot.paramMap.get('sequence'));
            let element = document.getElementById(_id);
            try {
                element.scrollIntoView();
            }
            catch (e) {
                alert('알 수 없는 에러가 발생하였습니다.\n' + e);
            }
        }
        else if (this.route.snapshot.paramMap.get('from')) {
            this.writeTva();
            this.from = this.route.snapshot.paramMap.get('from');
            this.incompletion_id = this.route.snapshot.paramMap.get('incompletion_id');
            (this.from == 'data-from-watching' ? this.watchingService : this.planService).get(this.incompletion_id).subscribe(result => {
                if (!result._id) {
                    alert('알 수 없는 에러가 발생하였습니다.\n' + result);
                    return;
                }
                if (result.mal_id)
                    this.searchTva('mal_id', result.mal_id.toString());
                else {
                    this.writingTva.aired.start = result.aired;
                    this.writingTva.studios = result.studios;
                }
                this.writingTva.title = result.title;
                this.writingTva.memo = result.memo;
                let element = document.getElementById('writing-area');
                try {
                    element.scrollIntoView();
                }
                catch (e) {
                    alert('알 수 없는 에러가 발생하였습니다.\n' + e);
                }
            });
        }
    }
    allElementsLength(t) {
        let count = 0;
        for (let i = 0; i < this.tvas[t].series.length; i++) {
            count += this.tvas[t].series[i].sequences.length;
        }
        return count;
    }
    ngOnInit() {
    }
    clickTva(t, series, sequence) {
        if (this.tvas[t].modifying)
            return;
        let opened = { series: series, sequence: sequence, linked: null };
        if (this.tvas[t].opened) {
            if (this.tvas[t].opened.series != series || this.tvas[t].opened.sequence != sequence) {
                opened.linked = this.tvas[t].opened.linked;
                this.tvas[t].opened = opened;
            }
            else
                this.tvas[t].opened = null;
            return;
        }
        this.tvas[t].opened = opened;
        this.setLinkedTva(t, this.tvas[t].category_movie, this.tvas[t].series[series].key);
    }
    clickTvaWithId(_id, series, sequence) {
        if (this.tvaMap.get(_id).modifying)
            return;
        let opened = { series: series, sequence: sequence, linked: null };
        if (this.tvaMap.get(_id).opened) {
            if (this.tvaMap.get(_id).opened.series != series || this.tvaMap.get(_id).opened.sequence != sequence) {
                opened.linked = this.tvaMap.get(_id).opened.linked;
                this.tvaMap.get(_id).opened = opened;
            }
            else
                this.tvaMap.get(_id).opened = null;
            return;
        }
        this.tvaMap.get(_id).opened = opened;
        this.setLinkedTvaWithId(_id, this.tvaMap.get(_id).category_movie, this.tvaMap.get(_id).series[series].key);
    }
    setLinkedTva(t, movie_id, key) {
        if (!this.tvas[t].category_movie)
            return;
        if (this.tvas[t].opened.linked)
            return;
        this.movieService.getMovie(movie_id).subscribe(movie => {
            for (let i = 0; i < movie.series.length; i++) {
                if (movie.series[i].key == key) {
                    this.tvas[t].opened.linked = {
                        title: movie.series[i].title,
                        _id: movie._id,
                        series: i
                    };
                    return;
                }
            }
            this.tvas[t].opened.linked = null;
        });
    }
    setLinkedTvaWithId(_id, movie_id, key) {
        if (!this.tvaMap.get(_id).category_movie)
            return;
        if (this.tvaMap.get(_id).opened.linked)
            return;
        this.movieService.getMovie(movie_id).subscribe(movie => {
            for (let i = 0; i < movie.series.length; i++) {
                if (movie.series[i].key == key) {
                    this.tvaMap.get(_id).opened.linked = {
                        title: movie.series[i].title,
                        _id: movie._id,
                        series: i
                    };
                    return;
                }
            }
            this.tvaMap.get(_id).opened.linked = null;
        });
    }
    editCategory(t) {
        const data = {
            title: '카테고리명 수정',
            explain: '수정할 카테고리명을 입력해주세요.',
            placeholder: '카테고리명',
            text: this.tvas[t].category
        };
        const dialogRef = this.dialog.open(_dialogs_text_field_dialog_text_field_dialog_component__WEBPACK_IMPORTED_MODULE_16__["TextFieldDialogComponent"], { data: data });
        dialogRef.afterClosed().subscribe(() => {
            if (!data.text || data.text == '')
                return;
            this.tvas[t].category = data.text;
            this.tvaService.modifyTva(this.tvas[t]).subscribe(result => {
                if (!result._id)
                    alert('수정 실패');
            });
        });
    }
    setStudio(studios) {
        this.modifying.studios = '';
        for (let studio of studios)
            this.modifying.studios += studio + '\n';
    }
    modifyTva(t, series, sequence) {
        this.tvas[t].opened = null;
        for (let tva of this.tvas)
            tva.modifying = null;
        this.tvas[t].modifying = Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["cloneObject"])(this.tvas[t].series[series].sequences[sequence]);
        this.modifying = { series: series, sequence: sequence, studios: undefined, seriesTitle: this.tvas[t].series[series].title };
        this.setStudio(this.tvas[t].modifying.studios);
        this.seriesOptions = [];
        this.seriesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        for (let s of this.tvas[t].series)
            this.seriesOptions.push(s.title);
        this.seriesFilteredOptions = this.seriesControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(value => {
            return this.seriesOptions.filter(option => option.toLowerCase().includes(value.toLowerCase()));
        }));
        this.seriesControl.setValue(this.tvas[t].series[series].title);
    }
    cancelModify(t) {
        this.tvas[t].modifying = null;
        this.tvas[t].opened = null;
        this.clickTva(t, this.modifying.series, this.modifying.sequence);
    }
    cancelWrite() {
        this.writing = false;
    }
    onModifySubmit(t, series, sequence) {
        if (!confirm('저장하시겠습니까?'))
            return;
        // validating input values
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.tvas[t].modifying, ['memo']))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])();
        this.modifying.seriesTitle = this.seriesControl.value;
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.modifying))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])();
        // change series with input title
        this.tvas[t].series[series].sequences.splice(sequence, 1);
        let flag = false;
        for (let i = 0; i < this.tvas[t].series.length; i++) {
            if (this.tvas[t].series[i].title == this.modifying.seriesTitle) {
                flag = true;
                this.tvas[t].modifying.studios = this.modifying.studios.trim().split('\n');
                this.tvas[t].series[i].sequences.push(this.tvas[t].modifying);
                this.tvas[t].series[i].sequences.sort((a, b) => { return a.season - b.season; });
                series = i;
                for (let j = 0; j < this.tvas[t].series[i].sequences.length; j++) {
                    if (this.tvas[t].series[i].sequences[j].season == this.tvas[t].modifying.season) {
                        sequence = j;
                        break;
                    }
                }
                break;
            }
        }
        // create a new series with input title
        if (!flag) {
            this.tvas[t].series.push({
                title: this.modifying.seriesTitle,
                key: new Date().getTime().toString(),
                memo: '',
                sequences: [this.tvas[t].modifying]
            });
            series = this.tvas[t].series.length - 1;
            sequence = 0;
            this.tvas[t].series.sort((a, b) => { return new Date(a.sequences[0].aired.start).getTime() - new Date(b.sequences[0].aired.start).getTime(); });
        }
        // remove empty series (which has an empty sequence)
        for (let i = 0; i < this.tvas[t].series.length; i++) {
            if (this.tvas[t].series[i].sequences.length == 0) {
                this.tvas[t].series.splice(i, 1);
                if (series >= i)
                    series--;
                break;
            }
        }
        this.tvaService.modifyTva(this.tvas[t]).subscribe(result => {
            if (result._id) {
                this.tvas[t].modifying = null;
                this.clickTva(t, series, sequence);
                this.flashMessage.showFlashMessage({
                    messages: ['수정되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
                return false;
            }
            else {
                this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
        });
    }
    searchedToSequence(sequence, malSearched) {
        if (malSearched.title.kor)
            sequence.title.kor = malSearched.title.kor;
        sequence.title.eng = malSearched.title.eng;
        sequence.title.jpn = malSearched.title.jpn;
        sequence.premiered.year = malSearched.premiered.year;
        sequence.premiered.quarter = malSearched.premiered.quarter;
        sequence.aired = malSearched.aired;
        sequence.episodes = malSearched.episodes;
        sequence.studios = malSearched.studios;
        sequence.mal_id = malSearched.mal_id;
        sequence.img = malSearched.img;
        this.setStudio(sequence.studios);
    }
    searchTva(option, text, t) {
        if (!option) {
            alert('옵션을 선택해주세요.');
            return;
        }
        if (!text || text == '') {
            alert('비어있습니다.');
            return;
        }
        let tva = t ? this.tvas[t].modifying : this.writingTva;
        if (option == 'mal_id') {
            let id = parseInt(text);
            if (isNaN(id)) {
                this.flashMessage.showFlashMessage({
                    messages: ['숫자를 입력해야 합니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return;
            }
            this.loading = true;
            this.searchService.mal(id).subscribe(result => {
                this.loading = false;
                if (result.mal_id)
                    this.searchedToSequence(tva, result);
                else {
                    this.flashMessage.showFlashMessage({
                        messages: ['존재하지 않는 ID이거나 오류가 발생했습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
        else {
            const data = Object(src_app_models_searched__WEBPACK_IMPORTED_MODULE_8__["searchedProtocolFactory"])(text, option);
            const dialogRef = this.dialog.open(_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_7__["SearchDialogComponent"], { data: data });
            dialogRef.afterClosed().subscribe(() => {
                if (data.malSearched) {
                    this.searchedToSequence(tva, data.malSearched);
                }
            });
        }
    }
    writeTva() {
        this.categoryOptions = [];
        this.seriesOptions = [];
        for (let tva of this.tvas) {
            this.categoryOptions.push(tva.category);
            tva.modifying = null;
        }
        this.categoryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.categoryFilteredOptions = this.categoryControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(value => {
            return this.categoryOptions.filter(option => option.toLowerCase().includes(value.toLowerCase()));
        }));
        this.writeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
            writeSeriesControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]()
        });
        let date = new Date();
        let year = date.getFullYear();
        let qtr = Math.floor((date.getMonth() + 4) / 3);
        this.seriesMemo = '';
        this.writing = true;
        this.writingTva = {
            title: { kor: '', eng: '', jpn: '', rv: 'kor' },
            premiered: { year: year, quarter: qtr },
            aired: { start: '', end: '' },
            season: 1,
            episodes: 0,
            studios: [],
            memo: '',
            mal_id: 0,
            img: ''
        };
        this.modifying = {
            seriesTitle: '',
            studios: '',
            series: 0,
            sequence: 0
        };
    }
    categoryInput(event) {
        for (let tva of this.tvas) {
            if (event.option.value == tva.category) {
                this.seriesOptions = [];
                for (let series of tva.series)
                    this.seriesOptions.push(series.title);
                this.seriesFilteredOptions = this.writeFormGroup.get('writeSeriesControl').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(value => {
                    return this.seriesOptions.filter(option => option.toLowerCase()
                        .includes(value.toLowerCase()));
                }));
                return;
            }
        }
    }
    seriesInput(event) {
        for (let tva of this.tvas) {
            if (event.option.value == tva.category) {
                for (let series of tva.series) {
                    if (this.writeFormGroup.get('writeSeriesControl').value == series.title) {
                        this.seriesMemo = series.memo;
                        this.writingTva.season = series.sequences.length + 1;
                        return;
                    }
                }
            }
        }
    }
    onWriteSubmit() {
        // validating input values
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.writingTva, ['memo']))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])();
        this.modifying.seriesTitle = this.writeFormGroup.get('writeSeriesControl').value;
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.modifying) || !Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.categoryControl.value))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])();
        let category = -1;
        let series = -1;
        for (let i = 0; i < this.tvas.length; i++) {
            if (this.tvas[i].category == this.categoryControl.value) {
                category = i;
                for (let j = 0; j < this.tvas[i].series.length; j++) {
                    if (this.tvas[i].series[j].title == this.writeFormGroup.get('writeSeriesControl').value) {
                        series = j;
                        break;
                    }
                }
                break;
            }
        }
        let newTva;
        this.writingTva.studios = this.modifying.studios.trim().split('\n');
        if (category != -1) {
            newTva = this.tvas[category];
            if (series != -1) { // add to an existing series
                newTva.series[series].sequences.push(this.writingTva);
                newTva.series[series].sequences.sort((a, b) => { return a.season - b.season; });
            }
            else { // add new series
                newTva.series.push({
                    title: this.writeFormGroup.get('writeSeriesControl').value,
                    key: new Date().getTime().toString(),
                    memo: this.seriesMemo,
                    sequences: [this.writingTva]
                });
                newTva.series.sort((a, b) => {
                    return new Date(a.sequences[0].aired.start).getTime() - new Date(b.sequences[0].aired.start).getTime();
                });
            }
            this.tvaService.modifyTva(newTva).subscribe(result => {
                if (result._id) {
                    alert('추가되었습니다.');
                    this.flashMessage.showFlashMessage({
                        messages: ['추가되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    this.tvaMap.set(result._id, result);
                    this.clickTvaWithId(result._id, series, result.series[series].sequences.length - 1);
                    setTimeout(() => {
                        try {
                            let el = document.getElementById(result._id);
                            el.scrollIntoView();
                        }
                        catch (e) { }
                    }, 500);
                    this.writing = false;
                    if (this.incompletion_id) {
                        (this.from == 'data-from-watching' ? this.watchingService : this.planService).remove(this.incompletion_id).subscribe(err => {
                            if (err)
                                alert('원래의 목록에서 삭제하는 도중 오류가 발생하였습니다.');
                            else
                                this.incompletion_id = undefined;
                        });
                    }
                }
                else {
                    alert('오류가 발생하였습니다.');
                    this.flashMessage.showFlashMessage({
                        messages: ['오류가 발생하였습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
                return;
            });
        }
        else {
            newTva = {
                category: this.categoryControl.value,
                category_movie: null,
                series: [{
                        title: this.writeFormGroup.get('writeSeriesControl').value,
                        key: new Date().getTime().toString(),
                        memo: this.seriesMemo,
                        sequences: [this.writingTva]
                    }]
            };
            this.tvaService.addTva(newTva).subscribe(result => {
                if (result._id) {
                    alert('추가되었습니다.');
                    this.flashMessage.showFlashMessage({
                        messages: ['추가되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    this.writing = false;
                    this.tvas.push(result);
                    this.align();
                    this.tvaMap.set(result._id, result);
                    this.clickTvaWithId(result._id, 0, 0);
                    setTimeout(() => {
                        try {
                            document.getElementById(result._id).scrollIntoView();
                        }
                        catch (e) { }
                    }, 500);
                    if (this.incompletion_id) {
                        (this.from == 'data-from-watching' ? this.watchingService : this.planService).remove(this.incompletion_id).subscribe(err => {
                            if (err)
                                alert('원래의 목록에서 삭제하는 도중 오류가 발생하였습니다.');
                            else
                                this.incompletion_id = undefined;
                        });
                    }
                }
                else {
                    alert('오류가 발생하였습니다.');
                    this.flashMessage.showFlashMessage({
                        messages: ['오류가 발생하였습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
                return;
            });
        }
    }
    removeTva(t, series, sequence) {
        if (!confirm('삭제하시겠습니까?'))
            return;
        this.tvaService.removeTva(this.tvas[t]._id, series, sequence).subscribe(err => {
            if (err) {
                this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
            else {
                this.tvas.splice(t, 1);
            }
        });
    }
    openAll() {
        for (let i = 0; i < this.tvas.length; i++) {
            this.tvas[i].opened = null;
            this.clickTva(i, 0, 0);
        }
    }
    closeAll() {
        for (let tva of this.tvas) {
            tva.opened = null;
        }
    }
    count() {
        if (this.tvas) {
            this.tvas.map(tva => {
                tva.series.map(series => {
                    this.counts.sequences += series.sequences.length;
                    series.sequences.map(sequence => this.counts.episodes += sequence.episodes);
                });
            });
        }
    }
    findByStudio(studio) {
        this.dialog.open(_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_18__["StudioDialogComponent"], { data: studio });
    }
    toCategory(rv) {
        const s = this.writingTva.title[rv];
        this.categoryControl.setValue(s);
        this.writeFormGroup.get('writeSeriesControl').setValue(s);
    }
};
TvaComponent.ctorParameters = () => [
    { type: src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_2__["TvaService"] },
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"] },
    { type: src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_13__["WatchingService"] },
    { type: src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_14__["PlanService"] },
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_12__["SearchService"] },
    { type: src_app_services_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
TvaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tva',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tva.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tva/tva.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tva.component.css */ "./src/app/components/tva/tva.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_2__["TvaService"],
        src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"],
        src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_13__["WatchingService"],
        src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_14__["PlanService"],
        src_app_services_search_service__WEBPACK_IMPORTED_MODULE_12__["SearchService"],
        src_app_services_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
], TvaComponent);



/***/ }),

/***/ "./src/app/components/watching/watching.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/watching/watching.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".download-link {\r\n    color: white;\r\n}\r\n\r\n.download-link:hover {\r\n    color: grey;\r\n    text-decoration: none;\r\n}\r\n\r\n.inner-table-section {\r\n    padding: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YXRjaGluZy93YXRjaGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93YXRjaGluZy93YXRjaGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvd25sb2FkLWxpbmsge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZG93bmxvYWQtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmlubmVyLXRhYmxlLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/watching/watching.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/watching/watching.component.ts ***!
  \***********************************************************/
/*! exports provided: WatchingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchingComponent", function() { return WatchingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_models_searched__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/searched */ "./src/app/models/searched.ts");
/* harmony import */ var _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialogs/search-dialog/search-dialog.component */ "./src/app/components/dialogs/search-dialog/search-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var _dialogs_ohli_dialog_ohli_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialogs/ohli-dialog/ohli-dialog.component */ "./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.ts");
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/headerAlign */ "./src/app/models/headerAlign.ts");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");
/* harmony import */ var _dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dialogs/studio-dialog/studio-dialog.component */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts");
/* harmony import */ var _dialogs_ended_dialog_ended_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../dialogs/ended-dialog/ended-dialog.component */ "./src/app/components/dialogs/ended-dialog/ended-dialog.component.ts");
















let WatchingComponent = class WatchingComponent extends src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_12__["HeaderAlign"] {
    constructor(watchingService, planService, route, flashMessage, dialog, searchService, titleService) {
        super([4, 1], [5, 4]);
        this.watchingService = watchingService;
        this.planService = planService;
        this.route = route;
        this.flashMessage = flashMessage;
        this.dialog = dialog;
        this.searchService = searchService;
        this.titleService = titleService;
        this.airings = null;
        this.ends = null;
        this.loading = false;
        this.writing = null;
        this.studios = null;
        this.plan_id = null;
        this.days = [
            '일', '월', '화', '수', '목', '금', '토'
        ];
        this.titleService.setTitle('시청 중');
        this.watchingService.getWatchings().subscribe(watchings => {
            this.watchingMap = new Map();
            this.airings = [];
            this.ends = [];
            for (let watching of watchings) {
                if (watching.ohli_id)
                    this.airings.push(watching);
                else
                    this.ends.push(watching);
                this.watchingMap.set(watching._id, watching);
            }
            this.setItems([this.airings, this.ends]);
            this.align(0);
            this.align(1);
            setTimeout(() => this.scrollToElement(), 500); // to wait for page loading
        });
    }
    getAlignment(standard, num) {
        switch (standard) {
            case 0: return (a, b) => { return a.type.localeCompare(b.type) * this.alignments[num][standard]; };
            case 1: return (a, b) => { return a.title[a.title.rv].localeCompare(b.title[b.title.rv]) * this.alignments[num][standard]; };
            case 2: return (a, b) => { return a.studios[0].localeCompare(b.studios[0]) * this.alignments[num][standard]; };
            case 3: return (a, b) => { return (new Date(a.aired ? a.aired : null).getTime() - new Date(b.aired ? b.aired : null).getTime()) * this.alignments[num][standard]; };
            case 4: return (a, b) => { return (a.broadcast.day != b.broadcast.day ? a.broadcast.day - b.broadcast.day : (a.broadcast.hour * 100 + a.broadcast.minute) - (b.broadcast.hour * 100 + b.broadcast.minute)) * this.alignments[num][standard]; };
            default: return null;
        }
    }
    scrollToElement() {
        if (this.route.snapshot.paramMap.get('_id')) {
            const _id = this.route.snapshot.paramMap.get('_id');
            this.click(_id);
            let element = document.getElementById(_id);
            try {
                element.scrollIntoView();
            }
            catch (e) {
                alert('알 수 없는 에러가 발생하였습니다.\n' + e);
            }
        }
        else if (this.route.snapshot.paramMap.get('plan_id')) {
            this.plan_id = this.route.snapshot.paramMap.get('plan_id');
            this.write();
            this.planService.getPlan(this.plan_id).subscribe(plan => {
                this.writing.title = plan.title;
                this.writing.type = plan.type;
                this.writing.memo = plan.memo;
                if (plan.aired)
                    this.writing.aired = plan.aired;
                this.studios = plan.studios.join('\n');
                if (plan.mal_id)
                    this.search('mal_id', plan.mal_id.toString(), this.writing);
                try {
                    let el = document.getElementById('writing-area');
                    el.scrollIntoView();
                }
                catch (e) {
                    alert('에러가 발생하였습니다.\n' + e);
                }
            });
        }
    }
    click(_id) {
        let watching = this.watchingMap.get(_id);
        if (watching.modifying)
            return;
        if (watching.opened)
            watching.opened = false;
        else {
            watching.opened = true;
            if (watching.ohli_id) {
                this.watchingService.getVideos(watching.title.eng).subscribe(videos => watching.videos = videos);
                this.watchingService.getOhys(watching.title.eng).subscribe(ohys => { watching.ohys = ohys; console.log(ohys); });
                this.watchingService.getSubtitles(watching.ohli_id).subscribe(subtitles => watching.subtitles = subtitles);
            }
        }
    }
    ngOnInit() {
    }
    searchedToItem(watching, malSearched) {
        if (malSearched.title.kor)
            watching.title.kor = malSearched.title.kor;
        watching.title.eng = malSearched.title.eng;
        watching.title.jpn = malSearched.title.jpn;
        watching.aired = malSearched.aired.start;
        watching.premiered = malSearched.premiered;
        watching.broadcast = malSearched.broadcast;
        watching.mal_id = malSearched.mal_id;
        watching.img = malSearched.img;
        watching.type = malSearched.type;
        this.studios = malSearched.studios.join('\n');
    }
    search(option, text, item) {
        if (!option) {
            alert('옵션을 선택해주세요.');
            return;
        }
        if (!text || text == '') {
            alert('비어있습니다.');
            return;
        }
        if (option == 'mal_id') {
            let id = parseInt(text);
            if (isNaN(id)) {
                this.flashMessage.showFlashMessage({
                    messages: ['숫자를 입력해야 합니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return;
            }
            this.loading = true;
            this.searchService.mal(id).subscribe(result => {
                this.loading = false;
                if (result.mal_id)
                    this.searchedToItem(item, result);
                else {
                    this.flashMessage.showFlashMessage({
                        messages: ['존재하지 않는 ID이거나 오류가 발생했습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
        else {
            const data = Object(src_app_models_searched__WEBPACK_IMPORTED_MODULE_5__["searchedProtocolFactory"])(text, option);
            const dialogRef = this.dialog.open(_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SearchDialogComponent"], { data: data });
            dialogRef.afterClosed().subscribe(() => {
                if (data.malSearched) {
                    this.searchedToItem(item, data.malSearched);
                }
            });
        }
    }
    closeEdit(_id) {
        if (_id)
            this.watchingMap.get(_id).modifying = null;
        this.writing = null;
        this.studios = '';
    }
    closeAllEdit() {
        for (let arr of [this.airings, this.ends]) {
            for (let item of arr) {
                if (item.modifying) {
                    this.closeEdit(item._id);
                    return;
                }
            }
        }
        this.closeEdit();
    }
    findOhliId(watching) {
        if (!watching.title.kor || watching.title.kor == '') {
            alert('한글 제목이 비어있습니다.');
            return;
        }
        const data = { title: watching.title.kor, ohli_id: null };
        const dialogRef = this.dialog.open(_dialogs_ohli_dialog_ohli_dialog_component__WEBPACK_IMPORTED_MODULE_10__["OhliDialogComponent"], { data: data });
        dialogRef.afterClosed().subscribe(() => watching.ohli_id = data.ohli_id);
    }
    removeOhliId(watching) {
        watching.ohli_id = null;
    }
    modify(_id) {
        this.closeAllEdit();
        this.watchingMap.get(_id).opened = false;
        this.watchingMap.get(_id).modifying = Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["cloneObject"])(this.watchingMap.get(_id), ['videos', 'subtitles']);
        this.studios = this.watchingMap.get(_id).studios.join('\n');
    }
    onModifySubmit(_id, i, isAiring) {
        if (!confirm('저장하시겠습니까?'))
            return;
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.watchingMap.get(_id).modifying, ['memo']) || !Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.studios))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])(['빈 필드가 있습니다.']);
        let watching = this.watchingMap.get(_id).modifying;
        watching.studios = this.studios.trim().split('\n');
        this.watchingService.modifyWatching(watching).subscribe(result => {
            if (result._id) {
                this.watchingMap.delete(_id);
                this.watchingMap.set(_id, watching);
                (isAiring ? this.airings : this.ends)[i] = watching;
                this.click(_id);
            }
            else {
                alert('오류가 발생하였습니다.');
                this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    }
    write() {
        let date = new Date();
        let year = date.getFullYear();
        let qtr = Math.floor((date.getMonth() + 4) / 3);
        this.closeAllEdit();
        this.writing = {
            title: {
                kor: '',
                eng: '',
                jpn: '',
                rv: 'kor'
            },
            premiered: {
                year: year,
                quarter: qtr
            },
            broadcast: undefined,
            type: 'tva',
            memo: '',
            mal_id: 0,
            img: '',
            aired: '',
            studios: []
        };
    }
    onWriteSubmit() {
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.writing, ['memo', 'ohli_id', '_id', 'modifying', 'opened']) || !Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.studios))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])(['빈 필드가 있습니다.']);
        this.writing.studios = this.studios.trim().split('\n');
        this.watchingService.addWatching(this.writing).subscribe(result => {
            if (result._id) {
                this.watchingMap.set(result._id, result);
                if (result.ohli_id) {
                    this.airings.push(result);
                    this.align(0);
                }
                else {
                    this.ends.push(result);
                    this.align(1);
                }
                alert('추가되었습니다.');
                this.writing = null;
                this.click(result._id);
                let el = document.getElementById(result._id);
                try {
                    el.scrollIntoView();
                }
                catch (e) { }
                if (this.plan_id) {
                    this.planService.remove(this.plan_id).subscribe(err => {
                        if (err)
                            alert('원래의 목록에서 지우던 도중 오류가 발생하였습니다.');
                        else
                            this.plan_id = null;
                    });
                }
            }
            else {
                alert('오류가 발생하였습니다.');
                this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    }
    remove(_id, i, isAiring) {
        if (!confirm('삭제하시겠습니까?'))
            return;
        this.watchingService.removeWatching(_id).subscribe(err => {
            if (err) {
                this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
            else {
                this.watchingMap.delete(_id);
                (isAiring ? this.airings : this.ends).splice(i, 1);
            }
        });
    }
    openAll() {
        this.watchingMap.forEach((value, key) => {
            if (!value.opened)
                this.click(key);
        });
    }
    closeAll() {
        this.watchingMap.forEach((value, key) => {
            if (value.opened)
                this.click(key);
        });
    }
    getToday() {
        let date = new Date();
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    }
    getDate(dateString) {
        let today = new Date();
        let given = new Date(dateString);
        if (given.getMonth() == today.getMonth() && given.getDate() == today.getDate())
            return dateString.substring(11);
        else
            return `${given.getMonth() + 1}/${given.getDate()}`;
    }
    getDay(broadcast) {
        const f = (n) => { return n >= 10 ? `${n}` : `0${n}`; };
        return `${this.days[broadcast.day]} ${f(broadcast.hour)}:${f(broadcast.minute)}`;
    }
    getSize(size) {
        const dividedSize = Math.round(size / 1024 / 1024);
        if (dividedSize >= 1000)
            return (dividedSize / 1024).toFixed(2) + 'GB';
        else
            return dividedSize + 'MB';
    }
    findByStudio(studio) {
        this.dialog.open(_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_14__["StudioDialogComponent"], { data: studio });
    }
    openTodayAiring() {
        this.closeAll();
        const today = new Date();
        const broadcast = {
            day: today.getDay(),
            hour: today.getHours(),
            minute: today.getMinutes()
        };
        let flag = false;
        for (let airing of this.airings) {
            if (!airing.broadcast)
                continue;
            else if (broadcast.day == airing.broadcast.day) {
                if (broadcast.hour > airing.broadcast.hour || (broadcast.hour == airing.broadcast.hour && broadcast.minute >= airing.broadcast.minute)) {
                    this.click(airing._id);
                    flag = true;
                }
            }
            else if ((broadcast.day + 6) % 7 == airing.broadcast.day) {
                if (broadcast.hour < airing.broadcast.hour || (broadcast.hour == airing.broadcast.hour && broadcast.minute <= airing.broadcast.minute)) {
                    this.click(airing._id);
                    flag = true;
                }
            }
        }
        if (!flag) {
            this.flashMessage.showFlashMessage({
                messages: [`24시간 이내 방영 항목이 없습니다.`],
                type: 'danger',
                timeout: 3000
            });
        }
    }
    findVideosAndSubtitles(item) {
        this.dialog.open(_dialogs_ended_dialog_ended_dialog_component__WEBPACK_IMPORTED_MODULE_15__["EndedDialogComponent"], { data: {
                title: item.title,
                mal_id: item.mal_id,
                img: item.img
            } });
    }
};
WatchingComponent.ctorParameters = () => [
    { type: src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_2__["WatchingService"] },
    { type: src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_11__["PlanService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"] },
    { type: src_app_services_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"] }
];
WatchingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watching',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./watching.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/watching/watching.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./watching.component.css */ "./src/app/components/watching/watching.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_2__["WatchingService"],
        src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_11__["PlanService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        src_app_services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"],
        src_app_services_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"]])
], WatchingComponent);



/***/ }),

/***/ "./src/app/interceptors/content.type.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/interceptors/content.type.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: ContentTypeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypeInterceptor", function() { return ContentTypeInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentTypeInterceptor = class ContentTypeInterceptor {
    constructor() { }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        });
        return next.handle(request);
    }
};
ContentTypeInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContentTypeInterceptor);



/***/ }),

/***/ "./src/app/models/headerAlign.ts":
/*!***************************************!*\
  !*** ./src/app/models/headerAlign.ts ***!
  \***************************************/
/*! exports provided: HeaderAlign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderAlign", function() { return HeaderAlign; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class HeaderAlign {
    constructor(alignedAs, alignmentsCounts) {
        this.alignments = [];
        this.alignedAs = alignedAs;
        for (let i = 0; i < alignmentsCounts.length; i++) {
            let arr = [];
            for (let j = 0; j < alignmentsCounts[i]; j++)
                arr.push(1);
            this.alignments.push(arr);
        }
    }
    setItems(items) {
        this.items = items;
    }
    setAlignments(alignmentsCounts) {
        this.alignments = [];
        for (let i = 0; i < alignmentsCounts.length; i++) {
            let arr = [];
            for (let j = 0; j < alignmentsCounts[i]; j++)
                arr.push(1);
            this.alignments.push(arr);
        }
    }
    align(num, standard) {
        let numIsNotSet;
        if (numIsNotSet = (num == undefined))
            num = 0;
        if (standard)
            this.alignedAs[num] = standard;
        if (numIsNotSet)
            this.items[num].sort(this.getAlignment(this.alignedAs[num]));
        else
            this.items[num].sort(this.getAlignment(this.alignedAs[num], num));
        this.alignments[num][this.alignedAs[num]] *= -1;
    }
    alignAll(standards) {
        for (let [i, standard] of (standards ? standards : this.alignedAs).entries()) {
            this.align(i, standard);
        }
    }
}


/***/ }),

/***/ "./src/app/models/item.ts":
/*!********************************!*\
  !*** ./src/app/models/item.ts ***!
  \********************************/
/*! exports provided: Item, cloneObject, isOK, notOK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneObject", function() { return cloneObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOK", function() { return isOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notOK", function() { return notOK; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Item {
}
function cloneObject(obj, excepts) {
    let clone = {};
    for (let key in obj) {
        if (excepts)
            if (excepts.includes(key))
                continue;
        if (typeof obj[key] == 'object' && obj[key] != null) {
            if (Array.isArray(obj[key])) {
                let arr = [];
                for (let each of obj[key]) {
                    if (typeof each == 'object')
                        arr.push(cloneObject(each));
                    else
                        arr.push(each);
                }
                clone[key] = arr;
            }
            else
                clone[key] = cloneObject(obj[key]);
        }
        else
            clone[key] = obj[key];
    }
    return clone;
}
function isValid(s) { return !(s == null || s === ''); }
function isOK(obj, excepts) {
    if (typeof obj != 'object') {
        if (!isValid(obj))
            return false;
    }
    else {
        for (let key in obj) {
            if (excepts)
                if (excepts.includes(key))
                    continue;
            if (typeof obj[key] != 'object') {
                if (!isOK(obj[key]))
                    return false;
            }
            else if (Array.isArray(obj[key])) {
                for (let each of obj[key])
                    if (!isOK(each))
                        return false;
            }
            else {
                if (!isOK(obj[key]))
                    return false;
            }
        }
    }
    return true;
}
function notOK(messages) {
    this.flashMessage.showFlashMessage({
        messages: messages ? messages : ['비어있는 필드가 있습니다.'],
        type: 'danger',
        timeout: 3000
    });
}


/***/ }),

/***/ "./src/app/models/searched.ts":
/*!************************************!*\
  !*** ./src/app/models/searched.ts ***!
  \************************************/
/*! exports provided: Searched, MalSearched, searchedProtocolFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Searched", function() { return Searched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MalSearched", function() { return MalSearched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchedProtocolFactory", function() { return searchedProtocolFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Searched {
}
class MalSearched {
}
function searchedProtocolFactory(text, option) {
    return {
        search: { text: text, option: option },
        malSearched: null
    };
}


/***/ }),

/***/ "./src/app/pipes/safe.html.ts":
/*!************************************!*\
  !*** ./src/app/pipes/safe.html.ts ***!
  \************************************/
/*! exports provided: SafeHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtml", function() { return SafeHtml; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafeHtml = class SafeHtml {
    constructor(dom) {
        this.dom = dom;
    }
    transform(value, args) {
        return this.dom.bypassSecurityTrustHtml(value);
    }
};
SafeHtml.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeHtml = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeHtml'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SafeHtml);



/***/ }),

/***/ "./src/app/pipes/safe.url.ts":
/*!***********************************!*\
  !*** ./src/app/pipes/safe.url.ts ***!
  \***********************************/
/*! exports provided: SafeUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrl", function() { return SafeUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafeUrl = class SafeUrl {
    constructor(dom) {
        this.dom = dom;
    }
    transform(value, args) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
    }
};
SafeUrl.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeUrl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeUrl'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SafeUrl);



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
    }
    getMovies() {
        return this.http.get('/api/movies').pipe();
    }
    getMovie(_id) {
        return this.http.get(`/api/movies/${_id}`).pipe();
    }
    addMovie(movie) {
        return this.http.post('/api/movies', movie).pipe();
    }
    modifyMovie(movie) {
        return this.http.put(`/api/movies/${movie._id}`, movie).pipe();
    }
    removeMovie(_id, series, sequence) {
        return this.http.delete(`/api/movies/${_id}/${series}/${sequence}`).pipe();
    }
    count() {
        return this.http.get(`/api/movies/count`).pipe();
    }
    getRandom() {
        return this.http.get('/api/movies/random').pipe();
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], MovieService);



/***/ }),

/***/ "./src/app/services/plan.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/plan.service.ts ***!
  \******************************************/
/*! exports provided: PlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanService", function() { return PlanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PlanService = class PlanService {
    constructor(http) {
        this.http = http;
    }
    get(_id) { return this.getPlan(_id); }
    remove(_id) { return this.removePlan(_id); }
    getPlans() {
        return this.http.get('/api/plans').pipe();
    }
    getPlan(_id) {
        return this.http.get(`/api/plans/${_id}`).pipe();
    }
    addPlan(plan) {
        return this.http.post('/api/plans', plan).pipe();
    }
    modifyPlan(plan) {
        return this.http.put(`/api/plans/${plan._id}`, plan).pipe();
    }
    removePlan(_id) {
        return this.http.delete(`/api/plans/${_id}`).pipe();
    }
    count() {
        return this.http.get(`/api/plans/count`).pipe();
    }
};
PlanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PlanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PlanService);



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SearchService = class SearchService {
    constructor(http) {
        this.http = http;
    }
    search(text, option) {
        return this.http.get(`/api/searches/${option}/${text}`).pipe();
    }
    mal(mal_id) {
        return this.http.get(`/api/searches/mal_id/${mal_id}`).pipe();
    }
    namuwiki(text) {
        // return `/api/searches/namuwiki/${encodeURI(text)}`;
        return `https://namu.wiki/search/${encodeURI(text)}`;
    }
    namuwiki_icon() {
        return 'import_contacts';
    }
    namuwiki_label() {
        return '나무위키';
    }
};
SearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SearchService);



/***/ }),

/***/ "./src/app/services/title.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/title.service.ts ***!
  \*******************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

var TitleService_1;


let TitleService = TitleService_1 = class TitleService {
    constructor(titleService) {
        this.titleService = titleService;
    }
    setTitle(title) {
        this.titleService.setTitle(TitleService_1.DefaultTitle + ' :: ' + title);
    }
    setDefaultTitle() {
        this.titleService.setTitle(TitleService_1.DefaultTitle);
    }
};
TitleService.DefaultTitle = 'AnimeLog W';
TitleService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
TitleService = TitleService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], TitleService);



/***/ }),

/***/ "./src/app/services/tva.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/tva.service.ts ***!
  \*****************************************/
/*! exports provided: TvaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvaService", function() { return TvaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TvaService = class TvaService {
    constructor(http) {
        this.http = http;
    }
    getTvas() {
        return this.http.get('/api/tvas').pipe();
    }
    getTva(_id) {
        return this.http.get(`/api/tvas/${_id}`).pipe();
    }
    addTva(tva) {
        return this.http.post('/api/tvas', tva).pipe();
    }
    modifyTva(tva) {
        return this.http.put(`/api/tvas/${tva._id}`, tva).pipe();
    }
    removeTva(_id, series, sequence) {
        return this.http.delete(`/api/tvas/${_id}/${series}/${sequence}`).pipe();
    }
    count() {
        return this.http.get(`/api/tvas/count`).pipe();
    }
    getRandom() {
        return this.http.get('/api/tvas/random').pipe();
    }
};
TvaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TvaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TvaService);



/***/ }),

/***/ "./src/app/services/watching.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/watching.service.ts ***!
  \**********************************************/
/*! exports provided: WatchingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchingService", function() { return WatchingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WatchingService = class WatchingService {
    constructor(http) {
        this.http = http;
    }
    get(_id) { return this.getWatching(_id); }
    remove(_id) { return this.removeWatching(_id); }
    getWatchings() {
        return this.http.get('/api/watchings').pipe();
    }
    getWatching(_id) {
        return this.http.get(`/api/watchings/${_id}`).pipe();
    }
    addWatching(watching) {
        return this.http.post('/api/watchings', watching).pipe();
    }
    modifyWatching(watching) {
        return this.http.put(`/api/watchings/${watching._id}`, watching).pipe();
    }
    removeWatching(_id) {
        return this.http.delete(`/api/watchings/${_id}`).pipe();
    }
    /**
     * @param year year when the animation ended, it is not needed when it is being aired
     */
    ohli(title, year) {
        return this.http.get(year ? `/api/watchings/ohlis/${year}/${title}` : `/api/watchings/ohlis/airing/${title}`).pipe();
    }
    getVideos(title) {
        return this.http.get(`/api/watchings/airing/videos/${title}`).pipe();
    }
    getOhys(title) {
        return this.http.get(`/api/watchings/airing/ohys/${title}`).pipe();
    }
    getSubtitles(ohli_id) {
        return this.http.get(`/api/watchings/airing/subtitles/${ohli_id}`).pipe();
    }
    count() {
        return this.http.get(`/api/watchings/count`).pipe();
    }
    getRandom() {
        return this.http.get('/api/watchings/random').pipe();
    }
};
WatchingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WatchingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], WatchingService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hoon\PJH\others\web\AnimeLog_w\frontend-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map