<?php 

$jsonString = file_get_contents('../json/toDoList.json');

$list = json_decode($jsonString, true);

if(isset($_POST['itemTask'])){
    $newTask = [
        "task" => $_POST['itemTask'],
        "isDo" => false
    ];
    $list[] = $newTask;

    file_put_contents('../json/toDoList.json', json_encode($list));

}

if(isset($_POST['taskToDelete'])){
    $taskToDelete = $_POST['taskToDelete'];

    array_splice($list, $taskToDelete, 1);

    file_put_contents('../json/toDoList.json', json_encode($list));
}

if(isset($_POST['taskIsDone'])){
    $taskIsDone = $_POST['taskIsDone'];
    
    $taskIsDone['isDone'] = !$taskIsDone['isDone'];

    file_put_contents('../json/toDoList.json', json_encode($list));
}

header('Content-Type: application/json');
echo json_encode($list);
?>
