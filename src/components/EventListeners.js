

function EventListeners() {

    /*
    https://react.dev/reference/react-dom/components/common#mouseevent-handler
    onClick={e => console.log('onClick')}
    onMouseEnter={e => console.log('onMouseEnter')}
    onMouseOver={e => console.log('onMouseOver')}
    onMouseDown={e => console.log('onMouseDown')}
    onMouseUp={e => console.log('onMouseUp')}
    onMouseLeave={e => console.log('onMouseLeave')}
  */
    //THIS FUNCTION typically is between return and inside component
    function handleClick() {
        console.log('Im clicked')
    }

    function imgHover() {
        console.log('You have hovered the img')
    }

    return (
        <div className="row">
            <div className="col-sm-12">
                <img onMouseEnter={imgHover} src="https://picsum.photos/640/360" alt="" srcset="" />
            </div>
            <div className="col-sm-12">
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    )
}

export default EventListeners