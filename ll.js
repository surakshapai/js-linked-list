$(document).ready(function(){
	function List(){

	}	

	List.prototype = { 
		setEverything : function(i){
			reference_node.next_node = node;
			$("#current_ll").append(node.val + " " + "->" + " ");
			
		
			//alert(reference_node.val + 's next node is' + reference_node.next_node.val)
			
		},


		deleteFirst : function(){
			var temp = first;
			first = first.next_node;
			temp = null;
			reference_node = first;
			for(i=reference_node.val; i<=5;i++)
			{
				
				$("#result_ll").append(reference_node.val + " " + "->" + " ");
				reference_node = reference_node.next_node;
				
			}
			$("#result_ll").append("\n");

		},

		

		insertFirst : function(n){
			var new_node = new Node();
			new_node.val = n;

			new_node.next_node = first;
			
			first = new_node;
			var tracer = first;
			
			for(var i=1; i <= 6; i++)
			{
				$("#insertf_ll").append(tracer.val + " " + "->" + " ");
				tracer = tracer.next_node;
			}

			$("#insertf_ll").append("\n");

		},

		deleteSpec : function(n){
			var cur_node = first;
			var prev_node;
		
			while(cur_node != null)
			{
				if(n == first.val)
				{
				
					var temp = first;
					first = first.next_node;
					cur_node = first;
					temp = null;
				}
				else if(cur_node.val == n)
				{
					prev_node.next_node = cur_node.next_node;
					var temp =  cur_node;
					cur_node = cur_node.next_node;
					temp = null;
				}
				else
				{			
					prev_node = cur_node;
					cur_node = cur_node.next_node;
				}

			}

				for(prev_node = first; prev_node != null; prev_node = prev_node.next_node)
				{
					$("#deleteS").append(prev_node.val + " " + "->" + " ");
				}
		},

		insertRear : function(n){
			var cur_node = first;

			while(cur_node.next_node != null)
			{
				cur_node = cur_node.next_node;
			}

			var new_node = new Node();
			cur_node.next_node = new_node;
			new_node.val = n;
			new_node.next_node = null;

			for(var tracer = first; tracer != null; tracer = tracer.next_node)
			{
				$("#insertR").append(tracer.val + " " + "->" + " ");
			}
		},

		searchfor : function(n){
			var cur_node = first;

			while(cur_node != null){
				if(cur_node.val == n)
				{
					var res = true;
					var pos = cur_node.val;
						
				}
				cur_node = cur_node.next_node;
				
			}

			if(res)
			{
				$("#searchD").append(n + "is in" + pos + "position");
			}
			else
			{
				$("#searchD").text("Don't act too smart. Search for an existing number,moron");
			}

		
			

		}
	}

	function Node(val)
	{
		this.val = val;
	}

	Node.prototype = new List();
	var i;
	var reference_node;
	var node = new Node(0);
	

	for(var i=1;i<=5;i++)
	{

		reference_node = node;
		var node;
		node = new Node(i);
		node.setEverything(i);

		if(i==1)
		{
			var first = node;
		}
	}



	$("#deleteFirst").on('click',function(){
		node.deleteFirst();

	});

	$("#insertFirst").on('click',function(){
		node.insertFirst(10);
	});

	$("#deleteSpec").on('click',function(){
		$("#prompt").text("Enter a number you want to delete");
		$("#textB").show();
		$("#deleteSD").text("Resulting linked list after deleting specified number: ");
		$("#button").show();
		
	});

	$("#button").on('click',function(){
		var n = $("#textB").val();
		node.deleteSpec(n);
	});

	$("#insertRear").on('click',function(){
		$("#prompt1").text("Enter a number");
		$('#textB1').show();
		$("#button1").show();
		$("#insertRD").text("Resulting linked list after inserting in the rear position: ");
	});

	$("#button1").on('click',function(){
		var n = $("#textB1").val();
		node.insertRear(n);
	});

	$("#Search").on('click',function(){
		$("#prompt3").text("Enter a number you want to search");
		$('#textB2').show();
		$("#button2").show();
	});

	$("#button2").on('click',function(){
		var n = $("#textB2").val();
		node.searchfor(n);
	});
	
})