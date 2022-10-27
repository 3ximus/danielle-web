import { Works, type Work } from "../works";

export interface Section {
  name: string;
  works: Work[];
}

export const gallery: Section[] = [
  {
    name: "Section 1",
    works: [
      Works.PedestrianSitting,
      Works.LitterAheadLilith,
      Works.SiTianWang,
      Works.DuoWenTianWang,
      Works.FallenAngel,
    ],
  },
  {
    name: "Section 2",
    works: [
      Works.FindingSelf,
      Works.PomegranatesBotticelli,
      Works.StopHorny,
      Works.StopNoHare,
      Works.Squid,
      Works.HeliosSelene,
    ],
  },
  {
    name: "Section 3",
    works: [
      Works.MediaSexuality,
      Works.BavarianLionShield,
      Works.SoloTravel,
      Works.MaleStudy,
      Works.FeminineStudies,
    ],
  },
];
