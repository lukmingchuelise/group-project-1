class drawingReset extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.reset();
    }
    
    reset(event){
        this.contextReal.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    }

    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}