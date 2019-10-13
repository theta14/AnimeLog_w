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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table id=\"scroll-button\">\n    <tr>\n        <td class=\"clickable\" (click)=\"scrollUp()\"><mat-icon>keyboard_arrow_up</mat-icon></td>\n    </tr>\n    <tr>\n        <td class=\"clickable\" (click)=\"scrollDown()\"><mat-icon>keyboard_arrow_down</mat-icon></td>\n    </tr>\n</table>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light rounded navbar-fixed-top mdl-shadow--2dp\">\n    <a class=\"navbar-brand\" routerLink=\"/\">AnimeLog W</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\n        <ul></ul>\n        <nav mat-tab-nav-bar>\n            <a mat-tab-link\n                class=\"mat-tabs\"\n                *ngFor=\"let link of navLinks\"\n                [routerLink]=\"link.path\"\n                routerLinkActive #rla=\"routerLinkActive\"\n                [active]=\"rla.isActive\">\n                {{link.label}}\n            </a>\n        </nav>\n    </div>\n</nav>\n<ng-flash-message></ng-flash-message>\n\n<div id=\"main-part\" class=\"bg-dark\">\n    <div *ngIf=\"router.url != '/'\">\n        <br><br><br><br>\n    </div>\n    <main role=\"main\">\n        <router-outlet></router-outlet>\n    </main>\n    <br><br><br>\n</div>\n\n<footer class=\"text-muted py-5 bg-secondary\" id=\"footer\">\n    <div class=\"container\">\n        <p><b>Powered by ParkJH</b></p><br>\n        <div class=\"row\">\n            <div class=\"col-sm\">\n                <p><b>MEAN Stack</b></p>\n                <p><a target=\"_blank\" href=\"https://www.mongodb.com\">MongoDB</a></p>\n                <p><a target=\"_blank\" href=\"https://expressjs.com/ko/\">Express</a></p>\n                <p><a target=\"_blank\" href=\"https://angular.kr/\">Angular</a></p>\n                <p><a target=\"_blank\" href=\"https://nodejs.org/ko/\">Node.js</a></p>\n                <p><a target=\"_blank\" href=\"https://github.com/theta14/AnimeLog_w.git\">Github</a></p>\n            </div>\n            <div class=\"col-sm\">\n                <p><b>CSS</b></p>\n                <p><a target=\"_blank\" href=\"https://getbootstrap.com/\">Bootstrap</a></p>\n                <p><a target=\"_blank\" href=\"https://material.angular.io/\">Angular Material</a></p>\n                <p><a target=\"_blank\" href=\"https://getmdl.io/\">Material Design Lite</a></p>\n                <p><a target=\"_blank\" href=\"https://material.io/resources/icons/?style=baseline\">Material Icons</a></p>\n                <p><a target=\"_blank\" href=\"https://www.svgbackgrounds.com/\">SVG Backgrounds</a></p>\n            </div>\n            <div class=\"col-sm\">\n                <p><b>Resources</b></p>\n                <p><a target=\"_blank\" href=\"https://myanimelist.net/\">MyAnimeList</a></p>\n                <p><a target=\"_blank\" href=\"http://onnada.com/\">Onnada</a></p>\n                <p><a target=\"_blank\" href=\"https://nyaa.si/\">Nyaa</a></p>\n                <p><a target=\"_blank\" href=\"http://raws.ohys.net/t/\">Ohys</a></p>\n                <p><a target=\"_blank\" href=\"https://ohli.moe/\">OHLI</a></p>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/ended-dialog/ended-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dialogs/ended-dialog/ended-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title[data.title.rv]}}</h2>\n<div mat-dialog-content *ngIf=\"!year\">\n  <mat-spinner></mat-spinner><br>\n  필요한 정보를 불러오는 중...\n</div>\n<div mat-dialog-content *ngIf=\"year\">\n\n  <div class=\"container\">\n    <table class=\"table table-borderless\" style=\"width: 65%; margin: auto;\">\n      <tr>\n        <td style=\"text-align: center;\">\n          <img [src]=\"data.img\">\n        </td>\n        <td style=\"text-align: center; vertical-align: middle;\">\n          <button mat-stroked-button (click)=\"findOhliId()\">자막 찾기</button><br><br>\n          <a mat-stroked-button [href]=\"'https://www.google.com/search?q=' + data.title.kor + ' 토렌트'\" target=\"_blank\" class=\"btn-link\">구글 검색</a>\n        </td>\n      </tr>\n    </table>\n\n    <br>\n  \n    <table class=\"table\">\n      <caption>Nyaa</caption>\n      <tr *ngIf=\"!videos\">\n        <td colspan=\"4\">\n          <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        </td>\n      </tr>\n      <ng-container *ngIf=\"videos\">\n        <tr *ngFor=\"let video of videos\">\n          <td>{{getDate(video.date)}}</td>\n          <td>{{video.name}}</td>\n          <td>{{getSize(video.size)}}</td>\n          <td>\n            <a [href]=\"video.magnet | safeUrl\" class=\"download-link\">▶</a>\n          </td>\n        </tr>\n      </ng-container>\n    </table>\n  \n    <hr><br>\n  \n    <table class=\"table\">\n      <caption>Ohys</caption>\n      <tr *ngIf=\"!ohyses\">\n        <td colspan=\"2\">\n          <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        </td>\n      </tr>\n      <ng-container *ngIf=\"ohyses\">\n        <tr *ngFor=\"let ohys of ohyses\">\n          <td>{{ohys.name}}</td>\n          <td>\n            <a [href]=\"ohys.link\" class=\"download-link\" download>▶</a>\n          </td>\n        </tr>\n      </ng-container>\n    </table>\n  \n    <hr><br>\n  \n    <table class=\"table\">\n      <caption>OHLI</caption>\n      <tr *ngIf=\"!subtitles\">\n        <td colspan=\"4\">\n          <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        </td>\n      </tr>\n      <ng-container *ngIf=\"subtitles\">\n        <tr *ngFor=\"let subtitle of subtitles\">\n          <td>{{getDate(subtitle.date)}}</td>\n          <td>제{{subtitle.episode}}화</td>\n          <td>{{subtitle.by}}</td>\n          <td><a class=\"download-link\" [href]=\"subtitle.link\" target=\"_blank\">페이지로 이동</a></td>\n        </tr>\n      </ng-container>\n    </table>\n\n  </div>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button tabindex=\"-1\" (click)=\"onClose()\">닫기</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title *ngIf=\"!loading\">[ {{data.title}} ] 검색 결과</h2>\n<div mat-dialog-content>\n  \n  <div *ngIf=\"loading\" style=\"text-align: center;\">\n    <mat-spinner></mat-spinner><br>\n    결과를 가져오는 중...\n  </div>\n  <div class=\"container\" *ngIf=\"!loading\">\n    <ng-container *ngFor=\"let ohli of ohlis; index as i\">\n      <table class=\"table\">\n        <tr>\n          <td style=\"text-align: center; vertical-align: middle;\" rowspan=\"4\">\n            <img [src]=\"ohli.img\">\n          </td>\n          <th>OHLI</th>\n          <td>{{ohli.id}}</td>\n        </tr>\n        <tr>\n          <th>제목</th>\n          <td>{{ohli.title}}</td>\n        </tr>\n        <tr>\n          <th>방영 시작일</th>\n          <td>{{ohli.aired}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" style=\"text-align: center;\">\n            <button (click)=\"selectItem(i)\" mat-button>선택</button>\n          </td>\n        </tr>\n      </table>\n    </ng-container>\n    \n  </div>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button tabindex=\"-1\" (click)=\"onClose()\">닫기</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/search-dialog/search-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dialogs/search-dialog/search-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title *ngIf=\"!loading\">[ {{data.search.text}} ] 검색 결과</h2>\n<div mat-dialog-content>\n  \n  <div *ngIf=\"loading\" style=\"text-align: center;\">\n    <mat-spinner></mat-spinner><br>\n    결과를 가져오는 중...\n  </div>\n  <div class=\"container\" *ngIf=\"!loading\">\n    <ng-container *ngFor=\"let searched of searches; index as i\">\n      <table class=\"table\">\n        <tr>\n          <td style=\"text-align: center; vertical-align: middle;\" rowspan=\"5\">\n            <img [src]=\"searched.img\">\n          </td>\n          <th>타입</th>\n          <td>{{searched.type}}</td>\n        </tr>\n        <tr>\n          <th>제목</th>\n          <td>{{searched.title}}</td>\n        </tr>\n        <tr>\n          <th>방영 분기</th>\n          <td>\n            {{searched.premiered.year}}년 {{searched.premiered.quarter}}분기\n          </td>\n        </tr>\n        <tr>\n          <th>MyAnimeList</th>\n          <td>\n            <a [href]=\"'https://myanimelist.net/anime/' + searched.mal_id\" target=\"_blank\">\n              {{searched.mal_id}}\n            </a>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" style=\"text-align: center;\">\n            <button (click)=\"selectItem(i)\" mat-button>선택</button>\n          </td>\n        </tr>\n      </table>\n    </ng-container>\n    <div *ngIf=\"searches.length == 0\">\n      <p>검색결과가 없거나 에러가 발생하였습니다.</p>\n      <p><a [href]=\"getLink()\" target=\"_blank\">직접 검색해보기</a></p>\n    </div>\n    \n  </div>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button tabindex=\"-1\" (click)=\"onClose()\">닫기</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/studio-dialog/studio-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dialogs/studio-dialog/studio-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data}}</h2>\n<div mat-dialog-content>\n  <ul *ngIf=\"tvas.length > 0 || movies.length > 0\">\n    <li *ngIf=\"tvas.length > 0\">TVA ({{tvas.length}})\n      <ul>\n        <li *ngFor=\"let item of tvas; index as i\">\n          <hr *ngIf=\"yearChanged(i)\">\n          <a [routerLink]=\"getLink('tva', item)\" target=\"_blank\">\n            {{item.title[item.title.rv]}} <span style=\"font-size: 80%;\">({{getFormattedDate(item.date)}})</span>\n          </a>\n        </li>\n      </ul>\n    </li>\n    <br *ngIf=\"movies.length > 0\">\n    <li *ngIf=\"movies.length > 0\">극장판 ({{movies.length}})\n      <ul>\n        <li *ngFor=\"let item of movies\">\n          <a [routerLink]=\"getLink('movie', item)\" target=\"_blank\">\n            {{item.title[item.title.rv]}} <span style=\"font-size: 80%;\">({{getFormattedDate(item.date)}})</span>\n          </a>\n        </li>\n      </ul>\n    </li>\n  </ul>\n  <p *ngIf=\"tvas.length == 0 && movies.length == 0\">시청 항목이 존재하지 않습니다.</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button tabindex=\"-1\" (click)=\"onClose()\">닫기</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<div mat-dialog-content>\n  <p>{{data.explain}}</p>\n  <mat-form-field style=\"width: 100%;\">\n    <input matInput [(ngModel)]=\"data.text\" [placeholder]=\"data.placeholder\" #_self (click)=\"_self.select()\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button tabindex=\"-1\" (click)=\"onClose()\">닫기</button>\n  <button mat-button tabindex=\"-1\" [mat-dialog-close]=\"data.text\" cdkFocusInitial>확인</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"rwCarousel\" class=\"carousel slide mdl-shadow--2dp\" data-ride=\"carousel\">\n\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#rwCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#rwCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#rwCarousel\" data-slide-to=\"2\"></li>\n    <li data-target=\"#rwCarousel\" data-slide-to=\"3\"></li>\n  </ol>\n\n  <div class=\"carousel-inner\">\n    <div [class]=\"'carousel-item active bg-svg-' + backgrounds[0]\">\n      <div class=\"container\">\n        <div class=\"carousel-caption text-left\">\n          <h3>{{carousel[0]?.type}}</h3>\n          <h4>{{carousel[0]?.title}}</h4>\n          <p>{{carousel[0]?.content}}</p>\n          <p><a mat-flat-button [routerLink]=\"carousel[0]?.link\" role=\"button\" class=\"carousel-button\">보기</a></p>\n        </div>\n      </div>\n    </div>\n\n    <div [class]=\"'carousel-item bg-svg-' + backgrounds[1]\">\n      <div class=\"container\">\n        <div class=\"carousel-caption\">\n          <h3>{{carousel[1]?.type}}</h3>\n          <h4>{{carousel[1]?.title}}</h4>\n          <p>{{carousel[1]?.content}}</p>\n          <p><a mat-flat-button [routerLink]=\"carousel[1]?.link\" role=\"button\" class=\"carousel-button\">보기</a></p>\n        </div>\n      </div>\n    </div>\n\n    <div [class]=\"'carousel-item bg-svg-' + backgrounds[2]\">\n      <div class=\"container\">\n        <div class=\"carousel-caption text-right\">\n          <h3>{{carousel[2]?.type}}</h3>\n          <h4>{{carousel[2]?.title}}</h4>\n          <p>{{carousel[2]?.content}}</p>\n          <p><a mat-flat-button [routerLink]=\"carousel[2]?.link\" role=\"button\" class=\"carousel-button\">보기</a></p>\n        </div>\n      </div>\n    </div>\n\n    <div [class]=\"'carousel-item bg-svg-' + backgrounds[3]\">\n      <div class=\"container\">\n        <div class=\"carousel-caption\">\n          <h3>{{carousel[3]?.type}}</h3>\n          <h4>{{carousel[3]?.title}}</h4>\n          <p>{{carousel[3]?.content}}</p>\n          <p><a mat-flat-button [routerLink]=\"carousel[3]?.link\" role=\"button\" class=\"carousel-button\">보기</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <a class=\"carousel-control-prev\" href=\"#rwCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#rwCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<section></section>\n\n<section class=\"container\">\n  <table class=\"table table-dark\">\n    <tr>\n      <th>TVA</th>\n      <td>{{allItems?.tvas.length}}개</td>\n    </tr>\n    <tr>\n      <th>극장판</th>\n      <td>{{allItems?.movies.length}}개</td>\n    </tr>\n    <tr>\n      <th>시청 중</th>\n      <td>{{allItems?.watchings.length}}개</td>\n    </tr>\n    <tr>\n      <th>시청 예정</th>\n      <td>{{allItems?.plans.length}}개</td>\n    </tr>\n  </table>\n</section>\n\n<section class=\"container\">\n  <table class=\"table table-secondary\">\n    <tr>\n      <td>\n        <div style=\"margin: auto; width: 60%; color: black;\">\n          <mat-form-field appearance=\"outline\" style=\"width: 80%;\">\n            <mat-label>검색</mat-label>\n            <input matInput placeholder=\"검색어를 입력해주세요.\" (keyup.enter)=\"search(text.value)\" #text>\n          </mat-form-field>\n          <button mat-flat-button type=\"button\" (click)=\"search(text.value)\">\n            <mat-icon>search</mat-icon>\n          </button>\n        </div>\n      </td>\n    </tr>\n  </table>\n\n  <div *ngIf=\"searchedText\">\n    <p><b>{{searchedText}}</b> 검색결과 : {{searchedItems.tvas.length + searchedItems.movies.length + searchedItems.watchings.length + searchedItems.plans.length}}건</p>\n\n    <table class=\"table table-dark\">\n      <caption>TVA ({{searchedItems.tvas.length}}건)</caption>\n      <thead>\n        <tr>\n          <th>시리즈</th>\n          <th>제목</th>\n          <th>시즌</th>\n          <th colspan=\"120\">제작사</th>\n          <th>화수</th>\n          <th>방영분기</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let tva of searchedItems.tvas | slice: pageEvents.tva.pageIndex * pageEvents.tva.pageSize : (pageEvents.tva.pageIndex + 1) * pageEvents.tva.pageSize; index as t\">\n          <tr>\n            <td><span *ngIf=\"tva.seriesTitle != tva.title[tva.title.rv]\">{{tva.seriesTitle}}</span></td>\n            <td>\n              <a [routerLink]=\"['/tva', tva._id, tva.series, tva.sequence]\" class=\"searched-link\">{{tva.title[tva.title.rv]}}</a>\n            </td>\n            <td>{{tva.season}}</td>\n            <td *ngFor=\"let studio of tva.studios\" [attr.colspan]=\"120 / tva.studios.length\">\n              <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n            </td>\n            <td>{{tva.episodes}}</td>\n            <td>'{{tva.premiered.year.toString().substring(2)}} - {{tva.premiered.quarter}}</td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n\n    <mat-paginator *ngIf=\"searchedItems.tvas.length > pageSizeOptions[0]\"\n      [length]=\"searchedItems.tvas.length\"\n      [pageSize]=\"pageSize\"\n      [pageSizeOptions]=\"pageSizeOptions\"\n      (page)=\"pageEvents.tva = $event\"></mat-paginator><br><br>\n\n    <table class=\"table table-dark\">\n      <caption>극장판 ({{searchedItems.movies.length}}건)</caption>\n      <thead>\n        <tr>\n          <th>시리즈</th>\n          <th>제목</th>\n          <th>순서</th>\n          <th colspan=\"120\">제작사</th>\n          <th>개봉일</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let movie of searchedItems.movies | slice: pageEvents.movie.pageIndex * pageEvents.movie.pageSize : (pageEvents.movie.pageIndex + 1) * pageEvents.movie.pageSize; index as m\">\n          <tr>\n            <td><span *ngIf=\"movie.seriesTitle != movie.title[movie.title.rv]\">{{movie.seriesTitle}}</span></td>\n            <td>\n              <a [routerLink]=\"['/movie', movie._id, movie.series, movie.sequence]\" class=\"searched-link\">{{movie.title[movie.title.rv]}}</a>\n            </td>\n            <td>{{movie.order}}</td>\n            <td *ngFor=\"let studio of movie.studios\" [attr.colspan]=\"120 / movie.studios.length\">\n              <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n            </td>\n            <td>{{movie.aired}}</td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n\n    <mat-paginator *ngIf=\"searchedItems.movies.length > pageSizeOptions[0]\"\n      [length]=\"searchedItems.movies.length\"\n      [pageSize]=\"pageSize\"\n      [pageSizeOptions]=\"pageSizeOptions\"\n      (page)=\"pageEvents.movie = $event\"></mat-paginator><br><br>\n\n    <table class=\"table table-dark\">\n      <caption>시청 중인 목록 ({{searchedItems.watchings.length}}건)</caption>\n      <thead>\n        <tr>\n          <th>타입</th>\n          <th>방영중</th>\n          <th>제목</th>\n          <th colspan=\"120\">제작사</th>\n          <th>방영분기</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let item of searchedItems.watchings | slice: pageEvents.watching.pageIndex * pageEvents.watching.pageSize : (pageEvents.watching.pageIndex + 1) * pageEvents.watching.pageSize; index as i\">\n          <tr>\n            <td *ngIf=\"item.type == 'tva'\">TVA</td>\n            <td *ngIf=\"item.type == 'movie'\">극장판</td>\n            <td *ngIf=\"item.ohli_id\">O</td>\n            <td *ngIf=\"!item.ohli_id\">X</td>\n            <td>\n              <a [routerLink]=\"['/watching', item._id]\" class=\"searched-link\">{{item.title[item.title.rv]}}</a>\n            </td>\n            <td *ngFor=\"let studio of item.studios\" [attr.colspan]=\"120 / item.studios.length\">\n              <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n            </td>\n            <td>'{{item.premiered.year.toString().substring(2)}} - {{item.premiered.quarter}}</td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n\n    <mat-paginator *ngIf=\"searchedItems.watchings.length > pageSizeOptions[0]\"\n      [length]=\"searchedItems.watchings.length\"\n      [pageSize]=\"pageSize\"\n      [pageSizeOptions]=\"pageSizeOptions\"\n      (page)=\"pageEvents.watching = $event\"></mat-paginator><br><br>\n\n    <table class=\"table table-dark\">\n      <caption>시청 예정 목록 ({{searchedItems.plans.length}}건)</caption>\n      <thead>\n        <tr>\n          <th>타입</th>\n          <th>제목</th>\n          <th colspan=\"120\">제작사</th>\n          <th>방영분기</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let item of searchedItems.plans | slice: pageEvents.plan.pageIndex * pageEvents.plan.pageSize : (pageEvents.plan.pageIndex + 1) * pageEvents.plan.pageSize; index as i\">\n          <tr>\n            <td *ngIf=\"item.type == 'tva'\">TVA</td>\n            <td *ngIf=\"item.type == 'movie'\">극장판</td>\n            <td>\n              <a [routerLink]=\"['/plan', item._id]\" class=\"searched-link\">{{item.title[item.title.rv]}}</a>\n            </td>\n            <td colspan=\"120\" *ngIf=\"item.studios.length == 0\">-</td>\n            <ng-container *ngIf=\"item.studios.length > 0\">\n              <td *ngFor=\"let studio of item.studios\" [attr.colspan]=\"120 / item.studios.length\">\n                <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n              </td>\n            </ng-container>\n            <td>{{getQuarterFromAiredDate(item.aired)}}</td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n\n    <mat-paginator *ngIf=\"searchedItems.plans.length > pageSizeOptions[0]\"\n      [length]=\"searchedItems.plans.length\"\n      [pageSize]=\"pageSize\"\n      [pageSizeOptions]=\"pageSizeOptions\"\n      (page)=\"pageEvents.plan = $event\"></mat-paginator><br><br>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/movie/movie.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/movie/movie.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"border border-secondary info-area\">\n    <h4>극장판</h4>\n    <p>카테고리 수: {{movies?.length}}</p>\n    <p>극장판 수: {{count()}}</p>\n    <p>\n      <button mat-flat-button (click)=\"openAll()\">전체 열기</button>&nbsp;\n      <button mat-flat-button (click)=\"closeAll()\">전체 닫기</button>&nbsp;\n      <button mat-flat-button (click)=\"writeMovie(); writingArea.scrollIntoView()\">새 항목 작성</button>\n    </p>\n  </div>\n</section>\n\n<section class=\"container\">\n  <mat-progress-bar *ngIf=\"!movies\" mode=\"indeterminate\"></mat-progress-bar>\n  <table class=\"table table-dark\" *ngIf=\"movies\">\n    <thead>\n      <tr>\n        <th (click)=\"align(0, 0)\">카테고리</th>\n        <th (click)=\"align(0, 1)\">시리즈</th>\n        <th (click)=\"align(0, 2)\">제목</th>\n        <th>순서</th>\n        <th (click)=\"align(0, 3)\" colspan=\"120\">제작사</th>\n        <th (click)=\"align(0, 4)\">개봉일</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let movie of movies; index as m\">\n\n        <ng-container *ngFor=\"let series of movie.series; index as i\">\n          <ng-container *ngFor=\"let sequence of series.sequences; index as j\">\n            <tr [attr.id]=\"movie._id\">\n              <td *ngIf=\"movie.series.length > 1 && i == 0 && j == 0\" [attr.rowspan]=\"allElementsLength(m)\"\n                class=\"table-category\" style=\"vertical-align: middle;\">{{movie.category}}</td>\n              <td *ngIf=\"movie.series.length > 1 && j == 0\" class=\"table-series\"\n                [attr.rowspan]=\"movie.series[i].sequences.length\" style=\"vertical-align: middle;\">{{series.title}}</td>\n              <td *ngIf=\"movie.series.length == 1 && movie.series[0].sequences.length > 1 && j == 0\"\n                [attr.rowspan]=\"movie.series[0].sequences.length\" colspan=\"2\" class=\"table-category\"\n                style=\"vertical-align: middle; text-align: center;\">{{movie.category}}</td>\n              <td *ngIf=\"movie.series.length == 1 && movie.series[0].sequences.length == 1\" colspan=\"2\"></td>\n              <td>\n                <span class=\"clickable\" (click)=\"clickMovie(m, i, j)\">{{sequence.title[sequence.title.rv]}}</span>\n              </td>\n              <td *ngIf=\"movie.series.length == 1 && movie.series[0].sequences.length == 1; else orderTemplate\"></td>\n              <ng-template #orderTemplate>\n                <td>{{sequence.order}}</td>\n              </ng-template>\n              <td *ngFor=\"let studio of sequence.studios\" [attr.colspan]=\"120 / sequence.studios.length\">\n                <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n              </td>\n              <td>{{sequence.aired}}</td>\n            </tr>\n            <tr *ngIf=\"movie.opened && i == movie.series.length-1 && j == series.sequences.length-1\">\n              <td colspan=\"125\" style=\"padding: 0px;\">\n\n                <!-- detail -->\n                <table class=\"table table-dark table-hover\">\n                  <tr>\n                    <td style=\"text-align: center; vertical-align: middle;\"\n                      [attr.rowspan]=\"11 + movie.series[movie.opened.series].sequences[movie.opened.sequence].studios.length\">\n                      <img [src]=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].img\">\n                    </td>\n                    <th>카테고리</th>\n                    <td>\n                      <span class=\"clickable\" (click)=\"editCategory(m)\">{{movie.category}}</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th>TVA</th>\n                    <td>\n                      <mat-progress-bar *ngIf=\"!movie.opened.linked\" mode=\"indeterminate\"></mat-progress-bar>\n                      <a *ngIf=\"movie.opened.linked\" class=\"detail-link\"\n                        [routerLink]=\"['/tva', movie.opened.linked._id, movie.opened.linked.series, 0]\">\n                        {{movie.opened.linked.title}}\n                      </a>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th>시리즈 메모</th>\n                    <td>{{movie.series[movie.opened.series].memo}}</td>\n                  </tr>\n                  <tr><td></td><td></td></tr>\n                  <tr>\n                    <th rowspan=\"3\" style=\"vertical-align: middle;\">제목</th>\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv == 'kor'\">\n                      <b>\n                        {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.kor}}\n                      </b>\n                    </td>\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv != 'kor'\">\n                      {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.kor}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv == 'eng'\">\n                      <b>\n                        {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.eng}}\n                      </b>\n                    </td>\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv != 'eng'\">\n                      {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.eng}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv == 'jpn'\">\n                      <b>\n                        {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.jpn}}\n                      </b>\n                    </td>\n                    <td *ngIf=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].title.rv != 'jpn'\">\n                      {{movie.series[movie.opened.series].sequences[movie.opened.sequence].title.jpn}}\n                    </td>\n                  </tr>\n                  <tr>\n                    <th>개봉일</th>\n                    <td>\n                      {{movie.series[movie.opened.series].sequences[movie.opened.sequence].aired}}\n                    </td>\n                  </tr>\n                  <tr *ngFor=\"let studio of movie.series[movie.opened.series].sequences[movie.opened.sequence].studios; index as s\">\n                    <th *ngIf=\"s == 0\" style=\"vertical-align: middle;\"\n                      [attr.rowspan]=\"movie.series[movie.opened.series].sequences[movie.opened.sequence].studios.length\">제작사</th>\n                    <td>\n                      <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th>메모</th>\n                    <td>{{movie.series[movie.opened.series].sequences[movie.opened.sequence].memo}}</td>\n                  </tr>\n                  <tr>\n                    <th>MyAnimeList</th>\n                    <td>\n                      <a [href]=\"'https://myanimelist.net/anime/' + movie.series[movie.opened.series].sequences[movie.opened.sequence].mal_id\" target=\"_blank\" class=\"detail-link\">\n                        {{movie.series[movie.opened.series].sequences[movie.opened.sequence].mal_id}}\n                      </a>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td colspan=\"2\" style=\"text-align: center;\">\n                      <a mat-button [href]=\"searchService.namuwiki(movie?.opened?.linked?.title)\" target=\"_blank\" [matTooltip]=\"searchService.namuwiki_label()\" class=\"no-hover-link\">\n                        <mat-icon>{{searchService.namuwiki_icon()}}</mat-icon>\n                      </a>\n                      <button mat-button (click)=\"modifyMovie(m, movie.opened.series, movie.opened.sequence)\" matTooltip=\"수정\">\n                        <mat-icon>create</mat-icon>\n                      </button>\n                      <button mat-button (click)=\"removeMovie(m, movie.opened.series, movie.opened.sequence)\" matTooltip=\"삭제\">\n                        <mat-icon>delete</mat-icon>\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n\n              </td>\n            </tr>\n            <tr *ngIf=\"movie.modifying && i == movie.series.length-1 && j == series.sequences.length-1\">\n              <td colspan=\"125\">\n\n                <!-- modifying -->\n                <form (submit)=\"onModifySubmit(m, modifying.series, modifying.sequence)\">\n                  <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\n                    <tr>\n                      <th style=\"width: 30%;\">검색</th>\n                      <td>\n                        <mat-form-field class=\"form-item-select\">\n                          <mat-label>검색옵션</mat-label>\n                          <mat-select #searchOption>\n                            <mat-option value=\"onnada\">Onnada</mat-option>\n                            <mat-option value=\"mal\">MyAnimeList</mat-option>\n                            <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                        <mat-form-field appearance=\"outline\">\n                          <mat-label>검색어를 입력해주세요.</mat-label>\n                          <input matInput #searchBox (keyup.enter)=\"searchMovie(searchOption.value, searchBox.value, m)\">\n                        </mat-form-field>\n                        <button mat-flat-button type=\"button\" (click)=\"searchMovie(searchOption.value, searchBox.value, m)\">\n                          <mat-icon>search</mat-icon>\n                        </button>\n                      </td>\n                    </tr>\n                    <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\n                    <tr>\n                      <th rowspan=\"2\">TVA</th>\n                      <td>\n                        <mat-progress-bar *ngIf=\"!tvas\" mode=\"indeterminate\"></mat-progress-bar>\n                        <mat-form-field *ngIf=\"tvas\" class=\"form-item\">\n                          <mat-label>카테고리</mat-label>\n                          <mat-select [(ngModel)]=\"linked.idx\" name=\"tva_category\">\n                            <mat-option *ngFor=\"let tva of tvas; index as t\" [value]=\"t\">{{tva.category}}</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <mat-form-field *ngIf=\"tvas && linked\" class=\"form-item\">\n                          <mat-label>시리즈</mat-label>\n                          <mat-select [(ngModel)]=\"linked.series\" name=\"tva_series\" class=\"form-item\">\n                            <mat-option *ngFor=\"let series of tvas[linked.idx].series; index as r\" [value]=\"r\">{{series.title}}</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>제목</th>\n                      <td>\n                        <mat-radio-group [(ngModel)]=\"movie.modifying.title.rv\" name=\"rv\">\n                          <table class=\"table table-borderless inner-table\">\n                            <tr>\n                              <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\n                              <td>\n                                <mat-form-field class=\"form-item\">\n                                  <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"movie.modifying.title.kor\" name=\"kor\">\n                                </mat-form-field>\n                              </td>\n                            </tr>\n                            <tr>\n                              <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\n                              <td>\n                                <mat-form-field class=\"form-item\">\n                                  <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"movie.modifying.title.eng\" name=\"eng\">\n                                </mat-form-field>\n                              </td>\n                            </tr>\n                            <tr>\n                              <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\n                              <td>\n                                <mat-form-field class=\"form-item\">\n                                  <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"movie.modifying.title.jpn\" name=\"jpn\">\n                                </mat-form-field>\n                              </td>\n                            </tr>\n                          </table>\n                        </mat-radio-group>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>순서</th>\n                      <td>\n                        <mat-form-field>\n                          <input matInput type=\"number\" [(ngModel)]=\"movie.modifying.order\" name=\"order\" min=\"1\">\n                          <span matSuffix>번째</span>\n                        </mat-form-field>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>방영 시기</th>\n                      <td>\n                        <mat-form-field>\n                          <input matInput placeholder=\"개봉일\" [(ngModel)]=\"movie.modifying.aired\" name=\"aired\">\n                        </mat-form-field>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>제작사</th>\n                      <td>\n                        <mat-form-field class=\"form-item\">\n                          <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"modifying.studios\" name=\"studios\" rows=\"4\"></textarea>\n                          <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\n                        </mat-form-field>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>메모</th>\n                      <td>\n                        <mat-form-field class=\"form-item\">\n                          <textarea matInput placeholder=\"메모\" [(ngModel)]=\"movie.modifying.memo\" name=\"memo\" rows=\"4\"></textarea>\n                        </mat-form-field>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td colspan=\"2\" style=\"text-align: center;\">\n                        <button mat-button type=\"submit\">\n                          <mat-icon>check_circle_outline</mat-icon>\n                        </button>\n                        <button mat-button type=\"button\" (click)=\"cancelModify(m)\">\n                          <mat-icon>cancel</mat-icon>\n                        </button>\n                      </td>\n                    </tr>\n                  </table>\n                </form>\n\n              </td>\n            </tr>\n\n          </ng-container>\n        </ng-container>\n\n      </ng-container>\n    </tbody>\n  </table>\n</section>\n\n<section>\n  <div class=\"container\" id=\"writing-area\" #writingArea>\n    <table *ngIf=\"!writing\" class=\"table table-dark\">\n      <tr>\n        <td>\n          <span class=\"clickable\" (click)=\"writeMovie()\">+ 새로 작성하기</span>\n        </td>\n      </tr>\n    </table>\n    <form (submit)=\"onWriteSubmit()\" *ngIf=\"writing\">\n      <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\n        <tr>\n          <th style=\"width: 30%;\">검색</th>\n          <td>\n            <mat-form-field class=\"form-item-select\">\n              <mat-label>검색옵션</mat-label>\n              <mat-select #writeSearchOption>\n                <mat-option value=\"onnada\">Onnada</mat-option>\n                <mat-option value=\"mal\">MyAnimeList</mat-option>\n                <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\">\n              <mat-label>검색어를 입력해주세요.</mat-label>\n              <input matInput #writeSearchBox (keyup.enter)=\"searchMovie(writeSearchOption.value, writeSearchBox.value)\">\n            </mat-form-field>\n            <button mat-flat-button type=\"button\" (click)=\"searchMovie(writeSearchOption.value, writeSearchBox.value)\">\n              <mat-icon>search</mat-icon>\n            </button>\n          </td>\n        </tr>\n        <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\n        <tr>\n          <th rowspan=\"2\">TVA</th>\n          <td>\n            <mat-progress-bar *ngIf=\"!tvas\" mode=\"indeterminate\"></mat-progress-bar>\n            <mat-form-field *ngIf=\"tvas\" class=\"form-item\">\n              <mat-label>카테고리</mat-label>\n              <mat-select [(ngModel)]=\"linked.idx\" name=\"tva_category\">\n                <mat-option *ngFor=\"let tva of tvas; index as t\" [value]=\"t\">{{tva.category}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field *ngIf=\"tvas && linked\" class=\"form-item\">\n              <mat-label>시리즈</mat-label>\n              <mat-select [(ngModel)]=\"linked.series\" name=\"tva_series\" (selectionChange)=\"seriesSelect()\">\n                <mat-option *ngFor=\"let series of tvas[linked.idx].series; index as r\" [value]=\"r\">{{series.title}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>시리즈 메모</th>\n          <td>\n            <mat-form-field class=\"form-item\">\n              <textarea matInput placeholder=\"시리즈 메모\" [(ngModel)]=\"seriesMemo\" name=\"seriesMemo\" rows=\"4\"></textarea>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>제목</th>\n          <td>\n            <mat-radio-group [(ngModel)]=\"writingMovie.title.rv\" name=\"rv\">\n              <table class=\"table table-borderless\">\n                <tr>\n                  <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"writingMovie.title.kor\" name=\"kor\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"writingMovie.title.eng\" name=\"eng\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"writingMovie.title.jpn\" name=\"jpn\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n              </table>\n            </mat-radio-group>\n          </td>\n        </tr>\n        <tr>\n          <th>순서</th>\n          <td>\n            <mat-form-field>\n              <input matInput type=\"number\" [(ngModel)]=\"writingMovie.order\" name=\"order\" min=\"1\">\n              <span matSuffix>번째</span>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>방영 시기</th>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"개봉일\" [(ngModel)]=\"writingMovie.aired\" name=\"aired\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>제작사</th>\n          <td>\n            <mat-form-field class=\"form-item\">\n              <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"modifying.studios\" name=\"studios\" rows=\"4\"></textarea>\n              <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>메모</th>\n          <td>\n            <mat-form-field class=\"form-item\">\n              <textarea matInput placeholder=\"메모\" [(ngModel)]=\"writingMovie.memo\" name=\"memo\" rows=\"4\"></textarea>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" style=\"text-align: center;\">\n            <button mat-button type=\"submit\">\n              <mat-icon>check_circle_outline</mat-icon>\n            </button>\n            <button mat-button type=\"button\" (click)=\"cancelWrite()\">\n              <mat-icon>cancel</mat-icon>\n            </button>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/no-page/no-page.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/no-page/no-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section></section>\n\n<section class=\"container\">\n  <h3>페이지가 존재하지 않습니다.</h3><br>\n  <a mat-flat-button routerLink=\"/\">홈으로</a>\n</section>\n\n<section class=\"container\"></section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/plan/plan.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/plan/plan.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"border border-secondary info-area\">\n    <h4>시청 예정</h4>\n    <p>항목 수: {{plans?.length}}</p>\n    <p>\n      <button mat-flat-button (click)=\"openAll()\">전체 열기</button>&nbsp;\n      <button mat-flat-button (click)=\"closeAll()\">전체 닫기</button>&nbsp;\n      <button mat-flat-button (click)=\"write(); writingArea.scrollIntoView()\">새 항목 작성</button>\n    </p>\n  </div>\n</section>\n\n<section class=\"container\">\n  <mat-progress-bar *ngIf=\"!plans\" mode=\"indeterminate\"></mat-progress-bar>\n  <table class=\"table table-dark\" *ngIf=\"plans\">\n    <thead>\n      <tr>\n        <th (click)=\"align(0, 0)\">타입</th>\n        <th (click)=\"align(0, 1)\">제목</th>\n        <th (click)=\"align(0, 2)\" colspan=\"120\">제작사</th>\n        <th (click)=\"align(0, 3)\">방영분기</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let item of plans; index as i\">\n\n        <tr [attr.id]=\"item._id\">\n          <td *ngIf=\"item.type == 'tva'\">TVA</td>\n          <td *ngIf=\"item.type == 'movie'\">극장판</td>\n          <td>\n            <span class=\"clickable\" (click)=\"click(item._id)\">{{item.title[item.title.rv]}}</span>\n          </td>\n          <td colspan=\"120\" *ngIf=\"item.studios.length == 0\">-</td>\n          <ng-container *ngIf=\"item.studios.length > 0\">\n            <td *ngFor=\"let studio of item.studios\" [attr.colspan]=\"120 / item.studios.length\">\n              <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n            </td>\n          </ng-container>\n          <td>{{getQuarterFromAiredDate(item.aired)}}</td>\n        </tr>\n        <tr *ngIf=\"item.opened\">\n          <td colspan=\"123\" style=\"padding: 0px;\">\n          \n            <!-- detail -->\n            <table class=\"table table-dark\">\n              <tr>\n                <td [attr.rowspan]=\"8 + item.studios.length\" style=\"text-align: center; vertical-align: middle;\" *ngIf=\"item.img\">\n                  <img [src]=\"item.img\">\n                </td>\n                <td [attr.rowspan]=\"8 + item.studios.length\" style=\"text-align: center; vertical-align: middle;\" *ngIf=\"!item.img\">\n                  <img src=\"assets/no_image.jpg\">\n                </td>\n                <th>타입</th>\n                <td *ngIf=\"item.type == 'tva'\">TVA</td>\n                <td *ngIf=\"item.type == 'movie'\">극장판</td>\n              </tr>\n              <tr>\n                <th rowspan=\"3\" style=\"vertical-align: middle;\">제목</th>\n                <td *ngIf=\"item.title.rv == 'kor'\">\n                  <b>\n                    {{item.title.kor}}\n                  </b>\n                </td>\n                <td *ngIf=\"item.title.rv != 'kor' && item.title.kor\">\n                  {{item.title.kor}}\n                </td>\n                <td *ngIf=\"!item.title.kor\" class=\"no-item\">-</td>\n              </tr>\n              <tr>\n                <td *ngIf=\"item.title.rv == 'eng'\">\n                  <b>\n                    {{item.title.eng}}\n                  </b>\n                </td>\n                <td *ngIf=\"item.title.rv != 'eng' && item.title.eng\">\n                  {{item.title.eng}}\n                </td>\n                <td *ngIf=\"!item.title.eng\" class=\"no-item\">-</td>\n              </tr>\n              <tr>\n                <td *ngIf=\"item.title.rv == 'jpn'\">\n                  <b>\n                    {{item.title.jpn}}\n                  </b>\n                </td>\n                <td *ngIf=\"item.title.rv != 'jpn' && item.title.jpn\">\n                  {{item.title.jpn}}\n                </td>\n                <td *ngIf=\"!item.title.jpn\" class=\"no-item\">-</td>\n              </tr>\n              <tr>\n                <th>방영 시기</th>\n                <td>{{item.aired}}</td>\n              </tr>\n              <tr *ngFor=\"let studio of item.studios; index as j\">\n                <th *ngIf=\"j == 0\" [attr.rowspan]=\"item.studios.length\" style=\"vertical-align: middle;\">제작사</th>\n                <td>\n                  <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n                </td>\n              </tr>\n              <tr>\n                <th>메모</th>\n                <td>{{item.memo}}</td>\n              </tr>\n              <tr>\n                <th>MyAnimeList</th>\n                <td>\n                  <a [href]=\"'https://myanimelist.net/anime/' + item.mal_id\" target=\"_blank\" *ngIf=\"item.mal_id\" class=\"detail-link\">\n                    {{item.mal_id}}\n                  </a>\n                  <span *ngIf=\"!item.mal_id\" class=\"no-item\">-</span>\n                </td>\n              </tr>\n              <tr>\n                <td colspan=\"2\" style=\"text-align: center;\">\n                  <a mat-button [href]=\"searchService.namuwiki(item.title[item.title.rv])\" target=\"_blank\" [matTooltip]=\"searchService.namuwiki_label()\" class=\"no-hover-link\">\n                    <mat-icon>{{searchService.namuwiki_icon()}}</mat-icon>\n                  </a>\n                  <button mat-button (click)=\"modify(item._id)\" matTooltip=\"수정\">\n                    <mat-icon>create</mat-icon>\n                  </button>\n                  <a mat-button [routerLink]=\"['/', planMap.get(item._id).type, 'data-from-plan', item._id]\" class=\"no-hover-link\" matTooltip=\"시청 완료 목록으로\">\n                    <mat-icon>input</mat-icon>\n                  </a>\n                  <a mat-button [routerLink]=\"['/watching/data-from-plan', item._id]\" class=\"no-hover-link\" matTooltip=\"시청 중인 목록으로\">\n                    <mat-icon>add_to_queue</mat-icon>\n                  </a>\n                  <button mat-button (click)=\"remove(item._id, i, true)\" matTooltip=\"삭제\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </td>\n              </tr>\n            </table>\n\n          </td>\n        </tr>\n        <tr *ngIf=\"item.modifying\">\n          <td colspan=\"122\">\n            \n            <!-- modifying -->\n            <form (submit)=\"onModifySubmit(item._id, i, true)\">\n              <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\n                <tr>\n                  <th style=\"width: 30%;\">검색</th>\n                  <td>\n                    <mat-form-field class=\"form-item-select\">\n                      <mat-label>검색옵션</mat-label>\n                      <mat-select #searchOption>\n                        <mat-option value=\"onnada\">Onnada</mat-option>\n                        <mat-option value=\"mal\">MyAnimeList</mat-option>\n                        <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>검색어를 입력해주세요.</mat-label>\n                      <input matInput #searchBox (keyup.enter)=\"search(searchOption.value, searchBox.value, item.modifying)\">\n                    </mat-form-field>\n                    <button mat-flat-button type=\"button\" (click)=\"search(searchOption.value, searchBox.value, item.modifying)\">\n                      <mat-icon>search</mat-icon>\n                    </button>\n                  </td>\n                </tr>\n                <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\n                <tr>\n                  <th>제목</th>\n                  <td>\n                    <mat-radio-group [(ngModel)]=\"item.modifying.title.rv\" name=\"rv\">\n                      <table class=\"table table-borderless inner-table\">\n                        <tr>\n                          <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\n                          <td>\n                            <mat-form-field class=\"form-item\">\n                              <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"item.modifying.title.kor\" name=\"kor\">\n                            </mat-form-field>\n                          </td>\n                        </tr>\n                        <tr>\n                          <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\n                          <td>\n                            <mat-form-field class=\"form-item\">\n                              <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"item.modifying.title.eng\" name=\"eng\">\n                            </mat-form-field>\n                          </td>\n                        </tr>\n                        <tr>\n                          <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\n                          <td>\n                            <mat-form-field class=\"form-item\">\n                              <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"item.modifying.title.jpn\" name=\"jpn\">\n                            </mat-form-field>\n                          </td>\n                        </tr>\n                      </table>\n                    </mat-radio-group>\n                  </td>\n                </tr>\n                <tr>\n                  <th>방영 시기</th>\n                  <td>\n                    <mat-form-field>\n                      <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"item.modifying.aired\" name=\"aired\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th>제작사</th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"studios\" name=\"studios\" rows=\"4\"></textarea>\n                      <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th>메모</th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <textarea matInput placeholder=\"메모\" [(ngModel)]=\"item.modifying.memo\" name=\"memo\" rows=\"4\"></textarea>\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\" style=\"text-align: center;\">\n                    <button mat-button type=\"submit\">\n                      <mat-icon>check_circle_outline</mat-icon>\n                    </button>\n                    <button mat-button type=\"button\" (click)=\"closeEdit(item._id)\">\n                      <mat-icon>cancel</mat-icon>\n                    </button>\n                  </td>\n                </tr>\n              </table>\n            </form>\n\n          </td>\n        </tr>\n\n      </ng-container>\n    </tbody>\n  </table>\n</section>\n\n<section>\n  <div class=\"container\" #writingArea>\n    <table *ngIf=\"!writing\" class=\"table table-dark\">\n      <tr>\n        <td>\n          <span class=\"clickable\" (click)=\"write()\">+ 새로 작성하기</span>\n        </td>\n      </tr>\n    </table>\n    <form (submit)=\"onWriteSubmit()\" *ngIf=\"writing\">\n      <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\n        <tr>\n          <th style=\"width: 30%;\">검색</th>\n          <td>\n            <mat-form-field class=\"form-item-select\">\n              <mat-label>검색옵션</mat-label>\n              <mat-select #searchOption>\n                <mat-option value=\"onnada\">Onnada</mat-option>\n                <mat-option value=\"mal\">MyAnimeList</mat-option>\n                <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\">\n              <mat-label>검색어를 입력해주세요.</mat-label>\n              <input matInput #searchBox (keyup.enter)=\"search(searchOption.value, searchBox.value, writing)\">\n            </mat-form-field>\n            <button mat-flat-button type=\"button\" (click)=\"search(searchOption.value, searchBox.value, writing)\">\n              <mat-icon>search</mat-icon>\n            </button>\n          </td>\n        </tr>\n        <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\n        <tr>\n          <th>타입</th>\n          <td>\n            <mat-form-field>\n              <mat-label>타입</mat-label>\n              <mat-select [(ngModel)]=\"writing.type\" name=\"type\">\n                <mat-option value=\"tva\">TVA</mat-option>\n                <mat-option value=\"movie\">극장판</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>제목</th>\n          <td>\n            <mat-radio-group [(ngModel)]=\"writing.title.rv\" name=\"rv\">\n              <table class=\"table table-borderless\">\n                <tr>\n                  <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"writing.title.kor\" name=\"kor\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"writing.title.eng\" name=\"eng\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"writing.title.jpn\" name=\"jpn\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n              </table>\n            </mat-radio-group>\n          </td>\n        </tr>\n        <tr>\n          <th>방영 시기</th>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"writing.aired\" name=\"aired\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>제작사</th>\n          <td>\n            <mat-form-field class=\"form-item\">\n              <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"studios\" name=\"studios\" rows=\"4\"></textarea>\n              <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>메모</th>\n          <td>\n            <mat-form-field class=\"form-item\">\n              <textarea matInput placeholder=\"메모\" [(ngModel)]=\"writing.memo\" name=\"memo\" rows=\"4\"></textarea>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" style=\"text-align: center;\">\n            <button mat-button type=\"submit\">\n              <mat-icon>check_circle_outline</mat-icon>\n            </button>\n            <button mat-button type=\"button\" (click)=\"closeEdit()\">\n              <mat-icon>cancel</mat-icon>\n            </button>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tva/tva.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tva/tva.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"border border-secondary info-area\">\n    <h4>TVA</h4>\n    <p>카테고리 수: {{tvas?.length}}</p>\n    <!-- <p>TVA 수: {{count()}}</p> -->\n    <p>TVA 수: {{counts.sequences}}</p>\n    <p>에피소드 수: {{counts.episodes}}</p>\n    <p>\n      <button mat-flat-button (click)=\"openAll()\">전체 열기</button>&nbsp;\n      <button mat-flat-button (click)=\"closeAll()\">전체 닫기</button>&nbsp;\n      <button mat-flat-button (click)=\"writeTva(); writingArea.scrollIntoView()\">새 항목 작성</button>\n    </p>\n  </div>\n</section>\n\n<section class=\"container\">\n  <mat-progress-bar *ngIf=\"!tvas\" mode=\"indeterminate\"></mat-progress-bar>\n  <div *ngIf=\"tvas\">\n    <table class=\"table table-dark\">\n      <thead>\n        <tr>\n          <th (click)=\"align(0, 0)\">카테고리</th>\n          <th (click)=\"align(0, 1)\">시리즈</th>\n          <th (click)=\"align(0, 2)\">제목</th>\n          <th>시즌</th>\n          <th (click)=\"align(0, 3)\" colspan=\"120\">제작사</th>\n          <th (click)=\"align(0, 4)\">화수</th>\n          <th (click)=\"align(0, 5)\">방영분기</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let tva of tvas; index as t\">\n\n          <ng-container *ngFor=\"let series of tva.series; index as i\">\n            <ng-container *ngFor=\"let sequence of series.sequences; index as j\">\n              <tr [attr.id]=\"tva._id\">\n                <td *ngIf=\"tva.series.length > 1 && i == 0 && j == 0\" [attr.rowspan]=\"allElementsLength(t)\"\n                  class=\"table-category\" style=\"vertical-align: middle;\">{{tva.category}}</td>\n                <td *ngIf=\"tva.series.length > 1 && j == 0\" class=\"table-series\"\n                  [attr.rowspan]=\"tva.series[i].sequences.length\" style=\"vertical-align: middle;\">{{series.title}}</td>\n                <td *ngIf=\"tva.series.length == 1 && tva.series[0].sequences.length > 1 && j == 0\"\n                  [attr.rowspan]=\"tva.series[0].sequences.length\" colspan=\"2\" class=\"table-category\"\n                  style=\"vertical-align: middle; text-align: center;\">{{tva.category}}</td>\n                <td *ngIf=\"tva.series.length == 1 && tva.series[0].sequences.length == 1\" colspan=\"2\"></td>\n                <td>\n                  <span class=\"clickable\" (click)=\"clickTva(t, i, j)\">{{sequence.title[sequence.title.rv]}}</span>\n                </td>\n                <td *ngIf=\"tva.series.length == 1 && tva.series[0].sequences.length == 1; else seasonTemplate\"></td>\n                <ng-template #seasonTemplate>\n                  <td>{{sequence.season}}</td>\n                </ng-template>\n                <td *ngFor=\"let studio of sequence.studios\" [attr.colspan]=\"120 / sequence.studios.length\">\n                  <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n                </td>\n                <td>{{sequence.episodes}}</td>\n                <td>'{{sequence.premiered.year.toString().substring(2)}} - {{sequence.premiered.quarter}}</td>\n              </tr>\n              <tr *ngIf=\"tva.opened && i == tva.series.length-1 && j == series.sequences.length-1\">\n                <td colspan=\"126\" style=\"padding: 0px;\">\n\n                  <!-- detail -->\n                  <table class=\"table table-dark table-hover\">\n                    <tr>\n                      <td style=\"text-align: center; vertical-align: middle;\"\n                        [attr.rowspan]=\"(tva.category_movie ? 14 : 13) + tva.series[tva.opened.series].sequences[tva.opened.sequence].studios.length\">\n                        <img [src]=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].img\">\n                      </td>\n                      <th>카테고리</th>\n                      <td>\n                        <span class=\"clickable\" (click)=\"editCategory(t)\">{{tva.category}}</span>\n                      </td>\n                    </tr>\n                    <tr *ngIf=\"tva.opened.linked\">\n                      <th>극장판</th>\n                      <td>\n                        <a [routerLink]=\"['/movie', tva.opened.linked._id, tva.opened.linked.series, 0]\" class=\"detail-link\">\n                          {{tva.opened.linked.title}}\n                        </a>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>시리즈</th>\n                      <td>{{tva.series[tva.opened.series].title}}</td>\n                    </tr>\n                    <tr>\n                      <th>시리즈 메모</th>\n                      <td>{{tva.series[tva.opened.series].memo}}</td>\n                    </tr>\n                    <tr><td></td><td></td></tr>\n                    <tr>\n                      <th rowspan=\"3\" style=\"vertical-align: middle;\">제목</th>\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv == 'kor'\">\n                        <b>\n                          {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.kor}}\n                        </b>\n                      </td>\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv != 'kor'\">\n                        {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.kor}}\n                      </td>\n                    </tr>\n                    <tr>\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv == 'eng'\">\n                        <b>\n                          {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.eng}}\n                        </b>\n                      </td>\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv != 'eng'\">\n                        {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.eng}}\n                      </td>\n                    </tr>\n                    <tr>\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv == 'jpn'\">\n                        <b>\n                          {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.jpn}}\n                        </b>\n                      </td>\n                      <td *ngIf=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].title.rv != 'jpn'\">\n                        {{tva.series[tva.opened.series].sequences[tva.opened.sequence].title.jpn}}\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>방영 분기</th>\n                      <td>\n                        {{tva.series[tva.opened.series].sequences[tva.opened.sequence].premiered.year}}년 {{tva.series[tva.opened.series].sequences[tva.opened.sequence].premiered.quarter}}분기\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>방영 시기</th>\n                      <td>\n                        {{tva.series[tva.opened.series].sequences[tva.opened.sequence].aired.start}} ~ {{tva.series[tva.opened.series].sequences[tva.opened.sequence].aired.end}}\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>방영 화수</th>\n                      <td>{{tva.series[tva.opened.series].sequences[tva.opened.sequence].episodes}}화</td>\n                    </tr>\n                    <tr *ngFor=\"let studio of tva.series[tva.opened.series].sequences[tva.opened.sequence].studios; index as s\">\n                      <th *ngIf=\"s == 0\" style=\"vertical-align: middle;\"\n                        [attr.rowspan]=\"tva.series[tva.opened.series].sequences[tva.opened.sequence].studios.length\">제작사</th>\n                      <td>\n                        <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n                      </td>\n                    </tr>\n                    <tr>\n                      <th>메모</th>\n                      <td>{{tva.series[tva.opened.series].sequences[tva.opened.sequence].memo}}</td>\n                    </tr>\n                    <tr>\n                      <th>MyAnimeList</th>\n                      <td>\n                        <a [href]=\"'https://myanimelist.net/anime/' + tva.series[tva.opened.series].sequences[tva.opened.sequence].mal_id\" target=\"_blank\" class=\"detail-link\">\n                          {{tva.series[tva.opened.series].sequences[tva.opened.sequence].mal_id}}\n                        </a>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td colspan=\"2\" style=\"text-align: center;\">\n                        <a mat-button [href]=\"searchService.namuwiki(tva.series[tva.opened.series].title)\" target=\"_blank\" [matTooltip]=\"searchService.namuwiki_label()\" class=\"no-hover-link\">\n                          <mat-icon>{{searchService.namuwiki_icon()}}</mat-icon>\n                        </a>\n                        <button mat-button (click)=\"modifyTva(t, tva.opened.series, tva.opened.sequence)\" matTooltip=\"수정\">\n                          <mat-icon>create</mat-icon>\n                        </button>\n                        <button mat-button (click)=\"removeTva(t, tva.opened.series, tva.opened.sequence)\" matTooltip=\"삭제\">\n                          <mat-icon>delete</mat-icon>\n                        </button>\n                      </td>\n                    </tr>\n                  </table>\n\n                </td>\n              </tr>\n              <tr *ngIf=\"tva.modifying && i == tva.series.length-1 && j == series.sequences.length-1\">\n                <td colspan=\"126\">\n                  \n                  <!-- modifying -->\n                  <form (submit)=\"onModifySubmit(t, modifying.series, modifying.sequence)\">\n                    <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\n                      <tr>\n                        <th style=\"width: 30%;\">검색</th>\n                        <td>\n                          <mat-form-field class=\"form-item-select\">\n                            <mat-label>검색옵션</mat-label>\n                            <mat-select #searchOption>\n                              <mat-option value=\"onnada\">Onnada</mat-option>\n                              <mat-option value=\"mal\">MyAnimeList</mat-option>\n                              <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                          <mat-form-field appearance=\"outline\">\n                            <mat-label>검색어를 입력해주세요.</mat-label>\n                            <input matInput #searchBox (keyup.enter)=\"searchTva(searchOption.value, searchBox.value, t)\">\n                          </mat-form-field>\n                          <button mat-flat-button type=\"button\" (click)=\"searchTva(searchOption.value, searchBox.value, t)\">\n                            <mat-icon>search</mat-icon>\n                          </button>\n                        </td>\n                      </tr>\n                      <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\n                      <tr>\n                        <th>시리즈</th>\n                        <td>\n                          <mat-form-field class=\"form-item\">\n                            <input matInput placeholder=\"시리즈\" [formControl]=\"seriesControl\" [matAutocomplete]=\"auto\" name=\"seriesTitle\">\n                            <mat-autocomplete #auto=\"matAutocomplete\">\n                              <mat-option *ngFor=\"let option of seriesFilteredOptions | async\" [value]=\"option\">{{option}}</mat-option>\n                            </mat-autocomplete>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>제목</th>\n                        <td>\n                          <mat-radio-group [(ngModel)]=\"tva.modifying.title.rv\" name=\"rv\">\n                            <table class=\"table table-borderless inner-table\">\n                              <tr>\n                                <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\n                                <td>\n                                  <mat-form-field class=\"form-item\">\n                                    <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"tva.modifying.title.kor\" name=\"kor\">\n                                  </mat-form-field>\n                                </td>\n                              </tr>\n                              <tr>\n                                <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\n                                <td>\n                                  <mat-form-field class=\"form-item\">\n                                    <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"tva.modifying.title.eng\" name=\"eng\">\n                                  </mat-form-field>\n                                </td>\n                              </tr>\n                              <tr>\n                                <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\n                                <td>\n                                  <mat-form-field class=\"form-item\">\n                                    <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"tva.modifying.title.jpn\" name=\"jpn\">\n                                  </mat-form-field>\n                                </td>\n                              </tr>\n                            </table>\n                          </mat-radio-group>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>시즌</th>\n                        <td>\n                          <mat-form-field>\n                            <input matInput type=\"number\" [(ngModel)]=\"tva.modifying.season\" name=\"season\" min=\"1\">\n                            <span matSuffix>기</span>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th rowspan=\"2\">방영 분기</th>\n                        <td>\n                          <mat-form-field>\n                            <input matInput placeholder=\"연도\" type=\"number\" [(ngModel)]=\"tva.modifying.premiered.year\" name=\"year\">\n                            <span matSuffix>년</span>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>\n                          <mat-form-field>\n                            <input matInput placeholder=\"분기\" type=\"number\" [(ngModel)]=\"tva.modifying.premiered.quarter\" name=\"quarter\" max=\"4\" min=\"1\">\n                            <span matSuffix>분기</span>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th rowspan=\"2\">방영 시기</th>\n                        <td>\n                          <mat-form-field>\n                            <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"tva.modifying.aired.start\" name=\"aired_start\">\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>\n                          <mat-form-field>\n                            <input matInput placeholder=\"방영 종료일\" [(ngModel)]=\"tva.modifying.aired.end\" name=\"aired_end\">\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>방영 화수</th>\n                        <td>\n                          <mat-form-field>\n                            <input matInput type=\"number\" [(ngModel)]=\"tva.modifying.episodes\" name=\"episodes\" min=\"1\">\n                            <span matSuffix>화</span>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>제작사</th>\n                        <td>\n                          <mat-form-field class=\"form-item\">\n                            <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"modifying.studios\" name=\"studios\" rows=\"4\"></textarea>\n                            <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>메모</th>\n                        <td>\n                          <mat-form-field class=\"form-item\">\n                            <textarea matInput placeholder=\"메모\" [(ngModel)]=\"tva.modifying.memo\" name=\"memo\" rows=\"4\"></textarea>\n                          </mat-form-field>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td colspan=\"2\" style=\"text-align: center;\">\n                          <button mat-button type=\"submit\">\n                            <mat-icon>check_circle_outline</mat-icon>\n                          </button>\n                          <button mat-button type=\"button\" (click)=\"cancelModify(t)\">\n                            <mat-icon>cancel</mat-icon>\n                          </button>\n                        </td>\n                      </tr>\n                    </table>\n                  </form>\n\n                </td>\n              </tr>\n            </ng-container>\n          </ng-container>\n\n        </ng-container>\n      </tbody>\n    </table>\n  </div>\n\n</section>\n\n<section>\n  <div class=\"container\" id=\"writing-area\" #writingArea>\n    <table *ngIf=\"!writing\" class=\"table table-dark\">\n      <tr>\n        <td>\n          <span class=\"clickable\" (click)=\"writeTva()\">+ 새로 작성하기</span>\n        </td>\n      </tr>\n    </table>\n    <form (submit)=\"onWriteSubmit()\" *ngIf=\"writing\">\n      <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\n        <tr>\n          <th style=\"width: 30%;\">검색</th>\n          <td>\n            <mat-form-field class=\"form-item-select\">\n              <mat-label>검색옵션</mat-label>\n              <mat-select #writeSearchOption>\n                <mat-option value=\"onnada\">Onnada</mat-option>\n                <mat-option value=\"mal\">MyAnimeList</mat-option>\n                <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\">\n              <mat-label>검색어를 입력해주세요.</mat-label>\n              <input matInput #writeSearchBox (keyup.enter)=\"searchTva(writeSearchOption.value, writeSearchBox.value)\">\n            </mat-form-field>\n            <button mat-flat-button type=\"button\" (click)=\"searchTva(writeSearchOption.value, writeSearchBox.value)\">\n              <mat-icon>search</mat-icon>\n            </button>\n          </td>\n        </tr>\n        <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\n        <tr>\n          <th>카테고리</th>\n          <td>\n            <mat-form-field class=\"form-item\">\n              <input matInput placeholder=\"카테고리\" [formControl]=\"categoryControl\" [matAutocomplete]=\"autoWriteCategory\" name=\"categoryTitle\">\n              <mat-autocomplete #autoWriteCategory=\"matAutocomplete\" (optionSelected)=\"categoryInput($event)\">\n                <mat-option *ngFor=\"let option of categoryFilteredOptions | async\" [value]=\"option\">{{option}}</mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>시리즈</th>\n          <td>\n            <mat-form-field [formGroup]=\"writeFormGroup\" class=\"form-item\">\n              <input matInput placeholder=\"시리즈\" [matAutocomplete]=\"autoWriteSeries\" formControlName=\"writeSeriesControl\">\n              <mat-autocomplete #autoWriteSeries=\"matAutocomplete\" (optionSelected)=\"seriesInput($event)\">\n                <mat-option *ngFor=\"let option of seriesFilteredOptions | async\" [value]=\"option\">{{option}}</mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>시리즈 메모</th>\n          <td>\n            <mat-form-field class=\"form-item\">\n              <textarea matInput placeholder=\"시리즈 메모\" [(ngModel)]=\"seriesMemo\" name=\"seriesMemo\" rows=\"4\"></textarea>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>제목</th>\n          <td>\n            <mat-radio-group [(ngModel)]=\"writingTva.title.rv\" name=\"rv\">\n              <table class=\"table table-borderless\">\n                <tr>\n                  <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"writingTva.title.kor\" name=\"kor\">\n                    </mat-form-field>\n                    <button mat-icon-button (click)=\"toCategory('kor')\" type=\"button\">\n                      <mat-icon>swap_vert</mat-icon>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"writingTva.title.eng\" name=\"eng\">\n                    </mat-form-field>\n                    <button mat-icon-button (click)=\"toCategory('eng')\" type=\"button\">\n                      <mat-icon>swap_vert</mat-icon>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"writingTva.title.jpn\" name=\"jpn\">\n                    </mat-form-field>\n                    <button mat-icon-button (click)=\"toCategory('jpn')\" type=\"button\">\n                      <mat-icon>swap_vert</mat-icon>\n                    </button>\n                  </td>\n                </tr>\n              </table>\n            </mat-radio-group>\n          </td>\n        </tr>\n        <tr>\n          <th>시즌</th>\n          <td>\n            <mat-form-field>\n              <input matInput type=\"number\" [(ngModel)]=\"writingTva.season\" name=\"season\" min=\"1\">\n              <span matSuffix>기</span>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th rowspan=\"2\">방영 분기</th>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"연도\" type=\"number\" [(ngModel)]=\"writingTva.premiered.year\" name=\"year\">\n              <span matSuffix>년</span>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"분기\" type=\"number\" [(ngModel)]=\"writingTva.premiered.quarter\" name=\"quarter\" max=\"4\" min=\"1\">\n              <span matSuffix>분기</span>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th rowspan=\"2\">방영 시기</th>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"writingTva.aired.start\" name=\"aired_start\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"방영 종료일\" [(ngModel)]=\"writingTva.aired.end\" name=\"aired_end\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>방영 화수</th>\n          <td>\n            <mat-form-field>\n              <input matInput type=\"number\" [(ngModel)]=\"writingTva.episodes\" name=\"episodes\" min=\"1\">\n              <span matSuffix>화</span>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>제작사</th>\n          <td>\n            <mat-form-field class=\"form-item\">\n              <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"modifying.studios\" name=\"studios\" rows=\"4\"></textarea>\n              <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>메모</th>\n          <td>\n            <mat-form-field class=\"form-item\">\n              <textarea matInput placeholder=\"메모\" [(ngModel)]=\"writingTva.memo\" name=\"memo\" rows=\"4\"></textarea>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" style=\"text-align: center;\">\n            <button mat-button type=\"submit\">\n              <mat-icon>check_circle_outline</mat-icon>\n            </button>\n            <button mat-button type=\"button\" (click)=\"cancelWrite()\">\n              <mat-icon>cancel</mat-icon>\n            </button>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/watching/watching.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/watching/watching.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"border border-secondary info-area\">\n    <h4>시청 중</h4>\n    <p>방영 중인 항목 수: {{airings?.length}}</p>\n    <p>완결작 수: {{ends?.length}}</p>\n    <p class=\"info-button-area\">\n      <button mat-flat-button (click)=\"openAll()\">전체 열기</button>&nbsp;\n      <button mat-flat-button (click)=\"closeAll()\">전체 닫기</button>&nbsp;\n      <button mat-flat-button (click)=\"write(); writingArea.scrollIntoView()\">새 항목 작성</button>&nbsp;\n      <button mat-flat-button (click)=\"openTodayAiring()\" title=\"오늘이라고 적었긴 한데 그냥 24시간 이내 방영작임\">오늘 방영작 펼치기</button>\n    </p>\n  </div>\n</section>\n\n<section class=\"container\">\n  <mat-progress-bar *ngIf=\"!airings\" mode=\"indeterminate\"></mat-progress-bar>\n  <table class=\"table table-dark\" *ngIf=\"airings\">\n    <caption>방영 중인 목록</caption>\n    <thead>\n      <tr>\n        <th (click)=\"align(0, 0)\">타입</th>\n        <th (click)=\"align(0, 1)\">제목</th>\n        <th (click)=\"align(0, 2)\" colspan=\"120\">제작사</th>\n        <th (click)=\"align(0, 4)\">방영요일</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let item of airings; index as i\">\n\n        <tr [attr.id]=\"item._id\">\n          <td *ngIf=\"item.type == 'tva'\">TVA</td>\n          <td *ngIf=\"item.type == 'movie'\">극장판</td>\n          <td>\n            <span class=\"clickable\" (click)=\"click(item._id)\">{{item.title[item.title.rv]}}</span>\n          </td>\n          <td *ngFor=\"let studio of item.studios\" [attr.colspan]=\"120 / item.studios.length\">\n            <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n          </td>\n          <td>{{getDay(item.broadcast)}}</td>\n        </tr>\n        <tr *ngIf=\"item.opened\">\n          <td colspan=\"123\" style=\"padding: 0px;\">\n          \n            <!-- detail -->\n            <table class=\"table table-dark\">\n              <tr>\n                <td [attr.rowspan]=\"8 + item.studios.length\" style=\"text-align: center; vertical-align: middle;\">\n                  <img [src]=\"item.img\">\n                </td>\n                <th>타입</th>\n                <td *ngIf=\"item.type == 'tva'\">TVA</td>\n                <td *ngIf=\"item.type == 'movie'\">극장판</td>\n              </tr>\n              <tr>\n                <th rowspan=\"3\" style=\"vertical-align: middle;\">제목</th>\n                <td *ngIf=\"item.title.rv == 'kor'\">\n                  <b>\n                    {{item.title.kor}}\n                  </b>\n                </td>\n                <td *ngIf=\"item.title.rv != 'kor'\">\n                  {{item.title.kor}}\n                </td>\n              </tr>\n              <tr>\n                <td *ngIf=\"item.title.rv == 'eng'\">\n                  <b>\n                    {{item.title.eng}}\n                  </b>\n                </td>\n                <td *ngIf=\"item.title.rv != 'eng'\">\n                  {{item.title.eng}}\n                </td>\n              </tr>\n              <tr>\n                <td *ngIf=\"item.title.rv == 'jpn'\">\n                  <b>\n                    {{item.title.jpn}}\n                  </b>\n                </td>\n                <td *ngIf=\"item.title.rv != 'jpn'\">\n                  {{item.title.jpn}}\n                </td>\n              </tr>\n              <tr>\n                <th>방영 분기</th>\n                <td>{{item.premiered.year}}년 {{item.premiered.quarter}}분기</td>\n              </tr>\n              <tr>\n                <th>방영 시기</th>\n                <td>{{item.aired}}</td>\n              </tr>\n              <tr *ngFor=\"let studio of item.studios; index as j\">\n                <th *ngIf=\"j == 0\" [attr.rowspan]=\"item.studios.length\" style=\"vertical-align: middle;\">제작사</th>\n                <td>\n                  <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n                </td>\n              </tr>\n              <tr>\n                <th>메모</th>\n                <td>{{item.memo}}</td>\n              </tr>\n              <tr>\n                <th>MyAnimeList</th>\n                <td>\n                  <a [href]=\"'https://myanimelist.net/anime/' + item.mal_id\" target=\"_blank\" class=\"detail-link\">\n                    {{item.mal_id}}\n                  </a>\n                </td>\n              </tr>\n              <tr><td colspan=\"3\">오늘: {{getToday()}}</td></tr>\n              <tr>\n                <td colspan=\"3\" class=\"inner-table-section\" *ngIf=\"!item.videos || (item.videos && item.videos.length > 0)\">\n\n                  <mat-progress-bar *ngIf=\"!item.videos\" mode=\"indeterminate\"></mat-progress-bar>\n                  <table class=\"table table-dark\" *ngIf=\"item.videos\">\n                    <tr *ngFor=\"let video of item.videos\">\n                      <td>{{getDate(video.date)}}</td>\n                      <td>{{video.name}}</td>\n                      <td>{{getSize(video.size)}}</td>\n                      <td>\n                        <a [href]=\"video.magnet | safeUrl\" class=\"download-link\">▶</a>\n                      </td>\n                    </tr>\n                  </table>\n\n                </td>\n              </tr>\n\n              <tr *ngIf=\"!item.videos || (item.videos && item.videos.length > 0)\"><td colspan=\"3\"></td></tr>\n\n              <tr>\n                <td colspan=\"3\" class=\"inner-table-section\" *ngIf=\"!item.ohys || (item.ohys && item.ohys.length > 0)\">\n\n                  <mat-progress-bar *ngIf=\"!item.ohys\" mode=\"indeterminate\"></mat-progress-bar>\n                  <table class=\"table table-dark\" *ngIf=\"item.ohys\">\n                    <tr *ngFor=\"let ohys of item.ohys\">\n                      <td>{{ohys.name}}</td>\n                      <td>\n                        <a [href]=\"ohys.link\" class=\"download-link\" download>▶</a>\n                      </td>\n                    </tr>\n                  </table>\n\n                </td>\n              </tr>\n\n              <tr *ngIf=\"!item.ohys || (item.ohys && item.ohys.length > 0)\"><td colspan=\"3\"></td></tr>\n\n              <tr>\n                <td colspan=\"3\" class=\"inner-table-section\" *ngIf=\"!item.subtitles || (item.subtitles && item.subtitles.length > 0)\">\n\n                  <mat-progress-bar *ngIf=\"!item.subtitles\" mode=\"indeterminate\"></mat-progress-bar>\n                  <table class=\"table table-dark\" *ngIf=\"item.subtitles\">\n                    <tr *ngFor=\"let subtitle of item.subtitles\">\n                      <td>{{getDate(subtitle.date)}}</td>\n                      <td>제{{subtitle.episode}}화</td>\n                      <td>{{subtitle.by}}</td>\n                      <td><a class=\"download-link\" [href]=\"subtitle.link\" target=\"_blank\">페이지로 이동</a></td>\n                    </tr>\n                  </table>\n\n                </td>\n              </tr>\n              <tr>\n                <td colspan=\"3\" style=\"text-align: center;\">\n                  <a mat-button [href]=\"searchService.namuwiki(item.title[item.title.rv])\" target=\"_blank\" [matTooltip]=\"searchService.namuwiki_label()\" class=\"no-hover-link\">\n                    <mat-icon>{{searchService.namuwiki_icon()}}</mat-icon>\n                  </a>\n                  <button mat-button (click)=\"modify(item._id)\" matTooltip=\"수정\">\n                    <mat-icon>create</mat-icon>\n                  </button>\n                  <a mat-button class=\"no-hover-link\" [routerLink]=\"['/', watchingMap.get(item._id).type, 'data-from-watching', item._id]\" matTooltip=\"시청 완료\">\n                    <mat-icon>input</mat-icon>\n                  </a>\n                  <button mat-button (click)=\"remove(item._id, i, true)\" matTooltip=\"삭제\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </td>\n              </tr>\n            </table>\n\n          </td>\n        </tr>\n        <tr *ngIf=\"item.modifying\">\n          <td colspan=\"122\">\n            \n            <!-- modifying -->\n            <form (submit)=\"onModifySubmit(item._id, i, true)\">\n              <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\n                <tr>\n                  <th style=\"width: 30%;\">검색</th>\n                  <td>\n                    <mat-form-field class=\"form-item-select\">\n                      <mat-label>검색옵션</mat-label>\n                      <mat-select #searchOption>\n                        <mat-option value=\"onnada\">Onnada</mat-option>\n                        <mat-option value=\"mal\">MyAnimeList</mat-option>\n                        <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>검색어를 입력해주세요.</mat-label>\n                      <input matInput #searchBox (keyup.enter)=\"search(searchOption.value, searchBox.value, item.modifying)\">\n                    </mat-form-field>\n                    <button mat-flat-button type=\"button\" (click)=\"search(searchOption.value, searchBox.value, item.modifying)\">\n                      <mat-icon>search</mat-icon>\n                    </button>\n                  </td>\n                </tr>\n                <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\n                <tr>\n                  <th>제목</th>\n                  <td>\n                    <mat-radio-group [(ngModel)]=\"item.modifying.title.rv\" name=\"rv\">\n                      <table class=\"table table-borderless inner-table\">\n                        <tr>\n                          <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\n                          <td>\n                            <mat-form-field class=\"form-item\">\n                              <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"item.modifying.title.kor\" name=\"kor\">\n                            </mat-form-field>\n                          </td>\n                        </tr>\n                        <tr>\n                          <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\n                          <td>\n                            <mat-form-field class=\"form-item\">\n                              <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"item.modifying.title.eng\" name=\"eng\">\n                            </mat-form-field>\n                          </td>\n                        </tr>\n                        <tr>\n                          <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\n                          <td>\n                            <mat-form-field class=\"form-item\">\n                              <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"item.modifying.title.jpn\" name=\"jpn\">\n                            </mat-form-field>\n                          </td>\n                        </tr>\n                      </table>\n                    </mat-radio-group>\n                  </td>\n                </tr>\n                <tr>\n                  <th rowspan=\"2\">방영 분기</th>\n                  <td>\n                    <mat-form-field>\n                      <input matInput placeholder=\"연도\" type=\"number\" [(ngModel)]=\"item.modifying.premiered.year\" name=\"year\">\n                      <span matSuffix>년</span>\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <mat-form-field>\n                      <input matInput placeholder=\"분기\" type=\"number\" [(ngModel)]=\"item.modifying.premiered.quarter\" name=\"quarter\" max=\"4\" min=\"1\">\n                      <span matSuffix>분기</span>\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th>방영 시기</th>\n                  <td>\n                    <mat-form-field>\n                      <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"item.modifying.aired\" name=\"aired\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th>제작사</th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"studios\" name=\"studios\" rows=\"4\"></textarea>\n                      <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th>메모</th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <textarea matInput placeholder=\"메모\" [(ngModel)]=\"item.modifying.memo\" name=\"memo\" rows=\"4\"></textarea>\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\" style=\"text-align: center;\">\n                    <button mat-button type=\"submit\">\n                      <mat-icon>check_circle_outline</mat-icon>\n                    </button>\n                    <button mat-button type=\"button\" (click)=\"closeEdit(item._id)\">\n                      <mat-icon>cancel</mat-icon>\n                    </button>\n                  </td>\n                </tr>\n              </table>\n            </form>\n\n          </td>\n        </tr>\n\n      </ng-container>\n    </tbody>\n  </table>\n</section>\n\n<section class=\"container\">\n  <table class=\"table table-dark\" *ngIf=\"ends\">\n    <caption>완결작 목록</caption>\n    <thead>\n      <tr>\n        <th (click)=\"align(1, 0)\">타입</th>\n        <th (click)=\"align(1, 1)\">제목</th>\n        <th (click)=\"align(1, 2)\" colspan=\"120\">제작사</th>\n        <th (click)=\"align(1, 3)\">방영분기</th>\n      </tr>\n    </thead>\n    <tbody>\n      <ng-container *ngFor=\"let item of ends; index as i\">\n\n        <tr [attr.id]=\"item._id\">\n          <td *ngIf=\"item.type == 'tva'\">TVA</td>\n          <td *ngIf=\"item.type == 'movie'\">극장판</td>\n          <td>\n            <span class=\"clickable\" (click)=\"click(item._id)\">{{item.title[item.title.rv]}}</span>\n          </td>\n          <td *ngFor=\"let studio of item.studios\" [attr.colspan]=\"120 / item.studios.length\">\n            <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n          </td>\n          <td>'{{item.premiered.year.toString().substring(2)}} - {{item.premiered.quarter}}</td>\n        </tr>\n        <tr *ngIf=\"item.opened\">\n          <td colspan=\"123\" style=\"padding: 0px;\">\n          \n            <!-- detail -->\n            <table class=\"table table-dark table-hover\">\n              <tr>\n                <td [attr.rowspan]=\"10 + item.studios.length\" style=\"text-align: center; vertical-align: middle;\">\n                  <img [src]=\"item.img\">\n                </td>\n                <th>타입</th>\n                <td *ngIf=\"item.type == 'tva'\">TVA</td>\n                <td *ngIf=\"item.type == 'movie'\">극장판</td>\n              </tr>\n              <tr>\n                <th rowspan=\"3\" style=\"vertical-align: middle;\">제목</th>\n                <td *ngIf=\"item.title.rv == 'kor'\">\n                  <b>\n                    {{item.title.kor}}\n                  </b>\n                </td>\n                <td *ngIf=\"item.title.rv != 'kor'\">\n                  {{item.title.kor}}\n                </td>\n              </tr>\n              <tr>\n                <td *ngIf=\"item.title.rv == 'eng'\">\n                  <b>\n                    {{item.title.eng}}\n                  </b>\n                </td>\n                <td *ngIf=\"item.title.rv != 'eng'\">\n                  {{item.title.eng}}\n                </td>\n              </tr>\n              <tr>\n                <td *ngIf=\"item.title.rv == 'jpn'\">\n                  <b>\n                    {{item.title.jpn}}\n                  </b>\n                </td>\n                <td *ngIf=\"item.title.rv != 'jpn'\">\n                  {{item.title.jpn}}\n                </td>\n              </tr>\n              <tr>\n                <th>방영 분기</th>\n                <td>{{item.premiered.year}}년 {{item.premiered.quarter}}분기</td>\n              </tr>\n              <tr>\n                <th>방영 시기</th>\n                <td>{{item.aired}}</td>\n              </tr>\n              <tr *ngFor=\"let studio of item.studios; index as j\">\n                <th *ngIf=\"j == 0\" [attr.rowspan]=\"item.studios.length\" style=\"vertical-align: middle;\">제작사</th>\n                <td>\n                  <span class=\"clickable\" (click)=\"findByStudio(studio)\">{{studio}}</span>\n                </td>\n              </tr>\n              <tr>\n                <th>메모</th>\n                <td>{{item.memo}}</td>\n              </tr>\n              <tr>\n                <th>MyAnimeList</th>\n                <td>\n                  <a [href]=\"'https://myanimelist.net/anime/' + item.mal_id\" target=\"_blank\" class=\"detail-link\">\n                    {{item.mal_id}}\n                  </a>\n                </td>\n              </tr>\n              <tr>\n                <td colspan=\"2\" style=\"text-align: center;\">\n                  <a mat-button [href]=\"searchService.namuwiki(item.title[item.title.rv])\" target=\"_blank\" [matTooltip]=\"searchService.namuwiki_label()\" class=\"no-hover-link\">\n                    <mat-icon>{{searchService.namuwiki_icon()}}</mat-icon>\n                  </a>\n                  <button mat-button (click)=\"findVideosAndSubtitles(item)\" matTooltip=\"영상/자막 찾기\">\n                    <mat-icon>find_in_page</mat-icon>\n                  </button>\n                  <button mat-button (click)=\"modify(item._id)\" matTooltip=\"수정\">\n                    <mat-icon>create</mat-icon>\n                  </button>\n                  <a mat-button class=\"no-hover-link\" [routerLink]=\"['/', watchingMap.get(item._id).type, 'data-from-watching', item._id]\" matTooltip=\"시청 완료\">\n                    <mat-icon>input</mat-icon>\n                  </a>\n                  <button mat-button (click)=\"remove(item._id, i, false)\" matTooltip=\"삭제\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n                </td>\n              </tr>\n            </table>\n\n          </td>\n        </tr>\n        <tr *ngIf=\"item.modifying\">\n          <td colspan=\"122\">\n            \n            <!-- modifying -->\n            <form (submit)=\"onModifySubmit(item._id, i, false)\">\n              <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\n                <tr>\n                  <th style=\"width: 30%;\">검색</th>\n                  <td>\n                    <mat-form-field class=\"form-item-select\">\n                      <mat-label>검색옵션</mat-label>\n                      <mat-select #searchOption>\n                        <mat-option value=\"onnada\">Onnada</mat-option>\n                        <mat-option value=\"mal\">MyAnimeList</mat-option>\n                        <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\">\n                      <mat-label>검색어를 입력해주세요.</mat-label>\n                      <input matInput #searchBox (keyup.enter)=\"search(searchOption.value, searchBox.value, item.modifying)\">\n                    </mat-form-field>\n                    <button mat-flat-button type=\"button\" (click)=\"search(searchOption.value, searchBox.value, item.modifying)\">\n                      <mat-icon>search</mat-icon>\n                    </button>\n                  </td>\n                </tr>\n                <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\n                <tr>\n                  <th>타입</th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <mat-label>타입</mat-label>\n                      <mat-select [(ngModel)]=\"item.modifying.type\" name=\"type\">\n                        <mat-option value=\"tva\">TVA</mat-option>\n                        <mat-option value=\"movie\">극장판</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th>제목</th>\n                  <td>\n                    <mat-radio-group [(ngModel)]=\"item.modifying.title.rv\" name=\"rv\">\n                      <table class=\"table table-borderless inner-table\">\n                        <tr>\n                          <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\n                          <td>\n                            <mat-form-field class=\"form-item\">\n                              <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"item.modifying.title.kor\" name=\"kor\">\n                            </mat-form-field>\n                          </td>\n                        </tr>\n                        <tr>\n                          <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\n                          <td>\n                            <mat-form-field class=\"form-item\">\n                              <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"item.modifying.title.eng\" name=\"eng\">\n                            </mat-form-field>\n                          </td>\n                        </tr>\n                        <tr>\n                          <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\n                          <td>\n                            <mat-form-field class=\"form-item\">\n                              <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"item.modifying.title.jpn\" name=\"jpn\">\n                            </mat-form-field>\n                          </td>\n                        </tr>\n                      </table>\n                    </mat-radio-group>\n                  </td>\n                </tr>\n                <tr>\n                  <th rowspan=\"2\">방영 분기</th>\n                  <td>\n                    <mat-form-field>\n                      <input matInput placeholder=\"연도\" type=\"number\" [(ngModel)]=\"item.modifying.premiered.year\" name=\"year\">\n                      <span matSuffix>년</span>\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <mat-form-field>\n                      <input matInput placeholder=\"분기\" type=\"number\" [(ngModel)]=\"item.modifying.premiered.quarter\" name=\"quarter\" max=\"4\" min=\"1\">\n                      <span matSuffix>분기</span>\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th>방영 시기</th>\n                  <td>\n                    <mat-form-field>\n                      <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"item.modifying.aired\" name=\"aired\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th>제작사</th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"studios\" name=\"studios\" rows=\"4\"></textarea>\n                      <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th>메모</th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <textarea matInput placeholder=\"메모\" [(ngModel)]=\"item.modifying.memo\" name=\"memo\" rows=\"4\"></textarea>\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\" style=\"text-align: center;\">\n                    <button mat-button type=\"submit\">\n                      <mat-icon>check_circle_outline</mat-icon>\n                    </button>\n                    <button mat-button type=\"button\" (click)=\"closeEdit(item._id)\">\n                      <mat-icon>cancel</mat-icon>\n                    </button>\n                  </td>\n                </tr>\n              </table>\n            </form>\n\n          </td>\n        </tr>\n\n      </ng-container>\n    </tbody>\n  </table>\n</section>\n\n<section>\n  <div class=\"container\" id=\"writing-area\" #writingArea>\n    <table *ngIf=\"!writing\" class=\"table table-dark\">\n      <tr>\n        <td>\n          <span class=\"clickable\" (click)=\"write()\">+ 새로 작성하기</span>\n        </td>\n      </tr>\n    </table>\n    <form (submit)=\"onWriteSubmit()\" *ngIf=\"writing\">\n      <table class=\"table table-secondary\" style=\"width: 70%; margin: auto;\">\n        <tr>\n          <th style=\"width: 30%;\">검색</th>\n          <td>\n            <mat-form-field class=\"form-item-select\">\n              <mat-label>검색옵션</mat-label>\n              <mat-select #searchOption>\n                <mat-option value=\"onnada\">Onnada</mat-option>\n                <mat-option value=\"mal\">MyAnimeList</mat-option>\n                <mat-option value=\"mal_id\">MyAnimeList ID</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\">\n              <mat-label>검색어를 입력해주세요.</mat-label>\n              <input matInput #searchBox (keyup.enter)=\"search(searchOption.value, searchBox.value, writing)\">\n            </mat-form-field>\n            <button mat-flat-button type=\"button\" (click)=\"search(searchOption.value, searchBox.value, writing)\">\n              <mat-icon>search</mat-icon>\n            </button>\n          </td>\n        </tr>\n        <tr><td colspan=\"2\"><mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar></td></tr>\n        <tr>\n          <th>타입</th>\n          <td>\n            <mat-form-field>\n              <mat-label>타입</mat-label>\n              <mat-select [(ngModel)]=\"writing.type\" name=\"type\">\n                <mat-option value=\"tva\">TVA</mat-option>\n                <mat-option value=\"movie\">극장판</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>제목</th>\n          <td>\n            <mat-radio-group [(ngModel)]=\"writing.title.rv\" name=\"rv\">\n              <table class=\"table table-borderless\">\n                <tr>\n                  <th><mat-radio-button value=\"kor\">KOR</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"한국어 제목\" [(ngModel)]=\"writing.title.kor\" name=\"kor\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th><mat-radio-button value=\"eng\">ENG</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"알파벳 제목\" [(ngModel)]=\"writing.title.eng\" name=\"eng\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n                <tr>\n                  <th><mat-radio-button value=\"jpn\">JPN</mat-radio-button></th>\n                  <td>\n                    <mat-form-field class=\"form-item\">\n                      <input matInput placeholder=\"일어 제목\" [(ngModel)]=\"writing.title.jpn\" name=\"jpn\">\n                    </mat-form-field>\n                  </td>\n                </tr>\n              </table>\n            </mat-radio-group>\n          </td>\n        </tr>\n        <tr>\n          <th>OHLI</th>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"OHLI ID\" type=\"number\" [(ngModel)]=\"writing.ohli_id\" name=\"ohli_id\">\n            </mat-form-field>\n            <button mat-flat-button type=\"button\" (click)=\"findOhliId(writing)\">\n              <mat-icon>search</mat-icon>\n            </button>&nbsp;\n            <button mat-flat-button type=\"button\" (click)=\"removeOhliId(writing)\">\n              <mat-icon>clear</mat-icon>\n            </button>\n          </td>\n        </tr>\n        <tr>\n          <th rowspan=\"2\">방영 분기</th>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"연도\" type=\"number\" [(ngModel)]=\"writing.premiered.year\" name=\"year\">\n              <span matSuffix>년</span>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"분기\" type=\"number\" [(ngModel)]=\"writing.premiered.quarter\" name=\"quarter\" max=\"4\" min=\"1\">\n              <span matSuffix>분기</span>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>방영 시기</th>\n          <td>\n            <mat-form-field>\n              <input matInput placeholder=\"방영 시작일\" [(ngModel)]=\"writing.aired\" name=\"aired\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>제작사</th>\n          <td>\n            <mat-form-field class=\"form-item\">\n              <textarea matInput placeholder=\"제작사\" [(ngModel)]=\"studios\" name=\"studios\" rows=\"4\"></textarea>\n              <mat-hint>여러 개의 경우, 줄을 나눠서 입력해주세요.</mat-hint>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <th>메모</th>\n          <td>\n            <mat-form-field class=\"form-item\">\n              <textarea matInput placeholder=\"메모\" [(ngModel)]=\"writing.memo\" name=\"memo\" rows=\"4\"></textarea>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\" style=\"text-align: center;\">\n            <button mat-button type=\"submit\">\n              <mat-icon>check_circle_outline</mat-icon>\n            </button>\n            <button mat-button type=\"button\" (click)=\"closeEdit()\">\n              <mat-icon>cancel</mat-icon>\n            </button>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </div>\n</section>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tabs:hover {\r\n    text-decoration: none;\r\n    color: rgb(119, 119, 120);\r\n}\r\n\r\nfooter * {\r\n    /* color: rgb(0, 175, 219); */\r\n    /* color: white; */\r\n    color: rgb(235, 235, 235);\r\n}\r\n\r\n#scroll-button {\r\n    background-color: rgb(248, 249, 250);\r\n    position: fixed;\r\n    width: 40px;\r\n    height: 60px;\r\n    right: 5px;\r\n    bottom: 5px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n\r\n#scroll-button td:hover {\r\n    border-radius: 5px;\r\n    background-color: rgb(186, 196, 205);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWJzOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMTE5LCAxMTksIDEyMCk7XHJcbn1cclxuXHJcbmZvb3RlciAqIHtcclxuICAgIC8qIGNvbG9yOiByZ2IoMCwgMTc1LCAyMTkpOyAqL1xyXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcclxufVxyXG5cclxuI3Njcm9sbC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ5LCAyNTApO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNzY3JvbGwtYnV0dG9uIHRkOmhvdmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDE5NiwgMjA1KTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.navLinks = [
            { path: '/tva', label: 'TVA' },
            { path: '/movie', label: '극장판' },
            { path: '/watching', label: '시청 중인 목록' },
            { path: '/plan', label: '시청 예정 목록' }
        ];
    }
    AppComponent.prototype.scrollUp = function () {
        window.scroll(0, 0);
    };
    AppComponent.prototype.scrollDown = function () {
        var footer = document.getElementById('footer');
        footer.scrollIntoView();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var src_app_interceptors_content_type_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/interceptors/content.type.interceptor */ "./src/app/interceptors/content.type.interceptor.ts");
/* harmony import */ var src_app_pipes_safe_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pipes/safe.html */ "./src/app/pipes/safe.html.ts");
/* harmony import */ var src_app_pipes_safe_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pipes/safe.url */ "./src/app/pipes/safe.url.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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






























var appRoutes = [
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dialogs/ended-dialog/ended-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/dialogs/ended-dialog/ended-dialog.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    color: black;\r\n}\r\n\r\na:hover {\r\n    color: black;\r\n}\r\n\r\n.btn-link:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.btn-link:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL2VuZGVkLWRpYWxvZy9lbmRlZC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL2VuZGVkLWRpYWxvZy9lbmRlZC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ0bi1saW5rOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1saW5rOmZvY3VzIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _ohli_dialog_ohli_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ohli-dialog/ohli-dialog.component */ "./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.ts");






var EndedDialogComponent = /** @class */ (function () {
    function EndedDialogComponent(dialogRef, data, watchingService, searchService, dialog) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.watchingService = watchingService;
        this.searchService = searchService;
        this.dialog = dialog;
        this.year = undefined;
        this.videos = undefined;
        this.ohyses = undefined;
        this.subtitles = [];
        var title = this.data.title.eng;
        this.searchService.mal(this.data.mal_id).subscribe(function (malSearched) {
            if (!malSearched.aired.end) {
                alert('종영 연도를 찾을 수 없습니다.\n현재 방영 중인 항목일 수도 있습니다.');
                _this.year = new Date().getFullYear();
                _this.videos = _this.ohyses = [];
            }
            else {
                _this.year = new Date(malSearched.aired.end).getFullYear();
                _this.watchingService.getVideos(title).subscribe(function (videos) { return _this.videos = videos; });
                _this.watchingService.getOhys(title).subscribe(function (ohyses) { return _this.ohyses = ohyses; });
            }
        });
    }
    EndedDialogComponent.prototype.findOhliId = function () {
        var _this = this;
        var data = { title: this.data.title.kor, ohli_id: null, year: this.year };
        var dialogRef = this.dialog.open(_ohli_dialog_ohli_dialog_component__WEBPACK_IMPORTED_MODULE_5__["OhliDialogComponent"], { data: data });
        dialogRef.afterClosed().subscribe(function () {
            if (data.ohli_id) {
                _this.subtitles = undefined;
                _this.watchingService.getSubtitles(data.ohli_id).subscribe(function (subtitles) { return _this.subtitles = subtitles; });
            }
        });
    };
    EndedDialogComponent.prototype.getDate = function (dateString) {
        var today = new Date();
        var given = new Date(dateString);
        if (given.getMonth() == today.getMonth() && given.getDate() == today.getDate())
            return dateString.substring(11);
        else
            return given.getMonth() + 1 + "/" + given.getDate();
    };
    EndedDialogComponent.prototype.getSize = function (size) {
        var dividedSize = Math.round(size / 1024 / 1024);
        if (dividedSize >= 1000)
            return (dividedSize / 1024).toFixed(2) + 'GB';
        else
            return dividedSize + 'MB';
    };
    EndedDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    EndedDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ended-dialog',
            template: __webpack_require__(/*! raw-loader!./ended-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/ended-dialog/ended-dialog.component.html"),
            styles: [__webpack_require__(/*! ./ended-dialog.component.css */ "./src/app/components/dialogs/ended-dialog/ended-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_3__["WatchingService"],
            src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], EndedDialogComponent);
    return EndedDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    max-width: 250px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL29obGktZGlhbG9nL29obGktZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpYWxvZ3Mvb2hsaS1kaWFsb2cvb2hsaS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");




var OhliDialogComponent = /** @class */ (function () {
    function OhliDialogComponent(dialogRef, data, watchingService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.watchingService = watchingService;
        this.loading = true;
        if (this.data.year) {
            this.watchingService.ohli(this.data.title, this.data.year).subscribe(function (ohlis) {
                _this.ohlis = ohlis;
                _this.loading = false;
            });
        }
        else {
            this.watchingService.ohli(this.data.title).subscribe(function (ohlis) {
                _this.ohlis = ohlis;
                _this.loading = false;
            });
        }
    }
    OhliDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    OhliDialogComponent.prototype.selectItem = function (i) {
        this.data.ohli_id = this.ohlis[i].id;
        this.onClose();
    };
    OhliDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ohli-dialog',
            template: __webpack_require__(/*! raw-loader!./ohli-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.html"),
            styles: [__webpack_require__(/*! ./ohli-dialog.component.css */ "./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_3__["WatchingService"]])
    ], OhliDialogComponent);
    return OhliDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/dialogs/search-dialog/search-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/dialogs/search-dialog/search-dialog.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    color: black;\r\n}\r\n\r\na:hover {\r\n    color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL3NlYXJjaC1kaWFsb2cvc2VhcmNoLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpYWxvZ3Mvc2VhcmNoLWRpYWxvZy9zZWFyY2gtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");




var SearchDialogComponent = /** @class */ (function () {
    function SearchDialogComponent(dialogRef, data, searchService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.searchService = searchService;
        this.loading = true;
        this.searchService.search(this.data.search.text, this.data.search.option).subscribe(function (searches) {
            _this.searches = searches;
            _this.loading = false;
        }, function (err) {
            alert('검색 도중 에러가 발생하였습니다.\n' + err.name + '\n' + err.statusText);
        });
    }
    SearchDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    SearchDialogComponent.prototype.selectItem = function (i) {
        var _this = this;
        this.loading = true;
        this.searchService.mal(this.searches[i].mal_id).subscribe(function (malSearched) {
            _this.data.malSearched = malSearched;
            if (_this.searches[i].title_kor)
                _this.data.malSearched.title.kor = _this.searches[i].title_kor;
            _this.loading = false;
            _this.onClose();
        });
    };
    SearchDialogComponent.prototype.getLink = function () {
        if (this.data.search.option == 'onnada')
            return 'http://onnada.com/search/?t=anime&q=' + encodeURI(this.data.search.text);
        else
            'https://myanimelist.net/search/all?q=' + encodeURI(this.data.search.text);
    };
    SearchDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-dialog',
            template: __webpack_require__(/*! raw-loader!./search-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/search-dialog/search-dialog.component.html"),
            styles: [__webpack_require__(/*! ./search-dialog.component.css */ "./src/app/components/dialogs/search-dialog/search-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], SearchDialogComponent);
    return SearchDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/dialogs/studio-dialog/studio-dialog.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWFsb2dzL3N0dWRpby1kaWFsb2cvc3R1ZGlvLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9ncy9zdHVkaW8tZGlhbG9nL3N0dWRpby1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tva.service */ "./src/app/services/tva.service.ts");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");





var StudioDialogComponent = /** @class */ (function () {
    function StudioDialogComponent(dialogRef, data, tvaService, movieService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.tvaService = tvaService;
        this.movieService = movieService;
        this.tvas = [];
        this.movies = [];
        if (!StudioDialogComponent_1.source) {
            StudioDialogComponent_1.source = { tvas: undefined, movies: undefined };
            this.tvaService.getTvas().subscribe(function (tvas) { return _this.itemsToArray(StudioDialogComponent_1.source.tvas = tvas, _this.tvas, true); });
            this.movieService.getMovies().subscribe(function (movies) { return _this.itemsToArray(StudioDialogComponent_1.source.movies = movies, _this.movies); });
        }
        else {
            this.itemsToArray(StudioDialogComponent_1.source.tvas, this.tvas, true);
            this.itemsToArray(StudioDialogComponent_1.source.movies, this.movies);
            this.tvaService.getTvas().subscribe(function (tvas) { return StudioDialogComponent_1.source.tvas = tvas; });
            this.movieService.getMovies().subscribe(function (movies) { return StudioDialogComponent_1.source.movies = movies; });
        }
    }
    StudioDialogComponent_1 = StudioDialogComponent;
    StudioDialogComponent.prototype.itemsToArray = function (items, arr, isTva) {
        var e_1, _a, e_2, _b, e_3, _c;
        try {
            for (var items_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                try {
                    for (var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](item.series.entries()), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var _f = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_e.value, 2), i = _f[0], series = _f[1];
                        try {
                            for (var _g = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](series.sequences.entries()), _h = _g.next(); !_h.done; _h = _g.next()) {
                                var _j = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_h.value, 2), j = _j[0], sequence = _j[1];
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
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        arr.sort(function (a, b) { return new Date(a.date).getTime() - new Date(b.date).getTime(); });
    };
    StudioDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    StudioDialogComponent.prototype.getLink = function (url, item) {
        // if ( item.moreParams ) link += ((arr: any[]): string => { let result = ''; for (let each of arr) result += `/${each}`; return result; })(item.moreParams);
        return "/" + url + "/" + item._id + "/" + item.series + "/" + item.sequence;
    };
    StudioDialogComponent.prototype.getFormattedDate = function (date) {
        var d = new Date(date);
        var f = function (n) { if (n == 0)
            n = 1; return n < 10 ? '0' + n : n.toString(); };
        return "'" + d.getFullYear().toString().substr(2, 2) + "." + f(d.getMonth()) + "." + f(d.getDate());
    };
    StudioDialogComponent.prototype.yearChanged = function (i) {
        if (i == 0)
            return false;
        var before = new Date(this.tvas[i - 1].date);
        var after = new Date(this.tvas[i].date);
        return before.getFullYear() != after.getFullYear();
    };
    var StudioDialogComponent_1;
    StudioDialogComponent.source = undefined;
    StudioDialogComponent = StudioDialogComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studio-dialog',
            template: __webpack_require__(/*! raw-loader!./studio-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/studio-dialog/studio-dialog.component.html"),
            styles: [__webpack_require__(/*! ./studio-dialog.component.css */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], String, src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_3__["TvaService"],
            src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"]])
    ], StudioDialogComponent);
    return StudioDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9ncy90ZXh0LWZpZWxkLWRpYWxvZy90ZXh0LWZpZWxkLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var TextFieldDialogComponent = /** @class */ (function () {
    function TextFieldDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TextFieldDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    TextFieldDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text-field-dialog',
            template: __webpack_require__(/*! raw-loader!./text-field-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.html"),
            styles: [__webpack_require__(/*! ./text-field-dialog.component.css */ "./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], TextFieldDialogComponent);
    return TextFieldDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\r\n    height: 42rem;\r\n}\r\n\r\nli {\r\n    margin: .75rem;\r\n}\r\n\r\n@media (min-width: 40em) {\r\n    .carousel-caption p {\r\n        margin-bottom: 1.25rem;\r\n        font-size: 1.25rem;\r\n        line-height: 1.4;\r\n    }\r\n}\r\n\r\n.carousel-button:hover {\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n.searched-link {\r\n    color: white;\r\n}\r\n\r\n.searched-link:hover {\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogNDJyZW07XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIG1hcmdpbjogLjc1cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xyXG4gICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcm91c2VsLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2hlZC1saW5rIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaGVkLWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

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

var Shapes = /** @class */ (function () {
    function Shapes() {
        this.tvas = [];
        this.movies = [];
        this.watchings = [];
        this.plans = [];
    }
    return Shapes;
}());
var Items = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Items, _super);
    function Items() {
        return _super.call(this) || this;
    }
    return Items;
}(Shapes));

var SearchedItems = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SearchedItems, _super);
    function SearchedItems() {
        return _super.call(this) || this;
    }
    return SearchedItems;
}(Shapes));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tva.service */ "./src/app/services/tva.service.ts");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _home_component_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component.model */ "./src/app/components/home/home.component.model.ts");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");
/* harmony import */ var _dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialogs/studio-dialog/studio-dialog.component */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts");










var HomeComponent = /** @class */ (function () {
    function HomeComponent(tvaService, movieService, watchingService, planService, titleService, dialog) {
        var _this = this;
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
        this.tvaService.getTvas().subscribe(function (tvas) {
            _this.allItems.tvas = tvas;
            var tva = tvas[_this.getRandomNumber(tvas.length)];
            var i = _this.getRandomNumber(tva.series.length);
            var j = _this.getRandomNumber(tva.series[i].sequences.length);
            var sequence = tva.series[i].sequences[j];
            _this.carousel.push({
                type: '[ TVA ]',
                title: sequence.title[sequence.title.rv],
                content: sequence.premiered.year + "\uB144 " + sequence.premiered.quarter + "\uBD84\uAE30 \uBC29\uC601",
                link: "/tva/" + tva._id + "/" + i + "/" + j
            });
        });
        this.movieService.getMovies().subscribe(function (movies) {
            _this.allItems.movies = movies;
            var movie = movies[_this.getRandomNumber(movies.length)];
            var i = _this.getRandomNumber(movie.series.length);
            var j = _this.getRandomNumber(movie.series[i].sequences.length);
            var sequence = movie.series[i].sequences[j];
            var date = new Date(sequence.aired);
            _this.carousel.push({
                type: '[ 극장판 ]',
                title: sequence.title[sequence.title.rv],
                content: date.getFullYear() + "\uB144 " + (date.getMonth() + 1) + "\uC6D4 " + date.getDate() + "\uC77C \uAC1C\uBD09",
                link: "/movie/" + movie._id + "/" + i + "/" + j
            });
        });
        this.watchingService.getWatchings().subscribe(function (watchings) {
            _this.allItems.watchings = watchings;
            var watching = watchings[_this.getRandomNumber(watchings.length)];
            _this.carousel.push({
                type: "[ " + (watching.type == 'tva' ? 'TVA' : '극장판') + " - \uC2DC\uCCAD \uC911 ] ",
                title: watching.title[watching.title.rv],
                content: watching.premiered.year + "\uB144 " + watching.premiered.quarter + "\uBD84\uAE30 \uBC29\uC601",
                link: "/watching/" + watching._id
            });
        });
        this.planService.getPlans().subscribe(function (plans) {
            _this.allItems.plans = plans;
            var plan = plans[_this.getRandomNumber(plans.length)];
            var date = new Date(plan.aired);
            _this.carousel.push({
                type: "[ " + (plan.type == 'tva' ? 'TVA' : '극장판') + " - \uC2DC\uCCAD \uC608\uC815 ] ",
                title: plan.title[plan.title.rv],
                content: (plan.aired != null && plan.aired != '') ? date.getFullYear() + "\uB144 " + Math.floor((date.getMonth() + 4) / 3) + "\uBD84\uAE30 \uBC29\uC601" : '기타 정보 없음',
                link: "/plan/" + plan._id
            });
        });
        var pageEvent = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["PageEvent"]();
        pageEvent.pageIndex = 0;
        pageEvent.pageSize = 10;
        this.pageEvents = {
            tva: pageEvent,
            movie: pageEvent,
            watching: pageEvent,
            plan: pageEvent
        };
    }
    HomeComponent.prototype.getRandomNumber = function (len) {
        return Math.floor(Math.random() * len);
    };
    HomeComponent.prototype.removeSpace = function (text) {
        return text.replace(/\s/gi, '');
    };
    HomeComponent.prototype.matchWithNoSpace = function (big, small) {
        return this.removeSpace(big.toLowerCase()).includes(small);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.backgrounds = [];
        var bgCounts = 10;
        for (var i = 0; i < 4; i++) {
            var idx = this.getRandomNumber(bgCounts);
            var flag = i != 0;
            while (flag) {
                for (var j = 0; j < this.backgrounds.length; j++) {
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
    };
    HomeComponent.prototype.searchCompletion = function (text, what) {
        var _this = this;
        var arr = this.allItems[what];
        arr.some(function (c) {
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g;
            if (_this.matchWithNoSpace(c.category, text)) {
                try {
                    for (var _h = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](c.series.entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var _k = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_j.value, 2), i = _k[0], series = _k[1];
                        try {
                            for (var _l = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](series.sequences.entries()), _m = _l.next(); !_m.done; _m = _l.next()) {
                                var _o = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_m.value, 2), j = _o[0], sequence = _o[1];
                                var searchedSequence = sequence;
                                searchedSequence._id = c._id;
                                searchedSequence.series = i;
                                searchedSequence.sequence = j;
                                searchedSequence.seriesTitle = series.title;
                                _this.searchedItems[what].push(searchedSequence);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_m && !_m.done && (_b = _l.return)) _b.call(_l);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_a = _h.return)) _a.call(_h);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return false;
            }
            try {
                for (var _p = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](c.series.entries()), _q = _p.next(); !_q.done; _q = _p.next()) {
                    var _r = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_q.value, 2), i = _r[0], series = _r[1];
                    if (_this.matchWithNoSpace(series.title, text)) {
                        try {
                            for (var _s = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](series.sequences.entries()), _t = _s.next(); !_t.done; _t = _s.next()) {
                                var _u = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_t.value, 2), j = _u[0], sequence = _u[1];
                                var searchedSequence = sequence;
                                searchedSequence._id = c._id;
                                searchedSequence.series = i;
                                searchedSequence.sequence = j;
                                searchedSequence.seriesTitle = series.title;
                                _this.searchedItems[what].push(searchedSequence);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_t && !_t.done && (_d = _s.return)) _d.call(_s);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        return false;
                    }
                    else {
                        try {
                            for (var _v = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](series.sequences.entries()), _w = _v.next(); !_w.done; _w = _v.next()) {
                                var _x = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_w.value, 2), j = _x[0], sequence = _x[1];
                                try {
                                    for (var _y = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.titleTypes), _z = _y.next(); !_z.done; _z = _y.next()) {
                                        var titleType = _z.value;
                                        if (_this.matchWithNoSpace(sequence.title[titleType], text)) {
                                            var searchedSequence = sequence;
                                            searchedSequence._id = c._id;
                                            searchedSequence.series = i;
                                            searchedSequence.sequence = j;
                                            searchedSequence.seriesTitle = series.title;
                                            _this.searchedItems[what].push(searchedSequence);
                                            return false;
                                        }
                                    }
                                }
                                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                                finally {
                                    try {
                                        if (_z && !_z.done && (_f = _y.return)) _f.call(_y);
                                    }
                                    finally { if (e_6) throw e_6.error; }
                                }
                                try {
                                    for (var _0 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](sequence.studios), _1 = _0.next(); !_1.done; _1 = _0.next()) {
                                        var studio = _1.value;
                                        if (_this.matchWithNoSpace(studio, text)) {
                                            var searchedSequence = sequence;
                                            searchedSequence._id = c._id;
                                            searchedSequence.series = i;
                                            searchedSequence.sequence = j;
                                            searchedSequence.seriesTitle = series.title;
                                            _this.searchedItems[what].push(searchedSequence);
                                            return false;
                                        }
                                    }
                                }
                                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                                finally {
                                    try {
                                        if (_1 && !_1.done && (_g = _0.return)) _g.call(_0);
                                    }
                                    finally { if (e_7) throw e_7.error; }
                                }
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (_w && !_w.done && (_e = _v.return)) _e.call(_v);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_q && !_q.done && (_c = _p.return)) _c.call(_p);
                }
                finally { if (e_3) throw e_3.error; }
            }
        });
    };
    HomeComponent.prototype.searchIncompletion = function (text, what) {
        var _this = this;
        var arr = this.allItems[what];
        arr.some(function (ic) {
            var e_8, _a, e_9, _b;
            try {
                for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.titleTypes), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var titleType = _d.value;
                    if (_this.matchWithNoSpace(ic.title[titleType], text)) {
                        _this.searchedItems[what].push(ic);
                        return false;
                    }
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_8) throw e_8.error; }
            }
            try {
                for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](ic.studios), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var studio = _f.value;
                    if (_this.matchWithNoSpace(studio, text)) {
                        _this.searchedItems[what].push(ic);
                        return false;
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_9) throw e_9.error; }
            }
        });
    };
    HomeComponent.prototype.search = function (text) {
        text = this.removeSpace(text).toLowerCase();
        this.searchedItems = new _home_component_model__WEBPACK_IMPORTED_MODULE_7__["SearchedItems"]();
        this.searchedText = text;
        if (text == '')
            return;
        this.searchCompletion(text, 'tvas');
        this.searchCompletion(text, 'movies');
        this.searchIncompletion(text, 'watchings');
        this.searchIncompletion(text, 'plans');
    };
    HomeComponent.prototype.allElementsLength = function (completion) {
        var count = 0;
        for (var i = 0; i < completion.series.length; i++) {
            count += completion.series[i].sequences.length;
        }
        return count;
    };
    HomeComponent.prototype.getQuarterFromAiredDate = function (aired) {
        if (!aired || aired == '')
            return '-';
        var date = new Date(aired);
        var year = date.getFullYear().toString().substring(2);
        var qtr = Math.floor((date.getMonth() + 4) / 3);
        return "'" + year + " - " + qtr;
    };
    HomeComponent.prototype.findByStudio = function (studio) {
        this.dialog.open(_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_9__["StudioDialogComponent"], { data: studio });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_2__["TvaService"],
            src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
            src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_4__["WatchingService"],
            src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_5__["PlanService"],
            src_app_services_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/movie/movie.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/movie/movie.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tva.service */ "./src/app/services/tva.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_searched__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/searched */ "./src/app/models/searched.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialogs/search-dialog/search-dialog.component */ "./src/app/components/dialogs/search-dialog/search-dialog.component.ts");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/models/headerAlign */ "./src/app/models/headerAlign.ts");
/* harmony import */ var _dialogs_text_field_dialog_text_field_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dialogs/text-field-dialog/text-field-dialog.component */ "./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.ts");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");
/* harmony import */ var _dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dialogs/studio-dialog/studio-dialog.component */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts");

















var MovieComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MovieComponent, _super);
    function MovieComponent(movieService, tvaService, searchService, watchingService, planService, titleService, route, flashMessage, dialog) {
        var _this = _super.call(this, [2], [5]) || this;
        _this.movieService = movieService;
        _this.tvaService = tvaService;
        _this.searchService = searchService;
        _this.watchingService = watchingService;
        _this.planService = planService;
        _this.titleService = titleService;
        _this.route = route;
        _this.flashMessage = flashMessage;
        _this.dialog = dialog;
        _this.movies = null;
        _this.modifying = null;
        _this.loading = false;
        _this.writing = false;
        _this.tvas = null;
        _this.linked = {
            idx: 0,
            series: 0
        };
        _this.from = undefined;
        _this.incompletion_id = undefined;
        _this.titleService.setTitle('극장판');
        _this.movieService.getMovies().subscribe(function (movies) {
            _this.movies = movies;
            _super.prototype.setItems.call(_this, [_this.movies]);
            _this.movieMap = new Map();
            movies.map(function (v) { return _this.movieMap.set(v._id, v); });
            _this.movies.sort(function (a, b) { return a.category.localeCompare(b.category); });
            setTimeout(function () { return _this.scrollToElement(); }, 500);
        });
        return _this;
    }
    MovieComponent.prototype.getAlignment = function (standard) {
        var _this = this;
        switch (standard) {
            case 0: return function (a, b) { return a.category.localeCompare(b.category) * _this.alignments[0][standard]; };
            case 1: return function (a, b) { return a.series[0].title.localeCompare(b.series[0].title) * _this.alignments[0][standard]; };
            case 2: return function (a, b) { return a.series[0].sequences[0].title[a.series[0].sequences[0].title.rv].localeCompare(b.series[0].sequences[0].title[b.series[0].sequences[0].title.rv]) * _this.alignments[0][standard]; };
            case 3: return function (a, b) { return a.series[0].sequences[0].studios[0].localeCompare(b.series[0].sequences[0].studios[0]) * _this.alignments[0][standard]; };
            case 4: return function (a, b) { return (new Date(a.series[0].sequences[0].aired).getTime() - new Date(b.series[0].sequences[0].aired).getTime()) * _this.alignments[0][standard]; };
            default: return;
        }
    };
    MovieComponent.prototype.scrollToElement = function () {
        var _this = this;
        if (this.route.snapshot.paramMap.get('_id')) {
            var _id = this.route.snapshot.paramMap.get('_id');
            this.clickMovieWithId(_id, +this.route.snapshot.paramMap.get('series'), +this.route.snapshot.paramMap.get('sequence'));
            var element = document.getElementById(_id);
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
            (this.from == 'data-from-watching' ? this.watchingService : this.planService).get(this.incompletion_id).subscribe(function (result) {
                if (!result._id) {
                    alert('알 수 없는 에러가 발생하였습니다.\n' + result);
                    return;
                }
                if (result.mal_id)
                    _this.searchMovie('mal_id', result.mal_id.toString());
                else {
                    _this.writingMovie.aired = result.aired;
                    _this.writingMovie.studios = result.studios;
                }
                _this.writingMovie.title = result.title;
                _this.writingMovie.memo = result.memo;
                var element = document.getElementById('writing-area');
                try {
                    element.scrollIntoView();
                }
                catch (e) {
                    alert('알 수 없는 에러가 발생하였습니다.\n' + e);
                }
            });
        }
    };
    MovieComponent.prototype.allElementsLength = function (m) {
        var count = 0;
        for (var i = 0; i < this.movies[m].series.length; i++) {
            count += this.movies[m].series[i].sequences.length;
        }
        return count;
    };
    MovieComponent.prototype.ngOnInit = function () {
    };
    MovieComponent.prototype.clickMovie = function (m, series, sequence) {
        if (this.movies[m].modifying)
            return;
        var opened = { series: series, sequence: sequence, linked: null };
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
    };
    MovieComponent.prototype.clickMovieWithId = function (_id, series, sequence) {
        if (this.movieMap.get(_id).modifying)
            return;
        var opened = { series: series, sequence: sequence, linked: null };
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
    };
    MovieComponent.prototype.setLinkedTva = function (m, tva_id, key) {
        var _this = this;
        if (this.movies[m].opened.linked)
            return;
        this.tvaService.getTva(tva_id).subscribe(function (tva) {
            for (var i = 0; i < tva.series.length; i++) {
                if (tva.series[i].key == key) {
                    _this.movies[m].opened.linked = {
                        title: tva.series[i].title,
                        _id: tva._id,
                        series: i
                    };
                    return;
                }
            }
        });
    };
    MovieComponent.prototype.setLinkedTvaWithId = function (_id, tva_id, key) {
        var _this = this;
        if (this.movieMap.get(_id).opened.linked)
            return;
        this.tvaService.getTva(tva_id).subscribe(function (tva) {
            for (var i = 0; i < tva.series.length; i++) {
                if (tva.series[i].key == key) {
                    _this.movieMap.get(_id).opened.linked = {
                        title: tva.series[i].title,
                        _id: tva._id,
                        series: i
                    };
                    return;
                }
            }
        });
    };
    MovieComponent.prototype.editCategory = function (m) {
        var _this = this;
        var data = {
            title: '카테고리명 수정',
            explain: '수정할 카테고리명을 입력해주세요.',
            placeholder: '카테고리명',
            text: this.movies[m].category
        };
        var dialogRef = this.dialog.open(_dialogs_text_field_dialog_text_field_dialog_component__WEBPACK_IMPORTED_MODULE_14__["TextFieldDialogComponent"], { data: data });
        dialogRef.afterClosed().subscribe(function () {
            if (!data.text || data.text == '')
                return;
            _this.movies[m].category = data.text;
            _this.movieService.modifyMovie(_this.movies[m]).subscribe(function (result) {
                if (!result._id)
                    alert('수정 실패');
            });
        });
    };
    MovieComponent.prototype.setStudio = function (studios) {
        var e_1, _a;
        this.modifying.studios = '';
        try {
            for (var studios_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](studios), studios_1_1 = studios_1.next(); !studios_1_1.done; studios_1_1 = studios_1.next()) {
                var studio = studios_1_1.value;
                this.modifying.studios += studio + '\n';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (studios_1_1 && !studios_1_1.done && (_a = studios_1.return)) _a.call(studios_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MovieComponent.prototype.modifyMovie = function (m, series, sequence) {
        var _this = this;
        var e_2, _a;
        this.movies[m].opened = null;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.movies), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tva = _c.value;
                tva.modifying = null;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.movies[m].modifying = Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["cloneObject"])(this.movies[m].series[series].sequences[sequence]);
        this.modifying = { series: series, sequence: sequence, studios: undefined };
        this.setStudio(this.movies[m].modifying.studios);
        this.tvaService.getTvas().subscribe(function (tvas) {
            _this.tvas = tvas;
            _this.tvas.sort(function (a, b) {
                return a.category.localeCompare(b.category);
            });
            for (var i = 0; i < _this.tvas.length; i++) {
                if (_this.movies[m].category_tva == _this.tvas[i]._id) {
                    for (var j = 0; j < _this.tvas[i].series.length; j++) {
                        if (_this.movies[m].series[series].key == _this.tvas[i].series[j].key) {
                            _this.linked = {
                                idx: i,
                                series: j
                            };
                            return;
                        }
                    }
                }
            }
        });
    };
    MovieComponent.prototype.cancelModify = function (m) {
        this.movies[m].modifying = null;
        this.movies[m].opened = null;
        this.clickMovie(m, this.modifying.series, this.modifying.sequence);
    };
    MovieComponent.prototype.cancelWrite = function () {
        this.cancelEditing();
    };
    MovieComponent.prototype.cancelEditing = function () {
        this.writing = false;
        this.tvas = null;
        this.linked = {
            idx: 0,
            series: 0
        };
    };
    MovieComponent.prototype.onModifySubmit = function (m, series, sequence) {
        var _this = this;
        if (!confirm('저장하시겠습니까?'))
            return;
        // validating input values
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.movies[m].modifying, ['memo']))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["notOK"])();
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.modifying) || !Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.linked))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["notOK"])();
        // change series with input title
        this.movies[m].series[series].sequences.splice(sequence, 1);
        var flag = false;
        outer: for (var i = 0; i < this.movies[m].series.length; i++) {
            if (this.movies[m].series[i].key == this.tvas[this.linked.idx].series[this.linked.series].key) {
                flag = true;
                this.movies[m].modifying.studios = this.modifying.studios.trim().split('\n');
                this.movies[m].series[i].sequences.push(this.movies[m].modifying);
                this.movies[m].series[i].sequences.sort(function (a, b) { return a.order - b.order; });
                series = i;
                for (var j = 0; j < this.movies[m].series[i].sequences.length; j++) {
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
            this.movies[m].series.sort(function (a, b) { return new Date(a.sequences[0].aired).getTime() - new Date(b.sequences[0].aired).getTime(); });
        }
        // remove empty series (which has an empty sequence)
        for (var i = 0; i < this.movies[m].series.length; i++) {
            if (this.movies[m].series[i].sequences.length == 0) {
                this.movies[m].series.splice(i, 1);
                if (series >= i)
                    series--;
                break;
            }
        }
        this.movieService.modifyMovie(this.movies[m]).subscribe(function (result) {
            if (result._id) {
                _this.movies[m].modifying = null;
                _this.clickMovie(m, series, sequence);
                _this.flashMessage.showFlashMessage({
                    messages: ['수정되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
                return false;
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
        });
    };
    MovieComponent.prototype.seriesSelect = function () {
        var e_3, _a, e_4, _b;
        if (!this.tvas[this.linked.idx].category_movie)
            return;
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.movies), _d = _c.next(); !_d.done; _d = _c.next()) {
                var movie = _d.value;
                if (this.tvas[this.linked.idx].category_movie == movie._id) {
                    try {
                        for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](movie.series), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var movieSeries = _f.value;
                            if (this.tvas[this.linked.idx].series[this.linked.series].key == movieSeries.key) {
                                this.seriesMemo = movieSeries.memo;
                                // this.writingMovie.order = movieSeries.sequences.length + 1;
                                return;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        // this.writingMovie.order = 1;
    };
    MovieComponent.prototype.searchedToSequence = function (sequence, malSearched) {
        if (malSearched.title.kor)
            sequence.title.kor = malSearched.title.kor;
        sequence.title.eng = malSearched.title.eng;
        sequence.title.jpn = malSearched.title.jpn;
        sequence.aired = malSearched.aired.start;
        sequence.studios = malSearched.studios;
        sequence.mal_id = malSearched.mal_id;
        sequence.img = malSearched.img;
        this.setStudio(sequence.studios);
    };
    MovieComponent.prototype.searchMovie = function (option, text, m) {
        var _this = this;
        if (!option) {
            alert('옵션을 선택해주세요.');
            return;
        }
        if (!text || text == '') {
            alert('비어있습니다.');
            return;
        }
        var movie = m ? this.movies[m].modifying : this.writingMovie;
        if (option == 'mal_id') {
            var id = parseInt(text);
            if (isNaN(id)) {
                this.flashMessage.showFlashMessage({
                    messages: ['숫자를 입력해야 합니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return;
            }
            this.loading = true;
            this.searchService.mal(id).subscribe(function (result) {
                _this.loading = false;
                if (result.mal_id)
                    _this.searchedToSequence(movie, result);
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['존재하지 않는 ID이거나 오류가 발생했습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
        else {
            var data_1 = Object(src_app_models_searched__WEBPACK_IMPORTED_MODULE_8__["searchedProtocolFactory"])(text, option);
            var dialogRef = this.dialog.open(_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_10__["SearchDialogComponent"], { data: data_1 });
            dialogRef.afterClosed().subscribe(function () {
                if (data_1.malSearched) {
                    _this.searchedToSequence(movie, data_1.malSearched);
                }
            });
        }
    };
    MovieComponent.prototype.writeMovie = function () {
        var _this = this;
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
        this.tvaService.getTvas().subscribe(function (tvas) {
            _this.tvas = tvas;
            _this.tvas.sort(function (a, b) {
                return a.category.localeCompare(b.category);
            });
        });
    };
    MovieComponent.prototype.onWriteSubmit = function () {
        var _this = this;
        // validating input values
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.writingMovie, ['memo']))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["notOK"])();
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.modifying) || !Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["isOK"])(this.linked))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_6__["notOK"])();
        var category = -1;
        var series = -1;
        for (var i = 0; i < this.movies.length; i++) {
            if (this.movies[i].category == this.tvas[this.linked.idx].category) {
                category = i;
                for (var j = 0; j < this.movies[i].series.length; j++) {
                    if (this.movies[i].series[j].key == this.tvas[this.linked.idx].series[this.linked.series].key) {
                        series = j;
                        break;
                    }
                }
                break;
            }
        }
        var newMovie;
        this.writingMovie.studios = this.modifying.studios.trim().split('\n');
        if (category != -1) {
            newMovie = this.movies[category];
            if (series != -1) { // add to an existing series
                newMovie.series[series].sequences.push(this.writingMovie);
                newMovie.series[series].sequences.sort(function (a, b) { return a.order - b.order; });
            }
            else { // add new series
                newMovie.series.push({
                    title: this.tvas[this.linked.idx].series[this.linked.series].title,
                    key: this.tvas[this.linked.idx].series[this.linked.series].key,
                    memo: this.seriesMemo,
                    sequences: [this.writingMovie]
                });
                newMovie.series.sort(function (a, b) {
                    return new Date(a.sequences[0].aired).getTime() - new Date(b.sequences[0].aired).getTime();
                });
            }
            this.movieService.modifyMovie(newMovie).subscribe(function (result) {
                if (result._id) {
                    alert('추가되었습니다.');
                    _this.flashMessage.showFlashMessage({
                        messages: ['추가되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    _this.cancelEditing();
                    _this.movieMap.set(result._id, result);
                    _this.clickMovieWithId(result._id, series, result.series[series].sequences.length - 1);
                    var el = document.getElementById(result._id);
                    try {
                        el.scrollIntoView();
                    }
                    catch (e) { }
                    if (_this.incompletion_id) {
                        (_this.from == 'data-from-watching' ? _this.watchingService : _this.planService).remove(_this.incompletion_id).subscribe(function (err) {
                            if (err)
                                alert('원래의 목록에서 삭제하는 도중 오류가 발생하였습니다.');
                            else
                                _this.incompletion_id = undefined;
                        });
                    }
                }
                else {
                    alert('오류가 발생하였습니다.');
                    _this.flashMessage.showFlashMessage({
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
            this.movieService.addMovie(newMovie).subscribe(function (result) {
                if (result._id) {
                    alert('추가되었습니다.');
                    _this.flashMessage.showFlashMessage({
                        messages: ['추가되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    _this.cancelEditing();
                    _this.movies.push(result);
                    // this.movies.sort((a, b) => { return a.category.localeCompare(b.category) });
                    _this.align();
                    _this.movieMap.set(result._id, result);
                    _this.clickMovieWithId(result._id, 0, 0);
                    setTimeout(function () {
                        try {
                            document.getElementById(result._id).scrollIntoView();
                        }
                        catch (e) { }
                    }, 500);
                    if (_this.incompletion_id) {
                        (_this.from == 'data-from-watching' ? _this.watchingService : _this.planService).remove(_this.incompletion_id).subscribe(function (err) {
                            if (err)
                                alert('원래의 목록에서 삭제하는 도중 오류가 발생하였습니다.');
                            else
                                _this.incompletion_id = undefined;
                        });
                    }
                }
                else {
                    alert('오류가 발생하였습니다.');
                    _this.flashMessage.showFlashMessage({
                        messages: ['오류가 발생하였습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
                return;
            });
        }
    };
    MovieComponent.prototype.removeMovie = function (m, series, sequence) {
        var _this = this;
        if (!confirm('삭제하시겠습니까?'))
            return;
        this.movieService.removeMovie(this.movies[m]._id, series, sequence).subscribe(function (err) {
            if (err) {
                _this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
            else {
                _this.movies.splice(m, 1);
            }
        });
    };
    MovieComponent.prototype.openAll = function () {
        for (var i = 0; i < this.movies.length; i++) {
            this.movies[i].opened = null;
            this.clickMovie(i, 0, 0);
        }
    };
    MovieComponent.prototype.closeAll = function () {
        var e_5, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.movies), _c = _b.next(); !_c.done; _c = _b.next()) {
                var movie = _c.value;
                movie.opened = null;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    MovieComponent.prototype.count = function () {
        var e_6, _a, e_7, _b;
        if (this.movies) {
            var count = 0;
            try {
                for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.movies), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var movie = _d.value;
                    try {
                        for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](movie.series), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var series = _f.value;
                            count += series.sequences.length;
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_6) throw e_6.error; }
            }
            return count;
        }
        return 0;
    };
    MovieComponent.prototype.findByStudio = function (studio) {
        this.dialog.open(_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_16__["StudioDialogComponent"], { data: studio });
    };
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! raw-loader!./movie.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/components/movie/movie.component.css")]
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
    return MovieComponent;
}(src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_13__["HeaderAlign"]));



/***/ }),

/***/ "./src/app/components/no-page/no-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/no-page/no-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uby1wYWdlL25vLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uby1wYWdlL25vLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");



var NoPageComponent = /** @class */ (function () {
    function NoPageComponent(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle('Page Not Found');
    }
    NoPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-no-page',
            template: __webpack_require__(/*! raw-loader!./no-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/no-page/no-page.component.html"),
            styles: [__webpack_require__(/*! ./no-page.component.css */ "./src/app/components/no-page/no-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"]])
    ], NoPageComponent);
    return NoPageComponent;
}());



/***/ }),

/***/ "./src/app/components/plan/plan.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/plan/plan.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-item {\r\n    color: grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGFuL3BsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxhbi9wbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8taXRlbSB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_models_searched__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/searched */ "./src/app/models/searched.ts");
/* harmony import */ var _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialogs/search-dialog/search-dialog.component */ "./src/app/components/dialogs/search-dialog/search-dialog.component.ts");
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/headerAlign */ "./src/app/models/headerAlign.ts");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");
/* harmony import */ var _dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialogs/studio-dialog/studio-dialog.component */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts");













var PlanComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PlanComponent, _super);
    function PlanComponent(planService, route, flashMessage, dialog, searchService, titleService, router) {
        var _this = _super.call(this, [1], [4]) || this;
        _this.planService = planService;
        _this.route = route;
        _this.flashMessage = flashMessage;
        _this.dialog = dialog;
        _this.searchService = searchService;
        _this.titleService = titleService;
        _this.router = router;
        _this.loading = false;
        _this.writing = null;
        _this.studios = null;
        _this.titleService.setTitle('시청 예정');
        _this.planService.getPlans().subscribe(function (plans) {
            var e_1, _a;
            _this.plans = plans;
            _super.prototype.setItems.call(_this, [_this.plans]);
            _this.plans.sort(function (a, b) { return a.title[a.title.rv].localeCompare(b.title[b.title.rv]); });
            _this.planMap = new Map();
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.plans), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var plan = _c.value;
                    _this.planMap.set(plan._id, plan);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            setTimeout(function () { return _this.scrollToElement(); }, 500); // to wait for page loading
        });
        return _this;
    }
    PlanComponent.prototype.scrollToElement = function () {
        if (this.route.snapshot.paramMap.get('_id')) {
            var _id = this.route.snapshot.paramMap.get('_id');
            this.click(_id);
            var element = document.getElementById(_id);
            try {
                element.scrollIntoView();
            }
            catch (e) {
                alert('잘못된 ID값입니다: ' + _id);
            }
        }
    };
    PlanComponent.prototype.getAlignment = function (standard) {
        var _this = this;
        switch (standard) {
            case 0: return function (a, b) { return a.type.localeCompare(b.type) * _this.alignments[0][standard]; };
            case 1: return function (a, b) { return a.title[a.title.rv].localeCompare(b.title[b.title.rv]) * _this.alignments[0][standard]; };
            case 2: return function (a, b) { return (a.studios[0] ? a.studios[0] : '-').localeCompare((b.studios[0] ? b.studios[0] : '-')) * _this.alignments[0][standard]; };
            case 3: return function (a, b) { return (new Date(a.aired ? a.aired : null).getTime() - new Date(b.aired ? b.aired : null).getTime()) * _this.alignments[0][standard]; };
            default: return;
        }
    };
    PlanComponent.prototype.getQuarterFromAiredDate = function (aired) {
        if (!aired || aired == '')
            return '-';
        var date = new Date(aired);
        var year = date.getFullYear().toString().substring(2);
        var qtr = Math.floor((date.getMonth() + 4) / 3);
        return "'" + year + " - " + qtr;
    };
    PlanComponent.prototype.click = function (_id) {
        var plan = this.planMap.get(_id);
        if (!plan)
            return;
        if (plan.modifying)
            return;
        plan.opened = !plan.opened;
    };
    PlanComponent.prototype.ngOnInit = function () {
    };
    PlanComponent.prototype.searchedToItem = function (plan, malSearched) {
        if (malSearched.title.kor)
            plan.title.kor = malSearched.title.kor;
        plan.title.eng = malSearched.title.eng;
        plan.title.jpn = malSearched.title.jpn;
        plan.aired = malSearched.aired.start;
        plan.mal_id = malSearched.mal_id;
        plan.img = malSearched.img;
        plan.type = malSearched.type;
        this.studios = malSearched.studios.join('\n');
    };
    PlanComponent.prototype.search = function (option, text, item) {
        var _this = this;
        if (!option) {
            alert('옵션을 선택해주세요.');
            return;
        }
        if (!text || text == '') {
            alert('비어있습니다.');
            return;
        }
        if (option == 'mal_id') {
            var id = parseInt(text);
            if (isNaN(id)) {
                this.flashMessage.showFlashMessage({
                    messages: ['숫자를 입력해야 합니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return;
            }
            this.loading = true;
            this.searchService.mal(id).subscribe(function (result) {
                _this.loading = false;
                if (result.mal_id)
                    _this.searchedToItem(item, result);
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['존재하지 않는 ID이거나 오류가 발생했습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
        else {
            var data_1 = Object(src_app_models_searched__WEBPACK_IMPORTED_MODULE_7__["searchedProtocolFactory"])(text, option);
            var dialogRef = this.dialog.open(_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_8__["SearchDialogComponent"], { data: data_1 });
            dialogRef.afterClosed().subscribe(function () {
                if (data_1.malSearched) {
                    _this.searchedToItem(item, data_1.malSearched);
                }
            });
        }
    };
    PlanComponent.prototype.closeEdit = function (_id) {
        if (_id)
            this.planMap.get(_id).modifying = null;
        this.writing = null;
        this.studios = '';
    };
    PlanComponent.prototype.closeAllEdit = function () {
        var e_2, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.plans), _c = _b.next(); !_c.done; _c = _b.next()) {
                var plan = _c.value;
                if (plan.modifying)
                    this.closeEdit(plan._id);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.closeEdit();
    };
    PlanComponent.prototype.modify = function (_id) {
        this.closeAllEdit();
        this.planMap.get(_id).opened = false;
        var clone = Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["cloneObject"])(this.planMap.get(_id));
        this.planMap.get(_id).modifying = clone;
        this.studios = this.planMap.get(_id).studios.join('\n');
    };
    PlanComponent.prototype.onModifySubmit = function (_id, i) {
        var _this = this;
        if (!confirm('저장하시겠습니까?'))
            return;
        var plan = this.planMap.get(_id).modifying;
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(plan.title[plan.title.rv]))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])(['대표가 되는 제목은 입력해야 합니다.']);
        plan.studios = this.studios.trim().split('\n');
        this.planService.modifyPlan(plan).subscribe(function (result) {
            if (result._id) {
                _this.planMap.delete(_id);
                _this.planMap.set(_id, plan);
                _this.plans[i] = plan;
                _this.click(_id);
            }
            else {
                alert('오류가 발생하였습니다.');
                _this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    PlanComponent.prototype.write = function () {
        this.closeAllEdit();
        var date = new Date();
        var year = date.getFullYear();
        var qtr = Math.floor((date.getMonth() + 4) / 3);
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
    };
    PlanComponent.prototype.onWriteSubmit = function () {
        var _this = this;
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.writing.title[this.writing.title.rv]))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])(['대표가 되는 제목은 입력해야 합니다.']);
        var trim = this.studios.trim();
        if (trim != '')
            this.writing.studios = trim.split('\n');
        this.planService.addPlan(this.writing).subscribe(function (result) {
            if (result._id) {
                alert('작성되었습니다.');
                _this.planMap.set(result._id, result);
                _this.plans.push(result);
                _this.align();
                _this.writing = null;
            }
            else {
                alert('오류가 발생하였습니다.');
                _this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    PlanComponent.prototype.done = function (_id) {
        this.router.navigate(["/" + this.planMap.get(_id).type + "/data-from-plan", _id]);
    };
    PlanComponent.prototype.remove = function (_id, i) {
        var _this = this;
        if (!confirm('삭제하시겠습니까?'))
            return;
        this.planService.removePlan(_id).subscribe(function (err) {
            if (err) {
                _this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
            else {
                _this.planMap.delete(_id);
                _this.plans.splice(i, 1);
            }
        });
    };
    PlanComponent.prototype.openAll = function () {
        var _this = this;
        this.planMap.forEach(function (value, key) {
            if (!value.opened)
                _this.click(key);
        });
    };
    PlanComponent.prototype.closeAll = function () {
        var _this = this;
        this.planMap.forEach(function (value, key) {
            if (value.opened)
                _this.click(key);
        });
    };
    PlanComponent.prototype.findByStudio = function (studio) {
        this.dialog.open(_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_12__["StudioDialogComponent"], { data: studio });
    };
    PlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan',
            template: __webpack_require__(/*! raw-loader!./plan.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/plan/plan.component.html"),
            styles: [__webpack_require__(/*! ./plan.component.css */ "./src/app/components/plan/plan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_2__["PlanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"],
            src_app_services_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PlanComponent);
    return PlanComponent;
}(src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_10__["HeaderAlign"]));



/***/ }),

/***/ "./src/app/components/tva/tva.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/tva/tva.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHZhL3R2YS5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tva_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tva.service */ "./src/app/services/tva.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialogs/search-dialog/search-dialog.component */ "./src/app/components/dialogs/search-dialog/search-dialog.component.ts");
/* harmony import */ var src_app_models_searched__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/searched */ "./src/app/models/searched.ts");
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/models/headerAlign */ "./src/app/models/headerAlign.ts");
/* harmony import */ var _dialogs_text_field_dialog_text_field_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dialogs/text-field-dialog/text-field-dialog.component */ "./src/app/components/dialogs/text-field-dialog/text-field-dialog.component.ts");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");
/* harmony import */ var _dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dialogs/studio-dialog/studio-dialog.component */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts");



















var TvaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TvaComponent, _super);
    function TvaComponent(tvaService, movieService, watchingService, planService, searchService, titleService, route, flashMessage, dialog) {
        var _this = _super.call(this, [2], [6]) || this;
        _this.tvaService = tvaService;
        _this.movieService = movieService;
        _this.watchingService = watchingService;
        _this.planService = planService;
        _this.searchService = searchService;
        _this.titleService = titleService;
        _this.route = route;
        _this.flashMessage = flashMessage;
        _this.dialog = dialog;
        _this.tvas = null;
        _this.modifying = null;
        _this.loading = false;
        _this.writing = false;
        _this.from = undefined;
        _this.incompletion_id = undefined;
        _this.counts = {
            sequences: 0,
            episodes: 0
        };
        _this.titleService.setTitle('TVA');
        _this.tvaService.getTvas().subscribe(function (tvas) {
            _this.tvas = tvas;
            _super.prototype.setItems.call(_this, [_this.tvas]);
            _this.tvaMap = new Map();
            tvas.map(function (v) { return _this.tvaMap.set(v._id, v); });
            _this.count();
            _this.align();
            setTimeout(function () { return _this.scrollToElement(); }, 500); // to wait for page loading
        });
        return _this;
    }
    TvaComponent.prototype.getAlignment = function (standard) {
        var _this = this;
        switch (standard) {
            case 0: return function (a, b) { return a.category.localeCompare(b.category) * _this.alignments[0][standard]; };
            case 1: return function (a, b) { return a.series[0].title.localeCompare(b.series[0].title) * _this.alignments[0][standard]; };
            case 2: return function (a, b) { return a.series[0].sequences[0].title[a.series[0].sequences[0].title.rv].localeCompare(b.series[0].sequences[0].title[a.series[0].sequences[0].title.rv]) * _this.alignments[0][standard]; };
            case 3: return function (a, b) { return a.series[0].sequences[0].studios[0].localeCompare(b.series[0].sequences[0].studios[0]) * _this.alignments[0][standard]; };
            case 4: return function (a, b) { return (a.series[0].sequences[0].episodes - b.series[0].sequences[0].episodes) * _this.alignments[0][standard]; };
            case 5: return function (a, b) { return (new Date(a.series[0].sequences[0].aired.start).getTime() - new Date(b.series[0].sequences[0].aired.start).getTime()) * _this.alignments[0][standard]; };
            default: return;
        }
    };
    TvaComponent.prototype.scrollToElement = function () {
        var _this = this;
        if (this.route.snapshot.paramMap.get('_id')) {
            var _id = this.route.snapshot.paramMap.get('_id');
            this.clickTvaWithId(_id, +this.route.snapshot.paramMap.get('series'), +this.route.snapshot.paramMap.get('sequence'));
            var element = document.getElementById(_id);
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
            (this.from == 'data-from-watching' ? this.watchingService : this.planService).get(this.incompletion_id).subscribe(function (result) {
                if (!result._id) {
                    alert('알 수 없는 에러가 발생하였습니다.\n' + result);
                    return;
                }
                if (result.mal_id)
                    _this.searchTva('mal_id', result.mal_id.toString());
                else {
                    _this.writingTva.aired.start = result.aired;
                    _this.writingTva.studios = result.studios;
                }
                _this.writingTva.title = result.title;
                _this.writingTva.memo = result.memo;
                var element = document.getElementById('writing-area');
                try {
                    element.scrollIntoView();
                }
                catch (e) {
                    alert('알 수 없는 에러가 발생하였습니다.\n' + e);
                }
            });
        }
    };
    TvaComponent.prototype.allElementsLength = function (t) {
        var count = 0;
        for (var i = 0; i < this.tvas[t].series.length; i++) {
            count += this.tvas[t].series[i].sequences.length;
        }
        return count;
    };
    TvaComponent.prototype.ngOnInit = function () {
    };
    TvaComponent.prototype.clickTva = function (t, series, sequence) {
        if (this.tvas[t].modifying)
            return;
        var opened = { series: series, sequence: sequence, linked: null };
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
    };
    TvaComponent.prototype.clickTvaWithId = function (_id, series, sequence) {
        if (this.tvaMap.get(_id).modifying)
            return;
        var opened = { series: series, sequence: sequence, linked: null };
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
    };
    TvaComponent.prototype.setLinkedTva = function (t, movie_id, key) {
        var _this = this;
        if (!this.tvas[t].category_movie)
            return;
        if (this.tvas[t].opened.linked)
            return;
        this.movieService.getMovie(movie_id).subscribe(function (movie) {
            for (var i = 0; i < movie.series.length; i++) {
                if (movie.series[i].key == key) {
                    _this.tvas[t].opened.linked = {
                        title: movie.series[i].title,
                        _id: movie._id,
                        series: i
                    };
                    return;
                }
            }
            _this.tvas[t].opened.linked = null;
        });
    };
    TvaComponent.prototype.setLinkedTvaWithId = function (_id, movie_id, key) {
        var _this = this;
        if (!this.tvaMap.get(_id).category_movie)
            return;
        if (this.tvaMap.get(_id).opened.linked)
            return;
        this.movieService.getMovie(movie_id).subscribe(function (movie) {
            for (var i = 0; i < movie.series.length; i++) {
                if (movie.series[i].key == key) {
                    _this.tvaMap.get(_id).opened.linked = {
                        title: movie.series[i].title,
                        _id: movie._id,
                        series: i
                    };
                    return;
                }
            }
            _this.tvaMap.get(_id).opened.linked = null;
        });
    };
    TvaComponent.prototype.editCategory = function (t) {
        var _this = this;
        var data = {
            title: '카테고리명 수정',
            explain: '수정할 카테고리명을 입력해주세요.',
            placeholder: '카테고리명',
            text: this.tvas[t].category
        };
        var dialogRef = this.dialog.open(_dialogs_text_field_dialog_text_field_dialog_component__WEBPACK_IMPORTED_MODULE_16__["TextFieldDialogComponent"], { data: data });
        dialogRef.afterClosed().subscribe(function () {
            if (!data.text || data.text == '')
                return;
            _this.tvas[t].category = data.text;
            _this.tvaService.modifyTva(_this.tvas[t]).subscribe(function (result) {
                if (!result._id)
                    alert('수정 실패');
            });
        });
    };
    TvaComponent.prototype.setStudio = function (studios) {
        var e_1, _a;
        this.modifying.studios = '';
        try {
            for (var studios_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](studios), studios_1_1 = studios_1.next(); !studios_1_1.done; studios_1_1 = studios_1.next()) {
                var studio = studios_1_1.value;
                this.modifying.studios += studio + '\n';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (studios_1_1 && !studios_1_1.done && (_a = studios_1.return)) _a.call(studios_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    TvaComponent.prototype.modifyTva = function (t, series, sequence) {
        var _this = this;
        var e_2, _a, e_3, _b;
        this.tvas[t].opened = null;
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.tvas), _d = _c.next(); !_d.done; _d = _c.next()) {
                var tva = _d.value;
                tva.modifying = null;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.tvas[t].modifying = Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["cloneObject"])(this.tvas[t].series[series].sequences[sequence]);
        this.modifying = { series: series, sequence: sequence, studios: undefined, seriesTitle: this.tvas[t].series[series].title };
        this.setStudio(this.tvas[t].modifying.studios);
        this.seriesOptions = [];
        this.seriesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        try {
            for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.tvas[t].series), _f = _e.next(); !_f.done; _f = _e.next()) {
                var s = _f.value;
                this.seriesOptions.push(s.title);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.seriesFilteredOptions = this.seriesControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (value) {
            return _this.seriesOptions.filter(function (option) { return option.toLowerCase().includes(value.toLowerCase()); });
        }));
        this.seriesControl.setValue(this.tvas[t].series[series].title);
    };
    TvaComponent.prototype.cancelModify = function (t) {
        this.tvas[t].modifying = null;
        this.tvas[t].opened = null;
        this.clickTva(t, this.modifying.series, this.modifying.sequence);
    };
    TvaComponent.prototype.cancelWrite = function () {
        this.writing = false;
    };
    TvaComponent.prototype.onModifySubmit = function (t, series, sequence) {
        var _this = this;
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
        var flag = false;
        for (var i = 0; i < this.tvas[t].series.length; i++) {
            if (this.tvas[t].series[i].title == this.modifying.seriesTitle) {
                flag = true;
                this.tvas[t].modifying.studios = this.modifying.studios.trim().split('\n');
                this.tvas[t].series[i].sequences.push(this.tvas[t].modifying);
                this.tvas[t].series[i].sequences.sort(function (a, b) { return a.season - b.season; });
                series = i;
                for (var j = 0; j < this.tvas[t].series[i].sequences.length; j++) {
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
            this.tvas[t].series.sort(function (a, b) { return new Date(a.sequences[0].aired.start).getTime() - new Date(b.sequences[0].aired.start).getTime(); });
        }
        // remove empty series (which has an empty sequence)
        for (var i = 0; i < this.tvas[t].series.length; i++) {
            if (this.tvas[t].series[i].sequences.length == 0) {
                this.tvas[t].series.splice(i, 1);
                if (series >= i)
                    series--;
                break;
            }
        }
        this.tvaService.modifyTva(this.tvas[t]).subscribe(function (result) {
            if (result._id) {
                _this.tvas[t].modifying = null;
                _this.clickTva(t, series, sequence);
                _this.flashMessage.showFlashMessage({
                    messages: ['수정되었습니다.'],
                    type: 'success',
                    timeout: 2000
                });
                return false;
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
        });
    };
    TvaComponent.prototype.searchedToSequence = function (sequence, malSearched) {
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
    };
    TvaComponent.prototype.searchTva = function (option, text, t) {
        var _this = this;
        if (!option) {
            alert('옵션을 선택해주세요.');
            return;
        }
        if (!text || text == '') {
            alert('비어있습니다.');
            return;
        }
        var tva = t ? this.tvas[t].modifying : this.writingTva;
        if (option == 'mal_id') {
            var id = parseInt(text);
            if (isNaN(id)) {
                this.flashMessage.showFlashMessage({
                    messages: ['숫자를 입력해야 합니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return;
            }
            this.loading = true;
            this.searchService.mal(id).subscribe(function (result) {
                _this.loading = false;
                if (result.mal_id)
                    _this.searchedToSequence(tva, result);
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['존재하지 않는 ID이거나 오류가 발생했습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
        else {
            var data_1 = Object(src_app_models_searched__WEBPACK_IMPORTED_MODULE_8__["searchedProtocolFactory"])(text, option);
            var dialogRef = this.dialog.open(_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_7__["SearchDialogComponent"], { data: data_1 });
            dialogRef.afterClosed().subscribe(function () {
                if (data_1.malSearched) {
                    _this.searchedToSequence(tva, data_1.malSearched);
                }
            });
        }
    };
    TvaComponent.prototype.writeTva = function () {
        var _this = this;
        var e_4, _a;
        this.categoryOptions = [];
        this.seriesOptions = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.tvas), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tva = _c.value;
                this.categoryOptions.push(tva.category);
                tva.modifying = null;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.categoryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.categoryFilteredOptions = this.categoryControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (value) {
            return _this.categoryOptions.filter(function (option) { return option.toLowerCase().includes(value.toLowerCase()); });
        }));
        this.writeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
            writeSeriesControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]()
        });
        var date = new Date();
        var year = date.getFullYear();
        var qtr = Math.floor((date.getMonth() + 4) / 3);
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
    };
    TvaComponent.prototype.categoryInput = function (event) {
        var _this = this;
        var e_5, _a, e_6, _b;
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.tvas), _d = _c.next(); !_d.done; _d = _c.next()) {
                var tva = _d.value;
                if (event.option.value == tva.category) {
                    this.seriesOptions = [];
                    try {
                        for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](tva.series), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var series = _f.value;
                            this.seriesOptions.push(series.title);
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                    this.seriesFilteredOptions = this.writeFormGroup.get('writeSeriesControl').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (value) {
                        return _this.seriesOptions.filter(function (option) { return option.toLowerCase()
                            .includes(value.toLowerCase()); });
                    }));
                    return;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    TvaComponent.prototype.seriesInput = function (event) {
        var e_7, _a, e_8, _b;
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.tvas), _d = _c.next(); !_d.done; _d = _c.next()) {
                var tva = _d.value;
                if (event.option.value == tva.category) {
                    try {
                        for (var _e = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](tva.series), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var series = _f.value;
                            if (this.writeFormGroup.get('writeSeriesControl').value == series.title) {
                                this.seriesMemo = series.memo;
                                this.writingTva.season = series.sequences.length + 1;
                                return;
                            }
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    TvaComponent.prototype.onWriteSubmit = function () {
        var _this = this;
        // validating input values
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.writingTva, ['memo']))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])();
        this.modifying.seriesTitle = this.writeFormGroup.get('writeSeriesControl').value;
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.modifying) || !Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.categoryControl.value))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])();
        var category = -1;
        var series = -1;
        for (var i = 0; i < this.tvas.length; i++) {
            if (this.tvas[i].category == this.categoryControl.value) {
                category = i;
                for (var j = 0; j < this.tvas[i].series.length; j++) {
                    if (this.tvas[i].series[j].title == this.writeFormGroup.get('writeSeriesControl').value) {
                        series = j;
                        break;
                    }
                }
                break;
            }
        }
        var newTva;
        this.writingTva.studios = this.modifying.studios.trim().split('\n');
        if (category != -1) {
            newTva = this.tvas[category];
            if (series != -1) { // add to an existing series
                newTva.series[series].sequences.push(this.writingTva);
                newTva.series[series].sequences.sort(function (a, b) { return a.season - b.season; });
            }
            else { // add new series
                newTva.series.push({
                    title: this.writeFormGroup.get('writeSeriesControl').value,
                    key: new Date().getTime().toString(),
                    memo: this.seriesMemo,
                    sequences: [this.writingTva]
                });
                newTva.series.sort(function (a, b) {
                    return new Date(a.sequences[0].aired.start).getTime() - new Date(b.sequences[0].aired.start).getTime();
                });
            }
            this.tvaService.modifyTva(newTva).subscribe(function (result) {
                if (result._id) {
                    alert('추가되었습니다.');
                    _this.flashMessage.showFlashMessage({
                        messages: ['추가되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    _this.tvaMap.set(result._id, result);
                    _this.clickTvaWithId(result._id, series, result.series[series].sequences.length - 1);
                    setTimeout(function () {
                        try {
                            var el = document.getElementById(result._id);
                            el.scrollIntoView();
                        }
                        catch (e) { }
                    }, 500);
                    _this.writing = false;
                    if (_this.incompletion_id) {
                        (_this.from == 'data-from-watching' ? _this.watchingService : _this.planService).remove(_this.incompletion_id).subscribe(function (err) {
                            if (err)
                                alert('원래의 목록에서 삭제하는 도중 오류가 발생하였습니다.');
                            else
                                _this.incompletion_id = undefined;
                        });
                    }
                }
                else {
                    alert('오류가 발생하였습니다.');
                    _this.flashMessage.showFlashMessage({
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
            this.tvaService.addTva(newTva).subscribe(function (result) {
                if (result._id) {
                    alert('추가되었습니다.');
                    _this.flashMessage.showFlashMessage({
                        messages: ['추가되었습니다.'],
                        type: 'success',
                        timeout: 2000
                    });
                    _this.writing = false;
                    _this.tvas.push(result);
                    _this.align();
                    _this.tvaMap.set(result._id, result);
                    _this.clickTvaWithId(result._id, 0, 0);
                    setTimeout(function () {
                        try {
                            document.getElementById(result._id).scrollIntoView();
                        }
                        catch (e) { }
                    }, 500);
                    if (_this.incompletion_id) {
                        (_this.from == 'data-from-watching' ? _this.watchingService : _this.planService).remove(_this.incompletion_id).subscribe(function (err) {
                            if (err)
                                alert('원래의 목록에서 삭제하는 도중 오류가 발생하였습니다.');
                            else
                                _this.incompletion_id = undefined;
                        });
                    }
                }
                else {
                    alert('오류가 발생하였습니다.');
                    _this.flashMessage.showFlashMessage({
                        messages: ['오류가 발생하였습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
                return;
            });
        }
    };
    TvaComponent.prototype.removeTva = function (t, series, sequence) {
        var _this = this;
        if (!confirm('삭제하시겠습니까?'))
            return;
        this.tvaService.removeTva(this.tvas[t]._id, series, sequence).subscribe(function (err) {
            if (err) {
                _this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
            else {
                _this.tvas.splice(t, 1);
            }
        });
    };
    TvaComponent.prototype.openAll = function () {
        for (var i = 0; i < this.tvas.length; i++) {
            this.tvas[i].opened = null;
            this.clickTva(i, 0, 0);
        }
    };
    TvaComponent.prototype.closeAll = function () {
        var e_9, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.tvas), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tva = _c.value;
                tva.opened = null;
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_9) throw e_9.error; }
        }
    };
    TvaComponent.prototype.count = function () {
        var _this = this;
        if (this.tvas) {
            this.tvas.map(function (tva) {
                tva.series.map(function (series) {
                    _this.counts.sequences += series.sequences.length;
                    series.sequences.map(function (sequence) { return _this.counts.episodes += sequence.episodes; });
                });
            });
        }
    };
    TvaComponent.prototype.findByStudio = function (studio) {
        this.dialog.open(_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_18__["StudioDialogComponent"], { data: studio });
    };
    TvaComponent.prototype.toCategory = function (rv) {
        var s = this.writingTva.title[rv];
        this.categoryControl.setValue(s);
        this.writeFormGroup.get('writeSeriesControl').setValue(s);
    };
    TvaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tva',
            template: __webpack_require__(/*! raw-loader!./tva.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tva/tva.component.html"),
            styles: [__webpack_require__(/*! ./tva.component.css */ "./src/app/components/tva/tva.component.css")]
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
    return TvaComponent;
}(src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_15__["HeaderAlign"]));



/***/ }),

/***/ "./src/app/components/watching/watching.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/watching/watching.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".download-link {\r\n    color: white;\r\n}\r\n\r\n.download-link:hover {\r\n    color: grey;\r\n    text-decoration: none;\r\n}\r\n\r\n.inner-table-section {\r\n    padding: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93YXRjaGluZy93YXRjaGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93YXRjaGluZy93YXRjaGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvd25sb2FkLWxpbmsge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZG93bmxvYWQtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmlubmVyLXRhYmxlLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/watching.service */ "./src/app/services/watching.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_models_searched__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/searched */ "./src/app/models/searched.ts");
/* harmony import */ var _dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialogs/search-dialog/search-dialog.component */ "./src/app/components/dialogs/search-dialog/search-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_models_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/item */ "./src/app/models/item.ts");
/* harmony import */ var _dialogs_ohli_dialog_ohli_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialogs/ohli-dialog/ohli-dialog.component */ "./src/app/components/dialogs/ohli-dialog/ohli-dialog.component.ts");
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/plan.service */ "./src/app/services/plan.service.ts");
/* harmony import */ var src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/headerAlign */ "./src/app/models/headerAlign.ts");
/* harmony import */ var src_app_services_title_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/title.service */ "./src/app/services/title.service.ts");
/* harmony import */ var _dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dialogs/studio-dialog/studio-dialog.component */ "./src/app/components/dialogs/studio-dialog/studio-dialog.component.ts");
/* harmony import */ var _dialogs_ended_dialog_ended_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../dialogs/ended-dialog/ended-dialog.component */ "./src/app/components/dialogs/ended-dialog/ended-dialog.component.ts");
















var WatchingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WatchingComponent, _super);
    function WatchingComponent(watchingService, planService, route, flashMessage, dialog, searchService, titleService) {
        var _this = _super.call(this, [4, 1], [5, 4]) || this;
        _this.watchingService = watchingService;
        _this.planService = planService;
        _this.route = route;
        _this.flashMessage = flashMessage;
        _this.dialog = dialog;
        _this.searchService = searchService;
        _this.titleService = titleService;
        _this.airings = null;
        _this.ends = null;
        _this.loading = false;
        _this.writing = null;
        _this.studios = null;
        _this.plan_id = null;
        _this.days = [
            '일', '월', '화', '수', '목', '금', '토'
        ];
        _this.titleService.setTitle('시청 중');
        _this.watchingService.getWatchings().subscribe(function (watchings) {
            var e_1, _a;
            _this.watchingMap = new Map();
            _this.airings = [];
            _this.ends = [];
            try {
                for (var watchings_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](watchings), watchings_1_1 = watchings_1.next(); !watchings_1_1.done; watchings_1_1 = watchings_1.next()) {
                    var watching = watchings_1_1.value;
                    if (watching.ohli_id)
                        _this.airings.push(watching);
                    else
                        _this.ends.push(watching);
                    _this.watchingMap.set(watching._id, watching);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (watchings_1_1 && !watchings_1_1.done && (_a = watchings_1.return)) _a.call(watchings_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.setItems([_this.airings, _this.ends]);
            _this.align(0);
            _this.align(1);
            setTimeout(function () { return _this.scrollToElement(); }, 500); // to wait for page loading
        });
        return _this;
    }
    WatchingComponent.prototype.getAlignment = function (standard, num) {
        var _this = this;
        switch (standard) {
            case 0: return function (a, b) { return a.type.localeCompare(b.type) * _this.alignments[num][standard]; };
            case 1: return function (a, b) { return a.title[a.title.rv].localeCompare(b.title[b.title.rv]) * _this.alignments[num][standard]; };
            case 2: return function (a, b) { return a.studios[0].localeCompare(b.studios[0]) * _this.alignments[num][standard]; };
            case 3: return function (a, b) { return (new Date(a.aired ? a.aired : null).getTime() - new Date(b.aired ? b.aired : null).getTime()) * _this.alignments[num][standard]; };
            case 4: return function (a, b) { return (a.broadcast.day != b.broadcast.day ? a.broadcast.day - b.broadcast.day : (a.broadcast.hour * 100 + a.broadcast.minute) - (b.broadcast.hour * 100 + b.broadcast.minute)) * _this.alignments[num][standard]; };
            default: return null;
        }
    };
    WatchingComponent.prototype.scrollToElement = function () {
        var _this = this;
        if (this.route.snapshot.paramMap.get('_id')) {
            var _id = this.route.snapshot.paramMap.get('_id');
            this.click(_id);
            var element = document.getElementById(_id);
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
            this.planService.getPlan(this.plan_id).subscribe(function (plan) {
                _this.writing.title = plan.title;
                _this.writing.type = plan.type;
                _this.writing.memo = plan.memo;
                if (plan.aired)
                    _this.writing.aired = plan.aired;
                _this.studios = plan.studios.join('\n');
                if (plan.mal_id)
                    _this.search('mal_id', plan.mal_id.toString(), _this.writing);
                try {
                    var el = document.getElementById('writing-area');
                    el.scrollIntoView();
                }
                catch (e) {
                    alert('에러가 발생하였습니다.\n' + e);
                }
            });
        }
    };
    WatchingComponent.prototype.click = function (_id) {
        var watching = this.watchingMap.get(_id);
        if (watching.modifying)
            return;
        if (watching.opened)
            watching.opened = false;
        else {
            watching.opened = true;
            if (watching.ohli_id) {
                this.watchingService.getVideos(watching.title.eng).subscribe(function (videos) { return watching.videos = videos; });
                this.watchingService.getOhys(watching.title.eng).subscribe(function (ohys) { return watching.ohys = ohys; });
                this.watchingService.getSubtitles(watching.ohli_id).subscribe(function (subtitles) { return watching.subtitles = subtitles; });
            }
        }
    };
    WatchingComponent.prototype.ngOnInit = function () {
    };
    WatchingComponent.prototype.searchedToItem = function (watching, malSearched) {
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
    };
    WatchingComponent.prototype.search = function (option, text, item) {
        var _this = this;
        if (!option) {
            alert('옵션을 선택해주세요.');
            return;
        }
        if (!text || text == '') {
            alert('비어있습니다.');
            return;
        }
        if (option == 'mal_id') {
            var id = parseInt(text);
            if (isNaN(id)) {
                this.flashMessage.showFlashMessage({
                    messages: ['숫자를 입력해야 합니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return;
            }
            this.loading = true;
            this.searchService.mal(id).subscribe(function (result) {
                _this.loading = false;
                if (result.mal_id)
                    _this.searchedToItem(item, result);
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['존재하지 않는 ID이거나 오류가 발생했습니다.'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
        else {
            var data_1 = Object(src_app_models_searched__WEBPACK_IMPORTED_MODULE_5__["searchedProtocolFactory"])(text, option);
            var dialogRef = this.dialog.open(_dialogs_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SearchDialogComponent"], { data: data_1 });
            dialogRef.afterClosed().subscribe(function () {
                if (data_1.malSearched) {
                    _this.searchedToItem(item, data_1.malSearched);
                }
            });
        }
    };
    WatchingComponent.prototype.closeEdit = function (_id) {
        if (_id)
            this.watchingMap.get(_id).modifying = null;
        this.writing = null;
        this.studios = '';
    };
    WatchingComponent.prototype.closeAllEdit = function () {
        var e_2, _a, e_3, _b;
        try {
            for (var _c = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"]([this.airings, this.ends]), _d = _c.next(); !_d.done; _d = _c.next()) {
                var arr = _d.value;
                try {
                    for (var arr_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                        var item = arr_1_1.value;
                        if (item.modifying) {
                            this.closeEdit(item._id);
                            return;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (arr_1_1 && !arr_1_1.done && (_b = arr_1.return)) _b.call(arr_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.closeEdit();
    };
    WatchingComponent.prototype.findOhliId = function (watching) {
        if (!watching.title.kor || watching.title.kor == '') {
            alert('한글 제목이 비어있습니다.');
            return;
        }
        var data = { title: watching.title.kor, ohli_id: null };
        var dialogRef = this.dialog.open(_dialogs_ohli_dialog_ohli_dialog_component__WEBPACK_IMPORTED_MODULE_10__["OhliDialogComponent"], { data: data });
        dialogRef.afterClosed().subscribe(function () { return watching.ohli_id = data.ohli_id; });
    };
    WatchingComponent.prototype.removeOhliId = function (watching) {
        watching.ohli_id = null;
    };
    WatchingComponent.prototype.modify = function (_id) {
        this.closeAllEdit();
        this.watchingMap.get(_id).opened = false;
        this.watchingMap.get(_id).modifying = Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["cloneObject"])(this.watchingMap.get(_id), ['videos', 'subtitles']);
        this.studios = this.watchingMap.get(_id).studios.join('\n');
    };
    WatchingComponent.prototype.onModifySubmit = function (_id, i, isAiring) {
        var _this = this;
        if (!confirm('저장하시겠습니까?'))
            return;
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.watchingMap.get(_id).modifying, ['memo']) || !Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.studios))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])(['빈 필드가 있습니다.']);
        var watching = this.watchingMap.get(_id).modifying;
        watching.studios = this.studios.trim().split('\n');
        this.watchingService.modifyWatching(watching).subscribe(function (result) {
            if (result._id) {
                _this.watchingMap.delete(_id);
                _this.watchingMap.set(_id, watching);
                (isAiring ? _this.airings : _this.ends)[i] = watching;
                _this.click(_id);
            }
            else {
                alert('오류가 발생하였습니다.');
                _this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    WatchingComponent.prototype.write = function () {
        var date = new Date();
        var year = date.getFullYear();
        var qtr = Math.floor((date.getMonth() + 4) / 3);
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
    };
    WatchingComponent.prototype.onWriteSubmit = function () {
        var _this = this;
        if (!Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.writing, ['memo', 'ohli_id', '_id', 'modifying', 'opened']) || !Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["isOK"])(this.studios))
            return Object(src_app_models_item__WEBPACK_IMPORTED_MODULE_9__["notOK"])(['빈 필드가 있습니다.']);
        this.writing.studios = this.studios.trim().split('\n');
        this.watchingService.addWatching(this.writing).subscribe(function (result) {
            if (result._id) {
                _this.watchingMap.set(result._id, result);
                if (result.ohli_id) {
                    _this.airings.push(result);
                    _this.align(0);
                }
                else {
                    _this.ends.push(result);
                    _this.align(1);
                }
                alert('추가되었습니다.');
                _this.writing = null;
                _this.click(result._id);
                var el = document.getElementById(result._id);
                try {
                    el.scrollIntoView();
                }
                catch (e) { }
                if (_this.plan_id) {
                    _this.planService.remove(_this.plan_id).subscribe(function (err) {
                        if (err)
                            alert('원래의 목록에서 지우던 도중 오류가 발생하였습니다.');
                        else
                            _this.plan_id = null;
                    });
                }
            }
            else {
                alert('오류가 발생하였습니다.');
                _this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    WatchingComponent.prototype.remove = function (_id, i, isAiring) {
        var _this = this;
        if (!confirm('삭제하시겠습니까?'))
            return;
        this.watchingService.removeWatching(_id).subscribe(function (err) {
            if (err) {
                _this.flashMessage.showFlashMessage({
                    messages: ['오류가 발생하였습니다.'],
                    type: 'danger',
                    timeout: 3000
                });
                return false;
            }
            else {
                _this.watchingMap.delete(_id);
                (isAiring ? _this.airings : _this.ends).splice(i, 1);
            }
        });
    };
    WatchingComponent.prototype.openAll = function () {
        var _this = this;
        this.watchingMap.forEach(function (value, key) {
            if (!value.opened)
                _this.click(key);
        });
    };
    WatchingComponent.prototype.closeAll = function () {
        var _this = this;
        this.watchingMap.forEach(function (value, key) {
            if (value.opened)
                _this.click(key);
        });
    };
    WatchingComponent.prototype.getToday = function () {
        var date = new Date();
        return date.getFullYear() + "\uB144 " + (date.getMonth() + 1) + "\uC6D4 " + date.getDate() + "\uC77C";
    };
    WatchingComponent.prototype.getDate = function (dateString) {
        var today = new Date();
        var given = new Date(dateString);
        if (given.getMonth() == today.getMonth() && given.getDate() == today.getDate())
            return dateString.substring(11);
        else
            return given.getMonth() + 1 + "/" + given.getDate();
    };
    WatchingComponent.prototype.getDay = function (broadcast) {
        var f = function (n) { return n >= 10 ? "" + n : "0" + n; };
        return this.days[broadcast.day] + " " + f(broadcast.hour) + ":" + f(broadcast.minute);
    };
    WatchingComponent.prototype.getSize = function (size) {
        var dividedSize = Math.round(size / 1024 / 1024);
        if (dividedSize >= 1000)
            return (dividedSize / 1024).toFixed(2) + 'GB';
        else
            return dividedSize + 'MB';
    };
    WatchingComponent.prototype.findByStudio = function (studio) {
        this.dialog.open(_dialogs_studio_dialog_studio_dialog_component__WEBPACK_IMPORTED_MODULE_14__["StudioDialogComponent"], { data: studio });
    };
    WatchingComponent.prototype.openTodayAiring = function () {
        var e_4, _a;
        this.closeAll();
        var today = new Date();
        var broadcast = {
            day: today.getDay(),
            hour: today.getHours(),
            minute: today.getMinutes()
        };
        var flag = false;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.airings), _c = _b.next(); !_c.done; _c = _b.next()) {
                var airing = _c.value;
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
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (!flag) {
            this.flashMessage.showFlashMessage({
                messages: ["24\uC2DC\uAC04 \uC774\uB0B4 \uBC29\uC601 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."],
                type: 'danger',
                timeout: 3000
            });
        }
    };
    WatchingComponent.prototype.findVideosAndSubtitles = function (item) {
        this.dialog.open(_dialogs_ended_dialog_ended_dialog_component__WEBPACK_IMPORTED_MODULE_15__["EndedDialogComponent"], { data: {
                title: item.title,
                mal_id: item.mal_id,
                img: item.img
            } });
    };
    WatchingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-watching',
            template: __webpack_require__(/*! raw-loader!./watching.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/watching/watching.component.html"),
            styles: [__webpack_require__(/*! ./watching.component.css */ "./src/app/components/watching/watching.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_watching_service__WEBPACK_IMPORTED_MODULE_2__["WatchingService"],
            src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_11__["PlanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            src_app_services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"],
            src_app_services_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"]])
    ], WatchingComponent);
    return WatchingComponent;
}(src_app_models_headerAlign__WEBPACK_IMPORTED_MODULE_12__["HeaderAlign"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentTypeInterceptor = /** @class */ (function () {
    function ContentTypeInterceptor() {
    }
    ContentTypeInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            }
        });
        return next.handle(request);
    };
    ContentTypeInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentTypeInterceptor);
    return ContentTypeInterceptor;
}());



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

var HeaderAlign = /** @class */ (function () {
    function HeaderAlign(alignedAs, alignmentsCounts) {
        this.alignments = [];
        this.alignedAs = alignedAs;
        for (var i = 0; i < alignmentsCounts.length; i++) {
            var arr = [];
            for (var j = 0; j < alignmentsCounts[i]; j++)
                arr.push(1);
            this.alignments.push(arr);
        }
    }
    HeaderAlign.prototype.setItems = function (items) {
        this.items = items;
    };
    HeaderAlign.prototype.setAlignments = function (alignmentsCounts) {
        this.alignments = [];
        for (var i = 0; i < alignmentsCounts.length; i++) {
            var arr = [];
            for (var j = 0; j < alignmentsCounts[i]; j++)
                arr.push(1);
            this.alignments.push(arr);
        }
    };
    HeaderAlign.prototype.align = function (num, standard) {
        var numIsNotSet;
        if (numIsNotSet = (num == undefined))
            num = 0;
        if (standard)
            this.alignedAs[num] = standard;
        if (numIsNotSet)
            this.items[num].sort(this.getAlignment(this.alignedAs[num]));
        else
            this.items[num].sort(this.getAlignment(this.alignedAs[num], num));
        this.alignments[num][this.alignedAs[num]] *= -1;
    };
    HeaderAlign.prototype.alignAll = function (standards) {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"]((standards ? standards : this.alignedAs).entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_c.value, 2), i = _d[0], standard = _d[1];
                this.align(i, standard);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return HeaderAlign;
}());



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

var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());

function cloneObject(obj, excepts) {
    var e_1, _a;
    var clone = {};
    for (var key in obj) {
        if (excepts)
            if (excepts.includes(key))
                continue;
        if (typeof obj[key] == 'object' && obj[key] != null) {
            if (Array.isArray(obj[key])) {
                var arr = [];
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](obj[key]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var each = _c.value;
                        if (typeof each == 'object')
                            arr.push(cloneObject(each));
                        else
                            arr.push(each);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
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
    var e_2, _a;
    if (typeof obj != 'object') {
        if (!isValid(obj))
            return false;
    }
    else {
        for (var key in obj) {
            if (excepts)
                if (excepts.includes(key))
                    continue;
            if (typeof obj[key] != 'object') {
                if (!isOK(obj[key]))
                    return false;
            }
            else if (Array.isArray(obj[key])) {
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](obj[key]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var each = _c.value;
                        if (!isOK(each))
                            return false;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
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
var Searched = /** @class */ (function () {
    function Searched() {
    }
    return Searched;
}());

var MalSearched = /** @class */ (function () {
    function MalSearched() {
    }
    return MalSearched;
}());

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeHtml = /** @class */ (function () {
    function SafeHtml(dom) {
        this.dom = dom;
    }
    SafeHtml.prototype.transform = function (value, args) {
        return this.dom.bypassSecurityTrustHtml(value);
    };
    SafeHtml = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeHtml'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtml);
    return SafeHtml;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeUrl = /** @class */ (function () {
    function SafeUrl(dom) {
        this.dom = dom;
    }
    SafeUrl.prototype.transform = function (value, args) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    SafeUrl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeUrl'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeUrl);
    return SafeUrl;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get('/api/movies').pipe();
    };
    MovieService.prototype.getMovie = function (_id) {
        return this.http.get("/api/movies/" + _id).pipe();
    };
    MovieService.prototype.addMovie = function (movie) {
        return this.http.post('/api/movies', movie).pipe();
    };
    MovieService.prototype.modifyMovie = function (movie) {
        return this.http.put("/api/movies/" + movie._id, movie).pipe();
    };
    MovieService.prototype.removeMovie = function (_id, series, sequence) {
        return this.http.delete("/api/movies/" + _id + "/" + series + "/" + sequence).pipe();
    };
    MovieService.prototype.count = function () {
        return this.http.get("/api/movies/count").pipe();
    };
    MovieService.prototype.getRandom = function () {
        return this.http.get('/api/movies/random').pipe();
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PlanService = /** @class */ (function () {
    function PlanService(http) {
        this.http = http;
    }
    PlanService.prototype.get = function (_id) { return this.getPlan(_id); };
    PlanService.prototype.remove = function (_id) { return this.removePlan(_id); };
    PlanService.prototype.getPlans = function () {
        return this.http.get('/api/plans').pipe();
    };
    PlanService.prototype.getPlan = function (_id) {
        return this.http.get("/api/plans/" + _id).pipe();
    };
    PlanService.prototype.addPlan = function (plan) {
        return this.http.post('/api/plans', plan).pipe();
    };
    PlanService.prototype.modifyPlan = function (plan) {
        return this.http.put("/api/plans/" + plan._id, plan).pipe();
    };
    PlanService.prototype.removePlan = function (_id) {
        return this.http.delete("/api/plans/" + _id).pipe();
    };
    PlanService.prototype.count = function () {
        return this.http.get("/api/plans/count").pipe();
    };
    PlanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlanService);
    return PlanService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.search = function (text, option) {
        return this.http.get("/api/searches/" + option + "/" + text).pipe();
    };
    SearchService.prototype.mal = function (mal_id) {
        return this.http.get("/api/searches/mal_id/" + mal_id).pipe();
    };
    SearchService.prototype.namuwiki = function (text) {
        // return `/api/searches/namuwiki/${encodeURI(text)}`;
        return "https://namu.wiki/search/" + encodeURI(text);
    };
    SearchService.prototype.namuwiki_icon = function () {
        return 'import_contacts';
    };
    SearchService.prototype.namuwiki_label = function () {
        return '나무위키';
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var TitleService = /** @class */ (function () {
    function TitleService(titleService) {
        this.titleService = titleService;
    }
    TitleService_1 = TitleService;
    TitleService.prototype.setTitle = function (title) {
        this.titleService.setTitle(TitleService_1.DefaultTitle + ' :: ' + title);
    };
    TitleService.prototype.setDefaultTitle = function () {
        this.titleService.setTitle(TitleService_1.DefaultTitle);
    };
    var TitleService_1;
    TitleService.DefaultTitle = 'AnimeLog W';
    TitleService = TitleService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], TitleService);
    return TitleService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TvaService = /** @class */ (function () {
    function TvaService(http) {
        this.http = http;
    }
    TvaService.prototype.getTvas = function () {
        return this.http.get('/api/tvas').pipe();
    };
    TvaService.prototype.getTva = function (_id) {
        return this.http.get("/api/tvas/" + _id).pipe();
    };
    TvaService.prototype.addTva = function (tva) {
        return this.http.post('/api/tvas', tva).pipe();
    };
    TvaService.prototype.modifyTva = function (tva) {
        return this.http.put("/api/tvas/" + tva._id, tva).pipe();
    };
    TvaService.prototype.removeTva = function (_id, series, sequence) {
        return this.http.delete("/api/tvas/" + _id + "/" + series + "/" + sequence).pipe();
    };
    TvaService.prototype.count = function () {
        return this.http.get("/api/tvas/count").pipe();
    };
    TvaService.prototype.getRandom = function () {
        return this.http.get('/api/tvas/random').pipe();
    };
    TvaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TvaService);
    return TvaService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WatchingService = /** @class */ (function () {
    function WatchingService(http) {
        this.http = http;
    }
    WatchingService.prototype.get = function (_id) { return this.getWatching(_id); };
    WatchingService.prototype.remove = function (_id) { return this.removeWatching(_id); };
    WatchingService.prototype.getWatchings = function () {
        return this.http.get('/api/watchings').pipe();
    };
    WatchingService.prototype.getWatching = function (_id) {
        return this.http.get("/api/watchings/" + _id).pipe();
    };
    WatchingService.prototype.addWatching = function (watching) {
        return this.http.post('/api/watchings', watching).pipe();
    };
    WatchingService.prototype.modifyWatching = function (watching) {
        return this.http.put("/api/watchings/" + watching._id, watching).pipe();
    };
    WatchingService.prototype.removeWatching = function (_id) {
        return this.http.delete("/api/watchings/" + _id).pipe();
    };
    /**
     * @param year year when the animation ended, it is not needed when it is being aired
     */
    WatchingService.prototype.ohli = function (title, year) {
        return this.http.get(year ? "/api/watchings/ohlis/" + year + "/" + title : "/api/watchings/ohlis/airing/" + title).pipe();
    };
    WatchingService.prototype.getVideos = function (title) {
        return this.http.get("/api/watchings/airing/videos/" + title).pipe();
    };
    WatchingService.prototype.getOhys = function (title) {
        return this.http.get("/api/watchings/airing/ohys/" + title).pipe();
    };
    WatchingService.prototype.getSubtitles = function (ohli_id) {
        return this.http.get("/api/watchings/airing/subtitles/" + ohli_id).pipe();
    };
    WatchingService.prototype.count = function () {
        return this.http.get("/api/watchings/count").pipe();
    };
    WatchingService.prototype.getRandom = function () {
        return this.http.get('/api/watchings/random').pipe();
    };
    WatchingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WatchingService);
    return WatchingService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PJH\AnimeLog_w\frontend-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map