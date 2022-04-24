console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Sarthak jain',
        age: 18,
        city: 'Ahehmdabad',
        language: 'Python',
        role : 'DATA SCIENTIST',
        image : 'sarthak.jpeg'
    },

    {
        name: 'DHRUV',
        age: 18,
        city: 'HYDERABAD',
        language: 'python',
        role    : 'ML expert',
        image: 'DHRUV.jpeg'
    },

    {
        name: 'KAUSTUV',
        age: 18,
        city: 'Kolkata',
        language: 'JAVA',
        role :   'SDE 1',
        image: 'kaustuv.jpeg'
    },

    {
        name: 'Aashish Gole',
        age: 18,
        city: 'Mirzapur',
        language: 'Hindi & some tuti-futi inglis',
        role : 'CHAI PAANI WALA CHHOTU',
        image: 'asish.jpeg' 
    },

    {
        name: 'ANUGAR DAS',
        age: 20,
        city: 'somewhere on earth',
        language: 'All',
        role : 'CEO',
        image: 'anugar.jpeg'
    }
]


// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">ROLE : ${currentCandidate.role} </li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}
