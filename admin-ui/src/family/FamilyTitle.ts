import { Family as TFamily } from "../api/family/Family";

export const FAMILY_TITLE_FIELD = "id";

export const FamilyTitle = (record: TFamily): string => {
  return record.id || record.id;
};
