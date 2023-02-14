import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContactPoint } from "./contactpoint";
import { HumanName } from "./humanname";
import { PersonAddress } from "./personaddress";
import { PhotoAttachment } from "./photoattachment";


export class RelatedPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address", elemType: PersonAddress })
  address?: PersonAddress[];

  @SpeakeasyMetadata({ data: "json, name=birthDate" })
  birthDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=name", elemType: HumanName })
  name?: HumanName[];

  @SpeakeasyMetadata({ data: "json, name=photo", elemType: PhotoAttachment })
  photo?: PhotoAttachment[];

  @SpeakeasyMetadata({ data: "json, name=relationshipType" })
  relationshipType: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=telecom", elemType: ContactPoint })
  telecom?: ContactPoint[];
}