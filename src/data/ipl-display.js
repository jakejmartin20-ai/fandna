// FanDNA - IPL display half (lazy-loaded, s83 code-split A'). Heavy result-stage prose
// split from ipl.js; merged onto SPORT_DATA via loadSportDisplay(). The engine never reads these.

const teamsCopy = {
  "CSK": {
    "tagline": "Five titles, one captain, and a yellow that never fades, because the badge was always bigger than the result.",
    "desc": "You are the calm at the centre of the league, the family that never turns on its own. Yellow is close to a religion where you're from, and the whistle goes up whether the season is soaring or sinking. You back your people to a fault. It's hard to earn a place with you and harder still to lose one, because you give the long rope and don't panic when results wobble. You've won five times without ever seeming to chase it, and when you were once forced away for two seasons you simply came back and won again. Your roots run as deep as anyone's, woven into a whole region's sense of itself. You measure yourself by faith kept, not by the table."
  },
  "MI": {
    "tagline": "Five titles and a machine built to win, where the standard is simple: winning is not negotiable.",
    "desc": "You are the professional's professional, the operation everyone else measures against. Winning isn't a hope for you, it's the baseline, and everything bends toward it. You run on method and cold clarity rather than sentiment, which is how you've built five titles and a habit of peaking exactly when it matters. You're loyal to a stable core and have a real gift for raising your own, taking the unproven and making them great. But you'll make the hard, unsentimental call when the numbers demand it, even moving on from a legend, because results come before feelings. Others find you clinical and a little cold. You'd say you simply refuse to let anything get in the way of the win."
  },
  "RCB": {
    "tagline": "Seventeen years without a trophy and a fanbase that never once wavered, and now, back to back, the cup is finally yours.",
    "desc": "You are the romantic of the league, the one who loved without reward for the longest time and never stopped. Glamour was in you from the start, a side full of superstars and a following that filled the ground in red and gold long before there was anything to celebrate. For seventeen years the cup slipped away, final after final, and still the chant went up every spring: this year, it's ours. You won that loyalty the hard way, through the heartbreak rather than the winning. That is the soul, and it doesn't change now that the wait is over. Because it is over: champions at last, then champions again, with the same faithful faces who stayed through all of it. You feel every result at full volume, and you wouldn't swap a single year of the pain for a colder, easier road to the top."
  },
  "KKR": {
    "tagline": "Star power out front and cold numbers behind it, and three titles that prove the two can live together.",
    "desc": "You are the rare mix of showbiz and spreadsheet, glamour on the surface and hard method underneath. Your nights are loud and starlit, a famous owner and a famous ground and a crowd that roars a name as much as a result. But behind the glow you're one of the most clear-eyed operators around, the first to bring real data into how you build, willing to tear the whole thing up and start clean when the analysis says so, even letting a local hero go for the plan. You're not sentimental about people, you're loyal to the system that keeps working. Three titles say the combination is no accident. You like the spotlight, and you like being right underneath it."
  },
  "DC": {
    "tagline": "Eighteen years, a pile of talent, and still no trophy, the nearly-men forever building toward a first crown.",
    "desc": "You are the talented one still waiting for the moment to arrive. You've been here since the very beginning and rebuilt yourself more than once, chasing a first title that keeps slipping away. Somewhere along the road you found your real purpose: taking young players nobody was sure about and turning them into the future, then trusting them. You're patient with potential and you stand by your people when it matters, even through the worst of times. The drama around you is the churn of always starting again, new leaders, new plans, the restless search for the missing piece. You've come close, once all the way to the final, but the crown stays just out of reach. You keep building anyway, certain your year is coming."
  },
  "SRH": {
    "tagline": "The quiet team everyone quietly respects, run by an owner who wears every win and loss on her face.",
    "desc": "You are the underdog people root for even when they're not yours, the one who goes about the work without the noise the bigger names make. You rose from the ashes of a team that no longer exists and made a home in orange, and your following is smaller but as devoted as any. What gives you away is the heart on the sleeve: the person at the top feels every ball, visibly, and everyone can see it. You spent years as the disciplined, defensive side that ground out results, and then you flipped entirely into the most fearless, all-or-nothing team going, the kind that either blows the roof off or falls apart. Quiet in reputation, loud in feeling. You wouldn't have it any other way."
  },
  "RR": {
    "tagline": "Champions in the very first season with a team of unknowns, and ever since, the smart, scrappy gambler who does it differently.",
    "desc": "You are the clever underdog who never had the biggest budget and never needed it. You won it all in the first year with a side nobody had heard of, the ultimate against-the-odds story, and it set your whole character: find value where others don't look, back the unknown kid, do it your own way. You're one of the smartest operators in the room and also one of the most volatile, because betting on raw talent means the highs are dizzying and the lows are steep. Pink is your colour and a proud old city is your home. Some years the gamble comes off and you unearth the next star. Some years it collapses. You take the rollercoaster because playing it safe was never you."
  },
  "PBKS": {
    "tagline": "Seventeen captains, endless reinvention, and a glamour that never quits, forever tearing it up to chase the formula.",
    "desc": "You are the beautiful chaos of the league, all colour and passion and constant reinvention. You've changed captains more than any side going, changed your name, your look, your plan, always convinced the next overhaul is the one that finally cracks it. The heart is real and it's loud, an owner who lives and dies with every ball and a Punjabi energy that lifts the whole thing. What you've never done is settle, build a steady core, and let it grow. You let your best go and watch them shine elsewhere, then start again from scratch. You've reached the final twice and come up short both times, still chasing a first crown. You're unpredictable to your bones. Nobody, including you, ever quite knows what they'll get."
  },
  "GT": {
    "tagline": "Champions in your very first season and calm about it, the clinical newcomer who just quietly wins.",
    "desc": "You are the newcomer who arrived and immediately won, without fuss and without drama. In your first season you lifted the trophy, something no one had done before, and you've stayed near the top ever since, twice more within a game of the title. You do it the same way every time: a settled core, a balanced side, cool professional heads, and no interest in the noise. Where others overhaul, you trust what works and let it run. You don't do meltdowns and you don't do theatrics, and that steadiness is exactly the point. You're the youngest of the group with the least history, but you've made up the gap with pure competence. You're not here to take part. You're here to win, and you say so plainly."
  },
  "LSG": {
    "tagline": "New money, big names, and no patience, the ambitious arriviste where the owner is the loudest voice in the room.",
    "desc": "You are the newest arrival with the deepest pockets and the shortest fuse. You spent big from day one, chasing the biggest names to announce yourself, and you've never been willing to wait. The defining picture of you is the owner's box, one powerful, demanding figure who sets the whole mood and isn't shy about showing displeasure in public when things go wrong. You have no history to lean on yet and not much of a settled identity, because people and plans turn over fast where you are. The ambition is enormous and so is the drama, and they come from the same place, the person at the top who wants it all now. You haven't won anything yet. You fully intend to, and soon."
  }
};

const vitalStats = {
  "CSK": {
    "firstSeason": 2008,
    "ground": "MA Chidambaram Stadium (Chepauk)",
    "city": "Chennai",
    "capacity": "~50,000",
    "colours": "Yellow and blue",
    "titles": "Five (2010, 2011, 2018, 2021, 2023)",
    "lastTitle": "2023"
  },
  "MI": {
    "firstSeason": 2008,
    "ground": "Wankhede Stadium",
    "city": "Mumbai",
    "capacity": "~33,000",
    "colours": "Blue and gold",
    "titles": "Five (2013, 2015, 2017, 2019, 2020)",
    "lastTitle": "2020"
  },
  "RCB": {
    "firstSeason": 2008,
    "ground": "M. Chinnaswamy Stadium",
    "city": "Bengaluru",
    "capacity": "~40,000",
    "colours": "Red and gold",
    "titles": "Two (2025, 2026)",
    "lastTitle": "2026"
  },
  "KKR": {
    "firstSeason": 2008,
    "ground": "Eden Gardens",
    "city": "Kolkata",
    "capacity": "~66,000",
    "colours": "Purple and gold",
    "titles": "Three (2012, 2014, 2024)",
    "lastTitle": "2024"
  },
  "DC": {
    "firstSeason": 2008,
    "ground": "Arun Jaitley Stadium",
    "city": "Delhi",
    "capacity": "~35,000",
    "colours": "Blue and red",
    "titles": "None yet"
  },
  "SRH": {
    "firstSeason": 2013,
    "ground": "Rajiv Gandhi International Cricket Stadium",
    "city": "Hyderabad",
    "capacity": "~55,000",
    "colours": "Orange and black",
    "titles": "One (2016)",
    "lastTitle": "2016"
  },
  "RR": {
    "firstSeason": 2008,
    "ground": "Sawai Mansingh Stadium",
    "city": "Jaipur",
    "capacity": "~30,000",
    "colours": "Pink and blue",
    "titles": "One (2008)",
    "lastTitle": "2008"
  },
  "PBKS": {
    "firstSeason": 2008,
    "ground": "Maharaja Yadavindra Singh Stadium (Mullanpur)",
    "city": "New Chandigarh",
    "capacity": "~38,000",
    "colours": "Red and silver",
    "titles": "None yet"
  },
  "GT": {
    "firstSeason": 2022,
    "ground": "Narendra Modi Stadium",
    "city": "Ahmedabad",
    "capacity": "~132,000",
    "colours": "Navy and gold",
    "titles": "One (2022)",
    "lastTitle": "2022"
  },
  "LSG": {
    "firstSeason": 2022,
    "ground": "Ekana Cricket Stadium",
    "city": "Lucknow",
    "capacity": "~50,000",
    "colours": "Teal and navy",
    "titles": "None yet"
  }
};

const milestones = {
  "CSK": [
    "Five titles, the joint-most in the league's history, won across 2010, 2011, 2018, 2021 and 2023.",
    "Served a two-season absence in 2016 and 2017, then returned and won the title again in 2018.",
    "Built a dynasty around one long-serving captain and a settled, veteran core rather than constant change.",
    "The yellow home crowd and its whistle are among the most devoted followings in the sport."
  ],
  "MI": [
    "Five titles, level with Chennai for the most in the league's history.",
    "Won back-to-back championships in 2019 and 2020, one of only three sides ever to defend the trophy.",
    "Known for a ruthless, process-driven setup that tends to peak in the knockout stages.",
    "A production line for uncapped domestic talent, turning unknowns into international stars."
  ],
  "RCB": [
    "Waited seventeen seasons for a first title, losing finals in 2009, 2011 and 2016 along the way.",
    "Finally won in 2025, then defended it in 2026, only the third side ever to go back-to-back.",
    "Carried one of the largest and most loyal followings in the league through the long drought.",
    "Long defined by star power and heartbreak in equal measure."
  ],
  "KKR": [
    "Three titles, won in 2012, 2014 and 2024.",
    "Among the first franchises to build seriously around data and analytics.",
    "Backed by a film-star owner and the roar of a famous Kolkata ground.",
    "Known for bold, unsentimental squad calls, including letting local favourites go."
  ],
  "DC": [
    "Yet to win a title, the longest wait of any side present since the very first season.",
    "Reached a maiden final in 2020, losing to Mumbai.",
    "Rebuilt around young, uncapped talent more than once.",
    "Long cast as the talented nearly-men still chasing a first crown."
  ],
  "SRH": [
    "Won the title in 2016, beating Bengaluru in the final.",
    "Rose in 2013 from the base of the disbanded Deccan Chargers side.",
    "Reached further finals in 2018 and 2024.",
    "Shifted from a disciplined, defensive identity into one of the most fearless batting sides in the league."
  ],
  "RR": [
    "Won the very first edition in 2008 with a squad of unknowns on a shoestring budget.",
    "Reached another final in 2022.",
    "Built a lasting identity around unearthing undervalued and uncapped talent.",
    "One of the most analytically driven and boldest recruiters in the league."
  ],
  "PBKS": [
    "Reached the final in 2014 and again in 2025, losing both.",
    "Still chasing a first title after nineteen seasons.",
    "Changed captains and rebuilt more often than any other side.",
    "Known for colour, unpredictability and constant reinvention."
  ],
  "GT": [
    "Won the title in 2022, their very first season, a feat no other side has managed.",
    "Finished runners-up in 2023 and again in 2026.",
    "The youngest current side, entering the league in 2022.",
    "Built on a settled core and a calm, low-drama professionalism."
  ],
  "LSG": [
    "Entered the league in 2022 alongside Gujarat.",
    "Reached the playoffs in each of its first two seasons.",
    "Backed by heavy spending and one of the most visible, hands-on owners in the league.",
    "Yet to win a title, with a fast-changing squad and an identity still forming."
  ]
};

const CARD_BADGES = {
  "CSK": "👑",
  "MI": "💙",
  "RCB": "🦁",
  "KKR": "💜",
  "DC": "🔷",
  "SRH": "☀️",
  "RR": "💗",
  "PBKS": "❤️",
  "GT": "⚡",
  "LSG": "💚"
};

const badgeUrls = {};

export { teamsCopy, vitalStats, milestones, CARD_BADGES, badgeUrls };
