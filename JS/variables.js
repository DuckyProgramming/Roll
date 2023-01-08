types={
    style:[
        {
            background:[[190,247,252],[214,249,252]],
            die:[[247,218,233],[243,202,223]],
            point:[198,70,89],pointText:[188,67,85],
            roll:[255,228,236],rollText:[252,124,123],
            item:[221,229,231],no:[167,59,56],
            refresh:[44,100,117],inc:[142,170,184],
            weight:[82,112,178],void:[43,65,126],
        },{
            background:[[180,180,180],[200,200,200]],
            die:[[230,230,230],[240,240,240]],
            point:[40,40,40],pointText:[0,0,0],
            roll:[40,40,40],rollText:[0,0,0],
            item:[160,160,160],no:[255,0,0],
            refresh:[80,80,80],inc:[80,80,80],
            weight:[100,100,100],void:[0,0,0],
        },{
            background:[[0,0,0],[20,20,20]],
            die:[[100,100,100],[120,120,120]],
            point:[220,220,220],pointText:[200,200,200],
            roll:[220,220,220],rollText:[200,200,200],
            item:[40,40,40],no:[200,100,100],
            refresh:[100,200,100],inc:[100,200,200],
            weight:[200,200,100],void:[100,0,100],
        }
    ],side:[
        {name:'',phase:-1},
        {name:'Numeric',phase:0},
        {name:'Face Multiplier',phase:1},
        {name:'Die Number Multiplier',phase:0},
        {name:'Orthogonal Multiplier',phase:1},
        {name:'Void',phase:4},
        {name:'Lottery',phase:0},
        {name:'Multiplier',phase:2},
        {name:'Wildcard',phase:3},
        {name:'Lottery Multiplier',phase:2},
    ],item:[
        {name:'Locked',desc:'Cannot be\nSelected'},//0
        {name:'Purchased',desc:'Cannot be\nSelected'},
        {name:'Shop',desc:'Unlock More Items\nin the Shop'},
        {name:'Refresh',desc:'Change Items\nin the Shop'},
        {name:'Add to Number',desc:'Increase Numeric\nFace Value'},
        {name:'Single Face Multiplier Face',desc:'Gives Value Equal to Highest\nNumeric Face Times Multiplier'},//5
        {name:'Die Quantity Multiplier Face',desc:'Gives Value Equal to Number\nof Dice Times Multiplier'},
        {name:'Add Incrementor',desc:'Value Increases Every Roll\nNumeric Face Only'},
        {name:'Numeric Face',desc:'Gives Value\nEqual to Number'},
        {name:'Orthogonal Multiplier Face',desc:'Gives Value Equal to Sum\nof Orthogonally Adjacent\nFaces Times Multiplier'},
        {name:'Add Die',desc:'Add Die With\nFaces Below'},//10
        {name:'Add 6 Incrementors',desc:'Add Incrementors to\nAll Faces of Die'},
        {name:'Add Attached Multiplier',desc:'Multiplies Value of\nFace by Multiplier\nNumeric Face Only'},
        {name:'Add Weight',desc:'Weighted Faces are More\nLikely to be Rolled'},
        {name:'Void Face',desc:'Gives No Value.\nWhen Not Rolled, Doubles Value'},
        {name:'Add Multiple Dice',desc:'Add Multiple Dice\nWith Faces Below'},//15
        {name:'Numeric Decrementor Face',desc:'Gives Value Equal to Number\nValue Decreases Every Roll'},
        {name:'Copy Face',desc:'Set All Faces of Die\nEqual to Target Face\nNumeric Face Only'},
        {name:'Numeric Lottery Face',desc:'Has Chance of Giving\nValue Equal to Number'},
        {name:'Full Multiplier Face',desc:'Gives Value Equal to Entire\nRoll Times Multiplier'},
        {name:'Wildcard',desc:'Gives Value Equal to\nHighest Other Face'},//20
        {name:'Full Multiplier Lottery Face',desc:'Has Chance of Giving Value Equal\nto Entire Roll Times Multiplier'},
        {name:'Die Adder Face',desc:'Every 50 Rolls, Adds a\nStandard (1,2,3,4,5,6) Die'},
        {name:'Add Reroller',desc:'Rerolls When Rolled, Giving Higher of Two Rolls'},
        {name:'Add 6 Rerollers',desc:'Add Rerollers to\nAll Faces of Die'},
        
    ],die:{
        default:[
            {type:1,value:[1],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[2],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[3],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[4],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[5],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[6],inc:0,multi:1,weight:1,reroll:0},
        ],one:[
            {type:1,value:[1],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[1],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[1],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[1],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[1],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[1],inc:0,multi:1,weight:1,reroll:0},
        ],hundred:[
            {type:1,value:[100],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[100],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[100],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[100],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[100],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[100],inc:0,multi:1,weight:1,reroll:0},
        ],inc:[
            {type:1,value:[1],inc:1,multi:1,weight:1,reroll:0},
            {type:1,value:[1],inc:1,multi:1,weight:1,reroll:0},
            {type:1,value:[1],inc:1,multi:1,weight:1,reroll:0},
            {type:1,value:[1],inc:1,multi:1,weight:1,reroll:0},
            {type:1,value:[1],inc:1,multi:1,weight:1,reroll:0},
            {type:1,value:[1],inc:1,multi:1,weight:1,reroll:0},
        ],rand:[
            {type:1,value:[0],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[0],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[0],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[0],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[0],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[0],inc:0,multi:1,weight:1,reroll:0},
        ],default2:[
            {type:1,value:[2],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[4],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[6],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[8],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[10],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[12],inc:0,multi:1,weight:1,reroll:0},
        ],default4:[
            {type:1,value:[4],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[8],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[12],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[16],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[20],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[24],inc:0,multi:1,weight:1,reroll:0},
        ],default6:[
            {type:1,value:[6],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[12],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[18],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[24],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[30],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[36],inc:0,multi:1,weight:1,reroll:0},
        ],default10:[
            {type:1,value:[10],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[20],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[30],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[40],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[50],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:[60],inc:0,multi:1,weight:1,reroll:0},
        ],copy:[
            {type:1,value:['?'],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:['#'],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:['?'],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:['?'],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:['?'],inc:0,multi:1,weight:1,reroll:0},
            {type:1,value:['?'],inc:0,multi:1,weight:1,reroll:0},
        ],modded:[
            {type:1,value:[1],inc:0,multi:5,weight:1,reroll:0},
            {type:1,value:[1],inc:0,multi:5,weight:1,reroll:0},
            {type:1,value:[1],inc:0,multi:5,weight:1,reroll:0},
            {type:1,value:[1],inc:0,multi:5,weight:1,reroll:0},
            {type:1,value:[1],inc:0,multi:5,weight:1,reroll:0},
            {type:1,value:[1],inc:0,multi:10,weight:3,reroll:0},
        ],faceMulti:[
            {type:2,value:[2],inc:0,multi:0,weight:1,reroll:0},
            {type:2,value:[2],inc:0,multi:0,weight:1,reroll:0},
            {type:2,value:[3],inc:0,multi:0,weight:1,reroll:0},
            {type:2,value:[3],inc:0,multi:0,weight:1,reroll:0},
            {type:2,value:[4],inc:0,multi:0,weight:1,reroll:0},
            {type:2,value:[5],inc:0,multi:0,weight:1,reroll:0},
        ],farmer:[
            {type:10,value:[50],inc:0,multi:0,weight:1,reroll:0},
            {type:10,value:[50],inc:0,multi:0,weight:1,reroll:0},
            {type:10,value:[50],inc:0,multi:0,weight:1,reroll:0},
            {type:10,value:[50],inc:0,multi:0,weight:1,reroll:0},
            {type:10,value:[50],inc:0,multi:0,weight:1,reroll:0},
            {type:10,value:[50],inc:0,multi:0,weight:1,reroll:0},
        ],
    },
}
stage={scene:'roll',scale:0}
graphics={main:null,style:2}
transition={trigger:false,anim:0,scene:stage.scene}
inputs={press:false,mouse:{x:0,y:0},rel:{x:0,y:0}}