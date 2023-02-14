import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ShipbobShipment } from "./shipbobshipment";


export class ShipbobOrderShipped extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=reference_id" })
  referenceId: string;

  @SpeakeasyMetadata({ data: "json, name=shipments", elemType: ShipbobShipment })
  shipments: ShipbobShipment[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}