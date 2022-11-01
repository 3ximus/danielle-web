//       _    _               _
//      | |  | |             | |
//      | |  | |  ___   _ __ | | __ ___
//      | |/\| | / _ \ | '__|| |/ // __|
//      \  /\  /| (_) || |   |   < \__ \
//       \/  \/  \___/ |_|   |_|\_\|___/

export interface Work {
  name: string;
  slug: string; // url
  cover?: string; // used in gallery
  images: string[]; // images when previewing work
  year: number;
  dimensions?: string;
  media?: string;
  statements?: string[];
}

export namespace Works {
  export const PomegranatesBotticelli: Work = {
    name: "Pomegranates and Botticelli; Caution, Bump",
    year: 2021,
    media: "Oil paint & collage on road sign",
    dimensions: "24x24in.",
    slug: "pomegranates-botticelli",
    cover: "pomegranates_botticelli/88.webp",
    images: [],
  };
  export const FallenAngel: Work = {
    name: "Fallen Angel",
    slug: "fallen-angel",
    year: 2021,
    cover: "/fallen_angel/cover.webp",
    images: [],
  };
  export const HeliosSelene: Work = {
    name: "Helios & Selene",
    year: 2022,
    media: "Oil paint on street signs",
    dimensions: "12x18in. (x2)",
    slug: "helios-selene",
    cover: "/helios_selene/1.jpg",
    images: [],
    statements: [
      "Helios, God of the Sun, and Selene, Goddess of the moon, are painted in oil as busts on No Parking signs.",
      "Ironically, the one that is reflective in the dark is Helios rather than Selene.",
    ],
  };
  export const Squid: Work = {
    name: "Squid",
    slug: "squid",
    cover: "/squid/89.webp",
    year: 2021,
    images: [],
  };
  export const StopNoHare: Work = {
    name: "Stop No Hare",
    slug: "stop-no-hare",
    cover: "/stop_no_hare/82.webp",
    year: 2021,
    images: [],
  };
  export const SoloTravel: Work = {
    name: "Solo Travel",
    year: 2021,
    media: "Oil paint & mixed media",
    dimensions: "Approx. 24x30in.",
    slug: "solo-travel",
    cover: "/solo_travel/75.webp",
    images: [],
  };
  export const SiTianWang: Work = {
    name: "四天王 (Sì Tiān Wáng)",
    year: 2020,
    media: "Oil paint & marker on road sign",
    dimensions: "30x48in.",
    slug: "si-tian-wang",
    cover: "/si_tian_wang/44.webp",
    images: [],
    statements: [
      "The Four Heavenly Kings are Gods in Buddhism, each representing and watching over a cardinal direction. Each King has a distinct color, weapon, direction, and purpose.",
      "On this sign, the arrows and head direction correlate to what region they rule. The mudra, a hand symbol shown in red, alongside the mantra in the top left, are used to pray to the God of the North, Duōwén Tiānwáng (not depicted). The lemon in the bottom right symbolizes a connection to this fourth God as well.",
    ],
  };
  export const DuoWenTianWang: Work = {
    name: "多闻天王 (Duōwén Tiānwáng)",
    year: 2020,
    media: "Oil paint & marker on road sign",
    dimensions: "24x30in.",
    slug: "duo-wen-tian-wang",
    cover: "/duo_wen_tian_wang/41.webp",
    images: [],
    statements: [
      'As the "main" God of the Four Heavenly Kings, Duōwén Tiānwáng is most commonly prayed to for prosperity seeing as he is associated with good fortune.',
      "Usually carrying a lemon in one hand and a mongoose spitting jewels in another, he is shown as a wealth-giving God rather than one of greed.",
      "The arrow on the sign reveals he is God of the North and his five-pronged crown symbolizes the Transcendental Buddhas. The umbrella, being his weapon of choice, is painted at the bottom, while the top is adorned with jewels.",
    ],
  };
  export const PedestrianSitting: Work = {
    name: "Pedestrian Sitting",
    year: 2017,
    media: "Road sign and piping",
    slug: "pedestrian-sitting",
    cover: "/pedestrian_sitting/27.webp",
    images: [],
    statements: [
      "Joking at the iconography of a pedestrian crossing, the pedestrian’s sign is now made into a functional chair- now doing the opposite of what the well-known icon was meant to do. Here, the pedestrian has given in to the societal norms of a “fast food lifestyle” so to speak, being highly inactive and ultimately lazy.",
    ],
  };
  export const LitterAheadLilith: Work = {
    name: "Litter Ahead; Lilith",
    year: 2020,
    media: "Oil paint on road sign",
    dimensions: "36x36in.",
    slug: "litter-ahead-lilith",
    cover: "/litter_ahead_lilith/gallery.webp",
    images: [
      "/litter_ahead_lilith/31.webp",
      "/litter_ahead_lilith/32.webp",
      "/litter_ahead_lilith/34.webp",
      "/litter_ahead_lilith/35.webp",
    ],
    statements: [
      "Lilith, being known as the first Eve in the Garden of Eden, has been demonized in Judaism for not being subservient to Adam and lying beneath him. Seeing as she was created as his equal, Lilith realized she was her own person, and upon being banished, she grew wings and flew away. Once found by angels sent to retrieve her, she was told that for each day she would not come back, some of her babies would be killed as consequence. Commonly seen as a serpent woman who now kills the unborn and babies, she was spiteful of the fate put upon her by God.",
      "The sign that once read “Litter Patrol Ahead” now jokes that Lilith is commenting that behind the ivy there is “litter ahead” in the Garden of Eden. The figure shown, Lilith, is faceless here, implying any woman could be in her place. However, she’s now shown as an angel for not complying with a sexist destiny.",
    ],
  };
  export const StopHorny: Work = {
    name: "Stop, Horny",
    year: 2021,
    media: "Oil paint & collage on road sign",
    dimensions: "18x18in.",
    slug: "stop-horny",
    cover: "/stop_horny/cover.webp",
    images: [],
    statements: [
      "Depicting the painting Mars and Venus by Botticelli on the left, this piece discusses the implications of getting in a lustful relationship in the modern era. Venus, Goddess of fertility and love, is shown conquering Mars, the God of war. Tired and utterly defeated, he met his match, ultimately stating that love really does conquer war.",
      "To the bottom right, a fortune from a cookie reads “take the next opportunity presented to you” in French. Finding companionship nowadays requires different aspects than it used to, seeing as there is a large disconnect in how people interact due to technology. Many are seemingly defeated as well, not very interested in putting in the efforts needed to deepen relationships or meet new people. Overall, this sign is reminding the viewer to stay open minded, while cautioning of the large quantity of surface level relationships.",
    ],
  };
  export const TwilightZone: Work = {
    name: "Twilight Zone; Nothing in the Dark",
    year: 2021,
    media: "Paint Marker on road sign",
    dimensions: "36x36in.",
    slug: "twilight-zone",
    cover: "/media_and_sexuality/gallery.webp",
    images: [],
  };
  export const MediaSexuality: Work = {
    name: "Media Sexuality",
    slug: "media-sexuality",
    cover: "/media_and_sexuality/gallery.webp",
    year: 2021,
    images: [],
  };
  export const FindingSelf: Work = {
    name: "Finding Self; Closed-Off",
    year: 2021,
    media: "Oil paint & marker on road sign",
    dimensions: "24x24in. (x3)",
    slug: "finding-self",
    cover: "/finding_self/4.webp",
    images: [],
    statements: [
      "The classic medium of oil paint paired with modern street signs show the duality and dynamism of one's own being. The inner struggles of gender identity and acceptance are shown in this triptych, Finding Self, by creating a dialogue from self to viewer via my own thoughts. Through questioning myself, a form of care and love had been created; one never spoken, yet quickly understood.",
    ],
  };
  export const BavarianLionShield: Work = {
    name: "Bavarian Lion Shield",
    slug: "bavarian-lion-shield",
    cover: "/bavarian_lion_shield/52.webp",
    year: 2021,
    images: [],
  };
  export const MaleStudy: Work = {
    name: "Male Study",
    slug: "male-study",
    cover: "/male_study/56.webp",
    year: 2021,
    images: [],
  };
  export const FeminineStudies: Work = {
    name: "Feminine Studies",
    slug: "feminine-studies",
    cover: "/feminine_studies/58.webp",
    year: 2021,
    images: [],
  };
  export const WarOnWomen: Work = {
    name: "Another War on Women",
    slug: "war-on-women",
    year: 2021,
    media: "Oil paint & collage on road sign",
    dimensions: "24x24in.",
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
