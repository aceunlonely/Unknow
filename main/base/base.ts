class Body{
    oid : string;

}

class BasicAttr {
    //strength
    str_base : number;
    str_max : number;
    str_bonus: number;
    str : number;
    //vitality
    vit_base : number;
    vit_max : number;
    vit_bonus:number;
    vit : number;
    //focus
    focus_base : number;
    focus_max : number;
    focus_bonus: number;
    focus: number;
    //agility
    agi_base : number;
    agi_max : number;
    agi_bonus:number;
    agi : number;
    //morale (士气)
    mo_base : number;
    mo_max : number;
    mo_bonus:number;
    mo : number;
    //strongD强度
    strD_base : number;
    strD_max:number;
    strD_bonus:number;
    strD : number;
    //IQ
    iq_base:number;
    iq_max:number;
    iq_bonus:number;
    iq:number;
    //EQ
    eq_base:number;
    eq_max:number;
    eq_bonus:number;
    eq:number;
}

class HiddenAttr{
    //基础属性成长值
    str_g: number;
    vit_g:number;
    focus_g:number;
    agi_g:number;
    mo_g:number;
    std_g:number;
    iq_g:number;
    eq_g:number;
    //其他
    // hp recover
    hpRec_base:number;
    hpRec_bonus:number;
    hpRec:number;
    // attack cost
    atkCo_base:number;
    atkCo_bonus:number;
    atkCo:number;
    // wrestle cost
    wsCo_base:number;
    wsCo_bonus:number;
    wsCo:number;
    //eva cost
    evaCo_base:number;
    evaCo_bonus:number;
    evaCo:number;
    //others
    // cost per month
    cost : number;
    // faith decrease per month
    faith_de: number;
    faith_de_count:number;
    // morale
    mo : number;


    //2
    //suitability
    suit_sword: number;
    suit_shield:number;
    suit_claymore:number;
    suit_blade:number;
    suit_gun:number;
    suit_spear:number;
    suit_bow:number;
    suit_axe:number;
    suit_dagger:number;
    suit_staff:number;
    //weapon grow
    grow_base_init:number; // 初始
    grow_base_bonus:number; // 附加
    grow_base_bonus_level:number;//成长
    grow_base:number;
    grow_sword:number;
    grow_shield:number;
    grow_claymore:number;
    grow_blade:number;
    grow_gun:number;
    grow_spear:number;
    grow_bow:number;
    grow_axe:number;
    grow_dagger:number;
    grow_staff:number;

    // battle talent
    battle_talent:number;
}

class BattleAttr{
    hp_base:number;
    hp_bonus_m:number;
    hp_bonus_p:number;
    hp:number;

    mp_base:number;
    mp_bonus_m:number;
    mp_bonus_p:number;
    mp:number;

    atk_base:number;
    atk_bonus_m:number;
    atk_bonus_p:number;
    atk:number;

    mag_base:number;
    mag_bonus_m:number;
    mag_bonus_p:number;
    mag:number;

    def_base:number;
    def_bonus_m:number;
    def_bonus_p:number;
    def:number;

    //hit rate
    hr_base :number;
    hr_bonus_m:number;
    hr_bonus_p:number;
    hr:number;

    //cr 要害命中率
    cr_base:number;
    cr_bonus_m:number;
    cr_bonus_p:number;
    cr:number;

    // evade
    eva_base:number;
    eva_bonus_m:number;
    eva_bonus_p:number;
    eva:number;
}


class HumenBeing extends Body
{
    name : string;
    hunterName : string;
    hunterLevel: number;
    basicWage : number;

    summery : string;

    get wage() : number{ return  12;}
    //基础属性
    basicAttr: BasicAttr;
    hiddenAttr: HiddenAttr;
    battleAttr : BattleAttr;
}


enum EnumQuntity { god,legend,ultima,famous,super,one,two,three,four,five,unknow,other}

enum EquipType { weapon,shield,body,leg,head,special}


