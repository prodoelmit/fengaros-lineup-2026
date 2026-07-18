// Fengaros Festival 2026 — schedule data
// Venue: Petrides Farm Park, Marki (Nicosia district), Cyprus.
//   NOTE: the festival MOVED for 2026. Editions through 2025 were in Kato Drys village.
// Dates: Thu 30 July – Sat 1 August 2026.
//
// Every slot below was read directly off the official schedule posters:
//   https://irp.cdn-website.com/7976d6ff/dms3rep/multi/F26+Programme.png   (Thu)
//   https://irp.cdn-website.com/7976d6ff/dms3rep/multi/F26+Programme2.png  (Fri)
//   https://irp.cdn-website.com/7976d6ff/dms3rep/multi/F26+Programme3.png  (Sat)
// Six stages, in poster column order: Field Stage, Village Stage, Playground, Sandy, Pigadi, Theatre.
// "Sandy" and "Pigadi" are two separate stages (Sandy is a sponsor-branded stage), not one "Sandy Pigadi".

const STAGES = [
  { id: 'field',      name: 'Field Stage',   color: '#8fbf9f' },
  { id: 'village',    name: 'Village Stage', color: '#e8d75a' },
  { id: 'playground', name: 'Playground',    color: '#c3a3c9' },
  { id: 'sandy',      name: 'Sandy',         color: '#f3b98d' },
  { id: 'pigadi',     name: 'Pigadi',        color: '#c9bfb8' },
  { id: 'theatre',    name: 'Theatre',       color: '#7fc7e8' },
];

const DAYS = [
  { id: 'thu', label: 'Thursday', date: '30 July 2026', iso: '2026-07-30' },
  { id: 'fri', label: 'Friday',   date: '31 July 2026', iso: '2026-07-31' },
  { id: 'sat', label: 'Saturday', date: '1 August 2026', iso: '2026-08-01' },
];

// t = start time exactly as printed (HHMM). Times before 06:00 belong to the following morning.
const SETS = [
  // ---- THURSDAY 30 JULY ----
  { day: 'thu', stage: 'field',      t: '1800', a: 'MUSHA' },
  { day: 'thu', stage: 'field',      t: '1940', a: 'THE LADDERMAN' },
  { day: 'thu', stage: 'field',      t: '2120', a: 'ANEMOURIO' },
  { day: 'thu', stage: 'field',      t: '2300', a: 'YPOGEIA REVMATA', c: 'GR' },
  { day: 'thu', stage: 'village',    t: '1740', a: 'RADIANCE' },
  { day: 'thu', stage: 'village',    t: '1920', a: 'SALTY RIVER' },
  { day: 'thu', stage: 'village',    t: '2100', a: 'SJU', c: 'SK' },
  { day: 'thu', stage: 'village',    t: '2240', a: 'SOCKS;SPORTSSOCKS', c: 'NL' },
  { day: 'thu', stage: 'village',    t: '0020', a: 'APARAPIRA PARAPE' },
  { day: 'thu', stage: 'playground', t: '1820', a: "MONSTER'S LIGHTHOUSE" },
  { day: 'thu', stage: 'playground', t: '2000', a: 'BLACKBIRD' },
  { day: 'thu', stage: 'playground', t: '2140', a: 'HONEY BLONDE', c: 'NL' },
  { day: 'thu', stage: 'playground', t: '2320', a: 'PISTAMASHINA', c: 'BG' },
  { day: 'thu', stage: 'playground', t: '0100', a: 'DECONOFF' },
  { day: 'thu', stage: 'sandy',      t: '1900', a: 'TTAVAS' },
  { day: 'thu', stage: 'sandy',      t: '2040', a: 'ALEXA MICHAEL' },
  { day: 'thu', stage: 'sandy',      t: '2220', a: 'A FLOWER TIDE', c: 'IT' },
  { day: 'thu', stage: 'pigadi',     t: '2120', a: 'GOATMOTHER', c: 'NL' },
  { day: 'thu', stage: 'pigadi',     t: '2300', a: 'ANDROULA & DJ KATTA' },
  { day: 'thu', stage: 'pigadi',     t: '0120', a: 'MAVRU' },
  { day: 'thu', stage: 'theatre',    t: '1720', a: 'FENGAROS PODCAST', talk: true },
  { day: 'thu', stage: 'theatre',    t: '1900', a: 'SPAIS GURLS', talk: true },
  { day: 'thu', stage: 'theatre',    t: '2200', a: 'STAND-UP COMEDY', talk: true },

  // ---- FRIDAY 31 JULY ----
  { day: 'fri', stage: 'field',      t: '1800', a: 'ARS NOTORIA' },
  { day: 'fri', stage: 'field',      t: '1940', a: 'SAIS' },
  { day: 'fri', stage: 'field',      t: '2120', a: 'ELENI DRAKE', c: 'UK' },
  { day: 'fri', stage: 'field',      t: '2300', a: 'HOFE', c: 'ES' },
  { day: 'fri', stage: 'village',    t: '1740', a: 'ADRO' },
  { day: 'fri', stage: 'village',    t: '1920', a: 'SCHIZODOLLS', c: 'GR' },
  { day: 'fri', stage: 'village',    t: '2100', a: 'THE SMALLEST CREATURE' },
  { day: 'fri', stage: 'village',    t: '2240', a: 'PAIDI TRAVMA', c: 'GR' },
  { day: 'fri', stage: 'village',    t: '0020', a: 'ALEJJOS' },
  { day: 'fri', stage: 'playground', t: '1820', a: 'FEVERFEW' },
  { day: 'fri', stage: 'playground', t: '2000', a: 'MAVA' },
  { day: 'fri', stage: 'playground', t: '2140', a: 'SPHERICAL COW', c: 'NL' },
  { day: 'fri', stage: 'playground', t: '2320', a: 'BRATŘI', c: 'CZ' },
  { day: 'fri', stage: 'playground', t: '0100', a: 'NANA' },
  { day: 'fri', stage: 'sandy',      t: '1900', a: 'LIAYRIO' },
  { day: 'fri', stage: 'sandy',      t: '2040', a: 'BABYLON VIEWS' },
  { day: 'fri', stage: 'sandy',      t: '2220', a: 'MUSSPELL', c: 'RO' },
  { day: 'fri', stage: 'pigadi',     t: '2120', a: 'ANIČKOO', c: 'CZ' },
  { day: 'fri', stage: 'pigadi',     t: '2300', a: 'RIROITER' },
  { day: 'fri', stage: 'pigadi',     t: '0120', a: 'FFTWF' },
  { day: 'fri', stage: 'theatre',    t: '1720', a: 'FENGAROS PODCAST', talk: true },
  { day: 'fri', stage: 'theatre',    t: '1900', a: 'CENSOREDX' },
  { day: 'fri', stage: 'theatre',    t: '2120', a: 'SELAS_LETHE' },
  { day: 'fri', stage: 'theatre',    t: '2200', a: 'STAND-UP COMEDY', talk: true },

  // ---- SATURDAY 1 AUGUST ----
  { day: 'sat', stage: 'field',      t: '1800', a: 'ENCARNITA IO' },
  { day: 'sat', stage: 'field',      t: '1940', a: 'NOFRENØ' },
  { day: 'sat', stage: 'field',      t: '2120', a: 'DEMETRIS MESIMERIS' },
  { day: 'sat', stage: 'field',      t: '2300', a: 'EISVOLEAS', c: 'GR' },
  { day: 'sat', stage: 'village',    t: '1740', a: 'JAAVA' },
  { day: 'sat', stage: 'village',    t: '1920', a: 'INFECTED SYREN' },
  { day: 'sat', stage: 'village',    t: '2100', a: 'EXPE', c: 'GR' },
  { day: 'sat', stage: 'village',    t: '2240', a: 'DELLA' },
  { day: 'sat', stage: 'village',    t: '0020', a: 'BILLIE KARK', c: 'GR' },
  { day: 'sat', stage: 'playground', t: '1820', a: 'FOND MOTION' },
  { day: 'sat', stage: 'playground', t: '2000', a: 'RAGEBAIT', c: 'NL' },
  { day: 'sat', stage: 'playground', t: '2140', a: 'NWAINA' },
  { day: 'sat', stage: 'playground', t: '2320', a: 'OGMIOS' },
  { day: 'sat', stage: 'playground', t: '0100', a: 'ΣALAMANDRA' },
  { day: 'sat', stage: 'sandy',      t: '1900', a: '7ATE9' },
  { day: 'sat', stage: 'sandy',      t: '2040', a: 'NABUMA' },
  { day: 'sat', stage: 'sandy',      t: '2220', a: 'ALEXIS SUNDER' },
  { day: 'sat', stage: 'pigadi',     t: '2120', a: 'COPPER CURIOS' },
  { day: 'sat', stage: 'pigadi',     t: '2300', a: 'JUNIOR SP.', c: 'GR' },
  { day: 'sat', stage: 'pigadi',     t: '0120', a: 'KRAAAOUUUU' },
  { day: 'sat', stage: 'theatre',    t: '1720', a: 'FENGAROS PODCAST', talk: true },
  { day: 'sat', stage: 'theatre',    t: '1900', a: 'BOOKS ON WHEELS', talk: true },
  { day: 'sat', stage: 'theatre',    t: '2200', a: 'STAND-UP COMEDY', talk: true },
];

// The poster prints START TIMES ONLY — set length is not published anywhere.
// Stages run a 100-minute cycle, so a 50-min set is a conservative guess for planning.
// Change this if the festival publishes real set lengths.
const SET_MINUTES = 50;
// Walking time between stages (your estimate — no official site map is published,
// and the 2026 venue is new, so this is worth re-checking on the ground).
const WALK_MINUTES = 3;

// Listening links. null = no verified link found; a wrong ID is worse than none,
// so nothing here is guessed — every ID was copied from an observed URL.
// confidence 'low' = plausible but possibly a same-name different artist.
const LINKS = {
  // --- Thursday ---
  'MUSHA': { spotify_artist_id: '3bVpCWAz47gaACFJ8Swll3', bandcamp_url: 'https://kalaqs.bandcamp.com/album/kallio-arga', genre: 'stoner/sludge rock meets techno & electronica', note: 'Larnaka trio — Shuffle (bass), Marinos (drums), Kalaqs (guitar). Album KALLIO ARGA (2024), built on works of Mitaroi Souxtin, a band 2/3 of MUSHA came from. Bandcamp sits on the guitarist\'s page, which is why searches miss it.' },
  'RADIANCE': { genre: 'heavy riff rock', note: 'Young Cypriot band, Fengaros High 2026 finalist. No online presence — nothing to listen to in advance.', no_links: true },
  'THE LADDERMAN': { spotify_artist_id: '0m76S8ZAANueyvGj7kVPZt', youtube_video_id: 'I-UV3CBVSqU', bandcamp_url: 'https://theladderman.bandcamp.com/', genre: 'heavy alternative groove rock', note: 'Larnaca alt-rock four-piece formed 2011, three albums.' },
  'ANEMOURIO': { spotify_artist_id: '5fxr3i0Rh4NgO5tx88NWkz', youtube_video_id: 'x5j9x-MIYTw', genre: 'Cypriot-dialect rock-rap', note: 'Limassol five-piece, fuzzy riffs and socio-political lyrics in Cypriot dialect.' },
  'YPOGEIA REVMATA': { spotify_artist_id: '4xbr3XX253Pyc7UiPCWEGh', youtube_video_id: 'BzdXXeDUkzA', genre: 'Greek alternative rock', note: 'Υπόγεια Ρεύματα — long-running Athens band formed 1992.' },
  'SALTY RIVER': { spotify_artist_id: '5YOE4kyYAt3Za6t08XAocm', youtube_video_id: '3zLAeNvAQFI', bandcamp_url: 'https://saltyriverofficial.bandcamp.com/', genre: 'atmospheric indie alt-rock', note: 'Limassol five-piece formed 2022, violins and metal-tinged dynamics.' },
  'SJU': { spotify_artist_id: '3KjvJE6bPR8OSKyktWQ5u3', youtube_video_id: 'FIORYMYIvcE', bandcamp_url: 'https://sjucream.bandcamp.com/', genre: 'playful electropop / art-pop', note: 'Slovak artist, ex-drummer of Ora the Molecule; album Mind Theatre (2024).' },
  'SOCKS;SPORTSSOCKS': { spotify_artist_id: '5iofxr31yEqGuxH0OIrAEq', youtube_video_id: 'dJjMHD_NESg', bandcamp_url: 'https://labelmusiclabel.bandcamp.com/album/more-songs-about-phones-happiness', genre: 'lo-fi indie ambient punk', note: 'Rotterdam five-piece, Popronde selection.' },
  'APARAPIRA PARAPE': { genre: 'wonky acid to disco DJ sets', note: 'Cypriot DJ duo; SoundCloud/Mixcloud only, no streaming presence.' },
  "MONSTER'S LIGHTHOUSE": { spotify_artist_id: '0sXple4utWwJr1BK8k2gLV', youtube_channel: 'https://www.youtube.com/channel/UC33cO_tT2botFQdv3DvAGAA', homepage: 'https://cypriotmusic.com/monsters-lighthouse/', genre: 'emotive alternative rock', note: 'From Limassol. Self-described: "music for those who feel imperfect, broken, ugly, and lost — and refuse to give up anyway."' },
  'BLACKBIRD': { spotify_artist_id: '1Q0eFvLI2Q7Ui6LZ1Ig69K', bandcamp_url: 'https://ablackbird.bandcamp.com', genre: 'cinematic pop rock, Byzantine house', note: 'Angela Mavropoulos — Cypriot artist based in LA; EP Where Is Home.', confidence: 'low' },
  'HONEY BLONDE': { spotify_artist_id: '1G4lpKawAVCtbXUVYO9VA3', youtube_video_id: 'NJfRWGika3I', genre: 'pink punk, riot grrrl', note: 'Dutch-Cypriot four-piece; debut EP February 2026.' },
  'PISTAMASHINA': { genre: 'glitchy electronica, funk, hip-hop', note: 'Sofia-based producer of off-kilter cinematic electronica.', confidence: 'low' },
  'DECONOFF': { genre: 'house / techno DJ sets', note: 'Cypriot DJ based in Brussels; SoundCloud and Resident Advisor only.', confidence: 'low' },
  'TTAVAS': { genre: 'Cypriot / Middle Eastern improvisation', note: 'Not a band — a Fengaros Music Village residency uniting Greek Cypriot, Turkish Cypriot and Middle Eastern musicians; new lineup each year.' },
  'ALEXA MICHAEL': { spotify_artist_id: '5TTFrRqwV0KNM6zhKGF9Mt', youtube_video_id: 'deJgN3XX6wQ', genre: 'jazzy soul-pop singer-songwriter', note: 'Cypriot songwriter; debut EP Different Worlds (2025).' },
  'A FLOWER TIDE': { spotify_artist_id: '0JFQ8uc7YGFhE1gihn7in4', youtube_video_id: 'iM6xDiH2Hno', bandcamp_url: 'https://aflowertide.bandcamp.com/', genre: 'immersive alt-pop trip-hop', note: 'Milan band; appeared on X Factor Italia 2024.' },
  'GOATMOTHER': { genre: 'experimental bass-heavy avant-pop', note: 'Dutch "post-genre, anti-structuralist avant-pop"; name collides with a US industrial project.', confidence: 'low' },
  'ANDROULA & DJ KATTA': { genre: 'experimental vocal / queer club', note: 'Androula Kafa, Nicosia vocalist and curator; DJ Katta plays hardcore, trance, techno, breakbeat.' },
  'MAVRU': { genre: 'unknown', note: 'No verifiable streaming or social presence found.', confidence: 'low' },
  'SPAIS GURLS': { genre: 'live podcast', note: 'Cypriot podcast about romance and spicy books — live interactive recording, not a band.' },

  // --- Friday ---
  'ARS NOTORIA': { spotify_artist_id: '44aSlHINEZeiEqNWwn8bgd', youtube_video_id: '7ndB76TQyu0', genre: 'avant-garde groove metal', note: 'Nicosia metal band formed 2020, Greek-language vocals.' },
  'ADRO': { youtube_video_id: 'WoJJ4qkRs4k', bandcamp_url: 'https://adrocy.bandcamp.com/', genre: 'progressive psychedelic rock', note: 'Cypriot band led by Andreas Georgiou; albums Monad (2022), Dyad (2025).' },
  'CENSOREDX': { genre: 'unknown — Theatre slot', note: 'Not on the official lineup page and no online trace; may be a late addition or misspelling.', confidence: 'low' },
  'SELAS_LETHE': { genre: 'dance performance, live electronics', note: 'Cypriot dance/performance collective presenting The River of Lethe with trombone and theremin.' },
  'SAIS': { spotify_artist_id: '2Kp7fjCNn7FHSIGeCBw7Co', youtube_video_id: 'GygVBv7cWmU', bandcamp_url: 'https://saisproject.bandcamp.com/album/yparxiaka-sais', genre: 'psychedelic stoner folk-rock', note: 'ΣaiΣ — Savvas Chrysostomou, sung in Cypriot dialect.' },
  'ELENI DRAKE': { spotify_artist_id: '2y7pPMQioLwMFUKhK9Pyow', youtube_video_id: 'FuWj_T9HOAE', bandcamp_url: 'https://elenidrake.bandcamp.com/', genre: 'dreamy indie folk-pop', note: 'British-Greek singer-songwriter from west London.' },
  'HOFE': { spotify_artist_id: '56J8Wxq3wAYCDHNwabMzrO', youtube_video_id: 'LWf28Sawamg', genre: 'Basque alt-pop, club electronic', note: 'Sings in Euskera and Spanish.' },
  'SCHIZODOLLS': { spotify_artist_id: '0zhHjYcxvmp2M3iQyzEjZg', bandcamp_url: 'https://schizodolls.bandcamp.com/', genre: 'grunge punk alt-rock', note: 'Quartet from Ioannina fronted by Zoe Evag; album Supermarket Music (2023).' },
  'THE SMALLEST CREATURE': { spotify_artist_id: '1X6ZqicWI2d8jfR011kRA5', youtube_video_id: 'CvDzN9iEQr4', bandcamp_url: 'https://thesmallestcreature.bandcamp.com/', genre: 'hypnotic 90s-rooted alt-rock', note: 'Larnaca quartet; album Magic Beans (2020).' },
  'PAIDI TRAVMA': { spotify_artist_id: '2O1coBb9idvPobTttQTpWT', youtube_video_id: 'B-I5uF1sof4', bandcamp_url: 'https://paiditrauma.bandcamp.com/', genre: 'Greek lo-fi indie art-pop', note: 'Παιδί Τραύμα — Athens project; concept album Μέινστριμ (2023).' },
  'ALEJJOS': { spotify_artist_id: '21cL2ri2Ji16ss4X3c5o95', youtube_video_id: 'OJW7Y1oVc1Q', genre: 'Cypriot electronic tech-house', note: 'Producer/DJ/percussionist; breakout single Kafkás.' },
  'ANIČKOO': { genre: 'experimental club electronica', note: 'Czech artist blending pop, Prague techno and jazz.' },
  'RIROITER': { genre: 'vinyl DJ set — 90s grunge/indie', note: 'Nicosia vinyl selector tied to Louvana Records; not a recording artist.' },
  'FFTWF': { genre: 'bass-heavy playful electronic', note: 'DJ — festival bills it as filthy bass, playful beats, trippy melodies.' },
  'LIAYRIO': { genre: 'atmospheric dreamy indie pop', note: 'Lara Abouzaide — cinematic soundscapes from looped vocals, piano and guitar.' },
  'BABYLON VIEWS': { genre: 'heavy Greek-language rock', note: 'Nicosia four-piece pairing heavy instrumentation with poetic Greek lyrics.' },
  'MUSSPELL': { spotify_artist_id: '0Lpgi7wyIavnWFEqgUVczz', youtube_video_id: 'id45hiqYgFs', bandcamp_url: 'https://musspell.bandcamp.com/', genre: 'melancholic dark dream-pop', note: 'Cluj-Napoca project with dual vocalists; album Unity All and All (2023).' },
  'FEVERFEW': { genre: 'angsty alternative rock', note: 'Young Cypriot band, Fengaros High 2026 finalist. (Same-name UK bands on Spotify are NOT this act.)', confidence: 'low' },
  'MAVA': { genre: 'Cypriot-dialect electronic hip-hop', note: 'Performs with Grimmy, rapping in Cypriot dialect over ravey beats.', confidence: 'low' },
  'SPHERICAL COW': { genre: 'electroacoustic experimental improv', note: 'Netherlands-based trio of Greek/Cypriot musicians, @spherical_cow.music.', confidence: 'low' },
  'BRATŘI': { spotify_artist_id: '6awECfAD0fQKYiQdWQsVxH', youtube_video_id: 'wh5zMzPr9oA', bandcamp_url: 'https://bratri.bandcamp.com/', genre: 'live techno, modular electronics', note: 'Prague twin brothers combining live drums with analogue synths.' },
  'NANA': { genre: 'DJ set, club electronic', note: 'Local Cypriot DJ; name collides with many unrelated artists.', confidence: 'low' },

  // --- Saturday ---
  'ENCARNITA IO': { spotify_artist_id: '0URwKTWVZChk6Nrq4zljho', genre: 'atmospheric alternative rock-pop', note: 'Cyprus-based singer-songwriter performing in Greek; debut album April 2026.' },
  'JAAVA': { spotify_artist_id: '2B1YJhDdII3n9rMA2c9rBs', genre: 'high-energy alternative pop-rock', note: 'Limassol four-piece fronted by vocalist Anastasia.' },
  'BOOKS ON WHEELS': { genre: 'Theatre programme', note: 'Not on the music lineup — a Theatre-stage literary/spoken slot.' },
  'NOFRENØ': { spotify_artist_id: '74qRLE0JjC6QvaKvd3TP2R', youtube_video_id: 'RBKgKfU_-o8', bandcamp_url: 'https://nofreno.bandcamp.com/', genre: 'Greek-language nu-metal alt-rock', note: 'Nicosia four-piece formed 2018; nu-metal, punk and prog with socially critical lyrics.' },
  'DEMETRIS MESIMERIS': { spotify_artist_id: '0p719GsCmShkdzknkYSp8A', youtube_video_id: '9w3H8KrePVU', bandcamp_url: 'https://demetrismesimeris.bandcamp.com/', genre: 'entehno folk-rock songwriting', note: 'Cypriot songwriter drawing on entehno and rembetiko; album Tik Tak (2025).' },
  'EISVOLEAS': { spotify_artist_id: '0qLu7eoKaRxK7MrwMCqFF1', youtube_video_id: 'FHSWVNPCw_w', genre: 'Greek hip-hop with folk tradition', note: 'Εισβολέας (Ilias Papanikolos) — Athens rapper blending Greek traditional music with rap.' },
  'INFECTED SYREN': { youtube_video_id: '83f1PPvmuus', bandcamp_url: 'https://infectedsyren.bandcamp.com/', genre: 'punk / metal / hardcore / psychobilly', note: 'Nicosia quartet formed 2011.' },
  'EXPE': { spotify_artist_id: '3kQYyGOJygTESAPFl95Us1', bandcamp_url: 'https://expe2.bandcamp.com/', genre: 'rap, trap, trip-hop', note: 'Rapper, vocalist and producer from Thessaloniki, active since 2010.' },
  'DELLA': { spotify_artist_id: '1CHKIhAVdDAKAxsTEjV7IZ', youtube_video_id: 'bXD6zKTTjc8', genre: 'alt-rock, dark dreamy pop', note: 'Della Savvidou — Nicosia/Liverpool; first Cypriot to win a Music Moves Europe Award.' },
  'BILLIE KARK': { spotify_artist_id: '6hDmweft2NBTVSnCPJ5pMc', youtube_video_id: 'teJ6mVN1fJ0', bandcamp_url: 'https://billiekark.bandcamp.com/', genre: 'electronic alt-pop, Greek folk', note: 'Athens-based artist and self-producer fusing electronics with Greek traditional idioms.' },
  'FOND MOTION': { genre: 'youth indie rock', note: 'Five-piece student band from The English School, Nicosia; Fengaros High 2025 finalists.', confidence: 'low' },
  'RAGEBAIT': { genre: 'experimental hardcore feminist punk', note: 'Netherlands-based project in the Amsterdam DIY scene.', confidence: 'low' },
  'NWAINA': { spotify_artist_id: '7oow2YrfkOYcWBoF9yIAgw', youtube_video_id: 'f6E1R7YATHI', genre: 'genre-blending feminist art-pop', note: 'Greek singer and performance artist mixing pop, avant-garde, world and hip-hop.' },
  'OGMIOS': { youtube_video_id: 'XvkJ2qMkX0E', bandcamp_url: 'https://pyrgatory.bandcamp.com/album/eosfora', genre: 'ritual experimental noise techno', note: 'Cypriot duo Andys Skordis and Panagiotis Mina, recording at Pyrgatory Studios.' },
  'ΣALAMANDRA': { genre: 'acid techno, tribal, garage', note: 'Brussels-based DJ from Cyprus with Serbian roots. (The "DJ Salamandra" Spotify profile is someone else.)', confidence: 'low' },
  '7ATE9': { genre: 'energetic pop-rock', note: 'Young Cypriot four-piece, Fengaros High 2026 finalist; no releases found.', confidence: 'low' },
  'NABUMA': { spotify_artist_id: '2JwWQmqqL3FXDisSf2S2gm', youtube_video_id: 'SZZOJBkbIOw', bandcamp_url: 'https://nabuma.bandcamp.com/album/tapedeck', genre: 'alternative R&B, neo-soul, jazz', note: 'Cypriot four-piece formed 2018 fronted by Nicole Ardanitou; EP Tapedeck (2024).' },
  'ALEXIS SUNDER': { youtube_video_id: '6GPK4cHVmHw', genre: '70s blue-eyed soul, funk, pop', note: 'Cypriot multi-instrumentalist based in Brussels, releases via Louvana Records.' },
  'COPPER CURIOS': { spotify_artist_id: '3kodCjSSjs00Fb7SpSsL78', youtube_video_id: 'kInPHOHqftc', bandcamp_url: 'https://protomaterial.bandcamp.com/album/flow-single', genre: 'experimental electronic chamber ambient', note: 'Cypriot duo Demetris Yiasemides and Eva Stavrou — contemporary classical meets electronica.' },
  'JUNIOR SP.': { spotify_artist_id: '3IPEnIJUnIJSpIEi0JdB5u', genre: 'drum & bass, breaks, liquid funk', note: 'Athens DJ/producer George Spiliopoulos, active since 1992; founded Innersense Productions.' },
  'KRAAAOUUUU': { genre: 'psychedelic Balkan / Middle Eastern', note: 'Cypriot selector and longtime Fengaros regular.' },
};
