// export{}

type Product = {
    id: number,
    name: string,
}

// const a: number = 20;
// const b: number = 100;
// const age: number = 19;
// const name: string = "Vũ Q Duy";
// const status: boolean = true;
// const info: Product = { id: 1 ,name: "bạc"};
// const stringArr: string[] = ["a", "b", "b"];
// const numberArr: number[] = [1,3,4,5];
// const objectArr: Product[]=[{id: 1, name: "duy" }]


// function sum(numA: number, numB: number) :number{
//     return numA + numB;
// }

// document.querySelector("#app").innerHTML = `<h2> Age: ${age} </h2> <h2> Name:  ${name} </h2> <h2> status:  ${status} </h2> <h2> info:  ${info.name} ${info.id} </h2>`;

function show<T,U>(a : T, b : U):   [T, U] {
    return [a,b]
}

show("a", "c");
show(5,"a");
show({id:1, name: "duy"}, 5)
show((z: number) => console.log(z), 1)



const data = [
    { id: 1, name: "Product 1"},
    { id: 2, name: "Product 2"},
    { id: 3, name: "Product 3"},
]

function getProduct(items : Product[]) {
    console.log(items);
    // document.querySelector("#app")?.innerHTML = items.name
    // items.map((item) => `Name: ${item.name}`)
    items.forEach(item => {
        document.querySelector("#app").innerHTML += `Name: ${item.name} <br>`
    });
}

function get<T extends Product[]>(items:T): void {
    items.map(item => item.name)
}

get(data)
getProduct(data)