import { Works, type Work } from "./works";

export interface Collection {
  name: string;
  works: Work[];
}

export const gallery: Collection[] = [
  {
    name: "Collection 3",
    works: [
      Works.NoCoffee,
      Works.LaceAndLingerie,
      Works.FishBones,
      Works.Ra,
      Works.Harpocrates,
      Works.Piebald,
      Works.TibetanChamMask3,
      Works.TibetanChamMask2,
      Works.TibetanChamMask1,
      Works.SleepingInBlueberries,
      Works.Death,
      Works.Romeyn,
      Works.Maiden,
      Works.SelfPortrait,
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
