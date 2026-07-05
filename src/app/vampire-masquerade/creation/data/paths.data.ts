/**
 * Humanity and the Paths of Enlightenment (V20, Chapter Seven). Each Path is
 * anchored by two Virtues; the Path rating starts at the sum of those two
 * Virtues. Courage is shared by every Path.
 *
 * The sheet stores virtues in two merged fields (`conscienceConviction` and
 * `selfControlInstint`), so a Path only decides which label each field uses.
 */

export type FirstVirtue = 'conscience' | 'conviction';
export type SecondVirtue = 'selfControl' | 'instinct';

export interface PathData {
  id: string;
  /** Label used for the `conscienceConviction` virtue field. */
  firstVirtue: FirstVirtue;
  /** Label used for the `selfControlInstint` virtue field. */
  secondVirtue: SecondVirtue;
  /** Bearing (Porte) id; label lives in i18n under creationVtm.bearings. */
  bearing: string;
}

export const PATHS: PathData[] = [
  { id: 'humanity', firstVirtue: 'conscience', secondVirtue: 'selfControl', bearing: 'humanity' },
  { id: 'honorableAccord', firstVirtue: 'conscience', secondVirtue: 'selfControl', bearing: 'devotion' },
  { id: 'caine', firstVirtue: 'conviction', secondVirtue: 'instinct', bearing: 'faith' },
  { id: 'cathari', firstVirtue: 'conviction', secondVirtue: 'instinct', bearing: 'seduction' },
  { id: 'feralHeart', firstVirtue: 'conviction', secondVirtue: 'instinct', bearing: 'menace' },
  { id: 'bones', firstVirtue: 'conviction', secondVirtue: 'selfControl', bearing: 'silence' },
  { id: 'lilith', firstVirtue: 'conviction', secondVirtue: 'instinct', bearing: 'tribulation' },
  { id: 'metamorphosis', firstVirtue: 'conviction', secondVirtue: 'instinct', bearing: 'inhumanity' },
  { id: 'night', firstVirtue: 'conviction', secondVirtue: 'instinct', bearing: 'darkness' },
  { id: 'paradox', firstVirtue: 'conviction', secondVirtue: 'selfControl', bearing: 'confidence' },
  { id: 'powerInnerVoice', firstVirtue: 'conviction', secondVirtue: 'instinct', bearing: 'command' },
  { id: 'blood', firstVirtue: 'conviction', secondVirtue: 'selfControl', bearing: 'resolution' },
  { id: 'typhon', firstVirtue: 'conviction', secondVirtue: 'selfControl', bearing: 'devotion' },
];

export const getPath = (id: string): PathData | undefined =>
  PATHS.find((path) => path.id === id);
