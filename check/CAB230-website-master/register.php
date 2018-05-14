<?php include 'header.php'; ?>

<!-- Insert content for universal regions -->
<!-- <body onload="setupHTMLCode2('Register')">-->
<!-- <body onload="setupHTMLCode('Register')">-->
<body onload="checkForData('Register')">
<div id="wrapper">

	<?php include 'menu.php'; ?>
	
	<!-- main registration page - Form boxes to take inputs-->
	<div class="fitwidthS padding60 textcenter">
		<div class="half">
			<p>Name<br />
			<input type="text" id="name" /></p>
		</div><div class="half">
			<p>Email<br />
			<input type="email" id="email" /></p>
		</div><div class="half">
			<p>Username<br />
			<input type="text" id="username" /></p>
		</div><div class="half">
			<p>Date of Birth<br />
			<input type="date" id="dob" /></p>
		</div><div class="half">
			<p>Post Code<br />
			<input type="number" id="pcode" /></p>
		</div><div class="half">
			<p>Suburb<br />
			<input type="text" id="suburb" /></p>
		</div><div class="half">
			<p>Password<br />
			<input type="password" id="password" /></p>
		</div><div class="half">
			<p>Confirm Password<br />
			<input type="password" id="cnfrmpassword" /></p>
		</div>
		<div id="FormErrorMessage"></div>
		<button onclick="checkRegisterForm()">Submit</button>
	</div>

	<?php include 'footer.php'; ?>

</div>

<?php include 'popups.php'; ?>

</body>
</html>
