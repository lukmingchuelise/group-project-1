class DrawingEyeDropper extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
    }

    onMouseUp(coord, event){
        var data = contextReal.getImageData(coord[0], coord[1], 1, 1).data;
        // rgba(r, g, b, 255);
        var color = `rgba( ${data[0]}, ${data[1]}, ${data[2]}, 255)`;
        console.log(color);
        fillColor = color;
        strokeColor = color;
        $(".b1").attr("style", `background-color: ${strokeColor}`);
        $(".b2").attr("style", `background-color: ${fillColor}`);
    }
    // onMouseDown(){}
    // onDragging(){}
    // onMouseMove(){}
    // onMouseLeave(){}
    // onMouseEnter(){}
}