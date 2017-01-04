

function sort_list() {

    var sort_data = {
        "list" : $("#input-list")[0].value,
        "isASC" :  $("#asc")[0].checked
   }
   console.log(sort_data);

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: "/sort",
        data: sort_data,
        success: function(data, status, jqxhr) {
            console.log(data);
        },
        error: function(jqxhr, status, error) {

        }
    });
}