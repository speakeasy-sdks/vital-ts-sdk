import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BodyV2InDB } from "./bodyv2indb";


export class RawBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body", elemType: BodyV2InDB })
  body: BodyV2InDB[];
}