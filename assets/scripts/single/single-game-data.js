// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var AV = require('leancloud-storage');

cc.Class({
    extends: cc.Component,

    properties: {
        questions: null,
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        cc.game.addPersistRootNode(this.node);
    },

    start () {

    },

    // CUSTOM METHODS
    getQuestions () {
        var self = this;
        AV.Cloud.rpc('getSingleGameData')
        .then(function(questions) {
            self.questions = questions;
            cc.director.loadScene('single-game-play');
        })
        .catch(function(err) {
            console.error(err);
        });
    }
});
