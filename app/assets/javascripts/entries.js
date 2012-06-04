$(function() {
	$("body").delegate("#addButton", "click", function() {
		var id = new Date().getTime();
		$("tbody").last().append("<tr><td><input name='user[entries_attributes]["+id+"][body]'></input></td><td><input name='user[entries_attributes]["+id+"][priority]'></input></td><td><input name='user[entries_attributes]["+id+"][due_date]'></input></td><td><input name='user[entries_attributes]["+id+"][completed]' type='hidden' value='0'><input checked='checked' id='user_entries_attributes_"+id+"' name='user[entries_attributes]["+id+"][completed]' type='checkbox' value='0'></td><td><button type='button' class='delButton' data-id='"+id+"'>Delete</button></td></tr>");
	});

	$("body").delegate(".delButton", "click", function() {
		var row = $(this).closest("tr");
		row.hide();
		var newInputName = row.find("input").first().attr("name").replace("body","_destroy");
		$(this).after("<input type='hidden' name='"+newInputName+"' value='1'></input>");
	});

	$("body").delegate("form", "ajax:complete", function(evt, xhr) {
		$("body").html(xhr.responseText);
	});

	$("body").delegate("#indexForm input[type=checkbox]", "change", function() {
		$("#indexForm").submit();
	});
});
