class DrawingEllipse extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft; 
        // style
        this.contextDraft.lineWidth = lineWidth;
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextDraft.fillStyle = rgbaColor;
        this.contextReal.lineWidth = lineWidth;
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.fillStyle = rgbaColor;
    }
    
    onMouseDown(coord, event){
        this.topX = coord[0];
        this.topY = coord[1];
    }

    onDragging(coord, event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.centerX = (this.topX + coord[0]) / 2;
        this.centerY = (this.topY + coord[1]) / 2;
        this.radiusX = Math.abs((this.topX - coord[0]) * 0.3);
        this.radiusY = Math.abs((this.topY - coord[1]) * 0.7);
        this.contextDraft.beginPath();
        this.contextDraft.setLineDash([5,10]);
        this.contextDraft.ellipse(this.centerX, this.centerY, this.radiusX, this.radiusY, 0, 2*Math.PI, false);
        this.contextDraft.stroke();
        this.contextDraft.setLineDash([]);
        this.contextDraft.fill();
    }

    onMouseUp(coord, event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.centerX = (this.topX + coord[0]) / 2;
        this.centerY = (this.topY + coord[1]) / 2;
        this.radiusX = Math.abs((this.topX - coord[0]) * 0.3);
        this.radiusY = Math.abs((this.topY - coord[1]) * 0.7);
        this.contextReal.beginPath();
        this.contextReal.ellipse(this.topX, this.topY, this.radiusX, this.radiusY, 0, 2*Math.PI, false);
        this.contextReal.stroke();
        this.contextReal.fill();
    }

    // onMouseMove(){}
    // onMouseLeave(){}
    // onMouseEnter(){}
}

// alt: ref pt on click, not coner
// this.cX = (this.topX + coord[0]) / 2;
// this.cY = (this.topY + coord[1]) / 2;
// this.r = ( (coord[0] - this.topX) ) / 2;
// this.contextDraft.arc(this.cX, this.cY, this.r, 0, 2*Math.PI, false);