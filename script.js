// 

const addBtn=document.getElementById("addTask");
const list=document.getElementById('listItems');
const tableData=document.getElementById('list').getElementsByTagName('tbody')[0];
addBtn.addEventListener('click',()=>{
    const textValue=document.getElementById('inputValue');
    const text=textValue.value.trim();
    if(text !==""){
    
    const row=document.createElement("tr");
    const data=document.createElement('td');
    data.textContent=text;
    
    const actionCell=document.createElement('td');

    const deleteBtn=document.createElement("button")
    deleteBtn.textContent='Delete';
    deleteBtn.classList.add("detelebtn");

    actionCell.appendChild(deleteBtn);
    row.appendChild(data);
    row.appendChild(actionCell);
    tableData.appendChild(row);

    textValue.value=""

    deleteBtn.addEventListener('click',()=>{
    tableData.removeChild(row);
        
    })

    }
    else{
        alert("please enter Task")
    }
});
document.getElementById('removeTask').addEventListener('click',()=>{
    const lastItem=tableData.lastChild;
    tableData.removeChild(lastItem);
})