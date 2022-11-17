var canvas= new fabric.canvas("myCanvas");
player_x=30;
player_y=30;
block_image_width= 30;
block_image_height=30;
var player_object="";
var block_image="";
function player_update(){
fabric.image.fromURL("player.png", function(Img){
    player_object= Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
        top: player_y,
        left:player_x
    });
    canvas.add(player_object);
})
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e. keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("Se presiona shift y P al mismo tiempo tiempo");
        block_image_height= block_image_height + 1;
        block_image_width= block_image_width + 1;
        document.getElementById ("c_width").innerHTML=block_image_width;
        document.getElementById ("c_height").innerHTML=block_image_height;

    }
    if(e.shiftKey == true && keyPressed == "77"){
        console.log("Se presiona shift y M al mismo tiempo tiempo");
        block_image_height= block_image_height - 1;
        block_image_width= block_image_width - 1;
        document.getElementById ("c_width").innerHTML=block_image_width;
        document.getElementById ("c_height").innerHTML=block_image_height;

    }
    if(keyPressed=="38"){
        up();
        console.log("arriba")
    }
    if(keyPressed=="40"){
        down();
        console.log("abajo")
    }
    if(keyPressed=="37"){
        left();
        console.log("izquierda")
    }
    if(keyPressed=="39"){
        right();
        console.log("derecha")
    }
    if(keyPressed=="81"){
        new_image=("cloud.jpg")
        console.log("Q")
    }
    if(keyPressed=="87"){
        new_image=("dark_green.png")
        console.log("W")
    }
    if(keyPressed=="69"){
        new_image=("ground.png")
        console.log("E")
    }
    if(keyPressed=="82"){
        new_image=("light_green.png")
        console.log("R")
    }
    if(keyPressed=="84"){
        new_image=("roof.jpg")
        console.log("T")
    }
    if(keyPressed=="89"){
        new_image=("trunk.jpg")
        console.log("Y")
    }
    if(keyPressed=="85"){
        new_image=("unique.png")
        console.log("U")
    }
    if(keyPressed=="73"){
        new_image=("wall.jpg")
        console.log("I")
    }
    if(keyPressed=="79"){
        new_image=("yellow_wall.png")
        console.log("O")
    }

}
function up(){
    if(player_y >= 0){
        player_y=player_y - block_image_object;
        console.log("altura del bloque=" + block_image_height );
        console.log("cuando se presiona la tecla arriba, X= " + player_x + "y Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    } 
}
function down(){
    if(player_y <= 500){
        player_y=player_y - block_image_object;
        console.log("altura del bloque=" + block_image_height );
        console.log("cuando se presiona la tecla arriba, X= " + player_x + "y Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    } 
}
function left(){
    if(player_x > 0){
        player_x=player_x - block_image_height;
        console.log("altura del bloque=" + block_image_height );
        console.log("cuando se presiona la tecla arriba, X= " + player_x + "y Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    } 
}
function right(){
    if(player_y <= 850){
        player_x=player_x - block_image_height;
        console.log("altura del bloque=" + block_image_height );
        console.log("cuando se presiona la tecla arriba, X= " + player_x + "y Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    } 
}
