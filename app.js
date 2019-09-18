const endpoint='https://jsonplaceholder.typicode.com/users';
 let people=[];
fetch(endpoint).then(mess=>mess.json())
               .then(data=>people.push(...data));



function findMatches(word,people)
{
    const regex=new RegExp(word,'gi');
    const matchedData=people.filter(person=>person.name.match(regex));
    return matchedData;
}
function display()
{
const matched=findMatches(this.value,people);
const html = matched.map(person => {
    const regex = new RegExp(this.value, 'gi');
    const name = person.name.replace(regex, `<span >${this.value}</span>`);
    return `
      <li>
        <span class="name">${name}</span>
      </li>
    `;
  }).join('');
  searchInput.value.length===0?suggestions.innerHTML="": suggestions.innerHTML=html
 
}





const searchInput=document.querySelector("#searchField");
const suggestions=document.querySelector("#suggestions");

searchInput.addEventListener('change',display);
searchInput.addEventListener('keyup',display);
