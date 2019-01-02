//Show a list of Joyful Mystery
function showJoyful()
{
    document.getElementById("headerModal").innerHTML = "Joyful Mystery";
    document.getElementById("bodyModal").innerHTML = "<ol> <li>The Annunciation of the Lord to Mary</li><li>The Visitation of Mary to Elizabeth</li><li>The Nativity of our Lord Jesus Christ</li><li>The Presentation of our Lord Jesus Christ</li><li>Finding Jesus in the Temple</li></ol>";
    $("#mysteryModal").modal();
}

//Show a list of Sorrowful Mystery
function showSorrowful()
{
    document.getElementById("headerModal").innerHTML = "Sorrowful Mystery";
    document.getElementById("bodyModal").innerHTML = "<ol><li>The Agony of Jesus in the Garden</li><li>The Scourging at the Pillar</li><li>Jesus is Crowned with Thorns</li><li>Jesus Carried the Cross</li><li>The Cruxifixion of our Lord</li></ol>";
    $("#mysteryModal").modal();
}

//Show a list of Glorious Mystery
function showGlorious()
{
    document.getElementById("headerModal").innerHTML = "Glorious Mystery";
    document.getElementById("bodyModal").innerHTML = "<ol><li>The Resurrection of Jesus Christ</li><li>The Ascension of Jesus to Heaven</li><li>The Descent of the Holy Ghost</li><li>The Assumption of Mary into Heaven</li><li>Mary is Crowned as Queen of Heaven and Earth</li></ol>";
    $("#mysteryModal").modal();
}

//Show a list of Luminous Mystery
function showLuminous()
{
    document.getElementById("headerModal").innerHTML = "Luminous Mystery";
    document.getElementById("bodyModal").innerHTML = "<ol><li>The Baptism in the Jordan</li><li>The Wedding at Cana</li><li>The Proclamation of the Kingdom</li><li>The Transfiguration</li><li>The Institution of the Eucharist</li></ol>";
    $("#mysteryModal").modal();
}