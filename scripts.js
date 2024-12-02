
const value = prompt("Назва товару").toLowerCase();
let cost;
switch(value) {
    case "яблоко":
        cost = 10;
        alert(`${value} коштує ${cost} гривень`);
        break;
        case "грушка":
            cost = 200;
            alert(`${value} коштує ${cost} гривень`);
            break;
            case "динька":
        cost = 330;
        alert( `${value} коштує ${cost} гривень`);
        break;
        default: 
        alert(`Товар ${value} відсутній`);
}
// let a = "Hello JS"
// alert(a);

