input.onButtonPressed(Button.A, function () {
    music.playMelody("A C5 A C5 A C5 A C5 ", 201)
    radio.sendString("EMERGENCY125")
    music.playMelody("A C5 A C5 A C5 A C5 ", 201)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("A C5 A C5 A C5 A C5 ", 201)
    radio.sendString("EMERGENCY126")
    music.playMelody("A C5 A C5 A C5 A C5 ", 201)
})
radio.setGroup(125)
basic.showIcon(IconNames.Yes)
