import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// ClientFacingTestkitOrderClientFacingShipment
/** 
 * Schema for a Shipment in the client facing API.
 * 
 * To be used as part of a ClientFacingTestkitOrder.
**/
export class ClientFacingTestkitOrderClientFacingShipment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_courier" })
  inboundCourier?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_tracking_number" })
  inboundTrackingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_tracking_url" })
  inboundTrackingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_courier" })
  outboundCourier?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_tracking_number" })
  outboundTrackingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_tracking_url" })
  outboundTrackingUrl?: string;
}

// ClientFacingTestkitOrder
/** 
 * Schema for a testkit order in the client facing API.
 * 
 * To be used as part of a ClientFacingOrder.
**/
export class ClientFacingTestkitOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=shipment" })
  shipment?: ClientFacingTestkitOrderClientFacingShipment;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}