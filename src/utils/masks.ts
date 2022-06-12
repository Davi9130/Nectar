// @ts-ignore
import {mask} from 'remask';

export const cellphoneMask = (value: string) => {
  if (!value) {
    return '';
  }

  const v = String(value);

  const maskNow =
    v.replace(/\D/g, '').length > 10 ? '(99) 9 9999-9999' : '(99) 9999-99999';

  return mask(value, maskNow);
};
