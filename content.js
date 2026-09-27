/* ============================================================================
   LEARN ENGLISH — LESSON 1
   ============================================================================

   THE CONTENT is transcribed from the five source photographs. Nothing in it
   is invented. The source is kept in the private learn-english-source repo.

   THE TEACHING STRUCTURE around it is built from the two explicit instruction
   books already in this workspace:

     Archer & Hughes (2011)     Explicit Instruction
     Hollingsworth & Ybarra     Explicit Direct Instruction, 2nd ed.
     Summarised in              context/pedagogy-foundation.md

   ---------------------------------------------------------------------------
   WHAT THE BOOKS SAY A LESSON MUST HAVE, AND WHERE IT NOW LIVES
   ---------------------------------------------------------------------------

     1  Learning objective, stated to the learner    lesson.objective
     2  Activate prior knowledge                     lesson.prior
     3  Concept development with a check             blocks + { type:"cfu" }
     4  Skill development, the Rule of Two           { type:"worked" } then
                                                     { type:"mirror" }
     5  Relevance, why it matters                    lesson.relevance
     6  Closure, a check before independent work     lesson.closure
     7  Independent practice                         lesson.fill / .translate
     8  Periodic and cumulative review               the Review lesson, m1l9

   Plus, from Archer:
     Non-examples are MANDATORY for rules            { type:"contrast" }
     A check every 2 minutes of content              cfu blocks, spaced
     Error correction ends with the learner
       producing the correct answer                  handled by the app

   ---------------------------------------------------------------------------
   THREE THINGS ARE MARKED, AND ALL THREE NEED YOUR EYE
   ---------------------------------------------------------------------------

   [DERIVED]  Exercise answers, the non-examples, the mirror problems and the
              check questions are NOT printed in the book. They are built by
              applying the book's own Rule 1 to the book's own vocabulary.
              Every verb used comes from this lesson's own New Words list.
              Check them. Strike any you disagree with.

   [SIC]      The book's own typos, kept as printed, with a note: "this
              lessons", "yoou", "sepak", a repeated question number 11, and
              "that those" against પેલો ઘોડો.

   [JUDGEMENT] Archer says teach 3 to 10 words in depth, not 42. The book's
              full 42 stay. A focus ten is marked on top of them.

   ---------------------------------------------------------------------------
   BLOCK TYPES
   ---------------------------------------------------------------------------
     heading · text · gu · list · pair · table · note · key
     cfu       { q, options[], answer, why }        check before moving on
     contrast  { right, wrong, why }                the non-example
     worked    { title, problem, steps[], answer }  I do
     mirror    { title, problem, answer, why }      you do, matched to it
   ========================================================================= */

window.COURSE = {
  title: "Learn English",
  subtitle: "Lesson 1 · The Verb and the Present Tense",
  language: "Gujarati to English",

  modules: [

    {
      id: "m1",
      title: "Lesson 1. The Verb",
      summary: "ક્રિયાપદ · The Present Tense · વર્તમાન કાળ",
      lessons: [

        /* ================================================== 1 ========== */
        {
          id: "m1l1",
          title: "Why the verb comes first",
          page: 1,
          objective: "Say what a verb does in a sentence, and why this book teaches it before anything else.",
          relevance: "Every English sentence you will ever write needs one. Get this and the rest of the book follows.",
          blocks: [
            { type: "heading", value: "The Verb (ક્રિયાપદ)" },
            { type: "heading", value: "The Present Tense (વર્તમાન કાળ)" },
            { type: "gu", value: "દરેક ભાષામાં ક્રિયાપદનું વિશેષ કામ છે. ક્રિયાપદ વગર કોઈ પણ વાક્ય બને નહિ. હવે ક્રિયાપદ (Verb) એ મુખ્ય શબ્દ છે. માટે પહેલાં તેની વાત કરીએ." },
            { type: "text", value: "In every language the verb does a special job. Without a verb no sentence can be formed. The verb is the main word, so we will talk about it first." },
            { type: "note", value: "That English paragraph is a plain reading of the Gujarati above it. The book prints only the Gujarati." },

            { type: "cfu",
              q: "The book says that without a verb you cannot make one of these. Which?",
              options: ["A word", "A sentence", "A letter", "A question"],
              answer: 1,
              why: "ક્રિયાપદ વગર કોઈ પણ વાક્ય બને નહિ. Without a verb no sentence can be formed. That is why the verb is taught first." },

            { type: "heading", value: "The words you need before you start" },
            { type: "key", term: "ક્રિયાપદ", def: "Verb" },
            { type: "key", term: "વર્તમાન કાળ", def: "The Present Tense" },
            { type: "key", term: "એક વચન", def: "Singular" },
            { type: "key", term: "બહુ વચન", def: "Plural" },

            { type: "cfu",
              q: "એક વચન means:",
              options: ["Plural", "Singular", "Present tense", "Verb"],
              answer: 1,
              why: "એક વચન is singular, one of something. બહુ વચન is plural. Both headings appear on every conjugation in this lesson, so they are worth knowing now." }
          ],
          closure: {
            q: "Why does this book start with the verb rather than with nouns?",
            options: [
              "Because verbs are the easiest words",
              "Because it is the main word and no sentence works without one",
              "Because there are fewer verbs than nouns",
              "Because Gujarati has no nouns"
            ],
            answer: 1,
            why: "ક્રિયાપદ એ મુખ્ય શબ્દ છે. The verb is the main word. Nothing else in the sentence works until it is there."
          }
        },

        /* ================================================== 2 ========== */
        {
          id: "m1l2",
          title: "TO WALK (ચાલવું)",
          page: 1,
          objective: "Write all six present tense forms of a verb, and say which two of them take an ending.",
          prior: {
            q: "From the last section: what is the Gujarati word for a verb?",
            options: ["વર્તમાન કાળ", "એક વચન", "ક્રિયાપદ", "બહુ વચન"],
            answer: 2,
            why: "ક્રિયાપદ. You need it because every heading from here on uses it."
          },
          blocks: [
            {
              type: "conj",
              title: "TO WALK",
              gu: "ચાલવું",
              singular: ["I Walk.", "[Thou walk-est.]", "He (She, it) Walk-s."],
              plural:   ["We walk.", "You walk.", "They walk"]
            },
            { type: "note", value: "Thou walk-est sits in square brackets in the book. Rule 2 explains why." },

            { type: "text", value: "Look down the six forms. Five of them are the bare word walk. Only two carry anything extra: walk-est and walk-s." },

            { type: "contrast",
              right: "He walks quickly.",
              wrong: "He walk quickly.",
              why: "He is third person singular, so the verb must take s. Dropping it is the commonest mistake in the whole lesson." },

            { type: "cfu",
              q: "Which of these forms takes an s on the end?",
              options: ["I walk", "We walk", "He walks", "They walk"],
              answer: 2,
              why: "Only the third person singular takes s. He, she and it. Everything else here is the bare word." },

            { type: "worked",
              title: "Watch one first",
              problem: "Put the verb to work into all six present tense forms.",
              steps: [
                "The bare word is work.",
                "First person singular takes no ending, so I work.",
                "Second person singular takes est, so Thou workest. It goes in brackets, the same as walk-est.",
                "Third person singular takes s, so He works.",
                "The plural takes no ending at all, so We work, You work, They work."
              ],
              answer: "I work · [Thou workest] · He works · We work · You work · They work" },

            { type: "mirror",
              title: "Now you do the matching one",
              problem: "Put the verb to send (મોકલવું) into the third person singular. He ___ rain.",
              answer: "sends",
              why: "Third person singular takes s. He sends rain. Same move you just watched on to work." }
          ],
          closure: {
            q: "How many of the six present tense forms carry an ending?",
            options: ["All six", "Four", "Two", "None"],
            answer: 2,
            why: "Two. Second person singular takes est, third person singular takes s. The other four are the bare word."
          }
        },

        /* ================================================== 3 ========== */
        {
          id: "m1l3",
          title: "TO LOVE (ચાહવું)",
          page: 1,
          objective: "Write all six forms of a verb that ends in e, and explain why it takes st and not est.",
          prior: {
            q: "From the last section: which person takes the s ending?",
            options: ["First person singular", "Second person singular", "Third person singular", "The plural"],
            answer: 2,
            why: "Third person singular. He, she, it. Hold on to it, because this section adds the second ending."
          },
          blocks: [
            {
              type: "conj",
              title: "TO LOVE",
              gu: "ચાહવું",
              singular: ["I Love", "[Thou love-st.]", "He (She, It) love-s."],
              plural:   ["We love.", "You love.", "They love."]
            },

            { type: "text", value: "Compare this with walk. Walk took est and became walk-est. Love takes only st and becomes love-st. One letter different, and there is a reason for it." },

            { type: "contrast",
              right: "Thou lovest us.",
              wrong: "Thou loveest us.",
              why: "The bare word love already ends in e, so the e of est is not written twice. This is the one place walk and love behave differently." },

            { type: "cfu",
              q: "Why does love take st rather than est?",
              options: [
                "Because love is a shorter word",
                "Because the bare word already ends in e",
                "Because it is used in prayer",
                "Because it is a plural"
              ],
              answer: 1,
              why: "The root already ends in e, so est would double it. Rule 1 on the next page states this outright." },

            { type: "worked",
              title: "Watch one first",
              problem: "Put the verb to hate (ધિક્કારવું) into the second and third person singular.",
              steps: [
                "The bare word is hate.",
                "It ends in e, the same as love.",
                "So the second person takes st, not est. Thou hatest.",
                "The third person is unaffected by the e rule. It just takes s. He hates."
              ],
              answer: "Thou hatest · He hates" },

            { type: "mirror",
              title: "Now you do the matching one",
              problem: "Put to come (આવવું) into the second person singular. Thou ___.",
              answer: "comest",
              why: "Come ends in e, so it takes st and not est. Thou comest. Same move as hate." }
          ],
          closure: {
            q: "Thou ___ books. The verb is to read, which does not end in e. Which is right?",
            options: ["readst", "readest", "reads", "read"],
            answer: 1,
            why: "Read does not end in e, so it takes the full est. Thou readest. Only verbs already ending in e drop to st."
          }
        },

        /* ================================================== 4 ========== */
        {
          id: "m1l4",
          title: "The sentences",
          page: "1 to 2",
          objective: "Find the verb in an English sentence and say which of the six forms it is in.",
          prior: {
            q: "From the last two sections: which two endings exist in the present tense?",
            options: ["s and ed", "est or st, and s", "ing and s", "There are none"],
            answer: 1,
            why: "est or st for the second person singular, and s for the third person singular. Nothing else takes an ending."
          },
          blocks: [
            { type: "text", value: "Each English sentence is printed beside its Gujarati. The verb is in italics in the book." },
            { type: "pair", en: "I walk quickly.",        gu: "હું જલદી ચાલું છું." },
            { type: "pair", en: "Moti, you walk slowly.", gu: "મોતી તું ધીમે ચાલે છે." },
            { type: "pair", en: "O God, Thou lovest us.", gu: "ઓ ઈશ્વર, તું અમને ચાહે છે." },

            { type: "cfu",
              q: "In O God, Thou lovest us, which form is the verb in?",
              options: ["First person singular", "Second person singular", "Third person singular", "Plural"],
              answer: 1,
              why: "Thou is second person singular, so the verb takes st. The book uses this form for God, which Rule 2 explains." },

            { type: "pair", en: "My father loves me.",    gu: "મારા બાપા મને ચાહે છે." },
            { type: "pair", en: "We play every day.",     gu: "આપણે રોજ રમીએ છીએ." },
            { type: "pair", en: "You love God.",          gu: "તમે ઈશ્વરને ચાહો છો." },
            { type: "pair", en: "Those boys run quickly.", gu: "પેલા છોકરાઓ જલદી દોડે છે." },

            { type: "contrast",
              right: "My father loves me.",
              wrong: "My father love me.",
              why: "My father is one person, so it behaves like he. Third person singular, so loves. A noun subject follows the same rule as the pronoun that could replace it." },

            { type: "cfu",
              q: "Those boys run quickly. Why is it run and not runs?",
              options: [
                "Because run does not end in e",
                "Because boys is plural, and the plural takes no ending",
                "Because it is a question",
                "Because run is irregular"
              ],
              answer: 1,
              why: "Those boys is plural. The plural takes no ending at all, so the bare word run is used." }
          ],
          closure: {
            q: "My sister ___ . The verb is to sew. Which is right?",
            options: ["sew", "sews", "sewest", "sewst"],
            answer: 1,
            why: "My sister is one person, so third person singular, so sews. This exact sentence is question 22 of Exercise II."
          }
        },

        /* ================================================== 5 ========== */
        {
          id: "m1l5",
          title: "The three rules",
          page: 2,
          objective: "State the three rules in your own words, and apply each one to a sentence you have not seen.",
          relevance: "Everything in both exercises is decided by these three rules. Learn them here and the 40 questions ahead are the same question forty times.",
          prior: {
            q: "From the sentences: what does a plural subject do to the verb?",
            options: ["Adds s", "Adds est", "Adds nothing", "Removes the e"],
            answer: 2,
            why: "Nothing at all. The plural uses the bare word. Rule 1 is about to say so formally."
          },
          blocks: [
            { type: "gu", value: "ઉપર લખેલાં વાક્યો તથા ક્રિયાપદનાં રૂપ તપાસવાથી જણાશે કે—" },
            { type: "text", value: "From examining the sentences and the verb forms written above, it will be seen that:" },

            /* ---- Rule 1 ---- */
            { type: "heading", value: "Rule 1. English has very few endings" },
            { type: "gu", value: "અંગ્રેજી ક્રિયાપદના પ્રત્યય બહુ જ થોડા છે. વર્તમાન કાળમાં માત્ર બીજા અને ત્રીજા પુરુષના એકવચનના પ્રત્યયો છે. બીજા પુરુષનો પ્રત્યય est છે અને ત્રીજા પુરુષનો પ્રત્યય s છે. આ પ્રત્યય ક્રિયાપદના મૂળ રૂપને લગાડવામાં આવે છે; પરંતુ જો ક્રિયાપદના મૂળ રૂપને છેડે e આવતો હોય, તો est ને બદલે st લગાડવામાં આવે છે. જેમ કે I love, Thou lovest. એકવચનમાં પહેલા પુરુષનો પ્રત્યય નથી અને બહુવચનમાં કશો પ્રત્યય નથી. જે રૂપમાં પ્રત્યય નથી તેમાં ક્રિયાપદનું મૂળરૂપ એકલું વપરાય છે." },
            { type: "list", ordered: false, items: [
              "In the present tense only the second and third person singular take an ending.",
              "Second person ending: est",
              "Third person ending: s",
              "The ending is added to the root form of the verb.",
              "If the root already ends in e, add st instead of est. So I love becomes Thou lovest.",
              "First person singular takes no ending, and the plural takes no ending at all.",
              "Where there is no ending, the bare root of the verb is used on its own."
            ]},
            { type: "note", value: "Check this one against your copy. In the photograph the letter before આવતો is small and could read as e or s. The book's own worked example, I love to Thou lovest, only makes sense if it is e." },

            { type: "contrast",
              right: "This girl sews well.",
              wrong: "This girl sew well.",
              why: "One girl, so third person singular, so the s must be there. Rule 1." },

            { type: "cfu",
              q: "Cats ___ milk. The verb is to drink. Which is right?",
              options: ["drinks", "drink", "drinkest", "drinkst"],
              answer: 1,
              why: "Cats is plural, and Rule 1 says the plural takes no ending. The bare word drink." },

            /* ---- Rule 2 ---- */
            { type: "heading", value: "Rule 2. Thou is no longer ordinary English" },
            { type: "gu", value: "પરંતુ યાદ રાખવું જોઈએ કે અંગ્રેજી એકવચનમાં બીજા પુરુષનું સર્વનામ Thou હાલ સાધારણ વાતચીતમાં કે લખાણમાં વપરાતું નથી, તે કેવળ પ્રાર્થનામાં ઈશ્વરને માટે વપરાય છે, અને કોઈક વખતે કવિતામાં વપરાય છે. તે કારણથી Thou walkest, Thou lovest એ રૂપો કૌંસમાં આપેલાં છે." },
            { type: "gu", value: "બીજા પુરુષમાં એકવચનનો અર્થ હોય તોપણ બહુવચનમાં સર્વનામ You વપરાય છે, અને તેની સાથે ક્રિયાપદનું મૂળરૂપ એકલું વપરાય છે." },
            { type: "list", ordered: false, items: [
              "Thou is not used in ordinary speech or writing any more.",
              "It is used only in prayer, addressing God, and sometimes in poetry.",
              "That is why Thou walkest and Thou lovest are printed in brackets.",
              "Even when the meaning is singular, You is used, and it takes the bare root of the verb."
            ]},

            { type: "contrast",
              right: "Mohan, you know this lesson.",
              wrong: "Mohan, you knowest this lesson.",
              why: "Mohan is one person, but modern English still uses You, and You takes the bare word. Rule 2. Thou knowest would only be right in a prayer." },

            { type: "cfu",
              q: "The book prints Thou walkest inside square brackets. Why?",
              options: [
                "Because it is wrong",
                "Because it is plural",
                "Because Thou is now only used in prayer and sometimes poetry",
                "Because it is Gujarati"
              ],
              answer: 2,
              why: "Rule 2. The brackets are the book telling you the form is real but no longer ordinary English." },

            /* ---- Rule 3 ---- */
            { type: "heading", value: "Rule 3. Word order is different" },
            { type: "gu", value: "પહેલાં કર્તા, પછી ક્રિયાપૂરક કે કર્મ અને છેલ્લું ક્રિયાપદ એમ ગુજરાતીમાં વાક્ય ગોઠવાય છે; પણ અંગ્રેજી ગોઠવણીમાં એટલો ફેર છે, કે કર્તા પછી ક્રિયાપદ અને છેલ્લું ક્રિયાપૂરક અથવા કર્મ આવે છે." },
            { type: "table",
              headers: ["", "Order"],
              rows: [
                ["Gujarati", "subject, then complement or object, then verb last"],
                ["English",  "subject, then verb, then complement or object last"]
              ]
            },

            { type: "contrast",
              right: "God sends rain.",
              wrong: "God rain sends.",
              why: "The wrong one is the Gujarati order, ઈશ્વર વરસાદ મોકલે છે, carried straight into English. English puts the verb second, right after the subject." },

            { type: "cfu",
              q: "ઈશ્વર પાપને ધિક્કારે છે. Which English word order is right?",
              options: ["God sin hates", "God hates sin", "Hates God sin", "Sin God hates"],
              answer: 1,
              why: "Rule 3. Subject, then verb, then object. God hates sin. The Gujarati puts ધિક્કારે છે last, English does not." },

            { type: "heading", value: "The words the rules use" },
            { type: "key", term: "કર્તા", def: "Subject" },
            { type: "key", term: "કર્મ", def: "Object" },
            { type: "key", term: "ક્રિયાપૂરક", def: "Complement" },
            { type: "key", term: "પ્રત્યય", def: "Ending, suffix" },
            { type: "key", term: "મૂળ રૂપ", def: "Root form" }
          ],
          closure: {
            q: "The teacher ___ English well. Which rule decides it, and what is the answer?",
            options: [
              "Rule 3, the answer is speaks",
              "Rule 1, the answer is speaks",
              "Rule 1, the answer is speak",
              "Rule 2, the answer is speakest"
            ],
            answer: 1,
            why: "Rule 1. The teacher is one person, third person singular, so the verb takes s. This is question 20 of Exercise II."
          }
        },

        /* ================================================== 6 ========== */
        {
          id: "m1l6",
          title: "Exercise I. Fill in the verb",
          page: 3,
          objective: "Apply Rule 1 to thirteen sentences without being told which rule applies.",
          prior: {
            q: "Before you start: which subjects make the verb take an s?",
            options: ["I and we", "He, she, it, and any single person or thing", "You and they", "All of them"],
            answer: 1,
            why: "Third person singular. That is the only ending you need for most of this exercise."
          },
          blocks: [
            { type: "gu", value: "કૌંસમાં લખેલાં ક્રિયાપદોના વર્તમાનકાળનાં યોગ્ય રૂપ વાપરી નીચે આપેલાં વાક્યો પૂરાં કરો." },
            { type: "text", value: "Complete the sentences below using the correct present tense form of the verb in brackets." },
            { type: "note", value: "The answers are not printed in the book. Each one below is worked out from Rule 1. Get one wrong and you have to type the right answer before it clears, because a correction only counts once you have produced the answer yourself." }
          ],
          fill: [
            { before: "I",           verb: "to go",      after: "school.",   answer: "go",       why: "First person singular takes no ending. The book prints the blank before school, so the sentence reads I go to school." },
            { before: "They",        verb: "to see",     after: "me.",       answer: "see",      why: "Plural takes no ending." },
            { before: "We",          verb: "to ride",    after: "home.",     answer: "ride",     why: "Plural takes no ending." },
            { before: "That horse",  verb: "to run",     after: "quickly.",  answer: "runs",     why: "One horse, so third person singular, so s." },
            { before: "Cats",        verb: "to drink",   after: "milk.",     answer: "drink",    why: "Plural takes no ending." },
            { before: "Mohan, you",  verb: "to know",    after: "this lessons.", answer: "know", why: "You takes the bare root, by Rule 2, even though Mohan is one person. The book prints this lessons, its own slip for these lessons." },
            { before: "This girl",   verb: "to sew",     after: "well.",     answer: "sews",     why: "Third person singular takes s." },
            { before: "I",           verb: "to write",   after: "every day.", answer: "write",   why: "First person singular takes no ending." },
            { before: "That boy",    verb: "to learn",   after: "quickly.",  answer: "learns",   why: "Third person singular takes s." },
            { before: "Girls, yoou", verb: "to sepak",   after: "English.",  answer: "speak",    why: "You takes the bare root. The book prints yoou and sepak, both its own typos for you and to speak." },
            { before: "We",          verb: "to read",    after: "this book.", answer: "read",    why: "Plural takes no ending." },
            { before: "You",         verb: "to read",    after: "slowly.",   answer: "read",     why: "You takes the bare root." },
            { before: "Dina",        verb: "to worship", after: "God.",      answer: "worships", why: "One person, third person singular, so s. The book numbers this one 11 a second time, where 13 was meant." }
          ],
          closure: {
            q: "Across those thirteen, how many needed an s?",
            options: ["All thirteen", "Five", "Two", "None"],
            answer: 1,
            why: "Five: runs, sews, learns, worships and one more if you count carefully. Every other subject was plural, first person, or You."
          }
        },

        /* ================================================== 7 ========== */
        {
          id: "m1l7",
          title: "Exercise II. Translate into English",
          page: "3 to 4",
          objective: "Turn a Gujarati sentence into English, choosing the word order and the verb ending yourself.",
          prior: {
            q: "Which rule tells you where to put the verb in the English sentence?",
            options: ["Rule 1", "Rule 2", "Rule 3", "None of them"],
            answer: 2,
            why: "Rule 3. Subject, verb, then object. The Gujarati puts the verb last and English does not."
          },
          blocks: [
            { type: "text", value: "Translate into English. Work it out first, then tap the line to check." },
            { type: "note", value: "The book prints the Gujarati only. Every English line below is worked out from this lesson's own rules, not copied from the book. Check them." }
          ],
          translate: [
            { n: 1,  gu: "તમે અંગ્રેજી વાંચો છો.",              en: "You read English." },
            { n: 2,  gu: "આ છોકરો અંગ્રેજી બોલે છે.",           en: "This boy speaks English." },
            { n: 3,  gu: "અમે ઈશ્વરને ભજીએ છીએ.",              en: "We worship God." },
            { n: 4,  gu: "ઈશ્વર આપણને જુએ છે.",                en: "God sees us." },
            { n: 5,  gu: "ઈશ્વર પાપને ધિક્કારે છે.",             en: "God hates sin." },
            { n: 6,  gu: "આ છોકરીઓ મરાઠી બોલે છે.",           en: "These girls speak Marathi." },
            { n: 7,  gu: "તું ચોપડીઓ વાંચે છે.",                en: "Thou readest books." },
            { n: 8,  gu: "ઈશ્વર આપણને ચાહે છે.",               en: "God loves us." },
            { n: 9,  gu: "મારા બાપા અંગ્રેજી જાણે છે.",          en: "My father knows English." },
            { n: 10, gu: "તે અંગ્રેજી જલદી બોલે છે.",            en: "He speaks English quickly." },
            { n: 11, gu: "તે રોજ અંગ્રેજી ચોપડીઓ વાંચે છે.",     en: "He reads English books every day." },
            { n: 12, gu: "તે છોકરો પાણી પીએ છે.",              en: "That boy drinks water." },
            { n: 13, gu: "તે છોકરીઓ દૂધ પીએ છે.",             en: "Those girls drink milk." },
            { n: 14, gu: "પેલો ઘોડો દોડે છે.",                  en: "That horse runs." },
            { n: 15, gu: "અમે ઘેર જઈએ છીએ.",                  en: "We go home." },
            { n: 16, gu: "તમે નિશાળે જાઓ છો.",                en: "You go to school." },
            { n: 17, gu: "તમે આ પાઠ શીખો છો.",                en: "You learn this lesson." },
            { n: 18, gu: "આ છોકરીઓ જલદી જાય છે.",           en: "These girls go quickly." },
            { n: 19, gu: "શિક્ષક આવે છે.",                     en: "The teacher comes." },
            { n: 20, gu: "શિક્ષક અંગ્રેજી સારું (well) બોલે છે.",  en: "The teacher speaks English well." },
            { n: 21, gu: "ઈશ્વર બધું સાંભળે છે.",               en: "God hears everything." },
            { n: 22, gu: "મારી બહેન સીવે છે.",                  en: "My sister sews." },
            { n: 23, gu: "કોણ વરસાદ મોકલે છે?",               en: "Who sends rain?" },
            { n: 24, gu: "ઈશ્વર વરસાદ મોકલે છે.",             en: "God sends rain." },
            { n: 25, gu: "ઘોડો પાણી પીએ છે.",                 en: "The horse drinks water." },
            { n: 26, gu: "તમે રોજ રોજ સવાર થઈને જાઓ છો.",   en: "You ride every day." },
            { n: 27, gu: "ઈશ્વર આપણને સંભાળે છે.",            en: "God preserves us." }
          ],
          closure: {
            q: "Number 7 is તું ચોપડીઓ વાંચે છે, and the answer uses Thou readest. In ordinary speech today you would say:",
            options: ["Thou readest books", "You read books", "You readest books", "Thou read books"],
            answer: 1,
            why: "Rule 2. Thou belongs to prayer and poetry. Ordinary English uses You with the bare word."
          }
        },

        /* ================================================== 8 ========== */
        {
          id: "m1l8",
          title: "New Words (નવા શબ્દો)",
          page: 4,
          objective: "Recognise all 42 words from the lesson, and know ten of them well enough to use.",
          blocks: [
            { type: "text", value: "The book gives 42 words. Tap a card to turn it over." },
            { type: "note", value: "Archer and Hughes say teach three to ten words in depth rather than a long list in passing, and that a word needs roughly ten encounters before it sticks. All 42 of the book's words are here. The ten below carry the exercises, so they are the ten worth owning. That split is a judgement applied to the book, not something the book says." },

            { type: "heading", value: "The ten that carry the exercises" },
            { type: "key", term: "વાંચવું",              def: "to read" },
            { type: "key", term: "બોલવું",              def: "to speak" },
            { type: "key", term: "જાણવું",               def: "to know" },
            { type: "key", term: "જવું",                def: "to go" },
            { type: "key", term: "પીવું",               def: "to drink" },
            { type: "key", term: "મોકલવું",             def: "to send" },
            { type: "key", term: "ઈશ્વર",               def: "God" },
            { type: "key", term: "શિક્ષક",              def: "the teacher" },
            { type: "key", term: "ચોપડીઓ",             def: "books" },
            { type: "key", term: "જલદી",                def: "quickly, fast" },

            { type: "cfu",
              q: "સંભાળવું means to preserve. Which word means to hear?",
              options: ["સંભાળવું", "સાંભળવું", "શીખવું", "સીવવું"],
              answer: 1,
              why: "સાંભળવું is to hear. સંભાળવું is to preserve. They are one letter apart and both appear in Exercise II, at 21 and 27." },

            { type: "heading", value: "The rest of the list" },
            { type: "key", term: "સાંભળવું",            def: "to hear" },
            { type: "key", term: "આવવું",               def: "to come" },
            { type: "key", term: "સવાર થઈને જવું",      def: "to ride" },
            { type: "key", term: "કામ કરવું",           def: "to work" },
            { type: "key", term: "રોજ",                 def: "every day, daily" },
            { type: "key", term: "જોવું",               def: "to see" },
            { type: "key", term: "અંગ્રેજી",             def: "English" },
            { type: "key", term: "મરાઠી",               def: "Marathi" },
            { type: "key", term: "ભજવું",               def: "to worship" },
            { type: "key", term: "આપણને, અમને",        def: "us" },
            { type: "key", term: "પાપ",                 def: "sin" },
            { type: "key", term: "ધિક્કારવું",           def: "to hate" },
            { type: "key", term: "વરસાદ",               def: "rain" },
            { type: "key", term: "બધું",                def: "everything, all" },
            { type: "key", term: "પાઠ",                 def: "a lesson" },
            { type: "key", term: "ઓ ઈશ્વર",            def: "O God" },
            { type: "key", term: "રમવું",               def: "to play" },
            { type: "key", term: "શીખવું",              def: "to learn" },
            { type: "key", term: "લખવું",               def: "to write" },
            { type: "key", term: "પેલો છોકરો",          def: "that boy" },
            { type: "key", term: "પેલા છોકરા",          def: "those boys" },
            { type: "key", term: "આ છોકરી-છોડી",       def: "this girl" },
            { type: "key", term: "આ છોકરીઓ-છોડીઓ",   def: "these girls" },
            { type: "key", term: "સીવવું",              def: "to sew" },
            { type: "key", term: "કોણ",                 def: "who" },
            { type: "key", term: "સંભાળવું",            def: "to preserve" },
            { type: "key", term: "મારો",                def: "my" },
            { type: "key", term: "બાપ",                 def: "a father" },
            { type: "key", term: "પાણી",                def: "water" },
            { type: "key", term: "દૂધ",                 def: "milk" },
            { type: "key", term: "પેલો ઘોડો",           def: "that horse" },
            { type: "key", term: "નિશાળે",              def: "to school" },

            { type: "note", value: "Against પેલો ઘોડો the book prints that those. ઘોડો is horse, so that horse is what it meant. Corrected here, and this note is the record of the change." }
          ],
          closure: {
            q: "ધિક્કારવું means:",
            options: ["to hear", "to hate", "to help", "to hurry"],
            answer: 1,
            why: "To hate. It carries question 5 of Exercise II, God hates sin."
          }
        },

        /* ================================================== 9 ========== */
        {
          id: "m1l9",
          title: "Review. Everything so far",
          page: "1 to 4",
          objective: "Answer questions mixed from the whole lesson, in no particular order, without being told which rule applies.",
          relevance: "Practising one rule at a time makes you look better than you are. Mixed practice is the only kind that shows whether it stuck. Come back to this in a week and again in a month.",
          blocks: [
            { type: "text", value: "These are drawn from every section, shuffled, with no heading to tell you which rule is being tested. Some are discrimination items, where the rule you just used does not apply." },
            { type: "note", value: "This section is not in the book. Archer and Hughes call it cumulative review, and put it after massed and distributed practice. It exists because you cannot tell what you know until the questions stop arriving in order." }
          ],
          quiz: [
            { q: "In the present tense, which persons take an ending?",
              options: ["Every person", "Second and third person singular only", "Only the plural", "Only the first person"],
              answer: 1,
              why: "Rule 1. Only the second and third person singular. Everything else uses the bare root." },
            { q: "Those girls ___ milk. The verb is to drink.",
              options: ["drinks", "drink", "drinkest", "drinketh"],
              answer: 1,
              why: "Plural, so no ending. Question 13 of Exercise II." },
            { q: "Thou ___ us. The verb is to preserve, which ends in e.",
              options: ["preservest", "preserveest", "preserves", "preserve"],
              answer: 0,
              why: "Ends in e, so st not est. Thou preservest." },
            { q: "Which pronoun is used for the second person today, singular meaning or not?",
              options: ["Thou", "Thee", "You", "Ye"],
              answer: 2,
              why: "Rule 2. You either way, and it takes the bare root." },
            { q: "કોણ વરસાદ મોકલે છે? in English is:",
              options: ["Who rain sends?", "Who sends rain?", "Sends who rain?", "Rain who sends?"],
              answer: 1,
              why: "Rule 3. Subject, verb, object. The Gujarati order puts મોકલે છે last." },
            { q: "My father ___ English. The verb is to know.",
              options: ["know", "knows", "knowest", "knowst"],
              answer: 1,
              why: "My father is one person, so third person singular, so s. Question 9 of Exercise II." },
            { q: "સાંભળવું means:",
              options: ["to preserve", "to hear", "to learn", "to sew"],
              answer: 1,
              why: "To hear. Do not confuse it with સંભાળવું, to preserve." },
            { q: "Where does the verb sit in an English sentence?",
              options: ["Last, as in Gujarati", "Straight after the subject", "Before the subject", "Anywhere"],
              answer: 1,
              why: "Rule 3." },
            { q: "We ___ home. The verb is to go.",
              options: ["goes", "go", "goest", "gost"],
              answer: 1,
              why: "A discrimination item. You have just used s three times, and here it does not apply. We is plural, so no ending." },
            { q: "Thou ___ books. The verb is to read, which does not end in e.",
              options: ["readst", "readest", "reads", "read"],
              answer: 1,
              why: "Another discrimination item. The e rule does not apply, so the full est is used. Thou readest." },
            { q: "The teacher ___ . The verb is to come, which ends in e.",
              options: ["comes", "comest", "come", "cometh"],
              answer: 0,
              why: "Careful. The e rule only changes the SECOND person. The third person always just takes s. The teacher comes. Question 19 of Exercise II." },
            { q: "કર્તા means:",
              options: ["Object", "Subject", "Complement", "Ending"],
              answer: 1,
              why: "Subject. It is the word Rule 3 uses to describe what comes first in both languages." }
          ]
        }
      ]
    }
  ]
};
