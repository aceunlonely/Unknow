import base = require('./base');


// create a randomHuman
export function createHuman(){
    var human = new base.HumenBeing();
    // todo 
}

/**
 *  calc real values
 */
export function refreshHuman(man : base.HumenBeing)
{
    //basicAttr
    var f_basicAttr = function(base,hunterLevel,grow,bonus,max){ return Math.max((base + (hunterLevel -1) * grow + bonus),max);}
    man.basicAttr.str = f_basicAttr(man.basicAttr.str_base,man.hunterLevel,man.hiddenAttr.str_g,man.basicAttr.str_bonus,man.basicAttr.str_max);
    man.basicAttr.vit = f_basicAttr(man.basicAttr.vit_base,man.hunterLevel,man.hiddenAttr.vit_g,man.basicAttr.vit_bonus,man.basicAttr.vit_max);
    man.basicAttr.focus = f_basicAttr(man.basicAttr.focus_base,man.hunterLevel,man.hiddenAttr.focus_g,man.basicAttr.focus_bonus,man.basicAttr.focus_max);
    man.basicAttr.agi = f_basicAttr(man.basicAttr.agi_base,man.hunterLevel,man.hiddenAttr.agi_g,man.basicAttr.agi_bonus,man.basicAttr.agi_max);
    man.basicAttr.mo = f_basicAttr(man.basicAttr.mo_base,man.hunterLevel,man.hiddenAttr.mo_g,man.basicAttr.mo_bonus,man.basicAttr.mo_max);
    man.basicAttr.strD = f_basicAttr(man.basicAttr.strD_base,man.hunterLevel,man.hiddenAttr.std_g,man.basicAttr.strD_bonus,man.basicAttr.strD_max);
    man.basicAttr.iq = f_basicAttr(man.basicAttr.iq_base,man.hunterLevel,man.hiddenAttr.iq_g,man.basicAttr.iq_bonus,man.basicAttr.iq_max);
    man.basicAttr.eq = f_basicAttr(man.basicAttr.eq_base,man.hunterLevel,man.hiddenAttr.eq_g,man.basicAttr.eq_bonus,man.basicAttr.eq_max);

    // wu qi chengzhang
    man.hiddenAttr.grow_base = man.hiddenAttr.grow_base_bonus_level* man.hunterLevel + man.hiddenAttr.grow_base_init + man.hiddenAttr.grow_base_bonus;
    var f_grow = function(suit:number){return man.hiddenAttr.grow_base * Math.pow(suit,man.hiddenAttr.battle_talent/100)};
    man.hiddenAttr.grow_sword = f_grow(man.hiddenAttr.suit_sword);
    man.hiddenAttr.grow_shield = f_grow(man.hiddenAttr.suit_shield);
    man.hiddenAttr.grow_claymore=f_grow(man.hiddenAttr.suit_claymore);
    man.hiddenAttr.grow_blade = f_grow(man.hiddenAttr.suit_blade);
    man.hiddenAttr.grow_gun = f_grow(man.hiddenAttr.suit_gun);
    man.hiddenAttr.grow_spear = f_grow(man.hiddenAttr.suit_spear);
    man.hiddenAttr.grow_bow = f_grow(man.hiddenAttr.suit_bow);
    man.hiddenAttr.grow_axe = f_grow(man.hiddenAttr.suit_axe);
    man.hiddenAttr.grow_dagger = f_grow(man.hiddenAttr.suit_dagger);
    man.hiddenAttr.grow_staff = f_grow(man.hiddenAttr.suit_staff);
}