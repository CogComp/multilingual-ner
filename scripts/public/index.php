<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
    <META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
    <META HTTP-EQUIV="EXPIRES" CONTENT="0">
    <title>Multilingual NER/EDL demo</title>
    <link rel="_stylesheet" href="css/font-awesome/css/font-awesome.min.css">
    <link rel="_stylesheet" type="text/css" href="css/demo.css">
    <link rel="stylesheet" type="text/css" href="css/w3.css">
	<script src="js/jquery-3.5.1.min.js"></script>
	<script src="js/demo.js"></script>
    <style>
    </style>
</head>
<body>
<div class="main">
	<form id="demoForm" name="demoForm">
		<div class="w3-container">
			<div class="w3-left">
				<label> Language </label>
				<br>
				<select class="w3-select w3-pale-yellow w3-border" id="lang" name="lang" value="eng" onChange="javascript:newLanguageSelect();" style="width:128px;">
					<!--<option value="">Select a language... -->
				</select>
			</div>
			<div class="w3-left">
				<label> Example </label>
				<br>
				<select class="w3-select w3-pale-yellow w3-border" id="example" name="example" value="" onChange="javascript:newExampleSelect();" style="width:512px;">
					<!--<option value="">Select a language... -->
				</select>
			</div>
		</div>
		<div class="w3-container">
			<label>Text</label>
			<br>
			<textarea class="w3-input w3-border" id="text" name="text" rows="8" cols="50" style="resize: vertical;"></textarea>
		</div>
		<div class="w3-container">
			<button class="w3-button w3-blue" onClick="javascript:return formSubmit();"> Run > </button>
		</div>
	</form>
</div>

<div class="w3-painel">
	&nbsp;
	<br>
	<div id="result" class="w3-container"></div>
</div>

<script>fillLanguageSelectField();</script>
</body>
</html>
