import { SmartTag as TSmartTag } from "../api/smartTag/SmartTag";

export const SMARTTAG_TITLE_FIELD = "name";

export const SmartTagTitle = (record: TSmartTag): string => {
  return record.name || record.id;
};
