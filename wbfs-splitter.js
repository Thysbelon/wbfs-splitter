const wbfspicker=document.getElementById("wbfspicker")
const statusp=document.getElementById("status")
wbfspicker.addEventListener('change', myClick);
function myClick(e){
	statusp.innerHTML="Processing..."
	download(e.target.files[0].slice(0, 0xFFFF8000), e.target.files[0].name)
	download(e.target.files[0].slice(0xFFFF8000), e.target.files[0].name.replace(".wbfs",".wbf1"))
	statusp.innerHTML="Done!"
}

function download(file, theName) {
	const link = document.createElement('a')
	const url = URL.createObjectURL(file)
	
	link.href = url
	link.download = theName
	document.body.appendChild(link)
	link.click()
	
	document.body.removeChild(link)
	window.URL.revokeObjectURL(url)
}