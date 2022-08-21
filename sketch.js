var play;
var how;
var about;
//var body = document.querySelector(".body");

var htp, ply, backButton, atg, lvl1, htpimg , atgimg;
var backButton,nextButton;

var pl1,plimg1 , pl2 , clueimg1 , pl3;

var dd_running;

var ddr;

var gameState = "wait";

function preload() {
    dd_running =   loadAnimation("ideal.png","wlk1.png","wlk2.png");
      groundImage = loadImage("runnerbg.png");
    waitimg = loadImage("splash.gif");
    htpimg = loadImage("htpbackground.png");
    atgimg = loadImage("atgbackground.png");
}


function setup() {
    createCanvas(windowWidth, windowHeight);

    ddr= createSprite(50,180,20,50);
    ddr.addAnimation("running", dd_running);
    ddr.scale = 10;

    plimg1 = createImg("plimg-1.png");
    plimg1.position(1050,835);
    plimg1.size(125,125);
    plimg1.class("plimg1");

    clueimg1 = createImg("clue1.png");
    clueimg1.position(1220,60)
    clueimg1.size(425,500);
    clueimg1.class("plimg1");

    pl2 = createVideo("pl2.mp4");
    pl2.position(-10, 0);
    pl2.size(windowWidth,windowHeight)

    pl3 = createVideo("pl3.mp4");
    pl3.position(-10, 0);
    pl3.size(windowWidth,windowHeight)

    pl1 = createVideo("pl1.mp4");
    pl1.position(-10, 0);
    pl1.size(windowWidth,windowHeight)

    play = createImg("Play.png")
    play.position(width/2+200, height-150);
    play.size(250, 100);

    backButton = createImg("backArrow.png")
    backButton.position(width-1900,10);
    backButton.size(90,80);

    nextButton = createImg("nextbutton.png")
    nextButton.position(width/2-100, height-150)
    nextButton.size(250, 100);


    how = createImg("how.png")
    how.position(width/2-100, height-150)
    how.size(250, 100)


    about = createImg("about.png")
    about.position(width/2+width/3.8, height-150)
    about.size(250, 100)

}

function hide() {
    play.hide();
    how.hide();
    about.hide();
    backButton.hide();
    pl1.hide();
    pl2.hide();
    pl3.hide();
    nextButton.hide();
}



function draw() {

    plimg1.mousePressed(()=>{
        gameState = 'playstate1'
        plimg1.hide();
        pl1.stop();
        pl1.hide();
            pl2.show();
            pl2.play();
             clueimg1.show();
                 pl3.hide();
                     nextButton.hide();
    })

        clueimg1.mousePressed(()=>{
        gameState = 'playstate1';
        clueimg1.hide();
        pl2.stop();
        pl2.hide();
            pl3.show();
            pl3.play();
            nextButton.show();
    })

    nextButton.mousePressed(()=>{
            // gameState = 'playstate1';
            pl3.hide();
            pl3.stop();
            nextButton.hide();
    })

    if (gameState === "wait") {
        background(waitimg)
        play.show();
        how.show();
        about.show();
        backButton.hide();
        pl1.hide();
        pl1.stop();
                plimg1.hide();
                    pl2.hide();
                    clueimg1.hide();
                        pl3.hide();
                            nextButton.hide();
    }


    if (gameState === "playstate") {
        background("none");
                backButton.show();
    }

    if (gameState === "how") {
        background(htpimg);
        backButton.show();
                plimg1.hide();
                    pl2.hide();
                     clueimg1.hide();
                         nextButton.hide();
                         pl3.hide();
    }

    if (gameState === "about") {
        background(atgimg);
                backButton.show();
                        plimg1.hide();
                            pl2.hide();
                             clueimg1.hide();
                                 nextButton.hide();
                                 pl3.hide();
    }


    play.mousePressed(() => {
        play.hide();
        about.hide();
        how.hide();
                      pl1.play();
                pl1.show();
        gameState = "playstate";
        plimg1.show();
    })
    how.mousePressed(() => {
        play.hide();
        about.hide();
        how.hide();
        gameState = "how";
    })
    about.mousePressed(() => {
        play.hide();
        about.hide();
        how.hide();
        //body.style.background="#A5E1FF";
        //  atg = new Atg();
        //  atg.display();
        gameState = "about";
    })

      backButton.mousePressed(() => {
        gameState="wait"
    })


}