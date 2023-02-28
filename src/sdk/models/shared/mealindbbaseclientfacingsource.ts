import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSource } from "./clientfacingsource";
import { Energy } from "./energy";
import { Macros } from "./macros";
import { MealData } from "./mealdata";
import { Micros } from "./micros";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";


export class MealInDBBaseClientFacingSource extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata({ elemType: MealData })
  @Expose({ name: "data" })
  @Transform(({ value }) => {
    const obj: Record<string, MealData> = {};
    for (const key in value) {
      obj[key] = plainToInstance(MealData,
        value[key] as MealData,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  data?: Record<string, MealData>;

  @SpeakeasyMetadata()
  @Expose({ name: "energy" })
  @Type(() => Energy)
  energy?: Energy;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "macros" })
  @Type(() => Macros)
  macros?: Macros;

  @SpeakeasyMetadata()
  @Expose({ name: "micros" })
  @Type(() => Micros)
  micros?: Micros;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "priority_id" })
  priorityId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "provider_id" })
  providerId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  @Type(() => ClientFacingSource)
  source: ClientFacingSource;

  @SpeakeasyMetadata()
  @Expose({ name: "source_id" })
  sourceId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timestamp: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;
}