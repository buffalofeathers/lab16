document.addEventListener('DOMContentLoaded', function() {
    var tribtn = document.getElementById('triangle');
    var cirbtn = document.getElementById('circle');
    var recbtn = document.getElementById('rectangle');
    var sqbtn = document.getElementById('square');

    var box = document.getElementById('shape-box');

    // make span id for info panel 
    
    

         tribtn.addEventListener('click', function() { 
            var mainbox = document.getElementById('shape-box');
            var newtri = document.createElement('div');
            this.div.className = ('tri');

            // alert("I'm a triangle");   

            mainbox.appendChild(newtri);
            });

         cirbtn.addEventListener('click', function() {
            alert("I'm a circle");  
         });

         recbtn.addEventListener('click', function() {
            alert("I'm a rectangle");  
         });

         sqbtn.addEventListener('click', function() {
            alert("I'm a square");  
         });
    
    var Shape = function(shapeName, width, height) {
        this.shapeName = shapeName;
        this.width = width;
        this.height = height;
        
    }
    // Shape.prototype.draw = function() {
    //     this.div = document.createElement('div');
    //     this.div.classList.add('shape');
    //     this.div.classList.add(this.cssClass); 
     //    this.div.addEventListener('click', thsi.describe.bind(this));
    //     this.div.addEventListener('dblclick', function() {
    //             this.remove();
    //           });
        // var x = Math.floor(Math.random() * (600 - this.width);
        // var y = Math.floor(Math.random() * (600 - this.height);
        // this.div.style.top = y + 'px';
        // this.div.style.left = x + 'px';
    // }

    // Shape.prototype.describe = function() {
    //     labelShapeName.innerHTML = this.constructor.name;
    //     labelWidth.innterHTML = this.width();
    //     labelHeight.innerHTML = this.height();
    //     labelRadius.innerHTML = this.radius();
    //     labelArea.innerHTML = this.area();
    //     labelPerimeter.innerHTML = this.perimeter();
    // }

    var Rectangle = function(width, height) {
        Shape.call(this, 'Rectangle', width, height);
    }

    Rectangle.prototype = Object.create(Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;
    Rectangle.prototype.area = function() {
        console.log('Area is ' + (this.width * this.height));
    }
    Rectangle.prototype.perimeter = function() {
        console.log(this.shapeName);
        console.log('Perimeter is equal to ' + (2 * this.width + 2 * this.height));
    }

    var Square = function(sidelength) {
        Rectangle.call(this, sidelength, sidelength);
        this.shapeName = 'Square';
        Square.prototype.area = function() {
        console.log('Area is ' + (sidelength * sidelength));
        }
        Square.prototype.perimeter = function() {
            console.log(this.shapeName);
            console.log('Perimeter is equal to ' + (4 * sidelength));
        }
    }
    Square.prototype = Object.create(Rectangle.prototype);
    Square.prototype.constructor = Square;

    
    
    var Triangle = function(height) {
        Shape.call(this, 'Triangle', height, height);
        
        this.div = document.createElement('div');
        this.div.className = 'tri';
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';

        Triangle.prototype.area = function() {
            console.log('Area is ' + (0.5 * this.height * this.height));
        }
        Triangle.prototype.perimeter = function() {
            console.log(this.shapeName);
            console.log('Perimeter is equal to ' + (2 * this.height + Math.sqrt(2 * this.height * this.height)));
        }
    }

    Triangle.prototype = Object.create(Shape.prototype);
    Triangle.prototype.constructor = Triangle;



    var Circle = function(radius) {
        Shape.call(this, 'Circle', radius * 2, radius * 2);
        Circle.prototype.area = function() {
            console.log('Area is ' + (this.radius * this.radius * Math.PI));
        }
        Circle.prototype.perimeter = function() {
                console.log(this.shapeName);
                console.log('Perimeter is equal to ' + (2 * Math.PI * this.radius));
            }
        }

    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;

    


    var test = new Rectangle(11, 7);
    test.perimeter();
    test.area();

    var newSq = new Square(13);
    newSq.perimeter();
    newSq.area();

    var newTri = new Triangle(24);
    newTri.perimeter();
    newTri.area();

    var newCir = new Circle(30);
    newCir.perimeter();
    newCir.area();


})



// Shape Name:
// Width:
// Height:
// Radius:
// Area:
// Perimeter: