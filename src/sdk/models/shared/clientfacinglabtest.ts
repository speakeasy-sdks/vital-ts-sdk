import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LabClientFacing } from "./labclientfacing";
import { LabTestMethodEnum } from "./labtestmethodenum";
import { LabTestSampleTypeEnum } from "./labtestsampletypeenum";
import { MarkerClientFacing } from "./markerclientfacing";


export class ClientFacingLabTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive: boolean;

  @SpeakeasyMetadata({ data: "json, name=lab" })
  lab?: LabClientFacing;

  @SpeakeasyMetadata({ data: "json, name=markers", elemType: MarkerClientFacing })
  markers?: MarkerClientFacing[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: LabTestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=sample_type" })
  sampleType: LabTestSampleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}