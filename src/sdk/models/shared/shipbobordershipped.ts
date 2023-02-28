import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ShipbobShipment } from "./shipbobshipment";
import { Expose, Type } from "class-transformer";


export class ShipbobOrderShipped extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reference_id" })
  referenceId: string;

  @SpeakeasyMetadata({ elemType: ShipbobShipment })
  @Expose({ name: "shipments" })
  @Type(() => ShipbobShipment)
  shipments: ShipbobShipment[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: string;
}