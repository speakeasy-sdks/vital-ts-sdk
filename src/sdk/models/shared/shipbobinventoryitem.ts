import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ShipbobInventoryItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serial_numbers" })
  serialNumbers: string[];
}