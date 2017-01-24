"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// polymorphic this.
var LibraryBook = (function () {
    function LibraryBook() {
    }
    LibraryBook.prototype.CheckOut = function () {
        console.log('Checking out a book');
        return this;
    };
    LibraryBook.prototype.Checkin = function () {
        //console.log('Cheching in a book');
        if (this instanceof ChildrensBook) {
            console.log('Checking a childrens book');
        }
        if (this instanceof ElectronicBook) {
            console.log('Checking an Electronic Book');
        }
        return this;
    };
    return LibraryBook;
}());
var ChildrensBook = (function (_super) {
    __extends(ChildrensBook, _super);
    function ChildrensBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildrensBook.prototype.Clean = function () {
        console.log('Cleaning a book');
        return this;
    };
    return ChildrensBook;
}(LibraryBook));
var ElectronicBook = (function (_super) {
    __extends(ElectronicBook, _super);
    function ElectronicBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronicBook.prototype.RemoveFromCustomerDevice = function () {
        console.log('Removing book from device');
        return this;
    };
    return ElectronicBook;
}(LibraryBook));
var kidBook = new ChildrensBook();
kidBook
    .Checkin()
    .Clean()
    .CheckOut();
var electronicBook = new ElectronicBook();
electronicBook
    .Checkin()
    .RemoveFromCustomerDevice()
    .CheckOut();
//# sourceMappingURL=app.js.map