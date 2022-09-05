//       _    _               _
//      | |  | |             | |
//      | |  | |  ___   _ __ | | __ ___
//      | |/\| | / _ \ | '__|| |/ // __|
//      \  /\  /| (_) || |   |   < \__ \
//       \/  \/  \___/ |_|   |_|\_\|___/

export interface Work {
  name?: string;
  year?: string;
  images: string[];
  // popSigns: PopSign[];
}

export const PommegranatesBotticelli: Work = {
  images: [],
  // popSigns: [PommegranatesBotticelli_Pop],
};
export const FallenAngel: Work = {
  images: [],
  //popSigns: [FallenAngel_Pop]
};
export const HeliosSelene: Work = {
  images: [],
  // popSigns: [Helios_Pop, Selene_Pop],
};
export const SiTianWang: Work = {
  images: [],
  // popSigns: [SiTianWang_Pop]
};
export const LitterAheadLilith: Work = {
  images: [],
  // popSigns: [LitterAheadLilith_Pop],
};
export const StopHorny: Work = {
  images: [],
  // popSigns: [StopHorny_Pop]
};
export const TwilightZone: Work = {
  images: [],
  // popSigns: [TwilightZone_Pop]
};

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

export const PommegranatesBotticelli_Pop: PopSign = {
  cutout: {
    high: "/pomegranates_botticelli/cover.webp",
    low: "/pomegranates_botticelli/low/cover.webp",
  },
  flash_cutout: {
    high: "/pomegranates_botticelli/flash.webp",
    low: "/pomegranates_botticelli/low/flash.webp",
  },
  work: PommegranatesBotticelli,
};

export const FallenAngel_Pop: PopSign = {
  cutout: {
    high: "/fallen_angel/cover.webp",
    low: "/fallen_angel/low/cover.webp",
  },
  flash_cutout: {
    high: "/fallen_angel/flash.webp",
    low: "/fallen_angel/low/flash.webp",
  },
  work: FallenAngel,
};

export const Helios_Pop: PopSign = {
  cutout: {
    high: "/helios_selene/helios.webp",
    low: "/helios_selene/low/helios.webp",
  },
  flash_cutout: {
    high: "/helios_selene/hflash.webp",
    low: "/helios_selene/low/hflash.webp",
  },
  work: HeliosSelene,
};

export const Selene_Pop: PopSign = {
  cutout: {
    high: "/helios_selene/selene.webp",
    low: "/helios_selene/low/selene.webp",
  },
  flash_cutout: {
    high: "/helios_selene/sflash.webp",
    low: "/helios_selene/low/sflash.webp",
  },
  work: HeliosSelene,
};

export const SiTianWang_Pop: PopSign = {
  cutout: {
    high: "/si_tian_wang/cover.webp",
    low: "/si_tian_wang/low/cover.webp",
  },
  flash_cutout: {
    high: "/si_tian_wang/flash.webp",
    low: "/si_tian_wang/low/flash.webp",
  },

  work: SiTianWang,
};

export const LitterAheadLilith_Pop: PopSign = {
  cutout: {
    high: "/litter_ahead_lilith/cover.webp",
    low: "/litter_ahead_lilith/low/cover.webp",
  },
  flash_cutout: {
    high: "/litter_ahead_lilith/flash.webp",
    low: "/litter_ahead_lilith/low/flash.webp",
  },
  work: LitterAheadLilith,
};


export const StopHorny_Pop: PopSign = {
  cutout: {
    high: "/stop_horny/cover.webp",
    low: "/stop_horny/low/cover.webp",
  },
  flash_cutout: {
    high: "/stop_horny/cover.webp",
    low: "/stop_horny/low/cover.webp",
  },
  work: StopHorny,
};

export const TwilightZone_Pop: PopSign = {
  cutout: {
    high: "/twilight_zone/cover.webp",
    low: "/twilight_zone/low/cover.webp",
  },
  flash_cutout: {
    high: "/twilight_zone/cover.webp",
    low: "/twilight_zone/low/cover.webp",
  },
  work: TwilightZone,
};
