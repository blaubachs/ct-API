# ct-API

# Users
- Username/Password
- Can have multiple *characters*
- Can own multiple *expeditions*
- Belongs to expeditions invited by another user.

# Expeditions
- One owner that is a *user*
- Multiple users can belong to this.
- Essentially a chat room.

# Characters
- Belongs to one user.
- Has a name.
- Has a description.
- Character stats.

## Stat system
---
Generally stats will be from 0-100. Your character starts with 100 points to distribute between your stats, and can be distributed out so long as the total does not exceed 100 at character creation. 

Stats can be gained by succeeding multiple checks in their respective categories. 

- For example, a successful strength roll can make you gain strength.

This is subject to change as it may lean towards a system where you level up and gain points to allocate instead. 

## NOT effected by stat allocation
---
- Health: 0-100 
    - *if health reaches 0, character is unstable. If their turn is passed 3 times without any ability to heal, they die*
- Mana: 0-100
    - Essentially your gas tank for spells. 
    - This is meant to be kept simple, and can be regenerated with items or by choosing to rest with your group. 20 is regenerated every hour spent resting.
---
- Strength: 0-100
    - Modifier for physical attacks.
- Magic Ability: 0-100
    - Modifier for magical attacks. 
    - This will reference a different system for magic.
- Endurance: 0-100
    - Modifier for your speed, and overall athletic ability.
- Charisma: 0-100
    - General modifier for all social interactions that feel the need to have a roll.
---

## What about Rolls?
The rolling system works from 1-100. Generally you will have four different outcomes that are possible for each roll.

*Keep in mind these numbers are arbitrary and will change for balance.*

- 1-25: Critical failure.
- 25-50: Failure.
- 50-75: Success.
- 75-100 Critical success.

General "saving throw" type rolls, *(Like a strength check)* will come back with just the response of one of the four possible outcomes, and will be up to the expedition leader's discretion on how it plays out. 

*Generally, the idea is that most of these sorts of rolls only really effect your roleplaying sections in whatever way is determined by your expedition leader.*

For combat, *each* attack will have four different outcomes that are possible. Here's an example: 

Sword:
- Critical failure: Attack is not usable for one turn, you drop the sword.
- Failure: Miss.
- Success: Hit for normal damage.
- Critical success: Double damage.

Modifiers for rolls will be capped so it's *still* possible to miss attacks, though the exact calculations for these and how they affect your rolls will be determined in the future. *Obviously this will be more creatively implemented than what was written above for the sword.*

## Expeditions
What these boil down to really are chat rooms with at least one distinct feature that separates it from just a chat application. This will feature a dynamic interface that will have your abilities, character, etc...

Buttons on this interface allow you to roll your different stats respective saving throws, as well as the combat moves you have learned/acquired over time with your character. During combat, this will be disabled when it is *not* your turn, however, the chat will still be functionable during the entire time.

### Expedition Leaders:

Leaders will have the ability for the following:

1. Create combat encounters.
2. Invite players.
3. Manage players.
4. Manage general settings for the flow of the room.
    - Eventually, adjust what numbers the rolls will encounter crit fail/success, etc.
    - Require players to have certain stats before entering.
    - Decide how enemies attack players, random attack, or the leader decides. (Like a DM in D&D).
5. A "narrator" voice that is sort of the storyteller of that room.
    - Possible OpenAI implementation for stories?

### Expedition members:

Members will have the ability to do the following:

1. Have a 'roleplaying' or 'action' voice which will separate out spoken words.
2. Ability to switch from in character to out of character chatting.
3. See your character sheet, and others.
4. Use the 'combat' or 'roll' menu for attacks or just general rolls.