axios
.get('https://yesno.wtf/api')
.then(function(response){
  console.log(response)
  console.log(response.data.answer)
  console.log(response.data.image) 
 })
