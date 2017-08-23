export function randomCar() {
    const cars = ['Audi', 'BMW', 'Mercedes'];
    return cars[Math.floor(Math.random() * cars.length)];
}
