import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "url";

export const ImageTitle = (record: TImage): string => {
  return record.url || record.id;
};
