const taskValue = document.getElementByClassName('task_value')[0];
const taskSubmit = document.getElementByClassName('task_submit')[0];
const taskList = document.getElementByClassName('task_list')[0];

const addTasks = (task) => {
    // 入力したタスクを追加　表示
    const listItem = document.crateElement('li');
    const showItem = taskList.appendChild(listItem);
    showItem.innerHtml = task;

    //タスクに削除ボタンを付与
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    listItem.appendChild(deleteButton);

    //削除ボタンをクリック、イベント発動
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
    });
}