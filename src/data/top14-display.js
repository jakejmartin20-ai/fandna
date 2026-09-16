// FanDNA - TOP14 display half (lazy-loaded, s83 code-split A'). Heavy result-stage prose
// split from top14.js; merged onto SPORT_DATA via loadSportDisplay(). The engine never reads these.

const teamsCopy = {
  "TLS": {
    "tagline": "Twenty-five titles and a way of playing all your own, because winning here was never chased, it was simply expected.",
    "desc": "You are the standard everyone else measures themselves against, and you carry it lightly. Winning isn't something you chase, it's woven into who you are, assumed rather than hoped for. What sets you apart is that you built it yourself, an academy that turns your own kids into the best in the world and a fast, daring style that could only be yours. You're deeply rooted in a place where what you do is close to a religion, and you'd never dream of buying what you can grow. Others find your calm almost arrogant. You'd say you simply know what you are."
  },
  "RCT": {
    "tagline": "A band of superstars in a working port, built to win now and to be watched while doing it.",
    "desc": "You are the showman with a chequebook, the one who goes and gets the best and worries about the rest later. When you want something you buy it, the biggest names in the world, and you're not shy about the spectacle that comes with them. You live for the win in front of you, not some patient ten-year plan, and you'd rather blaze bright than build slow. Your home is a blue-collar naval town that roars for you like nowhere else. Critics call you a team that bought its glory. You'd say the trophies don't ask how they arrived."
  },
  "UBB": {
    "tagline": "The most thrilling attack in Europe and the biggest crowd on the continent, built from nothing in a football city.",
    "desc": "You are the exhilarating newcomer who arrived and made everyone watch. You play with speed and daring, an attack that leaves people breathless, and you did it in a place that was never supposed to be yours, a football city you turned into your own. You feel it all at full volume, and so does the enormous crowd you've gathered, the biggest in European rugby. You're young and still building, chasing the one prize that's slipped your grasp at home even as you conquered the continent. You'd tear it down and start again to get there. Half the fun, for you, is the noise and the joy of it."
  },
  "LAR": {
    "tagline": "A modest coastal town that turned relentless graft into back-to-back European crowns, and never once stopped selling out.",
    "desc": "You are the underdog who did it the hard way and stayed humble about it. You come from a modest Atlantic port that nobody expected much from, and you turned commitment, solidarity and sheer relentlessness into two European crowns. The bond with your town is total, the whole place turning yellow and black on match weekends, more than a hundred sellouts in a row. You don't chase the spotlight or make noise. You just show up, dig in and refuse to fold, and you treat the whole thing with a quiet, near-sacred seriousness. Humility isn't a pose for you, it's the point."
  },
  "ASM": {
    "tagline": "Ten lost finals, a faith that never broke, and a Yellow Army that loved you long before there was anything to win.",
    "desc": "You are the purest devotion in the game, the one who loved through heartbreak and never once wavered. You lost final after final, ten of them, three in a row, and still your Yellow Army filled the ground every week and sang you on. When the win finally came, in your hundredth year, it meant more than any easy triumph ever could, because you'd earned that loyalty through the pain rather than the glory. Your roots run down into a company town and its factory, and you feel every result in your bones. You wouldn't swap a single one of those hard years for a colder, easier road."
  },
  "SFP": {
    "tagline": "Pink shirts, nude calendars and Madonna at the ground, the great showman who dragged rugby into the spotlight.",
    "desc": "You are rugby's showman and its provocateur, the one who was never going to play it safe or quiet. You turned the game into theatre, the shocking pink shirts, the calendars, the pop stars, the record crowds, an art-and-culture identity that scandalised every buttoned-up club around you. You provoke on purpose, because a bit of noise keeps the whole thing alive, and you'd rather be talked about than tidy. You're a metropolitan creature, not a country one, drawn to the bright lights and the big statement. Some accused you of betraying the spirit of the game. You'd say you gave it a spark it badly needed."
  },
  "R92": {
    "tagline": "Champagne on the pitch and superstars in the side, Parisian money and chic in a space-age arena.",
    "desc": "You are the glamour and the money, the one who does everything in style and makes no apology for it. From the champagne-on-the-pitch decadents of old to the modern star-signing, wine-cellar-in-the-training-ground operation, you've always been about wealth and chic and being seen doing it well. You go and buy the best, the biggest names in the world, and house them somewhere futuristic and gleaming. You're a Parisian creature through and through, drawn to the finest of everything, ambitious and modern and a little decadent. You're not the club of deep roots and folk songs. You're the club of the good life, and you wear it lightly."
  },
  "ABR": {
    "tagline": "The club that founded its city's festival, deeply Basque, fervent and sold out through every high and low.",
    "desc": "You are the festival and the fervour, the beating Basque heart of your town. Your sky blue and white is the colour of the sea and the sky, your anthem is sung across the whole city, and the famous festival that draws millions was founded by your own sportsmen. You feel it all, joyfully and out loud, and your support stays sold out through relegations and comebacks alike, faithful without conditions. You're not chasing glamour or the spotlight. You just show up, quietly devoted underneath all the colour, and throw yourself into the celebration of it. Belonging, for you, is the whole point."
  },
  "PAU": {
    "tagline": "The proud symbol of Béarn, its anthem sung acapella by the whole ground, faithful, resilient, quietly sure of itself.",
    "desc": "You are the quiet pride of a proud region, rooted so deep you never needed to look elsewhere. You're the symbol of Béarn, not Basque, your anthem sung acapella by the whole ground in your own tongue, invoking the mountains and the old kings. You've a real tradition of raising your own and a faithful, resilient support that stays whatever the season brings. You don't burn or provoke or chase the lights. You carry it with a solemn, understated pride, treating what you love as close to sacred, and you feel most yourself exactly where you're from. Others move on. You put down roots and stay."
  },
  "USP": {
    "tagline": "French Catalonia in blood red and gold, all pride, fight and furia, burning just as bright in the hard years.",
    "desc": "You are the fire, the incandescent Catalan heart in blood red and gold. Pride, fight and furia are your whole language, a feverish, unmatched passion for your region's colours that outsiders can't quite fathom. You feel everything at maximum, and the intensity doesn't dim when the results do, burning just as fiercely through the lean years as the good ones. You're a former giant who's known the heights and the depths and stayed exactly as fervent throughout. You don't do half measures or quiet devotion. You do all or nothing, a cause you'd give everything to, right up against the Spanish border where the whole town lives and dies with you."
  },
  "CAS": {
    "tagline": "A small Occitan town that keeps beating the giants, faithful to its roots, quietly efficient, feared at home.",
    "desc": "You are the blue-collar giant-killer, the small town that keeps punching up and winning. You've no big budget and no glamour, just a philosophy of engagement, solidarity and fidelity to your roots, bankrolled for decades by a local son who never let you forget where you came from. You do it the efficient, pragmatic way, no drama and no fuss, and you treat the whole thing with a serious, near-sacred respect. Your home is a fortress with a singular atmosphere, a town of forty thousand filling the ground. Others chase the spotlight. You quietly get the job done, and five titles say the model works."
  },
  "MHR": {
    "tagline": "Billionaire money and one of France's best academies, symbolised by a flower that survives fire and drought.",
    "desc": "You are the modern project, the young, ambitious build with money behind it and method underneath. You're the youngest club in the league, backed by a billionaire and stocked with world champions, but there's more to you than the chequebook, one of the best academies in France and a symbol that says everything, a rockrose that survives and even feeds on fire and drought. You chase the win with resources and clear thinking, and you'd rather build something new and ambitious than tend an old tradition. Your roots are genuinely thin, your form can swing hard, but you keep coming back. You treat it less as a religion and more as a project worth getting right."
  },
  "LOU": {
    "tagline": "The wolf of a big football city, an outsider to rugby's heartland who built its own festive, student-packed crowd.",
    "desc": "You are the outsider who built your own thing, the wolf loose in a big football city. You were never part of rugby's traditional heartland, never quite embraced by the region's old clubs, and you couldn't lean on generations of tradition the way they do. So you made your own, a young, festive, student-heavy crowd with the best party before and after the game anywhere. You're one of the oldest clubs around and yet somehow always the newcomer, coexisting with football's long shadow in a place that was never meant to be yours. You don't do reverence or deep roots. You do celebration, on your own terms, and you back your own eye over anyone's tradition."
  },
  "USM": {
    "tagline": "The smallest ground in the league and the biggest heart, a former champion that went bust and clawed all the way back.",
    "desc": "You are the plucky survivor, the tiny town with the biggest heart. You play at the smallest ground in the league, and you've been to the brink and back, a former champion that went bankrupt, dropped down the divisions and clawed its way home. Your spirit is simplicity, consistency and fidelity to the group, promotion celebrated without frills, the same faithful squad kept together, every good day treated as a gift. You take heavy beatings from the big clubs and battle like mad at home anyway, because belonging matters more to you than the scoreline. You're folksy, rooted and grateful, and you wouldn't trade any of it."
  }
};

const vitalStats = {
  "TLS": {
    "founded": 1907,
    "ground": "Stade Ernest-Wallon",
    "city": "Toulouse",
    "colours": "Red and black",
    "titles": "25 (a record)",
    "european": "6 Champions Cups",
    "lastTitle": "2026"
  },
  "RCT": {
    "founded": 1908,
    "ground": "Stade Mayol",
    "city": "Toulon",
    "colours": "Red and black",
    "titles": "4 (1931, 1987, 1992, 2014)",
    "european": "3 Champions Cups (2013-15)",
    "lastTitle": "2014"
  },
  "UBB": {
    "founded": 2006,
    "ground": "Stade Chaban-Delmas",
    "city": "Bordeaux",
    "colours": "Maroon and white",
    "titles": "None as the merged club",
    "european": "2 Champions Cups (2025, 2026)"
  },
  "LAR": {
    "founded": 1898,
    "ground": "Stade Marcel-Deflandre",
    "city": "La Rochelle",
    "colours": "Yellow and black",
    "titles": "None yet",
    "european": "2 Champions Cups (2022, 2023)"
  },
  "ASM": {
    "founded": 1911,
    "ground": "Stade Marcel-Michelin",
    "city": "Clermont-Ferrand",
    "colours": "Yellow and blue",
    "titles": "2 (2010, 2017)",
    "european": "Challenge Cup (1999, 2007)",
    "lastTitle": "2017"
  },
  "SFP": {
    "founded": 1883,
    "ground": "Stade Jean-Bouin",
    "city": "Paris",
    "colours": "Pink and white",
    "titles": "14 (second-most)",
    "european": "-",
    "lastTitle": "2015"
  },
  "R92": {
    "founded": 1882,
    "ground": "Paris La Défense Arena",
    "city": "Nanterre (Paris)",
    "colours": "Sky blue and white",
    "titles": "6",
    "european": "-",
    "lastTitle": "2016"
  },
  "ABR": {
    "founded": 1904,
    "ground": "Stade Jean-Dauger",
    "city": "Bayonne",
    "colours": "Sky blue and white",
    "titles": "3 (1913, 1934, 1943)",
    "european": "-",
    "lastTitle": "1943"
  },
  "PAU": {
    "founded": 1902,
    "ground": "Stade du Hameau",
    "city": "Pau",
    "colours": "Green and white",
    "titles": "3 (1928, 1946, 1964)",
    "european": "Challenge Cup (2000)",
    "lastTitle": "1964"
  },
  "USP": {
    "founded": 1902,
    "ground": "Stade Aimé-Giral",
    "city": "Perpignan",
    "colours": "Blood red and gold",
    "titles": "7",
    "european": "-",
    "lastTitle": "2009"
  },
  "CAS": {
    "founded": 1906,
    "ground": "Stade Pierre-Fabre",
    "city": "Castres",
    "colours": "Blue and white",
    "titles": "5 (1949, 1950, 1993, 2013, 2018)",
    "european": "-",
    "lastTitle": "2018"
  },
  "MHR": {
    "founded": 1986,
    "ground": "Septeo Stadium",
    "city": "Montpellier",
    "colours": "Blue and white",
    "titles": "1 (2022)",
    "european": "Challenge Cup (2016, 2021)",
    "lastTitle": "2022"
  },
  "LOU": {
    "founded": 1896,
    "ground": "Matmut Stade de Gerland",
    "city": "Lyon",
    "colours": "Red and black",
    "titles": "2 (1932, 1933)",
    "european": "Challenge Cup (2022)",
    "lastTitle": "1933"
  },
  "USM": {
    "founded": 1903,
    "ground": "Stade Sapiac",
    "city": "Montauban",
    "colours": "Green and black",
    "titles": "1 (1967)",
    "european": "-",
    "lastTitle": "1967"
  }
};

const milestones = {
  "TLS": [
    "A record twenty-five French titles, the most recent in 2026.",
    "Won four in a row from 2023 to 2026, matching the club's own 1994-97 record.",
    "Six European Cups, more than any other club on the continent.",
    "Famous for an academy that feeds a fast, attacking game with home-grown internationals."
  ],
  "RCT": [
    "Four French titles, in 1931, 1987, 1992 and 2014.",
    "Won three European Cups in a row from 2013 to 2015, a feat no French club had managed.",
    "Built a galaxy of imported world stars under an ambitious, big-spending owner.",
    "Plays in a fervent naval port, taking its biggest nights to Marseille's Vélodrome."
  ],
  "UBB": [
    "Back-to-back European Champions Cups in 2025 and 2026.",
    "Runner-up in the 2025 French final, losing a hundred-minute epic to Toulouse.",
    "Draws the biggest average crowd in European club rugby.",
    "Formed in 2006 from a merger, uniting a football city behind rugby."
  ],
  "LAR": [
    "Back-to-back European Champions Cups in 2022 and 2023.",
    "More than a hundred consecutive home sellouts by early 2026.",
    "Turned a modest provincial side into a European power on sheer professionalism.",
    "Home ground named for a club president executed as a Resistance fighter."
  ],
  "ASM": [
    "Two French titles, in 2010 and 2017.",
    "Lost ten finals before that first win, including three in a row from 2007 to 2009.",
    "Broke through in 2010, the club's centenary year.",
    "The Yellow Army is one of the most faithful, fervent followings in the sport."
  ],
  "SFP": [
    "Fourteen French titles, second only to Toulouse in the history books.",
    "Won six titles in the modern era between 1998 and 2007, the last in 2015.",
    "Reinvented itself with shocking pink shirts, celebrity nights and record crowds.",
    "A Parisian art-and-culture identity unlike any traditional southern club."
  ],
  "R92": [
    "Six French titles across its history, the most recent in 2016.",
    "Traces its line to Racing Club de France, winner of the very first championship in 1892.",
    "Signed global superstars and built a futuristic indoor arena on the edge of Paris.",
    "Long known for glamour, wealth and a certain Parisian decadence."
  ],
  "ABR": [
    "Three French titles, in 1913, 1934 and 1943.",
    "Reached the top-flight semi-finals for the first time in club history in 2025.",
    "The city's famous festival was founded in 1932 by sportsmen of the club.",
    "One of the great atmospheres in France, its anthem sung across the whole town."
  ],
  "PAU": [
    "Three French titles, in 1928, 1946 and 1964.",
    "Won the European Challenge Cup in 2000.",
    "Its anthem, sung acapella by the whole ground, mixes French and the local Béarnais tongue.",
    "A real academy tradition, developing its own generations of players."
  ],
  "USP": [
    "Seven French titles, the most recent in 2009.",
    "A former multiple champion and one of the fiercest identities in the French game.",
    "Its blood red and gold are the colours of Catalonia, worn hard against the Spanish border.",
    "Famous for a feverish, unmatched passion that persists through decline."
  ],
  "CAS": [
    "Five French titles, in 1949, 1950, 1993, 2013 and 2018.",
    "Bankrolled for decades by a local pharmaceutical magnate born in the town.",
    "One of the smallest grounds in the league, and one of its most feared atmospheres.",
    "A forty-thousand town that fills its stadium, among the most loyal followings in Europe."
  ],
  "MHR": [
    "French champions in 2022, the club's first title.",
    "Runner-up in 2026, the same year it won the European Challenge Cup.",
    "The youngest club in the league, formed by a merger in 1986.",
    "Runs one of the best academies in France alongside its imported stars."
  ],
  "LOU": [
    "Two French titles, both in the early 1930s.",
    "Won the European Challenge Cup in 2022.",
    "One of the oldest clubs in France, symbolised by the wolf.",
    "Built a notably festive, student-heavy crowd in a big football city."
  ],
  "USM": [
    "French champions in 1967, a title few outside the town remember.",
    "Went bankrupt in 2010 and dropped down the divisions.",
    "Won promotion back to the top flight in 2025 with a settled, faithful squad.",
    "Plays at the smallest ground in the league, in a proud Occitan town."
  ]
};

const CARD_BADGES = {
  "TLS": "⭐",
  "RCT": "⚓",
  "UBB": "🍷",
  "LAR": "🌊",
  "ASM": "💛",
  "SFP": "🌸",
  "R92": "💎",
  "ABR": "🎉",
  "PAU": "⛰️",
  "USP": "🔥",
  "CAS": "⚙️",
  "MHR": "🌿",
  "LOU": "🐺",
  "USM": "🌾"
};

const badgeUrls = {};

export { teamsCopy, vitalStats, milestones, CARD_BADGES, badgeUrls };
