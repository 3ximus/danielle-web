import { Works, type Work } from "./works";

export interface Collection {
  name: string;
  works: Work[];
}

export const gallery: Collection[] = [
  {
    name: "Collection 3",
    works: [
      Works.Ra,
      Works.Harpocrates,
      Works.Piebald,
      Works.SleepingInBlueberries,
      Works.Death,
      Works.TibetanChamMask3,
      Works.TibetanChamMask2,
      Works.TibetanChamMask1,
      Works.SelfPortrait,
      Works.Romeyn,
    ],
  },
  {
    name: "Collection 2",
    works: [
      Works.FragmentsOfSussex,
      Works.Carousel,
      Works.Butcher,
      Works.Petrichor,
      Works.AphroditeAres,
      Works.PicnicHere,
      Works.HeliosSelene,
      Works.FindingSelf,
      Works.PomegranatesBotticelli,
      Works.StopHorny,
      Works.StopNoHare,
      Works.Squid,
      Works.WarOnWomen,
    ],
  },
  {
    name: "Collection 1",
    works: [
      Works.FallenAngel,
      Works.TwilightZone,
      Works.DuoWenTianWang,
      Works.SiTianWang,
      Works.LitterAheadLilith,
      Works.PedestrianSitting,
    ],
  },
];
