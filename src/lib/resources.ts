export type Language = 'en' | 'yo' | 'ha' | 'ig' | 'pcm';

export interface EmergencyResource {
  name: string;
  phone: string;
  description: string;
}

export const EMERGENCY_RESOURCES: EmergencyResource[] = [
  {
    name: "MANI (Mentally Aware Nigeria Initiative)",
    phone: "0809 111 6264",
    description: "24/7 Crisis Support for mental health emergencies."
  },
  {
    name: "MANI (Alternative)",
    phone: "0700 636 8254",
    description: "Alternative 24/7 crisis support line."
  },
  {
    name: "Nigeria Suicide Prevention Helpline",
    phone: "0806 210 6407",
    description: "Counseling and support for those in distress."
  }
];

export const CRISIS_TEXT = `Chai, I am so sorry you are carrying a load this heavy right now, but please know that you do not have to carry it alone. Your life matters deeply. Please reach out to people who can support you right now:
- **MANI (Mentally Aware Nigeria Initiative):** 0809 111 6264 or 0700 636 8254
- **Nigeria Suicide Prevention Helpline:** 0806 210 6407
Please talk to them, or a trusted family member. I am here to help you breathe through this moment, but please connect with these real people who care.`;

export const GROUNDING_EXERCISES = {
  "478_BREATHING": [
    {
      step: 1,
      en: "Breathe in through your nose for 4 seconds.",
      yo: "Mí sínú láti imú rẹ fún ìṣẹ́jú àáyá mẹ́rin.",
      pcm: "Breathe in through your nose for 4 seconds.",
      ha: "Yi numfashi ta hanci na tsawon sakan hudu.",
      ig: "Kuo ume site n'imi gị maka sekọnd anọ."
    },
    {
      step: 2,
      en: "Hold your breath for 7 seconds.",
      yo: "Dúró ná, máṣe mí fún ìṣẹ́jú àáyá méje.",
      pcm: "Hold your breath for 7 seconds.",
      ha: "Rike numfashinka na sakan bakwai.",
      ig: "Jide ume gị maka sekọnd asaa."
    },
    {
      step: 3,
      en: "Exhale through your mouth for 8 seconds.",
      yo: "Mí jáde láti ẹnu rẹ fún ìṣẹ́jú àáyá mẹ́jọ.",
      pcm: "Blow out air from your mouth for 8 seconds.",
      ha: "Fitar da numfashi ta bakinka na sakan takwas.",
      ig: "Kuo ume pụọ n'ọnụ gị maka sekọnd asatọ."
    }
  ],
  "THREE_BREATHS": [
    {
      step: 1,
      en: "Let's take 3 deep breaths together. Inhale peace...",
      yo: "Ẹ jẹ́ kí a mí sínú lẹ́ẹ̀mẹ́ta. Mí àlàáfíà sínú...",
      pcm: "Make we take 3 deep breaths together. Inhale peace...",
      ha: "Bari mu yi dogon numfashi sau 3 tare. Shaka zaman lafiya...",
      ig: "Ka anyị kuo ume miri emi ugboro atọ. Kuo udo n'ime..."
    },
    {
      step: 2,
      en: "...Exhale the heavy load. Again, inhale...",
      yo: "...Mí ẹrù wíwọ̀ jáde. Lẹ́ẹ̀kan sí i, mí sínú...",
      pcm: "...Exhale the heavy load. Again, inhale...",
      ha: "...Fitar da nauyin rai. Sake shaka...",
      ig: "...Kuo ibu arọ pụọ. Ọzọ, kuo ume..."
    },
    {
      step: 3,
      en: "...Exhale slowly. One last time, deep breath in... and out.",
      yo: "...Mí jáde jẹ́jẹ́. Ìgbà kẹta, mí sínú dáadáa... kí o sì mí jáde.",
      pcm: "...Exhale small small. Last time, deep breath in... and out.",
      ha: "...Fitar da numfashi a hankali. Karo na karshe, shaka... sannan ka fitar.",
      ig: "...Kuo ume nwayọọ. Ugboro ikpeazụ, kuo ume miri emi... ma kupụ ya."
    }
  ]
};

export const UI_TEXT = {
  greeting: {
    en: "Welcome. I am Ààfíà, your mental health companion. How are you feeling today?",
    yo: "Káàbọ̀. Èmi ni Ààfíà, alábàáṣiṣẹ́ rẹ lórí ìlera ọkàn. Báwo ni ara rẹ lónìí?",
    ha: "Barka da zuwa. Ni ne Ààfíà, abokin zaman lafiyar kwakwalwa. Yaya kake jin kanka yau?",
    ig: "Nnọọ. Abụ m Ààfíà, onye mmekọ ahụike uche gị. Kedu ka ọ dị gị taa?",
    pcm: "Welcome o. I be Ààfíà, your mental health companion. How you dey feel today?"
  },
  emergency_btn: {
    en: "Help / Emergency",
    yo: "Ìrànlọ́wọ́ / Pàjáwìrì",
    ha: "Taimako / Gaggawa",
    ig: "Enyemaka / Mberede",
    pcm: "Help / Emergency"
  },
  input_placeholder: {
    en: "Type your message...",
    yo: "Kọ ọ̀rọ̀ rẹ síhìn...",
    ha: "Rubuta saƙonku...",
    ig: "Dee ozi gị...",
    pcm: "Type wetin dey your mind..."
  },
  send: {
    en: "Send",
    yo: "Fi ránṣẹ́",
    ha: "Aika",
    ig: "Ziga",
    pcm: "Send"
  }
};
