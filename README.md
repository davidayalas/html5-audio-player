#HTML5 audio player

This is a simple audio player requested to me from my friend [Víctor](http://victordemusica.blogspot.com.es/) to put in his blog.

##How it works

Load the script in your web page

    <script src="https://cdn.rawgit.com/davidayalas/html5-audio-player/master/lib/dasplayer.js"></script>


The basic use is:

* dasplayer.addPlayer(file[, dom_id])

    Uses:

    It will we executed in the place you put the snippet of javascript. E.g:

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id 
        tempus velit. Suspendisse id turpis neque. Suspendisse eu laoreet
        justo. Duis varius sem ullamcorper, condimentum tortor a, commodo
        elit. In id nibh diam. Suspendisse ac facilisis lorem, vel malesuada
        odio. Maecenas tincidunt, metus eu viverra pretium, felis velit tempor
        risus, ac egestas lacus felis at sem. Proin porttitor augue in tempus
        vehicula. Morbi laoreet condimentum ullamcorper. Etiam sit amet est
        quis neque placerat pellentesque. Donec a posuere mi, ut dapibus eros.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.

        <script>
            dasplayer.addPlayer('file.mp3');
        </script>   
        </p>

    With dom_id param:    
    
    - It will load the player inside the DOM object id you pass to the method. It will allow you to load the player asynchronously 

    Anywhere in your code:

        <script>
            function SomeOtherFunction(){
                dasplayer.addPlayer('file.mp3','my_dom_object');
            }
        </script>   

#Samples

https://cdn.rawgit.com/davidayalas/html5-audio-player/master/test/index.html

** TODO **

Some templating to allow setup the html of the player