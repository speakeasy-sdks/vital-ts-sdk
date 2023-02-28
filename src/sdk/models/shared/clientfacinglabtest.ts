import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LabClientFacing } from "./labclientfacing";
import { LabTestMethodEnum } from "./labtestmethodenum";
import { LabTestSampleTypeEnum } from "./labtestsampletypeenum";
import { MarkerClientFacing } from "./markerclientfacing";
import { Expose, Type } from "class-transformer";


export class ClientFacingLabTest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "is_active" })
  isActive: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "lab" })
  @Type(() => LabClientFacing)
  lab?: LabClientFacing;

  @SpeakeasyMetadata({ elemType: MarkerClientFacing })
  @Expose({ name: "markers" })
  @Type(() => MarkerClientFacing)
  markers?: MarkerClientFacing[];

  @SpeakeasyMetadata()
  @Expose({ name: "method" })
  method: LabTestMethodEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "price" })
  price: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sample_type" })
  sampleType: LabTestSampleTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "slug" })
  slug: string;
}