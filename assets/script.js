const aboutMeEl = $('#aboutMe');
const pg1 = $('page-1');
const pg2 = $('page-2');











function pullBio(){
console.log('it works');
pg1.classList.add('hidden');
}



aboutMeEl.on('click', pullBio);