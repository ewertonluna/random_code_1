const listUl = document.querySelector('ul');
const addItemButton = document.querySelector('button.addItemButton');
const addItemInput = document.querySelector('input.addItemInput');
const li = listUl.children; 

/* This function takes a li element 
and adds the up, down and remove button
to it.*/
function attachListButtons(li) {
    let up = document.createElement('button');
    let down = document.createElement('button');
    let remove = document.createElement('button');

    up.textContent = 'Up';
    up.className = 'up'

    down.textContent = 'Down';
    down.className = 'down';

    remove.textContent = 'Remove';
    remove.className = 'remove';

    li.appendChild(up);
    li.appendChild(down);
    li.appendChild(remove);
}

/* 
This function takes a collection of li elements
(ul children) and removes the up button of the top-most
li and the down button of the bottom-most li. 
It works.
*/
function correctTopAndBottomButtons(ulChildren){
    for (let i = 0; i < ulChildren.length; i++){
        if (i === 0){
            let button = ulChildren[i].children[0];
            ulChildren[i].removeChild(button);
        }
        else if (i === ulChildren.length - 1){
            let button = ulChildren[i].children[1];
            ulChildren[i].removeChild(button);
        }
    }
}


/* When displaying the page for the first time 
        1 - Adds all buttons to the li collection.
        2 - Removes the up button for the top li and
        the down button of the bottom li.
    It works.
*/

// 1
for (let i = 0; i < li.length; i++){
    attachListButtons(li[i]);
}
//2
correctTopAndBottomButtons(li);

/* HERE IS THE PROBLEM!!!
In these next for loops, I wish to remove all buttons 
for all li elements, but it's not working.
The webpage still displays the respective li buttons.
*/
for (let i = 0; i < li.length; i++){
    for (let j = 0; j < li[i].children; j++){
        let button = li[i].children[j];
        li[i].removeChild(button);
    }
}


function addBackgroundColorToTopAndBottom(ulChildren){
    for (let i = 0; i < ulChildren.length; i++){
        if (i === 0){
            ulChildren[i].style.backgroundColor = 'lightskyblue';
        }
        else if (i === (ulChildren.length - 1)){
            ulChildren[i].style.backgroundColor = 'lightsteelblue';
        }
        else {
            ulChildren[i].style.backgroundColor = 'white';
        }
    }
}
    
addBackgroundColorToTopAndBottom(li);


// listUl.addEventListener('click', (event) => {
//     if (event.target.tagName == 'BUTTON') {
//         if (event.target.className == 'up') {
//             let li = event.target.parentNode;
//             let prevLi = li.previousElementSibling;
//             let ul = li.parentNode;
            
//             if (prevLi) {
//                 ul.insertBefore(li, prevLi);
//             }
//         }
//         if (event.target.className == 'down') {
//             let li = event.target.parentNode;
//             let nextLi = li.nextElementSibling;
//             let ul = li.parentNode;
            
//             if (nextLi) {
//                 ul.insertBefore(nextLi, li);
//             }
//         }
//         if (event.target.className == 'remove') {
//             let li = event.target.parentNode;
//             let ul = li.parentNode;
//             ul.removeChild(li);
//         }
//     }
    
//     addBackgroundColorToTopAndBottom(li);
// });


// addItemButton.addEventListener('click', () => {
//     let li = document.createElement('li');
//     li.textContent = addItemInput.value;
//     listUl.appendChild(li);
//     attachListButtons(li);
//     addBackgroundColorToTopAndBottom(listUl.children);
//     addItemInput.value = '';
// });

