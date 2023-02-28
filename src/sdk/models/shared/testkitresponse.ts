import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TestkitClientFacing } from "./testkitclientfacing";
import { Expose, Type } from "class-transformer";


export class TestkitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TestkitClientFacing })
  @Expose({ name: "testkits" })
  @Type(() => TestkitClientFacing)
  testkits: TestkitClientFacing[];
}