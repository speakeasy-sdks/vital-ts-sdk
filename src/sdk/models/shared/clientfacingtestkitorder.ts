import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


// ClientFacingTestkitOrderClientFacingShipment
/** 
 * Schema for a Shipment in the client facing API.
 * 
 * To be used as part of a ClientFacingTestkitOrder.
**/
export class ClientFacingTestkitOrderClientFacingShipment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inbound_courier" })
  inboundCourier?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inbound_tracking_number" })
  inboundTrackingNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inbound_tracking_url" })
  inboundTrackingUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "notes" })
  notes?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "outbound_courier" })
  outboundCourier?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "outbound_tracking_number" })
  outboundTrackingNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "outbound_tracking_url" })
  outboundTrackingUrl?: string;
}

// ClientFacingTestkitOrder
/** 
 * Schema for a testkit order in the client facing API.
 * 
 * To be used as part of a ClientFacingOrder.
**/
export class ClientFacingTestkitOrder extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "shipment" })
  @Type(() => ClientFacingTestkitOrderClientFacingShipment)
  shipment?: ClientFacingTestkitOrderClientFacingShipment;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}