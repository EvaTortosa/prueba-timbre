radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        soundExpression.giggle.playUntilDone()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
basic.forever(function () {
	
})
