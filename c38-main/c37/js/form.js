class Form {
    constructor(){
     this.input = createInput('playername') 
     this.button = createButton('play')  
     this.greeting = createElement('H1')
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide(); }
    display(){
        var title = createElement('h2')
        title.html('race car game')
        title.position(550,100)

        
        this.input.position(530,330)
        
        
        this.button.position(600,380)

        
        this.greeting.position(500,380)
        
        this.button.mousePressed(function(){
         this.input.hide();
         this.button.hide();
         player.name = this.input.value();
         playerCount+= 1;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("hello " +name)

        })
    }
}