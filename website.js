const moods=document.querySelectorAll('.btn')
function advisor(){
    moods.forEach(b =>{
        b.addEventListener('click',() =>{
            const id=b.id
            document.getElementById('solutions').style.backgroundColor='DarkBlue';
            document.getElementById('solutions').style.border='2px solid white';
            document.getElementById('solutions').style.color='white';
            document.getElementById('solutions').style.textAlign='Center';
            switch(id){
                case 'happy':
                    document.getElementById('solutions').innerHTML=
                    "<h3 style='font-family:Lucida Handwriting,cursive'>It's great that you're happy</h3>"+
                    "Engage yourself in any important or likable activity to gain result to maximum productivity";
                    break;
                case 'sad':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Sad... </h3>'+
                    "Let yourself cry if it comes — it's a real release, not weakness <br>"+
                    "Put on music that matches your mood first, then gradually shift to something warmer <br>"+
                    'Text or call someone who makes you feel safe, even just to say "having a rough day" <br>'+
                    'Step outside for sunlight or fresh air, even for 5 minutes';
                    break
                case 'anx':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Anxious...</h3>'+
                    "Box breathing: inhale 4 counts, hold 4, exhale 4, hold 4 — repeat <br>"+
                    "Name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, 1 you taste (grounding) <br>"+
                    'Splash cold water on your face or hold an ice cube — it shifts your nervous system quickly <br>'+
                    'Move your body — pacing, stretching, a short walk';
                    break
                case 'disg':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Disgusting...</h3>'+
                    "Wash your hands or face, or shower if possible — sometimes the feeling is partly physical <br>"+
                    "Change into fresh clothes <br>"+
                    'Open a window or step into fresh air <br>'+
                    'Do something with a pleasant smell — tea, citrus, a candle';
                    break 
                case 'angry':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Angry...</h3>'+
                    "Physical release: fast walk, punching a pillow, shaking out your hands, jumping jacks <br>"+
                    "Write it all out unfiltered, then tear up or delete the page <br>"+
                    'Growl, yell into a pillow, or make noise somewhere private <br>'+
                    'Cold water on wrists or face to bring your body temperature and heart rate down';
                    break
                case 'knot':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Experiencing Knots in Stomach...</h3>'+
                    "Slow diaphragmatic breathing — hand on belly, feel it rise and fall<br>"+
                    "Gentle self-massage on the stomach in circular motions <br>"+
                    "Child's pose or gentle forward-fold stretch <br>"+
                    'Warm compress or hot water bottle on your abdomen';
                    break
                case 'nervous':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Nervous...</h3>'+
                    'Shake out your hands and arms for 10-15 seconds — literally "shake it off" <br>'+
                    "Hum or sing something — it activates the vagus nerve and calms you <br>"+
                    "Prepare or rehearse one small piece of what's making you nervous, so you feel more in control <br>"+
                    'Slow your exhale longer than your inhale ';
                    break
                case 'over':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Are you Overthinking...</h3>'+
                    'Brain dump: write every thought down without editing, just to get it out of your head <br>'+
                    'Ask yourself: "Is this something I can act on right now?" If not, note it, set it aside, and focus on your prime goal. <br>'+
                    "Switch environments — moving to another room or outside can break the loop <br>"+
                    'Do something with your hands (engaging) to interrupt the mental loop ';
                    break
            }
        })
    })
}
advisor();
