import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ManualProfileCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=biological_sex" })
  biologicalSex?: any;

  @SpeakeasyMetadata({ data: "json, name=date_of_birth" })
  dateOfBirth?: Date;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;
}