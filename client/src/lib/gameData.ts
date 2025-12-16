export interface Question {
  q: string;
  options: string[];
  answer: string;
  level: number;
}

export interface Island {
  id: string;
  name: string;
  emoji: string;
  color: string;
  x: number;
  y: number;
}

export const questionBank: Record<string, Question[]> = {
  noun: [
    { q: "Which word is a noun?", options: ["run", "happy", "dog", "quickly"], answer: "dog", level: 1 },
    { q: "Find the noun: 'The cat sleeps on the bed.'", options: ["sleeps", "on", "bed", "the"], answer: "bed", level: 1 },
    { q: "What is a noun?", options: ["action word", "naming word", "describing word", "connecting word"], answer: "naming word", level: 1 },
    { q: "Which is a proper noun?", options: ["city", "London", "river", "school"], answer: "London", level: 2 },
    { q: "Identify the abstract noun:", options: ["table", "happiness", "teacher", "apple"], answer: "happiness", level: 2 },
    { q: "Which is NOT a noun?", options: ["joy", "quickly", "book", "teacher"], answer: "quickly", level: 2 },
    { q: "Which word is a collective noun?", options: ["bird", "flock", "flying", "sky"], answer: "flock", level: 3 },
    { q: "Find the common noun: 'Dr. Smith works at the hospital.'", options: ["Dr.", "Smith", "works", "hospital"], answer: "hospital", level: 3 },
    { q: "Which is a place noun?", options: ["running", "beautiful", "library", "softly"], answer: "library", level: 3 },
    { q: "Which is a concrete noun?", options: ["freedom", "love", "banana", "courage"], answer: "banana", level: 4 },
    { q: "Identify the plural noun:", options: ["child", "children", "mouse", "tooth"], answer: "children", level: 4 },
    { q: "Which shows more than one?", options: ["box", "boxes", "boxing", "boxer"], answer: "boxes", level: 4 },
    { q: "Find the compound noun:", options: ["sunshine", "bright", "warm", "shining"], answer: "sunshine", level: 5 },
    { q: "Which word names an idea?", options: ["desk", "pencil", "freedom", "chair"], answer: "freedom", level: 5 },
    { q: "Identify the proper noun:", options: ["ocean", "Pacific Ocean", "water", "wave"], answer: "Pacific Ocean", level: 5 },
    { q: "Which word is a noun?", options: ["eat", "apple", "loud", "in"], answer: "apple", level: 1 },
    { q: "Find the noun: 'The car is fast.'", options: ["The", "car", "is", "fast"], answer: "car", level: 1 },
    { q: "Which is a proper noun?", options: ["country", "Spain", "flag", "map"], answer: "Spain", level: 2 },
    { q: "Identify the plural noun:", options: ["cats", "cat", "run", "funny"], answer: "cats", level: 3 },
    { q: "Find the compound noun:", options: ["raincoat", "raining", "wet", "water"], answer: "raincoat", level: 5 }
  ],
  verb: [
    { q: "Which word is a verb?", options: ["jump", "beautiful", "tree", "slowly"], answer: "jump", level: 1 },
    { q: "Find the verb: 'She sings every morning.'", options: ["She", "sings", "every", "morning"], answer: "sings", level: 1 },
    { q: "What does a verb show?", options: ["person", "action", "place", "thing"], answer: "action", level: 1 },
    { q: "Which is a past tense verb?", options: ["run", "running", "ran", "runs"], answer: "ran", level: 2 },
    { q: "Identify the helping verb: 'I am eating lunch.'", options: ["I", "am", "eating", "lunch"], answer: "am", level: 2 },
    { q: "Which verb means now?", options: ["walked", "walk", "will walk", "walking"], answer: "walk", level: 2 },
    { q: "Which is an action verb?", options: ["is", "seem", "dance", "appear"], answer: "dance", level: 3 },
    { q: "Find the linking verb: 'The soup tastes delicious.'", options: ["soup", "tastes", "delicious", "The"], answer: "tastes", level: 3 },
    { q: "Which verb shows being?", options: ["run", "jump", "is", "eat"], answer: "is", level: 3 },
    { q: "Which sentence uses future tense?", options: ["I walked home.", "I walk home.", "I will walk home.", "I am walking."], answer: "I will walk home.", level: 4 },
    { q: "Identify the irregular verb:", options: ["walked", "jumped", "swam", "talked"], answer: "swam", level: 4 },
    { q: "Which is the past tense of 'eat'?", options: ["eated", "ate", "eating", "eats"], answer: "ate", level: 4 },
    { q: "Find the verb phrase: 'She has been studying all day.'", options: ["She", "has been studying", "all", "day"], answer: "has been studying", level: 5 },
    { q: "Which verb needs a helper?", options: ["run", "been running", "runs", "ran"], answer: "been running", level: 5 },
    { q: "Identify the main verb: 'They will go tomorrow.'", options: ["They", "will", "go", "tomorrow"], answer: "go", level: 5 },
    { q: "Which word is a verb?", options: ["chair", "sleep", "green", "happy"], answer: "sleep", level: 1 },
    { q: "Find the verb: 'We play soccer.'", options: ["We", "play", "soccer", "game"], answer: "play", level: 1 },
    { q: "Which is a past tense verb?", options: ["talk", "talked", "talking", "will talk"], answer: "talked", level: 2 },
    { q: "Which sentence uses future tense?", options: ["He cooked.", "He cooks.", "He will cook.", "He is cooking."], answer: "He will cook.", level: 4 },
    { q: "Which verb shows being?", options: ["run", "am", "sleep", "throw"], answer: "am", level: 3 }
  ],
  adjective: [
    { q: "Which word is an adjective?", options: ["run", "blue", "quickly", "house"], answer: "blue", level: 1 },
    { q: "Find the adjective: 'The tall boy won.'", options: ["The", "tall", "boy", "won"], answer: "tall", level: 1 },
    { q: "What does an adjective describe?", options: ["action", "noun", "verb", "sentence"], answer: "noun", level: 1 },
    { q: "Which describes a noun?", options: ["slowly", "bright", "jump", "under"], answer: "bright", level: 2 },
    { q: "Identify the adjective: 'She wore a beautiful dress.'", options: ["She", "wore", "beautiful", "dress"], answer: "beautiful", level: 2 },
    { q: "Which word describes size?", options: ["happy", "tiny", "softly", "run"], answer: "tiny", level: 2 },
    { q: "Which is a comparative adjective?", options: ["tall", "taller", "tallest", "tallness"], answer: "taller", level: 3 },
    { q: "Find the superlative adjective:", options: ["good", "better", "best", "well"], answer: "best", level: 3 },
    { q: "Which compares two things?", options: ["big", "bigger", "biggest", "bigness"], answer: "bigger", level: 3 },
    { q: "Which is a demonstrative adjective?", options: ["happy", "this", "many", "large"], answer: "this", level: 4 },
    { q: "Identify the predicate adjective: 'The cake is delicious.'", options: ["cake", "is", "delicious", "The"], answer: "delicious", level: 4 },
    { q: "Which adjective describes color?", options: ["slowly", "green", "running", "loudly"], answer: "green", level: 4 },
    { q: "Find the compound adjective:", options: ["happy", "well-known", "bright", "small"], answer: "well-known", level: 5 },
    { q: "Which shows the most?", options: ["smart", "smarter", "smartest", "smartly"], answer: "smartest", level: 5 },
    { q: "Identify the adjective: 'An honest person tells the truth.'", options: ["honest", "person", "tells", "truth"], answer: "honest", level: 5 },
    { q: "Which word is an adjective?", options: ["hot", "run", "car", "boy"], answer: "hot", level: 1 },
    { q: "Find the adjective: 'A cold drink.'", options: ["A", "cold", "drink", "cup"], answer: "cold", level: 1 },
    { q: "Which is a comparative adjective?", options: ["short", "shorter", "shortest", "shortly"], answer: "shorter", level: 3 },
    { q: "Which is a superlative adjective?", options: ["fast", "faster", "fastest", "fasting"], answer: "fastest", level: 3 },
    { q: "Which adjective describes a shape?", options: ["round", "red", "loud", "heavy"], answer: "round", level: 4 }
  ],
  adverb: [
    { q: "Which word is an adverb?", options: ["fast", "quickly", "quick", "speed"], answer: "quickly", level: 1 },
    { q: "Find the adverb: 'He runs fast.'", options: ["He", "runs", "fast", "the"], answer: "fast", level: 1 },
    { q: "What does an adverb describe?", options: ["noun", "verb", "pronoun", "preposition"], answer: "verb", level: 1 },
    { q: "Which adverb tells 'how'?", options: ["tomorrow", "here", "gently", "never"], answer: "gently", level: 2 },
    { q: "Identify the adverb: 'She always eats breakfast.'", options: ["She", "always", "eats", "breakfast"], answer: "always", level: 2 },
    { q: "Which word ends in -ly?", options: ["quick", "slowly", "slow", "fast"], answer: "slowly", level: 2 },
    { q: "Which adverb tells 'when'?", options: ["loudly", "outside", "yesterday", "very"], answer: "yesterday", level: 3 },
    { q: "Find the adverb of place:", options: ["slowly", "there", "often", "really"], answer: "there", level: 3 },
    { q: "Which tells where?", options: ["quickly", "inside", "always", "soon"], answer: "inside", level: 3 },
    { q: "Which is an adverb of frequency?", options: ["carefully", "usually", "everywhere", "soon"], answer: "usually", level: 4 },
    { q: "Identify the adverb modifying an adjective: 'She is very tall.'", options: ["She", "is", "very", "tall"], answer: "very", level: 4 },
    { q: "Which adverb tells how often?", options: ["here", "tomorrow", "sometimes", "carefully"], answer: "sometimes", level: 4 },
    { q: "Which adverb shows degree?", options: ["now", "here", "extremely", "daily"], answer: "extremely", level: 5 },
    { q: "Find the adverb: 'The rabbit hopped away.'", options: ["rabbit", "hopped", "away", "The"], answer: "away", level: 5 },
    { q: "Which answers 'to what extent'?", options: ["outside", "tomorrow", "quite", "never"], answer: "quite", level: 5 },
    { q: "Which word is an adverb?", options: ["sadly", "sad", "cry", "tears"], answer: "sadly", level: 1 },
    { q: "Find the adverb: 'He spoke clearly.'", options: ["He", "spoke", "clearly", "words"], answer: "clearly", level: 2 },
    { q: "Which adverb tells 'when'?", options: ["now", "here", "loudly", "up"], answer: "now", level: 3 },
    { q: "Which adverb tells 'where'?", options: ["everywhere", "later", "daily", "softly"], answer: "everywhere", level: 4 },
    { q: "Which adverb shows degree?", options: ["too", "run", "fast", "blue"], answer: "too", level: 5 }
  ],
  preposition: [
    { q: "Which word is a preposition?", options: ["run", "happy", "under", "quickly"], answer: "under", level: 1 },
    { q: "Find the preposition: 'The cat is on the table.'", options: ["cat", "is", "on", "table"], answer: "on", level: 1 },
    { q: "Which shows location?", options: ["and", "but", "between", "or"], answer: "between", level: 1 },
    { q: "Identify the preposition: 'She walked through the door.'", options: ["She", "walked", "through", "door"], answer: "through", level: 2 },
    { q: "Which shows where something is?", options: ["quickly", "above", "happy", "run"], answer: "above", level: 2 },
    { q: "Find the preposition: 'The book is in the bag.'", options: ["book", "is", "in", "bag"], answer: "in", level: 2 },
    { q: "Which is a preposition of time?", options: ["above", "during", "beside", "across"], answer: "during", level: 3 },
    { q: "Find the preposition: 'He hid behind the tree.'", options: ["He", "hid", "behind", "tree"], answer: "behind", level: 3 },
    { q: "Which tells when?", options: ["under", "before", "beside", "near"], answer: "before", level: 3 },
    { q: "Which preposition shows direction?", options: ["at", "toward", "with", "of"], answer: "toward", level: 4 },
    { q: "Identify the compound preposition:", options: ["in", "on", "according to", "at"], answer: "according to", level: 4 },
    { q: "Which preposition means 'next to'?", options: ["below", "beside", "beyond", "beneath"], answer: "beside", level: 4 },
    { q: "Find the prepositional phrase: 'The book on the shelf is mine.'", options: ["The book", "on the shelf", "is mine", "shelf is"], answer: "on the shelf", level: 5 },
    { q: "Which preposition shows movement?", options: ["at", "into", "with", "of"], answer: "into", level: 5 },
    { q: "Identify the preposition: 'We arrived after lunch.'", options: ["We", "arrived", "after", "lunch"], answer: "after", level: 5 },
    { q: "Which word is a preposition?", options: ["over", "jump", "red", "fast"], answer: "over", level: 1 },
    { q: "Find the preposition: 'Sit by the fire.'", options: ["Sit", "by", "the", "fire"], answer: "by", level: 2 },
    { q: "Which shows location?", options: ["inside", "run", "blue", "quickly"], answer: "inside", level: 3 },
    { q: "Which shows direction?", options: ["to", "at", "in", "on"], answer: "to", level: 4 },
    { q: "Find the preposition: 'Walk across the street.'", options: ["Walk", "across", "the", "street"], answer: "across", level: 5 }
  ]
};

export const islands: Island[] = [
  { id: 'noun', name: 'Noun Island', emoji: '🏝️', color: '#22c55e', x: 12, y: 65 },
  { id: 'verb', name: 'Verb Island', emoji: '🌴', color: '#3b82f6', x: 28, y: 32 },
  { id: 'adjective', name: 'Adjective Island', emoji: '🏖️', color: '#f59e0b', x: 48, y: 58 },
  { id: 'adverb', name: 'Adverb Island', emoji: '⛱️', color: '#8b5cf6', x: 68, y: 28 },
  { id: 'preposition', name: 'Preposition Island', emoji: '🗿', color: '#ec4899', x: 85, y: 55 }
];

export const shuffle = <T,>(arr: T[]): T[] => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
