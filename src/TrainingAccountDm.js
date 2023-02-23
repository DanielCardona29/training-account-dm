import { LitElement, html, } from 'lit-element';


import { BGADPAccountsGetV0 } from '@cells-components/bgadp-accounts-v0/bgadp-accounts-v0'

export class TrainingAccountDm extends LitElement {
  static get is() {
    return 'training-account-dm';
  }

  // Declare properties
  static get properties() {
    return {
      host: { type: String, },
      version: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.host = 'https://artichoke.platform.bbva.com';
    this.version = '0';
  }


  getAccounts() {
    const config = {
      host: this.host,
      version: this.version,
    }

    const dataProvider = new BGADPAccountsGetV0(config);

    dataProvider.generateRequest().then(
      success => {
        this._fireEvent('accounts-success', success);
      },
      error => {
        this._fireEvent('accounts-error',  error );
      }
    );

  }

  _fireEvent(eventName, detail) {
    this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail }));
  }

}
