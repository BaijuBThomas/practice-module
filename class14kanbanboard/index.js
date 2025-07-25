
const addRef = document.querySelector('.action-wrapper .add');
const removeRef = document.querySelector('.action-wrapper .delete');
const modalRef = document.querySelector('.modal');
const textAreaRef = document.querySelector('.modal .left-section textarea');
const taskWrapperRef = document.querySelector('.tasks-wrapper');
const rightCategorySelection = document.querySelectorAll('.right-section .category');
const taskListDeleteRef = document.querySelectorAll('.task-Wrapper .task .task-delete-icon');
const headerCategoryFilterWrapper = document.querySelector('header .category-wrapper ')

addRef.addEventListener('click', function(e) {
    toggleModal();
});

function defaultCategorySelection() {
    removeAllCategorySelection();
    const firstCategory = document.querySelector('.right-section .category.p1');
    firstCategory.classList.add('selected');
}

function toggleModal(){
    const isHidden = modalRef.classList.contains('hide');
    if(isHidden){
        modalRef.classList.remove('hide');
    }
    else{
        defaultCategorySelection();
        modalRef.classList.add('hide');
    } 
}
//in-memory state management 
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTaskList() {
    tasks.forEach((task) => {
        createTask(task);
    })
}
renderTaskList();

function addTasksInData(newTask) {
    // console.log(typeof tasks, tasks)
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

textAreaRef.addEventListener('keydown',function(e) {
    if(e.key == "Enter"){
        // console.log("Task added",e.target.value);
        const rightSelectedCategoryRef = document.querySelector('.right-section .category.selected');
        const selectedCategoryName = rightSelectedCategoryRef.getAttribute('data-category');
        const newTask = {
            id: Math.random(),
            title: e.target.value,
            category: selectedCategoryName,
        };
        addTasksInData(newTask);
        e.target.value = "";
        toggleModal();
        createTask(newTask);
    }
});

function createTask(task) {
    const taskRef = document.createElement('div');
    taskRef.className = 'task';
    // taskRef.setAttribute('data-id', task.id);
    taskRef.dataset.id = task.id;
    taskRef.innerHTML = `
            <div class="task-category" data-priority="${task.category}" ></div>
            <div class="task-id">${task.id}</div>
            <div class="task-title">${task.title}</div>
            <div class="task-delete-icon"><i class="fa-solid fa-trash"></i></div>
    `;
    taskWrapperRef.appendChild(taskRef);
   // const deleteIconRef = taskRef.querySelector('.task-delete-icon .fa-trash');
    // deleteIconRef.addEventListener('click', function(e) {
    //     const selectedTask = e.target.closest('.task');
    //     selectedTask.remove();
    //     deleteTaskFromData(task.id);
    //     console.log(tasks);
    // });
    
}

// console.log(rightCategorySelection);

rightCategorySelection.forEach(function(categoryRef) {
    categoryRef.addEventListener('click', function(e) {
        removeAllCategorySelection();
        // console.log(e.target);
        e.target.classList.add("selected");
    })
});

function removeAllCategorySelection() {
    rightCategorySelection.forEach(function(categoryRef) {
        categoryRef.classList.remove('selected');
    })
}

function deleteTaskFromData(taskId) {
    const selectedTaskIdx = tasks.findIndex((task) => Number(task.id)) === Number(taskId);
    tasks.splice(selectedTaskIdx, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

taskWrapperRef.addEventListener('click', function(e) {
    console.log(e.target.classList.contains('fa-trash'));

    if(e.target.classList.contains('fa-trash')){
        const currentTaskRef = e.target.closest('.task');
        currentTaskRef.remove();
        const taskId = currentTaskRef.dataset.id;
        deleteTaskFromData(taskId);
        console.log(tasks);
    }

    if (e.target.classList.contains('task-category')) {
        const currentPriority = e.target.dataset.priority;
        const nextPriority = getNextPriority(currentPriority);
        // console.log(nextPriority);
        e.target.dataset.priority = nextPriority;
        const taskId = Number(e.target.closest('.task').dataset.id);
        updatePriorityInData(taskId, nextPriority);
    }
});

function updatePriorityInData(taskId, nextPriority) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].category = nextPriority;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getNextPriority(currentPriority) {
    const priorityList = ['p1','p2','p3','p4'];
    const currentPriorityIdx = priorityList.findIndex((p) => p === currentPriority);
    const nextPriorityIdx = (currentPriorityIdx + 1) % 4; //
    return priorityList[nextPriorityIdx];
}

headerCategoryFilterWrapper.addEventListener('click', function(e) {
    if(e.target.classList.contains('category')) {
        const selectedPriority = e.target.dataset.priority;
        // console.log(selectedPriority);

        const taskListRef = document.querySelectorAll('.task');
        taskListRef.forEach(taskRef => {
            taskRef.classList.remove('hide');
            const currentTaskPriority = taskRef.querySelector('.task-category').dataset.priority;
            if(currentTaskPriority !== selectedPriority) {
                taskRef.classList.add('hide');
            }
        })
    }
})

removeRef.addEventListener('click', function(e) {
   const isDeleteEnabled =  e.target.classList.contains('enabled');
   if(isDeleteEnabled){
    e.target.classList.remove('enabled');
    // toggleDeleteIcon(false);
    taskWrapperRef.dataset.deleteDisabled = true;

   }
   else{
    e.target.classList.add('enabled');
    // toggleDeleteIcon(true);
    taskWrapperRef.dataset.deleteDisabled = false;
   }
})

// function toggleDeleteIcon(visible) {
//     const allDeleteRef = document.querySelectorAll('.task-delete-icon');
//     allDeleteRef.forEach(deleteIconRef => {
//         deleteIconRef.style.display =  visible ? "block" : "none";
//     })
// }