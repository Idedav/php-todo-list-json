<?php 

$jsonString = file_get_contents('../json/toDoList.json');

$list = json_decode($jsonString);

if(isset($_POST['itemTask'])){
    $newTask = $_POST['itemTask'];
    $list[] = $newTask;

    file_put_contents('../json/toDoList.json', json_encode($list));

}

if(isset($_POST['taskToDelete'])){
    $taskToDelete = $_POST['taskToDelete'];
    array_splice($list, $taskToDelete, 1);

    file_put_contents('../json/toDoList.json', json_encode($list));
}

header('Content-Type: application/json');
echo json_encode($list);
?>
