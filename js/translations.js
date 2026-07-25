/* ==========================================================================
   Morrocoy Nature Reserve — Translations (English / Spanish)
   Keys are flat strings (namespaced with dots) so they can be referenced
   directly from data-i18n / data-i18n-html / data-i18n-alt / data-i18n-content
   attributes in index.html. See js/script.js for the loader logic.
   ========================================================================== */

const translations = {

  en: {
    /* ---------- Meta / <head> ---------- */
    "meta.title": "Morrocoy Nature Reserve — Sembrandopaz",
    "meta.description": "Morrocoy Nature Reserve protects and restores 406 hectares of tropical dry forest in El Salado, Colombia, turning conservation into restorative justice under the stewardship of Sembrandopaz.",
    "meta.og_title": "Morrocoy Nature Reserve — Sembrandopaz",
    "meta.og_description": "406 hectares of tropical dry forest, given back to the land. Discover Morrocoy Nature Reserve and the community restoring it.",

    /* ---------- Nav ---------- */
    "nav.logo_alt": "Morrocoy Nature Reserve",
    "nav.link_reserve": "The Reserve",
    "nav.link_land": "The Land",
    "nav.link_restoration": "Restoration",
    "nav.link_wildlife": "Wildlife",
    "nav.link_programs": "Programs",
    "nav.link_visit": "Visit",
    "nav.give": "Give",
    "nav.toggle_aria": "Menu",

    /* ---------- Hero ---------- */
    "hero.label": "Reserva Natural de la Sociedad Civil",
    "hero.badge": "A project of Sembrandopaz",
    "hero.location": "El Salado · El Carmen de Bolívar · Colombia",
    "hero.h1": "406 hectares of tropical dry forest, <em>given back to the land.</em>",
    "hero.description": "Morrocoy Nature Reserve, under the stewardship of <a href=\"https://sembrandopaz.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Sembrandopaz</a>, turns conservation into restorative justice, restoring one of the world's most endangered ecosystems while helping a community heal.",
    "hero.btn_primary": "Support the Reserve",
    "hero.btn_ghost": "See the story ↓",
    "hero.stat1_label": "hectares of protected and restored tropical dry forest",
    "hero.stat2_label": "hectares at San Pedrito, our eco-tourism & education site",
    "hero.stat3_label": "the year we received the reserve",
    "hero.stat4_flag": "At risk",
    "hero.stat4_label": "of Colombia's tropical dry forest remains today",

    /* ---------- Story ---------- */
    "story.video_caption": "Morrocoy 1",
    "story.eyebrow": "The Reserve",
    "story.h2": "Ecology and restorative justice, growing from the same roots",
    "story.p1": "In 2023, the Crecer en Paz Foundation gifted 406 hectares of tropical dry forest to Sembrandopaz, which now stewards the land as Morrocoy Nature Reserve. It sits in El Salado, El Carmen de Bolívar, a community still healing from years of conflict.",
    "story.p2": "Today the reserve is dedicated to conserving and restoring Tropical Dry Forest, one of the most endangered ecosystems on Earth, while giving the surrounding community a stake in what grows back.",

    /* ---------- Land ---------- */
    "land.eyebrow": "The Land",
    "land.h2": "One reserve, <em>fragmented</em>",
    "land.p": "The 406 hectares of Morrocoy aren't one unbroken block. The reserve is made up of two adjoining areas, Morrocoy 1 and Morrocoy 2, mapped and monitored across El Salado, El Carmen de Bolívar.",
    "land.map_tag": "Live map · Morrocoy 1 & 2",
    "land.map_load_btn": "Load interactive map",

    /* ---------- Restoration ---------- */
    "restoration.eyebrow": "What restoration looks like",
    "restoration.h2": "From open scar to closed canopy",
    "restoration.p": "Both plots were left exposed by deforestation long before Sembrandopaz began restoring them. This is the starting point every hectare of today's forest had to grow back from.",
    "restoration.card1_title": "Morrocoy 1",
    "restoration.card2_title": "Morrocoy 2",
    "restoration.badge_today": "Today",
    "restoration.img1_alt": "Morrocoy 1 in 2011",
    "restoration.img2_alt": "Morrocoy 1, closed canopy forest, present day",
    "restoration.img3_alt": "Morrocoy 2 in 2011",
    "restoration.img4_alt": "Morrocoy 2, present day",
    "restoration.note": "Restoring land like this isn't instant. Closed-canopy tropical dry forest takes years of active planting, monitoring, and protection to return. Every gift to Morrocoy funds that work.",

    /* ---------- Wildlife ---------- */
    "wildlife.eyebrow": "Who lives here",
    "wildlife.h2": "Home to thousands of species, many vulnerable or endangered",
    "wildlife.p": "The Morrocoy reserve is home to endangered wildlife. Our wildlife camaras and scientific expeditions monitor them.",
    "wildlife.card1_title": "Cottontop Tamarin",
    "wildlife.card1_p": "One of the world's most endangered primates, native to this stretch of forest.",
    "wildlife.card2_title": "Keel-billed Toucan",
    "wildlife.card2_p": "A signature sighting for visitors exploring San Pedrito's trails.",
    "wildlife.card3_title": "Thousands of plant species",
    "wildlife.card3_p": "The backbone of a dry-forest ecosystem under active restoration.",

    /* ---------- Camera gallery ---------- */
    "gallery.eyebrow": "Camera Traps",
    "gallery.h2": "Wildlife captured by our camera traps",
    "gallery.alt_capuchin": "White-faced Capuchin",
    "gallery.alt_titi": "Titi Monkey",
    "gallery.alt_tayra": "Tayra",
    "gallery.alt_ocelot": "Ocelot",
    "gallery.alt_heron": "Capped Heron",
    "gallery.alt_anteater": "Giant Anteater",
    "gallery.alt_armadillo": "Armadillo",
    "gallery.alt_hawk": "Roadside Hawk",
    "gallery.alt_skunk": "Skunk",
    "gallery.alt_mexican_anteater": "Mexican Anteater",
    "gallery.alt_ocelot_night": "Ocelot at Night",
    "gallery.alt_toucan": "Toucan",
    "gallery.alt_peccary": "Peccary",
    "gallery.alt_jaguarundi": "Jaguarundi",
    "gallery.prev_aria": "Previous photo",
    "gallery.next_aria": "Next photo",

    /* ---------- Programs ---------- */
    "programs.eyebrow": "Programs",
    "programs.h2": "Teaching the next generation to protect what's theirs",
    "programs.p": "Education is at the center of Morrocoy — not an add-on to conservation, but the reason it lasts.",
    "programs.card1_eyebrow": "School in the Forest",
    "programs.card1_h3": "Classrooms with no walls",
    "programs.card1_p": "Children learn ecology, biology, and stewardship directly in the reserve — turning the forest itself into the curriculum.",
    "programs.card2_eyebrow": "Ecological Youth Protectors",
    "programs.card2_h3": "Young people, leading",
    "programs.card2_p": "A youth program that builds leadership and care — for the forest, for themselves, and for their communities.",

    /* ---------- Visit ---------- */
    "visit.video_caption": "San Pedrito Trail",
    "visit.eyebrow": "Visit",
    "visit.h2": "Come see the forest for yourself",
    "visit.p": "San Pedrito is the reserve's 9.6 hectare visitors center with a focus on eco-tourism and environmental education. Trails, bird watching, and a base for the School in the Forest and Vigias Ecologicos programs, tucked into the tree line above El Salado.",
    "visit.btn": "Plan a visit",
    "visit.mailto_subject": "Visit Request — Morrocoy Nature Reserve",
    "visit.give_h2": "Help us restore the Tropical Dry Forest, hectare by hectare.",
    "visit.give_btn": "Give to Morrocoy",

    /* ---------- Footer ---------- */
    "footer.org_heading": "Organization",
    "footer.org_name": "Asociación Sembrando Semillas de Paz – Sembrandopaz",
    "footer.org_address": "Cl. 32 #17–194<br>Avenida Alfonso López<br>Sincelejo, Sucre, Colombia",
    "footer.nit_html": "<strong>NIT:</strong> 900035060-8",
    "footer.explore_heading": "Explore",
    "footer.explore_reserve": "The Reserve",
    "footer.explore_land": "The Land",
    "footer.explore_restoration": "Restoration",
    "footer.explore_wildlife": "Wildlife",
    "footer.explore_programs": "Programs",
    "footer.explore_visit": "Visit",
    "footer.connect_heading": "Connect",
    "footer.connect_instagram": "Instagram",
    "footer.connect_facebook": "Facebook",
    "footer.connect_contact": "Contact",
    "footer.copyright": "© 2026 Morrocoy Nature Reserve — a Sembrandopaz project",
    "footer.location": "El Salado · El Carmen de Bolívar, Colombia"
  },

  es: {
    /* ---------- Meta / <head> ---------- */
    "meta.title": "Reserva Natural Morrocoy — Sembrandopaz",
    "meta.description": "La Reserva Natural Morrocoy protege y restaura 406 hectáreas de bosque seco tropical en El Salado, Colombia, convirtiendo la conservación en justicia restaurativa bajo el cuidado de Sembrandopaz.",
    "meta.og_title": "Reserva Natural Morrocoy — Sembrandopaz",
    "meta.og_description": "406 hectáreas de bosque seco tropical, devueltas a la tierra. Conoce la Reserva Natural Morrocoy y a la comunidad que la restaura.",

    /* ---------- Nav ---------- */
    "nav.logo_alt": "Reserva Natural Morrocoy",
    "nav.link_reserve": "La Reserva",
    "nav.link_land": "El Terreno",
    "nav.link_restoration": "Restauración",
    "nav.link_wildlife": "Fauna",
    "nav.link_programs": "Programas",
    "nav.link_visit": "Visitar",
    "nav.give": "Donar",
    "nav.toggle_aria": "Menú",

    /* ---------- Hero ---------- */
    "hero.label": "Reserva Natural de la Sociedad Civil",
    "hero.badge": "Un proyecto de Sembrandopaz",
    "hero.location": "El Salado · El Carmen de Bolívar · Colombia",
    "hero.h1": "406 hectáreas de bosque seco tropical, <em>devueltas a la tierra.</em>",
    "hero.description": "La Reserva Natural Morrocoy, bajo el cuidado de <a href=\"https://sembrandopaz.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Sembrandopaz</a>, convierte la conservación en justicia restaurativa, restaurando uno de los ecosistemas más amenazados del mundo mientras ayuda a sanar a una comunidad.",
    "hero.btn_primary": "Apoya la Reserva",
    "hero.btn_ghost": "Ver la historia ↓",
    "hero.stat1_label": "hectáreas de bosque seco tropical protegido y restaurado",
    "hero.stat2_label": "hectáreas en San Pedrito, nuestro centro de ecoturismo y educación",
    "hero.stat3_label": "el año en que recibimos la reserva",
    "hero.stat4_flag": "En riesgo",
    "hero.stat4_label": "del bosque seco tropical de Colombia queda en pie hoy",

    /* ---------- Story ---------- */
    "story.video_caption": "Morrocoy 1",
    "story.eyebrow": "La Reserva",
    "story.h2": "Ecología y justicia restaurativa, creciendo desde las mismas raíces",
    "story.p1": "En 2023, la Fundación Crecer en Paz donó 406 hectáreas de bosque seco tropical a Sembrandopaz, que hoy cuida el terreno como la Reserva Natural Morrocoy. Se encuentra en El Salado, El Carmen de Bolívar, una comunidad que aún sana de años de conflicto.",
    "story.p2": "Hoy la reserva está dedicada a conservar y restaurar el Bosque Seco Tropical, uno de los ecosistemas más amenazados del planeta, mientras le da a la comunidad circundante un papel activo en lo que vuelve a crecer.",

    /* ---------- Land ---------- */
    "land.eyebrow": "El Terreno",
    "land.h2": "Una reserva, <em>fragmentada</em>",
    "land.p": "Las 406 hectáreas de Morrocoy no forman un solo bloque continuo. La reserva está compuesta por dos áreas contiguas, Morrocoy 1 y Morrocoy 2, mapeadas y monitoreadas en El Salado, El Carmen de Bolívar.",
    "land.map_tag": "Mapa en vivo · Morrocoy 1 y 2",
    "land.map_load_btn": "Cargar mapa interactivo",

    /* ---------- Restoration ---------- */
    "restoration.eyebrow": "Cómo se ve la restauración",
    "restoration.h2": "De cicatriz abierta a dosel cerrado",
    "restoration.p": "Ambos predios quedaron expuestos por la deforestación mucho antes de que Sembrandopaz comenzara a restaurarlos. Este es el punto de partida desde el cual tuvo que regenerarse cada hectárea del bosque actual.",
    "restoration.card1_title": "Morrocoy 1",
    "restoration.card2_title": "Morrocoy 2",
    "restoration.badge_today": "Hoy",
    "restoration.img1_alt": "Morrocoy 1 en 2011",
    "restoration.img2_alt": "Morrocoy 1, bosque de dosel cerrado, en la actualidad",
    "restoration.img3_alt": "Morrocoy 2 en 2011",
    "restoration.img4_alt": "Morrocoy 2, en la actualidad",
    "restoration.note": "Restaurar un terreno así no es instantáneo. Un bosque seco tropical de dosel cerrado necesita años de siembra activa, monitoreo y protección para volver. Cada donación a Morrocoy financia ese trabajo.",

    /* ---------- Wildlife ---------- */
    "wildlife.eyebrow": "Quién vive aquí",
    "wildlife.h2": "Hogar de miles de especies, muchas vulnerables o en peligro",
    "wildlife.p": "La reserva Morrocoy es hogar de fauna en peligro. Nuestras cámaras trampa y expediciones científicas les hacen seguimiento.",
    "wildlife.card1_title": "Tití Cabeciblanco",
    "wildlife.card1_p": "Uno de los primates más amenazados del mundo, nativo de este tramo de bosque.",
    "wildlife.card2_title": "Tucán Pico Iris",
    "wildlife.card2_p": "Un avistamiento emblemático para quienes recorren los senderos de San Pedrito.",
    "wildlife.card3_title": "Miles de especies de plantas",
    "wildlife.card3_p": "La columna vertebral de un ecosistema de bosque seco en restauración activa.",

    /* ---------- Camera gallery ---------- */
    "gallery.eyebrow": "Cámaras Trampa",
    "gallery.h2": "Fauna capturada por nuestras cámaras trampa",
    "gallery.alt_capuchin": "Capuchino de Cara Blanca",
    "gallery.alt_titi": "Mono Tití",
    "gallery.alt_tayra": "Tayra",
    "gallery.alt_ocelot": "Ocelote",
    "gallery.alt_heron": "Garza Capirotada",
    "gallery.alt_anteater": "Oso Palmero",
    "gallery.alt_armadillo": "Armadillo",
    "gallery.alt_hawk": "Gavilán Caminero",
    "gallery.alt_skunk": "Zorrillo",
    "gallery.alt_mexican_anteater": "Oso Hormiguero",
    "gallery.alt_ocelot_night": "Ocelote de Noche",
    "gallery.alt_toucan": "Tucán",
    "gallery.alt_peccary": "Saíno",
    "gallery.alt_jaguarundi": "Yaguarundí",
    "gallery.prev_aria": "Foto anterior",
    "gallery.next_aria": "Foto siguiente",

    /* ---------- Programs ---------- */
    "programs.eyebrow": "Programas",
    "programs.h2": "Enseñando a la próxima generación a proteger lo suyo",
    "programs.p": "La educación está en el centro de Morrocoy: no es un complemento de la conservación, sino la razón por la que perdura.",
    "programs.card1_eyebrow": "Escuela en el Bosque",
    "programs.card1_h3": "Aulas sin paredes",
    "programs.card1_p": "Los niños aprenden ecología, biología y cuidado ambiental directamente en la reserva, convirtiendo al bosque mismo en el plan de estudios.",
    "programs.card2_eyebrow": "Vigías Ecológicos",
    "programs.card2_h3": "Jóvenes que lideran",
    "programs.card2_p": "Un programa juvenil que forma liderazgo y cuidado: por el bosque, por ellos mismos y por sus comunidades.",

    /* ---------- Visit ---------- */
    "visit.video_caption": "Sendero San Pedrito",
    "visit.eyebrow": "Visitar",
    "visit.h2": "Ven a conocer el bosque tú mismo",
    "visit.p": "San Pedrito es el centro de visitantes de 9.6 hectáreas de la reserva, enfocado en el ecoturismo y la educación ambiental. Senderos, observación de aves y sede de los programas Escuela en el Bosque y Vigías Ecológicos, ubicado en la línea de árboles sobre El Salado.",
    "visit.btn": "Planea una visita",
    "visit.mailto_subject": "Solicitud de Visita — Reserva Natural Morrocoy",
    "visit.give_h2": "Ayúdanos a restaurar el Bosque Seco Tropical, hectárea por hectárea.",
    "visit.give_btn": "Dona a Morrocoy",

    /* ---------- Footer ---------- */
    "footer.org_heading": "Organización",
    "footer.org_name": "Asociación Sembrando Semillas de Paz – Sembrandopaz",
    "footer.org_address": "Cl. 32 #17–194<br>Avenida Alfonso López<br>Sincelejo, Sucre, Colombia",
    "footer.nit_html": "<strong>NIT:</strong> 900035060-8",
    "footer.explore_heading": "Explorar",
    "footer.explore_reserve": "La Reserva",
    "footer.explore_land": "El Terreno",
    "footer.explore_restoration": "Restauración",
    "footer.explore_wildlife": "Fauna",
    "footer.explore_programs": "Programas",
    "footer.explore_visit": "Visitar",
    "footer.connect_heading": "Conecta",
    "footer.connect_instagram": "Instagram",
    "footer.connect_facebook": "Facebook",
    "footer.connect_contact": "Contacto",
    "footer.copyright": "© 2026 Reserva Natural Morrocoy — un proyecto de Sembrandopaz",
    "footer.location": "El Salado · El Carmen de Bolívar, Colombia"
  }
};