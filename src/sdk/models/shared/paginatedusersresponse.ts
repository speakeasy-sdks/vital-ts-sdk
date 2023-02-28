import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingUser } from "./clientfacinguser";
import { Expose, Type } from "class-transformer";


export class PaginatedUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "offset" })
  offset: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: number;

  @SpeakeasyMetadata({ elemType: ClientFacingUser })
  @Expose({ name: "users" })
  @Type(() => ClientFacingUser)
  users: ClientFacingUser[];
}