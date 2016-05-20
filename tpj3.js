/**
 * Created by tracy on 4/8/2016.
 */

function colorFade()
    {
        var opacity = 1,
        fps = 1000/60; //
        function decrease(){
            opacity -= 0.005;//smaller steps
            if(opacity<= 0){ //finished
                document.getElementById("top").style.opacity=0;
                return true;
            }
            document.getElementById("top").style.opacity = opacity;
            setTimeout(decrease, fps);
        }

        decrease();
    }
