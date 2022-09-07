//       _    _               _
//      | |  | |             | |
//      | |  | |  ___   _ __ | | __ ___
//      | |/\| | / _ \ | '__|| |/ // __|
//      \  /\  /| (_) || |   |   < \__ \
//       \/  \/  \___/ |_|   |_|\_\|___/

export interface Work {
  name: string;
  slug: string;
  year?: number;
  cover?: string;
  images: string[];
}

export namespace Works {
  export const PomegranatesBotticelli: Work = {
    name: "Pomegranates and Botticelli",
    slug: "pomegranates-botticelli",
    year: 2021,
    cover: "pomegranates_botticelli/88.webp",
    images: [],
  };
  export const FallenAngel: Work = {
    name: "FallenAngel",
    slug: "fallen-angel",
    images: [],
  };
  export const HeliosSelene: Work = {
    name: "Helios and Selene",
    slug: "helios-selene",
    cover: "/helios_selene/1.jpg",
    images: [],
  };
  export const Squid: Work = {
    name: "Squid",
    slug: "squid",
    cover: "/squid/89.webp",
    images: [],
  };
  export const StopNoHare: Work = {
    name: "Stop No Hare",
    slug: "stop-no-hare",
    cover: "/stop_no_hare/82.webp",
    images: [],
  };
  export const SoloTravel: Work = {
    name: "Solo Travel",
    slug: "solo-travel",
    cover: "/solo_travel/75.webp",
    images: [],
  };
  export const SiTianWang: Work = {
    name: "Si Tian Wang",
    slug: "si-tian-wang",
    cover: "/si_tian_wang/44.webp",
    images: [],
  };
  export const DuoWenTianWang: Work = {
    name: "Duo Wen Tian Wang",
    slug: "duo-wen-tian-wang",
    cover: "/duo_wen_tian_wang/41.webp",
    images: [],
  };
  export const PedestrianSitting: Work = {
    name: "Pedestrian Sitting",
    slug: "pedestrian-sitting",
    cover: "/pedestrian_sitting/27.webp",
    images: [],
  };
  export const LitterAheadLilith: Work = {
    name: "LitterAheadLilith",
    slug: "litteraheadlilith",
    cover: "/litter_ahead_lilith/gallery.webp",
    images: [],
  };
  export const StopHorny: Work = {
    name: "StopHorny",
    slug: "stophorny",
    images: [],
  };
  export const TwilightZone: Work = {
    name: "TwilightZone",
    slug: "twilightzone",
    images: [],
  };
  export const MediaSexuality: Work = {
    name: "MediaSexuality",
    slug: "mediasexuality",
    cover: "/media_and_sexuality/gallery.webp",
    images: [],
  };
  export const FindingSelf: Work = {
    name: "FindingSelf",
    slug: "finding-self",
    cover: "/finding_self/4.webp",
    images: [],
  };
  export const BavarianLionShield: Work = {
    name: "BavarianLionShield",
    slug: "bavarian-lion-shield",
    cover: "/bavarian_lion_shield/52.webp",
    images: [],
  };
  export const MaleStudy: Work = {
    name: "MaleStudy",
    slug: "male-study",
    cover: "/male_study/56.webp",
    images: [],
  };
  export const FeminineStudies: Work = {
    name: "FeminineStudies",
    slug: "feminine-studies",
    cover: "/feminine_studies/58.webp",
    images: [],
  };
}

//      ______              _____  _
//      | ___ \            /  ___|(_)
//      | |_/ /___   _ __  \ `--.  _   __ _  _ __   ___
//      |  __// _ \ | '_ \  `--. \| | / _` || '_ \ / __|
//      | |  | (_) || |_) |/\__/ /| || (_| || | | |\__ \
//      \_|   \___/ | .__/ \____/ |_| \__, ||_| |_||___/
//                  | |                __/ |
//                  |_|               |___/

export interface PopSign {
  cutout: {
    low: string;
    high: string;
  };
  flash_cutout: {
    low: string;
    high: string;
  };
  work: Work;
}

export namespace Pop {
  export const PomegranatesBotticelli: PopSign = {
    cutout: {
      high: "/pomegranates_botticelli/cover.webp",
      low: "/pomegranates_botticelli/low/cover.webp",
    },
    flash_cutout: {
      high: "/pomegranates_botticelli/flash.webp",
      low: "/pomegranates_botticelli/low/flash.webp",
    },
    work: Works.PomegranatesBotticelli,
  };

  export const FallenAngel: PopSign = {
    cutout: {
      high: "/fallen_angel/cover.webp",
      low: "/fallen_angel/low/cover.webp",
    },
    flash_cutout: {
      high: "/fallen_angel/flash.webp",
      low: "/fallen_angel/low/flash.webp",
    },
    work: Works.FallenAngel,
  };

  export const Helios: PopSign = {
    cutout: {
      high: "/helios_selene/helios.webp",
      low: "/helios_selene/low/helios.webp",
    },
    flash_cutout: {
      high: "/helios_selene/hflash.webp",
      low: "/helios_selene/low/hflash.webp",
    },
    work: Works.HeliosSelene,
  };

  export const Selene: PopSign = {
    cutout: {
      high: "/helios_selene/selene.webp",
      low: "/helios_selene/low/selene.webp",
    },
    flash_cutout: {
      high: "/helios_selene/sflash.webp",
      low: "/helios_selene/low/sflash.webp",
    },
    work: Works.HeliosSelene,
  };

  export const SiTianWang: PopSign = {
    cutout: {
      high: "/si_tian_wang/cover.webp",
      low: "/si_tian_wang/low/cover.webp",
    },
    flash_cutout: {
      high: "/si_tian_wang/flash.webp",
      low: "/si_tian_wang/low/flash.webp",
    },

    work: Works.SiTianWang,
  };

  export const LitterAheadLilith: PopSign = {
    cutout: {
      high: "/litter_ahead_lilith/cover.webp",
      low: "/litter_ahead_lilith/low/cover.webp",
    },
    flash_cutout: {
      high: "/litter_ahead_lilith/flash.webp",
      low: "/litter_ahead_lilith/low/flash.webp",
    },
    work: Works.LitterAheadLilith,
  };

  export const StopHorny: PopSign = {
    cutout: {
      high: "/stop_horny/cover.webp",
      low: "/stop_horny/low/cover.webp",
    },
    flash_cutout: {
      high: "/stop_horny/cover.webp",
      low: "/stop_horny/low/cover.webp",
    },
    work: Works.StopHorny,
  };

  export const TwilightZone: PopSign = {
    cutout: {
      high: "/twilight_zone/cover.webp",
      low: "/twilight_zone/low/cover.webp",
    },
    flash_cutout: {
      high: "/twilight_zone/cover.webp",
      low: "/twilight_zone/low/cover.webp",
    },
    work: Works.TwilightZone,
  };
}

//    _____       _ _                 _____ _
//   / ____|     | | |               |_   _| |
//  | |  __  __ _| | | ___ _ __ _   _  | | | |_ ___ _ __ ___
//  | | |_ |/ _` | | |/ _ | '__| | | | | | | __/ _ | '_ ` _ \
//  | |__| | (_| | | |  __| |  | |_| |_| |_| ||  __| | | | | |
//   \_____|\__,_|_|_|\___|_|   \__, |_____|\__\___|_| |_| |_|
//                               __/ |
//                              |___/

export interface GalleryItem {
  work: Work;
  fat?: boolean;
  tall?: boolean;
}
