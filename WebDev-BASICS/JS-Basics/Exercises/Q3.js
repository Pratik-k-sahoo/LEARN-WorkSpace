let ele = document.querySelectorAll(".box")
let jokes = [`You know why you never see elephants hiding up in trees?<br>
Because they’re really good at it.`, `What is red and smells like blue paint?<br>
Red paint`, `What do you call a parade of rabbits hopping backwards?<br>
A receding hare-line.`, ` Where does the General keep his armies?<br>
In his sleevies!`, `Why aren’t koalas actual bears?<br>
The don’t meet the koalafications.`, `A bear walks into a restaurant and says, “I want a grilled… cheese.” The waiter says “Why the big pause?”<br>
The bear replies, “I don’t know. I was born with them`, `What do you call bears with no ears?<br>
B.`, `Why did the tomato blush?<br>
Because it saw the salad dressing`, `I went in to a pet shop. I said, “Can I buy a goldfish?” The guy said, “Do you want an aquarium?”
I said, “I don’t care what star sign it is.`]
console.log(ele)

let num = Math.floor(Math.random() * jokes.length)
ele[0].innerHTML = `${jokes[num]}`
num = Math.floor(Math.random() * jokes.length)
ele[1].innerHTML = `${jokes[num]}`
num = Math.floor(Math.random() * jokes.length)
ele[2].innerHTML = `${jokes[num]}`