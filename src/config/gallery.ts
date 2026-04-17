import { Works, type Work } from "./works";

export interface Collection {
  name: string;
  works: Work[];
}

export const gallery: Collection[] = [
  {
    name: '',
    works: [
      Works.SilverHorse,
      Works.UrbanCherries,
      Works.WomanInSilver,
      Works.CrushedVelvet,
      Works.Maids,Works.Harpocrates, Works.Ra, Works.Piebald, Works.Marzanna,
      Works.Greed,
      Works.NoCoffee,
      Works.LaceAndLingerie,
      Works.FishBones,
      Works.TibetanChamMask1,
      Works.TibetanChamMask2,
      Works.TibetanChamMask3,
      Works.SleepingInBlueberries,
      Works.Death,
      Works.Romeyn,
      Works.Maiden,
      Works.SelfPortrait,
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
      Works.FallenAngel,
      Works.TwilightZone,
      Works.DuoWenTianWang,
      Works.SiTianWang,
      Works.LitterAheadLilith,
      Works.PedestrianSitting,
    ],
  },
];
