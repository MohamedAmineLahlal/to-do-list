const mainInput     = $('.mainClassInput input');
const mainInputBtn  = $('.mainBtnInput');
const LiveTasks     = $('.mainLiveTasks');
const editBtn       = $('#editBtn');
const validBtn      = $('#validBtn');
const deleteBtn     = $('#deleteBtn');
const mainContainer = $('.mainContainer');

//add new tasks:
mainInputBtn.click(() => {
    let task = mainInput[0].value;
    if (task != ""){
        const newTaskDiv = $("<div>").addClass("LiveTask");
        const newTaskContent = $("<p>").text(task);
        newTaskContent.addClass('TaskContent');
        const newTaskBtnsContainer = $("<div>").addClass("LiveTaskBtns");

        const editBtn = $("<button/>").addClass("liveTaskBtn").attr("id", "editBtn");
        const editSvgBtn = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 21.2663L14.2662 21.2475L26.3062 9.3225C26.7787 8.85 27.0387 8.2225 27.0387 7.555C27.0387 6.8875 26.7787 6.26 26.3062 5.7875L24.3237 3.805C23.3787 2.86 21.73 2.865 20.7925 3.80125L8.75 15.7288V21.2663ZM22.5562 5.5725L24.5425 7.55125L22.5462 9.52875L20.5637 7.5475L22.5562 5.5725ZM11.25 16.7713L18.7875 9.305L20.77 11.2875L13.2337 18.7513L11.25 18.7575V16.7713Z" fill="#DEAD00"/><path d="M6.25 26.25H23.75C25.1288 26.25 26.25 25.1288 26.25 23.75V12.915L23.75 15.415V23.75H10.1975C10.165 23.75 10.1313 23.7625 10.0988 23.7625C10.0575 23.7625 10.0163 23.7513 9.97375 23.75H6.25V6.25H14.8088L17.3088 3.75H6.25C4.87125 3.75 3.75 4.87125 3.75 6.25V23.75C3.75 25.1288 4.87125 26.25 6.25 26.25Z" fill="#DEAD00"/></svg>';
        editBtn.append(editSvgBtn);

        const validBtn = $("<button/>").addClass("liveTaskBtn").attr("id", "validBtn");
        const validSvgBtn = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9375 16.4375L22.5 5.875C22.75 5.625 23.0471 5.5 23.3913 5.5C23.7354 5.5 24.0321 5.625 24.2813 5.875C24.5313 6.125 24.6563 6.42167 24.6563 6.765C24.6563 7.10833 24.5313 7.40542 24.2813 7.65625L12.8125 19.125C12.5625 19.375 12.2708 19.5 11.9375 19.5C11.6042 19.5 11.3125 19.375 11.0625 19.125L5.71876 13.7812C5.46876 13.5312 5.34876 13.2342 5.35876 12.89C5.36876 12.5458 5.49918 12.2492 5.75001 12C6.00001 11.75 6.2971 11.625 6.64126 11.625C6.98543 11.625 7.2821 11.75 7.53126 12L11.9375 16.4375ZM7.50001 25C7.14584 25 6.84876 24.88 6.60876 24.64C6.36876 24.4 6.24918 24.1033 6.25001 23.75C6.25001 23.3958 6.37001 23.0988 6.61001 22.8588C6.85001 22.6188 7.14668 22.4992 7.50001 22.5H22.5C22.8542 22.5 23.1513 22.62 23.3913 22.86C23.6313 23.1 23.7508 23.3967 23.75 23.75C23.75 24.1042 23.63 24.4012 23.39 24.6412C23.15 24.8812 22.8533 25.0008 22.5 25H7.50001Z" fill="#00BC13"/></svg>';
        validBtn.append(validSvgBtn);

        const deleteBtn = $("<button/>").addClass("liveTaskBtn").attr("id", "deleteBtn");
        const deleteSvgBtn = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.75 5H19.375L18.125 3.75H11.875L10.625 5H6.25V7.5H23.75M7.5 23.75C7.5 24.413 7.76339 25.0489 8.23223 25.5178C8.70107 25.9866 9.33696 26.25 10 26.25H20C20.663 26.25 21.2989 25.9866 21.7678 25.5178C22.2366 25.0489 22.5 24.413 22.5 23.75V8.75H7.5V23.75Z" fill="#B70000"/></svg> ';
        deleteBtn.append(deleteSvgBtn);

        newTaskBtnsContainer.append(editBtn, validBtn, deleteBtn);
        
        newTaskDiv.append(newTaskContent, newTaskBtnsContainer);
        LiveTasks.prepend(newTaskDiv);
    }else{
        console.log("empty string");
    }

    task = mainInput[0].value = "";
   
});


//event listener on the static parent [dynamically added divs]:
//Delete Btn:
LiveTasks.on("click", "#deleteBtn", function() {
    $(this).parent().parent().remove();
});


//Valid Btn:
LiveTasks.on("click", "#validBtn", function() {
    const taskContainer = $(this).closest('.LiveTask');
    const paragraphToEdit = taskContainer.find('.TaskContent');
    const buttons = taskContainer.find('.liveTaskBtn');
    paragraphToEdit.css('color', 'white');
    paragraphToEdit.css('font-weight', 'bold');
    taskContainer.addClass('linedDiv');
    taskContainer.css('border-color', 'white');
    taskContainer.css('background-color', '#34A73F');
    $(this).parent().css('background-color', '#34A73F');
    buttons.css('background-color', '#34A73F');
});

//edit Btn:
let working_on_task = '';
LiveTasks.on("click", "#editBtn", function() {
    const taskContainer = $(this).closest('.LiveTask');
    working_on_task = taskContainer.find('.TaskContent');

    const positioningDiv = $('<div>').addClass("DaContainer");
    const editTaskDiv = $("<div>").addClass("editTask");
    const editTaskContent = $("<p>").text("Modify Your Task :").addClass('editedTaskContent');
    const editTaskpInputBtnWrapper = $("<div>").addClass("editTaskContentWrapper");
    const editTaskInputBtnWrapper = $("<div>").addClass("editTaskWrapper");
    const editTaskInput = $("<input>").addClass('editedTaskInput');
    const validEditBtn = $("<button/>").addClass("validEditedTask").attr("id", "ValidTask");
    const editTaskSvgBtn = '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.07141 18.3214L6.92141 25.8428C7.11881 26.0993 7.37175 26.3078 7.66123 26.4525C7.95071 26.5972 8.26922 26.6745 8.59284 26.6786C8.91125 26.6822 9.22649 26.6149 9.51561 26.4815C9.80474 26.348 10.0605 26.1518 10.2643 25.9071L28.9286 3.32141" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const editTaskSvgCheck = '<svg class="editTaskSvg" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.625 46.7958L6.39374 32.5646L12.8792 26.0792L20.625 33.8479L43.2667 11.1833L49.7521 17.6688L20.625 46.7958Z" fill="#00A3FE"/></svg>';


    validEditBtn.append(editTaskSvgBtn);
    editTaskInputBtnWrapper.append(editTaskInput, validEditBtn);
    editTaskpInputBtnWrapper.append(editTaskContent, editTaskInputBtnWrapper);
    editTaskDiv.append(editTaskSvgCheck, editTaskpInputBtnWrapper);
    positioningDiv.append(editTaskDiv);
    positioningDiv.css('display', 'flex');
    mainContainer.append(positioningDiv);
});


mainContainer.on("click", "#ValidTask", function(){
    const taskEditedInputWrapper = $(this).closest('.editTaskWrapper');
    const taskEditedInputContent = taskEditedInputWrapper.find('.editedTaskInput')[0].value;
    const positioningDiv = $(this).closest('.DaContainer');
    working_on_task.text(taskEditedInputContent);
    positioningDiv.css('display', 'none'); 
});


