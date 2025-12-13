declare namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': {
      'agent-encoded-id'?: string;
      'office-id'?: string;
      'sort-order'?: string;
      'listing-status'?: string;
      'property-types'?: string;
      'price-min'?: string;
      'price-max'?: string;
      layout?: string;
      'show-filters'?: string;
      'show-sort'?: string;
      'show-map'?: string;
      'map-height'?: string;
      'listings-per-page'?: string;
      'show-pagination'?: string;
      [key: string]: any;
    };
    'realscout-property-search': {
      'office-id'?: string;
      layout?: string;
      'show-filters'?: string;
      'show-sort'?: string;
      'show-map'?: string;
      'map-height'?: string;
      'listings-per-page'?: string;
      'show-pagination'?: string;
      [key: string]: any;
    };
    'realscout-property-details': {
      'property-id'?: string;
      'office-id'?: string;
      [key: string]: any;
    };
  }
}

// Homebot global declarations
declare global {
  interface Window {
    Homebot: (selector: string, token: string) => void;
    __hb_namespace: string;
  }
}
