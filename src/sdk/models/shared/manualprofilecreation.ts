import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class ManualProfileCreation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "biological_sex" })
  biologicalSex?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "date_of_birth" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dateOfBirth?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "height" })
  height?: number;
}