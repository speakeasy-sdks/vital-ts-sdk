import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingUser } from "./clientfacinguser";


export class PaginatedUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: ClientFacingUser })
  users: ClientFacingUser[];
}