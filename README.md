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
