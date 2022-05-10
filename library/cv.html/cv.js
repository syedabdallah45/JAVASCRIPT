console.log('this is cv ')

const data = [
    {
        name: 'syed abdallah',
        age: 22,
        city: 'hyderabad',
        language: 'javascript',
        framework: 'react js',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'

    },
    {
        name: 'syed Noora',
        age: 22,
        city: 'bangoluru',
        language: 'python',
        framework: 'react js',
        image: 'https://randomuser.me/api/portraits/women/51.jpg'

    },
    {
        name: 'syed huda',
        age: 25,
        city: 'hyderabad',
        language: 'java',
        framework: 'react js',
        image: 'https://randomuser.me/api/portraits/women/52.jpg'

    },
    {
        name: 'syed saddiq nisar',
        age: 42,
        city: 'hyderabad',
        language: 'typescript',
        framework: 'react js',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'

    },
    {
        name: 'syed akther',
        age: 34,
        city: 'hyderabad',
        language: 'django',
        framework: 'react js',
        image: 'https://randomuser.me/api/portraits/men/53.jpg'

    },
    {
        name: 'mohd farooq',
        age: 24,
        city: 'hyderabad',
        language: 'c',
        framework: 'react js',
        image: 'https://randomuser.me/api/portraits/men/52.jpg'

    }



]

// cv iterator

function cvIterator(profiles) {
    let nextindex = 0;
    return {
        next: function () {
            return nextindex < profiles.length ?
                { value: profiles[nextindex++], done: false } :
                { done: true }
        }
    };
}
const candidates = cvIterator(data);
nextcv();

function nextcv(){
    const currentcandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentcandidate != undefined) {
        image.innerHTML = `<img src='${currentcandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentcandidate.name}</li>
    <li class="list-group-item">${currentcandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentcandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentcandidate.language}</li>
    <li class="list-group-item">Uses ${currentcandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('end of candidate applications');
        window.location.reload();
    }
}