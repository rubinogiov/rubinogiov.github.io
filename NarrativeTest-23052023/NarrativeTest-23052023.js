var storyContent = ﻿{"inkVersion":20,"root":[["^Alone, the giant and their little friend considered their forced companionship. Eventually the little person broke the silence, and pointed north. The Land of Old, that's where they wanted to go. The giant didn't trust the little person. But they were the only one seemingly able to give him new arms. He needed new arms.","\n","^They approached him pin and needle in hand and considered what to give him. Eventually deciding on ","<>","\n",["ev",{"^->":"0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^a mighty dragon arm capable of breathing fire. (+1 attack)",{"->":"$r","var":true},null]}],["ev",{"^->":"0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^a beautiful arm with flowers blooming and gently fluttering in the wind. (pretty)",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"controlling"},1,"+",{"VAR=":"controlling","re":true},"/ev","ev",{"VAR?":"power"},1,"+",{"VAR=":"power","re":true},"/ev",{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"controlling"},1,"-",{"VAR=":"controlling","re":true},"/ev",{"->":"0.g-0"},{"#f":5}],"g-0":["ev",{"VAR?":"power"},2,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^When the day came, they ventured into the wilderness and made short work of the monsters on their way.","\n",{"->":"0.g-0.7"},null]}],[{"->":".^.b"},{"b":["\n","^On sunrise they ventured once again in the wilderness, encountering many a monster and barely surviving their violence.","\n",{"->":"0.g-0.7"},null]}],"nop","\n",["^The giant was learning to accept the little one company. Their instructions had saved them, clearly there was much to learn from the puny little thing. He started to follow them everywhere, imitating all the peculiar little things the little one did. They would collect little sticks, and so did he. They would do a funny little game with the sticks, and he would imitate them. But curiously, fire only sprouted from the little one sticks game. Was he missing something the little one had?","\n","^The little one approached him pin and needle in hand and decided to give him ","<>","\n",["ev",{"^->":"0.g-0.g-1.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^a threatening sword arm, able to cut and slash into enemies' bellies. (+1 attack)",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-0.g-1.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^a little arm, much too little for the giant, but quite the same as the little one's arms.",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"0.g-0.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"controlling"},1,"+",{"VAR=":"controlling","re":true},"/ev","ev",{"VAR?":"power"},1,"+",{"VAR=":"power","re":true},"/ev",{"->":"0.g-2"},{"#f":5}],"c-3":["ev",{"^->":"0.g-0.g-1.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"controlling"},1,"-",{"VAR=":"controlling","re":true},"/ev",{"->":"0.g-2"},{"#f":5}],"#f":5,"#n":"g-1"}],{"#f":5}],"g-2":["ev",{"VAR?":"power"},3,">=","/ev",[{"->":".^.b","c":true},{"b":["\n","^Come morning, they once again advanced through the wilderness, toward the land of old. Its many dangers were no match for the giant's mighty arms and the little one acumen. Yet they did not appear happy. The giant did not understand what made the little one cross, and why they blamed him for it. He had just done what they had told him to do! ","<>","\n",{"->":"0.g-2.7"},null]}],[{"->":".^.b"},{"b":["\n","^The road to the land of old was frought with danger. The two were not fully able to traverse it. Forced to stop and lick their wounds, they rested, and considered. ","<>","\n",{"->":"0.g-2.7"},null]}],"nop","\n",["^This quest was not his own, the giant thought. He enjoyed the little one company, but was all the violence and danger necessary? Was this really him?","\n","^The little one, this time much more impatient, approached the giant with a big, newly developed arm ready to be implanted... but as they approached him, they hesiteted a moment. Until, with a resigned sigh, they eventually gave him ","<>","\n",["ev",{"^->":"0.g-2.g-3.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^a compass arm, capable of pointing toward treasures and points of interest.",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-2.g-3.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^an ordinary giant-sized, arm. No badass weapons or gadget or power. Just an arm. His arm.",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"0.g-2.g-3.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"controlling"},2,"+","/ev",{"VAR=":"controlling","re":true},{"->":"0.g-4"},{"#f":5}],"c-5":["ev",{"^->":"0.g-2.g-3.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"controlling"},2,"-","/ev",{"VAR=":"controlling","re":true},{"->":"0.g-4"},{"#f":5}],"#f":5,"#n":"g-3"}],{"#f":5}],"g-4":["ev",{"VAR?":"controlling"},0,">","/ev",[{"->":".^.b","c":true},{"b":["\n","^The giant knew what was of interest to him: anything other then here. As such, when the arm pointed decisevely away from them, the realization of what they had done downed on the little one. They cried and asked forgiveness... but it was too late. T","<>","\n",{"->":"0.g-4.7"},null]}],[{"->":".^.b"},{"b":["\n","^The giant bear-hugged the little one. He could finally hug people with no danger of slashing or burning or poking them. It felt good. He felt the little one's tears dripping down his back, and got tearful himself. But goodbyes have their own endings, and so t","<>","\n",{"->":"0.g-4.7"},null]}],"nop","\n",["^he giant left the little one behind, to chase their own demons. While he went forward, toward this world he knew so little about. The little one had taught him a lot, but there was much learning left. Learning he would have to do on his own.","\n","^THE END","\n","^Controlling = ","ev",{"VAR?":"controlling"},"out","/ev","\n","^Power = ","ev",{"VAR?":"power"},"out","/ev","\n","end",["done",{"#f":5,"#n":"g-6"}],{"#f":5,"#n":"g-5"}],{"#f":5}]}],"done",{"global decl":["ev",0,{"VAR=":"controlling"},1,{"VAR=":"power"},"/ev","end",null],"#f":1}],"listDefs":{}};