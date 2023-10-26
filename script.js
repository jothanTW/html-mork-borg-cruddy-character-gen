/**
 * firstname - 1d48
 * lastname - 1d48
 * 
 * abilities - 12d6
 * 
 * hp - 1d8
 * 
 * equipment - 1d6/1d12/1d12 + 1ex
 * weapon - 1d10 OR 1d6
 * armor - 1d4 OR 1d2
 * 
 * omens - 1d2
 * 
 * traits - 2d20
 * wounds - 1d20
 * habits - 1d20
 */

const tableSize = 40;
const minSeed = 10000000;
const seedRange = 67108864; // 2 ^ 26
const maxSeed = minSeed + seedRange - 1;

let rollTable = [];

// indices
// don't change these, only add more
// or characters will no longer procedurally generate
const indices = {
  firstname: 0,
  lastname: 1,
  agil1: 2,
  agil2: 3,
  agil3: 4,
  pres1: 5,
  pres2: 6,
  pres3: 7,
  stre1: 8,
  stre2: 9,
  stre3: 10,
  tuff1: 11,
  tuff2: 12,
  tuff3: 13,
  hp: 14,
  eq1: 15,
  eq2: 16,
  eq3: 17,
  eqx: 18,
  weap: 19,
  arm: 20,
  omen: 21,
  trait1: 22,
  trait2: 23,
  wound: 24,
  habit: 25,
  ex2: 26,
  ex3: 27,
  ex4: 28
}

let indexedData = {
  firstname: 0,
  lastname: 1,
  agil1: 2,
  agil2: 3,
  agil3: 4,
  pres1: 5,
  pres2: 6,
  pres3: 7,
  stre1: 8,
  stre2: 9,
  stre3: 10,
  tuff1: 11,
  tuff2: 12,
  tuff3: 13,
  hp: 14,
  eq1: 15,
  eq2: 16,
  eq3: 17,
  eqx: 18,
  weap: 19,
  arm: 20,
  omen: 21,
  trait1: 22,
  trait2: 23,
  wound: 24,
  habit: 25,
  ex2: 26,
  ex3: 27,
  ex4: 28
}

let characterData = {
  id: null,
  name: null,
  agility: null,
  presence: null,
  strength: null,
  toughness: null,
  hp: null,
  equipment: [],
  scrolls: [],
  omens: null,
  traitStr: null
}



function init() {
  createCharacter(
    new URLSearchParams(
      window.location.search
    ).get('id')
  );
  applyCharacter();
}

function createCharacter(seed) {
  if (!seed || seed < minSeed || seed > maxSeed) {
    seed = getRandomId();
  }
  try {
    seed = parseInt(seed);
  } catch (e) {
    seed = getRandomId();
  }
  console.log(seed);

  // make sure this one happens
  document.getElementById("idField").value = seed;

  initializeRollTable(seed);

  hasScroll = false;

  characterData.id = seed;
  characterData.name = nametable[cap(indexedData.firstname, 48)] + ' ' + nametable[cap(indexedData.lastname, 48)];
  characterData.agility = abilitytable[cap(indexedData.agil1, 6) + cap(indexedData.agil2, 6) + cap(indexedData.agil3, 6) + 2];
  characterData.presence = abilitytable[cap(indexedData.pres1, 6) + cap(indexedData.pres2, 6) + cap(indexedData.pres3, 6) + 2];
  characterData.strength = abilitytable[cap(indexedData.stre1, 6) + cap(indexedData.stre2, 6) + cap(indexedData.stre3, 6) + 2];
  characterData.toughness = abilitytable[cap(indexedData.tuff1, 6) + cap(indexedData.tuff2, 6) + cap(indexedData.tuff3, 6) + 2];
  characterData.hp = characterData.toughness + cap(indexedData.hp, 8);
  let eq1 = cap(indexedData.eq1, 6) - 2;
  let eq2 = cap(indexedData.eq2, 12);
  let eq3 = cap(indexedData.eq3, 12);
  if (eq1 >= 0) {
    characterData.equipment.push(eqtable1[eq1]);
  }
  let eqStr = eqtable2[eq2];
  if (eq2 == 1 || eq2 == 6) {
    eqStr = eqStr.replace('{{}}', characterData.presence + 4);
  }
  if (eq2 == 2) {
    eqStr = eqStr.replace('{{}}', characterData.presence + 6);
  }
  if (eq2 == 4) {
    // SCROLL
    eqStr = null;
    characterData.scrolls.push(badscrolltable[cap(indexedData.eqx, 10)]);
    hasScroll = true;
  }
  if (eq2 == 10) {
    eqStr = eqStr.replace('{{}}', cap(indexedData.eqx, 4) + 1);
  }
  characterData.equipment.push(eqStr);

  eqStr = eqtable3[eq3];
  if (eq3 == 0) {
    eqStr = eqStr.replace('{{}}', cap(indexedData.ex2, 4) + 1);
  }
  if (eq3 == 1) {
    // SCROLL
    eqStr = null;
    characterData.scrolls.push(goodscrolltable[cap(indexedData.ex2, 10)]);
    hasScroll = true;
  }
  if (eq3 == 2) {
    eqStr = eqStr.replace('{{}}', cap(indexedData.ex2, 4) + 3);
  }
  if (eq3 == 3) {
    eqStr = eqStr.replace('{{}}', cap(indexedData.ex2, 4) + 1);
    eqStr = eqStr.replace('{{}}', cap(indexedData.ex2, 4) + 3);
  }
  characterData.equipment.push(eqStr);

  let weproll = cap(indexedData.weap, 10);
  let armroll = cap(indexedData, 4);

  if (hasScroll) {
    weproll = cap(indexedData.weap, 6);
    armroll = cap(indexedData, 2);
  }

  eqStr = weaptable[weproll];
  if (weproll == 6 || weproll == 8) {
    eqStr += ', with ' + (characterData.presence + 10) + ' ammo';
  }

  characterData.equipment.push(eqStr);
  if (armroll) {
    characterData.equipment.push(armtable[armroll]);
  }

  characterData.omens = cap(indexedData.omen, 2) + 1;

  let tr1 = cap(indexedData.trait1, 20);
  let tr2 = cap(indexedData.trait2, 20);
  let trStr = traittable[tr1];
  if (tr1 == tr2) {
    if (tr1 == 1 || tr1 == 2) {
      trStr = 'Extreme ' + trStr;
    } else {
      trStr = 'Extremely ' + trStr;
    }
  } else {
    trStr += ' and ' + traittable[tr2];
  }

  characterData.traitStr = trStr + '; ' + woundtable[cap(indexedData.wound, 20)] + '; ' + habittable[cap(indexedData.habit, 20)];
}

function applyCharacter() {
  console.log(characterData);
  document.getElementById('name').textContent = characterData.name;
  document.getElementById('id').textContent = '#' + characterData.id;
  document.getElementById('hp').textContent = 'HP: ' + characterData.hp;
  document.getElementById('omens').textContent = 'Starting Omens: ' + characterData.omens;
  document.getElementById('agility').textContent = 'Agility:   ' + addPlus(characterData.agility);
  document.getElementById('presence').textContent = 'Presence:  ' + addPlus(characterData.presence);
  document.getElementById('strength').textContent = 'Strength:  ' + addPlus(characterData.strength);
  document.getElementById('toughness').textContent = 'Toughness: ' + addPlus(characterData.toughness);

  let eqEle = document.getElementById('equipment');
  for (let e of characterData.equipment) {
    let d = document.createElement('div');
    d.textContent = e;
    eqEle.appendChild(d);
  }

  eqEle = document.getElementById('scrolls');
  for (let e of characterData.scrolls) {
    let d = document.createElement('div');
    d.textContent = e;
    eqEle.appendChild(d);
  }

  document.getElementById('description').textContent = characterData.traitStr;
}

function addPlus(num) {
  if (num >= 0)
    return '+' + num;
  return num;
}

function cap(roll, cap) {
  let n = roll % cap;
  //if (!n) // whoops
  //    return cap;
  return n;
}

function integer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomId() {
  return integer(minSeed, maxSeed);
}

function initializeRollTable(seed) {
  Math.seedrandom(seed);
  rollTable = [];
  for (let i = 0; i < tableSize; i++) {
    rollTable.push(integer(1, 100));
  }
  for (let k of Object.keys(indices)) {
    indexedData[k] = rollTable[indices[k]];
  }
}

function refresh(useId) {
  let params = new URL(window.location.href);
  if (useId) {
    params.searchParams.set("id", document.getElementById("idField").value);
  } else {
    params.searchParams.delete("id");
  }
  window.location.href = params.href;
}