import { Works, type Work } from "./works";

export interface Collection {
  name: string;
  works: Work[];
}

export const gallery: Collection[] = [
  {
    name: "Collection 4",
    works: [Works.TibetanChamMask1, Works.TibetanChamMask2, Works.TibetanChamMask3],
  },
  {
    name: "Collection 3",
    works: [
      Works.FragmentsOfSussex,
      Works.FindingSelf,
      Works.PomegranatesBotticelli,
      Works.StopHorny,
      Works.StopNoHare,
      Works.Squid,
      Works.HeliosSelene,
      Works.AphroditeAres,
      Works.PicnicHere,
      Works.WarOnWomen,
      Works.Carousel,
    ],
  },
  {
    name: "Collection 2",
    works: [
      Works.PedestrianSitting,
      Works.LitterAheadLilith,
      Works.SiTianWang,
      Works.DuoWenTianWang,
      Works.FallenAngel,
      Works.TwilightZone,
    ],
  },
  {
    name: "Collection 1",
    works: [
      Works.MediaSexuality,
      Works.BavarianLionShield,
      Works.SoloTravel,
      Works.MaleStudy,
      Works.FeminineStudies,
    ],
  },
];
