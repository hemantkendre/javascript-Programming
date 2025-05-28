console.log(`======== Assignment 1 ======== `);

class Vehicle {
    VehicleType;
    VehicleCompany;
    VehicleSettingCapacity;
    VehicleBrand;
    engineType;

    constructor(VehicleType,VehicleCompany,VehicleSettingCapacity,VehicleBrand,engineType){
        this.VehicleType = VehicleType;
        this.VehicleCompany = VehicleCompany;
        this.VehicleSettingCapacity = VehicleSettingCapacity;
        this.VehicleBrand = VehicleBrand;
        this.engineType = engineType;
    }
}

console.log(`======== First vehicle details ======== `);

let vehicalOne = new Vehicle('Car','Honda','5 Setter','Foreign','Petrol');
console.log(` First vehicle is ${vehicalOne.VehicleType}, It's make by ${vehicalOne.VehicleCompany}, the setting capacity is ${vehicalOne.VehicleSettingCapacity}, it's a ${vehicalOne.VehicleBrand} brand and it's ${vehicalOne.engineType} ${vehicalOne.VehicleType} `);

console.log(`======== Second vehicle details ======== `);

let vehicalTwo = new Vehicle('Bike','Hero','2 Setter','Foreign','Petrol');
console.log(` Second vehicle is ${vehicalTwo.VehicleType}, It's make by ${vehicalTwo.VehicleCompany}, the setting capacity is ${vehicalTwo.VehicleSettingCapacity}, it's a ${vehicalTwo.VehicleBrand} brand and it's ${vehicalTwo.engineType} ${vehicalTwo.VehicleType} `);

console.log(`======== Third vehicle details ======== `);

let vehicalThree = new Vehicle('Car','TATA','7 Setter','Indian','diesel');
console.log(` Second vehicle is ${vehicalThree.VehicleType}, It's make by ${vehicalThree.VehicleCompany}, the setting capacity is ${vehicalThree.VehicleSettingCapacity}, it's a ${vehicalThree.VehicleBrand} brand and it's ${vehicalThree.engineType} ${vehicalThree.VehicleType} `);

console.log(`======== Fourth vehicle details ======== `);

let vehicalFour = new Vehicle('Car','Maruti Suzuki','5 Setter','Indian','CNG');
console.log(` Second vehicle is ${vehicalFour.VehicleType}, It's make by ${vehicalFour.VehicleCompany}, the setting capacity is ${vehicalFour.VehicleSettingCapacity}, it's a ${vehicalFour.VehicleBrand} brand and it's ${vehicalFour.engineType} ${vehicalFour.VehicleType} `);

console.log(`======== Fifth vehicle details ======== `);

let vehicalFive = new Vehicle('Car','Mahindra','7 Setter','Indian','Hybrid');
console.log(` Second vehicle is ${vehicalFive.VehicleType}, It's make by ${vehicalFive.VehicleCompany}, the setting capacity is ${vehicalFive.VehicleSettingCapacity}, it's a ${vehicalFive.VehicleBrand} brand and it's ${vehicalFive.engineType} ${vehicalFive.VehicleType} `);

console.log(`======== Assignment 2 ======== `);

class Collage{
    clgName;
    clgCity;
    clgaddress;
    clgStudent;

    constructor(clgName,clgCity,clgaddress,clgStudent){
        this.clgName = clgName;
        this.clgCity = clgCity;
        this.clgaddress = clgaddress;
        this.clgStudent = clgStudent;
    }
    display(){
        console.log(` Collage name is ${this.clgName}, Is located in ${this.clgCity} and Address is ${this.clgaddress} and total student strength is ${this.clgStudent} `);
    }
}
console.log(`====== First collage details are ==========`);
const collage1 = new Collage('B.j.Collage','Pune','M.G.Road',2000);
collage1.display();

// console.log(`====== Second collage details are ==========`);
// collage2 = new Collage('Modern Collage','Pimpri Chinchwad','Main Road',1000);
// console.log(collage2.display());




