function main{
	Clear-Host
	Write-Host "`nType 'quit' to exit the program.`n"
	while($true){
		askQuestion
	}
}

function askQuestion{
	Write-Host "What is your question?: " -ForegroundColor cyan -NoNewLine ; $question = Read-Host
	doQuit $question
	answer
	Write-Host "`nAsk me another question!"	
}

function answer{
	$random_number = Get-Random -Minimum 0 -Maximum 8
	$response = Switch($random_number){
		0 {"It is certain."}
		1 {"It is decidedly so."}
		2 {"Ask again later."}
		3 {"Cannot predict now."}
		4 {"Concentrate and ask again."}
		5 {"Do not ask again."}
		6 {"My sources say no."}
		7 {"Very doubtful."}
		default {"Error, please try again"}
	}
	Write-Host $response -ForegroundColor green 
}

function doQuit{
		param($quit)
		$quit = ($quit.ToLower()).Trim()
		if($quit -eq "quit" -or $quit -eq "q"){
			exit
		} else{
			return
		}
}

while($true){
	main
}

