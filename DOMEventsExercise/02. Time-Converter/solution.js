function attachEventsListeners() {

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, unit) {
        const inDays = value / ratios[unit];
        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        }
    }

    const inputs = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
    }

    document.querySelector('main').addEventListener('click', onClick);

    function onClick(e) {
        if (e.target.tagName == 'INPUT' && e.target.type == 'button') {
            const input = e.target.parentElement.querySelector('input[type=text]');

            const time = convert(Number(input.value), input.id);
            Object.keys(time).forEach(k => inputs[k].value = time[k]);
        }
    }
}

/*

    let daysButtonElement = document.getElementById('daysBtn');
    let hoursButtonElement = document.getElementById('hoursBtn');
    let minutesButtonElement = document.getElementById('minutesBtn');
    let secondsButtonElement = document.getElementById('secondsBtn');

    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    daysButtonElement.addEventListener('click', function (e) {
        let days = daysElement.value;

        hoursElement.value = 24 * days;
        minutesElement.value = 1440 * days;
        secondsElement.value = 86400 * days;
    });

    hoursButtonElement.addEventListener('click', function (e) {
        let hours = hoursElement.value;

        daysElement.value = hours / 24;
        minutesElement.value = 1440 * hours / 24;
        secondsElement.value = 86400 * hours / 24;
    });

    minutesButtonElement.addEventListener('click', function (e) {
        let minutes = minutesElement.value;

        daysElement.value = minutes / 1440;
        hoursElement.value = minutes / 1440 * 24;
        secondsElement.value = minutes / 1440 * 86400;
    });

    secondsButtonElement.addEventListener('click', function (e) {
        let seconds = secondsElement.value;

        daysElement.value = seconds / 86400;
        hoursElement.value = seconds / 86400 * 24;
        minutesElement.value = seconds / 86400 * 1440;
    });

    */