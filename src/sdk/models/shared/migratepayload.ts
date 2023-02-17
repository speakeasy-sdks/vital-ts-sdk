import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DBEnvironment } from "./dbenvironment";


export class MigratePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database" })
  database: DBEnvironment;
}