import { Language, CRISIS_TEXT } from './resources';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

let lastResponseIndex: Record<string, number> = {};

const getUniqueResponse = (category: string[], categoryName: string) => {
  let index = Math.floor(Math.random() * category.length);
  if (category.length > 1 && lastResponseIndex[categoryName] === index) {
    index = (index + 1) % category.length;
  }
  lastResponseIndex[categoryName] = index;
  return category[index];
};


const RESPONSES: Record<Language, Record<string, string[]>> = {
  en: {
    greeting: ["Welcome. How can I support you today?", "I'm here for you. What's on your mind?", "It's good to talk. How are you feeling?"],
    stress: [
      "I understand that things feel heavy right now. It's okay to feel this way. How about we try a simple grounding exercise? Just 3 deep breaths.",
      "This sounds incredibly tough. I want you to know that your feelings are valid. Would you like to talk through it, or would a calming exercise help more?",
      "I hear your struggle. Take a moment for yourself. A deep breath can make a difference.",
      "That's a lot to carry. Remember to be kind to yourself. What's one small thing you could do for yourself right now?",
    ],
    proverbs: [
        "Remember the proverb, 'No condition is permanent'. This too shall pass.",
        "As they say, 'A single bracelet does not jingle'. You are not alone in this.",
        "'Smooth seas do not make skillful sailors.' This challenge can make you stronger.",
        "'The patient dog eats the fattest bone.' Patience with yourself is key right now."
    ],
    emergency: [CRISIS_TEXT],
    grounding: ["Let's try a simple breathing exercise to calm your nerves. Are you ready?", "Okay, let's focus on our breath. Find a comfortable spot and let's begin."],
    default: [
        "Thank you for sharing that. It takes courage.", 
        "That sounds like a lot to handle. How are you coping with it all?", 
        "I'm listening. Is there more you'd like to share?",
        "I appreciate you opening up. What has been on your mind the most?"
    ]
  },
  pcm: {
    greeting: ["Welcome o. How I fit help you today?", "I dey here for you. Wetin dey your mind?", "E good say we talk. How you dey feel?"],
    stress: [
      "E be like say your mind heavy well well. E normal to feel like dat. Make we try one small thing to relax? Even if na just 3 deep breaths.",
      "This thing sound really hard, I no go lie. Your feelings make sense. You wan talk more about am, or make we do small exercise to calm body?",
      "I hear you. Take deep breath. You dey do your best, and dat one matter.",
      "Dat na heavy load to carry. Remember to dey gentle with yourself. Wetin be one small thing wey you fit do for yourself right now?",
    ],
    proverbs: [
        "But remember, 'No condition permanent'. This wahala go end.",
        "As dem dey talk, 'One hand no fit tie bundle'. You no dey alone for this matter.",
        "'Na person wey never see wahala dey shout'. Dis one go make you strong more more.",
        "'Who patient, go chop better food.' Try get patience with yourself small."
    ],
    emergency: [CRISIS_TEXT],
    grounding: ["Make we try small breathing exercise to cool your mind. You ready?", "Okay, make we focus on our breath. Find somewhere to relax make we start."],
    default: [
        "Thanks for sharing dis with me. E no easy at all.", 
        "Dat one sound like heavy load. How you dey manage am?", 
        "I dey listen. Anything else wey you wan yarn?",
        "I appreciate say you trust me with this. Wetin dey your mind pass?"
    ]
  },
  yo: {
    greeting: ["Kàábọ̀. Báwo ni mo ṣe le ràn ọ́ lọ́wọ́ lónìí?", "Mo wà níhìn-ín fún ọ. Kí ló wà l'ọ́kàn rẹ?", "Ó dára láti sọ̀rọ̀. Báwo ni ara rẹ?"],
    stress: [
      "Mo gbọ́ yé yín pé nǹkan wunwo l'ọ́kàn yín. Kò burú láti nímọ̀lára bẹ́ẹ̀. Ṣé ẹ fẹ́ ká gbìyànjú ìdánilẹ́kọ̀ọ́ kan fún ìsinmi? Bíi mími mẹ́ta péré.",
      "Ó le gan-an ni. Mo fẹ́ kẹ́ẹ mọ̀ pé ó bójú mu láti nímọ̀lára bẹ́ẹ̀. Ṣé ẹ fẹ́ sọ̀rọ̀ siwaju sii, tàbí kí a ṣe eré ìtura kan?",
      "Mo gbọ́ ìṣòro rẹ. Fún ara rẹ ní àkókò díẹ̀. Mími kan ṣoṣo lè mú ìyàtọ̀ wá.",
      "Ẹrù yẹn wunwo. Rántí láti ṣàánú fún ara rẹ. Kí ni ohun kékeré kan tó o lè ṣe fún ara rẹ nísinsìnyí?",
    ],
    proverbs: [
        "Sugbon ẹ ranti pe, 'Ìgbà kìí lọ bí ìgbà'. Iṣoro yii á dopin.",
        "Gẹ́gẹ́ bí wọ́n ṣe n sọ, 'Ìkánṣoṣo kò dun.' Ẹ kò nìkan wà nínú èyí.",
        "'Ogboni kì í forí gbe odó.' ìpèníjà yìí lè mú yín lágbára síi.",
        "'Ajá onísùúrù níí jẹ egungun tó sanra.' Sùúrù pẹ̀lú ara rẹ ṣe pàtàkì ní àkókò yìí."
    ],
    emergency: [CRISIS_TEXT],
    grounding: ["Ẹ jẹ́ kí a gbìyànjú ìdánilẹ́kọ̀ọ́ mímí rọrùn láti jẹ́ kí ọkàn rẹ balẹ̀. Ṣé o ti ṣe tán?", "Ó dáa, ẹ jẹ́ kí a fọkàn sí mímí wa. Wa ibi tó tù dé, ká bẹ̀rẹ̀."],
    default: [
        "Mo dúpẹ́ pé ẹ fi ìyẹn tó mi létí. Kìí ṣe ohun kékeré.", 
        "Ẹrù yẹn wunwo. Báwo lẹ ṣe n kojú rẹ̀?", 
        "Mo n gbọ́ yín. Ṣé nǹkan míì wà tẹ́ẹ fẹ́ sọ?",
        "Inú mi dùn pé ẹ ṣí sílẹ̀ fún mi. Kí ni ohun tó wà l'ọ́kàn yín jùlọ?"
    ]
  },
  ha: {
    greeting: ["Barka da zuwa. Ta yaya zan iya taimaka muku yau?", "Ina nan don ku. Me ke damun ku?", "Yana da kyau a yi magana. Yaya kake?"],
    stress: [
      "Na fahimci cewa abubuwa suna da nauyi a yanzu. Yana da kyau ka ji haka. Yaya idan mun gwada wani atisayen kwantar da hankali? Numfashi mai zurfi sau 3 kawai.",
      "Wannan yana da matukar wahala. Ina so ka sani cewa yadda kake ji daidai ne. Kana so mu tattauna ko kuwa atisayen kwantar da hankali zai fi taimakawa?",
      "Na ji gwagwarmayar ka. Ka ɗauki ɗan lokaci don kanka. Dogon numfashi zai iya kawo canji.",
      "Wannan nauyi ne mai yawa. Ka tuna ka yi wa kanka alheri. Menene karamin abu daya da za ka iya yi wa kanka a yanzu?",
    ],
    proverbs: [
        "Amma ka tuna, 'Babu yanayin da yake dawwama'. Wannan ma zai wuce.",
        "Kamar yadda ake cewa, 'Hannu daya baya daura jinga'. Ba kai kadai kake ciki ba.",
        "'Ruwan sama baya tsayawa a wuri daya.' Wannan kalubale zai iya karfafa ka.",
        "'Mai hakuri, shiya kan dafa dutse.' Hakuri da kanka shine mabuɗin a yanzu."
    ],
    emergency: [CRISIS_TEXT],
    grounding: ["Bari mu gwada wani sauki na numfashi don kwantar da hankalinka. Ka shirya?", "To, bari mu mai da hankali kan numfashinmu. Nemo wuri mai dadi mu fara."],
    default: [
        "Na gode da ka raba wannan da ni. Yana bukatar karfin hali.", 
        "Wannan nauyi ne mai yawa. Yaya kake jurewa da shi?", 
        "Ina sauraro. Shin akwai wani abu da kake so ka fada?",
        "Na ji dadin yadda ka bude ranka. Menene ya fi damun ka?"
    ]
  },
  ig: {
    greeting: ["Nnọọ. Kedu ka m ga-esi nyere gị aka taa?", "Anọ m ebe a maka gị. Gịnị dị gị n'obi?", "Ọ dị mma ikwu okwu. Kedu ka ọ dị gị?"],
    stress: [
      "Aghọtara m na ihe dị arọ ugbu a. Ọ dị mma inwe mmetụta a. Gịnị ma ọ bụrụ na anyị anwale mmega ahụ dị mfe? Naanị ume miri emi 3.",
      "Nke a siri ike. Achọrọ m ka ị mara na mmetụta gị ziri ezi. Ị chọrọ ka anyị kwuo maka ya, ka mmega ahụ ga-aka enyere aka?",
      "Anụrụ m mgba gị. Wepụta oge maka onwe gị. Ume miri emi nwere ike ime mgbanwe.",
      "Nke ahụ bụ ibu arọ. Cheta imere onwe gị ebere. Gịnị bụ otu obere ihe ị nwere ike imere onwe gị ugbu a?",
    ],
    proverbs: [
        "Ma cheta, 'Ọ dịghị ọnọdụ na-adịgide adịgide'. Nke a ga-agabiga.",
        "Dịka ha na-ekwu, 'Otu nkpisi aka adịghị eke ngwugwu'. Ị nọghị naanị gị na nke a.",
        "'Oké osimiri adịghị eme ndị ọkwọ ụgbọ mmiri mara mma.' Ihe ịma aka a nwere ike ime ka ị sie ike.",
        "'Nkịta onye nwere ndidi na-eri ọkpụkpụ kacha mma.' Ndidi maka onwe gị bụ isi ihe ugbu a."
    ],
    emergency: [CRISIS_TEXT],
    grounding: ["Ka anyị nwaa mmega ahụ dị mfe iji mee ka uche gị dajụọ. Ị dịla njikere?", "Ọ dị mma, ka anyị lekwasị anya na ume anyị. Chọta ebe dị mma ka anyị malite."],
    default: [
        "Daalụ maka ịkọrọ m nke a. Ọ chọrọ obi ike.", 
        "Nke ahụ dị ka ibu arọ. Kedu ka ị na-esi anagide ya?", 
        "Ana m ege ntị. Enwere ihe ọzọ ị ga-achọ ịkọrọ?",
        "Obi dị m ụtọ na ị meghere obi gị. Gịnị kacha nọrọ gị n'uche?"
    ]
  }
};

export function getAIResponse(text: string, lang: Language): string {
  const lowerText = text.toLowerCase();
  const responses = RESPONSES[lang];

  // Emergency keywords
  const emergencyTriggers = ['dying', 'suicide', 'ending it all', 'kill myself', 'hurt myself', 'end it', 'pami', 'kisan kai', 'igbu onwe'];
  if (emergencyTriggers.some(trigger => lowerText.includes(trigger))) {
    return CRISIS_TEXT;
  }

  // Stress keywords
  const stressTriggers = ['stress', 'anxious', 'sad', 'lonely', 'tired', 'heavy', 'traffic', 'money', 'wahala', 'ara nini', 'inira', 'breakup', 'lost my job', 'financial', 'hard'];
  if (stressTriggers.some(trigger => lowerText.includes(trigger))) {
    // 1 in 3 chance of getting a proverb
    if (Math.random() < 0.33) {
        return getUniqueResponse(responses.proverbs, 'proverbs');
    }
    return getUniqueResponse(responses.stress, 'stress');
  }

  // Grounding keywords
  const groundingTriggers = ['calm', 'breath', 'ground', 'exercise', 'quiet', 'relax'];
  if (groundingTriggers.some(trigger => lowerText.includes(trigger))) {
    return getUniqueResponse(responses.grounding, 'grounding');
  }

  // Default
  return getUniqueResponse(responses.default, 'default');
}
