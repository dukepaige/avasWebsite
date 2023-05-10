import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './comps/menu/menu.component';
import { MenuModule } from "primeng/menu"

import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MenuComponent, MenuModule],
  selector: 'ava-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ava-website';

  constructor() {
    console.log('This is a constructor');
    this.getData();
  }

  async getData() {
    // console.log('getting data');
    // const text = 'I love cupcakes';
    // const key = 'abcdeg';

    // const x = createHmac('sha1', key).update(text);
    // console.log('this is x\n', x);
    const res = await fetch('https://18.189.184.33/wp-json/wc/v3/products/16?oauth_consumer_key=ck_0ef710d1232df0805558bcade162c0c9b396f1e8&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1683146241&oauth_nonce=Zl2mN9WBWTo&oauth_version=1.0&oauth_signature=zrBHy3JlEnEGRBx%2FcfM50t%2FcnOM%3D');
    console.log(res);
    const json = await res.json();
    console.log(json);
  }
}
