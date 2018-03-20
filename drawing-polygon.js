class DrawingPolygon extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;    
        this.contextDraft = contextDraft;
        this.start = true;
        this.continue = true;
    }
    
    onMouseDown(coord, event){
        // style
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextDraft.lineJoin = lineJoin;
        this.contextDraft.lineWidth = lineWidth;
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.lineJoin = lineJoin;
        this.contextReal.lineWidth = lineWidth;
        // starting pt
        if (this.start)
        {
            this.completeX = coord[0];
            this.completeY = coord[1];
            this.origX = coord[0];
            this.origY = coord[1];
            this.start = false;
        }
    }

    onDragging(){}

    onMouseMove(coord, event){
        if (this.continue)
        {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawDraft(coord[0], coord[1]);
        }
    }

    onMouseUp(coord, event){
        if (this.continue)
        {
            if (event.shiftKey)
            {
                this.kill();
            }
            else{
                this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
                // draw real
                this.drawReal(coord[0], coord[1]);
                // prepare for next line
                this.origX = coord[0];
                this.origY = coord[1];
            }
        }
    }

    onMouseLeave(coord, event){
        // if (coord[0] < -10 || coord[1] < -10 || coord[0] > canvasDraft.width + 10 || coord[1] > canvasDraft.height +10)
        // {
        //     // this.start = true;
        //     this.contextDraft.clearRect(0,0,canvasDraft.width, canvasDraft.height);
        //     // this.contextDraft.closePath();
        // }
    }
    onMouseEnter(){}

    drawDraft(x,y){
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(x, y);
        this.contextDraft.closePath();
        this.contextDraft.stroke();      
    }

    drawReal(x,y){
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(x, y);
        this.contextReal.closePath();
        this.contextReal.stroke();
    }

    kill(){
        console.log("click");
        this.continue = false;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.drawReal(this.completeX, this.completeY);
    }
}