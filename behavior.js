$(document).ready(function () {
	$(".title").on("click", function () {
		$title = $(this);
		//getting the next element
		$item = $title.next();
		//open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
		$item.slideToggle(500, function () {
			//execute this after slideToggle is done
			//change text of header based on visibility of content div
			//$title.text(function () {
				//change text based on condition
				//return $item.is(":visible") ? "Collapse" : "Expand";
				//});
		});
	});
});