import React from 'react';

export const pages = [
  require('./img/p1.jpg'),
  require('./img/p2.jpg'),
  require('./img/p3.jpg'),
  require('./img/p4.jpg'),
  require('./img/p5.jpg'),
  require('./img/p6.jpg'),
  require('./img/p7.jpg'),
  require('./img/p8.jpg'),
  require('./img/p9.jpg'),
  require('./img/p10.jpg'),
  require('./img/p11.jpg'),
  require('./img/p12.jpg'),
  require('./img/p13.jpg'),
  require('./img/p14.jpg'),
  require('./img/p15.jpg'),
  require('./img/p16.jpg'),
];

export const stories = [
  {
    index: 0,
    pageIndex: 0,
    customViewportOffsetPercent: 5,
    position: {
      top: 8,
      left: 29.2,
      height: 43,
      width: 14.1,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        IN MEMORIAM.
        <br />
        FARMER. — in ever most loving and proud memory of CAPT. HENRY GAMEL
        FARMER, Seaforth Highlanders, who died on 12th NOV., 1915, of wounds
        received at the Battle of Loos; and of his brother, LIEUTENANT CHARLES
        GEORGE EDGAR FARMER, King’s Royal Rifles, who was killed in action on
        the Somme on 18th Aug., 1916.
      </p>
    ),
    Commentary: () => (
      <p>
        The Battle of the Somme, fought over five months in northern France, was
        one of the bloodiest battles of the First World War. The British army
        suffered 420,000 casualties, the French 200,000 and the Germans nearly
        500,000. F Scott Fitzgerald captured its futility in his novel Tender is
        the Night: “See that little stream — we could walk to it in two minutes.
        It took the British a month to walk to it — a whole empire walking very
        slowly, dying in front and pushing forward behind.”
      </p>
    ),
  },
  {
    index: 1,
    pageIndex: 0,
    position: {
      top: 56.8,
      left: 56.9,
      height: 32.9,
      width: 13.8,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        A NATIONAL TRIBUTE to the NURSES of the GREAT WAR.
        <br />
        The part that the Nurses have played in the Great War is worthy of the
        deepest appreciation. They have done splendidly. They are worthy of of a
        Nation’s heartfelt gratitude. Show your practical appreciation by
        helping the NATION’S FUND FOR NURSES.
      </p>
    ),
    Commentary: () => (
      <p>
        With the National Health Service not set up until 1948, three years
        after the end of the Second World War, hospitals and nurses trusts
        relied on donations to survive. The Nation’s Fund for Nurses provided
        support for hospitals that were in serious financial difficulty. In the
        same edition of The Times, Middlesex Hospital ran an advert calling for
        donations due to the “impoverished” state it had been left in. Most war
        hospitals closed in 1919 and many of the nurses – who were often
        volunteers – left the service soon after.
      </p>
    ),
  },
  {
    index: 2,
    pageIndex: 1,
    position: {
      top: 2.7,
      left: 50.5,
      height: 15.1,
      width: 16.4,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => <img src={require('./img/p2c4.png')} />,
    Commentary: () => (
      <p>
        During the First World War 10 million servicemen and civilians were sent
        to detention camps (it’s unknown how many Britons were included in this
        number but 185,000 returned to the UK at the end of the war). In October
        1914, The Times fundraised enough money to buy 512 motorised ambulances
        for St John’s Ambulance trust – the first of their kind to be used in
        Britain. In total, the paper contributed £16,510,023 to the St John’s
        Ambulance and Red Cross trust set up to help repatriate British soldiers
        – about three quarters of their £21,885,035 total.
      </p>
    ),
  },
  {
    index: 3,
    pageIndex: 1,
    position: {
      top: 14,
      left: 34.4,
      height: 34.1,
      width: 16.4,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        AN OFFICER’S SUIT FOR DIVORCE.
        <br />
        LA TERRIERE v. LA TERRIERE AND GREY.
        <br />
        Home on leave in October, 1916, Mr Lobas spent his leave with his wife
        on good terms… After returning to France, she wrote to him a letter in
        June, 1917, that she intended to live her own life, and would not live
        with him again. He wrote a kind letter asking her to reconsider her
        decision. She answered saying she had made her decision, and intended to
        stick to it… He returned to France in August 1917, and came back to this
        country in April, 1918, shortly after being gassed… He offered to take
        his wife back, but she refused.
      </p>
    ),
    Commentary: () => (
      <p>
        This court report is a sign of things to come, with the First World War
        a catalyst for female emancipation. Before 1914, divorce was very rare
        and often scandalous. However, 1923 saw the introduction of the
        Matrimonial Causes Act, which allowed either partner to petition for
        divorce in the case of adultery – a privilege previously reserved for
        men. Statistics show a sharp increase in divorces in the period that
        followed the signing of the Armistice, with 703 in 1917 rising to 1,111
        in 1918, followed by a then-record 3,522 divorces in 1921.
      </p>
    ),
  },
  {
    index: 4,
    pageIndex: 1,
    position: {
      top: 45,
      left: 66.3,
      height: 22.9,
      width: 31.2,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => <img src={require(`./img/p2c5.png`)} />,
    Commentary: () => (
      <p>
        The front line was a melting pot of class and nationality, changing
        language in Britain as a result. Newspaper advertising was not immune to
        this popularisation of military slang, with hundreds of words and
        phrases slipping into common parlance thanks to the men in the trenches.
        Binge drinking, trench coats and snapshots are just some of the examples
        of the language of war which are still part of the English lexicon.
      </p>
    ),
  },
  {
    index: 5,
    pageIndex: 2,
    position: {
      top: 3,
      left: 2.6,
      height: 45.5,
      width: 15.3,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        PEACE.
        <br />
        SIR ARTHUR PEARSON begs to suggest that at this long-awaited moment,
        this moment with its joyous news of peace, there should be made a
        Peace-Offering to men who will not see the joy to which every face will
        bear witness — the heroic soldiers and sailors blinded in the war.
      </p>
    ),
    Commentary: () => (
      <p>
        Thousands of soldiers returned from the trenches blinded by gas attacks,
        bullets and shrapnel. These servicemen and women caught the attention of
        Sir Arthur Pearson, the founder of the <em>Daily Express</em> who was
        losing his sight from glaucoma. In 1915, Pearson founded the Blinded
        Soldiers and Sailors Care Committee to help the visually impaired live
        independent lives. It is now known as Blind Veterans UK.
      </p>
    ),
  },
  {
    index: 6,
    pageIndex: 3,
    position: {
      top: 2.9,
      left: 1,
      height: 97.2,
      width: 17,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => <img src={require('./img/p4c1.png')} />,
    Commentary: () => (
      <p>
        Following the shooting of Archduke Franz Ferdinand there was a rapid
        descent into conflict, with this timeline summarising the key events.
        Enthusiasm greeted Britain’s declaration of war with Germany and it was
        assumed the soldiers would be home in time for Christmas. The population
        was blissfully unaware then of the horror the next four years would
        bring. January 3, 1915 marked the first use of poisonous gas in the war,
        causing thousands of deaths, and by January 27, 1916, conscription had
        to be introduced in the UK due to heavy losses on the Western Front.
      </p>
    ),
  },
  {
    index: 7,
    pageIndex: 4,
    position: {
      top: 2.8,
      left: 49.8,
      height: 44.4,
      width: 16,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        CAREERS FOR WOUNDED OFFICERS.
        <br />
        It is proposed to give Navy and Army officers in hospital or under
        treatment facilities for taking up courses in whatever subjects may
        interest them. As it is felt that teachers should not be provided unless
        a sufficient number of candidates for instruction is forthcoming, the
        classes will for the present be confined to foreign languages. Any
        wounded officers will be welcome between the hours of 10 and 1 or 2.30
        and 6. No fees will be charged and tea will be served to the officers at
        4.30 each day.
      </p>
    ),
    Commentary: () => (
      <p>
        Nearly six million British and German servicemen were left with
        disabilities after the end of the war. In response, the Princess
        Hospital For Limbless Sailors and Soldiers was set up to help those who
        had lost limbs. Leisure activities such as football were a key part of
        the rehabilitation process, with the focus on introducing some normality
        into ex-servicemen’s lives. Those who were disfigured were offered
        specific masks to cover themselves or plastic surgery, the first time
        this had been used in the country.
      </p>
    ),
  },
  {
    index: 8,
    pageIndex: 4,
    position: {
      top: 26.3,
      left: 65.5,
      height: 16.9,
      width: 16.3,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        BRITISH SUBMARINES’ WORK.
        <br />
        Of the work of the British submarines, the records of operations in the
        Bight of Heligoland, the Baltic, and the Sea of Sea of Marmora speak for
        themselves. To give in concrete form an idea of the effectiveness of the
        British submarine service the following shows to their credit :— Enemy
        warships destroyed.— Two battleships, two armoured cruisers, two light
        cruisers, seven destroyers, five gunboats, 20 submarines, one zeppelin,
        five armed auxiliaries.
      </p>
    ),
    Commentary: () => (
      <p>
        The First World War demonstrated the military value of the submarine for
        the first time. Eighty were in service in the Royal Navy when the war
        broke out, with the biggest submarine in the British fleet furnished
        with a 305mm gun intended for coastal bombardments. According to a Times
        report, 43 enemy warships were destroyed by British submarines during
        the war. Unlike the majority of marine accidents, or even wartime
        engagements, when a submarine was destroyed she almost always took her
        entire crew down with her.
      </p>
    ),
  },
  {
    index: 9,
    pageIndex: 4,
    position: {
      top: 45.2,
      left: 1.8,
      height: 19.4,
      width: 16.4,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        THE FUTURE OF FOOTBALL.
        <br />
        Association football has become so important a part of the nation’s
        recreation that its future calls for most careful consideration. The
        principal officers of the Football Association, holding this view, have
        called an informal meeting for to-day, so that those responsible for the
        government of the game can express their opinions.
      </p>
    ),
    Commentary: () => (
      <p>
        In the same article, <em>The Times's </em>
        football correspondent explained the importance of football in Britain
        during the war. “In the summer of 1915, the Football Association (FA)
        prohibited the payment of players during the period of the war, but
        otherwise encouraged the clubs to provide entertainment for the many
        thousands of people who desired this kind of relaxation from war work of
        anxieties”. Football went on to play a considerable role in boosting
        morale during the war – both at home and on the front line – and the
        large attendances witnessed in Britain were a testament to the wisdom of
        the FA’s decision.
      </p>
    ),
  },
  {
    index: 10,
    pageIndex: 4,
    position: {
      top: 83.1,
      left: 33.9,
      height: 7.6,
      width: 16.3,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        AN INFLUENZA PLEA.
        <br />
        The present epidemic is virtually world-wide, irrespective of race,
        community, or calling. Similar epidemics occurred in 1803, 1833, 1837,
        1847, 1890. Infection is conveyed from the sick to the healthy by the
        secretion of the respiratory surfaces. In coughing, sneezing, and even
        in loud talking, these are transmitted through the air for considerable
        distances in the form of a fine spray. Since we are uncertain of the
        primary cause of influenza, no form of inoculation can be guaranteed to
        protect against the disease itself.
      </p>
    ),
    Commentary: () => (
      <p>
        A small article in the paper tucked away on page five, perhaps
        reflecting how unaware people were of the catastrophic impact Spanish
        flu would have on the world’s population. In the months following the
        end of the First World War, the great influenza pandemic killed between
        50 and 100 million people, including nearly 250,000 Britons. David Lloyd
        George, the British prime minister, was one of the first infected,
        although he went on to make a full recovery. Others were not so lucky.
        Some reports claim that nearly a third of the world’s population were
        infected, with suggestions that the outbreak of the highly contagious
        virus accelerated the end of the war.
      </p>
    ),
  },
  {
    index: 11,
    pageIndex: 5,
    position: {
      top: 34,
      left: 33.8,
      height: 27.3,
      width: 16.4,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        SOCIALIST FURY.
        <br />
        The stories I have already sent have described the stages by which the
        war spirit has ebbed away in Germany. A man who returned from Rumeln
        yesterday told me his experiences during the last fortnight. He said
        that the socialist fury eventually became so great that soldiers wearing
        military uniform were seized and their clothes stropped off them. “Away
        with the Kaiser!” was dubbed in red paint on almost every wall and
        building. In this Dutchman’s opinion Germany as we have known it has
        ceased to exist.
      </p>
    ),
    Commentary: () => (
      <p>
        <br />
        Reporting from The Hague, <em>The Times</em> special correspondent
        Ernest Brain sent news of the mood in Germany via prisoners returning to
        the Netherlands. It is clear from his despatch — sent by telegram — that
        immediately after the Armistice was signed large proportions of the
        German people felt betrayed. The federal monarchy, under the leadership
        of Kaiser Wilhelm II, had regularly released statements suggesting they
        were winning the war and praising the German army’s many victories.
      </p>
    ),
  },
  {
    index: 12,
    pageIndex: 6,
    position: {
      top: 2.4,
      left: 1.6,
      height: 24.9,
      width: 16.7,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        PARIS ON THE GREAT DAY.
        <br />
        The din under the windows of the Times office is so great that it is
        almost impossible to dictate this telegram. Every happy possessor of a
        flag immediately is the leader of a gloriously happy band, and the whole
        city resounds with cheers and the Marseillaise. Almost among the first
        to hear of the signature of the Armistice were the British soldiers on
        leave. The tremendous ovation that they received from the crowd showed
        that France acknowledges her debt to British assistance.
      </p>
    ),
    Commentary: () => (
      <p>
        The Armistice came into effect on the 11th hour of the 11th day of the
        11th month. People took to the streets to celebrate across the Allied
        nations. “Conversation in the Strand was impossible owing to the din of
        cheers, whistles, hooters and fireworks” reported the{' '}
        <em>Daily Mirror</em> about the crowds in London. In the US, soldiers
        rode in trucks with signs reading “To Hell with the Kaiser.”
      </p>
    ),
  },
  {
    index: 13,
    pageIndex: 7,
    position: {
      top: 2.5,
      left: 33.6,
      height: 58.6,
      width: 16.3,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        KING’S THANKS TO THE FORCES.
        <br />
        Ever since that fateful Fourth of August, 1914, I have remained
        steadfast in my confidence that, whether fortune frowned or smiled, the
        Royal Navy would once more prove the sure shield of the British Empire
        in the hour of trial. Never in its history has the Royal Navy, with
        God’s help, done greater things for us, nor better sustained its old
        glories and the chivalry of the seas. I am proud to have served in the
        navy. I am prouder still to be it's Head on this memorable day.
      </p>
    ),
    Commentary: () => (
      <p>
        An open letter sent to all daily national newspapers, the King’s
        correspondence expressed his gratitude for the sacrifice made by those
        in the navy, army and air force. King George V had a particular soft
        spot for the Royal Navy, having served in its ranks from 1877 until his
        older brother’s sudden death in 1891, which put him in direct line to
        the throne. George V started his career on the HMS <em>Bacchante</em>{' '}
        and toured the colonies of the British empire. His last active service
        was in command of the HMS <em>Melampus</em> from 1891 to 1892.
      </p>
    ),
  },
  {
    index: 14,
    pageIndex: 8,
    position: {
      top: 2.5,
      left: 82.2,
      height: 31,
      width: 17.2,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        WELCOMING THE NEWS.
        <br />
        At 11 o’clock exactly a typewritten copy of the Prime Minister’s
        announcement of the cessation of hostilities was hung outside the
        railings. From that moment a crowd began to collect. Men and women ran
        along the Mall or through Green Park. Soon there was a triple row on the
        pavement and the plinth of the Queen Victoria Memorial was crowded with
        a cheering throng. There came a brief pause, and then the band – that of
        the Irish Guards – played “Rule Britannia”. Enthusiasm became unbounded.
      </p>
    ),
    Commentary: () => (
      <p>
        Upon the announcement of Armistice, maroon rockets – previously used as
        alarms to warn that German bombers were approaching – were fired to
        indicate the all clear on the home front. Ecstatic crowds gathered,
        waving Union flags and dancing in the street. Impromptu parties
        continued through the night. David Lloyd George, the prime minister,
        said: “The sons and daughters of the people have done it. They have won
        this hour of gladness, and the whole country has done its duty.”
      </p>
    ),
  },
  {
    index: 15,
    pageIndex: 8,
    position: {
      top: 88.9,
      left: 66.1,
      height: 9.8,
      width: 16.3,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        <img src={require(`./img/p9c5.png`)} />
      </p>
    ),
    Commentary: () => (
      <p>
        Arthur Conan Doyle, best known for writing the Sherlock Holmes stories,
        was a prolific writer for <em>The Times</em>. His first letter to the
        editor was published on 14 December 1892 and he regularly expressed his
        opinions on the war. He stood for parliament twice as a Liberal
        Unionist, in 1900 and 1906, but was unsuccessful on both occasions. Mr
        Doyle’s letter sums up the anti-German sentiment that presided in the UK
        after the war.
      </p>
    ),
  },
  {
    index: 16,
    pageIndex: 8,
    position: {
      top: 94.6,
      left: 50.1,
      height: 4.1,
      width: 16.5,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        TO-DAY’S CASUALTIES.
        <br />
        Casualties to 193 officers are officially reported to-day, and in
        addition we announce unofficially the death of 22 officers. The War
        Office has also issued lists of 5,120 casualties in the ranks.
      </p>
    ),
    Commentary: () => (
      <p>
        A “roll of honour” listing the British war dead and wounded was
        published in The Times a few days a week throughout the First World War.
        Some 700,000 British soldiers were killed during the conflict – roughly
        11.5 per cent of the six million men who were mobilised. Around 17
        million soldiers and civilians were killed during the conflict, with a
        further 23 million wounded, ranking it among the deadliest in human
        history. More Britons died in the First World War than any other
        conflict. The total number of deaths includes nine million military
        personnel and about eight million civilians, including six million due
        to famine and disease.
      </p>
    ),
  },
  {
    index: 17,
    pageIndex: 9,
    position: {
      top: 2.6,
      left: 49.7,
      height: 33.4,
      width: 16.44,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        THE LIGHTS OF LONDON.
        <br />
        Nightfall brought no end to the public jubilation. The unceasing drizzle
        was powerless to depress the high spirits of the people. In some of
        those places where merrymakers are mostly to be found the street lamps
        had been unmasked. The porticos of several of the theatres were ablaze
        with light. Overhead the searchlights played. London was not illuminated
        in the old sense, for the fairy lamps and sky signs were not seen; but
        from shop-fronts, upper windows and the lights of the streets, which
        were sufficient to rob the night of some of its darkness.
      </p>
    ),
    Commentary: () => (
      <p>
        The Home Office informed police authorities that the wartime Lighting
        Regulation (as part of the Defence of the Realm Act of August 1914)
        would slowly be lifted, and this limitation was largely due to coal
        shortages. On November 12, fireworks and bonfires lit up the streets as
        people celebrated, and many newspapers commented on the strangeness of
        seeing London relatively well-lit at night after years of air-raid
        precautions.
      </p>
    ),
  },
  {
    index: 18,
    pageIndex: 9,
    position: {
      top: 21.3,
      left: 34,
      height: 31,
      width: 16.3,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        REJOICING IN THE STREETS.
        <br />
        Londoners went to business early yesterday morning, wondering. They told
        one another it did not matter – much – whether the Armistice was signed
        or not, since Germany must accept something drastic sooner or later; but
        in their heart of hearts they wanted to hear of preliminaries being
        arranged without delay. They settled down to work with what
        concentration they could muster. Soon, however, a whisper spread…
      </p>
    ),
    Commentary: () => (
      <p>
        The initial Armistice agreement, which laid out the demands for
        reparations to be paid, the surrender of German military material, the
        evacuation of German troops from any invaded territories, and general
        repatriation, was expected to be enacted in 36 days. It was signed at
        5am on November 11, 1918, and the official cessation of hostilities was
        announced at 11am. Though the Armistice ended the fighting, it had to be
        extended three times, until the Treaty of Versailles was signed in June
        the following year.
      </p>
    ),
  },
  {
    index: 19,
    pageIndex: 9,
    position: {
      top: 88.8,
      left: 65.9,
      height: 7.2,
      width: 16.3,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        PEACE DAY NEWS ITEMS.
        <br />
        Rockets were fired from a decorated car as it passed through Catford
        towards London. At Westminster School the boys stopped work and
        immediately made a raid on the “tuck” shop, which was soon cleared out.
        German prisoners in Lewisham Military Hospital were heard to exclaim
        with relief in English “No more fighting, no more killing.”
      </p>
    ),
    Commentary: () => (
      <p>
        Intriguingly these anecdotes of celebrations around the UK mention
        German war prisoners celebrating the end of the war, perhaps an example
        of the continuing importance of propaganda. Germans made up the
        overwhelming majority of war prisoners in the UK between 1914 and 1919.
        At the beginning of the conflict, in September 1914, only 3,100 of the
        13,600 interned in Britain were from the battlefields. The majority of
        the remaining 10,500 came from German civilians in Britain. By November
        1918, however, the British held 115,950 prisoners of war on home soil,
        89,937 of whom had been serving in the German army.
      </p>
    ),
  },
  {
    index: 20,
    pageIndex: 10,
    position: {
      top: 2.8,
      left: 66,
      height: 65.6,
      width: 16.3,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        HOW LONDON TOOK THE NEWS.
        <br />
        Below the surface there was quiet. To every flag-waver or singer in the
        street there were, except at certain points, a dozen silent strollers.
        It was not the quiet of apathy or exhaustion. The recurrence of rumour
        and the denial of rumour during the past few days had not deadened the
        force of the news when it came – the greatest piece of news that England
        has ever heard. If still waters run deep, deep waters run still; and no
        one with any sensitiveness to the spirit of the crowd but felt that the
        famous British phlegm was once more concealing intense emotion. It broke
        out in little ways. Strangers not only spoke to each other, but spoke to
        each other in passing; people smiled at the jolly bands of soldiers
        swinging in the streets, and smiled, with a different kind of smile at
        the wounded, the maimed, the broken, scores of whom seemed to be out
        sunning themselves in the general relief.
      </p>
    ),
    Commentary: () => (
      <p>
        Alongside the jubilation there was an undercurrent of sorrow and emotion
        which tainted celebrations for many. The loss of loved ones during the
        war meant that the relief at the signing of the armistice was bound to
        mixed with sadness, reflected in this report of how London took the
        news.
      </p>
    ),
  },
  {
    index: 21,
    pageIndex: 11,
    position: {
      top: 3.2,
      left: 82.4,
      height: 46.6,
      width: 15.6,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => <img src={require('./img/p12c6.png')} />,
    Commentary: () => (
      <p>
        Pelmanism was devised as a memory system in the 1890s by William Joseph
        Ennever. The scheme was hugely popular in the early 20th century,
        promising to strengthen the mind using a system of scientific mental
        training and curing problems such as forgetfulness, depression, phobia,
        and procrastination. Although the movement has largely been forgotten
        many of the techniques it promoted resemble modern-day mindfulness,
        including yoga-like stretches.
      </p>
    ),
  },
  {
    index: 22,
    pageIndex: 11,
    position: {
      top: 4.4,
      left: 33.9,
      height: 95,
      width: 16.4,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        MILITARY CROSS AWARDS.
        <br />
        The King has approved of the following awards in recognition of
        gallantry and devotion to duty in the field:— LT. G E MacALEVEY.
        R.A.M.C. SPEC. RES. — For great gallantry and resource in evacuating
        casualties from rear aid posts under heavy artillery and machine gun
        fire. Though frequently forced to move on account of hostile fire, he
        never lost touch with any of them, and it was entirely due to his
        untiring devotion that all the casualties were safely cleared.
      </p>
    ),
    Commentary: () => (
      <p>
        The Military Cross was created in 1914 to award acts of exemplary
        gallantry during active service. During his reign, George V awarded
        37,104, which far outweighs the 10,386 awarded by George VI across the
        Second World War.
      </p>
    ),
  },
  {
    index: 23,
    pageIndex: 12,
    position: {
      top: 39.4,
      left: 34.2,
      height: 24.5,
      width: 16.3,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        A DROP IN WAR BOND SALES.
        <br />
        Whatever our rejoicings may be over the cessation of hostilities, there
        must be no losing sight of the needs of the Exchequer, so that it is to
        be hoped that the pent-up emotions of the public finding expression
        after 51 months of war, will now be concentrated on this outlet, in a
        real spirit of thanksgiving for victory
      </p>
    ),
    Commentary: () => (
      <p>
        National War Bonds were first introduced in 1917. They were short-term
        government secured investments, seen as a risk-free way to make money
        and a chance to secure victory for Britain.
      </p>
    ),
  },
  {
    index: 24,
    pageIndex: 13,
    position: {
      top: 2.7,
      left: 50.1,
      height: 45.4,
      width: 16.4,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        HOME COMMERCIAL MARKETS.
        <br />
        The market has been disorganised today owing to the signing of the
        Armistice. At Mark Lane there was a good attendance, but most of the
        stands were closed and trading not seriously attempted.
      </p>
    ),
    Commentary: () => (
      <p>
        Upon the announcement of war in Europe the global stock markets closed
        simultaneously. In London, they did not reopen until September 19, 1914.
        British companies were only allowed to issue new shares if they were in
        the national interest as the government wanted to ensure all available
        capital would fund the ever-increasing war debt.
      </p>
    ),
  },
  {
    index: 25,
    pageIndex: 14,
    position: {
      top: 6.3,
      left: 15.8,
      height: 32.1,
      width: 14.2,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        SITUATIONS VACANT.
        <br />
        Retired field officer, active Service 1914-18, requires position as
        manager or buyer for general merchants export and import business: over
        20 years’ experience; adequate remuneration; could introduce some
        capital: own business closed down owing to war.
      </p>
    ),
    Commentary: () => (
      <p>
        Adverts taken out by soldiers after the war reflected the difficult
        situation faced by those returning from the front, with many facing up
        to years of unemployment. Destitute ex-servicemen sold the song sheet
        <em>The unemployed ex-serviceman’s</em> appeal for a penny, as an
        alternative to begging on the streets. It read: “I worked hard enough in
        the Service, Defending the old folk at home; But to find work just now
        is much harder, And so I am forced thus to roam.” In May 1920, under 1
        per cent of the insured labour force was registered as unemployed. That
        figure rose to 23 per cent within the year.
      </p>
    ),
  },
  {
    index: 26,
    pageIndex: 14,
    position: {
      top: 39,
      left: 1.9,
      height: 59,
      width: 16.4,
    },
    author: {
      name: 'Sebastian Faulks',
      picture: 'Seb@2x.png',
    },
    Excerpt: () => (
      <p>
        FALLEN OFFICERS.
        <br />
        SECOND LIEUTENANT BRIAN RIVERSDALE OSBORNE, the only son of Captain and
        Mrs. C. A. Osborne, of 11 Selwood-place, S.W., was killed on November 4,
        “while leading his platoon in a most gallant manner.” He had already
        been recommended for the Military Cross for his conspicuous work in an
        attack on October 9.
      </p>
    ),
    Commentary: () => (
      <p>
        <em>The Times</em> lists hundreds of fallen soldiers in the paper
        published on November 12, 1918. George Edwin Ellison was the last
        British soldier to be killed in action during the First World War, on
        November 11. He died on the outskirts of Mons, Belgium, while on a
        patrol, 90 minutes before the Armistice came into effect.
      </p>
    ),
  },
];
