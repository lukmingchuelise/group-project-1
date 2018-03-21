// class DrawingCircleHollow extends PaintFunction{
//     constructor(contextReal,contextDraft){
//         super();
//         this.contextReal = contextReal;
//         this.contextDraft = contextDraft;            
//     }
    
//     onMouseDown(coord, event){
//         this.contextReal.strokeStyle = "#f44";
//         this.contextDraft.strokeStyle = "#f44";
//         // this.contextReal.fillStyle = "#f44";
//         // this.contextDraft.fillStyle = "#f44";
//         this.centerX = coord[0];
//         this.centerY = coord[1];
//     }
//     onDragging(coord, event){
//         this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this.radius = Math.sqrt( Math.pow(this.centerX - coord[0] , 2) + Math.pow(this.centerY - coord[1], 2) );
//         this.contextDraft.beginPath();
//         this.contextDraft.arc(this.centerX, this.centerY, this.radius, 0, 2*Math.PI, false);
//         this.contextDraft.stroke();
//         // this.contextDraft.fill();
//     }

//     onMouseMove(){}
//     onMouseUp(coord, event){
//         this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this.radius = Math.sqrt( Math.pow(this.centerX - coord[0] , 2) + Math.pow(this.centerY - coord[1], 2) );
//         this.contextReal.beginPath();
//         this.contextReal.arc(this.centerX, this.centerY, this.radius, 0, 2*Math.PI, false);
//         this.contextReal.stroke();
//         // this.contextReal.fill();
//     }
//     onMouseLeave(){}
//     onMouseEnter(){}
// }

// // alt: ref pt on click, not coner
// // this.cX = (this.centerX + coord[0]) / 2;
// // this.cY = (this.centerY + coord[1]) / 2;
// // this.r = ( (coord[0] - this.centerX) ) / 2;
// // this.contextDraft.arc(this.cX, this.cY, this.r, 0, 2*Math.PI, false);