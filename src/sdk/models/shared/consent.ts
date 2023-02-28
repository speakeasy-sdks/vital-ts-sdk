import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConsentTypeEnum } from "./consenttypeenum";
import { Expose, Transform } from "class-transformer";


export class Consent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "consentType" })
  consentType: ConsentTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "timeOfConsent" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timeOfConsent?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}