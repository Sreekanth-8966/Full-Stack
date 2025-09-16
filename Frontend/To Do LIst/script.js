$(document).ready(function () {
    $("#addTask").click(function () {
        let task = $("#myInput").val().trim();

        
        if (task === "") {
            alert("Please enter a task before adding!");
            return;
        }

        $("#list").append(
            `<li>
                <span class="task-text">${task}</span>
                <div class="button-group">
                    <button class="green-btn">✅</button>
                    <button class="red-btn">❌</button>
                </div>
            </li>`
        );

        $("#myInput").val("");
        $("#output").text("");
    });
    $("#removeTask").click(function () {
        $("#list li:last").remove();
    });
    $("#list").on("click", ".green-btn", function () {
        const li = $(this).closest("li");
        li.css("background-color", "#b2f2bb"); 
    });
    $("#list").on("click", ".red-btn", function () {
        $(this).closest("li").remove();
    });
});
