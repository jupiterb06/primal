// button scripts
 $("#shuffleButton").click(function(e){
    $("#start").addClass("hidden");
    $("#shuffling").removeClass("hidden");
 });

 $("#stopShuffle").click(function(e){
    $("#shuffling").addClass("hidden");
    $("#beginReading").removeClass("hidden");
 });

  $("#beginReading").click(function(e){
    $("#beginReading").addClass("hidden");
    $("#past").removeClass("hidden");
 });

   $("#goToPastCard").click(function(e){
    $("#past").addClass("hidden");
    $("#pastCard").removeClass("hidden");
 });

    $("#goToPresent").click(function(e){
    $("#pastCard").addClass("hidden");
    $("#present").removeClass("hidden");
 });

     $("#goToPresentCard").click(function(e){
    $("#present").addClass("hidden");
    $("#presentCard").removeClass("hidden");
 });

      $("#goToFuture").click(function(e){
    $("#presentCard").addClass("hidden");
    $("#future").removeClass("hidden");
 });

     $("#goToFutureCard").click(function(e){
    $("#future").addClass("hidden");
    $("#futureCard").removeClass("hidden");
 });

      $("#goToRecap").click(function(e){
    $("#futureCard").addClass("hidden");
    $("#recap").removeClass("hidden");
 });

      $("#backToStart").click(function(e){
        location.reload();
 });
 