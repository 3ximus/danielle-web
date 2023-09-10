import { Pop, type PopSign } from "./works";

function shuffle(array: PopSign[]) {
  let currentIndex = array.length;
  while (currentIndex > 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export const grid = [
  shuffle([
    // 1st row
    Pop.PomegranatesBotticelli,
    Pop.StopHorny,
    Pop.Selene,
  ]),
  shuffle([
    // 2nd row
    Pop.SiTianWang,
    Pop.Yamantaka,
    Pop.PicnicHere,
    Pop.TwilightZone,
  ]),
  shuffle([
    // 3rd row
    Pop.LitterAheadLilith,
    Pop.Helios,
    Pop.Selene,
    Pop.PomegranatesBotticelli,
  ]),
  shuffle([
    // 4th row
    Pop.TwilightZone,
    Pop.FallenAngel,
    Pop.PicnicHere,
  ]),
  shuffle([
    // 5th row
    Pop.PomegranatesBotticelli,
    Pop.SiTianWang,
  ]),
];
