

function saveHoroscope(){
    $.ajax({
        url: "./php/addhoroscope.php",
        method: "POST",
        data: {
            "socialnumber": $("#input").val()
        },
    success: function(results){
        if(results == false){
            $("#content").html("you have already saved a horoscope!");
        }
        if(results == true){
            viewHoroscope();
        }},
        error: function(err){
            alert("PROBLEM");
    }})
}


    function updateHoroscope(){
        $.ajax({
            url: "./php/updatehoroscope.php",
            method: "PUT",
            data: {
                "socialnumber": $("#input").val()
            },
        success: function(results){
            if(results == true){
                viewHoroscope();
            }
            else{
                $("#content").html(results);
            }},
        error: function(err){
            alert("PROBLEM");
        }})
        
    }


    function deleteHoroscope(){
        $.ajax({
            url: "./php/deletehoroscope.php",
            method: "DELETE",
        success: function(results){
            $("#content").html(results)
        },
        error: function(err){
            alert("PROBLEM");
        }})
    }

    
    function viewHoroscope(){
        $.ajax({
            url: "./php/viewhoroscope.php",
            method: "GET",
        success: function(results){
            $("#content").html(results)
        },
        error: function(err){
            alert("PROBLEM");
        }
        })
    }
