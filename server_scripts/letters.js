ServerEvents.recipes((event) => {
    event.remove({ id: 'design_decor:stonecutting/signs/letter/blank_letter_sign_2' })
    event.remove({ id: 'design_decor:stonecutting/blank_sign' })
    
    event.shapeless(
        Item.of('design_decor:letter_sign', 2),
[
            'create:brass_sheet',
            'create:polished_cut_calcite_slab',
]
    ).id("kubejs:letter_sign_manual_only")

        event.shapeless(
        Item.of('design_decor:blank_sign', 2),
[
            'createdeco:industrial_iron_sheet',
            'create:polished_cut_calcite_slab',
]
    ).id("kubejs:blank_sign_manual_only")
})