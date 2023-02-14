import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TestkitClientFacing } from "./testkitclientfacing";


export class TestkitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testkits", elemType: TestkitClientFacing })
  testkits: TestkitClientFacing[];
}