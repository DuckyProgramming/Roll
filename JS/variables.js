types={
    style:[
        {
            background:[[190,247,252],[214,249,252]],
            die:[[247,218,233],[243,202,223]],
            point:[198,70,89],pointText:[188,67,85],
            roll:[255,228,236],rollText:[252,124,123],
            item:[221,229,231],no:[167,59,56],
            refresh:[44,100,117],inc:[142,170,184],
            //127,85,45
        },{
            background:[[180,180,180],[200,200,200]],
            die:[[230,230,230],[240,240,240]],
            point:[40,40,40],pointText:[0,0,0],
            roll:[40,40,40],rollText:[0,0,0],
            item:[160,160,160],no:[255,0,0],
            refresh:[80,80,80],inc:[80,80,80],
        }
    ],die:{
        default:[
            {type:1,value:[1],inc:0,multi:1},
            {type:1,value:[2],inc:0,multi:1},
            {type:1,value:[3],inc:0,multi:1},
            {type:1,value:[4],inc:0,multi:1},
            {type:1,value:[5],inc:0,multi:1},
            {type:1,value:[6],inc:0,multi:1},
        ],inc:[
            {type:1,value:[1],inc:1,multi:1},
            {type:1,value:[1],inc:1,multi:1},
            {type:1,value:[1],inc:1,multi:1},
            {type:1,value:[1],inc:1,multi:1},
            {type:1,value:[1],inc:1,multi:1},
            {type:1,value:[1],inc:1,multi:1},
        ],rand50:[
            {type:1,value:[0],inc:0,multi:1},
            {type:1,value:[0],inc:0,multi:1},
            {type:1,value:[0],inc:0,multi:1},
            {type:1,value:[0],inc:0,multi:1},
            {type:1,value:[0],inc:0,multi:1},
            {type:1,value:[0],inc:0,multi:1},
        ],default6:[
            {type:1,value:[6],inc:0,multi:1},
            {type:1,value:[12],inc:0,multi:1},
            {type:1,value:[18],inc:0,multi:1},
            {type:1,value:[24],inc:0,multi:1},
            {type:1,value:[30],inc:0,multi:1},
            {type:1,value:[36],inc:0,multi:1},
        ],
    },
}
stage={scene:'roll',scale:0}
graphics={main:null,style:1}
transition={trigger:false,anim:0,scene:stage.scene}
inputs={press:false,mouse:{x:0,y:0},rel:{x:0,y:0}}