$(function() {
	$("#addButton").click(function() {
		var id = new Date().getTime();
		$("tbody").last().append("<tr><td><input name='user[entries_attributes]["+id+"][body]'></input></td><td><input name='user[entries_attributes]["+id+"][priority]'></input></td><td><input name='user[entries_attributes]["+id+"][due_date]'></input></td><td><button type='button' class='delButton' data-id='"+id+"'>Delete</button></td></tr>");
	});

	$(".delButton").live("click", function() {
		var row = $(this).closest("tr");
		row.hide();
		var newInputName = row.find("input").first().attr("name").replace("body","_destroy");
		$(this).after("<input type='hidden' name='"+newInputName+"' value='1'></input>");
	});

	$(".editButton").live("click", function() {
		$.get($(this).closest("form").attr("action"), function(data, msg) {
			if(msg == "success") {
				$("body").html(data);
			}
		});
		return false;
	});

	$("#indexForm input[type=checkbox]").change(function() {
		$("#indexForm").submit();
	});
});
