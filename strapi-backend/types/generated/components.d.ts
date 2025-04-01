import type { Schema, Struct } from '@strapi/strapi';

export interface OrderPayment extends Struct.ComponentSchema {
  collectionName: 'components_order_payments';
  info: {
    displayName: 'Payment';
    icon: 'check';
  };
  attributes: {
    card_name: Schema.Attribute.String & Schema.Attribute.Required;
    card_number: Schema.Attribute.String & Schema.Attribute.Required;
    cvv: Schema.Attribute.String & Schema.Attribute.Required;
    expiry_date: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OrderShipping extends Struct.ComponentSchema {
  collectionName: 'components_order_shippings';
  info: {
    displayName: 'shipping';
    icon: 'plane';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    first_name: Schema.Attribute.String & Schema.Attribute.Required;
    last_name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.String & Schema.Attribute.Required;
    zip_code: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'order.payment': OrderPayment;
      'order.shipping': OrderShipping;
    }
  }
}
