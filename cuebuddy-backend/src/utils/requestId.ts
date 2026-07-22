import { nanoid } from "nanoid";

export function createRequestId(): string {
  return `req_${nanoid(12)}`;
}
