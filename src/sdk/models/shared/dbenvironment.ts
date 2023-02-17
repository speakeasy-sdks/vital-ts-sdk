import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DBEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ro" })
  ro: string;

  @SpeakeasyMetadata({ data: "json, name=rw" })
  rw: string;
}