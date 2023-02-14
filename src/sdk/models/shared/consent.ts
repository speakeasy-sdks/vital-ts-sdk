import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConsentTypeEnum } from "./consenttypeenum";


export class Consent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentType" })
  consentType: ConsentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=timeOfConsent" })
  timeOfConsent?: Date;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}