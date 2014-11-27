(function(){
	
	var dasplayer_cont = 1;

	window["dasplayer"] = {};

	window["dasplayer"].addPlayer = function(musicfile, id){

		var scriptTag = document.scripts[document.scripts.length - 1];
		var parentTag = id?document.getElementById(id):scriptTag.parentNode;
		dasplayer_cont++;
		
		var player = document.createElement("p");
		var plyr = "<img id='das-audio-player-play"+dasplayer_cont+"' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADrklEQVRYR7WXWYjPURTHzYMlS9bMeBtSKBKRQnlQ1gdLjK28WJrEg50skV3kwTZDnpAlxIO1PJCYRpYHWbKMUaIh+zoe+H6me3T7zW+5/79x6tvv/u49997vPffcc88taBQuraQ6Whgq9BY6C61d94/6Vgl3hcvCWeFLyNAFAUpdpbNUmCo0D9BH5atwWNgiPEvrk0agmTquERYIjQMnjqrVqmK7sFb4GTdGEoEuUj7lTO33+66fi8JV4YHwzjW207eHMEQYLkDelzv6GS88j5KII9BLSpeEIk+5RuXNwgHhU4Y18ItZAtvWwdN9pfIw4Z7fP0qAlV8XCj2lQyrPEz5kTBxtxiq7hckREgN9S/gEMFuFgIcjv4WFwo4cJ46qL1EFzmhyWwVI1PmETwATYzYTnO9fJ7exGJfxTTaosNInwFG7L5i3H1R5esLKm6ge785VjqlDietE/+5ClVlgv35mukYcrpuQtOf91LZMmCEQgEIFh3wk4BtIuVAKASLca8GCTJbpIXBTIMCwoluhDKS3XNjo9ImURRDAS4+4Ss45xy/tqBkBumDKRcLOQBKsnuPINiIlEPDNf1r/4zIG8wmY6gkV2JKsGIH+OWGk61gOgUqhv6vIMj9qcQSof8qKBI5ZmvgnogICbwSLWDC7kIcFrAtnmy3ZlTLGGLVhaaQGAuyjHb8BziJpHJIs4PdJ25JBUrzmlGv/F4HjmoD7IM4n6hFo6C3Aj/bksgUN5YRPnBNy9aYJQWyTU6hzwn3OXNSdEcZmDBDnA5icSPo5oy/N54URTq8MApOEo67ih74EorQQ6xPA6+cLewMmRqW9QCAyp58IgZYCobiFG2SxvttSBjQCj6XDuScRDZUVUlzvlAnFhXYZcTHMdg1v9eUysnQrOjgEOOt4eYjJrX9HFbiM2rgKrDbHCJAJkeNZjGZLpiQsC/P9Cl2yp3dSZfJChK1jkdV+QsItxW1lQsjcmsdEcV1809O+TlhNwSfQVP83hD7eCBwZP53Kh090cq7ywUJdUhNNSotVR1LayZuJTGaugG/kIuw5+2xmp+9LgXzwhQ0Ul5b3VCNpuU8Ch+RklAnvM1hw1EoFEtq2ni6Tk5aT+v2VpIdJsTRwmr6RyTAbb78rwkPBrMJtag8T3o7RlxRmn+CvPM0C1oZPrBKIC3Y6MhZfrxlvx5E5+7GJbMjjlFcwJ2KaQNAKEYIMmTUOXJ3WIYSA9SdSjhLseU7ssKBCBk2Sas9z0q5vIUz/ACf4xmCsE6TjAAAAAElFTkSuQmCC' /> ";
		plyr = plyr + "<img id='das-audio-player-pause"+dasplayer_cont+"' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE20lEQVRoQ+2ZWchVVRTHVSwlrdRS0QZHFJIsNLLhyYiiENTEIEUEtRJThDAnRJSorAiMikYKopwTxAjyId9UsgdLwbkHxZwaqLQ57f+Dez7W3d8+Z+1z75G44II/55y99l57rT2stfY+HTu0OHVscf07XDbg/57BqmagkwwZI4wV7hCGCf2Eq2sG/qrnSeGQsFvYLnwpXGh2AJo14GYpMFeYKvQvqcwJ1f9IeEM4XrJtW/VGDegjCc8J04UrGu281u4vPT8Qlgnfl5XViAHT1MmrQs+ynTn1f6zN5toycssYwEi/JczI6YB1/qnwhfC18K1AGXSNMEi4XbhPGCd0z5Hzds2Qf1IMSTXgKgnbLDwYEXpYZasERu73lE5VB3lThEXC0Eibz1Q2WfjNk5diACO/NaI8yi4XVgtJoxVRBtlPCyuErgEfI8Z7slMMeE9CZgbCj+j7EWGvN0KJ/NtUjxkeHNRnOc0ukuEZwIb9MBCwpzYbZxKVS63WVxW3CSODBo/pe12ekCIDcJUHhR6mMSN/r1C18lkXGLEjmIkf9D1c4NmOigx4V7VnmRaseaJtVcsmb1DxVLuELqbCm3qfU8YAIiyjbYPUQn2/nNdrxeWLJe8FI5Ngx/4getdR3gy8pFrPmJq4yluEIm9z0ZHt8W1zBm6/MMQU4qqXpBhAYkZuYnMbvND7zih7Cnr8UPzjKnjHFKLTAKFOTmwG7lYlNlJGRFM2lxekPAU9fmhANxWcFnhmxB4ki22jmAFLxSVRy4gIS9T0yFPQ48fkr1fho4bBEmIpFRpAQJlo6jCVBDOPPAU9fkz+kyok/8pok15IMQoN2CfuCFPnTr1zCPHIU9Djx+TfpcKdhoELrwt0sSVEwOhlGl2v92gQCXr0FPT4MQMIpuyDjDgv9PZmAJ9r/T8BhTKPPAU9fkw+ff9hGOhhA1z0VqLlDQiXEFOWctTzRtjjV7aEWn4Th270CQ0NiZ1H3gh7/Jj8htwoweJ5I41cnJzcI09Bjx+Tv0GF1u+T5L3oeaHQ955TA1IJ73zqKejxQwM49J8SbCrRLibF4gDJ3DHhBiMxJRp7Cnr80IBw+aDTQMFN5hDENJH/Z8TZgHT674J15Cno8a3oK/VxQOAqJiPOB+RpdZR3HrhJtY4KNqC1W38FxjTLChPKPyWQA813qQZQjySKacyIiMj+4NLqUtIoCSedtxH3dX3Pi3VadCYmB+JQb/MibtvuEWx+UqUx3Gij/EAj9KzeOdT/VNYA6uM+1wQNv9H3A5fACJT/XLg16I/zwMa8UfLuhWgXLiXKmIlJAndEVRDL5pNg5JHL1TvX97mUYkBntd4iPBxIYU+sFF4RirxTUf94mwUCV5R1Waa+uSieIPzbrAG05zKWaQyNgIe3wu2y1M4XdWZ4BCl+inC5a11lVgXlWTreObzUTz5mAm9gPZPVl4jNhay9Xv+5VuFaPXGD3IHeLzwk2Ahr5bBs5nsjnzVIWULhoLKxXxOuSxzt1Gp4m6eE3A0bE9SIAchB+WcF7otYx80QQYpsl30QdZVFwhs1IJN5Y23UWM9E7zJEbvOxwLJsF2FTBTVrQNYPCSC/V/l9NFog8ODX+bUE/SLwm5XA+JXAPuEZ5keperfVq8qA0h1X1eCyAVWNZKNyWn4G/gMTNewxkmHT+QAAAABJRU5ErkJggg==' style='width:38px;height:38px;'/> ";
		plyr = plyr + "<img id='das-audio-player-stop"+dasplayer_cont+"' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC1klEQVRYR8WXW4iNURTHZwYTBsl1JvGCcS1P5FV5QdOgNEWZomimKUTkwYNIkksIuUVJGg+DRGJe1DwMXolmSNPQyKUJI8b995++rXV23/nOd45zzrfr19n722utvdp7n7XWLi2J30YjWgOLYRZMgfJA/Tu/XfAUWuEmfIxjujSG0BxkdsAqGBpDXiLf4CrsD5xKqxblwAi09kEjDIq5sC/2kw8nYCd8DbORzoEZCF8LtjrHtVPUHjGqhR7fWJgD8xC6CxNCVpYBOXYDuuFdIDOeX90JLbICKkN0Jb8UHts534FpTLbBRM/AK8Z74AL8yLAlQ5hfB7tgkicrJxbAG/fdOjCcjw9grqfUwngtfMmwsD+tO3QJlnsT7YwXgS5qiXXgMOMtnvARxlvhT5aLO/EyOodgs6e/N9ihfw7o0ulsBhtBnfNK+J3j4taJ6wwUQ1zTbk6HHrcD5xno3Fx7TUfB5vN/Lu7UR9F5BlXG3in6jXJAEU632wYZnbnOL5+tHmMXjUHFhSo5sBoumwmF1KnwK5+rY0vB7CVMNnbr5MA5WG8+HqO/KWLxTBcyKroex26TsX1awg9hvvm4hP6dAjkg27eN7XY5oGg2znzUP6KjQA7MxK4ypmtv5UA/uLSqiZHQVyAHZPuTsd0vB5TLFT5dK7oD/hFU40lngXZAx6t4kHIEiV/CxP+GiQeiCg5E+Vnp07WNdM5E3INcphpQOmkUlWcqk0xGZ3Fgg3Og2OlYf/3Z8CKpguQAi6vUT6mIhjG+DzYvSKZoJZkWGwuqC5WObXvP4CAchYFaLqKprlA23QY2x0jlOSyED04/LHWqKL0FKrP9ZstyGVPlpKbqVyVWVFmuOmMZPLFG0+XuMQg1g96B+Wj3MFIHvb6xqOJBGXI76LLYGJGNQzouvQ/1xAt9T8R5nKqQ1KNkDWTzOL2C/G7Q1qdtcRxwymHPc3fJdElzep7/BYHro2btotPMAAAAAElFTkSuQmCC' /> ";
		plyr = plyr + "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABuUlEQVRYR+2WPyhFURzH3yNEZouiZFFITGKyENlsBkaLAZPBxshgkdFiMSiDEjJgMRkoG0mJjVj8ic+3rrrivHPuuee+l/KrT+++9+49388999zfvflciStf4vzcnxYoY/bEW5pZTDMDawT3wyjs+0qkEbgitBHeYRJWfCRCCChXl6EPDpNKhBJQ7jU0w2sSiZACyh0HrQ3nCi1wRnI7fLgahBZQ7hBsF0vgjqAaaI0FHkQL0skh7QxcRNf9mM+mWGIb27oc1gohMEDKMGzF0lbZnrCms0MoAWUdQU8U+sxnPTzYJEIKdBF2Ano+qGZgqZgCyloGtWXVI2gtqEEZK+QMKKQW1kFrQqXWPAhPJoPQAsrRmLMREjoFLVTdsj8qC4GvkHI21BUbYA+0MIsqYJr1b7+7zEAlR4xAB1TBLqjbnYMakabXu2wCnYy8GU1jPOSFL7rd9CaUmYDOVrdQXYHT28lSoJfBbW84eurp6eddhS6BWumNZeR5/p/zTudA2xpYZJ9pQ8Alv3fDr/e3q5RNQP+PwRS0QAXcwwYswK1rkGk/m0D8ODWWajC2VR+ZJAI+41uP+Rf4BGwzUSEuJAWzAAAAAElFTkSuQmCC' style='width:32px;height:32px;'/> <input id='ritme"+dasplayer_cont+"' type='range' min='0.5' max='4' step='0.10' value='1' /> ";
		plyr = plyr + "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACMUlEQVRoQ+2XzytFURDHvZBfWVCyZKEkFCkr2SIrkmRhQXaWNhZCyc7KVqRYIEspWwtEbCRWfvwBKAu/4zuaq9ftnXN/znum7q1pntfMOZ/vzJzzrlSe8ielnD8vEZDrDiYdSDoQsQLJCEUsYOR06Q70gnA3MqVlAUkBQ9h3HVagUYADnw94ySKJLJ4OT8VXJcANr0oAHdgdWJFr5m0daEJsG2wt7DmJq72ZKu8wmfboQcAWrBjWCTsMIyIOAabKewm4QkA9B9HnZthnUBFRBdgq7yWAgI9gpRw4Br8iJeDUsDDNsHvm3aG2Ii0geIoTruEbYN9BRPjtQKBFAxziKsTewMo4hw70mSYBxLoBG2boafh5bQJGAOxco/v43KVNQCOALxj6Ep7+9v3k+gwQaAXsgYkf4St90yPwPwigH7IXhn6FL9EmoAbAtwx9B1+rTUAHgA8Y+gS+XZuAWQDPMPQq/Kg2AecAbmHoQfhtTQK6AbvHwO/w1bAnCQH0E5/pmcOX9DZqe0w3XSGSjmGtnLwMPx4EnmL9XqOmdQliE9Zn2di0xxJyJjjvA74Odp9tAbQfvY3Sf2KmTpgE0KwPMPAi/GRQ+Dg64Oxp64RJAH1Ptw9do/T+85VLAbZOeI1pOZKfw8DH2QFbJ7wEhGX/zZNY3D1OEnv8iZZaPF2E1B5iHXCPU3+kGfFIFq0OX7FvmgVIsouPkDi81C2UFXBnE+kzIC4mESBe4hxfo+L61I/QD7/OSzHLe6eAAAAAAElFTkSuQmCC' style='width:32px;height:32px;' /> <input id='volum"+dasplayer_cont+"' type='range' min='0' max='1' step='0.10' value='1' />";

		player.innerHTML = plyr;
		parentTag.appendChild(player);

		var context = new (window.AudioContext || window.webkitAudioContext)(),
			analyser = context.createAnalyser(),
			source,
			started = false, 
			audio = new Audio()
		;   

		audio.src = musicfile || null;
		audio.controls = true;
		audio.loop = false;
		audio.playbackRate = 1;
		
		source = context.createMediaElementSource(audio);
		source.connect(analyser);
		analyser.connect(context.destination);

		document.getElementById("das-audio-player-stop"+dasplayer_cont).onclick = function(){
		    audio.pause();
		    audio.currentTime = 0;
		};

		document.getElementById("das-audio-player-pause"+dasplayer_cont).onclick = function(){
		    audio.pause();
		};

		document.getElementById("das-audio-player-play"+dasplayer_cont).onclick = function(){
		    audio.play();
		    started = true;
		};

		document.getElementById("ritme"+dasplayer_cont).onchange = function(){
		    audio.playbackRate = this.value;
		    audio.pause();
		    if(started){audio.play();}
		};

		document.getElementById("volum"+dasplayer_cont).onchange = function(){
			audio.volume = this.value;
			if(!started){audio.pause();}
		};
	}
})();