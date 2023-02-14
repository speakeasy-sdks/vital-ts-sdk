import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ShipbobProduct } from "./shipbobproduct";
import { ShipbobTracking } from "./shipbobtracking";


export class ShipbobShipment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=products", elemType: ShipbobProduct })
  products: ShipbobProduct[];

  @SpeakeasyMetadata({ data: "json, name=tracking" })
  tracking?: ShipbobTracking;
}