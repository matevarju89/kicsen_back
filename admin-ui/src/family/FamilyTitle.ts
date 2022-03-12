import { Family as TFamily } from "../api/family/Family";

export const FAMILY_TITLE_FIELD = "country";

export const FamilyTitle = (record: TFamily): string => {
  return record.country || record.id;
};
