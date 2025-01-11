import { MetadataPagination } from "../metadata-pagination";

export interface ResponsePagination<T>  {
  data: T[],
  metadata: MetadataPagination
}
