import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Fulfillment } from "./fulfillment";
import { Expose, Type } from "class-transformer";

export enum ShipmentWebhookUpdateWebhookTypeEnum {
    ShipmentUpdate = "Shipment Update"
}

// ShipmentWebhookUpdate
/** 
 * example: {
 *     "test": "0",
 *     "webhook_type": "Shipment Update",
 *     "fulfillment": {
 *         "shipment_id": 263653409,
 *         "shipment_uuid": "U2hpcG1lbnQ6MjYzNjUzNDA5",
 *         "warehouse": "Primary",
 *         "warehouse_id": 3141,
 *         "warehouse_uuid": "V2FyZWhvdXNlOjMxNDE=",
 *         "webhook_type": "Shipment Update",
 *         "partner_order_id": "Order #243",
 *         "order_number": "Order #243",
 *         "tracking_number": "Pickup",
 *         "line_items": [
 *             {
 *                 "id": "Order #243-355933727",
 *                 "shiphero_id": 708252296,
 *                 "quantity": 50,
 *                 "sku": "1122334581",
 *                 "serial_numbers": [],
 *                 "customs_description": "a description",
 *                 "package": "Package #1",
 *                 "lot_id": null,
 *                 "lot_name": null,
 *                 "lot_expiration": null
 *             }
 *         ],
 *         "custom_tracking_url": "https://foo.bar",
 *         "shipping_method": "UPS Ground",
 *         "shipping_carrier": "UPS",
 *         "shipping_address": {
 *           "name": "tomas wingord",
 *           "address1": "55 W RAILROAD AVE BLDG 4",
 *           "address2": "BLDG 4",
 *           "address_city": "GARNERVILLE",
 *           "address_zip": "10923-1261",
 *           "address_state": "NY",
 *           "address_country": "US"
 *         },
 *         "package": {
 *             "length": 1,
 *             "width": 1,
 *             "height": 1,
 *             "weight": 12000
 *         },
 *         "completed": true,
 *         "created_at": "2022-05-24 18:20:15",
 *         "order_uuid": "T3JkZXI6MjcyMjcxNzA2",
 *         "order_gift_note": ""
 *     }
 * }
**/
export class ShipmentWebhookUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "fulfillment" })
  @Type(() => Fulfillment)
  fulfillment: Fulfillment;

  @SpeakeasyMetadata()
  @Expose({ name: "webhook_type" })
  webhookType: ShipmentWebhookUpdateWebhookTypeEnum;
}