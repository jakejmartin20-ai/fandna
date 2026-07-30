// FanDNA Bundesliga (BL) - fingerprint sport. 18 clubs, 2026-27 composition.
// teamDims (the per-club landing), scoring (the module cells), moduleQuestions are the engine.
// teams/archetypes/archetypeDesc/teamTextColors/greats/milestones/vitalStats/nearlyGot/CARD_BADGES/
// squadUrls are craft + display. US English, no em-dashes in user-facing copy. Keys = code3.

const teams = {
  BAY: { code3:"BAY", kitType:"solid", secondaryColor:null, name:"Bayern Munich", emoji:"🔴", color:"#DC052D",
    tagline:"Thirty-four titles in, you treat the Meisterschale as property, not a prize.",
    desc:"You do not romanticize the chase. Winning is the baseline you start from, and a season that ends in anything less reads as a failure to be reviewed, not a near-miss to be cherished. People mistake that for arrogance. You call it standards. You came to see something done to the limit of how well it can be done, and then held right there, season upon season. Bayern is the closest thing German football has to a permanent verdict, and standing on the right side of it has never required an explanation.",
    why:[
      "A year gets measured by what you won. Not by how interesting the journey was, and you stopped explaining that to people a long time ago.",
      "Dominance is something you engineer and then maintain. Sentiment does not come into it much.",
      "Given the choice between being the expected outcome and being the romantic story, you take the expected outcome every time.",
    ],
    note:"Thirty-four Bundesliga titles and eleven in a row from 2013 to 2023, the longest championship streak in any of Europe's top five leagues. Making dominance look routine is the hardest thing in the sport. That is very Bayern.",
    kit:"https://fcbayern.com/en/shop" },

  HSV: { code3:"HSV", kitType:"duo", secondaryColor:"#003D7C", name:"Hamburger SV", emoji:"🦕", color:"#FFFFFF",
    tagline:"The last dinosaur, ever-present, until the clock stopped and you came back.",
    desc:"You built your sense of yourself on a record nobody else could claim, and when it finally broke it shook you to the foundation. But you did not disappear. You went down, you sat in the second tier longer than a club your size should ever have to, and you climbed back, because the alternative was unthinkable. There is a particular pride in having been permanent, and a particular stubbornness in refusing to let a fall be the end of the story. You carry both.",
    why:[
      "The unbroken record was the identity. When it finally broke, it genuinely knocked you sideways, and that is a measure of how much it meant.",
      "You sat through the drop. Supporting somebody else never entered your head, not once.",
      "You feel it hard in both directions. There is nothing cool or detached about how you follow this.",
    ],
    note:"A stadium clock once counted Hamburg's unbroken years in the top flight, the only club never relegated since the Bundesliga began. It stopped in 2018. They returned in 2025, and the clock is the most Hamburg thing there is.",
    kit:"https://shop.hsv.de" },

  VFB: { code3:"VFB", kitType:"sash", secondaryColor:"#E32219", name:"VfB Stuttgart", emoji:"⚙️", color:"#FFFFFF",
    tagline:"You wear the Brustring like a blueprint and build like an engineer.",
    desc:"You trust the work. Not the lucky bounce or the sudden inspiration, but the slow, deliberate building of something that holds together under pressure. You come from a place that makes the best engines in the world and treats precision as a kind of morality, and it shows in how you support: you want it done properly, improved season on season, with a plan you can see. When it clicks, it is not a fluke. It is the design finally running the way you always believed it could.",
    why:[
      "You would rather build the thing properly than throw it together and hope. The method is the point.",
      "There is real ambition underneath it. You are not content to drift, you want to climb, and you trust the work to get you there.",
      "Well-made beats unpredictable, as far as you are concerned.",
    ],
    note:"The red Brustring, the hooped band across the chest, has been Stuttgart's mark for a century. The club sits in the heart of Swabia, home to Mercedes and Porsche, where doing it right is close to a regional creed.",
    kit:"https://shop.vfb.de" },

  BMG: { code3:"BMG", kitType:"duo", secondaryColor:"#1A1A1A", name:"Borussia Mönchengladbach", emoji:"🐎", color:"#FFFFFF",
    tagline:"You were the Foals who ran Bayern close in the seventies, and you still live on it.",
    desc:"Your golden age is behind you, and you would not trade it for anyone else's present. There was a decade when you were the most thrilling team in Europe, young and fearless and beautiful to watch, and that memory is not a weight you carry but a light you steer by. You know exactly who you are because you know exactly who you were. The trophies stopped coming, but the identity never did, and you would rather be a club with a soul and a history than a club with a balance sheet.",
    why:[
      "What this club once was still defines what it is, and you carry that gladly rather than as a burden.",
      "The glory years ended a long time ago and you never wavered. It was never really about the table. It was about the idea of the thing.",
    ],
    note:"Die Fohlen, the Foals, named for the young, attacking side that won five titles in the 1970s and pushed the great Bayern teams to the limit. Allan Simonsen won the Ballon d'Or here in 1977. The name still fits.",
    kit:"https://shop.borussia.de" },

  SVW: { code3:"SVW", kitType:"solid", secondaryColor:null, name:"Werder Bremen", emoji:"🟢", color:"#1D9053",
    tagline:"Green and white for life, you never chased the spotlight and never left.",
    desc:"You are loyal in the quiet, undramatic way that does not make headlines. No reinvention, no chasing the fashion, no leaving when it got hard. Green and white, the same as it ever was, through the good years and the long stretches of mid-table that would have peeled away a less committed fan. You do not need the club to be glamorous. You need it to be yours, and it has been, every season, without you ever having to think twice about it.",
    why:[
      "Green and white is not a preference you hold. It is a fact about you.",
      "The colors, the city, the continuity. You would take all of that over a trophy.",
      "The spotlight has never appealed. Steady and yours is exactly enough.",
    ],
    note:"Werder won four German championships and the 2004 double under Thomas Schaaf, playing some of the most attacking football the league has seen. Lebenslang Gruen-Weiss, lifelong green and white, is the motto, and Bremen fans mean it literally.",
    kit:"https://shop.werder.de" },

  RBL: { code3:"RBL", kitType:"duo", secondaryColor:"#DD0741", name:"RB Leipzig", emoji:"🐂", color:"#FFFFFF",
    tagline:"You were built to win fast, and you let the whole country resent you for it.",
    desc:"You were not handed a hundred years of tradition, so you decided to build a winner from scratch and never apologized for the method. You judge things by whether they work, not by how long they have existed, and you have a thick skin about the people who hate you for it. Let them. While the purists write their columns, you keep qualifying for Europe and signing the next young talent before anyone else has noticed him. Results are the argument, and you are comfortable making it.",
    why:[
      "You want to win now, by whatever route works best, and you do not think a long history is a prerequisite for deserving it.",
      "The model and the recruitment earn your trust. Nostalgia does not.",
      "Looking backward has never held much for you, and you are not troubled by who that annoys.",
    ],
    note:"Founded in 2009 and in the Champions League within a decade, with two German Cups already in the cabinet. No club in modern German football is more efficient, or more resented, and Leipzig wears both facts lightly.",
    kit:"https://shop.rbleipzig.com" },

  TSG: { code3:"TSG", kitType:"solid", secondaryColor:null, name:"TSG Hoffenheim", emoji:"🔵", color:"#1C63B8",
    tagline:"You trust the model and the method, not the century of history you never had.",
    desc:"You trust what is built and measured. Not the lucky bounce or the inherited birthright, but the plan run properly, the model that holds up when you check it, the side put together by design rather than handed down. You came up the modern way, on method and conviction and a refusal to accept that a place with no history could not build one of its own. People want every good thing to be a hundred years old before it counts. You never needed it to be. What you trust is whether the thing works, and yours does.",
    why:[
      "The plan beats the lucky result, and a calm well-run season beats a dramatic one. You back the method and you sleep fine.",
      "There is no century of history here to answer to, and you find that freeing rather than empty.",
    ],
    note:"Powered from the village of Sinsheim by SAP co-founder Dietmar Hopp, Hoffenheim rose from amateur football to the Bundesliga and into Europe. Its solar-roofed stadium became Europe's first zero-waste arena in 2023.",
    kit:"https://shop.tsg-hoffenheim.de" },

  B04: { code3:"B04", kitType:"duo", secondaryColor:"#000000", name:"Bayer Leverkusen", emoji:"💊", color:"#E32221",
    tagline:"You were Neverkusen for thirty years, then went a whole season unbeaten.",
    desc:"You spent decades as the team that came second, the one that found a way to fall short with the finish line in sight, and the nickname stuck like a curse. You kept turning up anyway. Then it broke, all at once, in a season so complete that nobody could call you nearly-men ever again. You know what it is to do everything right and still not win, which is exactly why you understand that when it finally arrives, you do not let go of it.",
    why:[
      "You believe in the well-run project even through the years it does not pay off. That is a harder faith than it sounds.",
      "The near-misses never dimmed what you were aiming at. You kept going until it finally landed.",
      "Thirty years of the runner-up label, and you never abandoned the way you wanted to do it.",
    ],
    note:"The Werkself, the works team of the Bayer pharmaceutical company. After decades as nearly-men they went the entire 2023-24 season unbeaten under Xabi Alonso to win a first ever Bundesliga, the league's only invincible champions.",
    kit:"https://shop.bayer04.de" },

  S04: { code3:"S04", kitType:"solid", secondaryColor:null, name:"Schalke 04", emoji:"⛏️", color:"#004B9B",
    tagline:"You have not won since 1958, and still all of Gelsenkirchen pours into the stand.",
    desc:"Your people came up from the mines, and you support the way they worked: hard, together, no airs. You have no patience for glory-hunters, or for fans who only turn up when it is going well. Down here loyalty isn't a slogan, it's the whole inheritance. Gelsenkirchen is not a place anyone moves to for the weather or the prospects, and that is exactly why the club means what it means. Sixty-odd years without a championship would have emptied a lesser stand. Yours just sings louder.",
    why:[
      "This was handed to you, not chosen. Walking away has never been on the table.",
      "You belong to a collective, not a brand.",
      "The point is the people in the stand next to you and the shared graft. The we, well ahead of the I.",
      "Where you are from is not a detail. It is the reason any of this matters.",
    ],
    note:"Seven German championships, every one before the Bundesliga existed. No league title since 1958, the longest wait of any old giant, and the Veltins-Arena still fills. That refusal to fade is very Schalke.",
    kit:"https://shop.schalke04.de" },

  BVB: { code3:"BVB", kitType:"duo", secondaryColor:"#000000", name:"Borussia Dortmund", emoji:"🟡", color:"#FDE100",
    tagline:"You stand on the Yellow Wall, where the feeling matters more than the result.",
    desc:"You go to feel something, and you let it out. Eighty thousand people on one terrace, the biggest standing stand in Europe, all giving everything at once, is not a backdrop to the football for you; it is the football. You have had your heart broken on the biggest nights, more than once, with the prize in touching distance, and you went back the next week and roared just as loud. The trophy would be nice. The feeling is the reason you keep coming.",
    why:[
      "You feel it at full volume. A quiet matchday would feel like one you wasted.",
      "The thousands around you, all of it landing at the same moment. That is most of the appeal.",
      "You take the heartbreak along with the highs.",
      "The intensity was always the reason, and you knew what it cost going in.",
    ],
    note:"The Suedtribuene, the Yellow Wall, holds nearly 25,000 standing fans, the largest terrace in European football. Dortmund have lost two Champions League finals in agonizing fashion, and the Wall sells out regardless.",
    kit:"https://www.bvbonlineshop.com" },

  SCF: { code3:"SCF", kitType:"duo", secondaryColor:"#000000", name:"SC Freiburg", emoji:"🌲", color:"#E2001A",
    tagline:"Your stadium runs on sunlight and your club on patience, and it keeps working.",
    desc:"You do it the right way and you do not make a fuss about it. A small budget, a clear plan, continuity where everyone else churns, and somehow the results keep coming. You are not interested in spending your way to anything or chasing a quick fix that betrays who you are. You would rather build something sustainable and sound and be quietly proud of it than buy a season of noise. In the Black Forest, doing it properly is not a strategy. It is the point.",
    why:[
      "The patient build beats the splashy shortcut, and you have never been tempted otherwise.",
      "Stability, continuity, a plan that actually holds. Drama has nothing to offer you.",
      "Your loyalty is to a way of doing things. You would rather get there honestly than win ugly and lose track of yourself.",
    ],
    note:"Freiburg's Europa-Park Stadion, opened in 2021, is roofed in solar panels. The club kept one head coach, Christian Streich, for thirteen years while bigger clubs sacked theirs by the handful. Doing it the steady way is the whole identity.",
    kit:"https://shop.scfreiburg.com" },

  FCA: { code3:"FCA", kitType:"duo", secondaryColor:"#00623A", name:"FC Augsburg", emoji:"🟢", color:"#C8102E",
    tagline:"You have never won a thing, never truly feared the drop, and that suits you fine.",
    desc:"You made peace with what the club is a long time ago, and there is real freedom in it. No glory to chase, no relegation to dread most years, just steady, unbothered top-flight football in a city that was old and wealthy when most of these clubs did not exist. You do not need a trophy to make it worthwhile. You like your team, you like your Saturday, and you have stopped pretending you secretly want the rollercoaster. Content is not a failure setting. For you it is the right one.",
    why:[
      "You are not chasing glory and you are honest about it. Belonging at this level is genuinely enough.",
      "A calm mid-table season over a dramatic one, every time. The city and the routine matter more to you than silverware ever would.",
    ],
    note:"Augsburg is one of Germany's oldest cities, home of the Renaissance Fugger banking dynasty. The club reached the top flight for the first time in 2011 and has mostly stayed there without fuss, which is exactly how its fans like it.",
    kit:"https://shop.fcaugsburg.de" },

  KOE: { code3:"KOE", kitType:"duo", secondaryColor:"#E2261F", name:"1. FC Köln", emoji:"🐐", color:"#FFFFFF",
    tagline:"Up, down, up again, and you would not swap the chaos. Hennes the goat watches every fall.",
    desc:"You love it precisely because it never stops putting you through it. Promoted, relegated, promoted again, a club that cannot sit still, and you would not swap the chaos for a stable mid-table existence if you could. This is a carnival city, and the football matches the temperament: feel everything, laugh through the worst of it, and turn up again next week regardless. Your loyalty does not depend on the league you are in. It is unconditional, and a little unhinged, and entirely the point.",
    why:[
      "The yo-yo years would have broken most people. They bonded you tighter.",
      "You feel every promotion and every relegation completely, and you would not want it any other way.",
      "The city, the carnival, the singing. That is what you actually turn up for.",
    ],
    note:"Köln have bounced between the divisions more than almost any big German club. Their mascot is a live billy goat named Hennes, and the city's carnival spirit runs straight through the terraces of the RheinEnergieStadion.",
    kit:"https://shop.fc.de" },

  M05: { code3:"M05", kitType:"solid", secondaryColor:null, name:"Mainz 05", emoji:"🎭", color:"#C3141E",
    tagline:"Carnival raised you to laugh first, and you out-think richer clubs for the fun of it.",
    desc:"You have always been the smaller, smarter one in the room, and you turned that into a personality rather than a complaint. A carnival city's club, you take the football seriously and yourselves not at all, and you have made a habit of beating sides with three times the budget by being cleverer and harder-working and a little bit funnier about the whole thing. Lightness is not the same as not caring. For you it is how you survive at this level, and how you enjoy it.",
    why:[
      "When it goes wrong you laugh first. That is not deflection, it is genuinely how you cope.",
      "You out-think and out-work people rather than out-spending them, mostly because out-spending them was never an option.",
      "The ego stays small and the ambition stays sensible. Getting more out of it than you had any right to is the whole satisfaction.",
    ],
    note:"Mainz is a capital of German carnival, and the club's wit is part of its identity. Jürgen Klopp spent his entire playing career here and began his management here, building the gegenpressing style that later conquered Europe.",
    kit:"https://shop.mainz05.de" },

  FCU: { code3:"FCU", kitType:"solid", secondaryColor:null, name:"Union Berlin", emoji:"⚒️", color:"#EE1C25",
    tagline:"Your fans built the stand with their own hands and gave blood to save the club.",
    desc:"You believe a club belongs to the people who carry it, because yours literally would not exist without them. When there was no money, the supporters donated blood and sold it to fund the club. When the stadium needed rebuilding, they did the labor themselves, tens of thousands of volunteer hours, with their own tools. You do not see yourself as a customer of a football club. You see yourself as a part-owner of something you helped build, in a corner of the east that the rest of the game overlooked, and you are fiercely proud of every bit of it.",
    why:[
      "The club is its people, and you count yourself among the builders rather than the audience.",
      "You have given time, labor, and literal blood.",
      "Walking away was never conceivable, and it was never framed as loyalty. It was just what you do.",
      "What you made with your own hands means more than anything that could have been handed to you.",
    ],
    note:"In 2004 Union fans ran a Bleed for Union campaign, donating blood to raise money for the club. In 2008-09 they rebuilt the Stadion An der Alten Försterei themselves, contributing over 140,000 hours of volunteer labor.",
    kit:"https://shop.fc-union-berlin.de" },

  ELV: { code3:"ELV", kitType:"solid", secondaryColor:null, name:"SV Elversberg", emoji:"🌳", color:"#1A1A1A",
    tagline:"You are a Saarland village of thirteen thousand that woke up sharing a league with Bayern.",
    desc:"You love being the team nobody saw coming. A village in the Saarland with a ground that still has terraces and a name borrowed from an old lime tree has no business in the same division as Bayern Munich, and that is exactly what makes it the best story in the league. You are not weighed down by expectation or history or anyone's idea of where you belong. You get to play with house money and prove the doubters wrong every single week, and there is nothing in football quite as fun as that.",
    why:[
      "Nobody expected you here. Proving that wrong is most of the thrill.",
      "With nothing to lose you play free, and you would not trade that lightness for a bigger reputation.",
      "The improbable ride, the wild swings, the whole fairytale of it. That is what you signed up for.",
    ],
    note:"Spiesen-Elversberg, population around thirteen thousand, is the smallest municipality ever represented in the German top flight. The stadium is named for the Kaiserlinde, a near-century-old lime tree felled by a cyclone in 2015.",
    kit:"https://shop.sv07elversberg.de" },

  SCP: { code3:"SCP", kitType:"duo", secondaryColor:"#000000", name:"SC Paderborn", emoji:"🔵", color:"#003F87",
    tagline:"You yo-yo up from East Westphalia, and nobody outside it ever learns your name.",
    desc:"You are used to being overlooked, and you have stopped minding. A small club from a corner of East Westphalia that most of the country could not find on a map, you go up, you come down, you go up again, and you keep turning up unfashionable and unbothered. You do not have the history or the glamour or the famous names, and you have made your peace with all of it. What you have is a stubborn refusal to know your place, and that has carried you further than anyone outside Paderborn ever expected.",
    why:[
      "Being doubted does not insult you. It fuels you, and low expectations have always suited the way you operate.",
      "The yo-yo between divisions does not shake you. Punching above your weight is the whole achievement, and that is just how your story goes.",
    ],
    note:"Paderborn, a university and former computer-industry town in East Westphalia, has bounced between the top two divisions repeatedly. Once, in 2014, it briefly topped the Bundesliga, which remains one of the league's unlikeliest sights.",
    kit:"https://shop.scpaderborn07.de" },

  SGE: { code3:"SGE", kitType:"duo", secondaryColor:"#E1000F", name:"Eintracht Frankfurt", emoji:"🦅", color:"#1A1A1A",
    tagline:"Your ultras travel like an army and answer to no one who runs the game.",
    desc:"You do not accept things just because that is how they are. When the people who run the game push too far, you push back, with banners and protest and a refusal to be treated as a customer, and you travel in numbers that turn other clubs' grounds into yours for a night. There is a current of defiance in everything you do. You are loud, political, fiercely independent, and you would rather make trouble for the powerful than quietly go along with whatever modern football decides you should want.",
    why:[
      "You are a resister by temperament. When you do not like how something is being run, you make noise and try to change it.",
      "You move as a traveling mass, and the crowd you belong to is the entire point.",
      "The big unpredictable nights are what you live for, and the energy that comes with them.",
    ],
    note:"Frankfurt's support is among the most fervent and politically active in Germany, a fixture of fan protests against modern football. Tens of thousands traveled to Seville for the 2022 Europa League final, which the club won.",
    kit:"https://shop.eintracht.de" },
};

// Per-club, per-dimension flavour for the result's 'where you differ' line (display-only; drawn
// from each club's own why-copy). Merged onto teams below; the scoring path never reads it.
const teamEdge = {
  BAY: {ambition:"a club that measures a year by the trophy, not the journey, and makes no apology for it", process:"structure and preparation over sentiment, dominance engineered and then maintained", chaos:"the steady, expected outcome rather than the romantic underdog story"},
  HSV: {rootedness:"an identity built on a long, unbroken record, a fall that genuinely rocks it for how much it meant", loyalty:"not flinching in the lean years, sat through the drop and never once thinking of anyone else", emotion:"highs and lows felt hard, real emotion rather than the cool detachment of a club that expects to win"},
  VFB: {process:"the method, the steady build, the thing constructed to last rather than thrown together", ambition:"real and rising, not content to drift, trusting the work to take it there", chaos:"the well-built side rather than the unpredictable one"},
  BMG: {rootedness:"what the club once was defining what it is, carried gladly", loyalty:"steady and unconditional, the glory years long gone and never once wavered", emotion:"the romance of it, about the idea of the club and what it once meant, not the table"},
  SVW: {loyalty:"bone-deep and lifelong, green and white a fact rather than a preference", rootedness:"the colors, the city and the continuity, all mattering more than any trophy", chaos:"steady and its own, exactly enough, with no need for the spotlight"},
  RBL: {ambition:"high and unsentimental, wanting to win now by the most effective route, history no prerequisite", process:"the model, the recruitment and the system, trusted over any nostalgia", rootedness:"low by choice, looking forward rather than back, and not minding who that annoys"},
  TSG: {process:"the plan, the model and the steady build, over the lucky result", chaos:"a calm, well-engineered season rather than a dramatic one", rootedness:"young and unburdened by history, a lightness it finds freeing rather than empty"},
  B04: {process:"the structured, well-run project, believed in even through the years it did not pay off", ambition:"never dimmed through the near-misses, kept aiming at the top until it finally arrived"},
  S04: {loyalty:"handed down rather than chosen, walking away never once dreamed of", community:"a collective rather than a brand, the people in the stand beside you, the we over the I", rootedness:"rooted to a place and its history, where it is from the reason any of it matters"},
  BVB: {emotion:"felt at full volume, a quiet matchday a wasted one", community:"the thousands around you, all feeling it together", chaos:"the heartbreak taken with the highs, the intensity the whole appeal"},
  SCF: {process:"the patient, principled build over the splashy shortcut", chaos:"stability, continuity and a plan that holds, not drama", loyalty:"a loyalty to a way of doing things, getting there honestly rather than winning ugly and losing itself"},
  FCA: {ambition:"genuinely low and honest about it, belonging at this level being enough", chaos:"a calm mid-table season over a dramatic one, every time", rootedness:"quiet and real, the city and the routine mattering more than any silverware"},
  KOE: {loyalty:"unconditional, the yo-yo years that would break others binding it tighter", chaos:"the yo-yo years lived completely, promotion and relegation felt and never traded away", emotion:"hot, every promotion and relegation felt completely and wanted no other way", community:"the city, the carnival and the singing, the collective and its mood"},
  M05: {process:"out-thinking and out-working opponents rather than out-spending them, because it cannot out-spend them", ambition:"sensible, the ego small, overachieving its means the whole satisfaction"},
  FCU: {community:"the club that is its people, its builders rather than its audience", loyalty:"absolute, time and labor and literal blood given, walking away never conceivable"},
  ELV: {chaos:"the improbable ride, the wild swings and the fairytale, exactly what it signed up for", ambition:"nothing to lose and playing free, a lightness it would never trade"},
  SCP: {ambition:"modest and grounded, punching above its weight the whole achievement", chaos:"the yo-yo between divisions that does not shake it, just how its story goes"},
  SGE: {community:"a traveling mass, the crowd it belongs to the whole point", emotion:"living for the big nights and feeling every one of them all the way down", chaos:"an appetite for the unpredictable, the volatility taken as part of the deal"},
};
Object.keys(teamEdge).forEach(k=>{ if(teams[k]) teams[k].edge = teamEdge[k]; });


const archetypes = {
  BAY:"Der Rekordmeister", HSV:"Der Dino", VFB:"Der Brustring", BMG:"Die Fohlen", SVW:"Die Grün-Weißen",
  RBL:"Die Roten Bullen", TSG:"Der Dorfklub", B04:"Die Werkself", S04:"Die Knappen", BVB:"Die Gelbe Wand",
  SCF:"Die Breisgauer", FCA:"Die Fuggerstädter", KOE:"Die Geißböcke", M05:"Die Nullfünfer", FCU:"Die Eisernen",
  ELV:"Die Kaiserlinde", SCP:"Die Ostwestfalen", SGE:"Die Adler",
};

const archetypeDesc = {
  BAY:"You start from winning and treat anything less as a fault to fix. Der Rekordmeister, the record champion, is the standard the rest of the country measures itself against, and you have never apologized for being it.",
  HSV:"Your stability came from a record nobody else could claim, and a fall shook it to the core. Der Dino, the dinosaur, was the league's last ever-present, and like you it refused to let going down be the end.",
  VFB:"You trust the well-built thing over the lucky one. The Brustring, the red band across the chest, is Stuttgart's century-old mark, worn in the Swabian heartland where doing it with precision is close to a moral code.",
  BMG:"You carry your best chapter as a light to steer by, not a weight. Die Fohlen, the Foals, were the fearless young side that lit up the seventies, and the name still fits people who know exactly who they were.",
  SVW:"You stay, quietly and for life, without needing the spotlight. Die Grün-Weißen, the green-and-whites, is less a nickname than a fact about you: lifelong, unglamorous, and entirely loyal.",
  RBL:"You judge things by whether they work, not by how old they are, and you have a thick skin about the people who resent it. Die Roten Bullen, the Red Bulls, built a winner from nothing and never apologized for the method.",
  TSG:"You trust the method and the model over the inherited name, and you build rather than wait to be handed one. Der Dorfklub, the village club, put a Bundesliga side where history said there could be none, and you are at peace with how it was done.",
  B04:"You know what it is to do everything right and still fall short, season after season, until it finally broke. Die Werkself, the works team, were the eternal nearly-men, and you do not let go of what you waited so long to win.",
  S04:"You take pride in unglamorous, dependable work and you stay through the lean years. Die Knappen means the miners, the men who went down the Gelsenkirchen shafts, and the club carries their creed: loyalty is owed, glory is earned.",
  BVB:"You go to feel something and you let it out, with the thousands around you. Die Gelbe Wand, the Yellow Wall, is the largest terrace in European football, built for people who believe the feeling is the whole point.",
  SCF:"You do it the right way and you do not make a fuss about it. Die Breisgauer come from the Black Forest, where patience, continuity, and a sustainable plan beat the splashy shortcut, and somehow keep on working.",
  FCA:"You have made peace with the club for what it is, and there is freedom in that. Die Fuggerstädter take their name from Augsburg's Renaissance banking dynasty, and they want steady top-flight football, not a rollercoaster.",
  KOE:"You love it precisely because it never stops putting you through it. Die Geißböcke, the Billy Goats, named for the mascot Hennes, ride the carnival city's mood up and down the divisions and turn up regardless.",
  M05:"You take the football seriously and yourself not at all. Die Nullfünfer, the 05ers, are the carnival city's club, the place Klopp learned his trade, beating richer sides by being cleverer and a little funnier about it.",
  FCU:"You believe the club belongs to the people who carry it, because yours would not exist without them. Die Eisernen, the Iron Ones, gave blood and labor to save and rebuild Union, and they count themselves builders, not customers.",
  ELV:"You love being the team nobody saw coming. Die Kaiserlinde, named for the old lime tree by the ground, is the smallest town ever in the top flight, playing with house money and proving the doubters wrong every week.",
  SCP:"You are used to being overlooked and you have stopped minding. Die Ostwestfalen, from a corner most of the country could not find on a map, go up and down and keep turning up, unfashionable and unbothered.",
  SGE:"You do not accept things just because that is how they are. Die Adler, the Eagles, carry one of Germany's most fervent and political supports, traveling in armies and pushing back against whatever modern football decides you should want.",
};

const teamTextColors = {
  BAY:"#F2607A", HSV:"#6F9BD6", VFB:"#D8D8D8", BMG:"#CFCFCF", SVW:"#5FC58C", RBL:"#F2657F", TSG:"#6BA3E0",
  B04:"#F0686A", S04:"#5B9BD5", BVB:"#F4D93C", SCF:"#F2606E", FCA:"#E66A78", KOE:"#F2666C", M05:"#E66A72",
  FCU:"#F2666C", ELV:"#BBBBBB", SCP:"#5B8FD0", SGE:"#F2606E",
};

// All-time greats. Elversberg and Paderborn carry no greats (none exist); they fall back to milestones.
const greats = {
  BAY:[
    {name:"Franz Beckenbauer", years:"1964-1977", note:"the libero who reinvented the position and won everything there was"},
    {name:"Gerd Müller", years:"1964-1979", note:"der Bomber, 365 Bundesliga goals"},
    {name:"Oliver Kahn", years:"1994-2008", note:"the relentless wall in goal"},
    {name:"Thomas Müller", years:"2008-2025", note:"the one-club Raumdeuter who won it all"},
  ],
  HSV:[
    {name:"Uwe Seeler", years:"1953-1972", note:"the eternal one-club idol who refused every offer to leave"},
    {name:"Kevin Keegan", years:"1977-1980", note:"the European Footballer of the Year who chose Hamburg"},
    {name:"Manfred Kaltz", years:"1971-1991", note:"the overlapping full-back and the banana cross"},
    {name:"Rafael van der Vaart", years:"2005-2008, 2012-2015", note:"the playmaker the city adored"},
  ],
  VFB:[
    {name:"Jürgen Klinsmann", years:"1984-1989", note:"the local striker who became a World Cup winner"},
    {name:"Krassimir Balakov", years:"1995-2003", note:"the playmaker of the magisches Dreieck"},
    {name:"Sami Khedira", years:"2006-2010", note:"the academy product who anchored a title"},
    {name:"Mario Gómez", years:"2003-2009", note:"the penalty-box finisher who came through the ranks"},
  ],
  BMG:[
    {name:"Günter Netzer", years:"1963-1973", note:"the long-haired genius who ran the seventies"},
    {name:"Berti Vogts", years:"1965-1979", note:"der Terrier, a one-club World Cup winner"},
    {name:"Jupp Heynckes", years:"1964-1967, 1970-1978", note:"the goalscorer of the great side"},
    {name:"Allan Simonsen", years:"1972-1979", note:"the Ballon d'Or winner in green"},
  ],
  SVW:[
    {name:"Marco Bode", years:"1989-2002", note:"the loyal one-club winger"},
    {name:"Claudio Pizarro", years:"2001-2007, 2008-2012, 2015-2020", note:"the beloved record foreign scorer"},
    {name:"Ailton", years:"1998-2004", note:"the striker who fired the 2004 double"},
    {name:"Mesut Özil", years:"2008-2010", note:"the playmaker who broke through on the Weser"},
  ],
  RBL:[
    {name:"Emil Forsberg", years:"2015-2023", note:"the playmaker who became the club's first true icon"},
    {name:"Timo Werner", years:"2016-2020", note:"the pace and goals that announced them"},
    {name:"Yussuf Poulsen", years:"2013-2024", note:"the loyalist who rose with the club from the lower leagues"},
  ],
  TSG:[
    {name:"Andrej Kramarić", years:"2016-2024", note:"the club's record scorer and long-serving talisman"},
    {name:"Roberto Firmino", years:"2011-2015", note:"the playmaker who broke out here before Liverpool"},
    {name:"Kevin Volland", years:"2014-2016", note:"the forward of the breakthrough years"},
  ],
  B04:[
    {name:"Ulf Kirsten", years:"1990-2003", note:"the prolific finisher of the nearly-men era"},
    {name:"Michael Ballack", years:"1999-2002", note:"the midfielder of the treble-of-runners-up season"},
    {name:"Stefan Kießling", years:"2006-2018", note:"the loyal one-club striker"},
    {name:"Florian Wirtz", years:"2020-2025", note:"the academy jewel who drove the invincible title"},
  ],
  S04:[
    {name:"Ernst Kuzorra", years:"1924-1950", note:"the inter-war talisman who made Schalke the first great German club"},
    {name:"Klaus Fischer", years:"1970-1984", note:"the overhead-kick king and Ruhr folk hero"},
    {name:"Olaf Thon", years:"1983-1988, 1994-2002", note:"the local boy who captained the 1997 UEFA Cup win"},
    {name:"Klaas-Jan Huntelaar", years:"2010-2017", note:"126 goals in royal blue"},
  ],
  BVB:[
    {name:"Matthias Sammer", years:"1993-1998", note:"the sweeper who won a European Cup and a Ballon d'Or"},
    {name:"Marco Reus", years:"2012-2024", note:"the local hero who stayed through every near-miss"},
    {name:"Lars Ricken", years:"1995-2008", note:"the substitute whose chip won the 1997 Champions League"},
    {name:"Michael Zorc", years:"1981-1998", note:"der ewige Michael, a one-club captain"},
  ],
  SCF:[
    {name:"Nils Petersen", years:"2015-2023", note:"the loyal club-record scorer and ultimate super-sub"},
    {name:"Vincenzo Grifo", years:"2015-2017, 2019-2024", note:"the set-piece artist and modern icon"},
    {name:"Papiss Cissé", years:"2010-2012", note:"the striker who lit up the Dreisamstadion"},
  ],
  FCA:[
    {name:"Daniel Baier", years:"2010-2020", note:"the one-club midfield metronome"},
    {name:"Sascha Mölders", years:"2011-2015", note:"the cult striker of the early Bundesliga years"},
    {name:"André Hahn", years:"2013-2016, 2018-2023", note:"the loyal forward across two spells"},
  ],
  KOE:[
    {name:"Wolfgang Overath", years:"1962-1977", note:"the one-club playmaker and 1964 champion"},
    {name:"Lukas Podolski", years:"2003-2006, 2009-2012", note:"the local hero who kept coming home"},
    {name:"Toni Schumacher", years:"1972-1987", note:"the formidable goalkeeper"},
    {name:"Anthony Modeste", years:"2015-2017, 2018-2022", note:"the cult goalscorer"},
  ],
  M05:[
    {name:"Jürgen Klopp", years:"1990-2008", note:"player then coach, the defining figure of the modern club"},
    {name:"André Schürrle", years:"2009-2011", note:"the academy product who became a World Cup winner"},
    {name:"Shinji Okazaki", years:"2013-2015", note:"the tireless striker who charmed the city"},
  ],
  FCU:[
    {name:"Torsten Mattuschka", years:"2005-2014, 2016-2017", note:"the swaggering free-kick icon of the rise"},
    {name:"Christopher Trimmel", years:"2014-2024", note:"the long-serving, tattoo-artist captain"},
    {name:"Sebastian Polter", years:"2014-2016, 2019-2021", note:"the bustling striker of the promotion years"},
  ],
  SGE:[
    {name:"Alex Meier", years:"2004-2018", note:"Fußballgott, the cult one-club idol"},
    {name:"Anthony Yeboah", years:"1990-1995", note:"the thunderous striker"},
    {name:"Jürgen Grabowski", years:"1965-1980", note:"the one-club winger and 1974 World Cup winner"},
    {name:"Bernd Hölzenbein", years:"1967-1981", note:"the forward of the great seventies side"},
  ],
};

// Club milestones: fallback for clubs with no all-time greats.
const milestones = {
  ELV:[
    "First promotion to the Bundesliga (2026)",
    "Climbed from the 3. Liga to the top flight in four years",
  ],
  SCP:[
    "Promoted to the Bundesliga via the play-off (2026)",
    "Back in the top flight for a third time, with no major honors",
  ],
};

const vitalStats = {
  BAY:{nickname:"Der Rekordmeister", founded:"1900", stadium:"Allianz Arena", city:"Munich", capacity:"75,024", colors:"Red & white", titles:"34 Bundesliga titles", lastTitle:"2026"},
  HSV:{nickname:"Der Dino", founded:"1887", stadium:"Volksparkstadion", city:"Hamburg", capacity:"57,000", colors:"Blue, white & black", titles:"6 German championships", lastTitle:"1983"},
  VFB:{nickname:"Der Brustring", founded:"1893", stadium:"MHPArena", city:"Stuttgart", capacity:"60,058", colors:"White & red", titles:"5 German championships", lastTitle:"2007"},
  BMG:{nickname:"Die Fohlen", founded:"1900", stadium:"Borussia-Park", city:"Mönchengladbach", capacity:"54,022", colors:"Black, white & green", titles:"5 German championships", lastTitle:"1977"},
  SVW:{nickname:"Die Grün-Weißen", founded:"1899", stadium:"Weserstadion", city:"Bremen", capacity:"42,100", colors:"Green & white", titles:"4 German championships", lastTitle:"2004"},
  RBL:{nickname:"Die Roten Bullen", founded:"2009", stadium:"Red Bull Arena", city:"Leipzig", capacity:"47,800", colors:"White & red", titles:"None (2 German Cups)", lastTitle:"DFB-Pokal 2023"},
  TSG:{nickname:"Der Dorfklub", founded:"1899", stadium:"PreZero Arena", city:"Sinsheim", capacity:"30,150", colors:"Blue & white", titles:"None", lastTitle:"Never"},
  B04:{nickname:"Die Werkself", founded:"1904", stadium:"BayArena", city:"Leverkusen", capacity:"30,210", colors:"Red & black", titles:"1 Bundesliga title", lastTitle:"2024"},
  S04:{nickname:"Die Knappen", founded:"1904", stadium:"Veltins-Arena", city:"Gelsenkirchen", capacity:"62,271", colors:"Royal blue & white", titles:"7 German championships", lastTitle:"1958"},
  BVB:{nickname:"Die Gelbe Wand", founded:"1909", stadium:"Signal Iduna Park", city:"Dortmund", capacity:"81,365", colors:"Yellow & black", titles:"8 German championships", lastTitle:"2012"},
  SCF:{nickname:"Die Breisgauer", founded:"1904", stadium:"Europa-Park Stadion", city:"Freiburg", capacity:"34,700", colors:"Red & white", titles:"None", lastTitle:"Never"},
  FCA:{nickname:"Die Fuggerstädter", founded:"1907", stadium:"WWK Arena", city:"Augsburg", capacity:"30,660", colors:"Red, green & white", titles:"None", lastTitle:"Never"},
  KOE:{nickname:"Die Geißböcke", founded:"1948", stadium:"RheinEnergieStadion", city:"Cologne", capacity:"49,698", colors:"Red & white", titles:"3 German championships", lastTitle:"1978"},
  M05:{nickname:"Die Nullfünfer", founded:"1905", stadium:"Mewa Arena", city:"Mainz", capacity:"34,034", colors:"Red & white", titles:"None", lastTitle:"Never"},
  FCU:{nickname:"Die Eisernen", founded:"1966", stadium:"Stadion An der Alten Försterei", city:"Berlin", capacity:"22,012", colors:"Red & white", titles:"None", lastTitle:"Never"},
  ELV:{nickname:"Die Kaiserlinde", founded:"1907", stadium:"Ursapharm-Arena an der Kaiserlinde", city:"Spiesen-Elversberg", capacity:"10,000", colors:"Black & white", titles:"None", lastTitle:"Never"},
  SCP:{nickname:"Die Ostwestfalen", founded:"1907", stadium:"Home Deluxe Arena", city:"Paderborn", capacity:"15,000", colors:"Black & blue", titles:"None", lastTitle:"Never"},
  SGE:{nickname:"Die Adler", founded:"1899", stadium:"Deutsche Bank Park", city:"Frankfurt", capacity:"59,500", colors:"Red, black & white", titles:"1 German championship", lastTitle:"1959"},
};

// "Almost You": each club's nearest dim-neighbours. Second person, shared-trait open, one separator, no em-dashes.
const nearlyGot = {
  BAY:{
    VFB:"Like VfB Stuttgart, you trust the well-built thing over the lucky one, the plan over the prayer. The difference is the altitude: you start every season expecting the title and treat anything less as a fault to fix, while Stuttgart is still climbing, building the engine that might one day get there. Stuttgart dreams of the view you wake up to.",
    BMG:"Start with the overlap. You carry a sense of being German football royalty, of belonging at the top of the game. The difference is the tense: you live in the present, reloading and winning, while Gladbach lives in a glorious past it would not trade for anyone's now. Gladbach's best season already happened. Yours is always the next one.",
    SVW:"You and Werder Bremen are old, settled clubs with a deep, unbothered confidence about who you are. The difference is appetite: you need the trophy, every year, and treat the season as a verdict, while Bremen made peace long ago with steady, loyal, mid-table life. Same rootedness, one demanding silverware and one content without it.",
  },
  HSV:{
    BMG:"There's real kinship here: you steer by a past that was grander than your present, and you wear that history with pride. The difference is the wound: Gladbach's golden age simply faded, while yours ended in a fall so public it stopped a famous clock. Gladbach's decline was a sunset. Yours was a clock.",
    S04:"You and Schalke 04 alike are fallen giants with vast, loyal supports who stayed through the lean years. The difference is the texture: Schalke's pride runs through coal and graft and the Ruhr, while yours runs through a Hanseatic port and a record of permanence that finally broke. Schalke's pride was dug out of the earth. Yours was counted in years, until the counting stopped.",
    KOE:"The resemblance is real. You have ridden the drop and clawed your way back, and your fans never blinked. The difference is the mood: Köln laughs through the chaos as a carnival, while you carry the fall as a wound to a proud, ever-present record. Köln throws a party on the way down. You hold a wake.",
  },
  VFB:{
    BAY:"Here's the common ground: you trust the well-built thing and treat precision as close to a moral code. The difference is the altitude: Bayern starts from the title and defends the summit, while you are the ascending side, building the engine season on season. Bayern starts every August at the summit. You start at the bottom of the hill.",
    SCF:"Same instinct at work. You come from the south-west and believe in the patient, properly-built project over the splashy fix. The difference is the ambition: you want to climb and win, treating the build as a route to the top, while Freiburg measures success by doing it sustainably and right. You want the trophy at the end of the process. Freiburg is happy the process exists.",
    BMG:"The two of you are proud old clubs with a strong sense of your own pedigree. The difference is the direction you face: you are building forward, an engine coming back to life, while Gladbach steers by the glory it already had. Same pedigree, one ascending and one remembering.",
  },
  BMG:{
    SVW:"Werder Bremen and you are old, loyal clubs whose great days are behind you, carried without bitterness. The difference is the flavor: Bremen's pride is quiet green-and-white continuity, while yours is the swagger of the fearless seventies side that ran Bayern close. Bremen never needed a golden age. You have never quite stopped talking about yours.",
    M05:"You and Mainz 05 punch with personality rather than money and refuse to take yourselves too seriously. The difference is the source: Mainz runs on carnival wit and cleverness, while you run on the memory of a genuinely golden era. Mainz laughs its way through the season; you spend yours listening for an echo.",
    HSV:"The near-miss makes sense: you steer by a grander past and wear your history proudly. The difference is the wound: your golden age faded gently, while Hamburg's ended in a fall that stopped a famous clock. Your golden age went quiet. Hamburg's went public.",
  },
  SVW:{
    BMG:"You and Borussia Mönchengladbach alike are old, loyal clubs living gladly with a faded golden age. The difference is the flavor: yours is quiet green-and-white continuity, the same as it ever was, while Gladbach carries the swagger of its seventies side. Gladbach is still dressed for the seventies. You never changed out of your own clothes.",
    M05:"The two of you are unflashy clubs that ask for very little and stay endlessly loyal. The difference is the temperament: Mainz meets it all with carnival wit, while you meet it with quiet, lifelong constancy. Mainz gets through a season on a joke. You get through it on a habit.",
    FCU:"Union Berlin and you are deeply loyal, community-minded clubs with no taste for glamour. The difference is the origin: Union's bond was forged by fans who literally built and bled for the club, while yours is the unbroken green-and-white habit of a lifetime. Same devotion, one self-built and one inherited.",
  },
  RBL:{
    B04:"You and Bayer Leverkusen are modern, well-run clubs that trust the system and the recruitment over nostalgia. The difference is the welcome: Leverkusen is the long-established works team that the league tolerates, while you are the disruptor it resents. Leverkusen was let in. You let yourself in.",
    TSG:"You've got genuine overlap. You were built fast by money and conviction rather than slow tradition, and you make no apology for it. The difference is the scale of the resentment: Hoffenheim is the benefactor's village project, while you are the corporate machine the whole country loves to hate. Hoffenheim annoys a league. You annoy a country.",
    VFB:"Cut to what's shared: you trust the structured, well-built side and the plan behind it. The difference is the heritage: Stuttgart is a century-old club ascending the proper way, while you built a winner from scratch and dare anyone to mind. Same engineered ambition, one with roots and one without them by choice.",
  },
  TSG:{
    B04:"You and Bayer Leverkusen alike are company-backed clubs that the purists eye warily, trusting investment and a plan. The difference is the standing: Leverkusen is the established works team with a title now, while you are the village lifted by one man's money. Leverkusen outlasted the sneering and won something. You are still in the middle of it.",
    RBL:"It's a close call for a reason. You were built fast by belief and funding rather than slow tradition. The difference is the scale: you are the small Kraichgau project of one believer, while Leipzig is the corporate machine the country resents. One man built you. A company built them.",
    VFB:"You share the core of it. You sit in the south-west and trust the plan and the structure behind a side. The difference is the soul: Stuttgart carries a century of Swabian heritage, while you are young and unburdened by any of it. Same faith in the build, one rooted and one free of roots.",
  },
  B04:{
    RBL:"The two of you are modern, well-run sides that trust the model over the myth. The difference is the welcome: you are the long-established works team the league accepts, while Leipzig is the disruptor it resents. Time made you respectable. Leipzig has not been given any yet.",
    TSG:"TSG Hoffenheim and you are company clubs the traditionalists keep at arm's length. The difference is the payoff: you carried the runner-up label for decades and finally won everything, while Hoffenheim is still the benefactor's project chasing its moment. You spent decades as the nearly men and then won the lot. Hoffenheim has not had its season yet.",
    VFB:"Set you beside VfB Stuttgart and the likeness shows: you believe in the structured, properly-built side and the patience it takes. The difference is the history with heartbreak: you spent decades as nearly-men before it broke, while Stuttgart is simply ascending. Same engineered faith, one scarred by near-misses and one unscarred.",
  },
  S04:{
    KOE:"You'd recognize yourself in 1. FC Köln. You carry huge working-class followings and a love that asks nothing back. The difference is the mood: Köln rides the carnival, laughing through every promotion and relegation, while you carry yours like a shift underground, heavier, prouder, slower to smile. Köln sings on the way down. You go back to work.",
    FCU:"You and Union Berlin are proud, collective clubs where the people in the stand are the whole point. The difference is the inheritance: Union's bond was built by fans who gave blood and labor, while yours was handed down through generations of miners. Union's supporters built their club. Yours were born into theirs.",
    HSV:"You and Hamburger SV alike are fallen giants whose vast supports never wavered through the drop. The difference is the texture: your pride runs through coal and the Ruhr, while Hamburg's runs through a port and a broken record of permanence. Yours was dug from under the Ruhr. Hamburg's hung on a wall until it fell.",
  },
  BVB:{
    SGE:"There's shared DNA here. You turn a matchday into something closer to a religion, all noise and color and feeling at full tilt. The difference is the direction it points: Frankfurt aims its energy outward, at the powers running the game and at every away end it invades, while yours pours straight down onto the pitch from the Wall. Frankfurt takes its fire on the road. Yours has never needed to leave home.",
    S04:"The two of you are giant Ruhr clubs whose terraces are the whole point, bound by the Revierderby. The difference is the register: Schalke's pride is the miner's, hard and unglamorous, while yours is pure spectacle, the biggest wall of noise in Europe. Schalke's pride does not perform. Yours is eighty thousand people performing at once.",
    KOE:"The overlap runs deep: you live for the feeling in the stand more than the line in the table. The difference is the scale: Köln's is a carnival city's loyal chaos, while yours is eighty thousand on a single terrace. Same devotion to the atmosphere, one a party and one a cathedral.",
  },
  SCF:{
    VFB:"First, the kinship. You come from the south-west and trust the patient, properly-built project. The difference is the goal: Stuttgart wants to climb and win, while you measure success by doing it sustainably and right. Stuttgart is measuring the summit. You are measuring the road.",
    SVW:"Werder Bremen and you are unflashy, principled clubs that stay loyal to a way of doing things. The difference is the trajectory: you are the well-run overachiever still rising, while Bremen is the proud traditionalist living on a faded peak. Bremen's best years are behind it. Yours keep arriving quietly.",
    M05:"Like Mainz 05, you overachieve your means by being smarter and steadier than richer clubs. The difference is the tone: Mainz wraps it in carnival wit, while you wrap it in Black Forest patience and a solar-roofed sense of doing things right. Mainz survives on a punchline. You survive on a plan.",
  },
  FCA:{
    SCP:"You and SC Paderborn are small, modest clubs at peace with punching where you punch, no glory expected. The difference is the ride: Paderborn yo-yos between divisions as an underdog, while you simply stay up, calm and unbothered, year after year. Paderborn's season is a rollercoaster. Yours is a straight line, and you like it that way.",
    M05:"You and Mainz 05 alike are unglamorous clubs that ask for little and keep your feet on the ground. The difference is the personality: Mainz leans into carnival wit, while you lean into quiet, undramatic survival. Mainz makes staying up entertaining. You make it look like nothing happened.",
    BMG:"Start with the overlap. You sit some distance from glory and are honest about it. The difference is the past: Gladbach steers by a genuinely golden era, while you have no such peak to remember and have made peace with that. Same lack of present silverware, one nostalgic and one content.",
  },
  KOE:{
    S04:"There's real kinship here: you carry huge working-class followings and a love that asks nothing back. The difference is the mood: you ride the carnival, laughing through every promotion and relegation, while Schalke carries its loyalty like a shift underground, heavier and prouder. You laugh your way through the drop. Schalke clocks in.",
    SGE:"The two of you are loud, fervent clubs whose support is the whole spectacle. The difference is the spirit: Frankfurt's energy is political and defiant, an away-day army, while yours is carnival, a city throwing a party through every up and down. Frankfurt travels to make a point. You stay home and throw a party.",
    BVB:"The resemblance is real. You live for the feeling in the stand more than the table. The difference is the scale: yours is a carnival city's loyal chaos, the yo-yo worn with a grin, while Dortmund's is eighty thousand on one vast terrace. Dortmund is a cathedral. You are a parade.",
  },
  M05:{
    ELV:"SV Elversberg and you are small clubs playing with house money and a smile, no weight of expectation. The difference is the source of the joy: Elversberg's is the fairytale of arriving at all, while yours is the carnival wit of staying and out-thinking richer sides. Elversberg cannot believe it is here. You stopped being surprised years ago.",
    SCP:"You and SC Paderborn are modest clubs that overachieve and refuse to take it too seriously. The difference is the temperament: Paderborn yo-yos as a stubborn underdog, while you survive by being cleverer and funnier than your budget. Paderborn outlasts the league. You outwit it.",
    BMG:"Here's the common ground: you carry personality far bigger than your present trophy haul. The difference is the source: Gladbach lives on a golden past, while you live on carnival wit and gegenpressing cleverness in the now. Same outsized character, one nostalgic and one mischievous.",
  },
  FCU:{
    S04:"You and Schalke 04 alike are proud, collective clubs where the people in the stand are the whole point. The difference is the inheritance: your bond was built recently by fans who gave blood and labor, while Schalke's was handed down through generations of miners. Schalke's fans were born into it. Yours built it with their hands.",
    SVW:"The two of you are deeply loyal clubs with no taste for glamour. The difference is the origin: your bond was forged by supporters who literally built and bled for the club, while Bremen's is the unbroken green-and-white habit of a lifetime. Bremen's loyalty is a habit. Yours is a debt the club can never repay.",
    KOE:"1. FC Köln and you are fiercely loyal, community clubs that ride the lower divisions without flinching. The difference is the spirit: Köln does it as a carnival, all party, while you do it as a project the fans built with their own hands. Köln shows up for the party. Your people showed up with tools.",
  },
  ELV:{
    M05:"You and Mainz 05 are small clubs playing without a shred of expectation and loving it. The difference is the chapter: yours is the fairytale of arriving at all, the smallest town in the league, while Mainz has long since mastered the art of the witty stay. Mainz knows how to stay. You are still amazed you got in.",
    SCP:"You and SC Paderborn alike are tiny, overlooked clubs that have no business sharing a league with giants. The difference is the story: Paderborn is the seasoned yo-yo underdog, back for another go, while you are the first-time fairytale with everything still ahead. Paderborn has done this before. You are doing it for the first time, and everyone can tell.",
    BMG:"Same instinct at work. You sit a long way from the favorites, but for opposite reasons. The difference is the history: Gladbach was once European royalty and remembers it, while you have never been here before and are simply thrilled to have arrived. Same outsider status, one a faded great and one a rising minnow.",
  },
  SCP:{
    M05:"The two of you are modest clubs that overachieve and keep your feet on the ground. The difference is the texture: you yo-yo between divisions as a stubborn underdog, while Mainz survives by carnival wit and cleverness. Mainz talks its way out of trouble. You climb out.",
    ELV:"SV Elversberg and you are tiny, overlooked clubs improbably sharing a league with giants. The difference is the mileage: you are the seasoned yo-yo side back for another crack, while Elversberg is the wide-eyed first-time fairytale. Elversberg is having the time of its life. You have been here often enough to pace yourself.",
    FCA:"You and FC Augsburg are small, unfussy clubs with no glory to chase. The difference is the rhythm: you ride the rollercoaster between divisions, while Augsburg simply stays up, calm and content. Same modest contentment, one a yo-yo and one a steady hum.",
  },
  SGE:{
    BVB:"The near-miss makes sense: you turn a matchday into something closer to a religion, all noise and color at full tilt. The difference is the direction it points: you aim your energy outward, at the powers running the game and at every away end you invade, while Dortmund pours its straight down from the Wall. Dortmund's noise falls on its own pitch. Yours is aimed at somebody.",
    KOE:"You've got genuine overlap. You bring loud, fervent supports that are the whole spectacle. The difference is the spirit: yours is political and defiant, a traveling army, while Köln's is carnival, a city at a party. Köln's crowd came to enjoy itself. Yours came with a message.",
    S04:"Cut to what's shared: you carry vast, passionate, working supports with a streak of defiance. The difference is the cause: Schalke's energy is the miner's pride and loyalty, while yours is aimed at the powers running modern football. Schalke's fervor looks inward, at its own people. Yours looks up, at whoever is in charge.",
  },
};

const CARD_BADGES = {
  BAY:"🔴", HSV:"🦕", VFB:"⚙️", BMG:"🐎", SVW:"🟢", RBL:"🐂", TSG:"🔵", B04:"💊", S04:"⛏️", BVB:"🟡",
  SCF:"🌲", FCA:"🟢", KOE:"🐐", M05:"🎭", FCU:"⚒️", ELV:"🌳", SCP:"🔵", SGE:"🦅",
};

const badgeUrls = {};

const squadUrls = {
  BAY:"https://fcbayern.com",
  HSV:"https://www.hsv.de",
  VFB:"https://www.vfb.de",
  BMG:"https://www.borussia.de",
  SVW:"https://www.werder.de",
  RBL:"https://www.rbleipzig.com",
  TSG:"https://www.tsg-hoffenheim.de",
  B04:"https://www.bayer04.de",
  S04:"https://www.schalke04.de",
  BVB:"https://www.bvb.de",
  SCF:"https://www.scfreiburg.com",
  FCA:"https://www.fcaugsburg.de",
  KOE:"https://www.fc-koeln.de",
  M05:"https://www.mainz05.de",
  FCU:"https://www.fc-union-berlin.de",
  ELV:"https://www.sv07elversberg.de",
  SCP:"https://www.scpaderborn07.de",
  SGE:"https://www.eintracht.de",
};

const teamDims = {
  "BAY": { loyalty:8, emotion:5, ambition:10, process:8, community:5, chaos:3, rootedness:9 },
  "HSV": { loyalty:9, emotion:7, ambition:7, process:4, community:6, chaos:6, rootedness:10 },
  "VFB": { loyalty:7, emotion:5, ambition:8, process:9, community:5, chaos:3, rootedness:8 },
  "BMG": { loyalty:8, emotion:6, ambition:6, process:6, community:6, chaos:4, rootedness:9 },
  "SVW": { loyalty:9, emotion:6, ambition:5, process:6, community:7, chaos:3, rootedness:9 },
  "RBL": { loyalty:5, emotion:5, ambition:9, process:9, community:3, chaos:3, rootedness:3 },
  "TSG": { loyalty:5, emotion:4, ambition:4, process:8, community:3, chaos:3, rootedness:4 },
  "B04": { loyalty:6, emotion:5, ambition:8, process:9, community:3, chaos:3, rootedness:4 },
  "S04": { loyalty:10, emotion:8, ambition:6, process:4, community:9, chaos:6, rootedness:10 },
  "BVB": { loyalty:9, emotion:10, ambition:8, process:5, community:9, chaos:7, rootedness:9 },
  "SCF": { loyalty:8, emotion:4, ambition:5, process:10, community:7, chaos:2, rootedness:8 },
  "FCA": { loyalty:7, emotion:4, ambition:3, process:6, community:5, chaos:3, rootedness:7 },
  "KOE": { loyalty:10, emotion:9, ambition:5, process:3, community:8, chaos:8, rootedness:9 },
  "M05": { loyalty:7, emotion:6, ambition:5, process:7, community:6, chaos:5, rootedness:7 },
  "FCU": { loyalty:10, emotion:7, ambition:4, process:4, community:10, chaos:4, rootedness:9 },
  "ELV": { loyalty:7, emotion:6, ambition:5, process:6, community:7, chaos:6, rootedness:6 },
  "SCP": { loyalty:7, emotion:5, ambition:4, process:6, community:6, chaos:5, rootedness:6 },
  "SGE": { loyalty:8, emotion:9, ambition:7, process:4, community:8, chaos:8, rootedness:7 },
};

const moduleQuestions = [
  { id:"bl_q1", type:"choice", phase:"The fine print", question:"What makes you respect something - a business, a scene, anyone's success?",
    options:[ {label:"It was built slowly, the hard way, over years", value:"A"},
              {label:"It's simply the best there is right now, however it got there", value:"B"},
              {label:"Ordinary people love it, trophies or not", value:"C"} ] },
  { id:"bl_q2", type:"choice", phase:"The fine print", question:"At something you love being part of, what's your instinct?",
    options:[ {label:"Get stuck in and help make the whole thing happen", value:"A"},
              {label:"Throw everything into the noise and the moment", value:"B"},
              {label:"Show up, take it in, let others run it", value:"C"} ] },
  { id:"bl_q3", type:"choice", phase:"The fine print", question:"How do you want to be known for the way you work?",
    options:[ {label:"Reliable, tireless, never above the dirty jobs", value:"A"},
              {label:"The one who lifts things to another level", value:"B"},
              {label:"Steady and quietly effective, no drama", value:"C"} ] },
  { id:"bl_q4", type:"choice", phase:"The fine print", question:"When things go badly, what do you reach for?",
    options:[ {label:"Humor - you laugh first, it's how you cope", value:"A"},
              {label:"You go quiet and feel it properly", value:"B"},
              {label:"You shrug it off and trust it'll come round", value:"C"} ] },
  { id:"bl_q5", type:"choice", phase:"The fine print", question:"When you don't like how something's being run, what do you do?",
    options:[ {label:"Push back loudly and try to change it", value:"A"},
              {label:"Quietly do your own thing around it", value:"B"},
              {label:"Accept it - that's how the world works", value:"C"} ] },
  { id:"bl_q6", type:"choice", phase:"The fine print", question:"Thinking about your own life, what are you proudest of?",
    options:[ {label:"What you've built with your own hands, no help", value:"A"},
              {label:"What you've done with good people and strong backing", value:"B"},
              {label:"Just keeping a good thing going, year after year", value:"C"} ] },
  { id:"bl_q7", type:"choice", phase:"What it comes down to", question:"Where does your sense of solid ground come from?",
    options:[ {label:"A long unbroken record you'd hate to ever break", value:"A"},
              {label:"Knowing you could lose it all and build again", value:"B"},
              {label:"Never having had much to lose in the first place", value:"C"} ] },
  { id:"bl_q8", type:"binary", phase:"What it comes down to", question:"Which would you rather be?",
    left:"Dependable and consistent, week in week out",
    right:"Thrilling and unpredictable, even if it costs you" },
  { id:"bl_q9", type:"binary", phase:"What it comes down to", question:"With the things you love, are you...",
    left:"All in no matter what, through every high and low",
    right:"All in, as long as it's going somewhere" },
  { id:"bl_q10", type:"binary", phase:"What it comes down to", question:"Which feels more like you?",
    left:"Quietly first-rate; you don't need it noticed",
    right:"If you're that good, you want it seen" },
  { id:"bl_q11", type:"binary", phase:"What it comes down to", question:"Which fires you up more?",
    left:"Being doubted, and proving them wrong",
    right:"Living up to a big name and high expectations" },
  { id:"bl_q12", type:"choice", phase:"What it comes down to", question:"When something you care about is struggling, your move is...",
    options:[ {label:"Back the people and hold the line", value:"A"},
              {label:"Shake it up - fresh ideas, new blood", value:"B"},
              {label:"Go back to what always worked", value:"C"} ] },
];

// The cells: 2 points to each club an answer points toward. Each club in exactly one option per question.
const P = 2;
function cell(list){ const o={}; for (const k of list) o[k]=P; return o; }

const scoring = {
  bl_q1: { A: cell(["BAY","VFB","BMG","SVW","SCF","M05"]),
           B: cell(["RBL","TSG","B04"]),
           C: cell(["S04","BVB","KOE","FCU","HSV","SGE","FCA","ELV","SCP"]) },
  bl_q2: { A: cell(["FCU","S04","SCF","FCA","SVW","SCP"]),
           B: cell(["BVB","KOE","SGE","HSV","M05","ELV"]),
           C: cell(["BAY","RBL","TSG","B04","VFB","BMG"]) },
  bl_q3: { A: cell(["S04","FCU","HSV","SVW","FCA","SCP"]),
           B: cell(["BAY","BVB","RBL","B04","VFB","SGE"]),
           C: cell(["SCF","M05","TSG","BMG","KOE","ELV"]) },
  bl_q4: { A: cell(["KOE","M05","SGE","ELV"]),
           B: cell(["BVB","S04","HSV","BAY","VFB","B04","FCU","BMG"]),
           C: cell(["FCA","SVW","SCF","TSG","RBL","SCP"]) },
  bl_q5: { A: cell(["SGE","S04","KOE","BVB"]),
           B: cell(["FCU","SCF","M05","HSV","ELV"]),
           C: cell(["BAY","RBL","TSG","B04","VFB","BMG","SVW","FCA","SCP"]) },
  bl_q6: { A: cell(["FCU","S04","SCF","KOE","ELV","SCP"]),
           B: cell(["RBL","TSG","B04"]),
           C: cell(["BVB","VFB","BMG","SVW","M05","FCA","HSV","SGE","BAY"]) },
  bl_q7: { A: cell(["HSV","BAY","S04","BMG","SVW","KOE"]),
           B: cell(["BVB","VFB","SGE","B04","FCU"]),
           C: cell(["ELV","SCP","TSG","RBL","FCA","M05","SCF"]) },
  bl_q8: { left: cell(["BAY","VFB","SCF","SVW","FCA","B04","TSG","RBL","M05","SCP"]),
           right: cell(["BVB","SGE","KOE","HSV","S04","FCU","BMG","ELV"]) },
  bl_q9: { left: cell(["KOE","S04","FCU","HSV","SVW","BVB","BMG","FCA","ELV","SCP","M05","SCF"]),
           right: cell(["BAY","RBL","B04","TSG","VFB","SGE"]) },
  bl_q10:{ left: cell(["SCF","FCA","SVW","M05","TSG","VFB","FCU","BMG","ELV","SCP","B04"]),
           right: cell(["BAY","RBL","BVB","SGE","KOE","S04","HSV"]) },
  bl_q11:{ left: cell(["ELV","SCP","FCU","SCF","M05","TSG","FCA","VFB","RBL"]),
           right: cell(["BAY","BVB","S04","HSV","BMG","KOE","SVW","SGE","B04"]) },
  bl_q12:{ A: cell(["SCF","FCA","M05","FCU","SVW","ELV"]),
           B: cell(["RBL","B04","TSG","BAY","VFB","SGE"]),
           C: cell(["S04","KOE","HSV","BVB","BMG","SCP"]) },
};


export { moduleQuestions, teams, archetypes, teamTextColors, archetypeDesc, greats, milestones, vitalStats, nearlyGot, scoring, teamDims, CARD_BADGES, badgeUrls, squadUrls };
