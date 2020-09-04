input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallDiamond)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
music.playMelody("- F B E E B F - ", 120)
