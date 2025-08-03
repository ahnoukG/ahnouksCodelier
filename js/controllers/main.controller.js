app.controller("main_controller", function($scope){
    console.log("Aquí corre toda la logica Javascript!");

    $scope.username = localStorage.getItem("username");
    async function askforname(){
        if(!$scope.username){
                const { value: username } = await Swal.fire({
                    title: "Hello!",
                input: "text",
                inputLabel: "What is your name?", 
                showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "You need to write something!";
                }
            }
        });
        if (username) {
            Swal.fire(`Bienvenido ${username}!`);
            localStorage.setItem("username", username);
            $scope.$apply(function() {
                $scope.username = username;
            });
        }
        }
    }
    askforname();

});