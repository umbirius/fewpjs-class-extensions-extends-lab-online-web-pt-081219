// Your code here
class Polygon {
    constructor(array){
        this.sides = array;
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((total, side) => total + side)
    }
}

class Triangle extends Polygon {
    constructor(array){
        super(array)
    }

    get isValid(){
        
        let condition1 = this.sides[0] < (this.sides[1] + this.sides[2])
        let condition2 = this.sides[1] < (this.sides[0] + this.sides[2])
        let condition3 = this.sides[2] < (this.sides[0] + this.sides[1])

        if (condition1 && condition2 && condition3){
            return true
        } else {
            return false
        }
        

    }
}

class Square extends Polygon {
    constructor(array){
        super(array)
    }

    get area (){
        return this.sides[0] ** 2
    }

    get isValid(){
        for (let i = 1; i < this.sides.length; i++){
            if (this.sides[0] !== this.sides[i]){
                return false
            } else {
                return true
            }
        }
    }
}