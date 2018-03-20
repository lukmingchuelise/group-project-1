class DrawingQuadraticCurve extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
        this.status = "start";              // start / end / ref
    }

    onMouseDown(coord, event){
        // style
        this.contextDraft.lineWidth = lineWidth;
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextDraft.fillStyle = rgbaColor;
        this.contextReal.lineWidth = lineWidth;
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.fillStyle = rgbaColor;
        // starting pt
        if (this.status == "start")
        {
            this.origX = coord[0];
            this.origY = coord[1];
        }
        else if (this.status == "end")
        {
            this.endX = coord[0];
            this.endY = coord[1];
        }
    }

    onDragging(coord, event){
        if (this.status == "ref")
        {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawDraft(coord);
        }
    }

    onMouseMove(){}
    onMouseUp(coord, event){
        if (this.status == "start")
        {
            this.status = "end";
        }
        else if (this.status == "end")
        {
            this.status = "ref";
        }
        else if (this.status == "ref")
        {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawReal(coord);
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}

    drawDraft(coord){
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
        this.contextDraft.stroke();
    }

    drawReal(coord){
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
        this.contextReal.stroke();
        this.status = "start";
    }
}
