//       _    _               _
//      | |  | |             | |
//      | |  | |  ___   _ __ | | __ ___
//      | |/\| | / _ \ | '__|| |/ // __|
//      \  /\  /| (_) || |   |   < \__ \
//       \/  \/  \___/ |_|   |_|\_\|___/

export interface Work {
  name: string;
  slug: string; // url
  cover: string; // used in works page
  galleryCover: string; // low res gallery cover
  images: string[]; // images when previewing work
  year: number;
  dimensions?: string;
  medium?: string;
  statements?: string[];

  sold?: boolean;
}

export namespace Works {
  export const PomegranatesBotticelli: Work = {
    name: "Pomegranates and Botticelli; Caution, Bump",
    year: 2021,
    medium: "Oil paint & collage on road sign",
    dimensions: "24x24in.",
    slug: "pomegranates-botticelli",
    cover: "pomegranates_botticelli/cover.webp",
    galleryCover: "pomegranates_botticelli/low/cover.webp",
    images: [
      "pomegranates_botticelli/85.webp",
      "pomegranates_botticelli/86.webp",
      "pomegranates_botticelli/87.webp",
      "pomegranates_botticelli/flash.webp",
    ],
    statements: [
      "Referring to classical art knowledge, the reference of pomegranates are a few things; pomegranates didn’t just depict fertility, but also the anatomy of a human heart, and being the immortality and resurrection of Jesus. A close up on two of the angels from Botticelli’s painting Madonna of the Magnificat is shown atop the sign where baby Jesus was crowned while sitting on Mary’s lap. The words “Caution, Bump” poke fun that, while one was said to conceive without having sex, those who can end up with a baby bump should use protection.",
    ],
    sold: true,
  };
  export const FallenAngel: Work = {
    name: "Fallen Angel",
    slug: "fallen-angel",
    year: 2021,
    medium: "Oil paint on road sign",
    dimensions: "24x24in.",
    cover: "/fallen_angel/cover.webp",
    galleryCover: "/fallen_angel/low/cover.webp",
    images: [
      "/fallen_angel/80.webp",
      "/fallen_angel/81.webp",
      "/fallen_angel/flash.webp",
    ],
    sold: true,
  };
  export const HeliosSelene: Work = {
    name: "Helios & Selene",
    year: 2022,
    medium: "Oil paint on street signs",
    dimensions: "12x18in. (x2)",
    slug: "helios-selene",
    cover: "/helios_selene/cover.webp",
    galleryCover: "/helios_selene/low/cover.webp",
    images: [
      "/helios_selene/helios.webp",
      "/helios_selene/hflash.webp",
      "/helios_selene/selene.webp",
      "/helios_selene/sflash.webp",
    ],
    statements: [
      "Helios, God of the Sun, and Selene, Goddess of the moon, are painted in oil as busts on No Parking signs.",
      "Ironically, the one that is reflective in the dark is Helios rather than Selene.",
    ],
  };
  export const AphroditeAres: Work = {
    name: "Aphrodite & Ares",
    year: 2022,
    medium: "Oil paint on street signs",
    dimensions: "12x18in. (x2)",
    slug: "aphrodite-ares",
    cover: "/aphrodite_ares/cover.webp",
    galleryCover: "/aphrodite_ares/low/cover.webp",
    images: [
      "/aphrodite_ares/ares.webp",
      "/aphrodite_ares/ares_flash.webp",
      "/aphrodite_ares/aphrodite.webp",
      "/aphrodite_ares/aphrodite_flash.webp",
    ],
  };
  export const Squid: Work = {
    name: "Squid",
    slug: "squid",
    cover: "/squid/cover.webp",
    galleryCover: "/squid/low/cover.webp",
    year: 2021,
    images: ["/squid/90.webp", "/squid/91.webp"],
  };
  export const StopNoHare: Work = {
    name: "Stop No Hare",
    slug: "stop-no-hare",
    cover: "/stop_no_hare/cover.webp",
    galleryCover: "/stop_no_hare/low/cover.webp",
    year: 2021,
    images: ["/stop_no_hare/83.webp", "/stop_no_hare/84.webp"],
  };
  export const SoloTravel: Work = {
    name: "Solo Travel",
    year: 2021,
    medium: "Oil paint & mixed media",
    dimensions: "Approx. 24x30in.",
    slug: "solo-travel",
    cover: "/solo_travel/cover.webp",
    galleryCover: "/solo_travel/low/cover.webp",
    images: [
      "/solo_travel/76.webp",
      "/solo_travel/77.webp",
      "/solo_travel/78.webp",
      "/solo_travel/79.webp",
    ],
    statements: [
      "Discussing this piece as a general representation:",
      "Raw, hanging meat represents the experience of how a woman is seen while traveling. The cheesecloth, acting as the canvas, depicts the delicateness and fragility of the situation while the airport photograph and skyline show the strong-willed nature of the traveler. The woman in the picture is faceless not only for anonymity, but also for empathy knowing it can happen to anyone.",
      "Personal story:",
      "Based on when I traveled solo for the first time a few years back. I was stalked and hit by a Vespa that resulted in me staying longer in Rome. I found out the man preyed on women at the hostel and assaulted the ones he could get alone. After trying to isolate me by showing people indecent pictures of “me”, I had him kicked out of the hostel's bar. After waiting outside full of rage, he showed the picture to me once more, stating “it isn’t you obviously, she was passed out and a bitch anyway”. I recognized the girl as another solo traveler when he showed me the picture of her face- eyes shut and naked on his bed. I screamed and broke his lip.",
    ],
  };
  export const SiTianWang: Work = {
    name: "四天王 (Sì Tiān Wáng)",
    year: 2020,
    medium: "Oil paint & marker on road sign",
    dimensions: "30x48in.",
    slug: "si-tian-wang",
    cover: "/si_tian_wang/cover.webp",
    galleryCover: "/si_tian_wang/low/cover.webp",
    images: [
      "/si_tian_wang/43.webp",
      "/si_tian_wang/45.webp",
      "/si_tian_wang/46.webp",
      "/si_tian_wang/flash.webp",
    ],
    statements: [
      "The Four Heavenly Kings are Gods in Buddhism, each representing and watching over a cardinal direction. Each King has a distinct color, weapon, direction, and purpose.",
      "On this sign, the arrows and head direction correlate to what region they rule. The mudra, a hand symbol shown in red, alongside the mantra in the top left, are used to pray to the God of the North, Duōwén Tiānwáng (not depicted). The lemon in the bottom right symbolizes a connection to this fourth God as well.",
    ],
  };
  export const DuoWenTianWang: Work = {
    name: "多闻天王 (Duōwén Tiānwáng)",
    year: 2020,
    medium: "Oil paint & marker on road sign",
    dimensions: "24x30in.",
    slug: "duo-wen-tian-wang",
    cover: "/duo_wen_tian_wang/cover.webp",
    galleryCover: "/duo_wen_tian_wang/low/cover.webp",
    images: [
      "/duo_wen_tian_wang/36.webp",
      "/duo_wen_tian_wang/37.webp",
      "/duo_wen_tian_wang/38.webp",
      "/duo_wen_tian_wang/39.webp",
      "/duo_wen_tian_wang/40.webp",
      "/duo_wen_tian_wang/42.webp",
    ],
    statements: [
      'As the "main" God of the Four Heavenly Kings, Duōwén Tiānwáng is most commonly prayed to for prosperity seeing as he is associated with good fortune.',
      "Usually carrying a lemon in one hand and a mongoose spitting jewels in another, he is shown as a wealth-giving God rather than one of greed.",
      "The arrow on the sign reveals he is God of the North and his five-pronged crown symbolizes the Transcendental Buddhas. The umbrella, being his weapon of choice, is painted at the bottom, while the top is adorned with jewels.",
    ],
  };
  export const PedestrianSitting: Work = {
    name: "Pedestrian Sitting",
    year: 2017,
    medium: "Road sign and piping",
    slug: "pedestrian-sitting",
    cover: "/pedestrian_sitting/cover.webp",
    galleryCover: "/pedestrian_sitting/low/cover.webp",
    images: [
      "/pedestrian_sitting/26.webp",
      "/pedestrian_sitting/28.webp",
      "/pedestrian_sitting/29.webp",
    ],
    statements: [
      "Joking at the iconography of a pedestrian crossing, the pedestrian’s sign is now made into a functional chair- now doing the opposite of what the well-known icon was meant to do. Here, the pedestrian has given in to the societal norms of a “fast food lifestyle” so to speak, being highly inactive and ultimately lazy.",
    ],
  };
  export const LitterAheadLilith: Work = {
    name: "Litter Ahead; Lilith",
    year: 2020,
    medium: "Oil paint on road sign",
    dimensions: "36x36in.",
    slug: "litter-ahead-lilith",
    cover: "/litter_ahead_lilith/cover.webp",
    galleryCover: "/litter_ahead_lilith/low/cover.webp",
    images: [
      "/litter_ahead_lilith/31.webp",
      "/litter_ahead_lilith/32.webp",
      "/litter_ahead_lilith/34.webp",
      "/litter_ahead_lilith/35.webp",
      "/litter_ahead_lilith/flash.webp",
    ],
    statements: [
      "Lilith, being known as the first Eve in the Garden of Eden, has been demonized in Judaism for not being subservient to Adam and lying beneath him. Seeing as she was created as his equal, Lilith realized she was her own person, and upon being banished, she grew wings and flew away. Once found by angels sent to retrieve her, she was told that for each day she would not come back, some of her babies would be killed as consequence. Commonly seen as a serpent woman who now kills the unborn and babies, she was spiteful of the fate put upon her by God.",
      "The sign that once read “Litter Patrol Ahead” now jokes that Lilith is commenting that behind the ivy there is “litter ahead” in the Garden of Eden. The figure shown, Lilith, is faceless here, implying any woman could be in her place. However, she’s now shown as an angel for not complying with a sexist destiny.",
    ],
  };
  export const StopHorny: Work = {
    name: "Stop, Horny",
    year: 2021,
    medium: "Oil paint & collage on road sign",
    dimensions: "18x18in.",
    slug: "stop-horny",
    cover: "/stop_horny/cover.webp",
    galleryCover: "/stop_horny/low/cover.webp",
    images: [
      "/stop_horny/8.webp",
      "/stop_horny/9.webp",
      "/stop_horny/10.webp",
      "/stop_horny/11.webp",
    ],
    statements: [
      "Depicting the painting Mars and Venus by Botticelli on the left, this piece discusses the implications of getting in a lustful relationship in the modern era. Venus, Goddess of fertility and love, is shown conquering Mars, the God of war. Tired and utterly defeated, he met his match, ultimately stating that love really does conquer war.",
      "To the bottom right, a fortune from a cookie reads “take the next opportunity presented to you” in French. Finding companionship nowadays requires different aspects than it used to, seeing as there is a large disconnect in how people interact due to technology. Many are seemingly defeated as well, not very interested in putting in the efforts needed to deepen relationships or meet new people. Overall, this sign is reminding the viewer to stay open minded, while cautioning of the large quantity of surface level relationships.",
    ],
  };
  export const TwilightZone: Work = {
    name: "Twilight Zone; Nothing in the Dark",
    year: 2021,
    medium: "Paint Marker on road sign",
    dimensions: "36x36in.",
    slug: "twilight-zone",
    cover: "/twilight_zone/cover.webp",
    galleryCover: "/twilight_zone/low/cover.webp",
    images: [],
    statements: [
      "After the passing of my father in 2020 and riddled with grief that I wasn’t there at his time of death, I made this piece as a representation of the show he watched as a child and introduced me to years prior. In the episode Nothing in the Dark of The Twilight Zone, an elderly woman lets no one in her home out of fear that they may be the grim reaper. After a wounded man ends up at her doorstep, she reluctantly brings him inside to nurse him to health. However, while he did turn out to be the reaper, he held her hand and showed her she passed peacefully, painlessly, and with someone at her side. I’d like to imagine that is how my father passed.",
    ],
  };
  export const MediaSexuality: Work = {
    name: "Media Sexuality",
    slug: "media-sexuality",
    cover: "/media_and_sexuality/cover.webp",
    galleryCover: "/media_and_sexuality/low/cover.webp",
    year: 2021,
    images: [
      "/media_and_sexuality/71.webp",
      "/media_and_sexuality/72.webp",
      "/media_and_sexuality/73.webp",
      "/media_and_sexuality/74.webp",
    ],
  };
  export const FindingSelf: Work = {
    name: "Finding Self; Closed-Off",
    year: 2021,
    medium: "Oil paint & marker on road sign",
    dimensions: "24x24in. (x3)",
    slug: "finding-self",
    cover: "/finding_self/cover.webp",
    galleryCover: "/finding_self/low/cover.webp",
    images: [
      "/finding_self/5.webp",
      "/finding_self/6.webp",
      "/finding_self/19.webp",
      "/finding_self/20.webp",
      "/finding_self/21.webp",
      "/finding_self/22.webp",
      "/finding_self/23.webp",
      "/finding_self/24.webp",
    ],
    statements: [
      "The classic medium of oil paint paired with modern street signs show the duality and dynamism of one's own being. The inner struggles of gender identity and acceptance are shown in this triptych, Finding Self, by creating a dialogue from self to viewer via my own thoughts. Through questioning myself, a form of care and love had been created; one never spoken, yet quickly understood.",
    ],
  };
  export const BavarianLionShield: Work = {
    name: "Bavarian Lion Shield",
    slug: "bavarian-lion-shield",
    cover: "/bavarian_lion_shield/cover.webp",
    galleryCover: "/bavarian_lion_shield/low/cover.webp",
    year: 2021,
    images: [
      "/bavarian_lion_shield/53.webp",
      "/bavarian_lion_shield/54.webp",
      "/bavarian_lion_shield/55.webp",
    ],
    sold: true,
  };
  export const MaleStudy: Work = {
    name: "Male Study",
    slug: "male-study",
    cover: "/male_study/cover.webp",
    galleryCover: "/male_study/low/cover.webp",
    year: 2021,
    images: ["/male_study/57.webp"],
  };
  export const FeminineStudies: Work = {
    name: "Feminine Studies",
    slug: "feminine-studies",
    cover: "/feminine_studies/cover.webp",
    galleryCover: "/feminine_studies/low/cover.webp",
    year: 2021,
    images: [
      "/feminine_studies/48.webp",
      "/feminine_studies/49.webp",
      "/feminine_studies/50.webp",
      "/feminine_studies/51.webp",
      "/feminine_studies/59.webp",
      "/feminine_studies/60.webp",
      "/feminine_studies/61.webp",
      "/feminine_studies/62.webp",
      "/feminine_studies/63.webp",
      "/feminine_studies/64.webp",
      "/feminine_studies/65.webp",
      "/feminine_studies/66.webp",
      "/feminine_studies/67.webp",
      "/feminine_studies/68.webp",
      "/feminine_studies/69.webp",
    ],
  };
  export const WarOnWomen: Work = {
    name: "Another War on Women",
    slug: "war-on-women",
    year: 2021,
    medium: "Oil paint & collage on road sign",
    dimensions: "24x24in.",
    cover: "/feminine_studies/cover.webp",
    galleryCover: "/feminine_studies/low/cover.webp",
    images: [],
    statements: [
      "Following the Taliban taking over Afghanistan in May of 2021, I made this piece  to discuss womens’ rights issues in solidarity for those affected by this. The pose of the two references the sculpture “the Rape of Proserpina” while Guernica lies at the bottom- yet again preaching anti-war and the violence that comes with it. The word “Detour” expresses how society regressed in a matter of moments, deleting human rights and history as well. Her halo, simply put, represents the innocence and hope that was lost by women and children.",
    ],
  };
  export const PicnicHere: Work = {
    name: "Picnic Here",
    slug: "picnic-here",
    cover: "/picnic_here/cover.webp",
    galleryCover: "/picnic_here/low/cover.webp",
    medium: "Oil paint on street signs",
    dimensions: "12x18in.",
    year: 2022,
    images: [
      "/picnic_here/IMG_5546.webp",
      "/picnic_here/IMG_5547.webp",
      "/picnic_here/IMG_5548.webp",
      "/picnic_here/IMG_5549.webp",
    ],
  };
  export const Carousel: Work = {
    name: "Carousel",
    slug: "carousel",
    cover: "/carousel/cover.webp",
    galleryCover: "/carousel/low/cover.webp",
    medium: "Chalk pastel, spray paint, & acrylic on road sign",
    dimensions: "24x30in.",
    year: 2022,
    images: [
      "/carousel/IMG_5581.webp",
      "/carousel/IMG_5582.webp",
      "/carousel/IMG_5583.webp",
      "/carousel/IMG_5584.webp",
    ],
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
  cutout: string;
  flash_cutout: string;
  work: Work;
}

export namespace Pop {
  export const PomegranatesBotticelli: PopSign = {
    cutout:  "/pomegranates_botticelli/low/cut.webp",
    flash_cutout:  "/pomegranates_botticelli/low/flash.webp",
    work: Works.PomegranatesBotticelli,
  };

  export const FallenAngel: PopSign = {
    cutout:  "/fallen_angel/low/cut.webp",
    flash_cutout:  "/fallen_angel/low/flash.webp",
    work: Works.FallenAngel,
  };

  export const Helios: PopSign = {
    cutout:  "/helios_selene/low/helios.webp",
    flash_cutout:  "/helios_selene/low/hflash.webp",
    work: Works.HeliosSelene,
  };

  export const Selene: PopSign = {
    cutout:  "/helios_selene/low/selene.webp",
    flash_cutout:  "/helios_selene/low/sflash.webp",
    work: Works.HeliosSelene,
  };

  export const SiTianWang: PopSign = {
    cutout:  "/si_tian_wang/low/cut.webp",
    flash_cutout:  "/si_tian_wang/low/flash.webp",
    work: Works.SiTianWang,
  };

  export const LitterAheadLilith: PopSign = {
    cutout:  "/litter_ahead_lilith/low/cut.webp",
    flash_cutout:  "/litter_ahead_lilith/low/flash.webp",
    work: Works.LitterAheadLilith,
  };

  export const StopHorny: PopSign = {
    cutout:  "/stop_horny/low/cut.webp",
    flash_cutout:  "/stop_horny/low/flash.webp",
    work: Works.StopHorny,
  };

  export const TwilightZone: PopSign = {
    cutout:  "/twilight_zone/low/cut.webp",
    flash_cutout:  "/twilight_zone/low/cut.webp",
    work: Works.TwilightZone,
  };
}
