let nametable = ['Aerg-Tval', 'Agn', 'Arvant', 'Belsum', 'Belum', 'Brint', 'Börda', 'Daeru', 'Eldar', 'Felban', 'Gotven', 'Graft', 'Grin', 'Grittr',
  'Haerü', 'Hargha', 'Harmug', 'Jotna', 'Karg', 'Karva', 'Katla', 'Keftar', 'Klort', 'Kratar', 'Kutz', 'Kvetin', 'Lygan', 'Margar', 'Merkari',
  'Nagl', 'Niduk', 'Nifehl', 'Prügl', 'Qillnach', 'Risten', 'Svind', 'Theras', 'Therg', 'Torvul', 'Törn', 'Urm', 'Urvarg', 'Vagal', 'Vatan', 'Von',
  'Vrakh', 'Vresi', 'Wemut'];

let abilitytable = [
  -3, -3, -3, -3,
  -2, -2,
  -1, -1,
  0, 0, 0, 0,
  1, 1,
  2, 2,
  3, 3, 3, 3
];

let eqtable1 = ['Backpack for 7 normal-sized items', 'Sack for 10 normal-sized items', 'Small wagon', 'Donkey'];

let eqtable2 = [
  'Rope (30 feet)',
  '{{}} Torches',
  'Lantern with oil for {{}} hours',
  'Magnesium strip',
  'Random unclean scroll',
  'Sharp needle',
  'Medicine chest ({{}} uses)',
  'Metal file and lockpicks',
  'Bear trap(Presence D14 to Spot, d8 damage)',
  'Bomb(sealed bottle, d10 damage)',
  'A bottle of red poison ({{}} doses)',
  'Silver crucifix'
]

let eqtable3 = [
  'Life elixir {{}} doses (heals d6 hp and removes infection)',
  'Random sacred scroll',
  'Small but vicious dog ({{}} hp, bite d4, only obeys you)',
  '{{}} monkeys that ignore but love you ({{}}hp, D4 punch/bite)',
  'Exquisite perfume worth 25s',
  'Toolbox: 10 nails, tongs, hammer, small saw and drill',
  'Heavy chain (15 feet)',
  'Grappling hook',
  'Shield (-1 hp damage or have the shield break to ignore one attack)',
  'Crowbar (d4 damage)',
  'Lard (may function as 5 meals in a pinch)',
  'Tent',
]

let weaptable = [
  'Femur: d4',
  'Staff: d4',
  'Shortsword: d4',
  'Knife: d4',
  'Warhammer: d6',
  'Sword: d6',
  'Bow: d6',
  'Flail: d8',
  'Crossbow: d8',
  'Zweihänder: d10',
]

let armtable = [
  'no armor (tier 0)',
  'light (fur, padded cloth, leather etc, -d2 damage, tier 1)',
  'medium armor (scale, mail etc, -d4 damage, tier 2)',
  'Heavy armor (splint, plate etc, -d6 damage, tier 3)',
  'shield -1 damage',
]

let badscrolltable = [
  'PALMS OPEN THE SOUTHERN GATE: A ball of fire hits D2 creatures for D8 damage per creature.',
  'TONGUE OF ERIS: A creature of your choice is confused for 10 minutes.',
  'TE-LE-KIN-ESIS: Move an object up to d10x10 feet for D6 minutes.',
  'LUCY-FIRES LEVITATION: Hover for Presence + d10 rounds.',
  'DAEMON OF CAPILLARIES: One creature suffocates for D6 rounds, losing D4 HP per round.',
  'NINE VIOLET SIGNS UNKNOT THE STORM: Produce D2 lightning bolts dealing D6 damage each.',
  'METZHUOTL BLIND YOUR EYE: A creature becomes invisible for D6 rounds or until it is damaged, attacking/defending with DR6.',
  'FOUL PSYCHOMPOMP: Summon (d6): 1-3 d4 skeletons, 4-6 d4 zombies.',
  'EYELID BLINDS THE MIND: d4 creatures fall asleep for onehour unless they succeed on a DR14 test.',
  'DEATH: All creatures within 30 feet lose a total of 4d10 hp.',
]

let goodscrolltable = [
  'GRACE OF A DEAD SAINT: D2 creatures regain D10 HP each.',
  'GRACE FOR A SINNER: A creature of your choice gets +D6 on one roll.',
  'WHISPERS PASS THE GATE: Ask three questions to a deceased creature.',
  'AEGIS OF SORROW: A creature of your choice gains 2D6 extra HP for 10 rounds.',
  'UNMET FATE: One creature, dead for no more than a week, is awakened with terrible memories.',
  'BESTIAL SPEECH: You may speak with animals for d20 minutes.',
  'FALSE DAWN/NIGHT\'S CHARIOT: Light or pitch black for 3D10 minutes.',
  'HERMETIC STEP: You find all traps in your path for 2D10 minutes.',
  'ROSKOE\'S CONSUMING GLARE: D4 creatures lose D8 hp each.',
  'ENOCHIAN SYNTAX: One creature blindly obeys a single command.'
]

let traittable = [
  'Endlessly Aggravated',
  'Inferiority Complex',
  'Problems with Authority',
  'Loud Mouth',
  'Cruel',
  'Egocentric',
  'Nihilistic',
  'Prone To Substance Abuse',
  'Conflicted',
  'Shrewd',
  'Vindictive',
  'Cowardly',
  'Lazy',
  'Suspicious',
  'Ruthless',
  'Worried',
  'Bitter',
  'Deceitful',
  'Wasteful',
  'Arrogant'
]

let woundtable = [
  'Staring manic gaze',
  'Covered in (for some) blasphemous tattoos',
  'Rotting face. Wears a mask',
  'Lost three toes, limps',
  'Starved: gaunt and pale',
  'One hand replaced with rusting hook (d6 damage)',
  'Decaying teeth',
  'Hauntingly beautiful, unnervingly clean',
  'Hands caked with sores',
  'Cataracts slowly but surly spreading in both eyes',
  'Long tangled hair, at least one cockroach in residence',
  'Broken, crushed ears',
  'Juddering and stuttering from nerve damage or stress',
  'Corpulent, ravenous, drooling',
  'One hand lacks thumb and index finger, grips like a lobster',
  'Red, swollen alcoholic\'s nose',
  'Resting maniac face, making friends is hard',
  'Chronic athlete\'s foot. Stinks',
  'Recently slashed and stinking eye covered with a patch',
  'Nails cracked and black, maybe about to drop off',
]

let habittable = [
  'Obsessively collect small sharp stones',
  'Won\'t use a blade without testing it on your own flesh, Arms knitted with scars',
  'Can\'t stop drinking once you start',
  'Gambling addict, Must bet every day, If you lose, raise and bet again',
  'Cannot tolerate criticism of any kind, Results in rage and weeping',
  'Unable to get to the point, Have never actually finished a story',
  'Best friend is a skull, Carry it with you, tell it everything, you trust no one more',
  'You pick your nose so deep it bleeds',
  'Laugh hysterically at your own jokes which you then explain in detail',
  'You insist on telling everyone you are a nihilist and explaining why',
  'Inveterate bug eater',
  'Stress response is aesthetic display, The worse things get the fancier you need to be',
  'Permanent phlegm deposit in throat, Continuously cough, snort, spit and swallow',
  'Pyromaniac',
  'Consistently lose important items and forget vital facts',
  'Insecure shit-stirrer, Will talk about whoever just left the room',
  'You stutter when lying',
  'You giggle insanely at the worst possible times',
  'You whistle while trying to hide, You will deny this, Whistle when 5, 7, 9, 11 or 13 is rolled on a d20',
  'You make jewelry from the teeth of the dead'
]