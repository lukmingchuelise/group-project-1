class drawingBackground extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextBackground = contextBackground;
        this.setBackground();
    }
    
    setBackground(event){
        this.contextBackground.strokeStyle = rgbaColor;
        this.contextBackground.fillStyle = rgbaColor;
        this.contextBackground.fillRect(0,0,canvasDraft.width,canvasDraft.height);
    }

    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}