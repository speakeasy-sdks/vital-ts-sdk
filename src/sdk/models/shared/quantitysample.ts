import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class QuantitySample extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "product_type" })
  productType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "source_bundle" })
  sourceBundle?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "unit" })
  unit: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: number;
}