import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "loc" })
  loc: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "msg" })
  msg: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}