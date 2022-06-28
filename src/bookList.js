const bookList = [
    {
        id:0,
        name:"Harry Potter and the Philosopher's Stone",
        year:"1997",
        details:"When mysterious letters start arriving on his doorstep, Harry Potter has never heard of Hogwarts School of Witchcraft and Wizardry.",
        img:"https://m.media-amazon.com/images/I/5165He67NEL.jpg",
        fav:false
    },
    {
        id:1,
        name:"Harry Potter and the Chamber of Secrets",
        year:"1998",
        details:"Throughout the summer holidays after his first year at Hogwarts School of Witchcraft and Wizardry, Harry Potter has been receiving sinister warnings from a ...",
        img:"https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781408855669&w=&h=570",
        fav:false
    },
    {
        id:2,
        name:"Harry Potter and the Prisoner of Azkaban",
        year:"1999",
        details:"What happens in the book: Harry ends another insufferable summer at the Dursleys and hears about an escaped murderer, Sirius Black, in the Muggle news.",
        img:"https://media1.westword.com/den/imager/u/zoom/13440490/harry-potter-and-the-prisoner-of-azkaban.jpg?cb=1644741969",
        fav:false
    },
    {
        id:3,
        name:"Harry Potter and the Goblet of Fire",
        year:"2000",
        details:"Harry Potter and the Goblet of Fire ... The rules of the Triwizard Tournament, which is about to take place at Hogwarts, only allow wizards over the age of ...",
        img:"https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_FMjpg_UX1000_.jpg",
        fav:false
    },
    {
        id:4,
        name:"Harry Potter and the Order of the Phoenix",
        year:"2003",
        details:"Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series.",
        img:"https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_FMjpg_UX1000_.jpg",
        fav:false
    },
    {
        id:5,
        name:"Harry Potter and the Half-Blood Prince",
        year:"2005",
        details:"Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J.K. Rowling and the sixth and penultimate novel in the Harry Potter",
        img:"https://www.scriptslug.com/assets/posters/_posterPage/12045/harry-potter-and-the-half-blood-prince-2009.webp",
        fav:false
    },
    {
        id:6,
        name:"Harry Potter and the Deathly Hallows",
        year:"2007",
        details:"Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the main Harry Potter ...",
        img:"https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_.jpg",
        fav:false
    },
    {
        id:7,
        name:"When Harry Met Minnie: A True Story of Love and Friendship",
        year:"2000",
        details:"There are true fairy tales. Stories that exist because impossible-to-explain coincidences change everything. Except in real life, not all of them have conventional, happily-ever-after endings. When Harry Met Minnie is that kind of fairy tale, with the vibrant, romantic New York City backdrop of its namesake, the movie When Harry Met Sally, and the bittersweet wisdom of Tuesdays with Morrie. There's a special camaraderie among early-morning dog walkers. Gathering at dog runs in the park, or strolling through the farmer's market at Union Square before the bustling crowd appears, fellow pet owners become familiar-as do the personalities of their beloved animals. In this special space and time, a chance encounter with an old acquaintance changed Martha Teichner's world. As fate would have it, her friend knew someone who was dying of cancer, from exposure to toxins after 9/11, and desperate to find a home for her dog, Harry. He was a Bull Terrier--the same breed as Martha's dear Minnie. Would Martha consider giving Harry a safe, loving new home? In short order, boy dog meets girl dog, the fairy tale part of this story. But there is so much more to this book. After Martha agrees to meet Harry and his owner Carol, what begins as a transaction involving a dog becomes a deep and meaningful friendship between two women with complicated lives and a love of Bull Terriers in common. Through the heartbreak and grief of Carol's illness, the bond that develops changed Martha's life, Carol's life, Minnie's life, Harry's life. As it changed Carol's death as well. In this rich and touching narrative, Martha considers the ways our stories are shaped by the people we meet, and the profound love we can find by opening our hearts to unexpected encounters.",
        img:"https://s26162.pcdn.co/wp-content/uploads/sites/2/2021/04/110ea8feba19ed8f30932f387269c4ee.gif",
        fav:false
    },
    {
        id:8,
        name:"The Angel of Rome: And Other Stories",
        year:"2022",
        details:"We all live like we're famous now, curating our social media presences, performing our identities, withholding those parts of ourselves we don't want others to see. In this collection of stories from Jess Walter, a teenage girl tries to live up to the image of her beautiful, missing mother. An elderly couple confronts the fiction writer eavesdropping on their conversation. A son must repeatedly come out to his senile father while looking for a place to care for the old man. A famous actor in recovery has a one-night stand with the world's most surprising film critic. And in the romantic title story, a shy twenty-one-year-old studying Latin in Rome during the year of my reinvention finds himself face-to-face with the Italian actress of his adolescent dreams.",
        img:"https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/06/0a0940f15b6d6260d25288af6cc09f33.gif",
        fav:false
    },
    {
        id:9,
        name:"Nevada",
        year:"2022",
        details:"Maria Griffiths is almost thirty and works at a used bookstore in New York City while trying to stay true to her punk values. She’s in love with her bike but not with her girlfriend, Steph. She takes random pills and drinks more than is good for her, but doesn’t inject anything except, when she remembers, estrogen, because shes trans. Everything is mostly fine until Maria and Steph break up, sending Maria into a tailspin, and then onto a cross-country trek in the car she steals from Steph. Originally published in 2013 by Topside Press.",    
        img:"https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/06/7cb063ba8f38d9e7c254f0b84cc1ce83.gif",
        fav:false
    },
    {
        id:10,
        name:"One's Company",
        year:"2022",
        details:"Bonnie Lincoln just wants to be left alone. To come home from work, shut out the ghosts of some devastating losses, and unwind in front of the nostalgic, golden glow of her favorite TV show, Three's Company. When Bonnie wins the lottery, a more grandiose vision—to completely shuck off her own troublesome identity—takes shape. She plans a drastic move to an isolated mountain retreat where she can re-create the iconic apartment set of Three's Company and slip into the lives of its main characters. While her best friend, Krystal, tries to drag her back to her old life, Bonnie is determined to transcend pain, trauma, and the baggage of her past by immersing herself in the ultimate binge-watch.",
        img:"https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/06/36883ebfd8860517505a52f7f288b288.gif",
        fav:false
    },
    {
        id:11,
        name:"Our Wives Under the Sea",
        year:"2022",
        details:"Leah is changed. Months earlier, she left for a routine expedition, only this time her submarine sank to the sea floor. When she finally surfaces and returns home, her wife Miri knows that something is wrong. Barely eating and lost in her thoughts, Leah rotates between rooms in their apartment, running the taps morning and night. As Miri searches for answers, desperate to understand what happened below the water, she must face the possibility that the woman she loves is slipping from her grasp.",
        img:"https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/06/5f5492e515b0b2dfd3f45ea44be42962.gif",
        fav:false
    },
    {
        id:12,
        name:"Boys Come First",
        year:"2022",
        details:"This debut novel by Aaron Foley, author of How to Live in Detroit Without Being a Jackass, follows three Black gay millennial men looking for love, friendship, and professional success in the Motor City.",
        img:"https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/06/1f80793d3efc3267f24a7ffdb41a57b3.gif",
        fav:false
    },
    {
        id:13,
        name:"The Kingdom of Sand",
        year:"2022",
        details:"he nameless narrator is a gay man who moved to Florida to look after his aging parents—during the height of the AIDS epidemic—and has found himself unable to leave after their deaths. With gallows humor, he chronicles the indignities of growing old in a small town. At the heart of the novel is the story of his friendship with Earl, whom he met cruising at the local boat ramp. For the last twenty years, he has been visiting Earl to watch classic films together and critique the neighbors. Earl is the only person in town with whom he can truly be himself. Now Earl's health is failing, and our increasingly misanthropic narrator must contend with the fact that once Earl dies, he will be completely alone. He distracts himself with sexual encounters at the video porn store and visits to Walgreens. All the while, he shares reflections on illness and death that are at once funny and heartbreaking.",
        img:"https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/06/6719b7783bc6ba292a6181cdca2d35b3.gif",
        fav:false
    },
    {
        id:14,
        name:"All the Things We Don't Talk about",
        year:"2022",
        details:"Morgan Flowers just wants to hide. Raised by their neurodivergent father, Morgan has grown up haunted by the absence of their mysterious mother Zoe, especially now, as they navigate their gender identity and the turmoil of first love. Their father Julian has raised Morgan with care, but he can't quite fill the gap left by the dazzling and destructive Zoe, who fled to Europe on Morgan's first birthday. And when Zoe is dumped by her girlfriend Brigid, she suddenly comes crashing back into Morgan and Julian's lives, poised to disrupt the fragile peace they have so carefully cultivated. Through it all, Julian and Brigid have become unlikely pen-pals and friends, united by the knowledge of what it's like to love and lose Zoe; they both know that she hasn't changed. Despite the red flags, Morgan is swiftly drawn into Zoe's glittering orbit and into a series of harmful missteps, and Brigid may be the only link that can pull them back from the edge.",
        img:"https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/204b7bc4e1d705b2abb4902ea44d6001.gif",
        fav:false
    },
    {
        id:15,
        name:"Homesickness",
        year:"2022",
        details:"From the award-winning author of Young Skins comes a new collection that brings together eight character-driven stories. A quiet night in a local pub is shattered by the arrival of a sword-wielding fugitive; a funeral party teeters on the edge of this world and the next, as ghosts simply won't lay in wake; a shooting sees a veteran policewoman confront the banality of her own existence; and an aspiring writer grapples with his father's cancer diagnosis and in his despair wreaks havoc on his mentor's life.",
        img:"https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/04/3c16f3b7c0b148bfe637751586ccd968.gif",
        fav:false
    },
    {
        id:16,
        name:"Self-Portrait with Ghost: Short Stories",
        year:"2022",
        details:"From the acclaimed author of Little Gods, comes a story collection that explores self-construction, female resilience, and migrations both literal and transformative.",
        img:"https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/06/f2fd0707fa392a19023e37d891b67413.gif",
        fav:false
    },
    {
        id:17,
        name:"Fifty Shades of Grey by E L James",
        year:"2022",
        details:"When literature student Anastasia Steele goes to interview young entrepreneur Christian Grey, she encounters a man who is beautiful, brilliant, and intimidating. The unworldly, innocent Ana is startled to realize she wants this man and, despite his enigmatic reserve, finds she is desperate to get close to him. Unable to resist Ana’s quiet beauty, wit, and independent spirit, Grey admits he wants her, too — but on his own terms.",
        img:"https://i.insider.com/5bdcbac4bde70f50762851d0?width=1200&format=jpeg&auto=webp",
        fav:false
    },
    {
        id:18,
        name:"The Hunger Games by Suzanne Collins",
        year:"2022",
        details:"In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. But Katniss has been close to dead before — and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weigh survival against humanity and life against love.",
        img:"https://i.insider.com/5c74024a2628987d0e1a2325?width=1200&format=jpeg&auto=webp",
        fav:false
    },
    {
        id:20,
        name:"Catching Fire by Suzanne Collins",
        year:"2022",
        details:"Against all odds, Katniss Everdeen has won the annual Hunger Games with fellow district tribute Peeta Mellark. But it was a victory won by defiance of the Capitol and their harsh rules. Katniss and Peeta should be happy. After all, they have just won for themselves and their families a life of safety and plenty. But there are rumors of rebellion among the subjects, and Katniss and Peeta, to their horror, are the faces of that rebellion. The Capitol is angry. The Capitol wants revenge.",
        img:"https://i.insider.com/5c7403202628985ddf7908e3?width=1200&format=jpeg&auto=webp",
        fav:false
    },
    {
        id:21,
        name:"StrengthsFinder 2.0 by Tom Rath",
        year:"2022",
        details:"Do you have the opportunity to do what you do best every day? Chances are, you don't. All too often, our natural talents go untapped. From the cradle to the cubicle, we devote more time to fixing our shortcomings than to developing our strengths. To help people uncover their talents, Gallup introduced the first version of its online assessment, StrengthsFinder, in 2001 which ignited a global conversation and helped millions to discover their top five talents. In its latest national bestseller, StrengthsFinder 2.0, Gallup unveils the new and improved version of its popular assessment, language of 34 themes, and much more. While you can read this book in one sitting, you'll use it as a reference for decades. ",
        img:"https://i.insider.com/5c7403da0d15f55e464fbb4d?width=1200&format=jpeg&auto=webp",
        fav:false
    },
    {
        id:22,
        name:"Mockingjay by Suzanne Collins",
        year:"2022",
        details:"Katniss Everdeen has survived the Hunger Games twice. But now that she's made it out of the bloody arena alive, she's still not safe. The Capitol is angry. The Capitol wants revenge. Who do they think should pay for the unrest? Katniss. And what's worse, President Snow has made it clear that no one else is safe either. Not Katniss's family, not her friends, not the people of District 12. Powerful and haunting, this thrilling final installment of Suzanne Collins's groundbreaking The Hunger Games trilogy promises to be one of the most talked about books of the year.",
        img:"https://i.insider.com/5c7404802628987a63067ec5?width=1200&format=jpeg&auto=webp",
        fav:false
    },
    {
        id:23,
        name:"Fifty Shades Darker by E L James",
        year:"2022",
        details:"Daunted by the singular tastes and dark secrets of the beautiful, tormented young entrepreneur Christian Grey, Anastasia Steele has broken off their relationship to start a new career with a Seattle publishing house. But desire for Christian still dominates her every waking thought, and when he proposes a new arrangement, Anastasia cannot resist. They rekindle their searing sensual affair, and Anastasia learns more about the harrowing past of her damaged, driven and demanding Fifty Shades.",
        img:"https://i.insider.com/5c740539598e2355403c2097?width=1200&format=jpeg&auto=webp",
        fav:false
    },
    {
        id:24,
        name:"Fifty Shades Freed by E L James",
        year:"2022",
        details:"When unworldly student Anastasia Steele first encountered the driven and dazzling young entrepreneur Christian Grey it sparked a sensual affair that changed both of their lives irrevocably. Shocked, intrigued, and, ultimately, repelled by Christian’s singular erotic tastes, Ana demands a deeper commitment. Determined to keep her, Christian agrees.Now, Ana and Christian have it all — love, passion, intimacy, wealth, and a world of possibilities for their future. But just when it seems that their strength together will eclipse any obstacle, misfortune, malice, and fate conspire to make Ana’s deepest fears turn to reality.",
        img:"https://i.insider.com/5c7405e42628987da51ccae4?width=1200&format=jpeg&auto=webp",
        fav:false
    },
    {
        id:25,
        name:"Gone Girl by Gillian Flyn",
        year:"2022",
        details:"On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne’s fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick’s clever and beautiful wife disappears. Husband-of-the-Year Nick isn’t doing himself any favors with cringe-worthy daydreams about the slope and shape of his wife’s head, but passages from Amy's diary reveal the alpha-girl perfectionist could have put anyone dangerously on edge. Under mounting pressure from the police and the media — as well as Amy’s fiercely doting parents — the town golden boy parades an endless series of lies, deceits, and inappropriate behavior. Nick is oddly evasive, and he’s definitely bitter — but is he really a killer?",
        img:"https://i.insider.com/5bdcbac4bde70f50762851d6?width=1200&format=jpeg&auto=webp",
        fav:false
    },
    {
        id:26,
        name:"The Help by Kathryn Stockett",
        year:"2022",
        details:"Aibileen is a black maid in 1962 Jackson, Mississippi, who’s always taken orders quietly, but lately, she’s unable to hold her bitterness back. Her friend Minny has never held her tongue but now must somehow keep secrets about her employer that leave her speechless. White socialite Skeeter just graduated college. She’s full of ambition, but without a husband, she’s considered a failure.Together, these seemingly different women join together to write a tell-all book about work as a black maid in the South, that could forever alter their destinies and the life of a small town...",
        img:"https://i.insider.com/5c7406921631a358030f796a?width=1200&format=jpeg&auto=webp",
        fav:false
    },
    {
        id:27,
        name:"The Fault in Our Stars by John Green",
        year:"2022",
        details:"Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten.Insightful, bold, irreverent, and raw, The Fault in Our Stars brilliantly explores the funny, thrilling, and tragic business of being alive and in love.",
        img:"https://i.insider.com/5c74075f26289856434bdf8d?width=1200&format=jpeg&auto=webp",
        fav:false
    },
    {
        id:28,
        name:"The Girl on the Train by Paula Hawkins",
        year:"2022",
        details:"EVERY DAY THE SAME Rachel takes the same commuter train every morning and night. Every day she rattles down the track, flashes past a stretch of cozy suburban homes, and stops at the signal that allows her to daily watch the same couple breakfasting on their deck. She's even started to feel like she knows them. Jess and Jason, she calls them. Their life — as she sees it — is perfect. Not unlike the life she recently lost.UNTIL TODAY And then she sees something shocking. It's only a minute until the train moves on, but it's enough. Now everything's changed. Unable to keep it to herself, Rachel goes to the police. But is she really as unreliable as they say? Soon she is deeply entangled not only in the investigation but in the lives of everyone involved. Has she done more harm than good?",
        img:"https://i.insider.com/5c7407992628985672400b22?width=1200&format=jpeg&auto=webp",
        fav:false
    },
    {
        id:29,
        name:"Divergent by Veronica Roth",
        year:"2022",
        details:"One choice can transform you. Beatrice Prior's society is divided into five factions—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). Beatrice must choose between staying with her Abnegation family and transferring factions. Her choice will shock her community and herself. But the newly christened Tris also has a secret, one she's determined to keep hidden, because in this world, what makes you different makes you dangerous.",
        img:"https://i.insider.com/5c74085526289865ea785c08?width=1200&format=jpeg&auto=webp",
        fav:false
    }
];

export default bookList;