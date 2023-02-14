import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { APIKeyRoleEnum } from "./apikeyroleenum";


export class ApiKeyInDB extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted_at" })
  deletedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=in_app" })
  inApp: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: APIKeyRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}