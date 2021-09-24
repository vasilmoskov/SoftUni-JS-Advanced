function getWorker(worker) {

    if (worker.dizziness) {
        worker.levelOfHydrated += 0.1 * Number(worker.weight) * Number(worker.experience);
        worker.dizziness = false;
    }

    return worker;
}

console.log(getWorker({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));

// console.log(getWorker({ weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true }
//   ));

console.log(getWorker({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
));