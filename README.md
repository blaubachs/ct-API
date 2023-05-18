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
These are not your typical d20 rolls, instead, your modifier is taken into consideration on the likelihood of succeeding at a roll. Behind the scenes, this will be a roll out of 100, and if your roll is higher than the required "save", you succeed. 

*Okay, but how do I not get too overpowered and succeed everything?*

The modifiers, while going from 0-100, will *NOT* cap out at 100% chance of "doing the thing". The exact calculation for this will be adjusted for balance as necessary until a good "middleground" has been found. (One that gives the player a sense of growth, while not making them completely busted).

Eventually, a system will be implemented with critical failures, mild failures, mild successes, and critical successes, but for now will be a simple pass/fail check.
