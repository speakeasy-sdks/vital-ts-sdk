import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ShipbobTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier: string;

  @SpeakeasyMetadata({ data: "json, name=carrier_service" })
  carrierService: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_number" })
  trackingNumber: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_url" })
  trackingUrl: string;
}