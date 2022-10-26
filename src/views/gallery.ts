import { Works, type Work } from "../works";

export interface Section {
  name: string;
  works: Work[];
}

export const gallery: Section[] = [
  {
    name: "Section 1",
    works: [
      Works.LitterAheadLilith,
      Works.FindingSelf,
      Works.MediaSexuality,
      Works.BavarianLionShield,
    ],
  },
  {
    name: "Section 2",
    works: [
      Works.HeliosSelene,
      Works.SiTianWang,
      Works.DuoWenTianWang,
      Works.PomegranatesBotticelli,
      Works.PedestrianSitting,
    ],
  },
  {
    name: "Section 3",
    works: [
      Works.SoloTravel,
      Works.StopNoHare,
      Works.Squid,
      Works.MaleStudy,
      Works.FeminineStudies,
    ],
  },
];
