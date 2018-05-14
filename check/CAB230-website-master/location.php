<?php include 'header.php'; ?>

<!-- Insert content for universal regions -->
<!--<body onload="setupHTMLCode2('Location');setupLocation();displayReviews('location', thislocation);">-->
<body onload="checkForData('Location')">

<div id="wrapper">

	<?php include 'menu.php'; ?>

	<div class="fitwidthL padding60">
		<div class="relativewrap">
			<div class="third singleLocation">
			</div><div class="twothirds rightcontentthirds verticleScrollReview">
				<h3>User Reviews</h3>
                <div id="ReviewList">
				</div>
			</div>
			<div id="leaveReview">
            	<textarea id="leaveReviewEntry">Leave a review</textarea><div id="leaveReviewRating">
                    <span class="selectrating">
                    	<!-- commenting to remove white space -->
						<img onClick="leaveRatingClick(0.5)" onMouseOver="leaveRatingHover(0.5)" onMouseOut="resetUserrating()" id="rating0.5" alt="half star" src="images/star-empty-left.png"><!--
                        --><img onClick="leaveRatingClick(1.0)" onMouseOver="leaveRatingHover(1.0)" onMouseOut="resetUserrating()" id="rating1.0" alt="half star" src="images/star-empty-right.png"><!--
                        --><img onClick="leaveRatingClick(1.5)" onMouseOver="leaveRatingHover(1.5)" onMouseOut="resetUserrating()" id="rating1.5" alt="half star" src="images/star-empty-left.png"><!--
                        --><img onClick="leaveRatingClick(2.0)" onMouseOver="leaveRatingHover(2.0)" onMouseOut="resetUserrating()" id="rating2.0" alt="half star" src="images/star-empty-right.png"><!--
                        --><img onClick="leaveRatingClick(2.5)" onMouseOver="leaveRatingHover(2.5)" onMouseOut="resetUserrating()" id="rating2.5" alt="half star" src="images/star-empty-left.png"><!--
                        --><img onClick="leaveRatingClick(3.0)" onMouseOver="leaveRatingHover(3.0)" onMouseOut="resetUserrating()" id="rating3.0" alt="half star" src="images/star-empty-right.png"><!--
                        --><img onClick="leaveRatingClick(3.5)" onMouseOver="leaveRatingHover(3.5)" onMouseOut="resetUserrating()" id="rating3.5" alt="half star" src="images/star-empty-left.png"><!--
                        --><img onClick="leaveRatingClick(4.0)" onMouseOver="leaveRatingHover(4.0)" onMouseOut="resetUserrating()" id="rating4.0" alt="half star" src="images/star-empty-right.png"><!--
                        --><img onClick="leaveRatingClick(4.5)" onMouseOver="leaveRatingHover(4.5)" onMouseOut="resetUserrating()" id="rating4.5" alt="half star" src="images/star-empty-left.png"><!--
                        --><img onClick="leaveRatingClick(5.0)" onMouseOver="leaveRatingHover(5.0)" onMouseOut="resetUserrating()" id="rating5.0" alt="half star" src="images/star-empty-right.png">
                    </span>
                    <br />
                    <p><button type='button' onclick='alert("Submitting review")'>submit</button></p>
                </div>
			</div>
		</div>
	</div>

	<?php include 'footer.php'; ?>

</div>

<?php include 'popups.php'; ?>

</body>
</html>
