import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DeviceV2InDB } from "./devicev2indb";


export class RawDevices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices", elemType: DeviceV2InDB })
  devices: DeviceV2InDB[];
}