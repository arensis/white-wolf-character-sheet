import { ClanType } from './clans.data';

/**
 * V20 sects. Names live in i18n under `creationVtm.sects.<id>` and the
 * extended lore (history, practices, conclaves, rituals) under
 * `creationVtm.descriptions.sects.<id>`.
 */
export const SECT_IDS = ['camarilla', 'sabbat', 'anarchs', 'independents'] as const;

export type SectId = (typeof SECT_IDS)[number];

/** Sect a clan belongs to by default, used to prefill the sheet. */
const SECT_BY_CLAN_TYPE: Partial<Record<ClanType, SectId>> = {
  camarilla: 'camarilla',
  sabbat: 'sabbat',
  independent: 'independents',
};

export function sectForClanType(type: ClanType | undefined): string {
  return type ? SECT_BY_CLAN_TYPE[type] ?? '' : '';
}
