import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  filter: any = {};
  contacts = [];
  allContacts = [];
  query = {
    isSortAscending: false,
    sortBy: 'name'
  };

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.contacts = this.allContacts = this.service.getContacts();

    this.sortBy('name');
  }

  onKeyUp(){
    this.onFilterChange();
  }

  onFilterChange() {
    var contacts = this.allContacts;

    if(this.filter.name)
      contacts = contacts.filter(c => 
        c.name.toLowerCase().indexOf(this.filter.name.toLowerCase()) >= 0 ||
        c.phone_number.toLowerCase().indexOf(this.filter.name.toLowerCase()) >= 0 ||
        c.address.toLowerCase().indexOf(this.filter.name.toLowerCase()) >= 0 
         
      );

    this.contacts = contacts;
  }

  resetFilter(){
    this.filter = {};
    this.onFilterChange();
  }

  sortBy(columnName){
    if(this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }

    this.contacts.sort(this.dynamicSort(columnName));
  }
  
  dynamicSort(property) {
    var sortOrder = this.query.isSortAscending ? 1 : -1;

    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }
}
