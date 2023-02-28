import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContactPoint } from "./contactpoint";
import { HumanName } from "./humanname";
import { PersonAddress } from "./personaddress";
import { PhotoAttachment } from "./photoattachment";
import { Expose, Transform, Type } from "class-transformer";


export class RelatedPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PersonAddress })
  @Expose({ name: "address" })
  @Type(() => PersonAddress)
  address?: PersonAddress[];

  @SpeakeasyMetadata()
  @Expose({ name: "birthDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  birthDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "gender" })
  gender?: string;

  @SpeakeasyMetadata({ elemType: HumanName })
  @Expose({ name: "name" })
  @Type(() => HumanName)
  name?: HumanName[];

  @SpeakeasyMetadata({ elemType: PhotoAttachment })
  @Expose({ name: "photo" })
  @Type(() => PhotoAttachment)
  photo?: PhotoAttachment[];

  @SpeakeasyMetadata()
  @Expose({ name: "relationshipType" })
  relationshipType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ elemType: ContactPoint })
  @Expose({ name: "telecom" })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];
}