function FindZoomerByName(zoomerName) {

    console.log("ZoomerName: ", zoomerName);
    let foundZoomer;

    //grab all the rows on the page
    let zoomRows = document.getElementsByClassName("row");
    console.log(zoomRows);

    //loop through each row in the collection
    for(let row = 0; row < zoomRows.length; row++){
        //grab the spans from a row as collection
        let zoomRow = zoomRows[row].getElementsByClassName("zName");
        console.log(zoomRow);
        console.log(zoomRow.length);

        //loop through each span in the collection
        for(let i = 0; i < zoomRow.length; i++) {
            //log the row
            console.log("Span collection: ", zoomRow[i]);
            //get the id of the span
            let spanID = zoomRow[i].id;
            console.log("spanID: ", spanID);
    
            let spanText = zoomRow[i].innerText;
            console.log("spanText: ", spanText);

            console.log("spanText == zoomerName ", spanText == zoomerName)
            if(spanText == zoomerName) {
                foundZoomer = spanID;
                break;
            }

        }

        if(foundZoomer){
            break;
        }
    }

    return foundZoomer;
}

console.log("Zoomer: ", FindZoomerByName("Photo 1-4\'s Name"));

function FindZoomerPictureIDbyZoomerName(zoomerName) {

    console.log("ZoomerName: ", zoomerName);
    let foundZoomer;
    let foundZoomPictureID;

    //grab all the spans on the page
    let spans = document.getElementsByClassName("zName");
    console.log(spans);

    //loop through each span in the collection
    for(let i = 0; i < spans.length; i++) {
        //log the row
        console.log("Span: ", spans[i]);
        
        //get the id of the span
        let spanID = spans[i].id;
        console.log("spanID: ", spanID);

        //get the innerText of the span
        let spanText = spans[i].innerText;
        console.log("spanText: ", spanText);

        //if the name of the zoomer is the same as the spanText
        console.log("spanText == zoomerName ", spanText == zoomerName)
        if(spanText == zoomerName) {
            foundZoomer = spanID;
            //Find the previousElementSibling for the span which 
            //is the picture
            let foundZoomPicture = spans[i].previousElementSibling;
            //get the id of the picture
            foundZoomPictureID = foundZoomPicture.id;
            break;
        }

    }

     //return the ID of the found picture element
    return foundZoomPictureID;
}