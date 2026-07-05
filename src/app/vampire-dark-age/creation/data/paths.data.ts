/**
 * The Roads (Caminos) of *Edad Oscura: Vampiro*. Each Road is anchored by
 * two Virtues; the character's Road rating equals the sum of those two
 * Virtues. The third Virtue, Courage, is shared by every Road.
 *
 * The sheet stores virtues in two merged fields (`conscienceConviction` and
 * `selfControlInstint`), so a Road only decides which label each field uses.
 */

export type FirstVirtue = 'conscience' | 'conviction';
export type SecondVirtue = 'selfControl' | 'instinct';

export interface PathData {
  id: string;
  /** Label used for the `conscienceConviction` virtue field. */
  firstVirtue: FirstVirtue;
  /** Label used for the `selfControlInstint` virtue field. */
  secondVirtue: SecondVirtue;
}

export const PATHS: PathData[] = [
  { id: 'humanity', firstVirtue: 'conscience', secondVirtue: 'selfControl' },
  { id: 'beast', firstVirtue: 'conviction', secondVirtue: 'instinct' },
  { id: 'heaven', firstVirtue: 'conviction', secondVirtue: 'selfControl' },
  { id: 'sin', firstVirtue: 'conviction', secondVirtue: 'instinct' },
  { id: 'kings', firstVirtue: 'conviction', secondVirtue: 'selfControl' },
];

export const getPath = (id: string): PathData | undefined =>
  PATHS.find((path) => path.id === id);
