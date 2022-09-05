//       _    _               _
//      | |  | |             | |
//      | |  | |  ___   _ __ | | __ ___
//      | |/\| | / _ \ | '__|| |/ // __|
//      \  /\  /| (_) || |   |   < \__ \
//       \/  \/  \___/ |_|   |_|\_\|___/

export interface Work {
  name?: string;
  year?: string;
  cover?: string;
  images: string[];
}

export namespace Works {
  export const PommegranatesBotticelli: Work = {
    images: [],
  };
  export const FallenAngel: Work = {
    images: [],
  };
  export const HeliosSelene: Work = {
    images: [],
  };
  export const SiTianWang: Work = {
    images: [],
  };
  export const LitterAheadLilith: Work = {
    cover: "/litter_ahead_lilith/gallery.webp",
    images: [],
  };
  export const StopHorny: Work = {
    images: [],
  };
  export const TwilightZone: Work = {
    images: [],
  };
  export const MediaSexuality: Work = {
    cover: "/media_and_sexuality/gallery.webp",
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
  export const PommegranatesBotticelli: PopSign = {
    cutout: {
      high: "/pomegranates_botticelli/cover.webp",
      low: "/pomegranates_botticelli/low/cover.webp",
    },
    flash_cutout: {
      high: "/pomegranates_botticelli/flash.webp",
      low: "/pomegranates_botticelli/low/flash.webp",
    },
    work: Works.PommegranatesBotticelli,
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
