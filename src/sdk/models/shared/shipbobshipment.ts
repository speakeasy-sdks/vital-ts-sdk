import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ShipbobProduct } from "./shipbobproduct";
import { ShipbobTracking } from "./shipbobtracking";
import { Expose, Type } from "class-transformer";


export class ShipbobShipment extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ShipbobProduct })
  @Expose({ name: "products" })
  @Type(() => ShipbobProduct)
  products: ShipbobProduct[];

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => ShipbobTracking)
  tracking?: ShipbobTracking;
}