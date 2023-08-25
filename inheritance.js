class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;

    }
    move(){
        console.log('gari chole na vhole na vhole na re')

    }
}



class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrece){
        super(name, price);
        this.seat = seat;
        this.ticketprice = ticketprice;

    }

}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.seat = this.seat;
        this.ticketprice = this.ticketprice;
    }
}