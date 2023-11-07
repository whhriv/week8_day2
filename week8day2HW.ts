// Design a flexible OOP system to describe characters in a RPG game

// There are 4 Unique Characters which use Different Types of Attacking mechanisms and Defending mechanisms.

// Orges - fights with club and defends with shield

// Peons - fights with club and defends with shield

// Knights - fights with a Sword and defends with Armor

// Archer - fights with Bow and Arrow and has only is tunic to protect them

// All Characters can collect gold and this will always be the same for every new type of character

// At the end of this each character should be able to attack and defend and collect gold. If needed any character should be able to change his fighting style, say if a knight losing his sword, but finds a club he should be able to change his fighting mechanism to use the club

interface Attackable{
    attack():void;
}
interface Defendable{
    defend():void;
}
interface Collectable{
    collect():void;
}

// class Attack implements Attackable{
//     attack():void;
//     console.log('Attack!')
// }
// class Defend implements Defendable{
//     defend():void;
//     console.log('defend!')
//}
class Collect implements Collectable{
    collect(): void{
    console.log('I LOVE GOLD!!')
}
}
class AttackWithSword implements Attackable{
    attack(): void {
        console.log('Attacks with Sword')
    }
}
class AttackWithArrow implements Attackable{
    attack(): void {
        console.log('fights with bow and arrow')
    }
}
class AttackWithClub implements Attackable{
    attack():void {
        console.log('Attacks with Club')
    }
}
class DefendsWithShield implements Defendable{
    defend(): void {
        console.log('defends with shield')
    }
}
class DefendsWithArmor implements Defendable{
    defend(): void {
        console.log('defends with armor')
    }
}
class DefendsWithtunic implements Defendable{
    defend(): void{
        console.log("doesn't even defend against stains....")
    }
}
abstract class Character implements Attackable, Defendable, Collectable {
    protected attackAbility$: Attackable
    protected defendAbility$: Defendable
    protected collectAbility$: Collectable


    

    set attackAbility(aa:Attackable){
        this.attackAbility$ = aa
    }

    set defendAbility(da: Defendable){
        this.defendAbility$ = da 
    }
    set collectAbility(ca: Collectable){
        this.collectAbility$ = ca 
    }
    attack(): void{
        this.attackAbility$.attack()
    }
    defend(): void{
        this.defendAbility$.defend()
    }
    collect(): void{
        this.collectAbility$.collect()
    }
}

class Orges extends Character {
    attackAbility$ = new AttackWithClub()
    defendAbility$ = new DefendsWithShield()
    collectAbility$ = new Collect()
}
class Peons extends Character {
    attackAbility$ = new AttackWithClub()
    defendAbility$ = new DefendsWithShield()
    collectAbility$ = new Collect()
}
class Knights extends Character {
    attackAbility$ = new AttackWithSword()
    defendAbility$ = new DefendsWithArmor()
    collectAbility$ = new Collect()
}
class Archer extends Character {
    attackAbility$ = new AttackWithArrow()
    defendAbility$ = new DefendsWithtunic()
    collectAbility$ = new Collect()
}

let allCharacters: Character[] = [
    new Orges(),
    new Peons(),
    new Knights(),
    new Archer()
]
for (let character of allCharacters) {
    console.log('--------------')
    character.attack()
    character.defend()
    character.collect()
    console.log('--------------')
}

let william: Character = new Archer();
william.attack()
william.defend()

let beth: Character = new Orges();
beth.collect()

let brian: Character = new Knights();
brian.defend()

brian.defendAbility = new DefendsWithtunic();
brian.defend()
//doesn't even defend against stains

william.defendAbility = new DefendsWithArmor()
william.defend()