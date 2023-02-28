import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ShipbobTracking extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "carrier" })
  carrier: string;

  @SpeakeasyMetadata()
  @Expose({ name: "carrier_service" })
  carrierService: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking_number" })
  trackingNumber: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking_url" })
  trackingUrl: string;
}