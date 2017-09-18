import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  getContacts() {
    
    // Angular developers may encounter a cross-origin resource sharing error when making 
    // a service request (typically a data service request). to a server other than the application's own host server. 
    // Browsers forbid such requests unless the server permits them explicitly.
    
    // There isn't anything the client application can do about these errors. 
    // The server must be configured to accept the application's requests. 
    // Read about how to enable CORS for specific servers at enable-cors.org.

    // return this.http.get('http://www.mocky.io/v2/581335f71000004204abaf83')
    //   .map(res => res.json);

    // Due to above reason, this service return static data
    // that captured by a browser
    
    
      const contacts = [
        {
          name: "Oleta Level",
          phone_number: "+442032960159",
          address: "10 London Wall, London EC2M 6SA, UK"
        },
        {
          name: "Maida Harju",
          phone_number: "+442032960899",
          address: "Woodside House, 94 Tockholes Rd, Darwen BB3 1LL, UK"
        },
        {
          name: "Lia Pigford",
          phone_number: "+442032960182",
          address: "23 Westmorland Cl, Darwen BB3 2TQ, UK"
        },
        {
          name: "Ghislaine Darden",
          phone_number: "+442032960427",
          address: "20-24 Knowlesly Rd, Darwen BB3 2NE, UK"
        },
        {
          name: "Jana Spitler",
          phone_number: "+442032960370",
          address: "4 St Lucia Cl, Darwen BB3 0SJ, UK"
        },
        {
          name: "Dolly Detweiler",
          phone_number: "+442032960977",
          address: "18 Johnson Rd, Darwen BB3, UK"
        },
        {
          name: "Stanley Vanderhoof",
          phone_number: "+442032960000",
          address: "17 Anchor Ave, Darwen BB3 0AZ, UK"
        },
        {
          name: "Adan Milian",
          phone_number: "+442032960011",
          address: "20 Ellerbeck Rd, Darwen BB3 3EX, UK"
        },
        {
          name: "Marivel Molina",
          phone_number: "+442032960013",
          address: "Tockholes Rd, Darwen BB3, UK"
        },
        {
          name: "Kris Everett",
          phone_number: "+442032960012",
          address: "Pinewood, Tockholes Rd, Darwen BB3 1JY, UK"
        }
      ];

    return contacts;
  }
}
