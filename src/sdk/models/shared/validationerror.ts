import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loc" })
  loc: any[];

  @SpeakeasyMetadata({ data: "json, name=msg" })
  msg: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}